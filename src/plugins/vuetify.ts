/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const customDark = {
  dark: false,
  colors: {
    background: "#0E0E0E",
    surface: "#151515",
    primary: "#9165F2",
    secondary: "#F0873F",
    error: "#CF6679",
    info: "#1065B9",
    success: "#0D9D33",
    warning: "#FBA800",
  },
  variables: {},
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "customDark",
    themes: {
      customDark,
    },
  },
  defaults: {
    VTextField: {
      variant: "outlined",
    },
    VTextarea: {
      variant: "outlined",
    },
  },
});
