import Container from "../Container/Container";
import Image from "next/image";
import Logo from "../../../public/Image/Logo.webp";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCopy,
} from "react-icons/fa";

export default function footer() {
  return (
    <footer className="py-16 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Left Side */}
          <div className="max-w-sm">
            <Image
              src={Logo}
              alt="Logo"
              className="w-[90px] h-[90px] mb-4"
            />

            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Sultanabad Secondary School
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-800" />
                Contact : 01715442678
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-800" />
                Email : school@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-800" />
                Address : Sultanabad, Habiganj
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-800">
              Quick Links
            </h3>

            <div className="w-20 h-1 bg-blue-800 mt-2 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <ul className="space-y-4">
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> DSHE
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> BANBEIS
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> BD National Portal
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> Ministry of Education
                </li>
              </ul>

              <ul className="space-y-4">
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> Sylhet Board
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> Primary & Mass Education
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> Forms of BD Govt
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> Pathshala EIMS
                </li>
              </ul>

              <ul className="space-y-4">
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> UGC
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> Dhaka University
                </li>
                <li className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
                  <FaRegCopy /> SUST
                </li>
              </ul>

            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}