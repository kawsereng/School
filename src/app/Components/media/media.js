'use client'


import Container from "../../Container/Container";
import { FaFacebookF } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";

export default function media() {
  return (
    <>
    <div className="bg-blue-400">
    <Container>
    <div className="flex gap-4 items-center justify-center py-4 text-[20px]">
        <div className="w-[60px] h-[60px] rounded-full bg-red-900 items-center justify-center hover:bg-blue-950 flex transition duration-300 ease-in-out">
            <FaFacebookF  className="text-white hover:text-blue-400 "/>
        </div>
        <div className="w-[60px] h-[60px] rounded-full bg-red-900 items-center justify-center hover:bg-blue-950 flex transition duration-300 ease-in-out">
            <SiWhatsapp  className="text-white hover:text-blue-400 "/>
        </div>
        <div className="w-[60px] h-[60px] rounded-full bg-red-900 items-center justify-center hover:bg-blue-950 flex transition duration-300 ease-in-out">
            <FaInstagram  className="text-white hover:text-blue-400 "/>
        </div>
        <div className="w-[60px] h-[60px] rounded-full bg-red-900 items-center justify-center hover:bg-blue-950 flex transition duration-300 ease-in-out">
            <TbBrandYoutube  className="text-white hover:text-blue-400 "/>
        </div>

    </div>
   </Container>
   </div>
    </>
     
  );
}