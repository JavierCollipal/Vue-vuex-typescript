import { Module } from "vuex";
import { actions } from "@/store/modules/auth/actions";
import { state } from "@/store/modules/auth/state";
import {mutations } from "@/store/modules/auth/mutations";
import { AuthState } from "@/store/modules/auth/types";
import { RootState } from "@/store/types";

const namespaced: boolean = true;

type  AuthModule = Module<AuthState, RootState>;

export const authModule: AuthModule = {
    namespaced,
    state,
    mutations,
    actions
};
