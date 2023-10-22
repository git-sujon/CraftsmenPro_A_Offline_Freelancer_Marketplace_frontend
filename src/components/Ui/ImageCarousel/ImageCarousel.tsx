import React from "react";
import { Carousel } from "antd";
import Image from "next/image";



const ImageCarousel = ({ images }:{images:string[]}) => {
  //   const onChange = (currentSlide: number) => {
  //     console.log(currentSlide);
  //   };

  return (
    <Carousel autoplay>
      {images?.map((image, _idx) => (
        <div key={_idx}  >
          <Image src={image} width={900} height={400} alt=""      />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
