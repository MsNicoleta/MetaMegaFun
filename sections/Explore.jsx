'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion.js';
import { ExploreCard, TypingText, TitleText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    Explore section
  </section>
);
// the explore constant will allow us to scroll when pressing on our stamp image

<motion.div
  // Apply the motion animation with the 'staggerContainer' variant
  variants={staggerContainer}
  // Set the initial animation state to 'hidden'
  initial="hidden"
  // Trigger animation when the component is in view
  whileInView="show"
  // Customize the viewport settings for animation
  viewport={{ once: false, amount: 0.25 }}
  // Add CSS classes and styles to the component
  className={`${styles.innerWidth} mx-auto flex flex-col`}
>
  {/* Content of the motion.div goes here */}
</motion.div>
export default Explore;
