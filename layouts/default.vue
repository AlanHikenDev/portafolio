<template>
<div class="container">
  <SelectLang></SelectLang>

  <slot />
</div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const localSelected = ref('en')


</script>

<style scoped>

</style>