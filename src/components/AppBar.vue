<template>
    <v-app-bar class="border-b-thin">
        <template v-slot:prepend>
            <v-app-bar-nav-icon
                @click="store.toggleDrawer()"
            ></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
            {{ route.path }}
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <SearchField />
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useAppStore();
</script>
