"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  return (
    <div className="w-full flex flex-col overflow-hidden">
      {dizi[seciliDiziIndex] && (
        <div className="relative w-full h-96">
          <Image
            unoptimized
            src={dizi[seciliDiziIndex]?.url}
            alt={dizi[seciliDiziIndex]?.title}
            fill
          />
          {dizi[seciliDiziIndex]?.title}
        </div>
      )}
      {!dizi[seciliDiziIndex] && (
        <SkeletonTheme baseColor="#bfbfbf" highlightColor="#e6e6e6">
          <Skeleton className="w-full h-96" />
          <Skeleton className="w-full h-8" />
        </SkeletonTheme>
      )}
      <div className="w-full block p-2 bg-white">
        <ul className="w-full flex items-center gap-2">
          {dizi.map((eleman, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              className="w-full flex justify-center"
            >
              <Link href={"/"} title="a" replace className="breaking-link">
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreakingNews;
