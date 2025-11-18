export const TechBadge = ({ tech }: { tech: string }) => {
  return (
    <div>
      <span className="rounded-xl bg-gray-200 px-2.5 py-0.5 text-xs shadow">{tech}</span>
    </div>
  );
};
