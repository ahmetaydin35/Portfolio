import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { projects } from "../data";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="align-element">
        <SectionHeader index="Sheet 05" title="Earlier & personal work" note="2022 – 2024" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ id, img, url, github, title, stack }) => (
            <article
              key={id}
              className="group border border-hairline bg-white transition-colors duration-300 hover:border-blueprint"
            >
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={title}>
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="aspect-video w-full border-b border-hairline object-cover object-top"
                />
              </a>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tight">{title}</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} on GitHub`}
                    >
                      <FaGithub className="h-4 w-4 text-pen transition-colors duration-200 hover:text-ink" />
                    </a>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${title}`}
                    >
                      <HiOutlineArrowUpRight className="h-4 w-4 text-pen transition-colors duration-200 hover:text-ink" />
                    </a>
                  </div>
                </div>
                <p className="mt-1 font-mono text-xs text-pen">{stack}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
