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
      <Footer />
    </>
  );
}
