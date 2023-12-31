import { Locale } from "@/app/types";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslator(locale, "About");
  return {
    title: t("title"),
  };
}

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");

  return (
    <main className="px-6 py-2">
      <h1 className="mb-2 mt-2 text-3xl font-bold text-lime-900">
        {t("title")}
      </h1>
      <p className="mt-2 text-lg">
        {t.rich("content", {
          nextLink: (chunks) => <a href="https://nextjs.org/">{chunks}</a>,
          nextIntlLink: (chunks) => (
            <a href="https://next-intl-docs.vercel.app/">{chunks}</a>
          ),
        })}
      </p>
    </main>
  );
}
