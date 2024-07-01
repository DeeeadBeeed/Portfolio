"use client";

import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react';
import { SiReact,SiTailwindcss,SiGit,SiMongodb, SiPostgresql, SiNextdotjs, SiExpress, SiNodedotjs, SiTypescript } from 'react-icons/si';

const skills = [{ text: 'React', Icon: SiReact },{ text: 'Tailwind', Icon: SiTailwindcss},{ text: 'Git', Icon: SiGit },{ text: 'MongoDB', Icon: SiMongodb },{ text: 'Postgres', Icon: SiPostgresql },{ text: 'Next.js', Icon: SiNextdotjs },{ text: 'Express', Icon: SiExpress },{ text: 'Node.js', Icon: SiNodedotjs },{ text: 'TypeScript', Icon: SiTypescript
  
}];

export default function Skills() {
  return (
    <div className='max-w-5xl mx-auto px-8 min-h-screen'>
      <h1 className='flex flex-col items-center justify-center underline underline-offset-8'>Skills</h1>
      <HoverEffect items={skills}/>
    </div>
  );
}
