import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      mainTheme: {
        dark: false,
        colors: {
          background: "#f3f3f3",
          surface: "#ffffff",
          primary: "#1B5F6B",
          secondary: "#49E388",
          error: "#f26f66",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#ffc943",
        },
      },
    },
  },
});
