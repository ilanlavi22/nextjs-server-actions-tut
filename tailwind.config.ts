import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require("daisyui/src/theming/themes")["light"],
  //         primary: "teal",
  //         secondary: "teal",
  //         accent: "orange",

  //         ".btn-primary": {
  //           "background-color": "red",
  //           border: "1px solid red",
  //           "&:hover": {
  //             "background-color": "orange",
  //           },
  //           color: "black",
  //         },
  //       },
  //     },
  //   ],
  // },

  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
