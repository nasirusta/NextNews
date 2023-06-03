"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const BreakingNews = () => {
  const [dizi, setDizi] = useState([]);
  const [seciliDiziIndex, setSeciliDiziIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=14",
        { cache: "no-store" }
      );
      const data = await response.json();
      setDizi(data);
    } catch (error) {
      console.log("Veri alınırken bir hata oluştu:", error);
    }
  };

  const handleMouseEnter = (index) => {
    setSeciliDiziIndex(index);
  };

  const newsList = (listN) => {
    let content = [];
    for (let i = 0; i < listN.length; i++) {
      const item = listN[i];
      content.push(
        <li
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          className="w-full flex justify-center"
        >
          <Link
            href={item.url}
            title={item.id}
            target="_blank"
            replace
            className={i === i ? "breaking-link" : "breaking-link"}
          >
            {i + 1}
          </Link>
        </li>
      );
    }
    return content;
  };

  const newsListMobile = (listN) => {
    let content = [];
    for (let i = 0; i < listN.length; i++) {
      content.push(
        <li
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          className="breaking-link-mobile"
        ></li>
      );
    }
    return content;
  };

  return (
    <div className="w-full flex flex-col overflow-hidden">
      {dizi[seciliDiziIndex] && (
        <div className="relative w-full h-96">
          <Link href="/aasd" replace className="w-full h-full">
            <Image
              unoptimized
              src={dizi[seciliDiziIndex]?.url}
              alt={dizi[seciliDiziIndex]?.title}
              fill
            />
            {dizi[seciliDiziIndex]?.title}
          </Link>
        </div>
      )}
      {!dizi[seciliDiziIndex] && (
        <SkeletonTheme baseColor="#bfbfbf" highlightColor="#e6e6e6">
          <Skeleton className="w-full h-96" />
          <Skeleton className="w-full h-8" />
        </SkeletonTheme>
      )}
      <div className="w-full block p-2 bg-white">
        <ul className="w-full flex justify-center md:justify-start gap-2 md:gap-1 items-center">
          <Mobile>{newsListMobile(dizi)}</Mobile>
          <Default>{newsList(dizi)}</Default>
        </ul>
      </div>
    </div>
  );
};

export default BreakingNews;
