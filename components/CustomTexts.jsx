'use client';

import { motion } from 'framer-motion';

import { textContainer } from '../utils/motion.js';


import { textContainer } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer(1.1)}
    className={textStyles}
  >
    Typing Text

  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <h2>Title Text</h2>
);
