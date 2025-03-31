import { create } from "zustand"
import { persist } from "zustand/middleware"

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      _hasHydrated: false,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true)
      },
    }
  )
)

export default useUserStore
