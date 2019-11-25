import es from "./lang/es.json";
import en from "./lang/en.json";
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "es", // navigator.language.split('-')[0]
  fallbackLocale: "en",
  messages: {
    es,
    en
  }
});

export default i18n;
