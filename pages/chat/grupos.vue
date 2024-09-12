<template>
    <div>
       grupos
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'chatapp',
  middleware: ['sanctum:auth'],
})
</script>

<style scoped>

</style>