import {Component, Vue} from 'vue-property-decorator';
import {Action} from 'vuex-class';
import Template from './template.vue';

@Component({
    mixins: [Template]
})
export default class TodoForm extends Vue {
    public todo!: string;

    @Action('addTodo', {namespace: 'todoModule'})
    addTodo!: Function;


    constructor() {
        //super para heredar todo lo del constructor padre
        super();
        this.todo = '';
    }

    async validate() {
        //cuando solucione la lo de vee validate programo como la gente esto
        this.addTodo(this.todo)

    }

    submitTodo(todo: string) {
        this.addTodo(todo).then(() => {
            this.todo = '';
        })
    }
}