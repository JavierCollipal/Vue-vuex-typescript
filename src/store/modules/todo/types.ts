//este archivo tipos nos permite organizar nuestra estructura de todos
//donde todo es la definicion del objeto a tratar y todoState
//es un conjunto de todos como arreglos y dos variables relacionadas a posibles errores
export interface Todo {
    id: number;
    text: string;
    done: boolean;
}
//a plain object of todos
export interface TodoState {
    todos: Todo[];
    error: boolean;
    errorMessage: string;

}