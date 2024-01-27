<template>
    <h2>Hello from Blog pages</h2>
    <ul v-for="(page, index) in pages">
        <router-link :key="index" exact :to="`/blog/${page}`">
            {{ page }}
        </router-link>
    </ul>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue';

const pages = ref(['README', 'world', 'bish', 'please', 'mother'])
</script>
    