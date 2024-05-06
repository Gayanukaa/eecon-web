import ComingSoon from "@/components/common/ComingSoon";
import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import Image from "next/image";

export default function SpecialSessions() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72 "
                style={{
                    backgroundImage: "url(bg/bg_h_02.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <div className="pt-36 left-1/6  text-start">
                    <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
                        Paper Submission
                    </h1>
                </div>
            </div>
            <div className="py-16 bg-gray-100 flex justify-center items-center">
                <ComingSoon></ComingSoon>
            </div>
        </div>
    );
}
