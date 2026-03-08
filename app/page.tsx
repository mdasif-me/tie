import { About, Growth, Header, Hero } from './container';

export default function Home() {
  return (
    <div className='pb-24'>
      <Header />
      <Hero />
      <About />
      <Growth />
    </div>
  );
}
