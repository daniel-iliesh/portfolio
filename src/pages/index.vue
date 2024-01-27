<template>
  <v-row class="align-center h-100">
    <v-col
      class="markdown"
      v-html="userResume"
    ></v-col>
    <v-col>Second column for some image or other shit</v-col>
  </v-row>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { marked } from 'marked';

const userResume = ref("");

onMounted(() => {
  fetch('https://raw.githubusercontent.com/RocketChamp/RocketChamp/main/README.md').then(response => {
    if (response?.status == 200) {
      response.text().then(text => {
        parseText(text);
      })
    }
  })
})

async function parseText(text: string) {
  userResume.value = await marked.parse(text);
}

</script>
  