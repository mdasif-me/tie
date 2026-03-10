import Link from 'next/link';

export default function Header() {
  return (
    <div
      className='bg-black text-white w-full text-center py-2.5 text-xs'
      data-section='header'
      data-animate='item'
    >
      Introducing{' '}
      <Link
        href='/full-arch-growth-formula'
        prefetch={false}
        className='underline'
      >
        The Full Arch Growth <span className='ordinal'>Formula</span>
      </Link>
      <sup>TM</sup>, the dental marketing book for specialists. Claim your FREE
      copy!
    </div>
  );
}
