<script setup>
import NavMenu from "./components/NavMenu.vue"
</script>

<template>
  <div>
    <router-view />
    <NavMenu />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
