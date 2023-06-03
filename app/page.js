import { BreakingNews } from "@/components";
import BreakingRight from "@/components/home/BreakingRight";

const page = () => {
  return (
    <div className="w-full h-full py-2">
      <div className="container mx-auto h-full">
        <div className="w-full flex flex-col md:flex-row gap-3 overflow-hidden">
          <div className="w-full md:w-9/12 lg:w-7/12 overflow-hidden">
            <BreakingNews />
          </div>
          <div className="w-full hidden md:block md:w-3/12 lg:w-5/12 bg-white overflow-hidden">
            <BreakingRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
