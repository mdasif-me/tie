import Navbar from './navbar';

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      }}
    >
      <Navbar />
    </div>
  );
}
