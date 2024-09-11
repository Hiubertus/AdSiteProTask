"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";
import { MenuIcon } from "lucide-react";

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="w-full bg-white mx-auto max-w-[1700px] relative">
            <div className="container mx-auto px-6 sm:px-9 lg:px-12">
                <div className="flex items-center justify-between h-16 xl:h-24 2xl:h-32">
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={150}
                            height={50}
                            className={"hidden 2xl:block"}
                        />
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={125}
                            height={50}
                            className={"hidden xl:block 2xl:hidden"}
                        />
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={100}
                            height={50}
                            className={"xl:hidden"}
                        />
                    </div>

                    {/* Burger menu, widoczne tylko na ekranach mniejszych niż 768px */}
                    <div className="md:hidden relative z-50">
                        <Button
                            className="bg-blue-600 text-white"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            <MenuIcon className="w-5 h-6" />
                        </Button>
                        {isNavOpen && (
                            <nav className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg z-50">
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100"
                                    prefetch={false}
                                >
                                    Galeria zdjęć
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100"
                                    prefetch={false}
                                >
                                    FAQ
                                </Link>
                                <div className="z-50">
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100"
                                        prefetch={false}
                                    >
                                        Zadzwoń do nas
                                    </Link>
                                </div>
                            </nav>
                        )}
                    </div>

                    {/* Linki nawigacyjne, widoczne tylko na ekranach powyżej 768px */}
                    <nav className="hidden md:flex space-x-6">
                        <Link
                            href="#"
                            className="text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-custom"
                            prefetch={false}
                        >
                            Galeria zdjęć
                        </Link>
                        <Link
                            href="#"
                            className="text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-custom"
                            prefetch={false}
                        >
                            FAQ
                        </Link>
                    </nav>

                    <div className="hidden md:block relative z-50">
                        <Button
                            className="bg-blue-600 xl:text-xl 2xl:text-2xl text-white xl:py-6 2xl:py-8
                       hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600
                       transition-colors duration-300"
                        >
                            Zadzwoń do nas
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
