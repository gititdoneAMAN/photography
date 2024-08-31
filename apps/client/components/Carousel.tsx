"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";

const Carousel = ({
  ImageData,
  setShowCarousel,
}: {
  ImageData: any;
  setShowCarousel: any;
}) => {
  const router = useRouter();
  return (
    <div className="z-[200] fixed inset-0 bg-black bg-opacity-50">
      <div className="w-full h-[100vh] flex items-center justify-center relative">
        <div
          onClick={() => setShowCarousel(false)}
          className="absolute top-2  z-10 right-2 w-10 h-10 rounded-full bg-gray-200 p-1 md:p-3 flex items-center justify-center cursor-pointer"
        >
          <CrossIcon />
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {ImageData.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center p-4 w-full items-center h-full ">
                <img
                  src={img}
                  alt="Carousel Slide"
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;

function CrossIcon() {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="md:size-10 size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </span>
  );
}
