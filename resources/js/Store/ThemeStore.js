import { create } from "zustand";

export const useThemeStore = create((set) => ({
    // Theme state
    theme: window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark",
    setTheme: (theme) => set({ theme }),

    // // Visual state
    // fullScreenProject: null,
    // setFullScreenProject: (project) => {
    //     set({ fullScreenProject });
    //     if (project !== null) {
    //         set({ lastFullscreenProject });
    //     }
    // },
}));
