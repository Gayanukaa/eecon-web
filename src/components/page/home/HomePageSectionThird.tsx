import EELOGO from "../../../assets/logos/ee_logo.png";
import EESOCLOGO from "../../../assets/logos/eesoc_logo.png";
import UOMLOGO from "../../../assets/logos/uom_logo.jpg";
import IESLOGO from "../../../assets/logos/ies_logo.png";
import PESLOGO from "../../../assets/logos/pes_logo.png";
import IEEEGLOBALLOGO from "../../../assets/logos/ieee_global_logo.png";
import IEEELOGO from "../../../assets/logos/ieee_logo.webp";
import RASLOGO from "../../../assets/logos/ras_logo.png";
import LTLLOGO from "../../../assets/logos/ltl_logo.png";
import WINDFLOGO from "../../../assets/logos/windforce_logo.png";
import HNBLOGO from "../../../assets/logos/hnb_logo.png";
import VIBHAWALOGO from "../../../assets/logos/vibhawa_logo.png";
import VIDULOGO from "../../../assets/logos/vidulanka_logo.png";
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
            style={{ width: 60, height: 60 }}
            src={EELOGO}
            alt="EESoc University of Moratuwa, Sri Lanka"
            className="w-16"
          ></Image>
          <div style={{ width: 20 }}></div>
          <Image
            style={{ width: 50, height: 50 }}
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
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <h5 className="text-lg sm:text-xl text-transform:uppercase cap font-medium ml-8 sm:ml-16">
            Platinum Partner
            <br></br>
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            LTL Holdings Limited
            <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            style={{ width: 120, height: 85 }}
            src={LTLLOGO}
            alt="LTL Holdings Limited"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <h5 className="text-lg sm:text-xl text-transform:uppercase cap font-medium ml-8 sm:ml-16">
            Gold Partner
            <br></br>
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            WindForce PLC
            <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            //style={{ width: 75, height: 75 }}
            src={WINDFLOGO}
            alt="WindForce PLC"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            Vidullanka PLC
            <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            style={{ width: 100, height: 31 }}
            src={VIDULOGO}
            alt="Vidullanka PLC"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <h5 className="text-lg sm:text-xl text-transform:uppercase cap font-medium ml-8 sm:ml-16">
            Banking Partner
            <br></br>
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            Hatton National Bank PLC
            <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            //style={{ width: 75, height: 75 }}
            src={HNBLOGO}
            alt="Hatton National Bank PLC"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <h5 className="text-lg sm:text-xl text-transform:uppercase cap font-medium ml-8 sm:ml-16">
            Bronze Partner
            <br></br>
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            Vibhawa Consultants
            <br />
            Sri Lanka
          </p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            //style={{ width: 75, height: 75 }}
            src={VIBHAWALOGO}
            alt="Vibhawa Consultants"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-2 sm:pl-8 mt-8 text-left justify-content: space-between">
        <div className="basis-1/2">
          <h5 className="text-xl sm:text-2xl text-transform:uppercase cap font-medium">
            Technical Co-Sponsors
          </h5>
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">IEEE</p>
        </div>
        <div className="flex  ml-16  basis-1/2 justify-end items-center float-right ">
          <Image
            // style={{ width: 75, height: 75 }}
            src={IEEEGLOBALLOGO}
            alt="IEEE"
            className="w-16"
          ></Image>
        </div>
      </div>
      <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-4 text-left justify-content: space-between">
        <div className="basis-1/2">
          <p className="text-sm sm:text-base ml-8 sm:ml-16 ">
            IEEE Sri Lanka Section
            <br />
            Sri Lanka
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
