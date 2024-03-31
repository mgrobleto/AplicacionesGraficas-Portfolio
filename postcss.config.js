module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    nextui:{
      themes:{
        light:{},
        dark:{
          colors: {
            background: "#d9254f",
            foreground: "#49081b",
            primary:{
              foreground: "#49081b"
            }
          }
        },
        extend: {
          colors: {
            pink: {
              50: "#fef2f3",
              100: "#fee5e7",
              200: "#fccfd5",
              300: "#f9a8b3",
              400: "#f5778a",
              500: "#ec4765",
              600: "#d9254f",
              700: "#b71942",
              800: "#99183d",
              900: "#83183a",
              950: "#49081b",
            }
          }
        }
      }
    },
  },
};
