import { defineStore } from "pinia";
import { getUserData, getUserReadme } from "@/services/api";

export const useUserDatatore = defineStore("UserDatatore", {
  state: () => ({
    user: {} as any,
    userbio: "",
    loading: false,
    bioloading: false
  }),
  actions: {
    async fetchUserData() {
      if (Object.keys(this.user).length == 0 && !this.loading) {
        this.loading = true;
        try {
          this.user = await getUserData();
        } catch (error) {
          console.error("Error fetching UserData:", error);
          this.loading = false;
        } finally {
          this.loading = false;
        }
      }
    },
    async fetchUserReadme() {
      if (this.userbio.length == 0 && !this.bioloading ) {
        
        this.bioloading = true;
        try {
          this.userbio = await getUserReadme();
        } catch (error) {
          console.error("Error fetching UserData:", error);
          this.bioloading = false;
        } finally {
          this.bioloading = false;
        }
      }
    }
  },
});
