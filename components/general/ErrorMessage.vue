<template>
    <div v-if="error" class="mt-2 text-xs text-red-600 dark:text-red-400">
        {{ error }}
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['errores','errorkey'])

const error = computed(() => {
    if (props.errores){
          if (props.errores.hasOwnProperty(props.errorkey)) {
            return props.errores[props.errorkey][0];
          }
        }
    return null;
})

</script>

<style scoped>

</style>