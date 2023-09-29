// Import necessary modules and components
'use client';
// Comment: This comment explains the purpose of the 'use client' comment, which indicates that this is a client-side component.

import { motion } from 'framer-motion'; // Import animations from Framer Motion library
import styles from '../styles'; // Import styles for consistent styling
import { navVariants } from '../utils/motion.js'; // Import animation variants from a utility file

// Define the Navbar component
const Navbar = () => (
  <motion.nav
    variants={navVariants} // Pass animation variants object to Framer Motion
    initial="hidden" // Set the initial animation state to 'hidden'
    whileInView="show" // Animate when the component is in view
    className={`${styles.xPaddings} py-8 relative`} // Apply CSS classes for styling
  >
    {/* Gradient Background */}
    <div className="absolute w-[50%] inset-0 gradient-01" />

    {/* Navbar Content */}
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      {/* Search Icon */}
      <img
        src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain"
      />

      {/* Website Title */}
      <h2 className="font-bold text-[24px] leading-[30px] text-white">
        Meta Mega Fun
      </h2>

      {/* Menu Icon */}
      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
