import React from 'react'
import Slider from '../Slider/Slider'
import timg1 from '../../../assets/t-1.jpg'
import timg2 from '../../../assets/t-2.jpg'
import timg3 from '../../../assets/t-3.webp'

export default function Temperature() {
    const images1 = [
        { src: timg1, alt: "Nature 1" },
        { src:timg2, alt: "Nature 2" },
        { src:timg3, alt: "Nature 3" },
      ];
  return (
    <>
      <section className="img-cover py-5  flex items-center justify-center p-6">
      <div className="container max-w-6xl py-10">
        <div className="py-6 px-14 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">

          قسم الجسات وفحص التربة

          </h1>
        
        </div>
       
      </div>
    </section>
    <section className='py-8 bg-gray-200'>
  <div className='container max-w-6xl mx-auto md:px-18'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-5'>
      <div >
        <Slider images={images1} />
      </div>
      <div >
        {/* المحتوى الثاني */}
        <h1 className="text-3xl  font-bold text-black py-4">

        أعمال الجسات وفحص التربة:

</h1>
<div className="space-y-4">
<p >الحفر في التربة والأرض الصخرية لأعماق أكبر من 30 متر,, استخراج عينات متقلقلة من التربة الرملية</p>
<p>أثناء اجراء اختبار الاختراق القياسي.,, استخراج عينات غير متقلقلة من التربة الطینیة.,, استخراج أكوار من الصخر</p>
<p>مع قیاس أطوال العينات ودرجة جودة الصخر.,, تحديد منسوب المياه الجوفية</p>
<p>ان وجدت,,. تصنيف العينات وعمل قطاعات طولية للجسسات.,, وقطاعات عرضية لطبقات التربة علي الأعماق المختلفة.,, اعداد التقارير الفنية وتوصيات التأسيس للمنشآت المختلفة.,,</p>
  
</div>
    </div>
    </div>
  </div>
</section>
    
    </>
  )
}
