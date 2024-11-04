import React from 'react'
import img1 from '../../../assets/cimg-1.webp'
import img2 from '../../../assets/cimg-2.webp'
import img3 from '../../../assets/cimg-3.webp'
import Slider from '../Slider/Slider';

export default function Cement() {
    const images1 = [
        { src: img1, alt: "Nature 1" },
        { src:img2, alt: "Nature 2" },
        { src:img3, alt: "Nature 3" },
      ];
  return (
    <>
         <section className="img-cover py-5  flex items-center justify-center p-6">
      <div className="container max-w-6xl py-10">
        <div className="py-6 px-14 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">

          قسم اختبارات الأسمنت

          </h1>
        
        </div>
       
      </div>
    </section>
    <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-300">
  <div className="container max-w-6xl mx-auto md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <Slider images={images1} />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          قسم اختبارات الأسمنت
        </h1>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            مقاومة الضغط لمكعبات المونة الأسمنتیة.
          </p>
          <p className="text-gray-700 text-lg">
            تعیین معایر النعومة باستخدام جھاز بلین.
          </p>
          <p className="text-gray-700 text-lg">
            تعیین زمن الشك للأسمنت باستخدام جھاز فیكات.
          </p>
          <p className="text-gray-700 text-lg">
            التمدد الحجمى باستخدام جھاز لوشاتیلیه.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}
