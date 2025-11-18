import { experiences } from '@/utils/experience';
import { ExperienceListGroup } from '../ui/ExperienceListGroup';

export default function Experiences() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Experiences #</h2>
      <ExperienceListGroup experiences={experiences} />
    </div>
  );
}
