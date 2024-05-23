
import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';

export default function page() {
  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <MainSection />
        <Skills/>
        <Project/>
        <Footer/>
      </div>
    </div>
  );
}
