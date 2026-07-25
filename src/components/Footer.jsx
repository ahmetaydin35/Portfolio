import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, ui } from "../data";
import { useLang } from "../i18n";
import { Button } from "./ui/button";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="align-element py-20 md:py-28">
        <p className="eyebrow text-mist">{t(ui.contactEyebrow)}</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
          {t(ui.contactHeading)}
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={`mailto:${profile.email}`} size="lg">
            {profile.email}
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
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-xs text-mist">
          <span>İzmir, Türkiye (UTC+3)</span>
          <span>© 2026 Ahmet Aydın</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
