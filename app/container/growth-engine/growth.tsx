import { Badge, LiquidButton } from '@/app/components';
import { growth } from '@/app/constants';
import { memo } from 'react';
import GrowthCard from './growth-card';

const Growth = memo(function Growth() {
  return (
    <div className='bg-secondary'>
      <div className='container mx-auto py-20 lg:px-20 p-4'>
        <div className='flex justify-center items-center'>
          <article className='text-white text-center space-y-4'>
            <Badge
              text='- The Full-Arch Growth Engine'
              varient='secondary'
              className='px-8! py-3!'
            />
            <h1 className='text-4xl text-center font-bold leading-11'>
              How the Full-Arch{' '}
              <span className='text-primary'>Growth Engine</span> Works
            </h1>
            <p>Four pillars. One outcome: qualified patients who say yes.</p>
          </article>
        </div>
        <div className='mt-14 grid md:grid-cols-2 grid-cols-1 gap-5'>
          {growth.map((item, index) => (
            <GrowthCard key={index} item={item} num={index + 1} />
          ))}
        </div>
        <div className='flex items-center justify-center mt-14'>
          <LiquidButton>Book a Demo</LiquidButton>
        </div>
      </div>
    </div>
  );
});

export default Growth;
