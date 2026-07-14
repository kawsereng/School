import Container from '@/app/Container/Container'
import Link from 'next/link';
import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

export const Navbar = () => {
  return (
    <>
    <div className='bg-white shadow-md mt-[105px]'>
        <Container>
            <div>
                <ul className='flex gap-6 text-[20px] font-medium'>
                   <Link href="/"> <li className='hover:bg-blue-500 p-4 rounded-2xl flex items-center'> <MdOutlineHome />Home</li></Link> 
                   <Link href="/About"> <li className='hover:bg-blue-500 p-4 rounded-2xl flex items-center'>About<SlArrowDown  className='text-[14px] ml-2 mt-1'/></li></Link>
                   <Link href="/teacher"> <li className='hover:bg-blue-500 p-4 rounded-2xl flex items-center'>Teacher<SlArrowDown  className='text-[14px] ml-2 mt-1'/></li></Link>
                   <Link href="/information"> <li className='hover:bg-blue-500 p-4 rounded-2xl flex items-center'>Information<SlArrowDown className='text-[14px] ml-2 mt-1'/></li></Link>
                   <Link href="/notice"> <li className='hover:bg-blue-500 p-4 rounded-2xl flex items-center'>Notice<SlArrowDown className='text-[14px] ml-2 mt-1'/></li></Link>
                   <Link href="/contact"> <li className='hover:bg-blue-500 p-4 rounded-2xl flex items-center'>Contact<SlArrowDown className='text-[14px] ml-2 mt-1'/></li></Link>
                </ul>
            </div>
        </Container>
    </div>
    </>
  )
}
