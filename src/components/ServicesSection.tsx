"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const words =`Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;


function ServicesSection () {
  return (
    <div>
<LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        SERVICES PROVIDE
        <TextGenerateEffect words={words} />;
      </motion.h1>
    </LampContainer>
    </div>
  )
}

export default ServicesSection