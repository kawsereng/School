'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import './Swiper.css';

import Slider1 from '../../../public/Image/Slider1.png';

const slides = [
  { id: 1, src: Slider1, alt: 'Sultanabad High School campus' },
  { id: 2, src: Slider1, alt: 'Sultanabad High School campus' },
  { id: 3, src: Slider1, alt: 'Sultanabad High School campus' },
  { id: 4, src: Slider1, alt: 'Sultanabad High School campus' },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        className="mySwiper w-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        slidesPerView={1}
      >
        {slides.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="w-full">
            <Image
              src={src}
              alt={alt}
              sizes="100vw"
              preload={id === 1}
              className="h-auto w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;