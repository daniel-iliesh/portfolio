<template>
    <v-app>
        <NavigationView />
        <AppBar />
        <v-row>
            <v-col>
                <DefaultView />
            </v-col>
        </v-row>
    </v-app>
</template>

<script lang="ts" setup>
import NavigationView from "./default/Navigation.vue";
import DefaultView from "./default/View.vue";
</script>
