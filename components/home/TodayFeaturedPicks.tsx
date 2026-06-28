import {
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Crown,
  ExternalLinkIcon,
  Gift,
  Info,
  Lock,
  Shield,
  ShoppingCart,
  X,
} from 'lucide-react';
import React from 'react';

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Brand mark helpers                                                         */
/* ──────────────────────────────────────────────────────────────────────────── */

const AppleLogo = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox='0 0 384 512' fill='currentColor' className={className}>
    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
  </svg>
);

const Bet365Mark = ({ className = 'text-[11px]' }) => (
  <span className={`font-extrabold tracking-tight ${className}`} style={{ color: '#6ACC53' }}>
    bet<span style={{ color: '#ffffff' }}>365</span>
  </span>
);

const FanduelMark = ({ className = 'text-[9px]' }) => (
  <span
    className={`flex items-center gap-[3px] font-black tracking-tight ${className}`}
    style={{ color: '#0FAFFF' }}
  >
    <Shield size={11} strokeWidth={2.5} fill='#0FAFFF' />
    FANDUEL
  </span>
);

const CaesarsMark = ({ className = 'text-[9px]' }) => (
  <span
    className={`flex items-center gap-[3px] font-black tracking-tight ${className}`}
    style={{ color: '#D4AF37' }}
  >
    <Crown size={11} strokeWidth={2.5} />
    CAESARS
  </span>
);

