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
      <div className="flex justify-center">
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download="Ahmet AYDIN.pdf"
            className="btn-primary bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
