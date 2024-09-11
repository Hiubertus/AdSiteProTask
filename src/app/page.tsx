import Image from "next/image";
import {Footer, Hero, Seo} from "@/components";
import {CarCarousel} from "@/components/CarCarousel";
import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <div className={"max-w-[1700px] mx-auto"}>
                <div className={"container mx-auto relative h-1 w-full"}>
                    <div className="absolute -top-[70px] xl:-top-[110px] 2xl:-top-[140px] right-0 z-10">
                        <Image
                            src="/BrakeLines.png"
                            alt="Break Lines Background"
                            className={"hidden 2xl:block"}
                            width={700}
                            height={700}
                            priority={true}
                        />
                        <Image
                            src="/BrakeLines.png"
                            alt="Break Lines Background"
                            className={"hidden xl:block 2xl:hidden"}
                            width={600}
                            height={600}
                            priority={true}
                        />
                        <Image
                            src="/BrakeLines.png"
                            alt="Break Lines Background"
                            className={"hidden lg:block xl:hidden"}
                            width={500}
                            height={500}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
            <div className={"max-w-[1700px] mx-auto"}>
                <Hero></Hero>
            </div>
            <div className={"max-w-[1700px] mx-auto"}>
                <CarCarousel/>
            </div>
            <Seo/>
            <Footer/>
        </div>
    );
}
