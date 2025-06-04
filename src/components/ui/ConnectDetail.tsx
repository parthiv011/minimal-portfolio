import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

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
    <div className="flex gap-6 items-center">
      <p className="max-w-[6ch] w-full font-machina">{item}</p>
      <Link
        href={link}
        target="_blank"
        className="inline-flex text-base group relative"
      >
        <span className="inline-flex items-center gap-1 relative">
          <p className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
            {username}
          </p>
          <FiArrowUpRight className="size-4" />
        </span>
      </Link>
    </div>
  );
};
