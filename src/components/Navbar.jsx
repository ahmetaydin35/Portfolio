import { useEffect, useState } from "react";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { nav, profile } from "../data";
import { cn } from "../lib/utils";

const Navbar = () => {
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="align-element flex items-center justify-between py-4">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
          Ahmet Aydın<span className="text-amber">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200",
                active === href ? "text-amber" : "text-mist hover:text-white"
              )}
            >
              {text}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-md border border-white/20 px-4 text-sm font-medium text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenuAlt4 className="h-6 w-6" />}
        </button>
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
                  "border-b border-white/5 py-3 font-mono text-sm uppercase tracking-[0.18em]",
                  active === href ? "text-amber" : "text-mist"
                )}
              >
                {text}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-sm uppercase tracking-[0.18em] text-white"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
