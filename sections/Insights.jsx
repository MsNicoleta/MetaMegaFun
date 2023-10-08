'use client';

import { motion } from 'framer-motion'; // Import motion from Framer Motion
import styles from '../styles'; // Import styles (ensure the correct path)
import { staggerContainer } from '../utils/motion.js'; // Import motion variants
import { InsightCard, TypingText, TitleText } from "../components"; // Import components
import { insights } from '../constants';


const Insights = () => (
  <section>
    <motion.div
      variants={staggerContainer} // Animation variants for staggering
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto flex-col items-center`}
    >
      <TypingText title="| Insight"
        textStyles="text-center" />

      <TitleText title="Insight about MetaMegaFun"
        textStyles="text-center" />
      <div className="mt-[50px] flex flex-row flex-col gap-[30px] min-h-[70vh] ]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight- ${index}`}{...insight} index={index + 1}
            {...insight}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
