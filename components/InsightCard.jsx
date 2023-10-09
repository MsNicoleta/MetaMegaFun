'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-6 ml-[3rem] mr-[3rem]"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[350px] h-[260px] mt-8 w-full rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[50px] md:m-[3rem] flex flex-col max-w-[850px]">
        <h4 className="font-normal lg:text-[38px] text-[26px] text-white">
          {title}
        </h4>
        <div className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </div>
      </div>
      <div className="md:m-[2rem] lg:flex hidden w-[70px] h-[70px] items-center justify-center bg-transparent border-[2px] border-white rounded-full">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
