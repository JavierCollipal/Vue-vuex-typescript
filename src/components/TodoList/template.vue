<template>
  <div v-if="todos.length > 0">
    <b-table striped hover :items="todos" :fields="fields">
      <template v-slot:cell(actions)="row">
        <b-button size="sm" @click.prevent="updateTodoStatus(row.item)" class="mr-1">Update</b-button>

        <b-button variant="danger" size="sm" @click.prevent="deleteTodo(row.item)">Delete</b-button>
      </template>
    </b-table>
  </div>
  <div v-else></div>
</template>