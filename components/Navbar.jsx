'use client';
// convention  on how to transform the server side component to a client side component simply by adding the line above.
// these are react server components by default ths allows us to automatically adopt Server components with no extra work and keep great performance

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion.js';

const Navbar = () => (
  <motion.nav
    variants={navVariants} // Pass the variant object into Framer Motion
    initial="hidden" // Set the initial state to variants.hidden
    whileInView="show" // Animate when in view
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto
      flex justify-between gap-8`}>
      <img
        src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-bold text-[24px] leading-[30px] text-white">
        Meta Mega Fun
      </h2>
      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
