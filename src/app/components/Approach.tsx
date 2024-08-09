"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";


export function Approach(props: any) {

  const words = [{ text: "My Approach to Develop Project." }];
  return (
    <>

<div className="bg-black text-center flex justify-center p-5 sm:p-16">
<TypewriterEffectSmooth className="m-0"  words={words} />
</div>

      <div className="py-5 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title={props.card1} des={props.des1} icon={<AceternityIcon order="Phase 1"/>}>
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900"/>
        </Card>



        <Card title={props.card2}  des={props.des2} icon={<AceternityIcon order="Phase 2" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-violet-950"
            colors={[[125, 211, 252]]}
          />
        </Card>


        <Card title={props.card3} des={props.des3} icon={<AceternityIcon  order="Phase 3" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

      </div>


    
    
    </>
  );
}

const Card = ({
  title,
  des,
  icon,
  children,
}: {
  title: string;
  des:String,
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-fit sm:h-[30rem] border"
    >


      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-2xl sm:text-4xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h3 className="dark:text-white  text-sm sm:text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        {des}
        </h3>
      </div>
    </div>
  );
};

const AceternityIcon = (props:any) => {
  return (
    <div>
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
        {props.order}
      </span>
    </button>
  </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
