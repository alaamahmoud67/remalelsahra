import React from 'react'
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Contact() {
    const cards = [
        {
          icon: <Phone className="h-10 w-10 text-white transition-all" />,
          text: 'للتواصل عبر الهاتف، اتصل بنا للحصول على الدعم أو الاستفسارات.',
          link: '0554183175',
        },
        {
          icon: <MapPin className="h-10 w-10 text-white transition-all" />,
          text: 'قم بزيارتنا في موقعنا لمزيد من المعلومات حول خدماتنا.',
          link: 'شارع النعمان بن بشير _ الحزم _ الرياض 12223',
        },
        {
          icon: <Mail className="h-10 w-10 text-white transition-all" />,
          text: 'راسلنا عبر البريد الإلكتروني وسنكون سعيدين بالرد عليك.',
          link: 'info@remalelsahra.com',
        },
        {
          icon: <Clock className="h-10 w-10 text-white transition-all" />,
          text: 'تعرف على ساعات العمل لدينا وجدولنا الزمني.',
          link: 'طوال ايام الاسبوع من الساعة 9صباحا الي 10 مساءا',
        },
      ];

  return (
    <>
  <section className="about-cover py-5  flex items-center justify-center p-6">
      <div className="container max-w-6xl py-10">
        <div className="py-6 px-14 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">

        تواصل معنا
          </h1>
        
        </div>
       
      </div>
    </section>
    {/*  */}
   <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#12223b] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#12223b] transition-all duration-300 group-hover:bg-[#12223b]">
                {card.icon}
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>{card.text}</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" className="text-[#12223b] transition-all duration-300 group-hover:text-white">{card.link}</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* map */}
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* قسم الخريطة */}
    <div className="bg-gray-300 rounded-lg overflow-hidden h-full  ">
  <iframe
    className="w-full h-full "
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464593.63635213557!2d46.634172!3d24.532613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f11a49bb6992f%3A0x8de90ccc64869ce9!2sGJMM%2B2MV%2C%20Uhud%2C%20Riyadh%2014966%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1730729102493!5m2!1sen!2sus"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    {/* قسم النموذج */}
    <div className="bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
  <h2 className="text-[#12223b] text-4xl mb-1 font-medium title-font py-5">تواصل معنا</h2>
  
  <div className="relative mb-4">
    <label htmlFor="name" className="leading-7 text-sm text-[#12223b]">الاسم</label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full bg-white rounded border border-gray-300   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-[#12223b]">البريد الإلكتروني</label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded border border-gray-300   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 text-sm text-[#12223b]">الرسالة</label>
    <textarea
      id="message"
      name="message"
      className="w-full bg-white rounded border border-gray-300    h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    ></textarea>
  </div>
  <button className="text-white bg-[#12223b] border-0 py-2 px-6 focus:outline-none rounded text-lg">
    إرسال
  </button>
  <p className="text-xs text-[#12223b] mt-3">
    ملاحظاتك مهمة لنا. شكرًا لك على وقتك ومشاركتك!
  </p>
</div>
  </div>
</section>

    </>
  )
}
