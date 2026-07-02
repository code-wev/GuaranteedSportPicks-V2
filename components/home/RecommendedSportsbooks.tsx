import React from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Icons & Logos                                                              */
/* ──────────────────────────────────────────────────────────────────────────── */

const ArrowCircleIconBlack = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4.93103 4.9303C6.32953 3.53179 8.11133 2.5794 10.0511 2.19355C11.9909 1.8077 14.0015 2.00573 15.8287 2.76259C17.656 3.51945 19.2177 4.80115 20.3165 6.4456C21.4153 8.09006 22.0018 10.0234 22.0018 12.0012C22.0016 13.6645 21.5866 15.3015 20.7943 16.7641C20.002 18.2266 18.8575 19.4684 17.4644 20.3772C16.0713 21.286 14.4735 21.833 12.8158 21.9687C11.158 22.1044 9.49253 21.8246 7.97015 21.1545C7.91108 21.1288 7.85768 21.0917 7.81299 21.0453C7.76831 20.9989 7.73323 20.9441 7.70976 20.8841C7.6863 20.8241 7.67492 20.7601 7.67626 20.6957C7.67761 20.6313 7.69166 20.5678 7.71761 20.5088C7.74356 20.4499 7.7809 20.3966 7.82749 20.3522C7.87407 20.3077 7.92899 20.2728 7.98907 20.2496C8.04916 20.2264 8.11324 20.2153 8.17764 20.2169C8.24203 20.2185 8.30548 20.2328 8.36433 20.259C11.7969 21.77 15.7287 21.0326 18.381 18.3803C21.8984 14.8629 21.8986 9.13971 18.381 5.62217C14.8635 2.10462 9.14031 2.10476 5.62291 5.62217C2.97061 8.27446 2.23316 12.2063 3.74419 15.6389C3.77038 15.6977 3.7847 15.7612 3.78632 15.8256C3.78793 15.89 3.77682 15.954 3.7536 16.0141C3.73039 16.0742 3.69554 16.1291 3.65105 16.1757C3.60656 16.2223 3.55331 16.2596 3.49435 16.2856C3.4354 16.3115 3.37189 16.3256 3.30749 16.3269C3.24309 16.3283 3.17906 16.3169 3.11907 16.2934C3.05907 16.27 3.00431 16.2349 2.95791 16.1902C2.91151 16.1455 2.8744 16.0921 2.84869 16.0331C2.03666 14.1881 1.80099 12.1408 2.17257 10.1596C2.54415 8.17837 3.50565 6.35564 4.93103 4.9303Z" fill="black" stroke="black" stroke-width="0.5" />
    <path d="M15.8602 8.14314C15.7983 8.08093 15.7247 8.03161 15.6436 7.99803C15.5626 7.96444 15.4757 7.94726 15.3879 7.94748L12.2651 7.94751C12.136 7.9485 12.0125 8.00048 11.9216 8.09212C11.8306 8.18376 11.7796 8.30762 11.7796 8.43673C11.7796 8.56583 11.8306 8.68971 11.9215 8.78135C12.0125 8.87299 12.136 8.92498 12.2651 8.92598L14.3855 8.92595L4.92842 18.383C4.83667 18.4748 4.78512 18.5992 4.78512 18.729C4.78512 18.8587 4.83667 18.9832 4.92842 19.0749C5.02017 19.1667 5.14462 19.2182 5.27437 19.2182C5.40413 19.2182 5.52857 19.1667 5.62032 19.0749L15.0774 9.61785L15.0774 11.7383C15.0783 11.8674 15.1303 11.9909 15.222 12.0818C15.3136 12.1727 15.4375 12.2237 15.5666 12.2237C15.6957 12.2237 15.8196 12.1727 15.9112 12.0818C16.0029 11.9908 16.0548 11.8673 16.0558 11.7382L16.0558 8.61546C16.0561 8.52771 16.0389 8.44078 16.0053 8.3597C15.9717 8.27862 15.9224 8.20502 15.8602 8.14314Z" fill="black" stroke="black" stroke-width="0.5" />
  </svg>
);

