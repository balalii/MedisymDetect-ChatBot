import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import "./bootstrap";
import "../css/app.css";
import ThemeProvider from "./Provider/ThemeProvider";
const appName = import.meta.env.VITE_APP_NAME || "MedisymDetect";

// Remove the second declaration of useThemeStore
// const theme = useThemeStore((state) => state.theme);

createInertiaApp({
    title: (title) => `${title} ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        // color: "#D1FF66",
        color: "#0000",
    },
});
