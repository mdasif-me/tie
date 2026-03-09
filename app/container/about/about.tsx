import Content from './content';
import Gallery from './gallery';

export default function AboutPage() {
  return (
    <div className='lg:py-24 md:py-16 py-10 p-4 md:gap-20 gap-4 container mx-auto flex flex-wrap items-center overflow-hidden'>
      <Gallery />
      <Content />
    </div>
  );
}
