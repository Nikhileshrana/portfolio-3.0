"use client";
import React, { useEffect, useState } from 'react';
import { Hero } from "@/app/components/Hero";
import { FeaturesSectionDemo } from "@/app/components/FeaturedSection";
import { Reviews } from "@/app/components/Reviews";
import { Approach } from "@/app/components/Approach";
import { Projects } from "@/app/components/Projects";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import axios from "axios";
import Data from "@/data/myinfo.json";

const Page = () => {


  // const getdata = async ()=>
  //   {
  //     try 
  //     {
  //       const response = await axios.post("/api/fetchdata",{});
  //       console.log(response.data);
  //     }
  //     catch(e)
  //     {
  //       console.log("Error");
  //     }
  //   }
  
  return (
    <>
      <div className="relative">
        <ShootingStars className="fixed top-0 left-0 w-full h-full " />
        <StarsBackground className="fixed top-0 left-0 w-full h-full " />
        
        <Hero
          h1={Data.h1info} 
          cvlink={Data.cvlink} 
          button1="Download CV" 
          button2="Go"
          words={Data.words} 
        />

        <div className='bg-black'>
          <FeaturesSectionDemo 
            infotitle={Data.featuredSection.infotitle} 
            infodes={Data.featuredSection.infodes} 
          />
        </div>
        
        <Approach 
          card1={Data.approachData[0].card1} 
          des1={Data.approachData[0].des1} 
          card2={Data.approachData[1].card2} 
          des2={Data.approachData[1].des2} 
          card3={Data.approachData[2].card3} 
          des3={Data.approachData[2].des3} 
        />

        <Projects projectinfo={Data.projectInfo} />
        <Reviews testimonials={Data.testimonials} />
      </div>
    </>
  )
}

export default Page;
