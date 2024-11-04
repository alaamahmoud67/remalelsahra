import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination ,Navigation} from 'swiper/modules';
import client1 from '../../../assets/client-1.jpg'
import client2 from '../../../assets/client-2.jpg'
import client3 from '../../../assets/client-3.jpg'
import client4 from '../../../assets/client-4.jpg'
import client5 from '../../../assets/client-5.png'
import client6 from '../../../assets/client-6.jpg'
import client7 from '../../../assets/client-7.png'
import client8 from '../../../assets/client-8.png'
import client9 from '../../../assets/client-9.png'
import client10 from '../../../assets/client-10.jpg'
import client11 from '../../../assets/client-11.png'
import client12 from '../../../assets/client-12.png'
import client13 from '../../../assets/client-13.jpg'
import client14 from '../../../assets/client-14.jpg'

export default function Clients() {
    const clientImages = [
        { id: 1, src: client1, alt: 'Client 1' },
        { id: 2, src: client2, alt: 'Client 2' },
        { id: 3, src: client3, alt: 'Client 3' },
        { id: 4, src: client4, alt: 'Client 4' },
        { id: 5, src: client5, alt: 'Client 5' },
        { id: 6, src: client6, alt: 'Client 6' },
        { id: 7, src:client7 , alt: 'Client 7' },
        { id: 8, src: client8, alt: 'Client 8' },
        { id: 9, src: client9, alt: 'Client 9' },
        { id: 10, src: client10, alt: 'Client 10' },
        { id: 11, src:client11 , alt: 'Client 11' },
        { id: 12, src:client12 , alt: 'Client 12' },
        { id: 13, src:client13 , alt: 'Client 13' },
        { id: 14, src: client14, alt: 'Client 14' },
      ];
  return (
    <>
 <section className='bg-gray-200'>
      <div className='container mx-auto md:px-18 py-14 px-6'>
        <Swiper
          spaceBetween={30}
          freeMode={true}
          navigation={true}  // تفعيل أزرار التنقل
          modules={[FreeMode, Navigation]} // استخدام Navigation module
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {clientImages.map(client => (
            <SwiperSlide key={client.id} className="flex justify-center">
              <div className='bg-white shadow-lg rounded-lg overflow-hidden flex h-40'>
                <img
                  src={client.src}
                  alt={client.alt || "Client logo"}
                  className="w-full h-auto max-h-full object-contain" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    
    </>
  )
}
