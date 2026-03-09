import { Badge } from '../components';

export default function HeroCard() {
  return (
    <div
      className='p-4 w-60 bg-white rounded-2xl shadow-2xl absolute 2xl:right-40 right-20 bottom-40 xl:block hidden'
      data-animate='hero-float'
      data-hover='lift'
    >
      <div className='flex items-center justify-between'>
        <h6 className='text-secondary font-bold text-xs'>IMPLANT PIPELINE</h6>
        <Badge text='+42%' varient='primary' className='font-extrabold!' />
      </div>
      <article className='flex items-center justify-between gap-1 mt-2.5'>
        <div className='text-xs flex items-center font-medium gap-1'>
          {' '}
          <div className='size-2 bg-danger rounded-full' /> <p>Consultations</p>
        </div>
        <p className='text-xs font-extrabold'>84 booked</p>
      </article>
      <article className='flex items-center justify-between gap-1 mt-2.5'>
        <div className='text-xs flex items-center font-medium gap-1'>
          {' '}
          <div className='size-2 bg-success rounded-full' /> <p>Case Value</p>
        </div>
        <p className='text-xs font-extrabold'>$2.1M</p>
      </article>
    </div>
  );
}
