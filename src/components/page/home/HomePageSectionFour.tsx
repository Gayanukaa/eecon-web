import PAPERFLYER from "../../../assets/flyers/call_for_papers_flyer.png";
import WORKSHOPFLYER from "../../../assets/flyers/workshop_flyer.png";
import DEADLINEFLYER from "../../../assets/flyers/deadline_extended_flyer.png";
import EVENTFLYER from "../../../assets/flyers/event_flyer.jpg";
import SPEECH1_FLYER from "../../../assets/flyers/speech1_flyer.png";
import SPEECH2_FLYER from "../../../assets/flyers/speech2_flyer.png";
import Image from "next/image";

export default function HomePageSectionFour() {
  return (
    <div className="text-center">
      <h2 className="font-bold text-white text-4xl self-center pt-6">
        FLYER ANNOUNCEMENTS
      </h2>
      <div className="h-10"></div>
      <div className="flex flex-col items-center">
        <div className="w-full h-full md:w-1/3 h-1/3 shadow-md rounded-lg overflow-hidden mb-4 px-4 md:px-0">
          <Image src={EVENTFLYER} alt="Deadline Flyer" layout="responsive" />
        </div>
        {/* <div className="w-full h-full md:w-1/3 h-1/3 shadow-md rounded-lg overflow-hidden mb-4">
          <Image src={DEADLINEFLYER} alt="Deadline Flyer" layout="responsive" />
        </div>*/}
        <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-0">
          <div className="w-full h-full md:w-1/3 h-64 shadow-md rounded-lg overflow-hidden mb-4 md:mb-0">
            <Image
              src={SPEECH1_FLYER}
              alt="Keynote Speech 1"
              layout="responsive"
            />
          </div>
          <div className="w-20 md:w-10"></div>
          <div className="w-full h-full md:w-1/3 h-64 shadow-md rounded-lg overflow-hidden">
            <Image
              src={SPEECH2_FLYER}
              alt="Keynote Speech 2"
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}
