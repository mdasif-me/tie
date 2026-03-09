import { ISpecialized, SpecializedIcon } from '@/app/constants';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  PhoneIcon,
  SparklesIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import { type ComponentType, type SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap: Record<Exclude<SpecializedIcon, 'cta'>, IconComponent> = {
  authority: MegaphoneIcon,
  call: PhoneIcon,
  academy: AcademicCapIcon,
  seo: SparklesIcon,
  website: GlobeAltIcon,
  dashboard: ChartBarSquareIcon,
  smile: UserCircleIcon,
};

export default function SpecializedCard(item: ISpecialized) {
  if (item.icon === 'cta') {
    return (
      <article
        className='relative isolate h-[122px] rounded-[14px] bg-linear-to-br from-[#18c7f8] via-[#0bb8e9] to-[#06a4d6] p-4 text-white overflow-hidden shadow-[0_16px_32px_rgba(0,16,45,0.45)]'
        data-animate='card'
        data-hover='glow'
      >
        <div className='pointer-events-none absolute -bottom-10 -right-8 size-28 rounded-full border border-white/20' />
        <div className='pointer-events-none absolute -bottom-4 -right-3 size-16 rounded-full border border-white/25' />
        <h3 className='max-w-[16ch] md:text-[1.02rem] text-sm leading-5 font-bold'>
          {item.title}
        </h3>
        <p className='mt-6 inline-flex items-center gap-1 text-sm font-bold tracking-[0.08em]'>
          {item.ctaLabel}
          <ArrowRightIcon className='size-4' />
        </p>
      </article>
    );
  }

  const Icon = iconMap[item.icon];

  return (
    <article
      className='h-[122px] rounded-[14px] bg-[#f0f1f3] px-4 py-4 shadow-[0_6px_20px_rgba(0,0,0,0.12)]'
      data-animate='card'
      data-hover='lift'
    >
      <div className='inline-flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-[0_8px_18px_rgba(3,195,249,0.35)]'>
        <Icon className='size-5' />
      </div>
      <h3 className='mt-3 md:text-[1.02rem] text-sm font-semibold leading-5 text-[#121826] line-clamp-2'>
        {item.title}
      </h3>
    </article>
  );
}
