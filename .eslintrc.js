module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    // Ajoute ici des règles personnalisées si besoin
  },
  globals: {
    tarteaucitron: "readonly",
    google: "readonly",
    WebFont: "readonly",
    fbq: "readonly",
    gtag: "readonly",
    dataLayer: "readonly",
    ATInternet: "readonly",
    amplitude: "readonly",
    firebase: "readonly",
    ga: "readonly",
    _gaq: "readonly",
    Piwik: "readonly",
    Matomo: "readonly",
    YAHOO: "readonly",
    posthog: "readonly",
    obApi: "readonly",
    vgo: "readonly",
    rdt: "readonly",
    MIXPANEL_CUSTOM_LIB_URL: "readonly",
    ttd_dom_ready: "readonly",
    TTDUniversalPixelApi: "readonly",
    EA_push: "readonly",
    woopra: "readonly",
    mt: "readonly",
    IN: "readonly",
    clicky: "readonly",
    twttr: "readonly",
    Shareaholic: "readonly",
    stLight: "readonly",
    stButtons: "readonly",
    PCWidget: "readonly",
    intercomChatEnable: "readonly",
    intercomChatDisable: "readonly"
  }
};