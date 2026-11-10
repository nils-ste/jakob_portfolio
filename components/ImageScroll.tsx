"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageScrollProps {
  images: string[];
}

export default function ImageScroll({ images }: ImageScrollProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={image}
                alt={`Projektbild ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
