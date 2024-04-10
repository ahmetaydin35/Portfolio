const SkillsCard = ({ icon, title }) => {
  return (
    <article className="flex flex-col items-center text-center">
      <span className="h-16 w-16 text-emerald-500">{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
    </article>
  );
};
export default SkillsCard;
