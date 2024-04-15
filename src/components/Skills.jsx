import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="py-20 align-element " id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
