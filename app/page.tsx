import {
  About,
  Growth,
  Header,
  Hero,
  Leadership,
  Specialized,
  Studies,
  Targeting,
} from './container';

export default function Home() {
  return (
    <div className='pb-24'>
      <Header />
      <Hero />
      <About />
      <Growth />
      <Targeting />
      <Studies />
      <Leadership />
      <Specialized />
    </div>
  );
}
