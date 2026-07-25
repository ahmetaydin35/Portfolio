import { experience } from "../data";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="align-element">
        <SectionHeader index="Sheet 03" title="Experience" note="2022 – Present" />
        <div className="mt-4">
          {experience.map(({ id, role, company, period, place, bullets }) => (
            <article
              key={id}
              className="grid gap-4 border-b border-hairline py-10 last:border-b-0 md:grid-cols-[14rem,1fr] md:gap-10"
            >
              <div className="font-mono text-sm text-pen">
                <p>{period}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em]">{place}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {role}, <span className="text-blueprint">{company}</span>
                </h3>
                <ul className="mt-4 space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-pen">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-blueprint" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
