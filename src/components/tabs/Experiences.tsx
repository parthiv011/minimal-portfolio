import { experiences } from "@/utils/experience";
import { ExperienceListGroup } from "../ui/ExperienceListGroup";

export default function Experiences() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Experiences #</h2>
      <ExperienceListGroup experiences={experiences} />
    </div>
  );
}
