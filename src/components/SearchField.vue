<template>
    <div>
        <!-- Only show the icon on mobile -->
        <v-btn
            v-if="isMobile"
            icon
            @click="dialog = true"
            class="d-inline-flex"
        >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <!-- Show the autocomplete field on larger screens -->
        <v-autocomplete
            v-else
            :items="projectStore.projects"
            class="mr-2"
            min-width="200px"
            density="compact"
            menu-icon=""
            placeholder="Search projects"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 350px"
            variant="outlined"
            auto-select-first
            hide-details
            item-props
            return-object
            :loading="projectStore.loading"
        >
            <template #item="{ item }">
                <v-list-item
                    :key="item.id"
                    :title="item.name"
                    :subtitle="item.description"
                    :prepend-avatar="item.favimage"
                    :to="`projects/${item.name}`"
                ></v-list-item>
            </template>
        </v-autocomplete>

        <!-- Dialog to show the autocomplete field on mobile -->
        <v-dialog v-model="dialog" width="80%">
            <v-card>
                <v-card-title>
                    <span class="headline">Search projects</span>
                </v-card-title>
                <v-card-text>
                    <v-autocomplete
                        :items="projectStore.projects"
                        density="compact"
                        menu-icon=""
                        placeholder="Search projects"
                        prepend-inner-icon="mdi-magnify"
                        variant="outlined"
                        auto-select-first
                        hide-details
                        item-props
                        return-object
                        :loading="projectStore.loading"
                    >
                        <template #item="{ item }">
                            <v-list-item
                                :key="item.id"
                                :title="item.name"
                                :subtitle="item.description"
                                :prepend-avatar="item.favimage"
                                :to="`projects/${item.name}`"
                            ></v-list-item>
                        </template>
                    </v-autocomplete>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useDisplay } from "vuetify";
import { useProjectStore } from "@/store/projectStore";

const { smAndDown } = useDisplay();
const isMobile = computed(() => smAndDown.value);
const dialog = ref(false);

const projectStore = useProjectStore();

onMounted(() => {
    projectStore.fetchProjects();
});
</script>
