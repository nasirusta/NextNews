import Image from "next/image";

const ImageNews = () => {
  return (
    <div className="w-full">
    <div className="w-full relative h-96">
      <Image
        unoptimized
        src={"/img/news/haber1.webp"}
        alt={"asc"}
        fill
      />
    </div>
  </div>
  )
}

export default ImageNews