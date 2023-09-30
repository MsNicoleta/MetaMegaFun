'use client';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import styles from '../styles'; // Import styles (ensure the correct path)
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion.js'; // Import motion variants
import { StartSteps, TypingText, TitleText } from "../components"; // Import components
import { startingFeatures } from "../constants"; // Import constants

// Define a functional component named GetStarted
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} >
    {/* A container for motion animations */}
    <motion.div
      variants={staggerContainer} // Animation variants for staggering
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex ls:flex-row flex-col gap-8`}
    >
      {/* Left column with an image */}
      <motion.div
        variants={planetVariants('left')} // Animation variants for the planet
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src='/get-started.png' // Image source
          alt='get-started'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
      {/* Right column with text content */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)} // Animation variants for fading in
        className=" flex flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How MetaMegaFun Works" /> {/* Typing animation */}
        <TitleText title={<>Get Started with just a few clicks</>} /> {/* Title text */}
        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
          {startingFeatures.map((feature, index) => (
            // Mapping over starting features to display them
            <StartSteps
              key={feature}
              number={feature + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted; // Export the GetStarted component
