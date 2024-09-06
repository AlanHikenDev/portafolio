<template>
<div class="relative">
  <SelectLang></SelectLang>
  <div class="relative">
    <div class="fixed " >
      <slot />
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const localSelected = ref('en')


</script>

<style scoped>

</style>