import { useEffect, useState } from "react";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { nav, profile, ui } from "../data";
import { useLang } from "../i18n";
import { cn } from "../lib/utils";

const LangSwitch = ({ className }) => {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {["tr", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-xs uppercase transition-colors duration-200",
            lang === code ? "bg-white text-ink" : "text-mist hover:text-white"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 shadow-lg shadow-ink/20 backdrop-blur-md">
      <div className="align-element flex items-center justify-between py-3.5">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
          Ahmet Aydın<span className="text-amber">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                active === href
                  ? "bg-white/10 text-amber"
                  : "text-mist hover:bg-white/5 hover:text-white"
              )}
            >
              {t(text)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangSwitch />
          <a
            href={t(profile.resume)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full border border-white/20 px-4 text-sm font-medium text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
          >
            {t(ui.resume)}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangSwitch />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="text-white"
          >
            {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenuAlt4 className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-in fade-in slide-in-from-top-4 border-t border-white/10 bg-ink duration-300 md:hidden">
          <div className="align-element flex flex-col py-2">
            {nav.map(({ href, text }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-white/5 py-3 text-sm font-medium",
                  active === href ? "text-amber" : "text-mist"
                )}
              >
                {t(text)}
              </a>
            ))}
            <a
              href={t(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-white"
            >
              {t(ui.resume)}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
