<template>
    <h1>
        {{ route.params.name }}
    </h1>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>