import { Badge } from '@/app/components';
import { specialized } from '@/app/constants';
import { memo } from 'react';
import SpecializedCard from './specialized-card';

const Specialized = memo(function Specialized() {
  return (
    <div className='bg-secondary' data-section='specialized'>
      <div className='container mx-auto lg:py-24 md:py-16 py-12 px-4'>
        <div className='flex justify-center items-center'>
          <article className='text-white text-center space-y-4 max-w-3xl'>
            <div data-animate='heading'>
              <Badge
                text='- OUR SPECIALIZED ENGINE'
                varient='secondary'
                className='md:px-8! py-2.5! uppercase!'
              />
            </div>
            <h1
              className='lg:text-5xl md:text-4xl text-3xl text-center font-bold lg:leading-14'
              data-animate='heading'
            >
              The Systems Powering the Engine
            </h1>
            <p
              className='lg:text-lg md:text-base text-sm text-white/75'
              data-animate='copy'
            >
              Everything we do is built to support one outcome: more qualified
              consults, higher case acceptance, and predictable full-arch
              revenue.
            </p>
          </article>
        </div>
        <div className='mt-14 grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3'>
          {specialized.map((item) => (
            <SpecializedCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Specialized;
