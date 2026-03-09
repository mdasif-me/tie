import { memo } from 'react';
import Content from './content';
import Photo from './photo';

const Leadership = memo(function Leadership() {
  return (
    <div
      className='container mx-auto flex flex-wrap items-center justify-center gap-x-20 gap-y-10 lg:py-24 md:py-16 py-10 px-4 overflow-hidden'
      data-section='leadership'
    >
      <Photo />
      <Content />
    </div>
  );
});

export default Leadership;
