"use client"

import React from 'react'
import Slider from "react-slick"
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SliderOne = () => {
    
     const isMediumScreen  = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
     const isSmallScreen = useMediaQuery({ maxWidth: 767 })

    const setting= {
        arrow:false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        className:"w-full mx-auto cursor-pointer center-mode"
    }

    if (isMediumScreen) {
        setting.slidesToShow = 1.67;
      } else if (isSmallScreen) {
        setting.slidesToShow = 1;
      }
  return (
    <div>
        <Slider {...setting}>
                <>
                <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/business.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
                </>

                <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/coffe.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/small-business-3.webp"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/man.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/image-business.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>
        </Slider>
    </div>
  )
}

export default SliderOne