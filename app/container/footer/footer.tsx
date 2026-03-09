import {
  footerCompanyLinks,
  footerCoreEngineLinks,
  type IFooterLink,
} from '@/app/constants';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const Footer = memo(function Footer() {
  return (
    <footer className='bg-secondary text-white' data-section='footer'>
      <div className='container landing-shell mx-auto py-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12'>
          <article className='max-w-sm' data-animate='footer-col'>
            <Image
              src='/logo.svg'
              alt='The Implant Engine logo'
              width={188}
              height={33}
            />
            <p className='mt-4 text-sm leading-6 text-white/70'>
              Scaling specialized dental implant practices through performance
              marketing and elite lead conversion systems.
            </p>
            <div className='mt-6 flex items-center gap-2.5'>
              <Link
                href='#'
                aria-label='Facebook'
                className='inline-flex size-9 items-center justify-center rounded-full bg-white/12 text-white/85 transition-colors hover:bg-white/20'
                data-hover='glow'
              >
                <FacebookIcon />
              </Link>
              <Link
                href='#'
                aria-label='Instagram'
                className='inline-flex size-9 items-center justify-center rounded-full bg-white/12 text-white/85 transition-colors hover:bg-white/20'
                data-hover='glow'
              >
                <InstagramIcon />
              </Link>
            </div>
          </article>

          <FooterLinks title='Core Engine' links={footerCoreEngineLinks} />
          <FooterLinks title='Company' links={footerCompanyLinks} />

          <article className='max-w-sm' data-animate='footer-col'>
            <h3 className='text-white text-2xl font-semibold'>
              Join the Newsletter
            </h3>
            <p className='mt-3 text-sm leading-6 text-white/70'>
              Weekly insights on scaling dental implant revenue.
            </p>

            <form className='mt-4 flex items-center rounded-xl bg-[#16315b] p-1'>
              <label htmlFor='footer-newsletter-email' className='sr-only'>
                Enter email address
              </label>
              <input
                id='footer-newsletter-email'
                name='email'
                type='email'
                placeholder='Enter Email Address'
                className='w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/50 placeholder:italic outline-none'
              />
              <button
                type='submit'
                aria-label='Subscribe'
                className='inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-info'
                data-hover='glow'
              >
                <PaperAirplaneIcon className='size-4' />
              </button>
            </form>
          </article>
        </div>

        <div
          className='mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/80'
          data-animate='footer-bottom'
        >
          &copy; 2026 The Implant Engine. All rights reserved. Designed for
          elite dental practices.
        </div>
      </div>
    </footer>
  );
});

function FooterLinks({
  title,
  links,
}: Readonly<{
  title: string;
  links: IFooterLink[];
}>) {
  return (
    <article data-animate='footer-col'>
      <h3 className='text-white text-2xl font-semibold'>{title}</h3>
      <ul className='mt-4 space-y-3'>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className='text-sm text-white/75 transition-colors hover:text-white'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='size-4'>
      <path d='M13.53 21.5v-8.2h2.77l.42-3.2h-3.19V8.05c0-.93.26-1.57 1.59-1.57h1.7V3.62a22.56 22.56 0 0 0-2.47-.13c-2.44 0-4.1 1.48-4.1 4.2v2.41H7.5v3.2h2.75v8.2h3.28Z' />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='size-4'>
      <rect
        x='3.25'
        y='3.25'
        width='17.5'
        height='17.5'
        rx='5'
        stroke='currentColor'
        strokeWidth='1.8'
      />
      <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='1.8' />
      <circle cx='17.1' cy='6.9' r='1.2' fill='currentColor' />
    </svg>
  );
}

export default Footer;
