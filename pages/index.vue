<template>
  <PureNav></PureNav>
  <div class="container">
      <h1>Welcome </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio deserunt earum ullam soluta dolores </p>
      <p>{{ $t('welcome') }}</p>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'pureteme',
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