const ArrowCircleIconWhite = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4.93299 4.93225C6.33148 3.53375 8.11328 2.58135 10.0531 2.19551C11.9928 1.80966 14.0035 2.00768 15.8307 2.76454C17.6579 3.5214 19.2197 4.8031 20.3185 6.44756C21.4173 8.09202 22.0037 10.0254 22.0038 12.0032C22.0035 13.6665 21.5885 15.3035 20.7963 16.766C20.004 18.2285 18.8595 19.4704 17.4664 20.3792C16.0733 21.288 14.4755 21.835 12.8177 21.9707C11.1599 22.1064 9.49448 21.8266 7.9721 21.1565C7.91304 21.1308 7.85963 21.0936 7.81495 21.0472C7.77026 21.0008 7.73518 20.9461 7.71172 20.8861C7.68825 20.8261 7.67687 20.7621 7.67822 20.6977C7.67956 20.6333 7.69361 20.5698 7.71957 20.5108C7.74552 20.4518 7.78286 20.3986 7.82944 20.3541C7.87603 20.3096 7.93094 20.2748 7.99103 20.2516C8.05112 20.2283 8.1152 20.2172 8.17959 20.2188C8.24399 20.2205 8.30743 20.2348 8.36628 20.261C11.7989 21.772 15.7307 21.0345 18.383 18.3822C21.9004 14.8648 21.9005 9.14166 18.383 5.62412C14.8654 2.10658 9.14227 2.10672 5.62486 5.62412C2.97257 8.27642 2.23511 12.2082 3.74614 15.6408C3.77234 15.6997 3.78666 15.7631 3.78827 15.8275C3.78989 15.8919 3.77877 15.956 3.75556 16.0161C3.73234 16.0762 3.69749 16.1311 3.653 16.1777C3.60851 16.2243 3.55526 16.2616 3.49631 16.2875C3.43735 16.3135 3.37385 16.3275 3.30944 16.3289C3.24504 16.3302 3.18101 16.3189 3.12102 16.2954C3.06103 16.2719 3.00626 16.2368 2.95986 16.1922C2.91347 16.1475 2.87635 16.0941 2.85064 16.035C2.03861 14.19 1.80294 12.1428 2.17452 10.1615C2.54611 8.18033 3.5076 6.35759 4.93299 4.93225Z" fill="white" stroke="white" stroke-width="0.5" />
    <path d="M15.8621 8.14119C15.8003 8.07898 15.7267 8.02966 15.6456 7.99607C15.5645 7.96249 15.4776 7.94531 15.3899 7.94553L12.267 7.94555C12.1379 7.94655 12.0145 7.99852 11.9235 8.09016C11.8326 8.1818 11.7815 8.30567 11.7815 8.43478C11.7815 8.56388 11.8326 8.68775 11.9235 8.7794C12.0144 8.87104 12.1379 8.92303 12.267 8.92402L14.3874 8.924L4.93038 18.3811C4.83862 18.4728 4.78708 18.5972 4.78708 18.727C4.78708 18.8568 4.83862 18.9812 4.93037 19.073C5.02213 19.1647 5.14657 19.2163 5.27633 19.2162C5.40608 19.2162 5.53052 19.1647 5.62228 19.073L15.0793 9.6159L15.0793 11.7363C15.0803 11.8654 15.1323 11.9889 15.2239 12.0798C15.3156 12.1708 15.4394 12.2218 15.5686 12.2218C15.6977 12.2218 15.8215 12.1708 15.9132 12.0798C16.0048 11.9889 16.0568 11.8654 16.0578 11.7363L16.0577 8.61351C16.058 8.52575 16.0409 8.43882 16.0073 8.35775C15.9737 8.27667 15.9244 8.20306 15.8621 8.14119Z" fill="white" stroke="white" stroke-width="0.5" />
  </svg>
);

const StarIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17.6601 22.6703C17.1301 22.6703 16.4501 22.5003 15.6001 22.0003L12.6101 20.2303C12.3001 20.0503 11.7001 20.0503 11.4001 20.2303L8.40012 22.0003C6.63012 23.0503 5.59012 22.6303 5.12012 22.2903C4.66012 21.9503 3.94012 21.0803 4.41012 19.0803L5.12012 16.0103C5.20012 15.6903 5.04012 15.1403 4.80012 14.9003L2.32012 12.4203C1.08012 11.1803 1.18012 10.1203 1.35012 9.60031C1.52012 9.08031 2.06012 8.16031 3.78012 7.87031L6.97012 7.34031C7.27012 7.29031 7.70012 6.97031 7.83012 6.70031L9.60012 3.17031C10.4001 1.56031 11.4501 1.32031 12.0001 1.32031C12.5501 1.32031 13.6001 1.56031 14.4001 3.17031L16.1601 6.69031C16.3001 6.96031 16.7301 7.28031 17.0301 7.33031L20.2201 7.86031C21.9501 8.15031 22.4901 9.07031 22.6501 9.59031C22.8101 10.1103 22.9101 11.1703 21.6801 12.4103L19.2001 14.9003C18.9601 15.1403 18.8101 15.6803 18.8801 16.0103L19.5901 19.0803C20.0501 21.0803 19.3401 21.9503 18.8801 22.2903C18.6301 22.4703 18.2301 22.6703 17.6601 22.6703Z" fill="#F5C542" />
  </svg>
);

