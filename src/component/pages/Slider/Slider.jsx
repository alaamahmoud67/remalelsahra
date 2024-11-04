import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Slider({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
      setCurrentSlide(swiper.activeIndex);
    };
    const totalSlides = 3; // اجعلها تساوي عدد الشرائح الفعلي

    const slides = [
        { img: "https://swiperjs.com/demos/images/nature-1.jpg", alt: "Nature 1" },
        { img: "https://swiperjs.com/demos/images/nature-2.jpg", alt: "Nature 2" },
        { img: "https://swiperjs.com/demos/images/nature-3.jpg", alt: "Nature 3" },
        // أضف المزيد من الصور حسب الحاجة
      ];
  
  return (
    <>
<div>
  <Swiper
    spaceBetween={10}
    navigation={true}
    modules={[Navigation]}
    onSlideChange={handleSlideChange}
    className="mySwiper"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <img
          src={image.src}
          alt={image.alt}
          className=" w-full  h-96 object-contain" // تعديل الأبعاد هنا
        />
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="flex justify-center mt-4 space-x-2">
    {images.map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full border-2 ${
          index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={() => {
          const swiper = document.querySelector('.mySwiper').swiper;
          swiper.slideTo(index);
        }}
      ></button>
    ))}
  </div>
</div>
    </>
  )
}
