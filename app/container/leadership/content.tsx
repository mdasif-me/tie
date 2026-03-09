import { Badge, Button } from '@/app/components';
import { memo } from 'react';

const Content = memo(function Content() {
  return (
    <div>
      <div className='lg:space-y-5 md:space-y-3 space-y-2 max-w-xl'>
        <Badge
          className='md:font-bold! text-sm! py-2! md:px-8! uppercase!'
          text='- Leadership Behind THE IMPLANT ENGINE'
          varient='primary'
        />
        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>
          Meet Chelsea Morrisey
        </h1>
        <p className='lg:text-lg md:text-base text-sm font-medium lg:-mt-4 -mt-2'>
          (Founder & CEO){' '}
        </p>
        <ul className='md:space-y-4 space-y-2 py-4'>
          <li className='md:text-lg sm:text-sm text-xs'>
            Chelsea founded The Implant Engine after spending over a decade
            exclusively in dental marketing and seeing where most implant
            systems break.
          </li>
          <li className='md:text-lg sm:text-sm text-xs'>
            She’s helping scale{' '}
            <span className='font-medium'>140+ practices nationwide</span> ,
            generating{' '}
            <span className='font-medium'>
              tens of millions in full-arch revenue
            </span>
            , by building infrastructure — not just ads.
          </li>
          <li className='md:text-lg sm:text-sm text-xs font-medium'>
            Her focus is simple: turn clinical skill into predictable,
            profitable All-on-X growth.
          </li>
        </ul>
        <Button btn_className='bg-secondary!' is_arrow={false}>
          View Full 70 person Team
        </Button>
      </div>
    </div>
  );
});

export default Content;
