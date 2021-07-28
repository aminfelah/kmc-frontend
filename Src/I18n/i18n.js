import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
//import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from "../locales/en";
import fr from "../locales/fr";
import de from "../locales/de";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  de,
};

export default I18n;