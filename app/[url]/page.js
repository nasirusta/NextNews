import { Breadcrumbs, NewsDetalCard } from "@/components";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col relative my-2">
      <Breadcrumbs
        links={[
          { name: "Gündem", url: "/kategori/gundem" },
          {
            name: "Bakan Özhaseki: Önceliğimiz afet bölgesindeki çalışmalar",
            url: "/",
          },
        ]}
      />
      <div className="container mx-auto h-full">
        <div className="w-full flex gap-4">
          <div className="w-8/12 block shadow border bg-white">
            <NewsDetalCard />
          </div>
          <div className="w-4/12 h-full">
            <div className="w-full relative h-[600px]">
              <Image
                unoptimized
                src={"/img/news/reklam.jpg"}
                alt={"asc"}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
