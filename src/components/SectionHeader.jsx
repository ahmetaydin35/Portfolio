import { ui } from "../data";
import { useLang } from "../i18n";

const SectionHeader = ({ sheetNo, title, note }) => {
  const { t } = useLang();
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-5">
      <div>
        <p className="eyebrow text-blueprint">
          {t(ui.sheet)} {sheetNo}
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t(title)}
        </h2>
      </div>
      {note && (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-pen">{t(note)}</p>
      )}
    </div>
  );
};
export default SectionHeader;
