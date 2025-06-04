export const TechBadge = ({ tech }: { tech: string }) => {
  return (
    <div>
      <span className="bg-gray-200 rounded-xl px-2.5 py-0.5 shadow text-xs">
        {tech}
      </span>
    </div>
  );
};
