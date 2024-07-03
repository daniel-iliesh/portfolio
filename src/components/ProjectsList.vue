<template>
    <v-list lines="two">
        <v-list-item
            v-for="repo in repos"
            :key="repo.id"
            :title="repo.name"
            :subtitle="repo.description"
            :href="repo.html_url"
        ></v-list-item>
    </v-list>
</template>

<script setup lang="ts">
import { Octokit } from "octokit";

const octokit = new Octokit();

const { data: repos } = await octokit.request(
    "GET /users/daniel-iliesh/repos",
    {
        username: "daniel-iliesh",
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
        },
    },
);

console.log(repos);
</script>
