import Image from "next/image";
import Link from "next/link";
import { limitTextLength } from "@/helper/Helper";

const CardNews = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-2 font-roboto bg-white">
      <div className="relative w-full h-32">
        <Link href="/" replace className="w-full h-full block overflow-hidden">
          <Image unoptimized src={data?.url} alt={data.title} fill />
        </Link>
      </div>
      <div className="w-full h-20 block p-2 transition-all">
        <Link href="/" replace className="w-full h-full transition-all block hover:underline overflow-hidden">
          <h3 className="w-full block font-semibold text-sm">{data.title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default CardNews;
