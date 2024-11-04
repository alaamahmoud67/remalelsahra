import React from 'react'
import img7 from '../../../assets/img-7.webp'
import img8 from '../../../assets/img-8.webp'
import img9 from '../../../assets/img-9.webp'
import Slider from '../Slider/Slider';
export default function Materials() {
    const images1 = [
        { src: img7, alt: "Nature 1" },
        { src:img8, alt: "Nature 2" },
        { src:img9, alt: "Nature 3" },
      ];
  return (
    <>
          <section className="img-cover py-5  flex items-center justify-center p-6">
      <div className="container max-w-6xl py-10">
        <div className="py-6 px-14 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">

          قسم اختبارات المواد

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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          اختبارات الصلاحیة للخرسانة أو الأسفلت:
        </h1>
        <ul className="space-y-4 text-gray-700 leading-relaxed list-disc pl-5">
          <li>تعیین التدرج الحبیبى باستخدام المناخل</li>
          <li>تحدید نسبة المواد الناعمة بالركام بالغسیل.</li>
          <li>تحدید الكثافة النوعیة ونسبة الفراغات بالركام.</li>
          <li>تعیین الوزن النوعى والامتصاص للركام الكبیر والصغیر.</li>
          <li>تعیین نسبة التفلطح والاستطالة للركام الكبیر.</li>
          <li>تعیین نسبة التفتت بالركام الكبیر.</li>
          <li>تعیین المكافئ الرملى للركام الصغیر.</li>
          <li>تعیین مقاومة الركام الكبیر للبرى باستخدام جھاز اللوس أنجلوس.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}
