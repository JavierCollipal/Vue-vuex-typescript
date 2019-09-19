import { Component, Vue } from 'vue-property-decorator';
import TodoList from '@/components/TodoList/component';
import TodoForm from '@/components/TodoForm/component';
import { Action, Getter, State } from 'vuex-class';
import { Todo } from '@/store/modules/todo/types';
import Template from './template.vue';

const namespace: string = 'todoModule';

@Component({
    components: {
        TodoList, TodoForm,
    },
    mixins: [Template]
})
export default class TodoApp extends Vue {

    @Action('fetchData', { namespace })
    fetchData!: Function;
    //si necesitamos todos los todo
    @Getter('todos', { namespace })
    todos!: Todo[];

    //si necesitamos los todos finalizados
    @Getter('done', { namespace })
    done!: Todo[];

    //booleano que verifica si tenemos un error 
    @State('error', { namespace })
    errorLoadingTodos!: boolean;

    //si necesitamos mostrar un mensaje de error
    @State('errorMessage', { namespace })
    errorMessage!: string;
    //cuando la vista carge, va llamar a fetchdata
    mounted() {
        this.fetchData();
    }
}