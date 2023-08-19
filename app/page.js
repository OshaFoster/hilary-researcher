'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

// <div className='flex flex-wrap flex-row max-w-sm  md:max-w-2xl p-12 pr-7'>
//   <h1 className='text-2xl font-extralight whitespace-normal'>{item.title}</h1>
function Title({ item }) {
  const ref = useRef(null); // Adjust the start and end values

  return (
    <section className='flex flex-row border-b border-slate-800'>
      <div className='flex flex-wrap flex-row max-w-md  md:max-w-2xl pl-6 sm:pl-12 p-7'>
        <h1 className='text-2xl font-extralight'>{item.title}</h1>
      </div>
      <div className='flex flex-row pt-7' ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className='text-2xl font-victor font-medium text-lime-700 mr-10'
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

  const EmailLink = () => {
    const recipientEmail = 'researcher@hilary.com';

    const mailtoLink = `mailto:${recipientEmail}`;

    return (
      <motion.a
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className='contact bg-lime-700 sm:bg-zinc-50 h-16 flex justify-center items-center border w-80 sm:w-96 mt-16 relative p-6 border-solid border-r-4 border-b-4 border-slate-800 hover:border-slate-800 sm:hover:border-emerald-800'
        href={mailtoLink}
      >
        <p className='text-2xl font-medium font-victor text-zinc-50 sm:text-lime-700'>
          Contact Me
        </p>
      </motion.a>
    );
  };

  {
    /* <div className='border-r flex flex-row h-90vh bg-with-image'>
          <div className='px-12 flex flex-col w-5/6 md:w-4/6 m-auto my-12 h-5/6 border-r bg-zinc-50 border-slate-800'> */
  }

  return (
    <>
      <CustomCursor />

      <div className='flex flex-col w-screen bg-zinc-50'>
        <div className='border-r flex flex-row h-90vh'>
          <div className='px-6 sm:px-12 flex flex-col w-5/6 md:w-4/6 border-r border-slate-800'>
            <div className='py-8 sm:py-24'>
              <h2 className='text-2xl font-light'>
                Medical research is{' '}
                <span className='font-normal text-lime-700'>
                  hard to interpret
                </span>{' '}
                correctly and apply to{' '}
                <span className='font-normal text-lime-700'>
                  real-life health
                </span>{' '}
                situations. Yet, practicing{' '}
                <span className='font-normal text-lime-700'>
                  evidence-based health care
                </span>{' '}
                requires knowing{' '}
                <span className='font-normal text-lime-700'>
                  what the evidence means
                </span>{' '}
                so you can answer specific questions about health.
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className='py-2 md:py-6 top-0 sticky z-40 bg-zinc-50 my-1'
            >
              <h1 className='font-victor text-6xl  text-lime-700'>
                Hilary Watts
              </h1>
              <h1 className='text-2xl  font-victor text-lime-700'>
                Medical Content Researcher
              </h1>
            </motion.div>
            <div className='py-8 sm:py-24'>
              <h2 className='text-2xl font-light'>
                I compile high-quality medical research and summarize it in
                everyday language. I work for writers and individuals with a
                vested interest in what the studies mean for life on the ground.
              </h2>
            </div>
          </div>
          <div className='w-1/6 md:w-2/6 bg-with-image  flex items-center justify-center'></div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row border-y border-zinc-50 sm:border-slate-800 px-6 sm:px-12 font-semibold sm:font-normal  bg-lime-700 sm:bg-zinc-50'>
            <p className='text-2xl my-5 text-zinc-50 sm:text-slate-800'>
              Background
            </p>
          </div>

          <div className='flex flex-col  md:flex-row border-b border-slate-800'>
            <div className='px-6 sm:px-12 w-full md:w-1/2 bg-lime-700 sm:bg-zinc-50'>
              <p className='top-5 sticky text-2xl my-5  text-zinc-50 sm:text-slate-800'>
                Education
              </p>
            </div>

            <div className='flex flex-col w-full md:w-1/2 border-l border-slate-800'>
              <div className='border-b border-slate-800 p-7 pl-6 sm:pl-12'>
                <h1 className='text-2xl font-extralight '>BA Biology</h1>
              </div>
              <div className='p-7 pl-6 sm:pl-12'>
                <h1 className='text-2xl font-extralight'>
                  MA Counseling Psychology
                </h1>
              </div>
            </div>
          </div>

          <div className='flex flex-col  md:flex-row '>
            <div className='pl-6 sm:pl-12 w-full md:w-1/2 border-b border-slate-800 bg-lime-700 sm:bg-zinc-50'>
              <p className='top-5 sticky text-2xl my-5 text-turquise text-zinc-50 sm:text-slate-800'>
                Professional
              </p>
            </div>

            <div className='flex flex-col  w-full md:w-1/2 border-l border-slate-800'>
              {titles.map((item) => (
                <Title item={item} key={item.title} />
              ))}
              <motion.div className='progress' style={{ scaleX }} />
            </div>
          </div>
        </div>

        <div className='flex h-screen flex-col justify-center items-center '>
          <h2 className='text-3xl font-victor mx-12 text-center'>
            Find out how I can help you put the best evidence into context.
          </h2>
          <EmailLink />
        </div>
        <div className='flex justify-self-end justify-center border-t border-slate-800 px-12'>
          <p className='my-3'>website by osha foster</p>
        </div>
      </div>
    </>
  );
}
