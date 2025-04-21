/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Asegúrate de que estas rutas cubren TODOS los lugares donde usas clases de Tailwind.
    // Agrega más patrones si es necesario (ej: "./src/**/*.{js,ts,jsx,tsx}")
  ],
  darkMode: "class", // Correcto, coincide con tu uso de .dark en CSS
  theme: {
    extend: {
      colors: {
        // Estas definiciones usando hsl(var(...)) son correctas para que Tailwind
        // cree clases como bg-background, text-foreground, border-border, etc.
        // que usan tus variables CSS.
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))", // Esto crea la utilidad 'border-border' para el color
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: 'hsl(var(--card))', // Agregadas para consistencia si usas bg-card etc.
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
      },
      borderRadius: { // Si usas la variable --radius para los bordes redondeados
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Puedes extender otras partes del tema aquí si es necesario
    },
  },
  plugins: [
     require("tailwindcss-animate") // Ejemplo si usaras plugins como animate
     // agrega otros plugins aquí si los necesitas
    ],
};