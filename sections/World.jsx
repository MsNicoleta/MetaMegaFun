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
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src='/map.png'
          alt='map'
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

          <img src='people-01.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-10 left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

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
        <div className='absolute top-60 left-40 w-[196px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680]'>

          <img src='planet-02.png'
            alt='people'
            className=' object-cover  h-full w-full object-center  rounded-3xl'
          />
          <p className="  absolute bottom-5 right-3 mr-5 font-bold text-[16px] leading-[30px] text-white">The Upside Down </p>

          <div className='absolute top-1/2 left-20 w-[30px] h-[30px]  rounded-full bg-[#5d6680]'>

            <img src='people-01.png'
              alt='people'
              className='w-full h-full'
            />
          </div>
          <div className='absolute top-1/2 -left-15 w-[30px] h-[30px]  rounded-full bg-[#5d6680]'>

            <img src='people-02.png'
              alt='people'
              className='w-full h-full'
            />
          </div>

        </div>
      </motion.div>
    </motion.div>

  </section >
);

export default World;
