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
          <CarouselItem key={index} className="basis-[85%] md:basis-2/3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image}
                alt={`Projektbild ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 66vw"
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
