import React from 'react'
import img10 from '../../../assets/img-10.webp'
import img11 from '../../../assets/img-11.webp'
import img12 from '../../../assets/img-12.webp'
import Slider from '../Slider/Slider';
export default function Asphalt() {
    const images1 = [
        { src: img12, alt: "Nature 1" },
        { src:img11, alt: "Nature 2" },
        { src:img10, alt: "Nature 3" },
      ];
  return (
    <>
       <section className="img-cover py-5  flex items-center justify-center p-6">
      <div className="container max-w-6xl py-10">
        <div className="py-6 px-14 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">

          قسم اختبارات الأسفلت

          </h1>
        
        </div>
       
      </div>
    </section>
    <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-300">
  <div className="container max-w-6xl mx-auto md:px-12">
    <div className="grid grid-cols-1  gap-12 px-5">
      <div>
        <Slider images={images1} />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">تصمیم الخلطات الأسفلتیة</h2>
        
        <h3 className="text-xl font-semibold mb-3 text-gray-800">تصمیم الخلطات الأسفلتیة بالمعمل:</h3>
        <p className="text-gray-700 text-lg mb-4">
          طراحی الخلطات الأسفلتیة علی الساخن لطبقات الرصف بطریقة مارشال لتحدید تدرج المواد ونسبة البیتومین المثلى للخلطة.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">الاختبارات علي الأسفلت أثناء تنفیذ الرصف:</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li className="text-lg mb-2">تعیین قیمة الثبات والانسیاب ونسب الفراغات بالخلطات المنفذة.</li>
          <li className="text-lg mb-2">تعیین كثافة الخلطات المنفذة بعد دمكھا في قوالب المارشال ومقارنتھا بالكثافة القصوى النظریة.</li>
          <li className="text-lg mb-2">استخلاص البیتومین من الخلطات الأسفلتیة لتحدید نسبة البیتومین بالخلطة مع اجراء تجربة الاتحلیل المنخلى للركام المستخلص ومقارنتھ بالحدود المنصوص علیھا بالخلطات التصمیمیة.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">اختبارات الأسفلت بالموقع بعد التنفیذ:</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li className="text-lg mb-2">أخذ اكوار من الطریق وقیاس سمك الطبقات المنفذة.</li>
          <li className="text-lg mb-2">تعیین نسبة الدمك المنفذة عن طریق مقارنة كثافة الأكوار بالكثافة المنصوص علیھا بالخلطات التصمیمیة.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">اختبارات البیتومین بالمعمل:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li className="text-lg mb-2">تعیین درجة الغرز للبیتومین.</li>
          <li className="text-lg mb-2">تعیین درجة الومیض ودرجة الاشتعال باستخدام جھاز كلیفلاند المفتوح.</li>
          <li className="text-lg mb-2">تعیین درجة التطریة باستخدام جھاز الكرة والحلقة.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}
