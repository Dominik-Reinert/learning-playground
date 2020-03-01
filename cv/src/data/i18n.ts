import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { bigFiveEn, bigFiveDe } from "./big_five";
import { welcomeEn, welcomeDe, welcomeMsgEn, welcomeMsgDe } from "./welcome";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          bigFive: bigFiveEn,
          welcome: welcomeEn,
          welcomeMsg: welcomeMsgEn
        }
      },
      de: {
        translations: {
          bigFive: bigFiveDe,
          welcome: welcomeDe,
          welcomeMsg: welcomeMsgDe
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