const DraftKingsMark = ({ className = 'text-[9px]' }) => (
  <span
    className={`flex items-center gap-[3px] font-black tracking-tight ${className}`}
    style={{ color: '#FF7411' }}
  >
    <Crown size={11} strokeWidth={2.5} />
    DK
  </span>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Shared sub-components                                                      */
/* ──────────────────────────────────────────────────────────────────────────── */

function PayAfterYouWinTag() {
  return (
    <div
      className='absolute top-0 left-[20px] z-10 flex items-center justify-center gap-[5px] w-[183px] h-[36px] bg-[#1A1810] border border-[#443818]'
      style={{ borderRadius: '24px 12px 12px 0px' }}
    >
      <Lock size={16} className='text-[#F5C542]' strokeWidth={2.5} fill='#F5C542' />
      <span className='text-[14px] font-medium uppercase text-[#F5C542] leading-[26px]'>
        Pay After You Win
      </span>
    </div>
  );
}

function PurchasedTag() {
  return (
    <div
      className='absolute top-0 right-[20px] z-10 flex items-center justify-center gap-[5px] px-[10px] py-[5px] bg-[rgba(106,204,83,0.1)] border border-[rgba(106,204,83,0.1)]'
      style={{ borderRadius: '12px 24px 0px 12px' }}
    >
      <Check size={14} className='text-[#6ACC53]' strokeWidth={3} />
      <span className='text-[14px] font-medium uppercase text-[#6ACC53] leading-[26px]'>
        Purchased
      </span>
    </div>
  );
}

function TeamBanner({
  color1,
  color2,
  abbr1,
  name1,
  abbr2,
  name2,
}: {
  color1: string;
  color2: string;
  abbr1: string;
  name1: string;
  abbr2: string;
  name2: string;
}) {
  return (
    <div className='absolute top-[51px] left-[20px] w-[calc(100%-40px)] h-[107px] rounded-[16px] overflow-hidden'>
      {/* gradient background */}
      <div
        className='absolute inset-0'
        style={{
          background: `radial-gradient(circle at 0% 0%, ${color1}33, transparent 60%), radial-gradient(circle at 100% 0%, ${color2}33, transparent 60%), rgba(255,255,255,0.04)`,
        }}
      />

      {/* left team crest */}
      <div
        className='absolute top-[10px] left-[10px] flex items-center justify-center w-[44px] h-[44px] rounded-[24px] border border-[rgba(255,255,255,0.1)]'
        style={{ backgroundColor: color1 }}
      >
        <span className='text-[11px] font-black text-white'>{abbr1}</span>
      </div>

      {/* right team crest */}
      <div
        className='absolute top-[10px] right-[10px] flex items-center justify-center w-[44px] h-[44px] rounded-[24px] border border-[rgba(255,255,255,0.1)]'
        style={{ backgroundColor: color2 }}
      >
        <span className='text-[11px] font-black text-white'>{abbr2}</span>
      </div>

      {/* left team text */}
      <div className='absolute top-[13px] left-[64px] flex flex-col gap-px text-white'>
        <p className='text-[16px] font-semibold leading-none'>{abbr1}</p>
        <p className='text-[12px] font-normal leading-none opacity-90'>{name1}</p>
      </div>

      {/* right team text */}
      <div className='absolute top-[13px] right-[64px] flex flex-col items-end gap-px text-white text-right'>
        <p className='text-[16px] font-semibold leading-none'>{abbr2}</p>
        <p className='text-[12px] font-normal leading-none opacity-90'>{name2}</p>
      </div>

      {/* VS badge */}
      <div className='absolute top-[13px] left-1/2 -translate-x-1/2 w-[38px] flex flex-col items-center p-[10px] rounded-[22px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px]'>
        <p className='text-[14px] font-medium italic text-white'>VS</p>
      </div>

      {/* date / time pill */}
      <div className='absolute top-[69px] left-0 w-full flex items-center justify-center gap-[10px] p-[10px] rounded-[14px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px]'>
        <div className='flex items-center justify-center gap-[5px]'>
          <Calendar size={16} className='text-white' />
          <span className='text-[14px] font-normal text-white whitespace-nowrap'>May 16, 2025</span>
        </div>
        <div className='w-px h-[16px] bg-white/20' />
        <div className='flex items-center justify-center gap-[5px]'>
          <Clock size={16} className='text-white' />
          <span className='text-[14px] font-normal text-white whitespace-nowrap'>8:20 PM ET</span>
        </div>
      </div>
    </div>
  );
}

function LeagueMarketRow({ top }: { top: string }) {
  return (
    <div
      className='absolute left-0 w-full flex items-center justify-center gap-[8px] text-[16px] uppercase text-white'
      style={{ top }}
    >
      <span>NFL</span>
      <span className='w-[4px] h-[4px] rounded-full bg-white/40' />
      <span>SPRED</span>
    </div>
  );
}

function HowItWorksLink({ top }: { top: string }) {
  return (
    <div
      className='absolute left-0 w-full flex items-center justify-center gap-[5px] text-[12px] font-medium text-white/70 cursor-pointer'
      style={{ top }}
    >
      <span>How It Works</span>
      <Info size={14} />
    </div>
  );
}

function YellowButton({
  children,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <button
      className={`flex items-center justify-center gap-[5px] rounded-[24px] cursor-pointer shadow-[0_4px_20px_rgba(249,201,36,0.25)] hover:brightness-110 transition-all ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgb(249, 201, 36) 0%, rgb(228, 175, 24) 31.98%, rgb(255, 249, 140) 68.02%, rgb(255, 212, 64) 100%)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Card 1 — Locked pick                                                       */
/* ──────────────────────────────────────────────────────────────────────────── */

function LockedCard() {
  return (
    <div className='relative w-full mx-auto max-w-[360px] h-[603px] rounded-[24px] bg-[#1a1a1a] border border-[#333] shadow-2xl overflow-hidden'>
      <PayAfterYouWinTag />

      <TeamBanner
        color1='#2f77ca'
        color2='#40a96c'
        abbr1='BUF'
        name1='Bills'
        abbr2='NYJ'
        name2='Jets'
      />

      <LeagueMarketRow top='173px' />

      {/* locked info */}
      <div className='absolute left-[20px] top-[209px] w-[calc(100%-40px)] flex flex-col items-center gap-[5px] text-center'>
        <p className='text-[18px] font-semibold text-white'>Pick Details are Locked</p>
        <p className='text-[14px] font-normal text-white/50'>
          Unlock to view pick, spread and confidence.
        </p>
      </div>

      <p className='absolute left-0 top-[270px] w-full text-center text-[12px] uppercase font-bold text-white/50 tracking-widest'>
        Available at Top Sportsbooks
      </p>

      {/* sportsbook logos panel */}
      <div className='absolute left-[20px] top-[295px] w-[calc(100%-40px)] rounded-[14px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] backdrop-blur-[15px] p-[15px] flex items-center justify-between'>
        <div className='flex flex-col items-center gap-[8px]'>
          <div className='w-[44px] h-[44px] rounded-[10px] bg-[#222] border border-[#333] flex items-center justify-center shadow-lg'>
            <Bet365Mark className='text-[8px]' />
          </div>
          <span className='text-[10px] text-white/70'>bet365</span>
        </div>
        <div className='flex flex-col items-center gap-[8px]'>
          <div className='w-[44px] h-[44px] rounded-[10px] bg-[#222] border border-[#333] flex items-center justify-center shadow-lg'>
            <FanduelMark className='text-[7px]' />
          </div>
          <span className='text-[10px] text-white/70'>Fanduel</span>
        </div>
        <div className='flex flex-col items-center gap-[8px]'>
          <div className='w-[44px] h-[44px] rounded-[10px] bg-[#222] border border-[#333] flex items-center justify-center shadow-lg'>
            <DraftKingsMark className='text-[7px]' />
          </div>
          <span className='text-[10px] text-white/70'>Draftkings</span>
        </div>
        <div className='flex flex-col items-center gap-[8px]'>
          <div className='w-[44px] h-[44px] rounded-[10px] bg-[#222] border border-[#333] flex items-center justify-center shadow-lg'>
            <CaesarsMark className='text-[7px]' />
          </div>
          <span className='text-[10px] text-white/70'>Caesars...</span>
        </div>
      </div>

      {/* pay-after-win banner stripe */}
      <div className='absolute left-px top-[422px] w-[calc(100%-2px)] h-[46px] flex items-center justify-center gap-[6px] bg-[rgba(255,255,255,0.05)] border-y border-[rgba(255,255,255,0.1)]'>
        <span className='text-[16px] font-bold text-[#F9C924] uppercase tracking-wide'>
          💰 PAY AFTER YOU WIN -
        </span>
        <span className='text-[20px] font-black text-[#F9C924]'>$25</span>
      </div>

      {/* action buttons */}
      <div className='absolute left-[20px] top-[483px] w-[calc(100%-40px)] flex items-center gap-[10px]'>
        <YellowButton className='flex-1 h-[48px]'>
          <AppleLogo size={18} className='text-black' />
          <span className='text-[16px] font-black uppercase text-black'>Pay</span>
        </YellowButton>
        <button className='flex-[1.2] h-[48px] flex items-center justify-center gap-[8px] rounded-[24px] bg-[#222] border border-[#444] hover:bg-[#333] transition-colors cursor-pointer shadow-lg'>
          <ShoppingCart size={16} className='text-white' />
          <span className='text-[14px] font-bold text-white'>Add To Cart</span>
        </button>
      </div>

      <p className='absolute left-0 top-[541px] w-full text-center text-[13px] font-medium text-white/60'>
        <span className='text-[#6ACC53] font-bold'>Zero risk -</span> Charged only on a win
      </p>

      <HowItWorksLink top='567px' />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Card 2 — "How It Works" overlay                                            */
/* ──────────────────────────────────────────────────────────────────────────── */

function ExpandableRow({
  icon,
  label,
  expanded = false,
}: {
  icon: React.ReactNode;
  label: string;
  expanded?: boolean;
}) {
  return (
    <div className='flex items-center justify-center gap-[15px] w-full'>
      <div className='flex items-center justify-center w-[40px] h-[40px] rounded-[20px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] shrink-0'>
        {icon}
      </div>
      <p className='flex-1 text-[16px] font-bold text-white'>{label}</p>
      <ChevronDown
        size={20}
        className={`text-white/60 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`}
      />
    </div>
  );
}

function HowItWorksCard() {
  return (
    <div
      className='relative w-full mx-auto max-w-[360px] h-[603px] rounded-[24px] border border-[#222] shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-[40px]'
      style={{ backgroundColor: 'rgba(15,15,15,0.95)' }}
    >
      {/* vivid color blobs bleeding through the blurred outer card */}
      <div className='absolute -top-[60px] left-[0px] w-[180px] h-[180px] rounded-full bg-[#2f77ca] blur-[80px] opacity-40 pointer-events-none' />
      <div className='absolute -top-[70px] left-[100px] w-[200px] h-[200px] rounded-full bg-[#6ACC53] blur-[80px] opacity-35 pointer-events-none' />
      <div className='absolute -top-[60px] right-[0px] w-[180px] h-[180px] rounded-full bg-[#ff7411] blur-[80px] opacity-35 pointer-events-none' />

      {/* black inner nested panel */}
      <div
        className='absolute left-[10px] top-[54px] w-[calc(100%-20px)] h-[503px] rounded-[20px] border border-[rgba(255,255,255,0.05)]'
        style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
      />

      {/* close button */}
      <button className='absolute right-[24px] top-[70px] flex items-center justify-center w-[24px] h-[24px] rounded-full border border-[rgba(255,255,255,0.2)] text-white/60 cursor-pointer z-10 hover:bg-white/10 transition-colors'>
        <X size={12} />
      </button>

      <div className='absolute left-[30px] top-[74px] w-[calc(100%-60px)] flex flex-col gap-[14px] z-10'>
        <div className='flex flex-col gap-[6px] text-white'>
          <p className='text-[22px] font-bold leading-[28px]'>How it works</p>
          <p className='text-[15px] font-normal leading-[22px] text-white/60'>
            Learn how picks &amp; packages work
          </p>
        </div>

        <div className='w-full h-px bg-[#333]' />

        <div className='flex flex-col gap-[10px] w-full'>
          <ExpandableRow
            icon={<Shield size={18} className='text-white/80' />}
            label='Pay After You Win'
            expanded
          />

          <div className='flex flex-col gap-[8px] text-[14px] font-normal leading-[20px] text-white/60 pl-[10px] border-l border-[#333] ml-[19px]'>
            <p>Purchase eligible individual picks for a small upfront fee.</p>
            <p>If the pick wins, you pay the remaining amount shown on the card.</p>
            <p>If the pick loses, you pay nothing further.</p>
          </div>

          <div className='flex flex-col gap-[8px] w-full mt-[10px]'>
            {[
              'Pay only on winning picks',
              'No charge on losing picks',
              'Individual pick purchases',
            ].map((t) => (
              <div key={t} className='flex items-center gap-[12px] w-full'>
                <Check size={16} className='text-white shrink-0' strokeWidth={3} />
                <p className='flex-1 text-[15px] font-medium leading-[20px] text-white/90'>{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full h-px bg-[#333] mt-[10px]' />

        <ExpandableRow icon={<Gift size={18} className='text-white/80' />} label='Packages' />
      </div>

      <HowItWorksLink top='567px' />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Card 3 — Purchased pick                                                    */
/* ──────────────────────────────────────────────────────────────────────────── */

function BestLineBox({
  Mark,
  odds,
  best = false,
}: {
  Mark: React.ComponentType<{ className?: string }>;
  odds: string;
  best?: boolean;
}) {
  return (
    <div
      className={`relative flex-1 h-[100px] rounded-[14px] bg-[rgba(255,255,255,0.05)] border backdrop-blur-[15px] overflow-hidden flex flex-col items-center justify-center ${
        best ? 'border-[#6ACC53] shadow-[0_0_15px_rgba(106,204,83,0.15)]' : 'border-[#333]'
      }`}
    >
      <div className='flex items-center justify-center mb-[5px]'>
        <Mark className='text-[10px]' />
      </div>
      <p
        className={`text-center text-[22px] font-black ${best ? 'text-[#6ACC53]' : 'text-[#6ACC53]'}`}
      >
        {odds}
      </p>
      {best && (
        <div className='absolute bottom-0 left-0 w-full h-[24px] flex items-center justify-center bg-[#6ACC53]'>
          <span className='text-[10px] font-black uppercase tracking-widest text-black mt-[1px]'>
            Bestline
          </span>
        </div>
      )}
    </div>
  );
}

function PurchasedCard() {
  return (
    <div className='relative w-full mx-auto max-w-[360px] h-[603px] rounded-[24px] bg-[#1a1a1a] border border-[#333] shadow-2xl overflow-hidden'>
      <PayAfterYouWinTag />
      <PurchasedTag />

      <TeamBanner
        color1='#d32f2f'
        color2='#a32215'
        abbr1='KC'
        name1='Chiefs'
        abbr2='NYG'
        name2='Giants'
      />

      <LeagueMarketRow top='173px' />

      {/* pick details */}
      <div className='absolute left-[20px] top-[209px] w-[calc(100%-40px)] flex flex-col items-center gap-[6px] text-center text-white'>
        <p className='text-[22px] font-black uppercase italic tracking-tight leading-[28px] w-full'>
          Kansas City Chiefs - 7.5
        </p>
        <p className='text-[14px] font-medium text-white/50 w-full'>Point Spread - Full Game</p>
      </div>

      {/* High Confidence badge */}
      <div className='absolute left-0 top-[287px] w-full flex items-center justify-center'>
        <div className='flex items-center justify-center gap-[6px] px-[12px] py-[6px] rounded-[8px] bg-[rgba(106,204,83,0.1)] border border-[rgba(106,204,83,0.2)]'>
          <Shield size={14} className='text-[#6ACC53]' />
          <span
            className='text-[11px] font-bold uppercase tracking-widest text-center mt-[1px]'
            style={{ color: '#6ACC53' }}
          >
            High Cinfidence
          </span>
        </div>
      </div>

      <p className='absolute left-0 top-[335px] w-full text-center text-[12px] font-bold uppercase tracking-widest text-white/40'>
        Best Available Line
      </p>

      {/* best line boxes */}
      <div className='absolute left-[20px] top-[368px] w-[calc(100%-40px)] h-[100px] flex gap-[10px]'>
        <BestLineBox Mark={Bet365Mark} odds='- 7.5' best />
        <BestLineBox Mark={FanduelMark} odds='-7.0' />
        <BestLineBox Mark={CaesarsMark} odds='-7.0' />
      </div>

      {/* CTA button */}
      <YellowButton className='absolute left-[20px] top-[483px] w-[calc(100%-40px)] h-[48px]'>
        <span className='text-[15px] font-black uppercase tracking-wide text-black text-center'>
          Bet on bet365 — Best Line
        </span>
      </YellowButton>

      {/* view all link */}
      <div className='absolute left-0 top-[541px] w-full flex flex-col items-center gap-[8px] text-[12px] font-bold text-white/60 uppercase tracking-widest'>
        <div className='flex items-center gap-[4px] cursor-pointer hover:text-white transition-colors'>
          <span>View All Pay After You Win Picks</span>
          <ChevronRight size={14} />
        </div>
      </div>

      <HowItWorksLink top='567px' />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Section — "Today's Featured Picks"                                         */
/* ──────────────────────────────────────────────────────────────────────────── */

export function TodayFeaturedPicks() {
  return (
    <div className='w-full'>
      {/* section header */}
      <div className='flex items-center justify-between mb-[30px] border-b border-[#222] pb-[20px]'>
        <h2 className='text-[24px] font-black italic uppercase tracking-tight text-white'>
          TODAY&apos;S <span className='text-[#F9C924]'>FEATURED PICKS</span>
        </h2>
        <button className='flex items-center gap-[10px] text-[18px] font-medium text-white cursor-pointer'>
          <span>View All</span>
          {/* arrow icon rotated -45° */}
          <div className='w-[24px] h-[24px] rounded-full border border-white/20 flex items-center justify-center'>
            <ExternalLinkIcon size={12} className='text-white' />
          </div>
        </button>
      </div>

      {/* three cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]'>
        <LockedCard />
        <HowItWorksCard />
        <PurchasedCard />
      </div>
    </div>
  );
}
