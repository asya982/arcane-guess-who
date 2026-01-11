<script setup>
import { RouterLink } from 'vue-router';
import { RoutePaths } from '../constants/routes';
</script>

<template>
  <h1>Game Page</h1>
  <RouterLink :to="RoutePaths.FINISH">Go to Finish</RouterLink>
</template>
