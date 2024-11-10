import React from "react";
import EESOCLOGO from "../../assets/logos/eesoc_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full p-2 sm:p-6 bg-gray-900 flex flex-col justify-center items-center text-white divide-y divide-gray-400">
            <div className="w-full p-4 flex flex-col md:flex-row ">
                <div className="basis-1/2 m-4 flex flex-row justify-left items-center">
                    <Image
                        style={{ width: 75, height: 75 }}
                        src={EESOCLOGO}
                        alt="Electrical Engineering Society"
                    ></Image>
                    <p className="ml-4 w-full md:w-1/2 ">
                        Nurturing all-round graduates to the society by
                        enhancing their leadership skills and social awareness.
                    </p>
                </div>
                <div className="basis-1/4 m-4 flex flex-col">
                    <h5 className="font-bold mb-4">Quick Links</h5>
                    <div className="font-regular flex flex-row md:flex-col pl-8">
                        <div className="flex flex-col">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/committee"}>Committee</Link>
                            <Link href={"/speakers"}>Speakers</Link>
                        </div>
                        <div className="flex flex-col ml-8 md:ml-0">
                            <Link href={"/program"}>Program Schedule</Link>
                            <Link href={"/registration"}>Registration</Link>
                            <Link href={"/camera-ready-paper-instructions"}>Camera Ready Paper Instructions</Link>
                            <Link href={"/contact"}>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="basis-1/4 m-4 flex flex-col">
                    <h5 className="font-bold mb-4">Contact</h5>
                    <div className="font-regular flex flex-col pl-8">
                        <div className="flex flex-row justify-left items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                            <Link className="pl-2" href={"tel:0112650301"}>
                                0112 650 301
                            </Link>
                        </div>
                        <div className="flex flex-row justify-left items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                                />
                            </svg>

                            <p className="pl-2"></p>
                            <Link
                                className="pl-1"
                                href={"mailto:eesoc.mrt@gmail.com"}
                            >
                                eesoc.mrt@gmail.com
                            </Link>
                        </div>
                        <div className="flex flex-row mt-4 justify-left items-center space-x-2">
                            <Link
                                target="blank"
                                href={"https://www.facebook.com/eesoc/"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0,0,256,256"
                                    className="w-8 h-8"
                                >
                                    <g
                                        fill="#fdfdfd"
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth="1"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit="10"
                                        strokeDasharray=""
                                        strokeDashoffset="0"
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="none"
                                        style={{ mixBlendMode: "normal" }}
                                    >
                                        <g transform="scale(8.53333,8.53333)">
                                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                            <Link
                                target="blank"
                                href={
                                    "https://www.linkedin.com/company/electrical-engineering-society-eesoc"
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className="w-8 h-8"
                                    viewBox="0,0,256,256"
                                >
                                    <g
                                        fill="#fdfdfd"
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth="1"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit="10"
                                        strokeDasharray=""
                                        strokeDashoffset="0"
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="none"
                                        style={{ mixBlendMode: "normal" }}
                                    >
                                        <g transform="scale(5.12,5.12)">
                                            <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                            <Link
                                target="blank"
                                href={"https://www.instagram.com/eesoc_uom"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className="w-10 h-10"
                                    viewBox="0,0,256,256"
                                >
                                    <g
                                        fill="#fdfdfd"
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth="1"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit="10"
                                        strokeDasharray=""
                                        strokeDashoffset="0"
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="none"
                                        style={{ mixBlendMode: "normal" }}
                                    >
                                        <g transform="scale(8,8)">
                                            <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full divide-y p-0 divide-white flex justify-center items-center">
                {/* <div className="w-full p-4"></div> */}
                <p className="text-gray-400 pt-2 text-sm">
                    ©2024 Electrical Engineering Society
                </p>
            </div>
        </div>
    );
}
