import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <div className='bg-white 
      text-stone-900 font-inter
      min-h-screen max-w-5xl w-11/12 
      mx-auto'>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
