import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72 "
                style={{
                    backgroundImage: "url(bg/bg_h_04.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <div className="pt-36 left-1/6  text-start">
                    <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
                        Contact
                    </h1>
                </div>
            </div>
            <div className="p-16 bg-gray-100 flex flex-col justify-center items-left">
                <h3 className="text-transform: uppercase text-xl font-bold">
                    Event Coordinator
                </h3>
                <div className="flex flex-col pl-8">
                    <div className="flex flex-row items-center pl-8">
                        <div className="h-2 w-2  bg-red-600 rounded-full mr-4"></div>
                        <p>Dr. R.M.M. Ruwanthika</p>
                    </div>
                    <p className="text-gray-400 pl-16">Program Chair</p>
                    <div className="flex flex-row justify-left items-center ml-16">
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

                        <Link className="pl-2" href={"mailto:ruwanthim@uom.lk"}>
                            {" "}
                            ruwanthim@uom.lk
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col pl-8 mt-4">
                    <div className="flex flex-row items-center pl-8">
                        <div className="h-2 w-2  bg-red-600 rounded-full mr-4"></div>
                        <p>Mr. W. M. N. Witharana</p>
                    </div>
                    <p className="text-gray-400 pl-16">Conference Secretary</p>
                    <div className="flex flex-row justify-left items-center ml-16">
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

                        <Link
                            className="pl-2"
                            href={"mailto:mudithnirmala@gmail.com"}
                        >
                            {" "}
                            mudithnirmala@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
