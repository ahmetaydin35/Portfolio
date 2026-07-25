import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile, titleBlock, ui } from "../data";
import { useLang } from "../i18n";
import { Button } from "./ui/button";

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="home" className="blueprint-grid bg-ink text-white">
      <div className="align-element grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr,24rem] lg:gap-20">
        <article>
          <p className="eyebrow rise text-mist">{t(profile.title)}</p>
          <h1 className="rise rise-delay-1 mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight xs:text-6xl md:text-7xl lg:text-8xl">
            Ahmet
            <br />
            Aydın
          </h1>
          <p className="rise rise-delay-2 mt-8 max-w-xl leading-relaxed text-mist">
            {t(profile.summary)}
          </p>
          <div className="rise rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Button href="#work" size="lg">
              {t(ui.viewWork)}
            </Button>
            <Button
              href={t(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-dark"
              size="lg"
            >
              {t(ui.resume)}
            </Button>
            <div className="flex items-center gap-4 pl-1">
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <HiOutlineMail className="h-6 w-6 text-mist transition-colors duration-200 hover:text-white" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6 text-mist transition-colors duration-200 hover:text-white" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="h-6 w-6 text-mist transition-colors duration-200 hover:text-white" />
              </a>
            </div>
          </div>
        </article>

        {/* Title block — styled after the corner sheet of a technical drawing */}
        <aside className="rise rise-delay-3 self-center">
          <div className="overflow-hidden rounded-xl border border-white/20 bg-ink-2/70 font-mono text-xs shadow-sm">
            <div className="border-b border-white/20 px-4 py-3">
              <span className="uppercase tracking-[0.2em] text-white">
                {t(ui.titleBlockHeading)}
              </span>
            </div>
            {titleBlock.map(({ label, value, links }) => (
              <div
                key={label.en ?? label}
                className="grid grid-cols-[7.5rem,1fr] border-b border-white/10 last:border-b-0"
              >
                <span className="border-r border-white/10 px-4 py-3 uppercase tracking-wider text-mist">
                  {t(label)}
                </span>
                <span className="px-4 py-3 text-white">
                  {links
                    ? links.map((l, i) => (
                        <span key={l.href}>
                          {i > 0 && <span className="text-mist">, </span>}
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-white/30 underline-offset-4 transition-colors duration-200 hover:text-amber"
                          >
                            {l.text}
                          </a>
                        </span>
                      ))
                    : t(value)}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="flex items-center gap-2 text-white">
                <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
                {t(ui.status)}
              </span>
              <span className="text-mist">REV 2026.07</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
export default Hero;
