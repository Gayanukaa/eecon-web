import ComingSoon from "@/components/common/ComingSoon";
import HeaderCard from "@/components/common/HeaderCard";
import React from "react";

export default function page() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72 "
                style={{
                    backgroundImage: "url(bg/bg_h_03.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <div className="pt-36 left-1/6  text-start">
                    <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
                        Important Dates
                    </h1>
                </div>
            </div>
            <div className="bg-gray-100">
                <HeaderCard text={"Important Dates"}></HeaderCard>
                <div className="py-2  flex flex-column justify-start items-center sm:px-16 px-8">
                    <div className="bg-white sm:w-1/2 w-full flex mt-4">
                        <div className="flex flex-row justify-center items-center p-4 text-white bg-blue-950 w-[105px] ">
                            <p>01</p>
                        </div>
                        <div className="flex-1 p-4 text-black text-left">
                            <p className="font-bold text-medium">
                                Submission of Papers
                            </p>

                            <p className="text-gray-400 italic">
                                01<sup> st</sup> May 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-2  flex flex-column sm:justify-end justify-start items-center sm:px-16 px-8">
                    <div className="bg-white sm:w-1/2 w-full flex mt-4">
                        <div className="flex flex-row justify-center items-center p-4 text-white bg-blue-950 w-[105px] ">
                            <p>02</p>
                        </div>
                        <div className="flex-1 p-4 text-black text-left">
                            <p className="font-bold text-medium">
                                Paper Submission Deadline
                            </p>
                            <p className="text-gray-400 italic">
                                15<sup>th</sup> August 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-2  flex flex-column justify-start items-center sm:px-16 px-8">
                    <div className="bg-white sm:w-1/2 w-full flex mt-4">
                        <div className="flex flex-row justify-center items-center p-4 text-white bg-blue-950 w-[105px] ">
                            <p>03</p>
                        </div>
                        <div className="flex-1 p-4 text-black text-left">
                            <p className="font-bold text-medium">
                                Notification of Acceptance
                            </p>
                            <p className="text-gray-400 italic">
                                15<sup> th</sup> October 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-2  flex flex-column sm:justify-end justify-start items-center sm:px-16 px-8">
                    <div className="bg-white sm:w-1/2 w-full flex mt-4">
                        <div className="flex flex-row justify-center items-center p-4 text-white bg-blue-950 w-[105px] ">
                            <p>04</p>
                        </div>
                        <div className="flex-1 p-4 text-black text-left">
                            <p className="font-bold text-medium">
                                Camera Ready Paper Submission
                            </p>
                            <p className="text-gray-400 italic">
                                15<sup> th</sup> November 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-2  flex flex-column justify-start items-center sm:px-16 px-8">
                    <div className="bg-white sm:w-1/2 w-full flex mt-4">
                        <div className="flex flex-row justify-center items-center p-4 text-white bg-blue-950 w-[105px] ">
                            <p>05</p>
                        </div>
                        <div className="flex-1 p-4 text-black text-left">
                            <p className="font-bold text-medium">
                                Registration Deadline
                            </p>
                            <p className="text-gray-400 italic">
                                01<sup> st</sup> December 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-2  flex flex-column sm:justify-end justify-start items-center sm:px-16 px-8">
                    <div className="bg-white sm:w-1/2 w-full flex mt-4">
                        <div className="flex flex-row justify-center items-center p-4 text-white bg-blue-950 w-[105px] ">
                            <p>06</p>
                        </div>
                        <div className="flex-1 p-4 text-black text-left">
                            <p className="font-bold text-medium">
                                Conference Date
                            </p>
                            <p className="text-gray-400 italic">
                                13<sup> th</sup> December 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
