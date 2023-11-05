import { useThemeStore } from "@/Store/ThemeStore";

export default function ThemeProvider({ children }) {
    const isThemeLight = useThemeStore((state) => state.isThemeLight);

    console.log(isThemeLight);
    if (isThemeLight) {
        import("../../css/theme/light.css");
    } else {
        import("../../css/theme/dark.css");
    }
    return <>{children}</>;
}
