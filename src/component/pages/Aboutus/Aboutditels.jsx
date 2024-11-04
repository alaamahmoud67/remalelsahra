import React from 'react'
import about from "../../../assets/about-img2.jpg"
import { ChevronLeft} from "lucide-react";
import { Link } from "react-router-dom";

export default function Aboutditels() {
  return (
    <>
    <section className="py-14 mt-14 home-about  text-white">
  <div className="container max-w-7xl mx-auto md:px-18">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
      {/* العمود الأول: النص */}
<div className="flex flex-col ">
  <h3 className="text-2xl my-5 px-4 font-black text-black">
    تعرف على مختبر <span className="text-[#c9a64f]">رمال الصحراء</span> للتحقق
  </h3>
  <p className="my-5 px-4 py-6 leading-8 text-black">
    تم تأسيس مختبر رمال الصحراء نظراً لوجود عدد كبير من
    مشاريع المقاولات في المملكة وتحتاج لعمل الخدمات الجيوتقنية
    وتحتاج لذوي الكفاءة والخبرة في مجال فحص التربة والاساسات والخرسانة والمواد والخدمات الهندسية والجيوتقنية والبيئية بمختلف أنواع الطبقات تحت السطحية سواء كانت ترابية أم صخرية أم سبخيه
  </p>
  <p className="my-5 ps-4 leading-8 text-black">
    وتقديم جميع التوصيات الهندسية اللازمة لأعمال التأسيس...
  </p>

  {/* عناصر القوائم */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
    <div className="flex items-center group">
      <div className="flex items-center justify-center w-10 h-10 bg-[#e9f7fe] rounded-full mr-2 shadow-lg group-hover:shadow-none transition-shadow duration-300">
        <ChevronLeft className="text-black" />
      </div>
      <p className="mx-3 text-black">المواد</p>
    </div>

    <div className="flex items-center group">
      <div className="flex items-center justify-center w-10 h-10 bg-[#e9f7fe] rounded-full mr-2 shadow-lg group-hover:shadow-none transition-shadow duration-300">
        <ChevronLeft className="text-black" />
      </div>
      <p className="mx-3 text-black">الحقلية</p>
    </div>

    <div className="flex items-center group">
      <div className="flex items-center justify-center w-10 h-10 bg-[#e9f7fe] rounded-full mr-2 shadow-lg group-hover:shadow-none transition-shadow duration-300">
        <ChevronLeft className="text-black" />
      </div>
      <p className="mx-3 text-black">التربة</p>
    </div>

    <div className="flex items-center group">
      <div className="flex items-center justify-center w-10 h-10 bg-[#e9f7fe] rounded-full mr-2 shadow-lg group-hover:shadow-none transition-shadow duration-300">
        <ChevronLeft className="text-black" />
      </div>
      <p className="mx-3 text-black">الأسفلت</p>
    </div>
  </div>

  {/* الزر */}
  <Link to="/about">
    <button className="my-6 mx-5 relative inline-block text-center font-bold text-lg tracking-wider uppercase px-8 py-3 w-40 border-4 border-[#ffc224] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] text-black transition-all duration-300 z-10 overflow-hidden group">
      <span className="absolute top-0 left-1/2 right-1/2 bottom-0 bg-[#ffc224] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 z-0"></span>
      <span className="relative z-20 group-hover:text-black">تعرف أكثر</span>
    </button>
  </Link>
</div>

      {/* العمود الثاني: الصورة */}
      <div className="flex h-full ">
        <Link to="/about" className="w-full h-full">
          <img
            src={about}
            loading="lazy"
            alt="about img"
            className="w-full h-auto md:h-full object-cover"
          />
        </Link>
      </div>
    </div>
  </div>
</section>
    
    
    </>
  )
}
