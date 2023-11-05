import { create } from "zustand";

export const useThemeStore = create((set) => ({
    // Theme state
    isThemeLight: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false,
    setIsThemeLight: (isThemeLight) => set({ isThemeLight }),

    // // Visual state
    // fullScreenProject: null,
    // setFullScreenProject: (project) => {
    //     set({ fullScreenProject });
    //     if (project !== null) {
    //         set({ lastFullscreenProject });
    //     }
    // },
}));
