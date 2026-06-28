import React from 'react';
import { ExternalLink } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Icons & Logos                                                              */
/* ──────────────────────────────────────────────────────────────────────────── */

const ArrowCircleIcon = ({ className = '' }: { className?: string }) => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' className={className}>
    <path
      d='M8 16L16 8M16 8H10M16 8V14'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='12' cy='12' r='11' stroke='currentColor' strokeWidth='1.5' />
  </svg>
);

const StarIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' />
  </svg>
);

const Bet365Logo = () => (
  <span className='font-black tracking-tight text-[28px] leading-none'>
    <span style={{ color: '#00B181' }}>bet</span>
    <span style={{ color: '#F9C924' }}>365</span>
  </span>
);

const DraftKingsLogo = () => (
  <div className='flex items-center gap-[6px]'>
    <div className='flex flex-col items-center justify-center'>
      <svg width='18' height='12' viewBox='0 0 16 16' fill='none' className='mb-[-2px]'>
        <path
          d='M2 13L3.5 6L6 9L8 4L10 9L12.5 6L14 13H2Z'
          fill='#FF7411'
          stroke='#FF7411'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <span className='font-black tracking-tight text-[16px] leading-[1]' style={{ color: '#ffffff' }}>
        DRAFTKINGS
      </span>
    </div>
  </div>
);

const FanduelLogo = () => (
  <div className='flex items-center gap-[8px]'>
    <svg width='28' height='28' viewBox='0 0 32 32' fill='none'>
      <path
        d='M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z'
        fill='#0FAFFF'
      />
      <path
        d='M22.5 10H14.5C12.567 10 11 11.567 11 13.5V23.5L16.5 18V14.5C16.5 13.948 16.948 13.5 17.5 13.5H22.5V10Z'
        fill='white'
      />
      <path d='M16.5 22.5L22 17V22.5H16.5Z' fill='white' />
    </svg>
    <div className='flex flex-col justify-center'>
      <span
        className='font-black tracking-tight text-[16px] leading-[1]'
        style={{ color: '#0FAFFF' }}
      >
        FANDUEL
      </span>
      <span
        className='text-[7px] font-black tracking-widest leading-[1] mt-[2px]'
        style={{ color: '#0FAFFF' }}
      >
        SPORTS NETWORK
      </span>
    </div>
  </div>
);

