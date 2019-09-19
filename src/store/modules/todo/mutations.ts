//Para cambiar un estado en vuex es necesario remitir/commitear una mutacion.
//Una mutacion es una funcion que modifica un state, necesaria siempre como primer
//parametro el state a mutar, como segundo parametro podemos añadir un payload.

//Un payload es un parametro que le queremos pasar a esa función y interactuara con esta.

import { MutationTree } from "vuex";
import { Todo, TodoState } from "@/store/modules/todo/types";
//vuex esta esperando una const mutations para funcionar,
//con un MutationTree definido.

//en este tipo definimos un mutationTree en base al TodoState nuestro
type TodoMutationsTree = MutationTree<TodoState>;

//constante mutacion es vinculada al TodoMutationsTree
export const mutations: TodoMutationsTree = {
    //estas funciones estaran presentes en nuestra constate mutacions y vuex
    //con esto ya podemos mutar nuestro state de la app

    //mutations de vuex nos da a entender que el estado es la copia de 
    //un dato manejado por la api , y mutations se encarga de mutar esa copia
    //para nosotros(el frontend).

    //when we request new todos
    todosLoaded(state: TodoState, todos: Todo[]) {
        state.todos = todos;
    },
    //single todo status update
    updateTodoStatus(state: TodoState, payload: Todo) {
        const todo = state.todos.find(t => t.id === payload.id);
        if (todo) {
            todo.done = !todo.done;
        }
    },
    //if we have a todo error
    todosError(state: TodoState, payload: string) {
        state.error = true;
        state.errorMessage = payload;
        state.todos = [];
    }
};