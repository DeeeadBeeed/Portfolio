import React from 'react';
import './glow.css';

export default function MainSection() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:flex-row'>
      <div className="text-center lg:text-left">
        <h1 className='text-2xl lg:text-7xl font-bold'>Nice To Meet you!<br/><span>{"I am Oakar"}</span><br/></h1>
        <p className='mt-10 mb-5'>
        Welcome to my portfolio! I specialize in React and can also help with backend development using PostgreSQL, MongoDB, REST APIs, and Node.js. Explore my work, and let's connect to discuss how I can bring your next project to life. 
</p>
        <div className='flex flex-col items-center lg:flex-row lg:items-start'>
          <a href="mailto:rhythmic34u@gmail.com">
            <h1 className='underline underline-offset-8 inline-block text-xl lg:text-3xl mt-5'>✉️ Contact Me</h1>
          </a>
          <a href="https://drive.google.com/file/d/17wIZ12vbwNdyEDnMDiyg7WbaiQQqzJpk/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className='lg:ml-10 mt-4'>
            <button className='button'>
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
