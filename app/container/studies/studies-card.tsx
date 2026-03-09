import { IStudies } from '@/app/constants';
import Image from 'next/image';

export default function StudiesCard(item: IStudies) {
  return (
    <div
      className='relative isolate w-full max-w-[380px] h-[420px] overflow-hidden rounded-[28px] border-white/10 border-2 shadow-[0_25px_60px_rgba(1,10,28,0.55)]'
      style={{
        backgroundImage: item.background ? `url(${item.background})` : 'none',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='absolute inset-0 bg-black/30' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/20' />
      <div className='absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(3,195,249,0.18),transparent_70%)]' />
      <div className='relative z-10 flex h-full flex-col justify-between p-6 md:p-7'>
        <div>
          <Image
            draggable={false}
            src={item.logo}
            alt={item.title}
            width={230}
            height={56}
            loading='lazy'
            className='w-full max-w-[220px] h-auto'
          />
        </div>
        <div className='space-y-4'>
          <article className='my-6'>
            <p className='text-primary md:text-base text-sm font-bold uppercase tracking-[0.2em]'>
              {item.subtitle}
            </p>
            <h3 className='text-white text-2xl font-bold leading-snug'>
              {item.title}
            </h3>
          </article>
          <div className='bg-border/30 w-full h-[1px]' />
          <div className='flex items-baseline gap-2 pb-4'>
            <span className='text-white md:text-3xl text-2xl font-bold'>
              {item.badge}
            </span>
            <span className='text-primary md:text-base text-sm font-semibold uppercase tracking-[0.3em]'>
              ROAS
            </span>
          </div>
          <button
            type='button'
            className='w-full rounded-full border border-white/50 bg-white/5 md:px-6 py-2 px-2  md:text-lg text-sm font-semibold text-white backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]'
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}
