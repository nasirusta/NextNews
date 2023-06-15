"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Link from "next/link";

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

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="slideArrows right-0">
      <SlArrowRight />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="slideArrows left-0">
      <SlArrowLeft />
    </button>
  );
};

const Authors = async () => {
  const articles = await fetchData();

  const settings = {
    customPaging: (i) => {
      return <span></span>;
    },
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Slide = ({ index, data, ...props }) => {
    return (
      <div className="w-full h-full" {...props}>
        <div className="w-full h-full flex gap-2 font-roboto group">
          <Link href={`/yazi/${data.data[0].url}`} replace>
            <div className="relative h-[70px] w-[70px]">
              <Image
                unoptimized
                priority={false}
                className="object-cover border brightness-125 p-1
                drop-shadow-lg rounded-full border-black border-opacity-20"
                src={data.resim}
                alt={data.yazar}
                fill
              />
            </div>
          </Link>
          <div className="flex-1 h-20 flex flex-col justify-center">
            <div className="w-full text-sm font-semibold group-hover:underline overflow-hidden">
              <Link href={`/yazar/${data.url}`} replace>
                {data.yazar}
              </Link>
            </div>
            <div className="w-full text-[13px] font-semibold group-hover:underline overflow-hidden">
              <Link href={`/yazi/${data.data[0].url}`} replace>
                {data?.data[0]?.baslik}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mb-4 pt-3 pb-2 px-7 border shadow bg-white">
      <Slider {...settings}>
        {articles &&
          articles.map((row, i) => <Slide key={i} index={i} data={row} />)}
      </Slider>
    </div>
  );
};

export default Authors;
