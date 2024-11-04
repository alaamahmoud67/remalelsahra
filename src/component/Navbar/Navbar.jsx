import { useState } from 'react';

import { Link } from 'react-router-dom';
import { X ,List } from 'lucide-react'; // استيراد الأيقونة
import logo from '../../assets/logo.png'
export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false);
      const [dropdownOpen, setDropdownOpen] = useState(false);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
      };
    
      const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
      };
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
 {/* <nav className="bg-white text-black p-4">
  <div className="container mx-auto flex justify-between items-center">
    <Link to="/">
      <img
        src={logo}
        alt=""
        className="w-20 h-20 md:w-24 md:h-24"
      />
    </Link>
    <div className="hidden md:flex space-x-4">
      <Link to="/" className="block hover:text-gray-700 mx-2">الرئيسية</Link> 
      <Link to="/connect" className="block hover:text-gray-700">تواصل معنا </Link>
      <Link to="/temperature" className="block hover:text-gray-700">فحص التربه</Link>
      <Link to="/about" className="block hover:text-gray-700">من نحن</Link>
      <Link to="/rocks" className="block hover:text-gray-700">الصخور</Link>
      <Link to="/field" className="block hover:text-gray-700">الحقلية</Link>

    </div>
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>
    </div>
  </div>
  {isOpen && (
    <div className="md:hidden bg-white space-y-2 p-4"> 
      <Link to="/" className="block hover:text-gray-700">الرئيسية</Link>
      <Link to="/connect" className="block hover:text-gray-700">تواصل معنا </Link>
      <Link to="/services" className="block hover:text-gray-700">معلمونا</Link>
      <Link to="/about" className="block hover:text-gray-700">من نحن</Link>
      <Link to="/" className="block hover:text-gray-700">المدونة</Link>
    </div>
  )}
</nav> */}
    {/*  */}
    <nav className="bg-white">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon for mobile menu */}
          {mobileMenuOpen ? (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Logo for mobile */}
      <Link to="/" className="flex-shrink-0 text-black block lg:hidden">
        <img src={logo} alt="" className="h-16" />
      </Link>
      
      <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link to="/" className="text-black hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">الرئيسية</Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                خدماتنا
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <Link to="/قسم اختبارات التربة والصخور" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم اختبارات التربه والصخور</Link>
                  <Link to="/قسم الجسات وفحص التربة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم الجسات وفحص التربة</Link>
                  <Link to="/قسم الاختبارات الحقلیة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم-الاختبارات-الحقلیة</Link>
                  <Link to="/قسم اختبارات المواد" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم-اختبارات-المواد</Link>
                  <Link to="/قسم اختبارات الأسمنت" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم اختبارات الأسمنت</Link>
                  <Link to="/قسم اختبارات الأسفلت" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم اختبارات الأسفلت</Link>
                  <Link to="/قسم الاختبارات اللااتلافیة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم الاختبارات الكیمیائیة</Link>
                  <Link to="/قسم الاختبارات الكیمیائیة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم الاختبارات اللااتلافیة</Link>
                </div>
              )}
            </div>
            {/* عناصر من نحن وتواصل معنا */}
            <div className="flex space-x-4">
              <Link to="/about" className="text-black hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">من نحن</Link>
              <Link to="/connect" className="text-black hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">تواصل معنا</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logo for large screens */}
      <Link to="/" className="flex-shrink-0 items-center text-black hidden lg:block">
        <img src={logo} alt="" className='h-16' />
      </Link>
    </div>
  </div>

  {/* Mobile menu */}
  <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <Link to="/" className="text-black hover:bg-gray-200 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">الرئيسية</Link>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-black hover:bg-gray-200 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
        >
          خدماتنا
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <Link to="/قسم اختبارات التربة والصخور" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم اختبارات التربه والصخور</Link>
            <Link to="/قسم الجسات وفحص التربة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم الجسات وفحص التربة</Link>
            <Link to="/قسم الاختبارات الحقلیة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم-الاختبارات-الحقلیة</Link>
            <Link to="/قسم اختبارات المواد" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم-اختبارات-المواد</Link>
            <Link to="/قسم اختبارات الأسمنت" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم اختبارات الأسمنت</Link>
            <Link to="/قسم اختبارات الأسفلت" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم اختبارات الأسفلت</Link>
            <Link to="/قسم الاختبارات اللااتلافیة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم الاختبارات الكیمیائیة</Link>
            <Link to="/قسم الاختبارات الكیمیائیة" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">قسم الاختبارات اللااتلافیة</Link>
          </div>
        )}
      </div>

      {/* إضافة فاصل هنا بين الروابط */}
      <Link to="/connect" className="text-black hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">تواصل معنا</Link>
      
      {/* إضافة فاصل هنا بين الروابط */}
      <Link to="/about" className="text-black hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">من نحن</Link>
    </div>
  </div>
</nav>
    </>
  )
}
