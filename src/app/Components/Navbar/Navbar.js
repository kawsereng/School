'use client';

import Container from '@/app/Container/Container';
import Link from 'next/link';
import { useState } from 'react';

import { MdOutlineHome, MdMenu, MdClose } from 'react-icons/md';
import { SlArrowDown } from 'react-icons/sl';

import { NavLogo } from './NavLogo';

const menuItems = [
  { name: 'Home', href: '/', icon: true },
  { name: 'About', href: '/About', arrow: true },
  { name: 'Teacher', href: '/teacher', arrow: true },
  { name: 'Information', href: '/information', arrow: true },
  { name: 'Notice', href: '/notice', arrow: true },
  { name: 'Contact', href: '/contact', arrow: true },
];

const linkClass =
  'flex items-center gap-1 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white hover:text-cyan-600 lg:px-4';

const iconClass = 'text-xs';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const toggle = (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 text-3xl text-gray-800 md:hidden"
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {isOpen ? <MdClose /> : <MdMenu />}
    </button>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">

      <NavLogo action={toggle} />

      <nav aria-label="Main navigation" className="bg-cyan-500 text-white">
        <Container>

          <ul className="hidden items-center gap-1 py-1 text-sm font-medium md:flex lg:gap-2 lg:text-base xl:gap-4 xl:text-lg">
            {menuItems.map(({ name, href, icon, arrow }) => (
              <li key={name}>
                <Link href={href} className={linkClass}>
                  {icon && <MdOutlineHome />}
                  {name}
                  {arrow && <SlArrowDown className={iconClass} />}
                </Link>
              </li>
            ))}
          </ul>

          <div
            id="mobile-menu"
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen ? 'max-h-[450px] opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="flex flex-col gap-1 border-t border-white/30 pt-2 text-sm font-medium sm:text-base">
              {menuItems.map(({ name, href, icon, arrow }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-lg p-3 transition-all duration-300 hover:bg-white hover:text-cyan-600"
                  >
                    {icon && <MdOutlineHome />}
                    {name}
                    {arrow && <SlArrowDown className={iconClass} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </Container>
      </nav>

    </header>
  );
};

export default Navbar;