'use client';

import Container from '@/app/Container/Container';
import Link from 'next/link';

import { IoMailOutline } from 'react-icons/io5';
import { TbPhoneCall } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import { FiYoutube } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
  { label: 'WhatsApp', href: 'https://www.whatsapp.com/', icon: FaWhatsapp },
  { label: 'Twitter', href: 'https://x.com/', icon: CiTwitter },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: FiYoutube },
];

export const Navbartop = () => {
  return (
    <div className="bg-slate-900 text-white">
      <Container>
        <div className="flex items-center justify-between gap-3 min-h-[40px] py-1 text-xs sm:text-sm">

          <div className="flex items-center gap-4 sm:gap-8">
            <Link
              className="flex items-center gap-1 hover:text-blue-300 transition-colors"
              href="mailto:demo@gmail.com"
            >
              <IoMailOutline />
              <span className=" sm:inline">demo@gmail.com</span>
            </Link>

            <Link
              className="flex items-center gap-1 hover:text-blue-300 transition-colors"
              href="tel:+8801700000000"
            >
              <TbPhoneCall />
              <span>+880 1700-000000</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-blue-300 transition-colors"
              >
                <Icon />
              </Link>
            ))}
          </div>

          <Link
            className="sm:flex items-center gap-1 hover:text-blue-300 transition-colors"
            href="/login"
          >
            <CgProfile />
            Log In
          </Link>

        </div>
      </Container>
    </div>
  );
};

export default Navbartop;       
