"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { dataBanner } from "./Banner.data";

export function Slider() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div className="relative px-6 py-0 md:py-5 border border-dashed mb-10 border-slate-500 ">
      <div className="relative w-full overflow-hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <div className="absolute flex">
            {dataBanner.map(({ id, image }) => (
              <SwiperSlide
                key={id}
                className="flex items-center slider-horizontal"
              >
                <Image
                  src={`/banner/${image}`}
                  alt="Partners"
                  width={450}
                  height={180}
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
