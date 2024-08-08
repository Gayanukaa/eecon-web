import PAPERFLYER from "../../../assets/flyers/call_for_papers_flyer.png";
import WORKSHOPFLYER from "../../../assets/flyers/workshop_flyer.png";
import DEADLINEFLYER from "../../../assets/flyers/deadline_extended_flyer.png";
import Image from "next/image";

export default function HomePageSectionFour() {
  return (
    <div className="text-center">
      <h2 className="font-bold text-white text-4xl self-center pt-6">
        FLYER ANNOUNCEMENTS
      </h2>
      <div className="h-10"></div>
      <div className="flex flex-col items-center">
        <div className="w-1/3 h-1/3 shadow-md rounded-lg overflow-hidden mb-4">
          <Image src={DEADLINEFLYER} alt="Deadline Flyer" layout="responsive" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-1/3 h-1/3 shadow-md rounded-lg overflow-hidden mb-4 md:mb-0">
            <Image src={PAPERFLYER} alt="Paper Flyer" layout="responsive" />
          </div>
          <div className="w-20 md:w-10"></div>
          <div className="w-1/3 h-1/3 shadow-md rounded-lg overflow-hidden">
            <Image
              src={WORKSHOPFLYER}
              alt="Workshop Flyer"
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}
