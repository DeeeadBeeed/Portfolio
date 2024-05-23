"use client";

import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react';
import { SiReact } from 'react-icons/si';

const skills = [{ text: 'React', Icon: SiReact },{ text: 'React', Icon: SiReact},{ text: 'React', Icon: SiReact },{ text: 'React', Icon: SiReact },{ text: 'React', Icon: SiReact },{ text: 'React', Icon: SiReact },{ text: 'React', Icon: SiReact }];

export default function Skills() {
  return (
    <div className='max-w-5xl mx-auto px-8 min-h-screen'>
      <h1 className='flex flex-col items-center justify-center underline underline-offset-8'>Skills</h1>
      <HoverEffect items={skills}/>
    </div>
  );
}
