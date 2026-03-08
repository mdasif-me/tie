import { Badge, Button } from '@/app/components';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';

const Content = memo(function Content() {
  return (
    <div>
      <div className='space-y-5 max-w-lg'>
        <Badge
          className='font-bold! text-sm! py-2! px-8!'
          text='- You’re clinically ready to scale'
          varient='primary'
        />
        <h1 className='text-4xl font-bold leading-12'>Who We’re Built For </h1>
        <p className='text-lg font-medium leading-6'>
          You’ve invested in your practice and are ready to grow. You’ve hired
          more staff, added new services, and maybe even expanded your office.
          You’re busy — but growth feels fragile.
        </p>
        <ul className='space-y-2'>
          <li className='text-lg flex items-start font-bold'>
            <CheckCircleIcon className='inline-block shrink-0 border rounded-full p-2 border-gray-200 w-10 h-10 mr-2 text-primary' />
            <p>
              GP’s ready to do less “drill & fill” and finally scale
              All-on-X dental implants{' '}
            </p>
          </li>
          <li className='text-lg flex items-start font-bold'>
            <CheckCircleIcon className='inline-block shrink-0 border rounded-full p-2 border-gray-200 w-10 h-10 mr-2 text-primary' />
            <p>
              Implant centers doing 30+ arches who are tired of inefficient,
              outdated marketing
            </p>
          </li>
          <li className='text-lg flex items-start font-bold'>
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
