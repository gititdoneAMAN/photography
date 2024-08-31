import React, { Suspense } from "react";
import HeroImageRenderer from "./HeroImageRenderer";
const DisplayImgCard = React.lazy(() => import("./DisplayImgCard"));

const Hero = async () => {
  // const imageURL = await getImageURL("hero/10.jpeg");
  // console.log(imageURL);
  // const objectsList = await getObjects();
  // // @ts-ignore
  // console.log(objectsList.Contents[0]?.Key || "undefined");
  return <HeroImageRenderer />;
};

export default Hero;
