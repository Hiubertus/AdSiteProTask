import React from 'react';
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-custom text-white border-t border-white">
            <div className="container mx-auto px-6 sm:px-9 lg:px-12">
                <div className="flex items-center justify-between py-6">
                    <span className="font-bold">Cars Spot</span>
                    <Link href="#" className="underline" prefetch={false}>
                        Polityka prywatności
                    </Link>
                </div>
            </div>
        </footer>
    )
}