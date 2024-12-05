import HeaderCard from "@/components/common/HeaderCard";
import Image from "next/image";

import IMG_PRIYANTHA from "@/assets/speakers/priyantha_wijayatunga.png";
import IMG_JSON from "@/assets/speakers/prof_json_mars.jpg";
import ComingSoonTile from "@/components/common/ComingSoonTile";

export default function Speakers() {
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
            Speakers
          </h1>
        </div>
      </div>
      <HeaderCard text={"Keynote Speakers"}></HeaderCard>

      {/* Speaker 1 */}
      <div className="flex md:flex-row flex-col items-center p-8">
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <div className="bg-gray-200 w-max p-3 rounded">
            <Image
              style={{ width: 235, height: 300 }}
              src={IMG_PRIYANTHA}
              alt="Keynote Speaker 1"
            ></Image>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Dr. Priyantha Wijayatunga</h2>
            <p>
              Senior Director
              <br />
              Energy Sector Office, Asian Development Bank
            </p>
          </div>
          <ComingSoonTile topic="Energy Transition: Multilateral Financing Institutions’ perspective"></ComingSoonTile>
        </div>
        <div className="basis-1/2 p-4">
          <div className="mt-4 p-4 bg-white shadow-lg rounded">
            <p style={{ fontSize: "16px" }}>
              Dr. Priyantha Wijayatunga has over 35 years of professional
              experience including almost 17 years in ADB. He was the Director,
              South Asia Energy Division and Chief of Energy Sector Group prior
              to assuming the current position. Before joining ADB, he served as
              the founder Director General of the Public Utilities Commission of
              Sri Lanka, a Senior Professor of Electrical Engineering at the
              University of Moratuwa and its founder Dean, of the Faculty of
              Information Technology. He was also a member of the Board of
              Directors of the Ceylon Electricity Board and Sri Lanka
              Sustainable Energy Authority and Advisory Board, Melbourne Energy
              Institute. He has extensively contributed in the areas of energy
              policy and regulation, energy planning and clean energy
              development. He has published over 100 research publications,
              books in these areas. Priyantha, a Fellow of the Institution of
              Engineers Sri Lanka, holds a Doctorate in Power Systems Economics
              from the Imperial College London on Beit Scientific Research
              Fellowship. He served as an Academic Visitor at Imperial College
              and Chairman, South Asia Forum for Infrastructure Regulators. He
              is a Chartered Electrical Engineer, a Member of IET and Senior
              Member of IEEE. He is a Past President of SLEMA.
            </p>
          </div>
        </div>
      </div>

      {/* Speaker 2 */}
      <div className="flex md:flex-row flex-col items-center p-8">
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <div className="bg-gray-200 w-max p-3 rounded">
            <Image
              style={{ width: 215, height: 300 }}
              src={IMG_JSON}
              alt="Keynote Speaker 2"
            ></Image>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Prof. Jason Mars</h2>
            <p>
              Professor, Electrical Engineering and Computer Science
              <br />
              College of Engineering, University of Michigan, USA
            </p>
          </div>
          <ComingSoonTile topic="Generative AI: Feels like Progress But We're Still Stuck"></ComingSoonTile>
        </div>
        <div className="basis-1/2 p-4">
          <div className="mt-4 p-4 bg-white shadow-lg rounded">
            <p style={{ fontSize: "16px" }}>
              Prof. Jason Mars is a professor of computer science at University
              of Michigan, and CEO of Jaseci Labs, LLC. Jason Mars’ body of work
              is at the nexus of science, technology, and entrepreneurship. As a
              computer science professor at the University of Michigan, he helms
              the Jaseci Research Group, a leading research lab specializing in
              artificial intelligence, large-scale computing, and programming
              languages. Mars is also the creator of the Jaseci and the Jac
              programming language, a new technology stack that revolutionizes
              the way sophisticated software is created using Generative AI and
              is commercially used by companies like Myca.ai, Tobu Life, and
              ZeroShotBot. Mars has earned accolades such as Crain Business’s 40
              under 40, Bank Innovations’ Most Innovative CEO, and the CARAH
              Award. Mars is also the author of the bestselling “Breaking Bots:
              Inventing A New Voice In The AI Revolution”, offering insights on
              AI’s trajectory and inspiring future leaders. Before his tenure at
              the University of Michigan, Mars was a professor at UCSD, and has
              experience bringing technologies to market with tech giants Google
              and Intel. He earned his PhD in Computer Science from UVA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
