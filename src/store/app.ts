// Utilities
import { GithubUser } from '@/components/types';
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {} as GithubUser
  }),
  actions: {
    async fetchUser() {
      const response = await fetch('https://api.github.com/users/rocketchamp')
      if (response?.status == 200) {
        response.json().then(theUser => {
          this.user = theUser;
        })
      }
    }
  }
})
