import Image from 'next/image';
import { memo } from 'react';

const Gallery = memo(function Gallery() {
  return (
    <div className='relative'>
      <div className='flex gap-5 md:h-full max-h-[522px]'>
        <Image
          draggable={false}
          src='/dentist-doctor.webp'
          alt='Dentist preparing for treatment'
          width={322}
          height={522}
          className='rounded-2xl shadow-xl w-full md:w-auto object-cover object-center'
          priority
          loading='eager'
          sizes='(max-width: 768px) 100vw, 322px'
          quality={85}
        />
        <Image
          draggable={false}
          src='/dentist-mechine.webp'
          alt='Dental equipment and tools'
          width={264}
          height={522}
          className='rounded-2xl shadow-xl md:block hidden'
          loading='eager'
          sizes='(max-width: 768px) 100vw, 264px'
          quality={85}
        />
      </div>
      <Image
        draggable={false}
        src='/puzzle.svg'
        alt='Puzzle piece representing dental solutions'
        width={156}
        height={156}
        loading='eager'
        sizes='(max-width: 768px) 100vw, 156px'
        className='absolute top-20 md:-right-5 right-0 translate-x-1/2 z-50'
        quality={85}
      />
      <div className='absolute flex items-center md:gap-5 gap-2 md:-left-3 left-2 right-2 bottom-20 p-2 bg-white rounded-2xl w-fit shadow-xl max-w-md'>
        <Image
          draggable={false}
          src='/avatar.png'
          alt='Avatar representing dental solutions'
          width={70}
          height={70}
          loading='eager'
          className='shrink-0'
          sizes='(max-width: 768px) 100vw, 70px'
          quality={85}
        />
        <article>
          <h1 className='lg:text-2xl md:text-xl text-lg text-secondary font-bold'>
            As one doctor put it
          </h1>
          <p className='lg:text-base md:text-sm text-xs'>
            “The deeper I get into this, the more I realize… it’s not the
            clinical. It’s everything around it that I don’t have a handle on.”
          </p>
        </article>
      </div>
    </div>
  );
});

export default Gallery;
