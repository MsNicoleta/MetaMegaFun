'use client';

import { motion } from "framer-motion";
import styles from '../styles'; // Import styles (ensure the correct path)
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion.js'; // Import motion variants


const Feedback = () => (
  <section>
    <motion.div
      variants={staggerContainer} // Animation variants for staggering
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max[370px] flex justify-end  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient">
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Samantha</h4>
            <p> Founder of MetaMegaFun</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
