<template>
  <v-card
    class="mx-auto"
    min-width="344"
    max-width="344"
    :to="`projects/${repo.name}`"
  >
    <v-img height="200px" :src="repo.favimage" cover></v-img>

    <v-card-title>{{ repo.name }}</v-card-title>

    <v-card-subtitle class="text-wrap">{{ repo.description }}</v-card-subtitle>

    <v-spacer></v-spacer>

    <v-card-actions class="d-flex">
      <v-btn
        color="orange-lighten-2"
        text="Explore"
        :href="repo.html_url"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
defineProps({
  repo: {} as any,
});
</script>
