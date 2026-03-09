import Image from 'next/image';
import { IStatesCard } from '../constants';

export default function StatesCard({ name, value, icon }: IStatesCard) {
  return (
    <div
      className='bg-white/10 rounded-xl sm:px-3 px-2 sm:py-4 py-1 text-white flex items-center gap-4 flex-wrap sm:w-44 w-32'
      data-animate='hero-state-card'
      data-hover='lift'
    >
      <div className='bg-primary size-12 p-2 sm:flex hidden justify-center items-center rounded-full'>
        <Image
          src={icon}
          alt={`${name}-icon`}
          className='shrink-0 size-10'
          width={40}
          height={40}
        />
      </div>
      <article>
        <p className='text-xs font-normal leading-6'>{name}</p>
        <h4 className='text-xl font-bold leading-8'>{value}</h4>
      </article>
    </div>
  );
}
