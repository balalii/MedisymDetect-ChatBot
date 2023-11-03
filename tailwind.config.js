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
            // primary: "#D1FF66",
            // secondary: "#1C1B1D",
            // bgColor: "#121112",
            // gray: "#413F44",
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
    },

    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    margin: "auto",
                    width: "100%",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingTop: "2rem",
                    paddingBottom: "3rem",
                    "@screen sm": {
                        // width: '640px',
                        width: "100%",
                    },
                    "@screen md": {
                        // width: '768px',
                        width: "100%",
                        paddingLeft: "3.5rem",
                        paddingRight: "3.5rem",
                    },
                    "@screen lg": {
                        // width: '1280px',
                        width: "100%",
                        paddingLeft: "5rem",
                        paddingRight: "5rem",
                    },
                    "@screen xl": {
                        // width: '1400px',
                        width: "100%",
                    },
                },
            });
        },
    ],
};
