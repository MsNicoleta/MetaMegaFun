'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion.js';
import { ExploreCard, TypingText, TitleText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings}`}
      id="explore">
      {/*the explore constant will allow us to scroll when pressing on our stamp image */}
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
        <TypingText title="| The World" textStyles="text-center" />
        {/* render the typing text effect component   */}
        <TitleText title={<> Choose the world you want <br className="md:block hidden" /> to explore </>} textStyles="text-center" />
        {/* render the explore card component for the   */}
        <div className="mt-[50px] flex lg:flex-row flex-col gap-5 min-h-[70vh] ]">
          {/* Mapping through an array of 'exploreWorlds' */}
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}             // Unique 'key' prop for React
              {...world}                // Spread the 'world' object properties as props
              index={index}             // Prop 'index' to track the current index in the loop
              active={active}           // Prop 'active' to pass the 'active' state
              handleClick={setActive}   // Prop 'handleClick' to pass a click handler function
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
};
export default Explore;
