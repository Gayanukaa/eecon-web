import Button from "@/components/common/Button";
import Link from "next/link";

export default function TravelInformation() {
  return (
    <div className="w-full bg-white text-black bg-gray-100">
      <div
        className="w-full text-white p-4 pl-16 flex-col justify-center items-center h-72"
        style={{
          backgroundImage: "url(bg/bg_h_03.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-36 left-1/6 text-start">
          <h1 className="text-4xl sm:text-6xl font-bold text-transform: uppercase">
            Travel Information
          </h1>
        </div>
      </div>
      <div className="py-8 bg-gray-100 flex justify-center items-center">
        <div className="w-1/2 text-center">
          {/* <h2 className="text-4xl font-bold text-gray-700 mb-2">Coming Soon</h2> */}
          <p>
            The EECon 2024 will take place at{" "}
            <Link
              className="text-red-600"
              target="_blank"
              href="https://www.marriott.com/en-us/hotels/cmbcy-courtyard-colombo/overview/"
            >
              Courtyard by Marriott
            </Link>
            , Sri Lanka.
          </p>
          <div className="mt-2">
            <Link
              target="blank"
              href={"https://eesoc.lk/"}
              className="pr-4 text-red-600"
            >
              Official Website
            </Link>
            <Button href="/contact">Contact Info</Button>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 sm:px-0 flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7748066025615!2d79.85314037534384!3d6.917504518458636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2599ac5bbc367%3A0xe72dd1728019c243!2sCourtyard%20Colombo!5e0!3m2!1sen!2slk!4v1731220059332!5m2!1sen!2slk"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
