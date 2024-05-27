import React from 'react'
import Nav from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";

export default function Layout({children}) {
  return (
    <div>
      <Nav/>

    <div className='content min-h-screen'>
    {children}
    </div>

      <Footer/>
    </div>
  )
}
