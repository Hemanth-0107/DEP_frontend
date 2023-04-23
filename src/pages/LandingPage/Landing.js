import React from 'react'
import Carousel from "./Carousal";
import Statistics from "./Statistics";
import ImageSlider from "./Slider";
import Importance from './Importance';
import Cards from './Cards';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Steps from './Steps';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../../images", false, /.(png|jpe?g|svg)$/)
);
const ratings=[4.2,3.6,3.8,4.8,3.9,3.2,2.6,1.9]

const tender = ['Academic Block', 'Ramanujan Block', 'Satish Dhawan Block', 'JC Bose Block', 'SS Bhatnagar Block', 'Utility Block', 'Mess', 'Hostel']

export default function Landing() {
  
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <div style={{ margin: '0 32px' }}>
      <Carousel />
      <hr />
      <Swiper
        breakpoints={breakpoints}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {
          images.map((image, index) => {
            const props={
              image,index,
              name:tender[index]
            };
            localStorage.setItem(`variable-${index}`, 
            JSON.stringify(props));
            return (
              <SwiperSlide key={index}>
                <Cards image={images[index]} name={tender[index]} index={index}/>
              </SwiperSlide>
            )
          })
        }           

      </Swiper>
      <hr />
      <Importance />
      <hr />
      <Steps />
      <hr />
      <ImageSlider facility={tender} images={images} ratings={ratings}/>
      <hr />
      <Statistics />
      <hr />
    </div>
  )
}
