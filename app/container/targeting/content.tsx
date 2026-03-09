import { Badge, Button } from '@/app/components';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';

const Content = memo(function Content() {
  return (
    <div>
      <div className='lg:space-y-5 md:space-y-3 space-y-2 max-w-xl'>
        <Badge
          className='md:font-bold! text-sm! py-2! md:px-8! uppercase!'
          text='- Audience targeting'
          varient='primary'
        />
        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold md:leading-12'>
          Who We’re Built For{' '}
        </h1>
        <p className='lg:text-lg md:text-base text-sm font-medium md:leading-6'>
          We know how to build the infrastructure that turns clinical skill into
          predictable full-arch revenue.
        </p>
        <ul className='md:space-y-4 space-y-2 py-4'>
          <li className='md:text-lg sm:text-sm text-xs flex items-center md:font-bold font-medium'>
            <CheckCircleIcon className='inline-block shrink-0 border rounded-full p-2 border-gray-200 w-10 h-10 mr-2 text-primary' />
            <p>
              GP’s ready to do less “drill & fill” and finally scale
              All-on-X dental implants{' '}
            </p>
          </li>
          <li className='md:text-lg sm:text-sm text-xs flex items-center md:font-bold font-medium'>
            <CheckCircleIcon className='inline-block shrink-0 border rounded-full p-2 border-gray-200 w-10 h-10 mr-2 text-primary' />
            <p>
              Implant centers doing 30+ arches who are tired of inefficient,
              outdated marketing
            </p>
          </li>
          <li className='md:text-lg sm:text-sm text-xs flex items-center md:font-bold font-medium'>
            <CheckCircleIcon className='inline-block shrink-0 border rounded-full p-2 border-gray-200 w-10 h-10 mr-2 text-primary' />
            <p>
              Specialists who want direct-to-consumer All-on-X demand — without
              racing to the bottom on price
            </p>
          </li>
        </ul>
        <Button>Book a Demo</Button>
      </div>
    </div>
  );
});

export default Content;
