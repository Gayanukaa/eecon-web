import Button from "@/components/common/Button";
import ComingSoon from "@/components/common/ComingSoon";
import HeaderCard from "@/components/common/HeaderCard";
import HeaderImageCard from "@/components/common/HeaderImageCard";
import Image from "next/image";
import Link from "next/link";

export default function Registration() {
    return (
        <div className="w-full bg-white text-black bg-gray-100">
            <div
                className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72 "
                style={{
                    backgroundImage: "url(bg_02.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <div className="pt-36 left-1/6  text-start">
                    <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
                        Author Instructions
                    </h1>
                </div>
            </div>
            {/* <div className="py-16 bg-gray-100 flex justify-center items-center"> */}
            {/* <ComingSoon></ComingSoon> */}
            <HeaderCard text={"EECon Paper Submissions"}></HeaderCard>
            <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
                General Instructions
            </h2>

            <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
                <ul className="list-disc leading-loose">
                    <li>All papers should be written in English.</li>
                    <li>
                        Maximum length of a paper is limited to 6 printed A4
                        pages in given format. An additional 2 pages can be
                        included at extra fee.
                    </li>
                    <li>
                        Authors must adhere to the IEEE Conference paper format.
                        Draft version of papers should be submitted for review
                        before the submission deadline.{" "}
                        <Link
                            className="text-red-600"
                            href={"/#upcoming-events"}
                        >
                            ( See Important Dates)
                        </Link>
                    </li>
                    <li>
                        It is strongly recommended to use the set of templates
                        in MS Word and LaTeX formats provided by IEEE. Please
                        use them to create your paper, without modifying the
                        style or format.{" "}
                        <Link
                            className="text-red-600"
                            target="blank"
                            href={
                                "https://www.ieee.org/conferences/publishing/templates.html"
                            }
                        >
                            ( See Templates )
                        </Link>
                    </li>
                    <li>
                        Please make sure that only original work is being
                        submitted <b>(not previously published/copyrighted)</b>.
                        The conference will be using the CrossCheck automated
                        screening system to verify the originality of papers.
                    </li>
                </ul>
            </div>
            <div className="flex justify-center align-center p-2 sm:w-1/3 w-full">
                <Button href="https://cmt3.research.microsoft.com/EECon2024/Submission/Index">
                    Submit A Paper
                </Button>
            </div>
            <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
                Use the following guidelines while submitting full papers
            </h2>

            <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
                <ul className="list-disc leading-loose">
                    <li>
                        All paper submissions are through CMT.{" "}
                        <Link
                            className="text-red-600"
                            target="blank"
                            href={
                                "https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                            }
                        >
                            Here{" "}
                        </Link>
                        is a link how to create a CMT account.
                    </li>
                    <li>
                        Please note that 1st time users need to create a new CMT
                        account. Please use your institutional e-mail address
                        while registering.
                    </li>
                    <li>
                        While submitting a paper, select the most appropriate
                        Track for your paper.
                    </li>
                    <li>
                        Manuscript submission should be in Adobe Portable
                        Document Format (PDF) only. Once accepted, all Camera
                        Ready papers should be in IEEE compliant format.
                    </li>
                    <li>
                        Manuscripts that do not conform to the above formatting
                        guidelines will not be considered. If you experience any
                        font embedding issues while uploading the paper to CMT,
                        please follow IEEE instructions.
                    </li>
                    <li>
                        We request all authors to carefully revise the
                        manuscript for language and formatting.
                    </li>
                    <li>
                        All submitted manuscripts will undergo a plagiarism
                        check using a suitable tool.
                    </li>
                    <li>
                        Please{" "}
                        <Link className="text-red-600" href={"/contact"}>
                            contact us
                        </Link>{" "}
                        if you have any questions regarding your submission or
                        experience any issues while submitting your manuscript.{" "}
                    </li>
                </ul>
            </div>
            <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
                Important Notes
            </h2>
            <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
                <ul className="list-disc leading-loose">
                    <li>
                        Accepted, registered, and presented papers will be IEEE
                        copyrighted and published in the conference proceedings.
                        The proceedings is planned to be submitted for inclusion
                        in IEEE Xplore® Digital Library.
                    </li>
                    <li>
                        In order for the accepted paper to be submitted for
                        inclusion into the IEEE Xplore® Digital Library, all of
                        the following three requirements must be satisfied:
                        <ol className=" pl-10 sm:pl-16 list-decimal">
                            <li>
                                Appropriate publication materials (final paper
                                and transfer of copyright to IEEE must be
                                submitted.)
                            </li>
                            <li>
                                At least one full registration has to be paid.
                            </li>
                            <li>
                                The paper must be presented at the conference.
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    );
}
