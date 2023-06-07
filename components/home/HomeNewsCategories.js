import { NewsCategory } from "components";

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

const HomeNewsCategories = async() => {
  const newsList = await fetchData();

  return (
    <div className="HomeNewsCategories">
      <NewsCategory title={"Gündem"} newsList={newsList} />
      <NewsCategory title={"Dünya"} newsList={newsList} />
      <NewsCategory title={"Ekonomi"} newsList={newsList} />
    </div>
  );
};

export default HomeNewsCategories;
