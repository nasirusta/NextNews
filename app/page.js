import { BreakingNews } from "@/components";
import Authors from "@/components/home/Authors";
import BreakingRight from "@/components/home/BreakingRight";
import HomeNewsCategories from "@/components/home/HomeNewsCategories";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col relative my-2">
      <div className="container mx-auto h-full">
        <Authors />
        <div className="w-full flex flex-col md:flex-row gap-3 overflow-hidden">
          <div className="w-full md:w-9/12 lg:w-7/12 overflow-hidden">
            <BreakingNews />
          </div>
          <div className="w-full hidden md:block md:w-3/12 lg:w-5/12 bg-white overflow-hidden">
            <BreakingRight />
          </div>
        </div>
        <HomeNewsCategories />
      </div>
    </div>
  );
};

export default page;
