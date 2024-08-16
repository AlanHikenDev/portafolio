<template>
  <div class="p-2 m-4 rounded border-2 border-rose-500">
    <h1>hola</h1>
    <p>soy un parrafo</p>
    <p>{{ $t('welcome') }}</p>
  </div>
  <div class=" ">
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="setLocale('en')">en</button>
    <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="setLocale('es')">es</button>
  </div>
</template>
<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
