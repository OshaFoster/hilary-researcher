'use client';
import Image from 'next/image';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';

const titles = [
  {
    title: 'Medical content researcher and reviewer for The Ruscio Institute',
    years: '03yrs',
  },
  { title: 'Biologist', years: '10yrs' },
  { title: 'Editor and writer', years: '11yrs' },
  { title: 'Journalist', years: '02yrs' },
  { title: 'Student of medicine', years: '02yrs' },
  { title: 'Marriage & Family Therapist trainee', years: '01yr' },
];

function useParallax(value, start, end) {
  return useTransform(value, [0, 1], [start, end]);
}

function Title({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(ref);

  const y = useParallax(scrollYProgress, -10, 0); // Adjust the start and end values

  return (
    <section className='flex flex-row border-b border-slate-800'>
      <div className='flex flex-row  p-5'>
        <h1 className='text-2xl font-extralight'>{item.title}</h1>
      </div>
      <div className='flex flex-row pt-6' ref={ref}>
        <motion.h2
          className='text-2xl font-extralight text-yellow-600'
          style={{ y }}
        >
          {item.years}
        </motion.h2>
      </div>
    </section>
  );
}


export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className='flex flex-col w-screen background'>
      <div class='border border-slate-800 flex flex-row h-90vh'>
        <div class='px-12 flex flex-col w-4/6 border-r border-slate-800'>
          <div class='py-24'>
            <h2 class='text-2xl font-extralight'>
              Medical research is{' '}
              <span class='font-normal text-yellow-600'>hard</span> to interpret
              correctly and apply to real-life health situations. Yet,
              practicing evidence-based health care requires knowing what the
              evidence <span class='font-normal text-yellow-600'>means</span> so
              you can answer specific questions about health.
            </h2>
          </div>
          <div class='py-8 top-0 sticky z-40 background'>
            <h1 class='text-6xl font-extralight font-serif text-yellow-600'>
              Hilary Watts
            </h1>
            <h1 class='text-2xl font-extralight font-serif text-yellow-600'>
              Medical Content Researcher
            </h1>
          </div>
          <div class='py-24'>
            <h2 class='text-2xl font-extralight'>
              I compile high-quality medical research and summarize it in
              everyday language. I work for writers and individuals with a
              vested interest in what the studies mean for life on the ground.
            </h2>
          </div>
        </div>
        <div class='w-2/6 bg-with-image  flex items-center justify-center'></div>
      </div>

      <div class='flex flex-col '>
        <div class='flex flex-row border-b border-slate-800 px-12'>
          <p class='text-2xl font-extralight my-5'>Background</p>
        </div>
        <div class='flex flex-row border-b border-slate-800'>
          <div class='px-12 w-1/2 '>
            <p class='top-0 sticky font-extralight text-2xl my-5'>Education</p>
          </div>

          <div class='flex flex-col w-1/2 border-l border-slate-800'>
            <div class='border-b border-slate-800 p-5'>
              <h1 class='text-2xl font-extralight '>BA Biology</h1>
            </div>
            <div class='p-5'>
              <h1 class='text-2xl font-extralight'>
                MA Counseling Psychology
              </h1>
            </div>
          </div>
        </div>
        <div class='flex flex-row border-b border-slate-800'>
          <div class='px-12 w-1/2'>
            <p class='top-0 sticky text-2xl font-extralight my-5'>
              Professional
            </p>
          </div>

          <div class='flex flex-col h-90vh w-1/2 border-l border-slate-800'>
            {titles.map((item) => (
              <Title item={item} key={item.title} />
            ))}
            <motion.div className='progress' style={{ scaleX }} />
          </div>
        </div>
      </div>

      <div class='flex flex-col h-screen px-12 justify-center'>
        <h2 class='text-2xl'>
          Find out how I can help you put the best evidence into context.
        </h2>
        <h2 class='text-2xl'>contact me</h2>
      </div>
    </div>
  );
}
