import PAPERFLYER from "../../../assets/flyers/call_for_papers_flyer.png";
import WORKSHOPFLYER from "../../../assets/flyers/workshop_flyer.png";
import Image from "next/image";

export default function HomePageSectionFour() {
  return (
    <div className="text-center">
      <h2 className="font-bold text-white text-4xl self-center pt-6">
        FLYER ANNOUNCEMENTS
      </h2>
      <div className="h-10"></div>
      <div className="flex justify-center">
        <div className="w-1/3 h-1/3 shadow-md rounded-lg overflow-hidden">
          <Image src={PAPERFLYER} alt="Paper Flyer" layout="responsive" />
        </div>
        <div className="w-20"></div>
        <div className="w-1/3 h-1/3 shadow-md rounded-lg overflow-hidden">
          <Image src={WORKSHOPFLYER} alt="Workshop Flyer" layout="responsive" />
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}
