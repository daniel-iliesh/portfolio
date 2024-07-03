// Utilities
import { defineStore } from "pinia";
import { useTheme } from "vuetify";

export const useAppStore = defineStore("app", {
  state: () => ({
    showDrawer: false,
    currentTheme:
      localStorage.getItem("currentTheme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  }),
  actions: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    toggleTheme() {
      const theme = useTheme();
      const newTheme = theme.global.name.value === "dark" ? "light" : "dark";
      theme.global.name.value = newTheme;
      this.currentTheme = newTheme;
      localStorage.setItem("currentTheme", newTheme);
    },
    setTheme(themeName: string) {
      const theme = useTheme();
      theme.global.name.value = themeName;
      this.currentTheme = themeName;
      localStorage.setItem("currentTheme", themeName);
    },
  },
});
