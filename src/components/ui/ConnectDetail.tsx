import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

export const ConnectDetail = ({
  item,
  link,
  username,
}: {
  item: string;
  link: string;
  username: string;
}) => {
  return (
    <div className="flex items-center gap-6">
      <p className="font-machina w-full max-w-[6ch]">{item}</p>
      <Link href={link} target="_blank" className="group relative inline-flex text-base">
        <span className="relative inline-flex items-center gap-1">
          <p className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
            {username}
          </p>
          <FiArrowUpRight className="size-4" />
        </span>
      </Link>
    </div>
  );
};