const Bet365Logo = () => (
  <div className='flex items-center h-full'>
    <Image src='/bet365Crown.svg' alt='bet365' width={100} height={32} className='object-contain object-left' />
  </div>
);

const DraftKingsLogo = () => (
  <div className='flex items-center h-full'>
    <Image src='/draftSung.png' alt='DraftKings' width={100} height={32} className='object-contain object-left' />
  </div>
);

const FanduelLogo = () => (
  <div className='flex items-center h-full'>
    <Image src='/fanduelWithText.svg' alt='Fanduel' width={100} height={32} className='object-contain object-left' />
  </div>
);

const CaesarsLogo = () => (
  <div className='flex items-center h-full'>
    <Image src='/caesersTextlogo.svg' alt='Caesars' width={100} height={32} className='object-contain object-left' />
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
    <div className="relative bg-[#1A1A1A] border rounded-[24px] overflow-hidden flex flex-col transition-colors duration-300"
      style={{
        // Appends '73' (45% opacity) to hex codes like #00B181 -> #00B18173
        borderColor: `${book.glowColor}20`
      }}>
      {/* Top Background Glow */}
      <div
        className='absolute top-0 left-0 right-0 h-[180px] opacity-[0.50] pointer-events-none'
        style={{
          background: `radial-gradient(100% 100% at 0% 0%, ${book.glowColor} 0%, rgba(0,0,0,0) 75%)`,
        }}
      />

      {/* Top Section (Logo + Rating) */}
      <div className='px-[25px] pt-[30px] pb-[25px] flex flex-col gap-[20px] relative z-10 border-b'
      style={{ 
        // Appends '73' (45% opacity) to hex codes like #00B181 -> #00B18173
        borderColor: `${book.glowColor}20` 
      }}
      >
        <div className='h-[32px] flex items-center'>{book.logo}</div>
        <div className='flex items-center gap-[8px]'>
          <StarIcon size={20} className='text-[#F9C924]' />
          <span className='text-[16px] text-white'>
            {book.rating} <span className='text-white/80'>User Rating</span>
          </span>
        </div>
      </div>

      {/* Offer Section */}
      <div className='px-3 py-[25px] flex flex-col gap-[8px] border-b  relative z-10'
        style={{
          // Appends '73' (45% opacity) to hex codes like #00B181 -> #00B18173
          borderColor: `${book.glowColor}20`
        }}
      >
        <div className='text-[11px] text-white/60 font-bold uppercase tracking-widest'>
          {book.preAmount}
        </div>
        <div className='flex items-baseline gap-[8px]'>
          <span className='text-2xl font-black text-white leading-none tracking-tight'>
            {book.amount}
          </span>
          <span className='text-xs font-medium text-white uppercase'>{book.postAmount}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className='p-[25px] flex flex-col flex-1 gap-[20px] relative z-10'>
        <p className='text-[15px] text-white/60 leading-relaxed flex-1'>{book.desc}</p>

        {/* Features Pills with infinite marquee */}
        <div className='w-full overflow-hidden relative py-[2px] select-none'>
          {/* Gradient overlays to fade the edges */}
          <div className='absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none' />
          <div className='absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none' />

          <div className='book-marquee flex gap-[10px]'>
            {/* First set of features */}
            {book.features.map((f, i) => (
              <div
                key={`f1-${i}`}
                className='px-[14px] py-[8px] rounded-[12px] bg-[#222222] border border-[#333333] whitespace-nowrap shrink-0'
              >
                <span className='text-[14px] text-white'>{f}</span>
              </div>
            ))}
            {/* Duplicated set for seamless loop animation */}
            {book.features.map((f, i) => (
              <div
                key={`f2-${i}`}
                className='px-[14px] py-[8px] rounded-[12px] bg-[#222222] border border-[#333333] whitespace-nowrap shrink-0'
              >
                <span className='text-[14px] text-white'>{f}</span>
              </div>
            ))}
          </div>
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
            <ArrowCircleIconBlack className='text-black' />
          </button>
        ) : (
          <button className='w-full h-[56px] rounded-full bg-[#2A2A2A] hover:bg-[#333333] transition-colors border border-amber-400/5 flex items-center justify-center gap-[10px] mt-[10px] cursor-pointer'>
            <span className='text-[18px] font-bold text-white'>Get Bonus</span>
            <ArrowCircleIconWhite className='text-white' />
          </button>
        )}
      </div>
    </div>
  );
}

