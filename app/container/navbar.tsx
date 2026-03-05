import Link from 'next/link';
import { Button, Logo, NavLink } from '../components';
import { navItems } from '../constants';

export default function Navbar() {
  return (
    <nav className='w-full flex items-center justify-between container mx-auto px-4 py-8'>
      <Link href='/'>
        <Logo />
      </Link>
      <div className='lg:flex hidden items-center gap-6'>
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className='font-bold text-base text-white menu__link'
            activeClassName='menu__link__active'
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <Button className='sm:block hidden'>Free Analysis</Button>
    </nav>
  );
}
