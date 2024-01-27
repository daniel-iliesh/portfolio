<template>
    <header class="d-flex flex-row align-center">
        <router-link
            to="/"
            class="d-flex flex-row align-center"
        >
            <v-avatar
                :image="appStore.user.avatar_url"
                class="mr-2"
            />
            <div class="text-h6">{{ appStore.user.name }}</div>
        </router-link>
        <v-spacer />
        <v-list-item
            class="navlink"
            to="/projects"
        >_projects
        </v-list-item>
        <v-list-item
            class="navlink"
            to="/articles"
        >_articles
        </v-list-item>
        <v-list-item
            class="navlink"
            to="/blog"
        >_blog
        </v-list-item>
        <v-spacer />
        <v-list-item
            class="navlink"
            to="/contact"
        >_contact
        </v-list-item>
    </header>
</template>
  
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { onMounted } from 'vue';

const appStore = useAppStore();

onMounted(() => {
    appStore.fetchUser();
})
</script>
  
<style scoped>
header {
    height: 70px;
    border-bottom: 2px solid gray;
}

.navlink {
    box-sizing: border-box;
    height: 70px;
}

.navlink.v-list-item--active {
    border-bottom: 2px solid red;
}
</style>