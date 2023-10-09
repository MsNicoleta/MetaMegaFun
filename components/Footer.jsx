'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion'; // Import animation variants from a utility file

const Footer = () => (
  <motion.footer
    variants={footerVariants} // Pass animation variants object to Framer Motion
    initial="hidden" // Set the initial animation state to 'hidden'
    whileInView="show" // Animate when the component is in view
    className={`${styles.xPaddings} py-8 relative`} // Apply CSS classes for styling
  >
    <div className='footer-gradient' />

    <div className={`${styles.innerWidth} mx-auto flex  flex-col  gap-8`}>
      <div className='flex justify-between items-center flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white ml-[3rem]' >Enter the Metaverse </h4>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
