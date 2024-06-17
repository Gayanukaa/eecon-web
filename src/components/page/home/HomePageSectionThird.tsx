import EESOCLOGO from "../../../assets/logos/eesoc_logo.png";
import UOMLOGO from "../../../assets/logos/uom_logo.jpg";
import IESLOGO from "../../../assets/logos/ies_logo.png";
import PESLOGO from "../../../assets/logos/pes_logo.png";
import IEEELOGO from "../../../assets/logos/ieee_logo.webp";
import RASLOGO from "../../../assets/logos/ras_logo.png";
import Image from "next/image";

export default function HomePageSectionThird() {
  return (
    <div className="w-full flex-col justify-center items-center text-center p-4 pt-16 bg-white text-black x">
      <div className="flex  flex-row w-full sm:w-4/5 md:w-3/4 w-max-1/2 pl-2 sm:pl-8 text-left justify-content: space-between">
        <div className="basis-2/3 lg:basis-1/2">
          <h5 className="text-xl sm:text-2xl text-transform:uppercase cap font-medium">
            Organized By
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            Department of Electrical Engineering with Electrical Engineering
            Society (EESoc) <br></br> University of Moratuwa
          </p>
        </div>
        <div className="flex ml-16 basis-1/3 lg:basis-1/2  justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={EESOCLOGO}
            alt="EESoc University of Moratuwa, Sri Lanka"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-2 sm:pl-8 mt-8 text-left justify-content: space-between">
        <div className="basis-1/2">
          <h5 className="text-xl sm:text-2xl text-transform:uppercase cap font-medium">
            Sponsors
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            University of Moratuwa <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={UOMLOGO}
            alt="EESoc University of Moratuwa, Sri Lanka"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-2 sm:pl-8 mt-8 text-left justify-content: space-between">
        <div className="basis-1/2">
          <h5 className="text-xl sm:text-2xl text-transform:uppercase cap font-medium">
            Technical Co-Sponsors
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            IEEE Sri Lanka Section
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={IEEELOGO}
            alt="IEEE Sri Lanka"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            IEEE Power And Energy Society
            <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={PESLOGO}
            alt="IEEE Power And Energy Society, Sri Lanka"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            IEEE Industrial Electronics Society <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={IESLOGO}
            alt=" IEEE Industrial Electronics Society, Sri Lanka"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            IEEE Industrial Electronics Society <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={IESLOGO}
            alt=" IEEE Industrial Electronics Society, Sri Lanka"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            IEEE Robotics and Automation Society <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={RASLOGO}
            alt=" IEEE Robotics and Automation Society, Sri Lanka"
            className="w-16"
          ></Image>
        </div>
      </div>
    </div>
  );
}
