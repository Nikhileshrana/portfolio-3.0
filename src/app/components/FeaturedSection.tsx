"use client";
import Image from "next/image";
import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import MagicButton from "@/app/components/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { Meteors } from "@/components/ui/meteors";

export function FeaturesSectionDemo(props:any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "realnikhileshrana@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div id="featuredsection" className="grid grid-cols-1 p-5 sm:p-0 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[350px] lg:min-h-[300px]"
        className="bg-[#0b0b0b] "
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tech enthusiast with a passion for development.
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Learner. Developer. Designer. I am a Full-Stack Developer.
          </p>
        </div>
        <Image
          src="/b5.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-8 lg:-right-[0%] grayscale filter -bottom-14 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 min-h-[300px]"
        className="bg-[#0b0b0b] relative flex flex-col items-center justify-center"
      >
        <Meteors number={20} />
        <p className="text-white text-sm md:text-2xl max-w-xl font-bold mt-6 text-center ">
        Liked my Portfolio? Here's my email address. 
        </p>
        <div className="flex flex-col sm:flex-row items-center h-full gap-4 mt-6 sm:mt-2 z-auto ">
          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="center"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />
        </div>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 min-h-[350px] lg:min-h-[600px] xl:min-h-[300px]"
        className="bg-[#0b0b0b] "
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {props.infotitle}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          {props.infodes}
          </p>
        </div>
        <Image
          src="/b4.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:right-[0%] lg:right-[5%] bottom-10 object-contain rounded-2xl"
        />
        <BackgroundBeams />
      </WobbleCard>
    </div>
  );
}
