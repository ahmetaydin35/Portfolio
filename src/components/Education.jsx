import { education, honours, languages, ui } from "../data";
import { useLang } from "../i18n";
import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "./ui/card";

const Education = () => {
  const { t } = useLang();
  return (
    <section id="education" className="bg-white py-20 md:py-28">
      <div className="align-element">
        <SectionHeader sheetNo="06" title={ui.sections.education.title} />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            {education.map(({ id, degree, school, period, note }) => (
              <article key={id} className="border-b border-hairline py-6 first:pt-0 last:border-b-0">
                <p className="font-mono text-sm text-pen">{period}</p>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{t(degree)}</h3>
                <p className="mt-1 text-pen">
                  {t(school)}
                  {note && <span className="font-mono text-sm"> ({t(note)})</span>}
                </p>
              </article>
            ))}
          </div>
          <Card className="self-start bg-paper">
            <CardContent className="p-7 pt-7">
              <h3 className="eyebrow text-blueprint">{t(ui.honoursHeading)}</h3>
              <ul className="mt-5 space-y-4">
                {honours.map(({ id, title, detail }) => (
                  <li key={id}>
                    <p className="font-semibold">{t(title)}</p>
                    <p className="font-mono text-sm text-pen">{t(detail)}</p>
                  </li>
                ))}
              </ul>
              <h3 className="eyebrow mt-8 text-blueprint">{t(ui.languagesHeading)}</h3>
              <ul className="mt-4 space-y-3">
                {languages.map(({ id, name, level }) => (
                  <li
                    key={id}
                    className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="font-semibold">{t(name)}</span>
                    <span className="text-sm text-pen sm:text-right">{t(level)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Education;
