import { defineStore } from "pinia";
import { getProjects } from "@/services/api";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [] as any[],
    loading: false,
  }),
  actions: {
    async fetchProjects() {
      if (this.projects.length === 0 && !this.loading) {
        this.loading = true;
        try {
          this.projects = await getProjects();
        } catch (error) {
          console.error("Error fetching projects:", error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
});
