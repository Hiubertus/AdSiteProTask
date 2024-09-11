"use client";

import React, { useState } from "react";
import { Button } from "@/components";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type CarCategory = "osobowe" | "dostawcze";

export const CarCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CarCategory>("osobowe");
  const carImages = {
    osobowe: [
      { src: "/Car1.png", alt: "Samochód osobowy 1" },
      { src: "/Car2.png", alt: "Samochód osobowy 2" },
      { src: "/Car3.png", alt: "Samochód osobowy 3" },
      { src: "/Car1.png", alt: "Samochód osobowy 1" },
      { src: "/Car2.png", alt: "Samochód osobowy 2" },
      { src: "/Car3.png", alt: "Samochód osobowy 3" },
    ],
    dostawcze: [
      { src: "/Car2.png", alt: "Samochód osobowy 1" },
      { src: "/Car2.png", alt: "Samochód osobowy 2" },
      { src: "/Car2.png", alt: "Samochód osobowy 3" },
      { src: "/Car2.png", alt: "Samochód osobowy 1" },
      { src: "/Car2.png", alt: "Samochód osobowy 2" },
      { src: "/Car2.png", alt: "Samochód osobowy 3" },
    ],
  };

  return (
    <section className="w-full">
      <div
        className={
          "custom-width ml-auto pl-6 pb-16 pt-8 sm:py-32 lg:py-40 sm:pl-9 lg:pl-12"
        }
      >
        <h2 className="text-lg lg:text-2xl font-semibold text-blue-700">
          Prezentacja firmy
        </h2>
        <h3 className="mt-2 text-2xl lg:xl:text-4xl font-bold text-gray-900">
          ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
        </h3>
        <div className="mt-4 flex flex-col items-start space-y-0 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8">
          <Button
            variant={"ghost"}
            className={`text-lg p-0 font-medium hover:bg-transparent ${activeCategory === "osobowe" ? "text-blue-700 underline" : "text-gray-700 hover:text-blue-700"}`}
            onClick={() => setActiveCategory("osobowe")}
          >
            Samochody osobowe
          </Button>
          <Button
            variant={"ghost"}
            className={`text-lg p-0 font-medium hover:bg-transparent ${activeCategory === "dostawcze" ? "text-blue-700 underline" : "text-gray-700 hover:text-blue-700"}`}
            onClick={() => setActiveCategory("dostawcze")}
          >
            Samochody dostawcze
          </Button>
        </div>

        <div className="mt-8">
          <Splide

            options={{
                classes: {
                    pagination: 'splide__pagination custom-splide-pagination'
                },
              perPage: 2.3,
              perMove: 1,
              gap: "2rem",
              focus: "center",
              pagination: true,
              arrows: false,
              trimSpace  : false,
              start: 1,
              breakpoints: {
                640: {
                  perPage: 1.3,
                },
                768: {
                  perPage: 1.7,
                },
                1024: {
                  perPage: 2.3,
                },
              },
            }}
            hasTrack={true}
            aria-label="Car Images"
          >
            {carImages[activeCategory].map((car, index) => (
              <SplideSlide key={index}>
                <Image
                  src={car.src}
                  alt={car.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};
