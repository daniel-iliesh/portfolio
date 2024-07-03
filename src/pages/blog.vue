<template></template>

<script lang="ts" setup>
import { useBlogPostsStore } from "@/store/blogStore";
import { onMounted } from "vue";

const blogPostsStore = useBlogPostsStore();

onMounted(() => {
    blogPostsStore.fetchBlogPosts();
    console.log(blogPostsStore.blogposts);
})
</script>
