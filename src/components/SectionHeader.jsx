const SectionHeader = ({ index, title, note }) => {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-5">
      <div>
        <p className="eyebrow text-blueprint">{index}</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {note && <p className="font-mono text-xs uppercase tracking-[0.18em] text-pen">{note}</p>}
    </div>
  );
};
export default SectionHeader;
