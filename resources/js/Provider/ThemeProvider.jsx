import { useThemeStore } from "@/Store/ThemeStore";
import("../../css/theme/theme.css");

export default function ThemeProvider({ children }) {
    const theme = useThemeStore((state) => state.theme);

    return (
        <div data-theme={theme} className="bg-[var(--background-color)]">
            {children}
        </div>
    );
}
