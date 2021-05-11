<template lang="pug">
.flex.bg-gray-400
  img(:src="svg")
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  svg: String,
});
</script>

<style scoped>
</style>