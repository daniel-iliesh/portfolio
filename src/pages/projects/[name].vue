<template>
    <div v-html="data"></div>
</template>

<script lang="ts" setup>
import { getRepoReadme } from "@/services/api";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { onMounted } from "vue";

const route = useRoute();
const data = ref(null);

onMounted(async () => {
    const res = await getRepoReadme(route.params.name as string);
    data.value = res;
});
</script>

<style>
@import "github-markdown-css/github-markdown.css";
.markdown-body {
    background-color: rgb(var(--v-theme-background));
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>
