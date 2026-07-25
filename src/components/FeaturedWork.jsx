import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { featured } from "../data";
import SectionHeader from "./SectionHeader";

const FeaturedWork = () => {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="align-element">
        <SectionHeader index="Sheet 02" title="Selected work" note="Two live SaaS products" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featured.map(({ id, index, title, url, urlText, tagline, description, stack }) => (
            <article
              key={id}
              className="group flex flex-col border border-hairline bg-paper p-7 transition-colors duration-300 hover:border-blueprint sm:p-9"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint">
                  {index}
                </span>
                <span className="font-mono text-xs text-pen">Production</span>
              </div>
              <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {title}
              </h3>
              <p className="mt-2 font-medium text-pen">{tagline}</p>
              <p className="mt-5 leading-relaxed text-pen">{description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="border border-hairline bg-white px-2.5 py-1 font-mono text-xs text-pen"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 self-start pt-8 font-mono text-sm text-blueprint underline-offset-4 hover:underline"
              >
                {urlText}
                <HiOutlineArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedWork;
