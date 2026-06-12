import { Colors } from "./constants/Colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aseguramos que lea nuestros futuros componentes en 'presentation'
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Mapeamos los colores de Expo hacia clases de Tailwind
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          success: Colors.light.success,
          background: Colors.light.background,
          text: Colors.light.text,
          tint: Colors.light.tint,
          icon: Colors.light.icon,
          tabIconDefault: Colors.light.tabIconDefault,
          tabIconSelected: Colors.light.tabIconSelected,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          success: Colors.dark.success,
          background: Colors.dark.background,
          text: Colors.dark.text,
          tint: Colors.dark.tint,
          icon: Colors.dark.icon,
          tabIconDefault: Colors.dark.tabIconDefault,
          tabIconSelected: Colors.dark.tabIconSelected,
        },
      },
    },
  },
  plugins: [],
};