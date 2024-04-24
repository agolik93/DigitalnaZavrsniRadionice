import { create } from "zustand";

export const useStore = create((set) => ({
  adminState: false,
  adminToogle: () => {
    set((state) => ({ adminState: !state.adminState }));
  },
}));
