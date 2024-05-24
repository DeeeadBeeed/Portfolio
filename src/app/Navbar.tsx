import React from 'react';
import { SiLinkedin,SiGithub} from 'react-icons/si';
import { MdEmail } from "react-icons/md";
export default function Navbar() {
  return (
    <nav className='py-5 md:py-10 flex flex-col md:flex-row justify-center md:justify-between items-center'>
      <h1 className='text-lg md:text-2xl font-bold underline underline-offset-8 decoration-green-500 text-center md:text-left mb-5 md:mb-0'>Full-stack / Front-end Developer</h1>
      <div className='flex items-center gap-5'>
    <a href="https://www.linkedin.com/in/mg-oakar-147474255/" className='block md:inline-block' target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
    <a href="https://github.com/DeeeadBeeed" className='block md:inline-block' target="_blank" rel="noopener noreferrer"><SiGithub /></a>
    <a href="mailto:rhythmic34u@gmail.com" className='block md:inline-block' target="_blank" rel="noopener noreferrer"><MdEmail /></a>
</div>


    </nav>
  );
}
