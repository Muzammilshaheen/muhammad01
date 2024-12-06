"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const words = `
It seems like you're looking for information or assistance related to Muzammil Shaheen's web development projects or related work. Could you provide more specific details or clarify your request? For example:

Are you looking for examples of web development projects by Muzammil Shaheen?
Do you want help with a project in web development?
Are you searching for resources to learn web development!`;

const loadingStates = [
  { text: "Buying a condo" },
  { text: "Travelling in a flight" },
  { text: "Meeting Tyler Durden" },
  { text: "He makes soap" },
  { text: "We goto a bar" },
  { text: "Start a fight" },
  { text: "We like it" },
  { text: "Welcome to F**** C***" },
];

function ServicesSection() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          SERVICES PROVIDED
          <TextGenerateEffect words={words} />
        </motion.h1>

        <div className="w-full h-[60vh] flex flex-col items-center justify-center -mt-40">
          <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

          <button
            onClick={() => setLoading(true)}
            className="mt-6 bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
            style={{
              boxShadow:
                "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
            }}
          >
            Click to load
          </button>

          {loading && (
            <button
              className="fixed top-4 right-4 text-black dark:text-white z-[120]"
              onClick={() => setLoading(false)}
            >
              <IconSquareRoundedX className="h-10 w-10" />
            </button>
          )}
        </div>
      </LampContainer>
    </div>
  );
}

export default ServicesSection;
