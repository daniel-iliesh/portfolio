<template>
  <v-sheet
    :width="300"
    class="h-100"
  >
    <v-list-item
      title="_projects"
    ></v-list-item>
    <v-divider />
    <v-list-item
      link
      :title="repo.name"
      v-for="repo in repositories"
      :key="repo.id"
      :to="`${$route.path}/${repo.name}`"
    />
  </v-sheet>
  <router-view>
  </router-view>
</template>
      
<script lang="ts" setup>
import { GithubRepo } from '@/components/types';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
// import { useAppStore } from '@/store/app';

const route = useRoute();
// const appStore = useAppStore();
// -----------
const repositories = ref([] as GithubRepo[]);

onMounted(() => {
  fetch('https://api.github.com/users/RocketChamp/repos').then(response => {
    if (response?.status == 200) {
      response.json().then(repos => {
        repositories.value = repos;
      });
    }
  })
});

function goTo(url: string) {
  window.location.href = url;
}
</script>
      