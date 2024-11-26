import IMG_SLIDE1 from "@/assets/slides/camera_paper_instruction_slide1.png";
import IMG_SLIDE2 from "@/assets/slides/camera_paper_instruction_slide2.png";
import HeaderCard from "@/components/common/HeaderCard";
import Image from "next/image";
import Link from "next/link";

export default function Registration() {
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
            Registration
          </h1>
        </div>
      </div>
      <HeaderCard text={"Attendee Registration Guidelines"} />
      <div className="pl-6 sm:pl-12 sm:w-4/5 w-full my-4 py-2 pr-4">
        <p>
          EECon 2024 will be held at the{" "}
          <Link
            className="text-red-600"
            href={"https://maps.app.goo.gl/51qR3gK8GdFDQ2K17?g_st=ic"}
          >
            Courtyard by Marriott Colombo
          </Link>{" "}
          and it will facilitate foreign participants via online platform if
          required. The following fee categories will be charged from each paper
          to cover IEEE payments, payment for paper management system, and meals
          and refreshments.
        </p>
      </div>
      <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
        Registration fees are given below
      </h2>

      <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-4 py-2 pr-4">
        <h3 className="font-semibold text-lg mb-2">
          Early Bird Registration Deadline: 30<sup>th</sup> November 2024
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-400 mb-6">
            <thead>
              <tr className="bg-red-100">
                <th
                  className="border border-gray-400 px-4 py-2"
                  colSpan={1}
                  rowSpan={2}
                >
                  Early Bird Registration Fees
                </th>
                <th className="border border-gray-400 px-4 py-2" colSpan={2}>
                  Local
                </th>
                <th className="border border-gray-400 px-4 py-2" colSpan={2}>
                  Foreign
                </th>
              </tr>
              <tr className="bg-red-100">
                <th className="border border-gray-400 px-4 py-2">IEEE</th>
                <th className="border border-gray-400 px-4 py-2">Non IEEE</th>
                <th className="border border-gray-400 px-4 py-2">IEEE</th>
                <th className="border border-gray-400 px-4 py-2">Non IEEE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Students</td>
                <td className="border border-gray-400 px-4 py-2">LKR 15000</td>
                <td className="border border-gray-400 px-4 py-2">LKR 17500</td>
                <td className="border border-gray-400 px-4 py-2" rowSpan={2}>
                  USD 150
                </td>
                <td className="border border-gray-400 px-4 py-2" rowSpan={2}>
                  USD 200
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Working Professionals
                </td>
                <td className="border border-gray-400 px-4 py-2">LKR 25000</td>
                <td className="border border-gray-400 px-4 py-2">LKR 30000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Discount rate for IEEE IES/PES/RAS Members*
                </td>
                <td className="border border-gray-400 px-4 py-2">LKR 22500</td>
                <td className="border border-gray-400 px-4 py-2">-</td>
                <td className="border border-gray-400 px-4 py-2">USD 135</td>
                <td className="border border-gray-400 px-4 py-2">-</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Non-presenting authors and other participants
                </td>
                <td className="border border-gray-400 px-4 py-2" colSpan={2}>
                  LKR 15000
                </td>
                <td className="border border-gray-400 px-4 py-2" colSpan={2}>
                  USD 100
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm">*Does not apply for student registrations.</p>
        <br></br>
        <h3 className="font-semibold text-lg mb-2">
          Onsite Registration: Cash ONLY.
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-400 mb-6">
            <thead>
              <tr className="bg-red-100">
                <th
                  className="border border-gray-400 px-4 py-2"
                  colSpan={1}
                  rowSpan={2}
                >
                  Onsite Registration Fees
                </th>
                <th className="border border-gray-400 px-4 py-2" colSpan={2}>
                  Local
                </th>
                <th className="border border-gray-400 px-4 py-2" colSpan={2}>
                  Foreign
                </th>
              </tr>
              <tr className="bg-red-100">
                <th className="border border-gray-400 px-4 py-2">IEEE</th>
                <th className="border border-gray-400 px-4 py-2">Non IEEE</th>
                <th className="border border-gray-400 px-4 py-2">IEEE</th>
                <th className="border border-gray-400 px-4 py-2">Non IEEE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Students</td>
                <td className="border border-gray-400 px-4 py-2">LKR 17500</td>
                <td className="border border-gray-400 px-4 py-2">LKR 20000</td>
                <td className="border border-gray-400 px-4 py-2">USD 200</td>
                <td className="border border-gray-400 px-4 py-2">USD 250</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Working Professionals
                </td>
                <td className="border border-gray-400 px-4 py-2">LKR 27500</td>
                <td className="border border-gray-400 px-4 py-2">LKR 32500</td>
                <td className="border border-gray-400 px-4 py-2">USD 200</td>
                <td className="border border-gray-400 px-4 py-2">USD 250</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  Non-presenting authors and other participants
                </td>
                <td className="border border-gray-400 px-4 py-2" colSpan={2}>
                  LKR 5000
                </td>
                <td className="border border-gray-400 px-4 py-2" colSpan={2}>
                  USD 100
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
        Registration Procedure
      </h2>
      <br></br>
      <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-1 py-0 pr-4">
        <h3 className="font-semibold text-lg mb-2">
          Author Registration and Payment Deadline: 30<sup>th</sup> November
          2024
        </h3>
        <ul className="list-disc pl-6 my-2">
          <li>
            Register by filling this form{" "}
            <a
              href="https://forms.gle/prhX273JbGqVprDZ7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://forms.gle/prhX273JbGqVprDZ7
            </a>
          </li>
          <li>
            Arrange the publication payment and email proof of payment (bank
            slip, online notice, etc) to{" "}
            <a
              href="mailto:ruwanthim@uom.lk"
              className="text-blue-600 underline"
            >
              ruwanthim@uom.lk
            </a>{" "}
            including paper ID and Title to complete the registration by 30
            <sup>th</sup> November 2024.
          </li>
        </ul>
        <h3 className="font-semibold text-lg mb-2">
          Participants Registration and Payment Deadline: 5<sup>th</sup>{" "}
          December 2024
        </h3>
        <ul className="list-disc pl-6 my-2">
          <li>
            Register via filling this form{" "}
            <a
              href="https://forms.gle/kZqUXdkAfkETPhLK7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://forms.gle/kZqUXdkAfkETPhLK7
            </a>
          </li>
        </ul>

        <h3 className="font-semibold text-lg mb-2">
          Instructions for Registrations are given below
        </h3>
        <ul className="list-disc pl-6 my-2">
          <li>
            Registration fees will be charged as a publication fee from one
            author per paper and to cover meal and refreshment costs as this is
            held in physical mode for local participants. Virtual presence is
            given only for those who are based in foreign countries if required.
          </li>
          <li>
            At least one author should register and pay the publication fee.
          </li>
          <li>
            All other participants including co-authors are charged the{" "}
            <b>non-presenting authors and other participants fee</b> to cover
            the meal and refreshments costs.
          </li>
          <li>
            All registrations include welcome reception, electronic form of
            conference proceedings, access to conference portal, access to
            keynote and technical sessions, and meals.
          </li>
        </ul>

        <h4 className="font-semibold text-lg mt-4">Note:</h4>
        <ul className="list-disc pl-6 my-2">
          <li>
            With <b>a single full registration</b>, one can register for{" "}
            <b>TWO</b> papers having co-authorship.
          </li>
          <li>
            With <b>a single student registration</b>, one can register for{" "}
            <b>ONE</b> paper.
          </li>
        </ul>
      </div>
      <h2 className="font-semibold text-xl ml-6 sm:ml-12 mt-4 uppercase">
        Payment Method
      </h2>
      <div className="pl-12 sm:pl-24 sm:w-4/5 w-full my-1 py-1 pr-4">
        <h3 className="font-semibold text-lg mb-2">
          For Authors with Local Affiliations:
        </h3>
        <p className="mb-2">
          You may pay to any Bank of Ceylon branch or pay via online banking
          facilities. Use the following details:
        </p>
        <ul className="list-disc pl-6 my-2">
          <li>Account number – 320716</li>
          <li>Account Name – Electrical Engineering Society</li>
          <li>Bank - Bank of Ceylon</li>
          <li>Branch - Katubedda Campus Branch</li>
          <li>Branch Code - 631</li>
        </ul>
        <p className="mb-2">
          Clearly indicate your Name and Telephone number. Use “EECon 2024-CMT
          paper ID” as reason/memo for payment. Please ask the bank teller to
          print these on the deposit slip. If you are transferring via online
          banking, indicate the reason as “EECon 2024-CMT paper ID”.
        </p>

        <h3 className="font-semibold text-lg mb-2">
          For Authors with Foreign Affiliations:
        </h3>
        <p className="mb-2">
          Payment needs to be completed as a bank transfer. Transfer details
          should be updated in the author registration form or emailed to the
          Conference Chair.
        </p>
        <ul className="list-disc pl-6 my-2">
          <li>Account number – 320716</li>
          <li>Account Name – Electrical Engineering Society</li>
          <li>Bank - Bank of Ceylon</li>
          <li>Branch - Katubedda Campus Branch</li>
          <li>Branch Code - 631</li>
          <li>SWIFT Code: BCEYLKLX</li>
          <li>
            Bank Address: Bank of Ceylon - Katubedda Campus, University of
            Moratuwa, Katubedda, Moratuwa, Sri Lanka
          </li>
        </ul>
        <p className="mb-2">
          Clearly indicate your Name and Telephone number. Use “EECon 2024-CMT
          paper ID” as reason/memo for payment. Please ask the bank teller to
          print these on the deposit slip. If you are transferring via online
          banking, indicate the reason as “EECon 2024-CMT paper ID”.
        </p>

        <h4 className="font-semibold text-lg mt-4">Note:</h4>
        <p>
          Please contact the program chair for any clarification. Email:{" "}
          <a href="mailto:ruwanthim@uom.lk" className="text-blue-600 underline">
            ruwanthim@uom.lk
          </a>
        </p>
        <br></br>
      </div>
    </div>
  );
}
