import Image from 'next/image';
import { memo } from 'react';

const Photo = memo(function Photo() {
  return (
    <div className='relative'>
      <Image
        draggable={false}
        src='/leadership.svg'
        alt='Person representing dental solutions'
        width={322}
        height={522}
        className='w-full object-cntain'
        priority
        loading='eager'
        quality={85}
      />
    </div>
  );
});

export default Photo;
