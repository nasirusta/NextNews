import { Breadcrumbs, AuthorsCard } from "@/components";

const fetchData = async () => {
  try {
    const response = await fetch("http://netewmedya.com/control/api/writers", {
      cache: "no-store",
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Veri alınırken bir hata oluştu:", error);
  }
};

const page = async () => {
  const articles = await fetchData();

  return (
    <div className="w-full h-full flex flex-col relative my-2">
      <Breadcrumbs links={[{ name: "Yazarlar", url: "/kategori/yazarlar" }]} />
      <div className="container mx-auto h-full">
        <div className="w-full h-full block p-6 bg-white">
          <h1 className="w-full mb-6 border-b py-2 text-[22px] font-roboto">Yazarlar</h1>
          <div className="w-full grid grid-cols-2 gap-5">
            {articles &&
              articles.map((row, i) => <AuthorsCard key={i} data={row} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
