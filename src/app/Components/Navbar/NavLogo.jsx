
import Container from '@/app/Container/Container'
import Image from "next/image";
import Logo from '../../../../public/Image/Logo.webp'
import Link from 'next/link';


export const NavLogo = () => {
  return (
    <>
    <div className=' max-w-full h-[100px]'>
        <Container>
            <div className='flex'>
               <Link href="#"> <div><Image  src={Logo} alt='Logo' className='max-w-[250px] h-[250px]'/></div></Link> 

                <div className='mt-[50px]'>
                <h3 className='text-[36px] font-bold text-black'>সুলতানাবাদ  মাধ্যমিক বিদ্যালয়</h3>
                <h5 className='text-[20px] font-medium text-black'>স্থাপিত :১৯৭৩</h5>
                <h5 className='text-[20px] font-medium text-black'>পটুয়াখালী, মির্জাগঞ্জ ,সুলতানাবাদ</h5>
                </div>
            

            </div>
            
        </Container>
    </div>
    </>
  )
}
