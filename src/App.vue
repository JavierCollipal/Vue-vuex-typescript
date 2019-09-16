<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item to="/todos">Todos</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/secret">Secret</b-nav-item>
      </b-nav>
      <h1 class="text-cente text-muted">San isidro Posting</h1>
      <router-view />
    </b-container>
  </div>
</template>
