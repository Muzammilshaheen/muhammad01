"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import React from "react";
import { Spotlight } from "./ui/spotlight";
 

function HeroSection() {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroHighlight>
      
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-1xl px-4 md:text-2xl lg:text-2xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
         <p className="gap-2 text-lg mb-10"> I seems like you're mentioning Muzammil and discapion. Could you clarify your request or provide more details about what you're looking for? Are you asking for a description of 
          someone named Muzammil, or is this about something else.<br/></p>
          
          <Highlight className="text-red-800 dark:text-black text-4xl">
           Muzammil Shaheen
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}

export default HeroSection;
