import ComingSoon from "@/components/common/ComingSoon";
import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import Image from "next/image";

import IMG_PRIYANTHA from "@/assets/speakers/priyantha_wijayatunga.png";
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
      <HeaderCard text={"Keynote Speakers"}></HeaderCard>
      <div className="flex md:flex-row flex-col">
        <div className="basis-1/2 p-8 flex flex-col justify-center items-center">
          <div className="bg-gray-200 w-max p-3 rounded">
            <Image
              style={{ width: 300, height: 300 }}
              src={IMG_PRIYANTHA}
              alt="Keynote Speaker "
            ></Image>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Dr. Priyantha Wijayatunga</h2>
            <p>
              Senior Director
              <br />
              Energy Sector Office, Asian Development Bank
            </p>
          </div>
          <ComingSoonTile></ComingSoonTile>
        </div>
        <div className="basis-1/2 p-8 flex flex-col justify-center items-center">
          <div className="bg-gray-200 w-max p-3 rounded">
            <Image
              style={{ width: 300, height: 300 }}
              src={IMG_JSON}
              alt="Keynote Speaker "
            ></Image>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Prof. Jason Mars</h2>
            <p>
              Professor, Electrical Engineering and Computer Science
              <br />
              College of Engineering, University of Michigan, USA
            </p>
          </div>
          <ComingSoonTile></ComingSoonTile>
        </div>
      </div>
    </div>
  );
}
