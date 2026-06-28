import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/* Figma image assets served by the local MCP asset server */
const imgArticle1 = 'http://localhost:3845/assets/7b433607ef2d88a50338f81d88924c0e2edc736b.png';
const imgArticle2 = 'http://localhost:3845/assets/707f34a6ddd2e330f14debc27a59a36e7059f03b.png';
const imgArticle3 = 'http://localhost:3845/assets/2a4e41c97cbcdaa0029917beaa513c33a44ae2db.png';

const articles = [
  { img: imgArticle1, title: 'NFL Week 8 Best Bets & Predictions' },
  { img: imgArticle2, title: 'NBA Top Player Props Tonight' },
  { img: imgArticle3, title: 'How We Calculate Our Win Rate' },
];

export function FeaturedArticles() {
  return (
    <div className='w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-[20px] flex flex-col gap-[20px]'>
      {/* header */}
      <div className='flex flex-col gap-[5px]'>
        <h2 className='text-[18px] font-semibold text-white leading-[28px]'>Featured Articles</h2>
        <p className='text-[16px] font-normal text-white/50 leading-[22px]'>
          Latest betting analysis and sportsbook insights.
        </p>
      </div>

      {/* article rows */}
      <div className='flex flex-col gap-[10px]'>
        {articles.map(({ img, title }, i) => (
          <a key={i} href='#' className='flex items-center gap-[15px] w-full cursor-pointer'>
            {/* thumbnail */}
            <div className='w-[100px] h-[100px] rounded-[14px] overflow-hidden shrink-0 bg-white'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={title}
                className='w-full h-full object-cover pointer-events-none'
              />
            </div>

            {/* text */}
            <div className='flex flex-col gap-[5px] flex-1 min-w-0'>
              <p className='text-[16px] font-semibold text-white leading-[26px] line-clamp-2'>
                {title}
              </p>
              <div className='flex items-center gap-[5px]'>
                <span className='text-[14px] font-medium text-[#f9c924] whitespace-nowrap'>
                  Read More
                </span>
                <ArrowUpRight size={16} className='text-[#f9c924] shrink-0' strokeWidth={2} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
