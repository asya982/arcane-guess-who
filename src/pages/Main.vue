<script setup>
import { RoutePaths } from '../constants/routes';

</script>

<template>
  <h1 >Main Page</h1>
  <RouterLink :to="RoutePaths.SELECT_CHARACTER">New Game</RouterLink>
</template>
