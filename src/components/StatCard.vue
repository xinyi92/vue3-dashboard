<script setup lang="ts">
import type { Ref } from 'vue';

defineProps<{
    title: string
    value: number | Ref<number>
}>()
</script>

<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <p>{{ value }}</p>
    </div>
</template>


<style scoped>
.card{
    padding:20px;
    border:1px solid #eee;
    border-radius:8px;
    width:150px;
}
</style>