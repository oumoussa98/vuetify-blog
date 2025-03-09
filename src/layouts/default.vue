<script setup lang="ts">
import AppFooter from "./partials/AppFooter.vue";
import AppNavBar from "./partials/AppNavBar.vue";
</script>

<template>
  <AppNavBar />

  <v-main>
    <router-view />
  </v-main>

  <AppFooter />
</template>
