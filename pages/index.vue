<template>
  <div class="container">
    <h1>Portafolio</h1>
    <p>This is my portfolio website.</p>
    <p>{{ $t('welcome') }}</p>
  </div>
</template>

<script setup lang="ts">

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
