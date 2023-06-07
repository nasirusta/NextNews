"use client";
import { CardNews } from "components";
import { useMediaQuery } from "react-responsive";

const NewsCategory = async ({ title, newsList }) => {
  const lg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const md = useMediaQuery({
    query: "(min-width: 768px)",
  });

  let limit = 4;

  if (lg) {
    limit = 4;
  } else if (md) {
    limit = 3;
  }

  const limitedData = newsList.slice(0, limit);

  return (
    <div className="w-full flex flex-col gap-1 items-center">
      <div className="w-full flex gap-4 items-center h-2 bg-red-700">
        <h2 className="text-2xl font-semibold py-4 pr-3 bg-gray-100">
          {title}
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        {limitedData &&
          limitedData.map((row, i) => <CardNews key={i} data={row} />)}
      </div>
    </div>
  );
};

export default NewsCategory;
