import { create } from "zustand";

const useSidebarStore = create((set) => ({
  open: true,

  setOpen: (open) => set({ open }),

  toggleSidebar: () =>
    set((state) => ({
      open: !state.open,
    })),
}));

export default useSidebarStore;
