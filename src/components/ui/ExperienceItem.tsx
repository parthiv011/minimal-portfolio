import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  heading: string;
  subheading: string;
  points: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExperienceItem = ({
  heading,
  subheading,
  points,
  isExpanded,
  onToggle,
}: Props) => {
  return (
    <li>
      <div
        className="flex items-center justify-between py-4 cursor-pointer"
        onClick={onToggle}
      >
        <div>
          <h3 className="font-machina text-lg">{heading}</h3>
          <p className="text-sm text-gray-600">{subheading}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent div's onClick
            onToggle();
          }}
          aria-expanded={isExpanded}
          aria-label={
            isExpanded
              ? "Collapse experience details"
              : "Expand experience details"
          }
          className={`bg-gray-200 p-3 rounded-full transition-transform cursor-pointer ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <HiChevronDown className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.ul
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 pb-4 list-disc text-sm text-gray-700 overflow-hidden"
          >
            {points.map((point, idx) => (
              <li key={idx} className="leading-relaxed mb-2">
                {point}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