const CaesarsLogo = () => (
  <div className='flex items-center gap-[8px]'>
    <div className='w-[28px] h-[28px] rounded-[4px] border border-[#D4AF37] flex items-center justify-center bg-[#1A1A1A]'>
      <span className='text-[16px]'>🏆</span>
    </div>
    <div className='flex flex-col justify-center'>
      <span
        className='font-bold tracking-tight text-[10px] leading-[1]'
        style={{ color: '#ffffff' }}
      >
        CAESARS
      </span>
      <span
        className='font-black tracking-tight text-[16px] leading-[1] mt-[2px]'
        style={{ color: '#D4AF37' }}
      >
        SPORTSBOOK
      </span>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                       */
/* ──────────────────────────────────────────────────────────────────────────── */

const books = [
  {
    logo: <Bet365Logo />,
    glowColor: '#00B181',
    rating: '4.8',
    preAmount: 'GET UP TO',
    amount: '$150',
    postAmount: 'IN BONUS BETS',
    desc: 'Industry-leading sportsbook with competitive odds, fast payouts, and a top-rated betting experience.',
    features: ['New User Bonus', 'Fast Payouts'],
    highlightButton: true,
  },
  {
    logo: <DraftKingsLogo />,
    glowColor: '#FF7411',
    rating: '4.8',
    preAmount: 'BET $5',
    amount: 'GET $200',
    postAmount: 'IN BONUS BETS',
    desc: 'Popular sportsbook with competitive lines, same-game parlays, and an intuitive experience.',
    features: ['Welcome Bonus', 'Daily Promos'],
    highlightButton: false,
  },
  {
    logo: <FanduelLogo />,
    glowColor: '#0FAFFF',
    rating: '4.8',
    preAmount: 'NO SWEAT',
    amount: 'FIRST BET',
    postAmount: 'UP TO $1000 BACK',
    desc: 'Popular sportsbook with competitive lines, same-game parlays, and an intuitive experience.',
    features: ['New User Bonus', 'Same Game Parlays'],
    highlightButton: false,
  },
  {
    logo: <CaesarsLogo />,
    glowColor: '#D4AF37',
    rating: '4.8',
    preAmount: 'GET UP TO',
    amount: '$150',
    postAmount: 'IN BONUS BETS',
    desc: 'Premium sportsbook featuring Caesars Rewards®, competitive odds, and exclusive promotions.',
    features: ['Caesars Rewards®', 'Exclusive Promos'],
    highlightButton: false,
  },
];

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Component                                                                  */
/* ──────────────────────────────────────────────────────────────────────────── */

function BookCard({ book }: { book: (typeof books)[0] }) {
  return (
    <div className='relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-[24px] overflow-hidden flex flex-col'>
      {/* Top Background Glow */}
      <div
        className='absolute top-0 left-0 right-0 h-[180px] opacity-[0.15] pointer-events-none'
        style={{
          background: `radial-gradient(100% 100% at 50% 0%, ${book.glowColor} 0%, rgba(0,0,0,0) 100%)`,
        }}
      />

      {/* Top Section (Logo + Rating) */}
      <div className='px-[25px] pt-[30px] pb-[25px] flex flex-col gap-[20px] relative z-10 border-b border-[#2A2A2A]'>
        <div className='h-[32px] flex items-center'>{book.logo}</div>
        <div className='flex items-center gap-[8px]'>
          <StarIcon size={20} className='text-[#F9C924]' />
          <span className='text-[16px] text-white'>
            {book.rating} <span className='text-white/80'>User Rating</span>
          </span>
        </div>
      </div>

      {/* Offer Section */}
      <div className='px-[25px] py-[25px] flex flex-col gap-[8px] border-b border-[#2A2A2A] relative z-10'>
        <div className='text-[11px] text-white/60 font-bold uppercase tracking-widest'>
          {book.preAmount}
        </div>
        <div className='flex items-baseline gap-[8px] flex-wrap'>
          <span className='text-[32px] font-black text-white leading-none tracking-tight'>
            {book.amount}
          </span>
          <span className='text-[13px] font-medium text-white/70 uppercase'>{book.postAmount}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className='p-[25px] flex flex-col flex-1 gap-[20px] relative z-10'>
        <p className='text-[15px] text-white/60 leading-relaxed flex-1'>{book.desc}</p>

        {/* Features Pills */}
        <div className='flex flex-wrap gap-[10px]'>
          {book.features.map((f, i) => (
            <div
              key={i}
              className='px-[14px] py-[8px] rounded-[12px] bg-[#222222] border border-[#333333]'
            >
              <span className='text-[14px] text-white/70'>{f}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        {book.highlightButton ? (
          <button
            className='w-full h-[56px] rounded-full flex items-center justify-center gap-[10px] mt-[10px] cursor-pointer hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(249,201,36,0.2)]'
            style={{
              background:
                'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
            }}
          >
            <span className='text-[18px] font-bold text-black'>Get Bonus</span>
            <ArrowCircleIcon className='text-black' />
          </button>
        ) : (
          <button className='w-full h-[56px] rounded-full bg-[#2A2A2A] hover:bg-[#333333] transition-colors border border-white/5 flex items-center justify-center gap-[10px] mt-[10px] cursor-pointer'>
            <span className='text-[18px] font-bold text-white'>Get Bonus</span>
            <ArrowCircleIcon className='text-white' />
          </button>
        )}
      </div>
    </div>
  );
}

export function RecommendedSportsbooks() {
  return (
    <div className='w-full'>
      {/* Header */}
      <div className='flex items-center justify-between mb-[30px] border-b border-[#222] pb-[20px]'>
        <h2 className='text-[30px] font-black uppercase tracking-tight text-white leading-none'>
          RECOMMENDED <span className='italic'>SPORTSBOOKS</span>
        </h2>
        <button className='text-[16px] font-medium text-white hover:text-white/80 transition-colors flex items-center gap-[8px] cursor-pointer'>
          <span>View All</span>
          <div className='w-[24px] h-[24px] rounded-full border border-white/20 flex items-center justify-center'>
            <ExternalLink size={12} className='text-white' />
          </div>
        </button>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[25px]'>
        {books.map((b, i) => (
          <BookCard key={i} book={b} />
        ))}
      </div>
    </div>
  );
}
