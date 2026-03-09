import { memo } from 'react';
import Content from './content';
import Photo from './photo';

const Targeting = memo(function Targeting() {
  return (
    <div
      className='container landing-shell mx-auto flex flex-wrap items-center justify-center 2xl:gap-x-20 gap-x-10 gap-y-10 lg:py-24 md:py-16 py-10 overflow-hidden'
      data-section='targeting'
    >
      <Content />
      <Photo />
    </div>
  );
});

export default Targeting;
