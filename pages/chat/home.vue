<template>
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        index login chat app
    </div>
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