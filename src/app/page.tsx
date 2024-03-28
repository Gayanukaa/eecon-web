import Button from "@/components/common/Button";
import EventCard from "@/components/common/EventCard";
import HomePageSectionOne from "@/components/page/home/HomePageSectionOne";
import HomePageSectionThird from "@/components/page/home/HomePageSectionThird";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Section 00 */}
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-screen "
                style={{
                    backgroundImage: "url(bg/bg_02.jpg)",
                    backgroundSize: "cover", // Add this line
                }}
            >
                <div className="absolute top-1/2 left-1/6  text-start">
                    <h1 className="text-6xl font-bold">EECon 24</h1>
                    <p className="text-base text-lg ">
                        International Conference on Electrical Engineering 2024
                    </p>
                    <p className="text-base text-md italic mb-2">
                        12<sup>th</sup> Thursday, December 2024 @ Colombo, Sri
                        Lanka
                    </p>
                    <Button href="/registration">Register Now</Button>
                </div>
            </div>

            {/* Section 01 */}
            <HomePageSectionOne></HomePageSectionOne>

            {/* Section 02 */}
            <div className="w-full bg-red-500 flex-col justify-center items-center text-center">
                <h2 className="font-bold text-4xl self-center pt-6">
                    UPCOMING EVENTS
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="basis-1/2 p-4 pb-0 md:pb-4">
                        <EventCard
                            title={"SUBMISSION OF PAPERS"}
                            date={"01"}
                            month={"May"}
                            subtitle={"Paper submission start date"}
                        ></EventCard>
                        <EventCard
                            title={"NOTIFICATION OF ACCEPTANCE"}
                            date={"15"}
                            month={"October"}
                            subtitle={
                                "We'll notify the acceptance of your papers."
                            }
                        ></EventCard>
                        <EventCard
                            title={"REGISTRATION DEADLINE"}
                            date={"01"}
                            month={"December"}
                            subtitle={"The event-day registration deadline."}
                        ></EventCard>
                    </div>
                    <div className="basis-1/2 p-4 pt-0 md:pt-4">
                        <EventCard
                            title={"PAPER SUBMISSION DEADLINE"}
                            date={"01"}
                            month={"July"}
                            subtitle={"Paper submission deadline"}
                        ></EventCard>
                        <EventCard
                            title={"CAMERA READY PAPER SUBMISSION"}
                            date={"15"}
                            month={"November"}
                            subtitle={"Camera ready paper submission date."}
                        ></EventCard>
                    </div>
                </div>
            </div>

            {/* Section 03 */}
            <HomePageSectionThird></HomePageSectionThird>
        </main>
    );
}
