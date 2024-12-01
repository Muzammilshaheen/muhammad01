
"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import YouTube from "react-youtube";
import { Vortex } from "./ui/vortex";

function videoSection () {
  const opts = {
    height:"720",
    widht: "1400",
    playerVise: {
      autoplay: 0,
    }
  }
  return (
    <>
  
 <div className="flex flex-col overflow-hidden bg-black">
 <div className="absolute inset-auto z-40 h-44 w-full bg-gradient-to-t from-black to-transparent mt-[11rem]"></div>

 <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              NEXT.JS <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-red-400">
                YOUTUBE VIDEO
              </span>
            </h1>
          </>
        }
      >
        {/* <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
        <YouTube opts={opts} videoId="BNCRpR9YZIk" />
        <div className="">
        <h2 className="text-white">Youtube video</h2>
        </div>
      </ContainerScroll> 
      </Vortex>
      <div>
  <h1 className="text-4xl font-bold text-center mb-11 text-white"> 
    YouTube Video 
  </h1>
  <h2 className="text-2xl font-semibold mb-2 text-white ml-10">Description</h2>
  <p className="text-base text-gray-700 mb-4 ml-10">
    Struggling to save money? In this video, I'll walk you through 7<br/>
     simple yet effective strategies to build your savings without feeling deprived.<br/> 
     Whether you're saving for a vacation, a new car, or just want financial peace<br/> 
     of mind, these tips will help you reach your goals faster!
  </p>
  <p className="text-base text-gray-700 mb-4 ml-10">
    💬 Have a question? Drop it in the comments below! <br />
    ✅ Subscribe for more money-saving advice:{" "}
    <a 
      href="https://www.youtube.com/channel/YOUR_CHANNEL_LINK" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-500 underline ml-10"
    >
      next.js
    </a>
    <br />
    📱 Follow me on Instagram for daily tips:{" "}
    <a 
      href="https://www.instagram.com/muzammil" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-500 underline ml-10"
    >
      Your Instagram
    </a>
  </p>
  <p className="text-sm text-gray-500 mb-11 ml-10">
    #MoneySaving #PersonalFinance #FinancialFreedom
  </p>
</div>

      
    </div>
    </>
  )
}

export default videoSection