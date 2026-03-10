import { Badge } from '@/app/components';
import { studies } from '@/app/constants';
import { memo } from 'react';
import StudiesCard from './studies-card';

const Studies = memo(function Studies() {
  return (
    <div id='studies' className='bg-secondary' data-section='studies'>
      <div className='container landing-shell mx-auto 2xl:py-20 md:py-14 py-10'>
        <div className='flex justify-center items-center'>
          <article
            className='text-white text-center space-y-4'
            data-pin='studies-intro'
          >
            <div data-animate='heading'>
              <Badge
                text='- BASE STUDIES'
                varient='secondary'
                className='md:px-8! py-3! uppercase!'
              />
            </div>
            <h1
              className='lg:text-4xl md:text-3xl text-2xl text-center font-bold lg:leading-11'
              data-animate='heading'
            >
              <span className='text-primary'>Proven</span> ROl in Every
              Market.{' '}
            </h1>
            <p className='lg:text-lg md:text-base text-sm' data-animate='copy'>
              Different cities. Different practices. Same system. Same
              outcome.{' '}
            </p>
          </article>
        </div>
        <div
          className='mt-14 flex flex-wrap gap-10 justify-center'
          data-pin-track='studies-track'
        >
          {studies.map((item) => (
            <StudiesCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Studies;
