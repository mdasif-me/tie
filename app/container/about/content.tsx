import { Badge } from '@/app/components';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';

const Content = memo(function Content() {
  return (
    <div className='lg:space-y-5 md:space-y-3 space-y-2 max-w-2xl'>
      <Badge
        className='md:font-bold! text-sm! py-2! md:px-8! uppercase!'
        text='- You’re clinically ready to scale'
        varient='primary'
      />
      <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold lg:leading-12'>
        For Dentists Who Know the Dentistry Isn’t the Problem
      </h1>
      <p className='lg:text-lg md:text-base text-sm font-medium leading-6'>
        You’ve done the training. You can place the implants. If a patient says
        yes, you’re ready to go — <span className='font-bold'>tomorrow</span>
      </p>
      <h4 className='lg:text-2xl md:text-xl text-lg font-bold'>But still:</h4>
      <ul className='lg:text-lg md:text-base text-sm font-medium leading-6'>
        <li>
          <CheckCircleIcon className='inline-block w-6 h-6 mr-2 text-primary' />
          The leads aren’t qualified
        </li>
        <li>
          <CheckCircleIcon className='inline-block w-6 h-6 mr-2 text-primary' />
          Patients disappear after booking
        </li>
        <li>
          <CheckCircleIcon className='inline-block w-6 h-6 mr-2 text-primary' />
          Your team struggles to close $40–60K cases
        </li>
        <li>
          <CheckCircleIcon className='inline-block w-6 h-6 mr-2 text-primary' />
          You’re busy — but growth feels fragile
        </li>
      </ul>
      <article>
        <p>You’re clinically ready to scale.</p>
        <p className='font-bold'>
          Your practice just isn’t set up to support it.
        </p>
      </article>
    </div>
  );
});

export default Content;
