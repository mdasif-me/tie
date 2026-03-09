import { LandingAnimations } from './animations';
import {
  About,
  Faq,
  Footer,
  Growth,
  Header,
  Hero,
  Leadership,
  Newsletter,
  Specialized,
  Studies,
  Targeting,
} from './container';

export default function Home() {
  return (
    <>
      <LandingAnimations />
      <div className='pb-24'>
        <Header />
        <Hero />
        <About />
        <Growth />
        <Targeting />
        <Studies />
        <Leadership />
        <Specialized />
        <Faq />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}
