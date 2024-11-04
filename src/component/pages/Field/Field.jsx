import React from 'react'
import img4 from '../../../assets/img-4.webp'
import img5 from '../../../assets/img-5.webp'
import img6 from '../../../assets/img-6.webp'
import Slider from '../Slider/Slider';
export default function Field() {
    const images1 = [
        { src: img4, alt: "Nature 1" },
        { src:img5, alt: "Nature 2" },
        { src:img6, alt: "Nature 3" },
      ];
  return (
    <>
        <section className="img-cover py-5  flex items-center justify-center p-6">
      <div className="container max-w-6xl py-10">
        <div className="py-6 px-14 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">

          قسم الاختبارات الحقلیة

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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">قسم الاختبارات الحقلیة</h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            تعیین كثافة التربة الحقلیة باستخدام جھاز مخروط الرمل
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            تعیین كثافة التربة الحقلیة باستخدام جھاز البالون المطاطى
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            تعیین محتوى الرطوبة بالموقع باستخدام جھاز السبیدى
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            تحدید معاملات الھبوط للتربة باستخدام تجربة التحمیل اللوحى
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            استخراج عینات لبیة من الخرسانة أو الأسفلت باستخدام ماكینة الكور الكھربائیة
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}
