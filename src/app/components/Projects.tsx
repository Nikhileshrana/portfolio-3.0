"use client";

import React, { useEffect, useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export function Projects(props: any) {
    const [hasMounted, setHasMounted] = useState(false);
    const [projectinfo, setProjectInfo] = useState(props.projectinfo || []);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Prevent rendering on the server-side or if the component hasn't mounted yet
    if (!hasMounted) {
        return null;
    }

    const words = [{ text: "Projects" },{text: "I've Worked On"}];

    return (
        <>

            <div className="bg-black text-center flex justify-center pt-5 sm:pt-16">
                <TypewriterEffectSmooth className="m-0" words={words} />
            </div>


            <div className="h-full grid grid-cols-2 overflow-hidden justify-around gap-0 sm:px-40 bg-black">
                {projectinfo.map((project: any, i: any) => (
                    <div className="sm:m-16" key={i}>

                        <PinContainer title={project.title} href={project.href}>
                            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-36 lg:w-[30rem] lg:h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                    {project.title}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500">{project.description}</span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4">
                                    <img
                                        src={project.imageurl}
                                        className="h-full w-full"
                                        alt="Project Card"
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}

            </div>



        </>
    );
}
