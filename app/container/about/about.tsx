import Content from './content';
import Gallery from './gallery';

export default function AboutPage() {
  return (
    <div className='py-24 p-4 gap-20 container mx-auto flex flex-wrap items-center overflow-hidden'>
      <Gallery />
      <Content />
    </div>
  );
}
