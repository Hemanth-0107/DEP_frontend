

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { Box, Text, Image } from "@chakra-ui/react";
import { Rating } from "./Cards";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);


export default function Slider({facility,images}) {
  const swiperRef = useRef(null);
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  };

  const handleMouseEnter = () => {
    swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current.autoplay.start();
  };

  return (
    <Box className="swiper-container" w="100%">
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={breakpoints}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box position="relative" h="300px">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                h="100%"
                w="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                padding="2"
                bg="blackAlpha.500"
                color="white"
                opacity={0}
                transition="opacity 0.3s ease-in-out"
                _hover={{ opacity: 1, transition: "opacity 0.3s ease-in-out" }}
              >
                <Box alignItems={'center'} justifyContent={'center'}>
                  <Text fontSize="lg" fontWeight="bold">
                    {facility[index]}
                  </Text>
                  <Text fontSize="sm">Additional info</Text>
                  <Rating rating={5} numReviews={111} />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
