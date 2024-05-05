import Button from "@/components/common/Button";
import EventCard from "@/components/common/EventCard";
import HomePageSectionOne from "@/components/page/home/HomePageSectionOne";
import HomePageSectionThird from "@/components/page/home/HomePageSectionThird";
import HomePageSectionZero from "@/components/page/home/HomePageSectionZero";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Section 00 */}
            <HomePageSectionZero></HomePageSectionZero>

            {/* Section 01 */}
            <HomePageSectionOne></HomePageSectionOne>

            {/* Section 02 */}
            <div
                className="w-full bg-red-500 flex-col justify-center items-center text-center"
                id="upcoming-events"
            >
                <h2 className="font-bold text-white text-4xl self-center pt-6">
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
                        <EventCard
                            title={"CONFERENCE"}
                            date={"12"}
                            month={"December"}
                            subtitle={"The conference Date."}
                        ></EventCard>
                    </div>
                </div>
            </div>

            {/* Section 03 */}
            <HomePageSectionThird></HomePageSectionThird>
        </main>
    );
}
