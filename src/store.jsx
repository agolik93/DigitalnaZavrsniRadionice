import { create } from "zustand";

export const useStore = create((set) => ({
  adminState: false,
  adminToggle: () => {
    set((state) => ({ adminState: !state.adminState }));
  },

  tezinaFilter: null,
  setTezinaFilter: (newFilter) => {
    set({ tezinaFilter: newFilter });
  },

  temaFilter: null,
  setTemaFilter: (newFilter) => {
    set({ temaFilter: newFilter });
  },

  prijavaForm: false,
  setPrijavaFormOpen: () => {
    set({ prijavaForm: true });
  },
  setPrijavaFormClosed: () => {
    set({ prijavaForm: false });
  },

  izabraniForm: "",
  setIzabraniForm: (e) => {
    set({ izabraniForm: e });
  },
}));
