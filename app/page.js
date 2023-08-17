'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, inView, stagger } from 'framer-motion';
import CustomCursor from './components/customCursor';
const titles = [
  {
    title: 'Medical content researcher and reviewer for The Ruscio Institute',
    years: '3yrs',
  },
  { title: 'Biologist', years: '10yrs' },
  { title: 'Editor and writer', years: '11yrs' },
  { title: 'Journalist', years: '2yrs' },
  { title: 'Student of medicine', years: '2yrs' },
  { title: 'Marriage & Family Therapist trainee', years: '1yr' },
];

function Title({ item }) {
  const ref = useRef(null); // Adjust the start and end values

  return (
    <section className='flex flex-row border-b border-slate-800'>
      <div className='flex flex-wrap flex-row max-w-2xl p-7'>
        <h1 className='text-2xl font-extralight'>{item.title}</h1>
      </div>
      <div className='flex flex-row pt-7' ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className='text-2xl font-victor text-yellow-500'
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
    <>
      <CustomCursor />

      <div className='flex flex-col w-screen bg-zinc-50'>
      <div className='border border-slate-800 flex flex-row h-90vh'>
        <div className='px-12 flex flex-col w-4/6 border-r border-slate-800'>
          <div className='py-24'>
            <h2 className='text-2xl font-light'>
              Medical research is{' '}
              <span className='font-normal highlight'>hard</span> to
              interpret correctly and apply to real-life health situations. Yet,
              practicing evidence-based health care requires knowing what the
              evidence{' '}
              <span className='font-normal highlight'>means</span> so you
              can answer specific questions about health.
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className='py-6 top-0 sticky z-40 bg-zinc-50 my-1'
          >
            <h1 className='font-victor text-6xl  highlight'>
              Hilary Watts
            </h1>
            <h1 className='text-2xl  font-victor highlight'>
              Medical Content Researcher
            </h1>
          </motion.div>
          <div className='py-24'>
            <h2 className='text-2xl font-light'>
              I compile high-quality medical research and summarize it in
              everyday language. I work for writers and individuals with a
              vested interest in what the studies mean for life on the ground.
            </h2>
          </div>
        </div>
        <div className='w-2/6 bg-with-image  flex items-center justify-center'></div>
      </div>

        <div className='flex flex-col '>
          <div className='flex flex-row border border-slate-800 px-12'>
            <p className='text-2xl my-5'>Background</p>
          </div>
          <div className='flex flex-row border-b border-slate-800'>
            <div className='px-12 w-1/2 '>
              <p className='top-0 sticky text-2xl my-5'>Education</p>
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
              <p className='top-0 sticky text-2xl my-5'>Professional</p>
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
          <h2 className='text-3xl font-victor'>
            Find out how I can help you put the best evidence into context.
          </h2>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className='contact h-16 flex justify-center items-center border w-1/4 mt-16 relative p-6 border-solid border-r-4 border-b-4 border-slate-800 hover:border-yellow-500 '
            href='#'
          >
            <p className='text-2xl font-light font-victor text-yellow-500'>
              Contact Me
            </p>
          </motion.a>
        </div>
        <div className='flex justify-self-end justify-center border-t border-slate-800 px-12'>
          <p className='my-3'>website by osha foster</p>
        </div>
      </div>
    </>
  );
}
