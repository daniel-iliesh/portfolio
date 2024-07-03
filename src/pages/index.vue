<template>
    <div class="markdown-body">
        <img
            :src="userDataStore.user.avatar_url"
            alt="Avatar"
        />
    </div>
    <div v-html="userDataStore.userbio"></div>
</template>

<script
    lang="ts"
    setup
>
import { useUserDatatore } from "@/store/userStore";
import { onMounted } from "vue";

const userDataStore = useUserDatatore()

onMounted(() => {
    userDataStore.fetchUserData()
    userDataStore.fetchUserReadme()
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
