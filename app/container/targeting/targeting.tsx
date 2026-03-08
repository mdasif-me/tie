import { memo } from 'react';
import Content from './content';
import Photo from './photo';

const Targeting = memo(function Targeting() {
  return (
    <div className='container mx-auto py-24 px-4 flex items-center'>
      <Content />
      <Photo />
    </div>
  );
});

export default Targeting;
