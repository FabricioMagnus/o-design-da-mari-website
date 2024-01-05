/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CustomSwiperProps {
  children: ReactNode;
  setPage: (page: number) => void;
}

export default function CustomSwiper({ children, setPage }: CustomSwiperProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}" >${index + 1}</span>`;
    },
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={1}
        pagination={pagination}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: any) => {}}
        onSlideChange={(swipper) => {
          setPage(swipper.realIndex + 1);
        }}
        className="mySwiper"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            <Flex
              w={"100%"}
              h={"100%"}
              bgColor={"#D32982"}
              justifyContent={"center"}
            >
              {child}
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
