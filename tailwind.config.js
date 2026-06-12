import Colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx"
    , "./presentation/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.lightBlue.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          success: Colors.light.success,
          background: Colors.light.background,
          text: Colors.light.text,
        },
        dark: {
          primary: Colors.darkBlue.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          success: Colors.dark.success,
          background: Colors.dark.background,
          text: Colors.dark.text,
        },
      },
    },
  },
  plugins: [],
};