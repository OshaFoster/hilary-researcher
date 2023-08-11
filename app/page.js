'use client';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  stagger,
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
      <div className='flex flex-row max-w-2xl p-7'>
        <h1 className='text-2xl font-extralight'>{item.title}</h1>
      </div>
      <div className='flex flex-row pt-6' ref={ref}>
        <motion.h2
          className='text-2xl font-victor text-yellow-600'
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

  // animate in name and titme using frame motion

  return (
    <div className='flex flex-col w-screen background'>
      <div className='border border-slate-800 flex flex-row h-90vh'>
        <div className='px-12 flex flex-col w-4/6 border-r border-slate-800'>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.3 }}
            className='py-24'
          >
            <h2 className='text-2xl font-light'>
              Medical research is{' '}
              <span className='font-normal text-yellow-600'>hard</span> to
              interpret correctly and apply to real-life health situations. Yet,
              practicing evidence-based health care requires knowing what the
              evidence{' '}
              <span className='font-normal text-yellow-600'>means</span> so you
              can answer specific questions about health.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className='py-8 top-0 sticky z-40 background'
          >
            <h1 className='font-victor text-6xl  text-yellow-600'>
              Hilary Watts
            </h1>
            <h1 className='text-2xl  font-victor text-yellow-600'>
              Medical Content Researcher
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className='py-24'
          >
            <h2 className='text-2xl font-light'>
              I compile high-quality medical research and summarize it in
              everyday language. I work for writers and individuals with a
              vested interest in what the studies mean for life on the ground.
            </h2>
          </motion.div>
        </div>
        <div className='w-2/6 bg-with-image  flex items-center justify-center'></div>
      </div>

      <div className='flex flex-col '>
        <div className='flex flex-row border-b border-slate-800 px-12'>
          <p className='text-2xl my-5 font-light'>Background</p>
        </div>
        <div className='flex flex-row border-b border-slate-800'>
          <div className='px-12 w-1/2 '>
            <p className='top-0 sticky font-light text-2xl my-5'>Education</p>
          </div>

          <div className='flex flex-col w-1/2 border-l border-slate-800'>
            <div className='border-b border-slate-800 p-7'>
              <h1 className='text-2xl font-extralight '>BA Biology</h1>
            </div>
            <div className='p-7'>
              <h1 className='text-2xl font-extralight'>
                MA Counseling Psychology
              </h1>
            </div>
          </div>
        </div>
        <div className='flex flex-row border-b border-slate-800'>
          <div className='px-12 w-1/2'>
            <p className='top-0 sticky text-2xl my-5 font-light'>
              Professional
            </p>
          </div>

          <div className='flex flex-col  w-1/2 border-l border-slate-800'>
            {titles.map((item) => (
              <Title item={item} key={item.title} />
            ))}
            <motion.div className='progress' style={{ scaleX }} />
          </div>
        </div>
      </div>

      <div className='flex h-screen flex-col justify-center items-center '>
        <h2 className='text-4xl font-victor'>
          Find out how I can help you put the best evidence into context.
        </h2>
        <a
          className='flex justify-center items-center border w-1/4 mt-8 relative p-6 border-solid border-r-4 border-b-4 dark-blue hover:bg-blue-500 transition duration-300 ease-in-out'
          href='#'
        >
          <p className='text-2xl font-light'>Contact Me</p>
        </a>
      </div>
      <div className='flex justify-self-end border-t border-slate-800 px-12'>
        <p className='my-5'>website by oshafoster.com</p>
      </div>
    </div>
  );
}
