<template>
<div class="relative">
  
  <SelectLang></SelectLang>
     <NuxtParticles
          id="tsparticles"
          :options="options"
        />
      <slot />
</div>
</template>

<script setup lang="ts">

import { ref, useRuntimeConfig } from '#imports'
import { loadFull } from 'tsparticles'
import { tsParticles } from '@tsparticles/engine'

const { mode } = useRuntimeConfig().public.particles

const show = ref(false)

if(import.meta.client && mode === 'custom') {
  await loadFull(tsParticles)
}

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#000"
    },
    links: {
      color: "#000",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  }
}

</script>

<style scoped>

</style>