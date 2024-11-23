import Button from "@/components/common/Button";
import ComingSoon from "@/components/common/ComingSoon";

export default function Program() {
  return (
    <div className="w-full bg-white text-black">
      <div
        className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72"
        style={{
          backgroundImage: "url(bg/bg_h_01.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-36 left-1/6 text-start">
          <h1 className="text-4xl sm:text-6xl font-bold uppercase">
            Program Schedule
          </h1>
        </div>
      </div>
      <div></div>
      <div className="py-16 bg-gray-100 flex flex-col items-center p-4">
        <div className="w-full pl-4">
          <h2 className="text-xl sm:text-2xl font-bold">Downloads</h2>
        </div>
        <div className="w-full flex flex-row items-center justify-start pl-12 sm:pl-32 pb-12">
          <p className="pr-24 sm:pr-40">Program Schedule</p>
          <Button href="/files/EECon 2024 Agenda.pdf">Download</Button>
        </div>
        <div className="w-full pl-4">
          <h2 className="text-xl sm:text-2xl font-bold">Program Time Table</h2>
        </div>
        <div className="mt-8 sm:w-3/4 w-full bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-900">
              <tr>
                <th className="text-left py-3 px-16 md:px-24 text-white">
                  TIME
                </th>
                <th className="text-left py-3 px-4 text-white">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-200">
                <td className="py-2 px-4">8.30 am – 9.00 am</td>
                <td className="py-2 px-4">
                  <b>Registration</b>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">9.00 am – 9.15 am</td>
                <td className="py-2 px-4">
                  <b>Inauguration</b>
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="py-2 px-4">9.15 am – 10.30 am</td>
                <td className="py-2 px-4">
                  <b>Keynote Speech 1</b> <br />
                  By Dr. Priyantha Wijayatunga, Senior Director, Energy Sector
                  Office, Asian Development Bank
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">10.30 am – 10.45 am</td>
                <td className="py-2 px-4">
                  <b>Morning Tea</b>
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="py-2 px-4">10.45 am – 12.30 pm</td>
                <td className="py-2 px-4">
                  <b> Technical Tracks </b> <br /> (Three Parallel Sessions)
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">12.30 pm – 1.30 pm</td>
                <td className="py-2 px-4">
                  <b>Lunch</b>
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="py-2 px-4">1.30 pm – 3.00 pm</td>
                <td className="py-2 px-4">
                  <b> Technical Tracks </b> <br /> (Three Parallel Sessions)
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">3.00 pm – 3.15 pm</td>
                <td className="py-2 px-4">
                  <b>Evening Tea</b>
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="py-2 px-4">3.15 pm – 4.15 pm</td>
                <td className="py-2 px-4">
                  <b>Keynote Speech 2</b> <br />
                  By Prof. Jason Mars, Professor, Electrical Engineering and
                  Computer Science, College of Engineering, University of
                  Michigan, USA
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">4.15 pm – 5.00 pm</td>
                <td className="py-2 px-4">
                  <b>Closing and Awards Ceremony</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
