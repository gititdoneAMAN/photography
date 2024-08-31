"use client";
import React, { Suspense, useEffect, useState } from "react";
import Carousel from "./Carousel";
import { getImageURL } from "../actions/FetchImages";
import HeroImageData from "../helpers/HeroImageData";
const DisplayImgCard = React.lazy(() => import("./DisplayImgCard"));
const HeroImageRenderer = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  return (
    <div>
      {showCarousel ? (
        <Carousel ImageData={HeroImageData} setShowCarousel={setShowCarousel} />
      ) : (
        <div className="relative md:px-5 md:pb-5 pt-[3.5rem] md:pt-[7.5rem] px-2 pb-2 flex items-center justify-center">
          <div className="columns-1 md:columns-3 gap-4 space-y-4">
            {HeroImageData.map((img, index) => (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center">
                    Loading...
                  </div>
                }
                key={index}
              >
                <DisplayImgCard img={img} setShowCarousel={setShowCarousel} />
              </Suspense>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroImageRenderer;
