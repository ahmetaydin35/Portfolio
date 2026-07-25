import { skillGroups, ui } from "../data";
import { useLang } from "../i18n";
import SectionHeader from "./SectionHeader";
import { Badge } from "./ui/badge";

const Skills = () => {
  const { t } = useLang();
  return (
    <section id="skills" className="bg-white py-20 md:py-28">
      <div className="align-element">
        <SectionHeader sheetNo="04" title={ui.sections.skills.title} />
        <div className="mt-4">
          {skillGroups.map(({ label, items }) => (
            <div
              key={label.en ?? label}
              className="grid gap-3 border-b border-hairline py-6 last:border-b-0 md:grid-cols-[14rem,1fr] md:gap-10"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint md:pt-2">
                {t(label)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map(({ name, icon: Icon }) => (
                  <li key={name.en ?? name}>
                    <Badge className="px-3 py-1.5 text-sm font-normal text-ink hover:border-blueprint">
                      {Icon && <Icon className="h-4 w-4 text-blueprint" aria-hidden="true" />}
                      {t(name)}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
