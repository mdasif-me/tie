import { ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { memo } from 'react';

const Photo = memo(function Photo() {
  return (
    <div className='relative' data-animate='media'>
      <div>
        <Image
          draggable={false}
          src='/targeting-person.svg'
          alt='Person representing dental solutions'
          width={322}
          height={522}
          className='w-full object-contain'
          priority
          loading='eager'
          quality={85}
        />
      </div>
      <div
        className='absolute lg:-left-3 md:left-2 left-0 right-2 md:top-24 top-40 md:bg-white bg-white/5 backdrop-blur-sm rounded-2xl w-fit shadow-2xl max-w-md min-w-48 p-3 md:space-y-3.5 space-y-1.5'
        data-animate='card'
        data-hover='lift'
      >
        <div className='flex items-center gap-2'>
          <ChatBubbleLeftRightIcon className='shrink-0 rounded-full text-white bg-secondary size-10 p-2' />
          <article>
            <h3 className='text-black font-bold text-xl'>30 min</h3>
            <p className='text-xs font-normal'>Demo Call</p>
          </article>
        </div>
        <div className='bg-border w-full h-[1px]' />
        <div className='flex items-center gap-2'>
          <StarIcon className='shrink-0 rounded-full text-white bg-warning size-10 p-2' />
          <article>
            <h3 className='text-black font-bold text-xl'>
              4.9 <sub className='text-xs font-medium'> (1589)</sub>
            </h3>
            <p className='text-xs font-normal'>Average rating</p>
          </article>
        </div>
        <div className='bg-border w-full h-[1px]' />
        <div className='flex items-center gap-2'>
          <StarIcon className='shrink-0 rounded-full text-white bg-primary size-10 p-2' />
          <article>
            <h3 className='text-black font-bold text-xl'>50K+</h3>
            <p className='text-xs font-normal'>Patients Onboarded</p>
          </article>
        </div>
      </div>
      <div
        className='absolute lg:-right-10 right-0 bottom-24 bg-white rounded-2xl w-fit shadow-2xl max-w-md min-w-48 p-3 space-y-3.5 md:block hidden'
        data-animate='card'
        data-hover='lift'
      >
        <div className='flex items-center gap-2'>
          <article className='space-y-1.5 text-center'>
            <div className='flex justify-center -space-x-3 overflow-hidden p-1'>
              <Image
                alt='image'
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                width={48}
                height={48}
                className='inline-block size-12 rounded-full ring-2 ring-white outline -outline-offset-1 outline-white/10'
              />
              <Image
                alt='image'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                width={48}
                height={48}
                className='inline-block size-12 rounded-full ring-2 ring-white outline -outline-offset-1 outline-white/10'
              />
              <Image
                alt='image'
                src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
                width={48}
                height={48}
                className='inline-block size-12 rounded-full ring-2 ring-white outline -outline-offset-1 outline-white/10'
              />
              <Image
                alt='image'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                width={48}
                height={48}
                className='inline-block size-12 rounded-full ring-2 ring-white outline -outline-offset-1 outline-white/10'
              />
            </div>
            <h3 className='text-black font-bold text-xl text-center'>
              Hundreds of Happy Practices
            </h3>
            <div className='flex items-center gap-1 justify-center'>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    className='shrink-0 rounded-full text-warning size-6'
                  />
                ))}
            </div>
            <p className='font-thin'>(Hundreds of 5 Star Reviews)</p>
          </article>
        </div>
      </div>
    </div>
  );
});

export default Photo;
