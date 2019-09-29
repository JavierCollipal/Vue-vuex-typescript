//Este archivo index indica como debe ser creado un modulo en vuex.
import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { TodoState } from './types';
import { RootState } from '@/store/types';


const namespaced: boolean = true;

//de manera similar a nest, esta const indica la creacion de un modulo de vuex
//en base a las constanstes creadas en los diferentes archivos de todo
export const todoModule: Module<TodoState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};