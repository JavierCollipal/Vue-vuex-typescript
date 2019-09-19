//Las actions estan encargadas de buscar informacion sobre nuestro state en la api,
//Cuando una request esta completada, esta mutara a nuestro state,
//dependiendo la accion requerida. 

import Vue from 'vue';
import { ActionContext, ActionTree } from 'vuex';
import { TodoState, Todo } from '@/store/modules/todo/types'
import { RootState } from '@/store/types';
import { AxiosResponse } from 'axios';
//este tipo define el contexto de nuestra action, en este caso el state Todo


type TodoActionContext = ActionContext<TodoState, RootState>;

//la definicion de un ActionTree, actionTree es necesario para nuestra const actions
//En este caso ActionTree esta siendo creado en base a nuestro TodoState
type TodoActionTree = ActionTree<TodoState, RootState>;

//const actions encargada de hacer request a la api y luego mutar nuestro state en base
// a la accion realizada
export const actions: TodoActionTree = {
    //context.commit hace mutaciones en el objecto
    //context.dispatch hace uso de nuestras actions
    async fetchData(context: TodoActionContext) {
        try {
            const response: AxiosResponse = await Vue.axios({
                url: '/todos'
            })
            const payload: Todo[] = response && response.data;
            context.commit('todosLoaded', payload);
        } catch (error) {
            context.commit('todosError', error.message)
        } finally {
            console.log('request finalizada')
        }
    },

    async addTodo(context: TodoActionContext, todo: string) {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/todos',
                data: {
                    id: Date.now(),
                    text: todo,
                    done: false
                }
            });
            if (response && response.data) {
                context.dispatch('fetchData');
            }
        } catch (error) {
            context.commit('todosError', error.message)
        } finally {
            console.log('todo añadido')
        }
    },

    async updateTodoStatus(context: TodoActionContext, todo: Todo) {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'PUT',
                url: `/todos/${todo.id}`,
                data: {
                    id: todo.id,
                    text: todo.text,
                    done: !todo.done
                },
            });
            if (response && response.data) {
                context.dispatch('fetchData');
            }
        } catch (error) {
            context.commit('todoError', error.message);
        } finally {
            console.log('todo actualizado')
        }
    },

    async deleteTodo(context: TodoActionContext, todo: Todo) {
        try {
            const { data } = await Vue.axios({
                method: 'DELETE',
                url: `/todos/${todo.id}`
            });
            if (data) {
                context.dispatch('fetchData');
            }
        } catch (error) {
            context.commit('todosError', error.message)
        } finally {
            console.log('todo removido');
        }
    }
}