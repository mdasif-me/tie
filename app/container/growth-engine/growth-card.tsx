import { Badge } from '@/app/components';
import { IGrowth } from '@/app/constants';

export default function GrowthCard({
  item,
  num,
}: {
  item: IGrowth;
  num: number;
}) {
  return (
    <div className='bg-white px-6 py-7 rounded-3xl'>
      <article className='flex flex-wrap gap-4 items-center'>
        <span className='bg-primary text-white font-bold text-xl w-fit rounded-xl px-4 py-3'>
          {num.toString().padStart(2, '0')}
        </span>
        <p className='text-secondary text-2xl font-bold'>{item.title}</p>
      </article>
      <article className='space-y-4'>
        {item.description && <p className='pt-3 text-lg'>{item.description}</p>}
        {item.badge && (
          <p className='p-3 text-sm font-bold rounded-lg bg-linear-to-r from-[#9c9c9cbb] to-[#AEAEAE00]'>
            {item.badge}
          </p>
        )}
        {item.tcontent && <p>{item.tcontent}</p>}
        <div className='flex flex-wrap items-center gap-1'>
          {item.tags &&
            item.tags.map((tag, index) => (
              <div
                key={index}
                className='flex items-center bg-[#F4FAFF] w-fit p-1 rounded-lg'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                >
                  <path
                    d='M7.86182 1.02246C6.44519 1.02246 5.06038 1.44262 3.88249 2.22981C2.70461 3.01699 1.78656 4.13585 1.24444 5.44489C0.702322 6.75394 0.560479 8.19437 0.836849 9.58404C1.11322 10.9737 1.79539 12.2502 2.7971 13.2521C3.79881 14.254 5.07506 14.9363 6.46447 15.2127C7.85388 15.4892 9.29404 15.3473 10.6028 14.8051C11.9116 14.2628 13.0303 13.3446 13.8173 12.1665C14.6043 10.9884 15.0244 9.60332 15.0244 8.18642C15.0244 6.28642 14.2698 4.46424 12.9265 3.12074C11.5833 1.77723 9.76146 1.02246 7.86182 1.02246ZM6.83859 11.0469L4.28052 8.48833L5.09399 7.67471L6.83859 9.41965L10.6297 5.62786L11.4462 6.43944L6.83859 11.0469Z'
                    fill='url(#paint0_linear_1_614)'
                  />
                  <path
                    d='M6.83932 11.0475L4.28125 8.48891L5.09523 7.67478L6.83932 9.4192L10.6304 5.62793L11.4464 6.43899L6.83932 11.0475Z'
                    fill='white'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_1_614'
                      x1='15.0244'
                      y1='1.02246'
                      x2='0.696497'
                      y2='15.3477'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#03C3F9' />
                      <stop offset='1' stopColor='#0F50BD' />
                    </linearGradient>
                  </defs>
                </svg>
                <Badge
                  text={tag}
                  varient='default'
                  className='font-bold! rounded-none! bg-transparent! text-black! text-xs! py-0! px-0!'
                />
              </div>
            ))}
        </div>
        {item.fcontent && <p>{item.fcontent}</p>}
      </article>
    </div>
  );
}
