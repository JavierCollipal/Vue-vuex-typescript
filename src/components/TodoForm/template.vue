<template>
  <div>
    <b-form inline @submit.prevent="validate">
      <label class="sr-only">Todo</label>
      <b-input
        v-model="todo"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="escribe un todo"
        data-vv-name="todo"
      />
      <b-button variant="primary" type="submit">Añadir todo</b-button>
    </b-form>
  </div>
</template>