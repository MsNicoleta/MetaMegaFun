'use client';

import { motion } from 'framer-motion'; // Import motion from Framer Motion
import styles from '../styles'; // Import styles (ensure the correct path)
import { staggerContainer, fadeIn } from '../utils/motion.js'; // Import motion variants
import { TypingText, TitleText } from "../components"; // Import components

const World = () => (
  <section className={`${styles.paddings} relative z-10`} >

    {/* A container for motion animations */}
    <motion.div
      variants={staggerContainer} // Animation variants for staggering
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto flex-col`}
    >
      <TypingText title="|People on the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)} // Animation variants for fading in
        className="relative mt-[80px] flex w-full h-[550px]"
      >
        <img src='/map.png'
          alt='map'
          className='w-full h-full object-contain'
        />
        <div className='absolute bottom-20 mb-8 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

          <img src='people-01.png'
            alt='people'
            className='w-full h-full  '
          />
        </div>
        <div className='absolute top-10 mt-4 left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

          <img src='people-02.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

          <img src='people-03.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        {/* The The Upside Down container start */}
        <div className='absolute top-60 left-40 w-[196px] h-[150px] p-[7px] rounded-3xl bg-[#5d6680] shadow-2xl shadow-lg shadow-fuchsia-600/50'>

          <img
            src='planet-002.png'
            alt='planet'
            className='object-cover object-bottom h-full w-full rounded-2xl transform scale-100'
          />
          <p className="absolute bottom-5 right-5 mr-2 font-bold text-[18px] leading-[30px] text-white">The Upside Down </p>
          <span className="">
            <p className="absolute top-1/2  right-8 flex items-start  font-normal text-[12px] leading-[30px] text-white"> + 264 has joined </p>
            <div className='absolute top-1/2 ml-6 left-5 w-[24px] h-[24px] rounded-full] transform -translate-y-1/2'>
              <img
                src='people-04.png'
                alt='people'
                className='w-full h-full mt-4  rounded-full'
              />
            </div>

            <div className='absolute top-1/2 ml-3 left-5 w-[24px] h-[24px] rounded-full transform -translate-y-1/2'>
              <img
                src='people-05.png'
                alt='people'
                className='w-full h-full  mt-4 rounded-full'
              />
            </div>
            <div className='absolute top-1/2 left-5 w-[24px] h-[24px] rounded-full  transform -translate-y-1/2'>
              <img
                src='people-06.png'
                alt='people'
                className='w-full h-full  mt-4 rounded-full'
              />
            </div>
          </span>
        </div>
        {/* The The Upside Down container ends */}

        {/* Hawkins Labs container start */}
        <div className='absolute top-90 right-40 w-[196px] h-[150px] p-[7px] rounded-3xl bg-[#5d6680] shadow-2xl shadow-lg shadow-fuchsia-600/50'>

          <img
            src='planet-003.png'
            alt='planet'
            className='object-cover object-right h-full w-full rounded-2xl transform scale-100 '
          />

          <p className="absolute flex items-start bottom-5 mr-6 right-5 font-bold text-[18px] leading-[30px] text-white">Hawkins Labs </p>
          <span className="">
            <p className="absolute top-1/2  right-8 flex items-start  font-normal text-[12px] leading-[30px] text-white"> +264 has joined </p>
            <div className='absolute top-1/2 ml-6 left-5 w-[24px] h-[24px] rounded-full] transform -translate-y-1/2'>
              <img
                src='people-04.png'
                alt='people'
                className='w-full h-full mt-4  rounded-full'
              />
            </div>

            <div className='absolute top-1/2 ml-3 left-5 w-[24px] h-[24px] rounded-full transform -translate-y-1/2'>
              <img
                src='people-05.png'
                alt='people'
                className='w-full h-full  mt-4 rounded-full'
              />
            </div>
            <div className='absolute top-1/2 left-5 w-[24px] h-[24px] rounded-full  transform -translate-y-1/2'>
              <img
                src='people-06.png'
                alt='people'
                className='w-full h-full  mt-4 rounded-full'
              />
            </div>
          </span>
        </div>
        {/* Hawkins Labs container ends */}


      </motion.div>
    </motion.div>

  </section >
);

export default World;
