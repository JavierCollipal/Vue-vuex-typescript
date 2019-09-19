import { TodoState } from "@/store/modules/todo/types";
//Ahora nuestro objeto Todo es vinculado al state de nuestra app
//el state es renderizado por nuestro componente
//el state es un single state tree, un simple objeto que contiene todos los estados
//de nuestra aplicacion
export const state: TodoState = {
    todos: [],
    error: false,
    errorMessage: ''
}