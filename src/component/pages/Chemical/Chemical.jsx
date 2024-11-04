import React from 'react'
import img1 from '../../../assets/chimg-1.webp'
import img2 from '../../../assets/chimg-2.webp'
import img3 from '../../../assets/chimg-3.webp'
import Slider from '../Slider/Slider';

export default function Chemical() {
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

          قسم الاختبارات الكیمیائیة

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
          اختبارات الكیمیاء على التربة والماء والركام
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          تتضمن اختبارات الكیمیاء على التربة والماء والركام للأغراض الانشائیة الآتى:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li className="text-gray-700 text-lg">محتوى الكبریتات الكلیة والكبریتات الذاتیة فى الماء</li>
          <li className="text-gray-700 text-lg">محتوى الكلوریدات في صورة كلورید الصودیوم وأیون الكلور</li>
          <li className="text-gray-700 text-lg">الأملاح الكلیة الذائبة فى الماء</li>
          <li className="text-gray-700 text-lg">نسبة المواد العضویة</li>
          <li className="text-gray-700 text-lg">رقم الأس الھیدروجینى</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
