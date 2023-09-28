'use client';

import { motion } from 'framer-motion';
import { TypingText } from "../components";

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion.js';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      About section
    >
      <TypingText title="| About MetaMegaFun" textStyles="text-center" />
    </motion.div>
  </section>
);

export default About;
