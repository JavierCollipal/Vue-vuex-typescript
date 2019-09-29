<template>
  <div v-if="!errorLoadingTodos">
    <b-row class="my-5"></b-row>
    <todo-form class="mx-auto" />
    <b-row>
      <b-col>
        <h2 class="text-center text-muted">Todos pending</h2>
        <todo-list :todos="todos"></todo-list>
      </b-col>

      <b-col>
        <h2 class="text-center text-muted">Todos finished</h2>
        <todo-list :todos="done" />
      </b-col>
    </b-row>
  </div>
  <div v-else class="alert alert-danger text-center">
    Error cargando los todos
    <p>{{errorMessage}}</p>
  </div>
</template>