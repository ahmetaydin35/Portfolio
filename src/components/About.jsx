import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a software developer passionate about technology, always open
            to learning, and creative. I constantly research new technologies
            and approaches to find the best solutions and perfect my projects. I
            approach my work with great enthusiasm and see each new project as
            an opportunity to expand my knowledge and skills.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
