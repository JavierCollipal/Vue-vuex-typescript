import { Component, Inject, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import Template from './template.vue';
import { Validator } from 'vee-validate';
@Component({
    mixins: [Template]
})
export default class TodoForm extends Vue {
    public todo!: string;

    @Action('addTodo', { namespace: 'todoModdule' })
    addTodo!: Function;

    @Inject('$validator')
    $validator!: Validator;

    constructor() {
        //super para heredar todo lo del constructor padre
        super();
        this.todo = '';
    }

    async validate() {
        const Validator = await this.$validator.validateAll();
        if (Validator) {
            this.addTodo(this.todo)
        }
    }

    submitTodo(todo: string) {
        this.addTodo(todo).then(() => {
            this.todo = '';
        })
    }
}