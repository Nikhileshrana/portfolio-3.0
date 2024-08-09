"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Reviews(props:any) {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden -z-10">
      <InfiniteMovingCards
        items={props.testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


