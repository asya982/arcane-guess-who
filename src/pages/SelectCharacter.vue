<script setup>
import { RouterLink } from 'vue-router';
import { RoutePaths } from '../constants/routes';
</script>

<template>
  <h1>Select Character Page</h1>
  <RouterLink :to="RoutePaths.GAME">Start Game</RouterLink>
</template>
