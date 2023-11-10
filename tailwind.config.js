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
            primary: "#267CFA",
            secondary: "#1C1B1D",
            bgColor: "#121112",
            gray: "#413F44",
            red: "#FF0000",
            green: "#267CFA",
            white: "#ffffff",
            black: "#000000",
            blue: "#1E34C2",
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
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
