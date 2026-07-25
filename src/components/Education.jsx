import { education, honours, languages } from "../data";
import SectionHeader from "./SectionHeader";

const Education = () => {
  return (
    <section id="education" className="bg-white py-20 md:py-28">
      <div className="align-element">
        <SectionHeader index="Sheet 06" title="Education & honours" />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            {education.map(({ id, degree, school, period, note }) => (
              <article key={id} className="border-b border-hairline py-6 first:pt-0 last:border-b-0">
                <p className="font-mono text-sm text-pen">{period}</p>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{degree}</h3>
                <p className="mt-1 text-pen">
                  {school}
                  {note && <span className="font-mono text-sm"> ({note})</span>}
                </p>
              </article>
            ))}
          </div>
          <div>
            <div className="border border-hairline bg-paper p-7">
              <h3 className="eyebrow text-blueprint">Honours & awards</h3>
              <ul className="mt-5 space-y-4">
                {honours.map(({ id, title, detail }) => (
                  <li key={id}>
                    <p className="font-semibold">{title}</p>
                    <p className="font-mono text-sm text-pen">{detail}</p>
                  </li>
                ))}
              </ul>
              <h3 className="eyebrow mt-8 text-blueprint">Languages</h3>
              <ul className="mt-4 space-y-2">
                {languages.map(({ id, name, level }) => (
                  <li key={id} className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold">{name}</span>
                    <span className="font-mono text-sm text-pen">{level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
