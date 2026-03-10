<script setup lang="ts">
defineProps<{
    title: string
    customStyle?:  string
}>()
</script>

<template>
    <div class="status-badge" :class="title">
        <span>{{ title }}</span>
    </div>
</template>


<style scoped>
.status-badge {
    padding: 5px;
    text-transform: capitalize;
    font-weight: bold;
}
.status-badge.active {
    color: green;
}
.status-badge.inactive {
    color: orangered
}
</style>