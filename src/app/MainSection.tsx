import React from 'react';
import './glow.css';

export default function MainSection() {
  return (
    <div className='min-h-screen flex items-center justify-between lg:flex-row'>
      <div>
        <h1 className='text-4xl lg:text-7xl font-bold'>Nice To Meet you!<br/><span>{"I am Oakar"}</span><br/></h1>
        <div className='flex'>
          <a href="mailto:rhythmic34u@gmail.com">
            <h1 className='underline underline-offset-8 inline-block text-3xl mt-5'>✉️ Contact Me</h1>
          </a>
          <a href="https://drive.google.com/file/d/17wIZ12vbwNdyEDnMDiyg7WbaiQQqzJpk/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button className='button ml-10 mt-4'>
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
