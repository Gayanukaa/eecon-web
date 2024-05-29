import Button from "@/components/common/Button";
import ComingSoon from "@/components/common/ComingSoon";
import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import Image from "next/image";
import Link from "next/link";

export default function Workshops() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72"
                style={{
                    backgroundImage: "url(bg_02.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <div className="pt-36 left-1/6 text-start">
                    <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
                        Workshops
                    </h1>
                </div>
            </div>
            <div className="pt-2 flex justify-center items-center">
                <HeaderCard text={"Calling for workshops"}></HeaderCard>
            </div>
            <div className="pl-8 sm:pl-24 sm:w-4/5 w-full my-4  pr-4">
                {/* <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
                    Workshops
                </h2> */}
                <p className="my-4">
                    As EECon 2024 organizing committee, we invite proposals for
                    workshops with the aim of exposing our participants to
                    expert knowledge and the opportunity to discuss novel trends
                    and scientific contributions in all fields of electrical
                    engineering. We strongly encourage the workshops to be
                    highly interactive and in high demand. It is preferred to
                    have foreign collaborators.
                </p>
                <div className="flex justify-center align-center p-2 sm:w-1/3 w-full pointer-events-none opacity-50">
                    <Button href="/workshops-flyer">Workshops Flyer</Button>
                </div>
            </div>

            <div className="pl-8 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
                <h2 className="font-semibold text-xl mt-4 uppercase">
                    Proposal Details
                </h2>
                <p className="my-4">
                    Proposals are limited to no more than five pages and should
                    contain the following information:
                </p>
                <ul className="list-disc pl-8 leading-loose">
                    <li>Title of the Workshop.</li>
                    <li>
                        Presenter(s) (Organizers&apos; names, affiliations, and
                        email addresses with one person identified as the
                        primary contact person).
                    </li>
                    <li>
                        Description of the workshop in terms of abstract,
                        objectives, goals, relevance to Electrical Engineering
                        field and expected outcomes.
                    </li>
                    <li>
                        Motivation for why EECon 2024 workshop on this topic
                        will be effective.
                    </li>
                    <li>
                        Description of target audience, estimated number of
                        participants, and how the participants will be
                        attracted.
                    </li>
                    <li>
                        Workshop duration, format, activities, and schedule.
                    </li>
                    <li>
                        List of program committee members and their short
                        biographies describing relevant of qualifications and
                        experience.
                    </li>
                    <li>
                        Preliminary list of invited speakers (if any) and their
                        brief profiles.
                    </li>
                </ul>
            </div>

            <div className="pl-8 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
                <h2 className="font-semibold text-xl  mt-4 uppercase">
                    Evaluation Criteria
                </h2>
                <p className="my-4">
                    All workshop proposals will be evaluated based on the
                    following criteria
                </p>
                <ul className="list-disc pl-8 leading-loose">
                    <li>
                        Relevance of the workshop to the Electrical Engineering
                        field.
                    </li>
                    <li>
                        Interest in the community on the important technical
                        topic of concern.
                    </li>
                    <li>Novelty concerning other conference forums.</li>
                    <li>Likelihood of strong participation.</li>
                    <li>
                        Strength of the profile of researchers/ Profiles of the
                        keynote speaker or a tutorial presenter.
                    </li>
                </ul>
            </div>

            <div className="pl-8 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
                <h2 className="font-semibold text-xl  mt-4 uppercase mb-2">
                    Important Notes
                </h2>

                <ul className="list-disc leading-loose pl-8">
                    <li>
                        Call for workshops- deadline:{" "}
                        <span className="font-bold">31st July 2024</span>
                    </li>
                    <li>Submit your proposals to the Program Chair below:</li>
                    <ul className="list-disc pl-8">
                        <li>
                            Dr. RMM Ruwanthika:{" "}
                            <a
                                href="mailto:ruwanthim@uom.lk"
                                className="text-red-600"
                            >
                                ruwanthim@uom.lk
                            </a>
                        </li>
                    </ul>
                    <li>
                        For any questions, please contact Dr. RMM Ruwanthika{" "}
                        <a
                            href="mailto:ruwanthim@uom.lk"
                            className="text-red-600"
                        >
                            ruwanthim@uom.lk
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
