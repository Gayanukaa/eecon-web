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
                    <p className="pr-16 sm:pr-32">Tentative Program Schedule</p>
                    <Button href="/files/Initial Program Schedule for EECon 2024.docx">
                        Download
                    </Button>
                </div>
                <div className="w-full pl-4">
                    <h2 className="text-xl sm:text-2xl font-bold">
                        Program Time Table
                    </h2>
                </div>
                <div className="mt-8 sm:w-3/4 w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-blue-900">
                            <tr>
                                <th className="text-left py-3 px-16 md:px-24 text-white">
                                    TIME
                                </th>
                                <th className="text-left py-3 px-4 text-white">
                                    DESCRIPTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-200">
                                <td className="py-2 px-4">8.00 am – 8.30 am</td>
                                <td className="py-2 px-4">
                                    <b>Registration</b>
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-2 px-4">8.30 am – 8.45 am</td>
                                <td className="py-2 px-4">
                                    <b>Inauguration</b>
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="py-2 px-4">
                                    8.45 am – 10.15 am
                                </td>
                                <td className="py-2 px-4">
                                    <b>Keynote Speech 1</b> <br />
                                    by Prof. Jason Mars, University of Michigan,
                                    USA
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-2 px-4">
                                    10.15 am – 10.45 am
                                </td>
                                <td className="py-2 px-4">
                                    <b>Morning Tea</b>
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="py-2 px-4">
                                    10.45 am – 12.30 pm
                                </td>
                                <td className="py-2 px-4">
                                    <b> Technical Paper presentations 1</b>{" "}
                                    <br /> (Three Parallel Sessions - 5 papers
                                    per session and 20 minutes per presentation)
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-2 px-4">
                                    12.30 pm – 1.30 pm
                                </td>
                                <td className="py-2 px-4">
                                    <b>Lunch</b>
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="py-2 px-4">1.30 pm – 3.00 pm</td>
                                <td className="py-2 px-4">
                                    <b>Keynote Speech 2</b>
                                    <br />
                                    Coming Soon...
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-2 px-4">3.00 pm – 3.30 pm</td>
                                <td className="py-2 px-4">
                                    <b>Evening Tea</b>
                                </td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="py-2 px-4">3.30 pm – 5.15 pm</td>
                                <td className="py-2 px-4">
                                    <b>Technical Paper presentations 2</b>
                                    <br /> (Two Parallel Sessions - 5 papers per
                                    session and 20 minutes per presentation)
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="py-2 px-4">5.15 pm – 5.45 pm</td>
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
