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

  dodajRadionicuForm: false,
  setDodajRadionicuFormOpen: () => {
    set({ dodajRadionicuForm: true });
  },

  urediRadionicuForm: false,
  setUrediRadionicuForm: () => {
    set({ urediRadionicuForm: true });
  },

  setAllFormsClose: () => {
    set({
      prijavaForm: false,
      dodajRadionicuForm: false,
      urediRadionicuForm: false,
      izabraniForm: "",
    });
  },

  izabraniForm: "",
  setIzabraniForm: (e) => {
    set({ izabraniForm: e });
  },

  odabraniPredavac: "",
  setOdabraniPredavac: (e) => {
    set({ odabraniPredavac: e });
  },
}));
