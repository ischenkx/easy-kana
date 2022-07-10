<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="flex-container">
    <RouterView />
  </div>
</template>

<style>
@import './assets/base.css';

html {
  background-color: #212121;
}

#app {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>