import Container from '@/app/Container/Container'

import { IoMailOutline } from "react-icons/io5"; // React icon
import { TbPhoneCall } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import React from 'react'
import Link from 'next/link';

export const Navbartop = () => {
  return (
<>
    <div className='bg-mist-900'>
    <Container>
    <div className='flex justify-between text-white items-center text-[16px]'>
        <div className='flex  gap-8 '>
           <Link className='flex items-center gap-1' href="mailto:Demo@gmail.com"> <IoMailOutline />Demo@gmail.com</Link>
            <Link className='flex items-center gap-1'  href="tel:+01700000000"><TbPhoneCall />01700000000</Link>
        </div>

        <div >
            <div className='flex items-center gap-4'>
                <Link href="https://www.facebook.com"><FaFacebookF /></Link>
                <Link href="https://www.whatsapp.com/"><FaWhatsapp /></Link>
                <Link href="https://x.com/"><CiTwitter /></Link>
                <Link href="https://www.youtube.com/"><FiYoutube /></Link>
            </div>
        </div>

        <div>
           <Link className='flex items-center gap-1' href="/Log-In"><CgProfile  /> Log In</Link>
        </div>
    </div>

    </Container>
    </div>
 </>
    
    
  )
}
