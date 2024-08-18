import { create } from "zustand";

export const useTask1Store = create((set) => ({
  visible: false,
  setVisible: (show) =>
    set({
      visible: show,
    }),
  toggleVisibility: () =>
    set((state) => ({
      visible: !state.visible,
    })),
}));
