import { memo } from 'react';
import Content from './content';
import Photo from './photo';

const Targeting = memo(function Targeting() {
  return (
    <div className='container mx-auto lg:py-24 md:py-16 py-10 px-4 flex flex-wrap-reverse items-center lg:gap-24 md:gap-16 gap-10'>
      <Content />
      <Photo />
    </div>
  );
});

export default Targeting;
