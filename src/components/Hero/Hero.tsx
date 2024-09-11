import React from 'react';
import {Button} from "@/components";
import Image from "next/image";

export const Hero: React.FC = () => {
    return (

        <div
            className="relative bg-white py-12 sm:py-20 md:py-28 lg:py-32 xl:py-40 2xl:py-[180px] sm:mb-4 md:mb-8 lg:mb-16 xl:mb-24 2xl:mb-32 ">
            <div className="absolute lg:top-1/2 sm:top-3/4 right-0 z-20 hidden sm:block">
                <Image
                    src="/MultipleCars.png"
                    alt="Multiple Cars Background"
                    width={1100}
                    height={1100}
                    className="hidden 2xl:block"
                    priority={true}
                />
                <Image
                    src="/MultipleCars.png"
                    alt="Multiple Cars Background"
                    width={900}
                    height={900}
                    className="hidden xl:block 2xl:hidden"
                    priority={true}
                />
                <Image
                    src="/MultipleCars.png"
                    alt="Multiple Cars Background"
                    width={700}
                    height={700}
                    className="hidden lg:block xl:hidden"
                    priority={true}
                />
                <Image
                    src="/MultipleCars.png"
                    alt="Multiple Cars Background"
                    width={500}
                    height={500}
                    className="hidden md:block lg:hidden"
                    priority={true}
                />
                <Image
                    src="/MultipleCars.png"
                    alt="Multiple Cars Background"
                    width={400}
                    height={400}
                    className="hidden sm:block md:hidden"
                    priority={true}
                />
            </div>

            <div className="relative z-20">
                <div className="container mx-auto px-6 sm:px-9 lg:px-12">
                    <div className={"max-w-3xl lg:max-w-2xl xl:max-w-4xl"}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900">
                            SPRZEDAJEMY SAMOCHODY Z EUROPY
                        </h1>
                    </div>
                    <div className={"max-w-lg"}>
                        <p className="mt-4 md:mt-8 xl:mt-12 text-lg md:text-xl xl:text-2xl text-gray-700">
                            Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
                        </p>
                        <div className="mt-4 md:mt-8 xl:mt-12 flex space-x-4">
                            <Button
                                className="bg-white text-blue-600 border border-blue-600
                       hover:bg-blue-600 hover:text-white
                       transition-colors duration-300"
                            >
                                Zobacz zdjęcia
                            </Button>
                            <Button
                                className="bg-blue-600 text-white
                       hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600
                       transition-colors duration-300"
                            >
                                Zadzwoń do nas
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}