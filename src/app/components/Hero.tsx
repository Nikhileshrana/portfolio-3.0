"use client";

import React, { useEffect, useRef } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { text } from "stream/consumers";
import createGlobe from "cobe";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Chatbox from "@/app/components/Chatbox";


export function Hero(props: any) {

  return (
    <>
      <div className=" bg-transparent h-[90vh] sm:h-screen w-full dark:bg-transparent bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden ">
        <div className=" bg-transparent absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  "></div>
        <div className="flex flex-col items-center justify-center h-fit z-10">

        <div className="pb-12">
         
        </div>



          <p className="text-neutral-600 dark:text-neutral-200 text-base sm:text-base  ">
            {props.h1}
          </p>
          <TypewriterEffectSmooth words={props.words}/>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Link href={props.cvlink}>
              <button className=" w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                {props.button1}
              </button>
            </Link>
            {/* <Link href="#featuredsection">
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                {props.button2}
              </button>
            </Link> */}

<Drawer>
            <DrawerTrigger>


            <div className= "bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="h-10 w-full relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Ask AI Nikhil
    </span>
    <svg
      fill="none"
      height="26"
      viewBox="0 0 24 24"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>


  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />

</div>



            </DrawerTrigger>
            <DrawerContent >
              <DrawerHeader> 
                <DrawerTitle>NIKHILESHRANA.TECH</DrawerTitle>
                <DrawerDescription>
                  <Chatbox />
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Back to Portfolio</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>



          </div>




        </div>

        <Globe className="absolute overflow-hidden sm:-bottom-80 "/>
      </div>
    </>
  ); 
}



export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 800, height: 800, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
