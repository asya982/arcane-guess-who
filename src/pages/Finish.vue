<script setup>
import { RouterLink } from 'vue-router';
import { RoutePaths } from '../constants/routes';
</script>

<template>
  <h1>🎉 Finish Page</h1>
  <RouterLink :to="RoutePaths.MAIN">Back to Main</RouterLink>
</template>
