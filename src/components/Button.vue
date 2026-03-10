<script setup lang="ts">
defineProps<{
    title: string
    customStyle?: string
}>()
const emit = defineEmits(['click'])
</script>

<template>
    <div class="common-button" :style="customStyle" @click="emit('click')">
        {{ title }}
    </div>
</template>