import { PlayCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import chart from '../../public/chart.svg';
import { Button, LiquidButton } from '../components';
import { states } from '../constants';
import HeroCard from './hero-card';
import Navbar from './navbar';
import StatesCard from './states-card';

export default function Hero() {
  return (
    <div
      data-section='hero'
      data-animate='hero-bg'
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
      className='relative xl:h-[920px] lg:h-[820px] sm:h-[720px] h-[640px]'
    >
      <Navbar />
      <article className='text-center text-white max-w-2xl mx-auto lg:mt-20 mt-5 px-4 '>
        <p
          className='lg:text-lg sm:text-base text-sm leading-loose'
          data-animate='hero-line'
        >
          Trusted by 140+ implant practices nationwide
        </p>
        <h1
          className='font-bold xl:text-6xl lg:text-4xl sm:text-3xl text-xl leading-tight mt-3'
          data-animate='hero-line'
        >
          The Proven Growth Engine for{' '}
          <span className='font-bold text-primary'>Full-Arch</span> Providers
        </h1>
        <p
          className='mt-7 lg:text-lg sm:text-base text-sm md:px-10 leading-relaxed'
          data-animate='hero-line'
        >
          Scale All-on-X without junk leads, no-shows, or racing to the bottom
          on price.We build the infrastructure that turns clinical skill into
          predictable full-arch revenue.
        </p>
      </article>
      <Image
        className='absolute left-52 bottom-96 xl:block hidden'
        src={chart}
        alt='chart-icon'
        width={190}
        height={34}
        data-animate='hero-float'
      />
      <div
        className='w-fit mx-auto sm:gap-6 gap-2 flex items-center mt-9'
        data-animate='hero-cta'
      >
        <Button className='lg:text-base! text-xs!' is_arrow={false}>
          Book a Demo
        </Button>
        <LiquidButton btn_className='flex items-center gap-3 lg:text-xl! text-xs!'>
          <PlayCircleIcon className='w-6 h-6' />
          See Results
        </LiquidButton>
      </div>
      <div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 sm:w-fit w-9/12'
        data-animate='hero-stats'
      >
        <div className='grid 2xl:grid-cols-4 grid-cols-2 gap-4 justify-center items-center'>
          {states.map((state, idx) => (
            <StatesCard key={idx} {...state} />
          ))}
        </div>
      </div>
      <HeroCard />
    </div>
  );
}
