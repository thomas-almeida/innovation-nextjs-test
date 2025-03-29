import { create } from "zustand"
import { persist } from "zustand/middleware"

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore
