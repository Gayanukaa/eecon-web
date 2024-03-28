// import LinkPopup from "@/components/common/LinkPopup" ;

import dynamic from "next/dynamic";

const DynamicModal = dynamic(() => import("@/components/common/LinkPopup"), {
    loading: () => (
        <div className="flex flex-col p-4 text-black bg-blue-950 justify-center items-center ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 animate-spin"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
            </svg>
        </div>
    ),
});

function HomePageSectionOne() {
    return (
        <div className="p-8 pt-16 bg-gray-100  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
                <div className="col-span-1 bg-white p-6 h-100 drop-shadow-lg  ">
                    <h2 className="text-xl text-black font-semibold mb-2 text-transform: uppercase ">
                        Notice Board
                    </h2>
                    <div className="divide-y overflow-scroll scrollbar-track-red scrollbar-thumb-red">
                        {/* Notice - 01 */}
                        <div className="p-4 pl-8 ">
                            <h6 className="text-red-500">28th, March 2024</h6>
                            <p className="text-black pt-3 pl-4">
                                <span className="font-bold">
                                    Call For Papers{" "}
                                </span>
                                - We invite submissions on a wide range of
                                research topics in Electrical Engineering.{" "}
                                <DynamicModal title="EECon-2024 - Call For Papers"></DynamicModal>
                            </p>
                            <p className="text-black pt-3 pl-8">
                                - Submission starting at{" "}
                                <span className="font-bold">
                                    01 <sup>st</sup> May 2024
                                </span>
                            </p>
                            <p className="text-black pt-3 pl-8">
                                - Submit before{" "}
                                <span className="font-bold">
                                    01 <sup>st</sup> July 2024
                                </span>
                            </p>
                            <div className="divide-y-0"></div>
                        </div>
                        {/* Notice - 02 */}
                        <div className="p-4 pl-8 ">
                            <h6 className="text-red-500">26th, March 2024</h6>
                            <p className="text-black pt-3 pl-4">
                                The Department of Electrical Engineering at the
                                University of Moratuwa, Sri Lanka is thrilled to
                                announce the launch of the official website for
                                the 4th International Conference on Electrical
                                Engineering (EECon2024).{" "}
                            </p>
                            <div className="divide-y-0"></div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 bg-white p-6 h-100 drop-shadow-lg ">
                    <div className="max-h-screen overflow-scroll scrollbar-track-red scrollbar-thumb-red">
                        <h2 className="text-xl text-black font-semibold mb-2 text-transform: uppercase ">
                            Vision
                        </h2>
                        <p className="text-gray-700 italic text-sm">
                            To share the knowledge to integrate state of the art
                            technologies in different Engineering disciplines
                            for the betterment of fields of Electrical
                            Engineering.
                        </p>
                        <h2 className="mt-8 text-xl text-black font-semibold mb-2 text-transform: uppercase ">
                            Mission
                        </h2>
                        <p className="text-gray-700 italic text-sm">
                            To create a stage for researchers around the world
                            to disseminate knowledge in the disciplines of
                            Electrical, Instrumentation and Control, Electronics
                            engineering, Computer Science & Engineering,
                            Industrial Engineering and Information Technology
                            for integration of diverse engineering solutions
                            that are socially, economically and environmentally
                            sustainable for the betterment of fields of
                            Electrical Engineering.
                        </p>
                        <h2 className="mt-8 text-xl text-black font-semibold mb-2 text-transform: uppercase ">
                            Scope
                        </h2>
                        <p className="text-gray-700 italic text-sm">
                            EECon 2021 solicits research papers describing
                            significant and innovative research contributions to
                            all fields of electrical engineering. We invite
                            submissions on a wide range of research topics in
                            Electrical Engineering. Topics of interest include,
                            but are not limited to,
                        </p>
                        <ul className="list-disc pl-5 text-black overflow-scroll text-sm">
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Power Quality and Reliability
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Power Systems Stability and Power Systems
                                Control
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Electrical Machines, Power Electronics, and
                                Control Drives
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Renewable Energy Systems and Battery
                                Technologies
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Smart Technologies and Electric Transportation
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Conventional Energy Technologies
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Power Systems Economics
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Control and Automation
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Robotics and Intelligent Systems
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Electronics, Biomedical Engineering, Computer
                                Vision and Signal Processing
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageSectionOne;
