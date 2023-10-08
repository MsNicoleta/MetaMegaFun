'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-row gap-4 ml-[3rem]"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] h-[250px] w-[45%]  rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] md:mr-[3rem] flex flex-col max-w-[650px]">
        <h4 className=" font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <div className=" mt-[16px] font-normal lg:text-[20px] text[14px] text-secondary-white">
          {subtitle}
        </div>
      </div>
      <div className=" md:m-[2rem] lg:flex hidden w-[100px] h-[100px] items-center justify-center  bg-transparent border-[2px] border-white rounded-full">
        <img
          src='arrow.svg'
          alt='arrow'
          className='w-[40%] h-[40%] object-contain'
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
