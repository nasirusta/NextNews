import ContentNews from "./ContentNews";
import ImageNews from "./ImageNews";
import InfoNews from "./InfoNews";
import MetaNews from "./MetaNews";

const News = () => {
  return (
    <div className="w-full">
      <MetaNews />
      <div className="w-full block">
        <ImageNews />
        <InfoNews />
        <ContentNews />
      </div>
    </div>
  );
};

export default News;
