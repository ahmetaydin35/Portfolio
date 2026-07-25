import { useState } from "react";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { nav, profile } from "../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
              className="font-mono text-xs uppercase tracking-[0.18em] text-mist transition-colors duration-200 hover:text-white"
            >
              {text}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-amber hover:text-amber"
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
        <nav className="border-t border-white/10 bg-ink md:hidden">
          <div className="align-element flex flex-col py-2">
            {nav.map(({ href, text }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-mono text-sm uppercase tracking-[0.18em] text-mist"
              >
                {text}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-sm uppercase tracking-[0.18em] text-amber"
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