export function RecommendedSportsbooks() {
  return (
    <div className='w-full'>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bookMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 5px)); }
          }
          .book-marquee {
            display: flex;
            width: max-content;
            animation: bookMarquee 15s linear infinite;
          }
          .book-marquee:hover {
            animation-play-state: paused;
          }
        `
      }} />

      {/* Header */}
      <div className='flex items-center justify-between mb-[30px] border-b border-[#222] pb-[20px]'>
        <h2 className='text-[30px] font-black uppercase tracking-tight text-white leading-none'>
          RECOMMENDED <span className='italic'>SPORTSBOOKS</span>
        </h2>
        <button className='text-[16px] font-medium text-white hover:text-white/80 transition-colors flex items-center gap-[8px] cursor-pointer'>
          <span>View All</span>
          <div className='w-[24px] h-[24px] rounded-full flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4.93103 4.9303C6.32953 3.53179 8.11133 2.5794 10.0511 2.19355C11.9909 1.8077 14.0015 2.00573 15.8287 2.76259C17.656 3.51945 19.2177 4.80115 20.3165 6.4456C21.4153 8.09006 22.0018 10.0234 22.0018 12.0012C22.0016 13.6645 21.5866 15.3015 20.7943 16.7641C20.002 18.2266 18.8575 19.4684 17.4644 20.3772C16.0713 21.286 14.4735 21.833 12.8158 21.9687C11.158 22.1044 9.49253 21.8246 7.97015 21.1545C7.91108 21.1288 7.85768 21.0917 7.81299 21.0453C7.76831 20.9989 7.73323 20.9441 7.70976 20.8841C7.6863 20.8241 7.67492 20.7601 7.67626 20.6957C7.67761 20.6313 7.69166 20.5678 7.71761 20.5088C7.74356 20.4499 7.7809 20.3966 7.82749 20.3522C7.87407 20.3077 7.92899 20.2728 7.98907 20.2496C8.04916 20.2264 8.11324 20.2153 8.17764 20.2169C8.24203 20.2185 8.30548 20.2328 8.36433 20.259C11.7969 21.77 15.7287 21.0326 18.381 18.3803C21.8984 14.8629 21.8986 9.13971 18.381 5.62217C14.8635 2.10462 9.14031 2.10476 5.62291 5.62217C2.97061 8.27446 2.23316 12.2063 3.74419 15.6389C3.77038 15.6977 3.7847 15.7612 3.78632 15.8256C3.78793 15.89 3.77682 15.954 3.7536 16.0141C3.73039 16.0742 3.69554 16.1291 3.65105 16.1757C3.60656 16.2223 3.55331 16.2596 3.49435 16.2856C3.4354 16.3115 3.37189 16.3256 3.30749 16.3269C3.24309 16.3283 3.17906 16.3169 3.11907 16.2934C3.05907 16.27 3.00431 16.2349 2.95791 16.1902C2.91151 16.1455 2.8744 16.0921 2.84869 16.0331C2.03666 14.1881 1.80099 12.1408 2.17257 10.1596C2.54415 8.17837 3.50565 6.35564 4.93103 4.9303Z" fill="white" stroke="white" stroke-width="0.5" />
              <path d="M15.8602 8.14314C15.7983 8.08093 15.7247 8.03161 15.6436 7.99803C15.5626 7.96444 15.4757 7.94726 15.3879 7.94748L12.2651 7.94751C12.136 7.9485 12.0125 8.00048 11.9216 8.09212C11.8306 8.18376 11.7796 8.30762 11.7796 8.43673C11.7796 8.56583 11.8306 8.68971 11.9215 8.78135C12.0125 8.87299 12.136 8.92498 12.2651 8.92598L14.3855 8.92595L4.92842 18.383C4.83667 18.4748 4.78512 18.5992 4.78512 18.729C4.78512 18.8587 4.83667 18.9832 4.92842 19.0749C5.02017 19.1667 5.14462 19.2182 5.27437 19.2182C5.40413 19.2182 5.52857 19.1667 5.62032 19.0749L15.0774 9.61785L15.0774 11.7383C15.0783 11.8674 15.1303 11.9909 15.222 12.0818C15.3136 12.1727 15.4375 12.2237 15.5666 12.2237C15.6957 12.2237 15.8196 12.1727 15.9112 12.0818C16.0029 11.9908 16.0548 11.8673 16.0558 11.7382L16.0558 8.61546C16.0561 8.52771 16.0389 8.44078 16.0053 8.3597C15.9717 8.27862 15.9224 8.20502 15.8602 8.14314Z" fill="white" stroke="white" stroke-width="0.5" />
            </svg>
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
