import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/pages/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Aboutus from './component/pages/Aboutus/Aboutus'
import Contact from './component/pages/Contact/Contact'
import Temperature from './component/pages/Temperature/Temperature'
import Rocks from './component/pages/Rocks/Rocks'
import Field from './component/pages/Field/Field'
import Materials from './component/pages/Materials/Materials'
import Cement from './component/pages/Cement/Cement'
import Asphalt from './component/pages/Asphalt/Asphalt'
import Nondestructive from './component/pages/Nondestructive/Nondestructive'
import Chemical from './component/pages/Chemical/Chemical'


function App() {

  return (
    <>
       <Router>
     <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>} />
           
            <Route path="/about" element={<Aboutus/>} />
            <Route path="/connect" element={<Contact/>} />
            <Route path="/قسم الجسات وفحص التربة" element={<Temperature/>} />
            <Route path="/قسم اختبارات التربة والصخور"element={<Rocks/>} />
            <Route path="/قسم الاختبارات الحقلیة" element={<Field/>} />
            <Route path="/قسم اختبارات المواد" element={<Materials/>} />
            <Route path="/قسم اختبارات الأسمنت" element={<Cement/>} />
            <Route path="/قسم اختبارات الأسفلت" element={<Asphalt/>} />
            <Route path="/قسم الاختبارات الكیمیائیة"element={<Nondestructive/>} />
            <Route path="/قسم الاختبارات اللااتلافیة" element={<Chemical/>} />


          </Routes>
        
       </Router>
    </>
  )
}

export default App
