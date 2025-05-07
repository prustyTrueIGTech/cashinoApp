"use client";

import * as React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // or replace with your own `cn` function

const CarouselContext = React.createContext({} as any);

export function Carousel({
  opts,
  orientation = "horizontal",
  className,
  children,
}: {
  opts?: EmblaOptionsType;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children: React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...opts, axis: orientation === "vertical" ? "y" : "x" });

  return (
    <CarouselContext.Provider value={{ emblaApi }}>
      <div className={cn("relative", className)} ref={emblaRef}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex",
      "transition-transform duration-500 ease-in-out",
      className
    )}
    {...props}
  />
));
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("min-w-0 shrink-0", className)} {...props} />
));
CarouselItem.displayName = "CarouselItem";

export function CarouselPrevious() {
  const { emblaApi } = React.useContext(CarouselContext);
  return (
    <button
      onClick={() => emblaApi?.scrollPrev()}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
}

export function CarouselNext() {
  const { emblaApi } = React.useContext(CarouselContext);
  return (
    <button
      onClick={() => emblaApi?.scrollNext()}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}
