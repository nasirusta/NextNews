"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { limitTextLength } from "@/helper/Helper";
import MediaQuery from "react-responsive";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=4",
      { cache: "no-store" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Veri alınırken bir hata oluştu:", error);
  }
};

const NewsRow = ({ data }) => {
  return (
    <div className="w-full group">
      <div className="w-full h-[115px] relative">
        <Link
          href="/"
          replace
          className="w-full h-full rounded-tl-md rounded-tr-md block overflow-hidden"
        >
          <Image
            unoptimized
            src={data?.url}
            alt={data.title}
            className="rounded-tl-md rounded-tr-md"
            fill
          />
        </Link>
      </div>
      <div className="w-full h-16 p-2">
        <Link
          href="/"
          replace
          className="w-full h-full block hover:underline group-hover:underline overflow-hidden"
        >
          <h4 className="w-full py-1 text-sm font-semibold text-black text-opacity-80">
            {limitTextLength(data.title, 45)}
          </h4>
        </Link>
      </div>
      <div className="w-full block p-2 border-t border-red-700 border-opacity-40">
        <Link
          href="/kategori/gundem"
          replace
          className="w-full block font-semibold text-[11px] font-roboto uppercase text-red-700"
        >
          Gündem
        </Link>
      </div>
    </div>
  );
};

const BreakingRight = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const rehydrate = async () => {
      const news = await fetchData();
      setLoading(true);
      const ilkKolonHaberSayisi = 2;
      const ilkKolonHaberler = news.slice(0, ilkKolonHaberSayisi);
      const ikinciKolonHaberler = news.slice(ilkKolonHaberSayisi);

      ReactDOM.hydrate(
        <>
          <div className="w-full h-full flex flex-col gap-3 overflow-hidden">
            {ilkKolonHaberler.map((haber, index) => (
              <NewsRow key={index} data={haber} />
            ))}
          </div>
          <MediaQuery minWidth={1024}>
            <div className="w-full h-full flex flex-col gap-3 overflow-hidden">
              {ikinciKolonHaberler.map((haber, index) => (
                <NewsRow key={index} data={haber} />
              ))}
            </div>
          </MediaQuery>
        </>,
        document.getElementById("breaking-right-container")
      );
    };

    rehydrate();
  }, []);

  return (
    <div
      id="breaking-right-container"
      className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden"
    >
      {!loading && (
        <SkeletonTheme baseColor="#bfbfbf" highlightColor="#e6e6e6">
          <Skeleton className="w-full h-full" />
          <Skeleton className="w-full h-full" />
        </SkeletonTheme>
      )}
    </div>
  );
};

export default BreakingRight;
