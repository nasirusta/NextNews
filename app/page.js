import { BreakingNews } from "@/components";

const page = async () => {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto h-full">
        <div className="w-full flex">
          <div className="w-8/12">
            <BreakingNews />
          </div>
          <div className="w-4/12">asdd</div>
        </div>
      </div>
    </div>
  );
};

export default page;
