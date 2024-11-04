import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { Users, Briefcase, Award, UserCheck ,ChevronLeft} from "lucide-react";
import imgtabs1 from '../../../assets/img-1.png'
import imgtabs2 from '../../../assets/img-2.webp'
import imgtabs3 from '../../../assets/img-3.webp'
import imgtabs4 from '../../../assets/img-4.webp'
import imgtabs5 from '../../../assets/img-5.webp'
import imgtabs6 from '../../../assets/img-6.webp'
import imgtabs7 from '../../../assets/img-7.webp'
import imgtabs8 from '../../../assets/img-8.webp'
import imgtabs9 from '../../../assets/img-9.webp'
import imgtabs10 from '../../../assets/img-10.webp'
import imgtabs11 from '../../../assets/img-11.webp'
import imgtabs12 from '../../../assets/img-12.webp'
// 
import imgcard1 from '../../../assets/img-13.webp'
import imgcard2 from '../../../assets/img-14.webp'
import imgcard3 from '../../../assets/img-15.jpeg'
// 
import imgprojecr1 from '../../../assets/img-16.webp'
import imgprojecr2 from '../../../assets/img-17.jpeg'
import imgprojecr3 from '../../../assets/img-18.webp'
import imgprojecr4 from '../../../assets/img-19.webp'
import imgprojecr5 from '../../../assets/img-20.webp'
import imgprojecr6 from '../../../assets/img-21.webp'
import Aboutditels from '../Aboutus/Aboutditels';
import Clients from '../Slider/Clients';
export default function Home() {
   
    
    
    const [activeTab, setActiveTab] = useState(0);
   
    const tabs = [
        { 
          id: 0, 
          label: 'التربة والصخور', 
          content: (
            <div>
              <h1 className="text-4xl text-center font-semibold py-8">قسم اختبارات التربة والصخور</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <img src={imgtabs1} alt="Image 1" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs2} alt="Image 2" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs3} alt="Image 3" className="w-full h-[300px] object-cover transition-transform duration-300 " />
              </div>
              <Link to="/قسم اختبارات التربة والصخور">
              <button className="my-6 mx-5 relative inline-block text-center font-bold text-lg tracking-wider uppercase px-8 py-3  border-4 border-[#ffc224] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] text-black transition-all duration-300 z-10 overflow-hidden group">
          <span className="absolute top-0 left-1/2 right-1/2 bottom-0 bg-[#ffc224] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 z-0"></span>
          <span className="relative z-20 group-hover:text-black">مزيد من المعلومات</span>
        </button>             
         </Link>
            </div>
          )
        },
        { 
          id: 1, 
          label: 'الحقلية', 
          content: (
            <div>
              <h1 className="text-4xl text-center font-semibold py-8">قسم الاختبارات الحقلية</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <img src={imgtabs4} alt="Image 4" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs5} alt="Image 5" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs6} alt="Image 6" className="w-full h-[300px] object-cover transition-transform duration-300 " />
              </div>
              <Link to="/قسم الاختبارات الحقلیة">
              <button className="my-6 mx-5 relative inline-block text-center font-bold text-lg tracking-wider uppercase px-8 py-3  border-4 border-[#ffc224] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] text-black transition-all duration-300 z-10 overflow-hidden group">
          <span className="absolute top-0 left-1/2 right-1/2 bottom-0 bg-[#ffc224] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 z-0"></span>
          <span className="relative z-20 group-hover:text-black">مزيد من المعلومات</span>
        </button>             
         </Link>
            </div>
          )
        },
        { 
          id: 2, 
          label: 'المواد', 
          content: (
            <div>
              <h1 className="text-4xl text-center font-semibold py-8">قسم الاختبارات المواد</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <img src={imgtabs7} alt="Image 7" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs8} alt="Image 8" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs9} alt="Image 9" className="w-full h-[300px] object-cover transition-transform duration-300 " />
              </div>
              <Link to="/قسم اختبارات المواد">
              <button className="my-6 mx-5 relative inline-block text-center font-bold text-lg tracking-wider uppercase px-8 py-3  border-4 border-[#ffc224] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] text-black transition-all duration-300 z-10 overflow-hidden group">
          <span className="absolute top-0 left-1/2 right-1/2 bottom-0 bg-[#ffc224] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 z-0"></span>
          <span className="relative z-20 group-hover:text-black">مزيد من المعلومات</span>
        </button>             
         </Link>
            </div>
          )
        },
        { 
          id: 3, 
          label: 'الأسفلت', 
          content: (
            <div>
              <h1 className="text-4xl text-center font-semibold py-8">قسم اختبارات الأسفلت</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <img src={imgtabs11} alt="Image 10" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs12} alt="Image 11" className="w-full h-[300px] object-cover transition-transform duration-300 " />
                <img src={imgtabs10} alt="Image 12" className="w-full h-[300px] object-cover transition-transform duration-300 " />
              </div>
              <Link to="/قسم اختبارات الأسفلت">
              <button className="my-6 mx-5 relative inline-block text-center font-bold text-lg tracking-wider uppercase px-8 py-3  border-4 border-[#ffc224] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] text-black transition-all duration-300 z-10 overflow-hidden group">
          <span className="absolute top-0 left-1/2 right-1/2 bottom-0 bg-[#ffc224] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 z-0"></span>
          <span className="relative z-20 group-hover:text-black">مزيد من المعلومات</span>
        </button>             
         </Link>
            </div>
          )
        },
      ];
      const countersData = [
        {
          id: 1,
          title: "عدد الموظفين" ,
          count: 46,
          icons:<Users />,
        },
        {
          id: 2,
        title:"عدد المشاريع",
        count: 15,
          icons:<Briefcase />,
        },
        {
          id: 3,
          title:"عدد الجوائز",
          count: 32,
          icons:  <Award />,
          
        },
        {
          id: 4,
          title:"عدد العملاء",
          count: 20,
          icons: <UserCheck />,
          
        },
      ];
      const cards = [
        {
          id: 1,
          title: 'اختبارات فحص الخرسانه',
          imageUrl: imgcard1,
        },
        {
          id: 2,
          title: 'الدراسات الجيوتقنية',
          imageUrl: imgcard2,
        },
        {
          id: 3,
          title: 'اختبارات فحص التربة',
          imageUrl: imgcard3,
        },
      ];
      // مشاريع
      const images = [
        {
          src: imgprojecr1,
          alt: "Nature",
          title: "Explore Nature",
          description: "Discover the beauty of the natural world",
          large: true,
        },
        {
          src: imgprojecr3,
          alt: "Food",
          title: "Culinary Delights",
        },
        {
          src:imgprojecr4,
          alt: "Technology",
          title: "Tech Innovations",
        },
        {
          src: imgprojecr5,
          alt: "Travel",
          title: "Travel Adventures",
        },
        {
          src: imgprojecr6,
          alt: "Art",
          title: "Artistic Expressions",
        },
        
      ];
  return (
    <>
  <section className="home-cover py-5 flex items-center justify-center p-6">
  <div className="container max-w-6xl py-10">
    <div className="py-6 px-4 md:px-14 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white py-4">
        مختبر
        <span className="text-[#ffc224] px-2 md:px-5">رمال الصحراء</span>
        للتحقق
      </h1>
      <Link to="/connect">
        <button className="my-6 mx-3 md:mx-5 relative inline-block text-center font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-4 border-[#ffc224] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] text-white transition-all duration-300 z-10 overflow-hidden group">
          <span className="absolute top-0 left-1/2 right-1/2 bottom-0 bg-[#ffc224] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0 transition-all duration-500 z-0"></span>
          <span className="relative z-20 group-hover:text-black">تواصل معنا</span>
        </button>
      </Link>
    </div>
  </div>
</section>
    {/* section2 */}
    <section>
  <div className='container mx-auto px-16 lg:px-0 py-6'>
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6'>
      {countersData.map((data, id) => (
       <div 
       className={`max-w-sm rounded-lg overflow-hidden shadow-lg p-6 border transition duration-300 
         ${id === 0 ? 'bg-[#12223b] text-white' : 'bg-white text-gray-900'} 
         hover:bg-[#12223b] hover:border-[#ffc224] hover:text-white hover:-translate-y-2 group`} 
       key={id}
     >
       <div className={`bg-iconc flex items-center justify-center w-14 h-14 rounded-full shadow-xl group-hover:bg-white
         ${id === 0 ? 'bg-white' : 'bg-[#12223b]'} mb-4 mx-auto`}
       >
         <i className={`text-3xl transition-transform duration-300 ease-in-out group-hover:text-black
           ${id === 0 ? 'text-black' : 'text-white'}`}>
           {data.icons}
         </i>
       </div>
       <h5 className="text-2xl mb-3 font-bold tracking-tight text-center">
         {data.count}
       </h5>
       <h5 className="text-2xl font-bold tracking-tight text-center">
         {data.title}
       </h5>
     </div>
      ))}
    </div>
  </div>
</section>
{/* section about */}
<Aboutditels/>
{/* card */}
<div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                src={card.imageUrl}
                alt={card.title}
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {card.title}
              </h6>
             
            </div>
            
          </div>
        ))}
      </div>
    </div>
{/* الاقسام */}
<section className=' text-black home-about'>
  <div className="w-full max-w-4xl mx-auto mt-12 text-black">
    <div className="flex flex-col sm:flex-row border-b border-gray-600">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-4 text-xl font-semibold text-center border-b-4 ${
            activeTab === tab.id
              ? 'border-[#ffc224] text-black'  // اللون عند تفعيل التبويب
              : 'border-transparent text-[#12223b] hover:text-black'
          } transition duration-300`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    <div className="p-8">
      {tabs.find((tab) => tab.id === activeTab)?.content}

     
    </div>
  </div>
</section>

    {/*  */}
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">احدث المشاريع</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${image.large ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full ${image.large ? "h-full" : "h-48"} object-cover`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className={`text-xl font-bold text-white ${image.large ? "text-2xl" : ""}`}>{image.title}</h3>
                  {image.description && <p className="text-white">{image.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/*  */}
   
    <Clients/>
    </>
  )
}
