'use client';

import Container from '@/app/Container/Container';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../../../public/Image/Logo.webp';

export const NavLogo = ({ action }) => {
  return (
    <div className="w-full bg-white">
      <Container>
        <div className="flex items-center gap-2 py-3 sm:gap-4 sm:py-4">

          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4">

            <Link
              href="/"
              className="shrink-0"
              aria-label="Sultanabad High School home"
            >
              <Image
                src={Logo}
                alt="School Logo"
                width={110}
                height={110}
                preload
                className="h-[55px] w-[55px] object-contain sm:h-[75px] sm:w-[75px] lg:h-[100px] lg:w-[100px]"
              />
            </Link>

            <div className="min-w-0">
              <h3 className="text-[15px] leading-tight font-bold text-black sm:text-[23px] md:text-[28px] lg:text-[36px]">
                সুলতানাবাদ মাধ্যমিক বিদ্যালয়
              </h3>

              <p className="mt-1 text-[11px] font-medium text-black sm:text-[14px] lg:text-[18px]">
                স্থাপিত : ১৯৭৩
              </p>

              <p className="text-[10px] font-medium text-black sm:text-[13px] lg:text-[16px]">
                পটুয়াখালী, মির্জাগঞ্জ, সুলতানাবাদ
              </p>
            </div>

          </div>

          {action ? <div className="shrink-0">{action}</div> : null}

        </div>
      </Container>
    </div>
  );
};

export default NavLogo;