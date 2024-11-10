import Button from "@/components/common/Button";
import HeaderCard from "@/components/common/HeaderCard";
import Link from "next/link";
import Image from "next/image";
import IMG_SLIDE1 from "@/assets/slides/camera_paper_instruction_slide1.png";
import IMG_SLIDE2 from "@/assets/slides/camera_paper_instruction_slide2.png";

export default function CameraReadyInstructions() {
  return (
    <div className="w-full bg-white text-black bg-gray-100">
      <div
        className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72"
        style={{
          backgroundImage: "url(bg/bg_h_02.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-36 left-1/6 text-start">
          <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
            Camera Ready Paper Instructions
          </h1>
        </div>
      </div>
      <HeaderCard text={"EECon 2024 Camera Ready Paper Submission"} />
      <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
        Formatting Camera Ready Paper
      </h2>

      <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
        <ul className="list-disc leading-loose">
          <li>
            Address review comments carefully. The EECon 2024 Program Committee
            will scrutinize each camera-ready paper and and have the right to
            reject your paper if it is determined that author(s) has not taken
            sufficient effort to improve the paper based on reviewer comments.
          </li>
          <li>
            Papers must strictly follow the 2-column{" "}
            <Link
              className="text-red-600"
              href={
                "https://www.ieee.org/conferences/publishing/templates.html"
              }
            >
              IEEE template
            </Link>{" "}
            and are limited to six (6) pages.
          </li>
          <li>
            <b>Pay careful attention</b> to formatting, including the title and
            first page, author details (affiliations and contact information),
            abstract, format of headings (main and subheading), paragraphs (line
            spacing and formatting), equations, acknowledgements, and
            references.
          </li>
          <li>
            Enter any acknowledgements for <b>funding source</b> (e.g., NSF,
            NRC, and SRC), if applicable.
          </li>
          <li>
            If the title, and abstract of the final paper are different from the
            version submitted to Microsoft CMT during the review phase, you may
            edit those. <b>However, no new authors can be added.</b>
          </li>
          <li>
            Author names, affiliation, and order of names on Microsoft CMT need
            to be same as what is on the final. Proceedings will be prepared
            based on this data and <b>CANNOT</b> be modified later.
          </li>
          <li>
            <b>Include author information (names, affiliations, and emails)</b>{" "}
            as per the IEEE template in the camera-ready paper.
          </li>
          <li>
            Abstract on Microsoft CMT should be the same as the abstract on
            final paper.{" "}
            <b>
              IMPORTANT: Abstract in Microsoft CMT will be used for proceedings.
            </b>
          </li>
          <li>
            Only PDF files that comply with IEEE PDF guidelines are accepted.
            Check compliance using IEEE PDF Express.
          </li>
          <li>
            <strong>Do not include page numbers.</strong>
          </li>
          <li>
            <strong>Remove the copyright stamp</strong> from the bottom
            left-hand corner of the first page in the IEEE template. Shown in
            figure below.
          </li>
          <div className="w-max p-3">
            <Image src={IMG_SLIDE1} alt="Remove the copyright stamp"></Image>
          </div>
          <li>
            Make sure the images, graphs and tables are clear and text is
            legible.{" "}
            <b>
              Strictly follow the IEEE formatting guidelines regarding their
              position in text and formatting image/table titles.
            </b>
          </li>
          <li>
            Check for plagiarism; the similarity index should be less than 35%.
          </li>
          <li>
            <strong>Note:</strong> The camera-ready version is considered as
            final. Any paper that does not comply with IEEE formatting can get
            rejected at the phase of finalizing the conference proceedings.
          </li>
        </ul>
      </div>

      <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
        Instructions for IEEE PDF Express
      </h2>
      <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
        <b>Before Creating a PDF;</b>
        <ul className="list-disc leading-loose">
          <li>
            Proofread your source document thoroughly to to confirm that it will
            require no revision.
          </li>
          <b>Creating your PDF eXpress Account</b>
          <li>
            Log in to{" "}
            <Link
              className="text-red-600"
              target="_blank"
              href="https://ieee-pdf-express.org/"
            >
              IEEE PDF eXpress
            </Link>{" "}
            and create an account:
            <ol className="pl-10 sm:pl-16 list-decimal">
              <li>Select "New Users"</li>
              <li>Enter the following details:</li>
              <ul className="pl-10 sm:pl-16 list-disc">
                <li>64470X for the conference ID</li>
                <li>Your email address</li>
                <li>Password</li>
              </ul>
              <li>Continue to enter information as prompted</li>
            </ol>
            An online confirmation will be displayed, and an email confirmation
            will be sent verifying your account setup.
          </li>
          <li>
            <b>Previous users</b> of PDF eXpress need to follow the above steps,
            but should enter the same password that was used for previous
            conferences. Verify that your contact information is valid.
          </li>
        </ul>
      </div>

      <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
        Copyright Transfer
      </h2>
      <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
        <ul className="list-disc leading-loose">
          <li>
            Please transfer copyright through IEEE Electronic Copyright Form
            (eCF) using{" "}
            <b>Microsoft CMT when submitting Camera Ready Papers.</b> IEEE eCF
            site can be accessed by clicking as show in figures bellow.
          </li>
          <div className="w-max p-3 rounded">
            <Image src={IMG_SLIDE2} alt="Copyright Transfer"></Image>
          </div>
        </ul>
      </div>
    </div>
  );
}
