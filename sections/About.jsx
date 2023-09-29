// Import necessary modules and components
'use client';
import { motion } from 'framer-motion'; // Import animations from Framer Motion library
import { TypingText } from "../components"; // Import a custom TypingText component
import styles from '../styles'; // Import styles for consistent styling
import { fadeIn, staggerContainer } from '../utils/motion.js'; // Import animation utilities

// Define the About component
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />  {/* Apply a background gradient (assumed to be defined in CSS) */}

    {/* Motion animation container */}
    <motion.div
      variants={staggerContainer} // Use animation variants defined in motion.js utility
      initial="hidden" // Set initial animation state
      animate="show" // Trigger animation when component is mounted
      viewport={{ once: false, amount: 0.25 }} // Define animation viewport settings
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* TypingText component */}
      <TypingText title="| About MetaMegaFun" textStyles="text-center" />  {/* Render a TypingText component */}

      {/* Text content */}
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)} // Use fadeIn animation variant with specified settings
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        {/* Display text content */}
        <span className="font-bold text-white">Metaverse Mega Fun</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className="font-bold text-white">madness of the metaverse</span> of today, using only <span className="font-bold text-white">VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <span className="font-bold text-white">explore</span> the madness of the metaverse by scrolling down
      </motion.p>

      {/* Arrow-down image */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)} // Use fadeIn animation variant with specified settings
        src="/arrow-down.svg" alt="arrow-down" className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
