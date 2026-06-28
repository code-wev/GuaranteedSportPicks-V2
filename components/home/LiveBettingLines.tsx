import React from 'react';
import { ExternalLink } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Icons & Logos                                                              */
/* ──────────────────────────────────────────────────────────────────────────── */

const HelmetIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
    <path
      d='M12 2C6.48 2 2 6.48 2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12C22 6.48 17.52 2 12 2ZM20 20H4V12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12V20ZM7 15H17V17H7V15ZM9 11H15V13H9V11Z'
      fill='currentColor'
    />
  </svg>
);

const CrownIcon = () => (
  <svg width='14' height='14' viewBox='0 0 16 16' fill='none'>
    <path
      d='M2 13L3.5 6L6 9L8 4L10 9L12.5 6L14 13H2Z'
      fill='#F9C924'
      stroke='#F9C924'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const StarIcon = ({ size = 10, className = '' }) => (
  <svg width={size} height={size} viewBox='0 0 16 16' fill='currentColor' className={className}>
    <path d='M8 1L10.163 5.382L15 6.09L11.5 9.502L12.326 14.318L8 12.045L3.674 14.318L4.5 9.502L1 6.09L5.837 5.382L8 1Z' />
  </svg>
);

/* Inline sportsbook brand marks matching the image styling closely */
const Bet365Mark = () => (
  <div className='flex items-start'>
    <span className='font-extrabold tracking-tight text-[15px]' style={{ color: '#00B181' }}>
      bet<span style={{ color: '#ffffff' }}>365</span>
    </span>
    <CrownIcon />
  </div>
);

const DraftKingsMark = () => (
  <div className='flex items-center gap-[4px]'>
    <div className='w-[14px] h-[14px] relative'>
      <span className='absolute inset-0 text-[#E5B55C] font-black text-[12px] leading-none'>D</span>
      <CrownIcon />
    </div>
    <span className='font-black tracking-tight text-[12px]' style={{ color: '#ffffff' }}>
      DRAFTKINGS
    </span>
  </div>
);

const FanduelMark = () => (
  <div className='flex items-center gap-[4px]'>
    <span className='w-[14px] h-[14px] rounded-full bg-[#0FAFFF] flex items-center justify-center shrink-0'>
      <span className='text-white text-[8px] font-bold italic'>F</span>
    </span>
    <span className='font-black tracking-tight text-[12px]' style={{ color: '#0FAFFF' }}>
      FANDUEL
    </span>
  </div>
);

const CaesarsMark = () => (
  <div className='flex items-center gap-[4px]'>
    <span className='w-[14px] h-[14px] rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-[8px] font-black'>
      C
    </span>
    <span className='font-black tracking-tight text-[11px]' style={{ color: '#D4AF37' }}>
      CAESARS
    </span>
  </div>
);

const PointsBetMark = () => (
  <span className='font-black tracking-tighter text-[13px] italic' style={{ color: '#D32F2F' }}>
    POINTS<span style={{ color: '#ffffff' }}>BET</span>
  </span>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                       */
/* ──────────────────────────────────────────────────────────────────────────── */

const tabs = ['NFL', 'NBA', 'MLB', 'NHL', 'NCAAF'];

const matches = [
  {
    t1: { name: 'BUF', record: '5-1', bg: 'bg-[#0F3F73]' }, // Dark Blue
    t2: { name: 'NYJ', record: '2-4', bg: 'bg-[#0F5535]' }, // Dark Green
    time: ['Today', '8:20 PM ET'],
    odds: [
      { book: 'bet365', v1: '+3.5', v2: '+4.5', best: true },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
    ],
  },
  {
    t1: { name: 'KCC', record: '5-1', bg: 'bg-[#42E2B8]' }, // Mint Green
    t2: { name: 'DB', record: '2-4', bg: 'bg-[#38B6FF]' }, // Light blue
    time: ['Today', '4:05 PM ET'],
    odds: [
      { book: 'bet365', v1: '+3.5', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: true },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
    ],
  },
  {
    t1: { name: 'DC', record: '5-1', bg: 'bg-[#1D70B8]' }, // Blue
    t2: { name: 'NYG', record: '2-4', bg: 'bg-[#228B22]' }, // Green
    time: ['Today', '1:00 PM ET'],
    odds: [
      { book: 'bet365', v1: '-105', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: true },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
    ],
  },
  {
    t1: { name: 'GBP', record: '5-1', bg: 'bg-[#1D70B8]' }, // Blue
    t2: { name: 'CB', record: '2-4', bg: 'bg-[#228B22]' }, // Green
    time: ['Today', '7:20 PM ET'],
    odds: [
      { book: 'bet365', v1: '-105', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: true },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
    ],
  },
  {
    t1: { name: 'GBP', record: '5-1', bg: 'bg-[#1D70B8]' }, // Blue
    t2: { name: 'CB', record: '2-4', bg: 'bg-[#228B22]' }, // Green
    time: ['Today', '7:20 PM ET'],
    odds: [
      { book: 'bet365', v1: '-105', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: true },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Component                                                                  */
/* ──────────────────────────────────────────────────────────────────────────── */

export function LiveBettingLines() {
  const COL_MATCHUP = 'w-[280px] px-[20px] shrink-0';
  const COL_TIME = 'w-[120px] px-[15px] shrink-0';
  const COL_BOOK = 'w-[140px] px-[10px] flex items-center justify-center relative shrink-0 h-full';

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='flex items-center justify-between mb-[20px]'>
        <h2 className='text-[30px] font-black uppercase tracking-tight text-white leading-none'>
          LIVE <span className='italic'>BETTING LINES</span>
        </h2>
        <button className='text-[16px] font-medium text-white hover:text-white/80 transition-colors flex items-center gap-[8px] cursor-pointer'>
          <span>View All</span>
          <div className='w-[24px] h-[24px] rounded-full border border-white/20 flex items-center justify-center'>
            <ExternalLink size={12} className='text-white' />
          </div>
        </button>
      </div>

      {/* Main Container */}
      <div className='bg-[#111111] border border-[#222] rounded-[24px] flex flex-col pt-[15px] pb-[10px]'>
        {/* Tabs Row */}
        <div className='flex items-center justify-between px-[20px] pb-[15px]'>
          <div className='flex items-center gap-[10px]'>
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`text-[13px] font-bold uppercase px-[20px] py-[8px] rounded-full transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-[#333333] text-white'
                    : 'text-white/60 hover:text-white hover:bg-[#222]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className='flex items-center gap-[6px] text-[#2ecc71] text-[13px] font-medium'>
            <span className='w-[8px] h-[8px] rounded-full bg-[#2ecc71] animate-pulse shadow-[0_0_8px_#2ecc71]' />
            Live odds
          </div>
        </div>

        {/* Table wrapper for horizontal scroll */}
        <div className='w-full overflow-x-auto'>
          <div className='min-w-max flex flex-col'>
            {/* Table Header Row */}
            <div className='flex items-stretch border-t border-b border-[#222] h-[70px] bg-[#141414]'>
              <div className={`${COL_MATCHUP} flex items-center bg-[#333333]`}>
                <span className='text-[14px] font-bold text-white uppercase tracking-wider'>
                  Matchup
                </span>
              </div>
              <div className={`${COL_TIME} flex items-center`}>
                <span className='text-[14px] font-bold text-white uppercase tracking-wider'>
                  Time (ET)
                </span>
              </div>
              <div className={`${COL_BOOK} bg-[#2F3E29] rounded-t-[16px] border-x border-[#2F3E29]`}>
                <Bet365Mark />
              </div>
              <div className={`${COL_BOOK} border-l border-[#222]`}>
                <DraftKingsMark />
              </div>
              <div className={`${COL_BOOK} border-l border-[#222]`}>
                <FanduelMark />
              </div>
              <div className={`${COL_BOOK} border-l border-[#222]`}>
                <CaesarsMark />
              </div>
              <div className={`${COL_BOOK} border-l border-[#222]`}>
                <PointsBetMark />
              </div>
            </div>

            {/* Table Rows */}
            {matches.map((match, i) => {
              const isLastRow = i === matches.length - 1;
              return (
                <div
                  key={i}
                  className={`flex items-stretch h-[95px] bg-[#1A1A1A] hover:bg-white/[0.02] transition-colors ${
                    isLastRow ? '' : 'border-b border-[#222]'
                  }`}
                >
                  {/* Matchup */}
                  <div className={`${COL_MATCHUP} flex items-center justify-between bg-[#242424]`}>
                    <div className='flex items-center gap-[10px]'>
                      <div
                        className={`w-[40px] h-[40px] rounded-full ${match.t1.bg} text-white flex items-center justify-center`}
                      >
                        <HelmetIcon />
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[16px] font-bold text-white leading-tight'>
                          {match.t1.name}
                        </span>
                        <span className='text-[13px] font-normal text-white/50'>
                          {match.t1.record}
                        </span>
                      </div>
                    </div>

                    <span className='text-[12px] font-bold italic text-white/30 px-[10px]'>VS</span>

                    <div className='flex items-center gap-[10px]'>
                      <div className='flex flex-col items-end'>
                        <span className='text-[16px] font-bold text-white leading-tight'>
                          {match.t2.name}
                        </span>
                        <span className='text-[13px] font-normal text-white/50'>
                          {match.t2.record}
                        </span>
                      </div>
                      <div
                        className={`w-[40px] h-[40px] rounded-full ${match.t2.bg} text-white flex items-center justify-center`}
                      >
                        <HelmetIcon />
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className={`${COL_TIME} flex flex-col justify-center`}>
                    <span className='text-[14px] font-medium text-white'>{match.time[0]}</span>
                    <span className='text-[14px] font-normal text-white/60'>{match.time[1]}</span>
                  </div>

                  {/* Odds Columns */}
                  {match.odds.map((odd, colIndex) => {
                    const isBet365 = colIndex === 0;
                    return (
                      <div
                        key={colIndex}
                        className={`${COL_BOOK} ${
                          isBet365
                            ? `bg-[#2F3E29] border-x border-[#2F3E29] ${
                                isLastRow ? 'rounded-b-[16px]' : ''
                              }`
                            : 'border-l border-[#222]'
                        }`}
                      >
                        <div className='flex flex-col items-center gap-[6px] relative w-full'>
                          {odd.best && (
                            <div className='absolute -top-[28px] flex items-center gap-[4px] whitespace-nowrap z-10 bg-transparent'>
                              <StarIcon className='text-[#2ecc71]' size={12} />
                              <span className='text-[#2ecc71] text-[11px] font-bold'>
                                Best Line
                              </span>
                            </div>
                          )}
                          <div className='flex items-center gap-[8px] w-full justify-center mt-[4px]'>
                            <button className='w-[54px] h-[40px] rounded-full bg-[#333] flex items-center justify-center cursor-pointer hover:bg-[#444] transition-colors shadow-sm'>
                              <span className='text-[14px] font-medium text-white'>{odd.v1}</span>
                            </button>
                            <button className='w-[54px] h-[40px] rounded-full bg-[#333] flex items-center justify-center cursor-pointer hover:bg-[#444] transition-colors shadow-sm'>
                              <span className='text-[14px] font-medium text-white'>{odd.v2}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
