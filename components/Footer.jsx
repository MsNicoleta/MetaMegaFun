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
    footer
  </motion.footer>
);

export default Footer;
