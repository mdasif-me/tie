'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Hamburger, Logo } from '../components';
import { navItems } from '../constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='w-full flex items-center justify-between container landing-shell mx-auto py-8'>
        <Link href='/' onClick={closeMenu} prefetch={false}>
          <Logo />
        </Link>
        <div className='lg:flex hidden items-center gap-6'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className='font-bold text-base text-white menu__link nav__desktop__item'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <Button className='sm:block hidden'>Free Analysis</Button>
          <Hamburger
            className='lg:hidden block'
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((previousState) => !previousState)}
          />
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden='true'
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full sm:w-1/2 w-10/12 bg-black px-6 py-24 transform-gpu transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className='flex flex-col gap-6'>
          {navItems.map((item) => (
            <div
              key={item.href}
              className={`nav__mobile__item transition-all duration-300 ${
                isMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-6 opacity-0'
              }`}
              onClick={closeMenu}
            >
              <Link
                href={item.href}
                prefetch={false}
                className='font-bold text-xl text-white menu__link'
              >
                {item.name}
              </Link>
            </div>
          ))}

          <div
            className={`nav__mobile__item transition-all duration-300 ${
              isMenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-6 opacity-0'
            }`}
            onClick={closeMenu}
          >
            <Button className='w-fit'>Free Analysis</Button>
          </div>
        </div>
      </div>
    </>
  );
}
