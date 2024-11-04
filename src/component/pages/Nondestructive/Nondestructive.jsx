import React from 'react'
import img1 from '../../../assets/Nimg1.webp'
import img2 from '../../../assets/Nimg2.webp'
import img3 from '../../../assets/Nimg3.webp'
import Slider from '../Slider/Slider';

export default function Nondestructive() {
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

          قسم الاختبارات اللااتلافیة

          </h1>
        
        </div>
       
      </div>
    </section>

    <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-300">
  <div className="container max-w-6xl mx-auto md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <Slider images={images1} />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          الاختبارات اللااتلافیة
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li className="text-gray-700 text-lg">مقاومة الضغط باستخدام مطرقة الارتداد (شمیدت)</li>
          <li className="text-gray-700 text-lg">قیاس خواص الخرسانة بواسطة جھاز الموجات الفوق صوتیة</li>
          <li className="text-gray-700 text-lg">تحدید عرض الشروخ بالخرسانة</li>
          <li className="text-gray-700 text-lg">مقاومة الضغط للخرسانة باستخدام جھاز الغز الجیبى</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
