import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        colors: {
            primary: "#0067FE",
            secondary: "#E1EDFF",
            bgColorDark: "#1F2123",
            bgColor: "#ffffff",
            gray: "#F1F1F1",
            red: "#FF0000",
            green: "#32D584",
            white: "#ffffff",
            black: "#1F2123",
            blue: "#1E34C2",
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                lg: "3.5rem",
                xl: "4.5rem",
                "2xl": "6.5rem",
            },
        },
    },

    plugins: [],
};
