"use client";
import Image from "next/image";
import Link from "next/link";

const AuthorsCard = ({ data }) => {
  return (
    <div className="w-full flex border border-black border-opacity-20 shadow font-roboto">
      <div className="relative h-28 w-32">
        <Link href={`/yazar/${data.url}`} replace>
          <Image
            unoptimized
            priority={false}
            className="object-cover object-left-top border brightness-125 p-1
            drop-shadow-lg border-black border-opacity-20"
            src={data.resim}
            alt={data.yazar}
            fill
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col p-4 bg-gray-100">
        <div className="w-full text-lg font-semibold text-gray-500 overflow-hidden">
          <Link href={`/yazar/${data.url}`} replace>
            {data.yazar}
          </Link>
        </div>
        <div className="w-full font-semibold text-black text-opacity-70 overflow-hidden">
          <Link href={`/yazi/${data.data[0].url}`} replace>
            {data?.data[0]?.baslik}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorsCard;
