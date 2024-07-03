<template>
    <v-container>
        <v-row>
            <v-col
                v-for="repo in projectStore.projects"
                :key="repo.id"
                class="d-flex justify-stretch"
            >
                <ProjectCard :repo="repo" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script
    setup
    lang="ts"
>
import { onMounted } from "vue";
import { useProjectStore } from "@/store/projectStore";

const projectStore = useProjectStore();

onMounted(() => {
    projectStore.fetchProjects()
})

</script>
