import React from 'react';
import { ChevronRight } from 'lucide-react';

/* Inline sportsbook brand marks */
const Bet365Mark = () => (
  <span className='font-extrabold tracking-tight text-[13px]' style={{ color: '#6ACC53' }}>
    bet<span style={{ color: '#ffffff' }}>365</span>
  </span>
);

const FanduelMark = () => (
  <div className='flex items-center gap-[3px]'>
    <span className='w-[10px] h-[10px] rounded-full bg-[#0FAFFF] flex items-center justify-center shrink-0' />
    <span className='font-black tracking-tight text-[11px]' style={{ color: '#0FAFFF' }}>
      FANDUEL
    </span>
  </div>
);

const DraftKingsMark = () => (
  <span className='font-black tracking-tight text-[11px]' style={{ color: '#FF7411' }}>
    DRAFTKINGS
  </span>
);

const CaesarsMark = () => (
  <span className='font-black tracking-tight text-[10px]' style={{ color: '#D4AF37' }}>
    CAESARS SPORTSBOOK
  </span>
);

const books = [
  {
    Mark: Bet365Mark,
    promo: 'Get $150 in Bonus Bets',
    detail: 'Bet $5, Get $150',
  },
  {
    Mark: FanduelMark,
    promo: 'Bet $5, Get $200',
    detail: 'in Bonus Bets',
  },
  {
    Mark: DraftKingsMark,
    promo: 'No Sweat First Bet',
    detail: 'Up to $1000',
  },
  {
    Mark: CaesarsMark,
    promo: 'Double Your First Wager',
    detail: 'Up to $500',
  },
];

export function TopSportsbooks() {
  return (
    <div className='w-full flex flex-col gap-[15px]'>
      {/* header */}
      <div className='flex items-center justify-between px-[0px]'>
        <h2 className='text-[18px] font-semibold text-white leading-[28px]'>
          Top Rated Sportsbooks
        </h2>
        <button className='flex items-center gap-[5px] text-[14px] font-medium text-white/70 cursor-pointer'>
          <span>View All</span>
          <span className='inline-flex items-center justify-center w-[20px] h-[20px] border border-white/30 rounded-full'>
            <ChevronRight size={12} />
          </span>
        </button>
      </div>

      {/* rows */}
      <div className='flex flex-col gap-[10px]'>
        {books.map(({ Mark, promo, detail }, i) => (
          <div
            key={i}
            className='flex items-center justify-between px-[15px] py-[12px] rounded-[16px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]'
          >
            {/* logo + promo */}
            <div className='flex flex-col gap-[4px]'>
              <Mark />
              <p className='text-[12px] font-normal text-white/70 leading-[18px]'>{promo}</p>
              <p className='text-[12px] font-normal text-white/50 leading-[18px]'>{detail}</p>
            </div>

            {/* Get Bonus button */}
            <button
              className='flex items-center justify-center px-[12px] py-[6px] rounded-[24px] cursor-pointer shrink-0'
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
              }}
            >
              <span className='text-[12px] font-medium text-black whitespace-nowrap'>
                Get Bonus
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
