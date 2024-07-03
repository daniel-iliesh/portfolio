import { defineStore } from "pinia";
import { getBlogPosts } from "@/services/api";

export const useBlogPostsStore = defineStore("BlogPostsStore", {
  state: () => ({
    blogposts: [],
    loading: false,
  }),
  actions: {
    async fetchBlogPosts() {
      if (Object.keys(this.blogposts).length == 0 && !this.loading) {
        this.loading = true;
        try {
          this.blogposts = await getBlogPosts();
        } catch (error) {
          console.error("Error fetching BlogPosts:", error);
          this.loading = false;
        } finally {
          this.loading = false;
        }
      }
    },
  },
});
