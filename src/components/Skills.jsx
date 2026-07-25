import { skillGroups } from "../data";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 md:py-28">
      <div className="align-element">
        <SectionHeader index="Sheet 04" title="Technical skills" />
        <div className="mt-4">
          {skillGroups.map(({ label, items }) => (
            <div
              key={label}
              className="grid gap-3 border-b border-hairline py-6 last:border-b-0 md:grid-cols-[14rem,1fr] md:gap-10"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint md:pt-2">
                {label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 border border-hairline bg-paper px-3 py-1.5 font-mono text-sm text-ink transition-colors duration-200 hover:border-blueprint"
                  >
                    {Icon && <Icon className="h-4 w-4 text-blueprint" aria-hidden="true" />}
                    {name}
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
