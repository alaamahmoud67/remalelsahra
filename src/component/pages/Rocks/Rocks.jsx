import React from 'react'
import img1 from '../../../assets/img-1.png'
import img2 from '../../../assets/img-2.webp'
import img3 from '../../../assets/rimg-1.webp'
import Slider from '../Slider/Slider';

export default function Rocks() {
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

          قسم اختبارات التربة والصخور

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
        <h1 className="text-3xl font-bold text-black mb-6">
          اختبارات التربة<span className=""> بالمعمل</span>
        </h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            تصنیف التربة من حیث التدرج وتحدید حدى السیولة ومجال اللدونة.
            تعیین معاملات القص للتربة الرملیة باستخدام جھاز القص المباشر.
            تعیین معاملات القص للتربة الطینیة باستخدام جھاز الضغط الغیر محاط.
            تعیین معاملات الانضغاط بواسطة جھاز التصلد (التدعیم).
            تعیین معاملات الدمك القیاسى والمعدل باستخدام جھاز الدمك.
          </p>
          <h2 className="text-3xl font-bold text-black mt-6">
            اختبارات التربة<span className=""> بالموقع</span>
          </h2>
          <p>
            تعیین الكثافة الحقلیة للتربة ونسبة الدمك باستخدام جھاز مخروط الرمل.
            تحدید محتوى الرطوبة لعینات التربة باستخدام جھاز السبیدى.
            تحدید معاملات الھبوط للتربة باستخدام جھاز التحمیل اللوحى.
          </p>
          <h2 className="text-3xl font-bold text-black mt-6">
            اختبارات الصخور<span className=""> بالمعمل</span>
          </h2>
          <p>
            تعیین مقاومة الصخر للضغط المحورى.
            تعیین مقاومة الشد بالانشطار.
            تعیین حمل النقطة للصخر بالمعمل أو الموقع.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}
