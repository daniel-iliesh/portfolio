<template>
    <v-navigation-drawer
        rounded
        v-model="store.showDrawer"
    >
        <v-list>
            <v-list-item
                :prepend-avatar="userDataStore.user.avatar_url"
                :subtitle="userDataStore.user.email"
                :title="userDataStore.user.name"
                to="/"
            ></v-list-item>

        </v-list>
        <v-divider></v-divider>
        <v-list
            dense
            nav
        >

            <v-list-item
                prepend-icon="mdi-file-account"
                title="Resume"
                value="resume"
                to="/resume"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-folder"
                title="Projects"
                value="projects"
                to="/projects"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-post"
                title="Blog"
                value="blog"
                to="/blog"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script
    setup
    lang="ts"
>
import { useAppStore } from "@/store/app";
import { useUserDatatore } from "@/store/userStore";
import { onMounted } from "vue";

const store = useAppStore();
const userDataStore = useUserDatatore();

onMounted(() => {
    userDataStore.fetchUserData();
})
</script>
