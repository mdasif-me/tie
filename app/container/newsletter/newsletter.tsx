import { Badge } from '@/app/components';
import { memo } from 'react';

const Newsletter = memo(function Newsletter() {
  return (
    <section>
      <div className='container mx-auto lg:py-16 md:py-12 py-10 px-4 sm:px-6'>
        <div className='relative overflow-hidden rounded-2xl md:rounded-3xl md:bg-transparent bg-secondary'>
          <div
            className='absolute inset-0 hidden md:block bg-center bg-contain bg-no-repeat min-h-[360px] h-full'
            style={{
              backgroundImage: "url('/newslatter.svg')",
            }}
          />
          <div className='relative z-10 flex flex-col items-center text-center lg:px-16 md:px-12 px-5 lg:py-14 md:py-12 py-10'>
            <Badge
              text='- OUR NEWSLETTER'
              varient='secondary'
              className='uppercase! bg-white/14! text-white! md:px-7! py-2! text-xs! font-semibold!'
            />
            <h2 className='lg:mt-4 text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold leading-tight'>
              Ready to Implant Your Engine?
            </h2>
            <p className='mt-3 max-w-3xl text-white/90 lg:text-base text-sm leading-6'>
              Every month you wait, patients who should have been yours are
              choosing someone else. Not because they&apos;re better doctors,
              because they built the system.
            </p>

            <form className='mt-7 w-full max-w-[560px] rounded-2xl sm:rounded-full bg-white p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_20px_rgba(3,19,46,0.24)]'>
              <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0'>
                <label htmlFor='newsletter-email' className='sr-only'>
                  Enter your email
                </label>
                <input
                  id='newsletter-email'
                  name='email'
                  type='email'
                  placeholder='Enter Your Email'
                  className='w-full flex-1 bg-transparent px-4 py-2.5 text-sm text-secondary placeholder:text-secondary/55 placeholder:italic outline-none'
                />
                <button
                  type='submit'
                  className='inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-info'
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Newsletter;
