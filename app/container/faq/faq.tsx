import { Badge } from '@/app/components';
import { faqItems } from '@/app/constants';
import { memo } from 'react';
import FaqAccordion from './faq-accordion';

const Faq = memo(function Faq() {
  return (
    <section data-section='faq'>
      <div className='container landing-shell mx-auto lg:py-24 md:py-16 py-12'>
        <div className='grid items-start gap-10 lg:gap-16 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]'>
          <article className='space-y-5 max-w-md' data-animate='faq-intro'>
            <Badge
              text='- FAQ'
              varient='primary'
              className='uppercase! md:px-5! py-2! text-xs! font-bold!'
            />
            <h2 className='text-secondary lg:text-5xl md:text-4xl text-3xl font-bold leading-tight'>
              Frequently Asked Questions
            </h2>
            <p className='text-black/70 lg:text-base text-sm leading-7 font-medium'>
              Clear answers before you book. These are the questions most
              implant-focused practices ask before partnering with our team. If
              your question is not listed, we will walk you through it in a
              strategy call.
            </p>
            <button
              type='button'
              className='mt-2 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-bold text-white transition-colors hover:bg-info'
              data-animate='cta'
              data-hover='glow'
            >
              Book a Demo
            </button>
          </article>
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
});

export default Faq;
