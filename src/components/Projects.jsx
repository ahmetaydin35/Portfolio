import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { projects, ui } from "../data";
import SectionHeader from "./SectionHeader";
import { Card } from "./ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="align-element">
        <SectionHeader
          sheetNo="05"
          title={ui.sections.projects.title}
          note={ui.sections.projects.note}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, img, url, github, title, stack }) => (
            <Card
              key={id}
              className="group overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={title}>
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="aspect-video w-full border-b border-hairline object-cover object-top"
                />
              </a>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} on GitHub`}
                    >
                      <FaGithub className="h-5 w-5 text-pen transition-colors duration-200 hover:text-ink" />
                    </a>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${title}`}
                    >
                      <HiOutlineArrowUpRight className="h-5 w-5 text-pen transition-colors duration-200 hover:text-ink" />
                    </a>
                  </div>
                </div>
                <p className="mt-1.5 font-mono text-sm text-pen">{stack}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
