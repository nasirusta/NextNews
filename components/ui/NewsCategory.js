import { CardNews } from "components";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=8",
      { cache: "no-store" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Veri alınırken bir hata oluştu:", error);
  }
};

const NewsCategory = async () => {
  const newsList = await fetchData();

  return (
    <div className="w-full flex flex-col gap-1 items-center">
      <div className="w-full flex gap-4 items-center h-2 bg-red-700">
        <h2 className="text-2xl py-4 pr-3 bg-gray-100">Gündem</h2>
      </div>
      <div className="w-full grid grid-cols-4 gap-4 py-4">
        {newsList && newsList.map((row, i) => <CardNews key={i} data={row} />)}
      </div>
    </div>
  );
};

export default NewsCategory;
