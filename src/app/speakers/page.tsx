import ComingSoon from "@/components/common/ComingSoon";
import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import Image from "next/image";

import IMG_PECHT from "@/assets/speakers/prof_pecht.jpg";
import IMG_JSON from "@/assets/speakers/prof_json_mars.webp";
import ComingSoonTile from "@/components/common/ComingSoonTile";

export default function Speakers() {
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
                        Speakers
                    </h1>
                </div>
            </div>
            {/* <div className="py-16 bg-gray-100 flex justify-center items-center">
                <ComingSoon></ComingSoon>
            </div> */}
            <HeaderCard text={"Keynote Speakers"}></HeaderCard>
            <div className="flex md:flex-row flex-col">
                {/* <div className="basis-1/2 p-8 flex flex-col  justify-center items-center">
                    <div className="bg-gray-200 w-max p-3 rounded">
                        <Image src={IMG_PECHT} alt="Keynote Speaker "></Image>
                    </div>
                    <ComingSoonTile></ComingSoonTile>
                </div> */}
                <div className=" basis-1/2 p-8 flex flex-col justify-center items-center">
                    <div className="bg-gray-200 w-max p-3 rounded">
                        <Image src={IMG_JSON} alt="Keynote Speaker "></Image>
                    </div>
                    <ComingSoonTile></ComingSoonTile>
                </div>
            </div>
        </div>
    );
}
