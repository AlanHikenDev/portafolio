<template>
    <div class="container">
      <h1>Portafolio</h1>
      <p>This is experience file</p>
      <p>{{ $t('welcome') }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: '3dlayout',
  })
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  </style>
  