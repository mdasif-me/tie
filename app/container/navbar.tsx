'use client';

import { gsap } from 'gsap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button, Hamburger, Logo, NavLink } from '../components';
import { navItems } from '../constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuItemsRef = useRef<HTMLDivElement>(null);
  const mobileMenuTimelineRef = useRef<gsap.core.Timeline>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    const desktopMenu = desktopMenuRef.current;
    const actions = actionsRef.current;
    const overlay = overlayRef.current;
    const mobileMenu = mobileMenuRef.current;

    if (
      !navbar ||
      !logo ||
      !desktopMenu ||
      !actions ||
      !overlay ||
      !mobileMenu
    ) {
      return;
    }

    gsap.set(overlay, { autoAlpha: 0, pointerEvents: 'none' });
    gsap.set(mobileMenu, { x: '100%', pointerEvents: 'none' });

    const desktopMenuItems = gsap.utils.toArray<HTMLElement>(
      '.nav__desktop__item',
      desktopMenu
    );

    const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    introTimeline
      .from(navbar, { y: -42, autoAlpha: 0, duration: 0.55 })
      .from(logo, { y: -14, autoAlpha: 0, duration: 0.35 }, '-=0.25')
      .from(actions, { y: -14, autoAlpha: 0, duration: 0.35 }, '<')
      .from(
        desktopMenuItems,
        {
          y: -18,
          autoAlpha: 0,
          duration: 0.35,
          stagger: 0.1,
        },
        '-=0.15'
      );

    return () => {
      introTimeline.kill();
      mobileMenuTimelineRef.current?.kill();
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const mobileMenu = mobileMenuRef.current;
    const mobileMenuItemsContainer = mobileMenuItemsRef.current;

    if (!overlay || !mobileMenu || !mobileMenuItemsContainer) {
      return;
    }

    const mobileMenuItems = gsap.utils.toArray<HTMLElement>(
      '.nav__mobile__item',
      mobileMenuItemsContainer
    );

    mobileMenuTimelineRef.current?.kill();

    if (isMenuOpen) {
      const openTimeline = gsap.timeline();
      mobileMenuTimelineRef.current = openTimeline;

      gsap.set([overlay, mobileMenu], { pointerEvents: 'auto' });
      openTimeline
        .to(overlay, { autoAlpha: 1, duration: 0.2, ease: 'power2.out' }, 0)
        .to(mobileMenu, { x: 0, duration: 0.35, ease: 'power3.out' }, 0)
        .fromTo(
          mobileMenuItems,
          { x: 24, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.08,
          },
          0.1
        );

      document.body.style.overflow = 'hidden';
      return;
    }

    const closeTimeline = gsap.timeline();
    mobileMenuTimelineRef.current = closeTimeline;

    closeTimeline
      .to(overlay, { autoAlpha: 0, duration: 0.2, ease: 'power2.in' }, 0)
      .to(
        mobileMenu,
        {
          x: '100%',
          duration: 0.3,
          ease: 'power3.in',
        },
        0
      )
      .set([overlay, mobileMenu], { pointerEvents: 'none' });

    document.body.style.overflow = '';
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className='w-full flex items-center justify-between container landing-shell mx-auto py-8'
      >
        <Link ref={logoRef} href='/' onClick={closeMenu}>
          <Logo />
        </Link>
        <div ref={desktopMenuRef} className='lg:flex hidden items-center gap-6'>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className='font-bold text-base text-white menu__link nav__desktop__item'
              activeClassName='menu__link__active'
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div ref={actionsRef} className='flex items-center gap-4'>
          <Button className='sm:block hidden'>Free Analysis</Button>
          <Hamburger
            className='lg:hidden block'
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((previousState) => !previousState)}
          />
        </div>
      </nav>

      <div
        ref={overlayRef}
        className='fixed inset-0 z-40 bg-black/60 opacity-0 pointer-events-none lg:hidden'
        onClick={closeMenu}
      />

      <div
        ref={mobileMenuRef}
        className='fixed top-0 right-0 z-50 h-full sm:w-1/2 w-10/12 bg-black px-6 py-24 translate-x-full lg:hidden'
      >
        <div ref={mobileMenuItemsRef} className='flex flex-col gap-6'>
          {navItems.map((item) => (
            <div
              key={item.href}
              className='nav__mobile__item'
              onClick={closeMenu}
            >
              <NavLink
                href={item.href}
                className='font-bold text-xl text-white menu__link'
                activeClassName='menu__link__active'
              >
                {item.name}
              </NavLink>
            </div>
          ))}

          <div className='nav__mobile__item' onClick={closeMenu}>
            <Button className='w-fit'>Free Analysis</Button>
          </div>
        </div>
      </div>
    </>
  );
}
