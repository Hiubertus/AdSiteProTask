"use client"

import React, { useState } from 'react';
import { Button } from "../ui";
import { ArrowDown, ArrowUp } from "lucide-react";

interface SeoItemProps {
    title: string;
    content: string;
    expandedContent: string;
}

const SeoItem: React.FC<SeoItemProps> = ({ title, content, expandedContent }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="mt-4 md:mt-6 xl:mt-8 text-gray-400">
                {isExpanded ? expandedContent : content}
            </p>
            <Button
                variant="ghost"
                className="p-0 mt-4 md:mt-6 xl:mt-8 border-b rounded-none hover:bg-transparent hover:text-white"
                onClick={toggleExpand}
            >
                {isExpanded ? "Zwiń" : "Rozwiń"}
                {isExpanded ? <ArrowUp className="ml-2" /> : <ArrowDown className="ml-2" />}
            </Button>
        </div>
    );
};

const seoItems: SeoItemProps[] = [
    {
        title: "ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.",
        content: "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]",
        expandedContent: "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et nibh at nisi tincidunt varius. Sed in erat vel ipsum faucibus fringilla. Nullam eget lectus nec nunc varius lacinia. Proin porttitor, eros vel tincidunt ullamcorper, ipsum nisi convallis nulla, non faucibus nisi eros id nunc. Sed euismod, nunc vel tincidunt luctus, nunc nisi aliquam nunc, nec aliquam nunc nunc vel nunc. Sed euismod, nunc vel tincidunt luctus, nunc nisi aliquam nunc, nec aliquam nunc nunc vel nunc."
    },
    {
        title: "ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.",
        content: "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]",
        expandedContent: "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et nibh at nisi tincidunt varius. Sed in erat vel ipsum faucibus fringilla. Nullam eget lectus nec nunc varius lacinia. Proin porttitor, eros vel tincidunt ullamcorper, ipsum nisi convallis nulla, non faucibus nisi eros id nunc. Sed euismod, nunc vel tincidunt luctus, nunc nisi aliquam nunc, nec aliquam nunc nunc vel nunc. Sed euismod, nunc vel tincidunt luctus, nunc nisi aliquam nunc, nec aliquam nunc nunc vel nunc."
    }
];

export const Seo: React.FC = () => {
    return (
        <div className="bg-gray-custom text-white py-12">
            <div className="container py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12 2xl:py-16 mx-auto px-6 sm:px-9 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
                    {seoItems.map((item, index) => (
                        <SeoItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};