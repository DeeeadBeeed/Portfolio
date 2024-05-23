import React from 'react';

export default function Navbar() {
  return (
    <nav className='py-5 md:py-10 flex flex-col md:flex-row justify-center md:justify-between items-center'>
      <h1 className='text-lg md:text-2xl font-bold underline underline-offset-8 decoration-green-500 text-center md:text-left mb-5 md:mb-0'>Full-stack / Front-end Developer</h1>
      <div className='flex items-center gap-5'>
        <a href="" className='block md:inline-block'>LinkedIn</a>
        <a href="" className='block md:inline-block'>GitHub</a>
        <a href="" className='block md:inline-block'>Email</a>
      </div>
    </nav>
  );
}
