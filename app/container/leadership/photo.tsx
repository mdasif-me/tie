import Image from 'next/image';
import { memo } from 'react';

const Photo = memo(function Photo() {
  return (
    <div className='relative' data-animate='media'>
      <Image
        draggable={false}
        src='/leadership.svg'
        alt='Person representing dental solutions'
        width={322}
        height={522}
        className='w-full h-auto object-contain'
        sizes='(max-width: 768px) 100vw, 322px'
        quality={85}
      />
    </div>
  );
});

export default Photo;
