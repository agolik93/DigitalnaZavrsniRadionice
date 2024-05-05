import { create } from "zustand";

export const useStore = create((set) => ({
  adminState: false,
  adminToggle: () => {
    set((state) => ({ adminState: !state.adminState }));
  },

  handleOpen: false,
  setHandleOpen: (e) => {
    set(() => ({ handleOpen: e }));
  },
}));
