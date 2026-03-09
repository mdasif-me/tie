'use client';

import { IFaqItem } from '@/app/constants';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { memo, useState } from 'react';

const FaqAccordion = memo(function FaqAccordion({
  items,
}: Readonly<{
  items: IFaqItem[];
}>) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className='w-full' data-animate='faq-accordion'>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <article
            key={item.question}
            className='border-b border-black/10 py-4 first:pt-0'
            data-animate='faq-item'
          >
            <button
              type='button'
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className='flex w-full items-start justify-between gap-4 text-left cursor-pointer'
            >
              <span className='text-secondary lg:text-[2rem] md:text-[1.55rem] text-[1.2rem] font-semibold leading-tight'>
                {item.question}
              </span>
              <ChevronDownIcon
                className={`mt-1 size-5 shrink-0 transition-transform duration-300 ease-out ${
                  isOpen
                    ? 'rotate-180 text-[#7b3ff3]'
                    : 'rotate-0 text-black/60'
                }`}
              />
            </button>
            <div
              id={panelId}
              role='region'
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100 mt-3'
                  : 'grid-rows-[0fr] opacity-0 mt-0'
              }`}
            >
              <p className='min-h-0 max-w-4xl pr-2 md:pr-7 text-sm md:text-base leading-6 text-black/70'>
                {item.answer}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
});

export default FaqAccordion;
