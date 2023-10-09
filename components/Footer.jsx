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
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col mt-[7rem] gap-8`}>
      <div className="flex justify-between items-center flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white xl:ml-[3rem] ml-[0rem] lg:pl-[10px]">
          Enter the Metaverse
        </h4>

        <button type="submit" className="flex items-center h-fit px-6 py-4 bg-[#25618b] rounded-[32px] gap-[12px mr-[3rem]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] mr-[15px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">ENTER METAMEGAVERSE</span>
        </button>
      </div>
      <div className="flex flex-col">
        {/* <hr className='border-[#25618b] ' /> */}

        <div className="mb-[50px] h-[1px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white opacity-50">
            Metaversus
          </h4>
          <div className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </div>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
