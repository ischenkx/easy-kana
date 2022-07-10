<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div id="content-container">
    <RouterView />
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  background-color: #212121;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#content-container {
  flex-grow: 1;
}
</style>