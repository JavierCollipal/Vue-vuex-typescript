<template>
  <div class="home">
    <h1 class="text-center text-muted" v-text="appName"></h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
@Component
export default class Home extends Vue {
  @State("appName") appName!: string;
}
</script>
