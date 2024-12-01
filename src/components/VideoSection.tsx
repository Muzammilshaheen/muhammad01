
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
 <div className="absolute inset-auto z-40 h-44 w-full bg-gradient-to-t from-black to-transparent mt-2"></div>

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
      
      
    </div>
    </>
  )
}

export default videoSection