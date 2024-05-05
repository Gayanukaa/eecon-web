import EESOCLOGO from "../../../assets/logos/eesoc_logo.png";
import UOMLOGO from "../../../assets/logos/uom_logo.png";
import Image from "next/image";

export default function HomePageSectionThird() {
    return (
        <div className="w-full flex-col justify-center items-center text-center p-4 pt-16 bg-white text-black x">
            <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 text-left justify-content: space-between">
                <div className="basis-2/3 lg:basis-1/2">
                    <h5 className="text-2xl text-transform:uppercase cap font-medium">
                        Organized By
                    </h5>
                    <p className="ml-8 sm:ml-16 ">
                        Department of Electrical Engineering with Electrical
                        Engineering Society (EESoc) <br></br> University of
                        Moratuwa
                    </p>
                </div>
                <div className="flex ml-16 basis-1/3 lg:basis-1/2  justify-end items-center float-right ">
                    <Image
                        style={{ width: 75, height: 75 }}
                        src={EESOCLOGO}
                        alt="EESoc University of Moratuwa, Sri Lanka"
                    ></Image>
                </div>
            </div>
            <div className="flex  flex-row w-full sm:w-3/4 w-max-1/2 pl-8 mt-8 text-left justify-content: space-between">
                <div className="basis-1/2">
                    <h5 className="text-2xl text-transform:uppercase cap font-medium">
                        Sponsors
                    </h5>
                    <p className="ml-8 sm:ml-16 ">
                        University of Moratuwa <br />
                        Sri Lanka
                    </p>
                </div>
                <div className="flex ml-16  basis-1/2 justify-end items-center float-right ">
                    <Image
                        style={{ width: 75, height: 75 }}
                        src={UOMLOGO}
                        alt="EESoc University of Moratuwa, Sri Lanka"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
