"use client";
import Button from "@/components/common/Button";
import { useEffect, useState } from "react";

export default function HomePageSectionZero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 4000); // Change the delay (in milliseconds) as needed

        return () => clearInterval(timer);
    }, []);
    return (
        <div
            className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-screen transition-all ease-linear duration-500"
            style={{
                backgroundImage: `url(bg/bg_0${currentIndex + 1}.jpg)`,
                backgroundSize: "fill",
            }}
        >
            <div className="absolute top-1/2 left-1/6  text-start">
                <h1 className="text-6xl font-bold">EECon 24</h1>
                <p className="text-base text-lg ">
                    International Conference on Electrical Engineering 2024
                </p>
                <p className="text-base text-md italic mb-2">
                    12<sup>th</sup> Thursday, December 2024 @ Colombo, Sri Lanka
                </p>
                <Button href="/author-instructions">Register Now</Button>
            </div>
        </div>
    );
}
