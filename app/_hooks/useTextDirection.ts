import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { Locale, LocaleDirection } from "../types";

export default function useTextDirection(): LocaleDirection {
  const locale = useLocale() as Locale;
  return isRtlLang(locale) ? "rtl" : "ltr";
}
