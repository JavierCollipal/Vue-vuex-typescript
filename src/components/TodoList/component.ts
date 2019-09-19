import { Component, Prop, Vue } from 'vue-property-decorator';
import { Todo } from '@/store/modules/todo/types';
import { Action } from 'vuex-class';
import Template from './template.vue';

const namespace: string = 'todoModule';
@Component({
    mixins: [Template],
})
export default class TodoList extends Vue {

    @Prop({ type: Array, required: true })
    todos!: Todo[];

    @Action('updateTodoStatus', { namespace })
    updateTodoStatus!: Function;

    @Action('deleteTodo', { namespace })
    deleteTodo!: Function;

    //definicion para b-table de bootstrap-vue
    //las llaves hacen referencia a todo
    public fields: Array<{ key: string, label: string, sortable?: boolean }> = [
        { key: 'text', label: 'Todo', sortable: true },
        { key: 'done', label: 'Estado' },
        { key: 'actions', label: 'Actions' }
    ]
}