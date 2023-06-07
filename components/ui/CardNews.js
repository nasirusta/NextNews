import Image from "next/image";
import Link from "next/link";
import { limitTextLength } from "@/helper/Helper";

const CardNews = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-2 rounded-lg shadow border font-roboto bg-white">
      <div className="relative w-full h-28 xs:h-24 sm:h-32">
        <Link href="/" replace className="w-full h-full block overflow-hidden">
          <Image
            unoptimized
            src={data?.url}
            alt={data.title}
            className="rounded-tl-lg rounded-tr-lg"
            fill
          />
        </Link>
      </div>
      <div className="w-full h-20 block p-2 transition-all">
        <Link
          href="/"
          replace
          className="w-full h-full transition-all block text-gray-700 hover:text-opacity-75 overflow-hidden"
        >
          <h3 className="w-full block font-semibold text-sm">
            {limitTextLength(data.title, 60)}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default CardNews;
