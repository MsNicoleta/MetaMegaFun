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
        className="flex-[0.5] lg:max-w-[370px] flex justify-end  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative ml-[3rem] mr-[3rem]"
      >
        <div className="feedback-gradient" />
        <div>
          <div className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Samantha</div>
          <div className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[12px] text-white"> | Founder of MetaMegaFun</div>
        </div>
        <div className="mt-[24px] font-normal sm:text-[24px] text-[12px] sm:leading-[45px] leading-[39px] text-white" >“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1  flex justify-center  rounded-[32px] relative ml-[0.5rem] mr-[3rem]"
      >
        <img
          src='/planet-09.png'
          alt='planet-09'
          className='w-full rounded-[32px] lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
        />
        <motion.div
          variations={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain " />

        </motion.div>

      </motion.div>
    </motion.div>
  </section >
);

export default Feedback;
