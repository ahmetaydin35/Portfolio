import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { featured } from "../data";
import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const FeaturedWork = () => {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="align-element">
        <SectionHeader index="Sheet 02" title="Selected work" note="Two live SaaS products" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featured.map(({ id, index, title, url, urlText, tagline, description, stack }) => (
            <Card
              key={id}
              className="group flex flex-col bg-paper transition-shadow duration-300 hover:shadow-md"
            >
              <CardHeader className="p-7 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint">
                    {index}
                  </span>
                  <Badge variant="secondary" className="bg-white font-mono">
                    Production
                  </Badge>
                </div>
                <h3 className="pt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {title}
                </h3>
                <p className="font-medium text-pen">{tagline}</p>
              </CardHeader>
              <CardContent className="px-7 sm:px-8">
                <p className="leading-relaxed text-pen">{description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <li key={item}>
                      <Badge className="font-mono font-normal">{item}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto px-7 pb-7 sm:px-8 sm:pb-8">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-blueprint underline-offset-4 hover:underline"
                >
                  {urlText}
                  <HiOutlineArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedWork;
