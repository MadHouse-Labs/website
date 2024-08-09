/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
    theme: {
        container: {
            padding: {
                DEFAULT: "0rem",
                sm: "0rem",
                lg: "4rem",
                xl: "12rem",
                "2xl": "20rem",
            },
        },
        extend: {},
    },
    plugins: [],
};
