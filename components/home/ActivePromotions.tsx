'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/* ── countdown helper ───────────────────────────────────── */
function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  });
  return t;
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className='flex-1 flex flex-col items-center gap-[5px] p-[10px] rounded-[14px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]'>
      <span className='text-[18px] font-bold text-white w-full text-center'>
        {String(value).padStart(2, '0')}
      </span>
      <span className='text-[14px] font-normal text-white/50 w-full text-center'>{label}</span>
    </div>
  );
}

export function ActivePromotions() {
  const deadline = new Date(Date.now() + (2 * 86400 + 14 * 3600 + 36 * 60 + 45) * 1000);
  const { d, h, m, s } = useCountdown(deadline);

  return (
    <div className='w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[24px] overflow-hidden'>
      {/* section title */}
      <p className='text-[18px] font-semibold text-white leading-[28px] px-[20px] pt-[20px] pb-[0px]'>
        Active Promotions
      </p>

      {/* ── Early bird card ── */}
      <div className='mx-[20px] mt-[20px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-[20px] flex flex-col gap-[15px]'>
        {/* title + desc */}
        <div className='flex flex-col gap-[5px]'>
          <p className='text-[18px] font-medium text-white leading-[28px]'>Early bird special</p>
          <p className='text-[14px] font-normal text-white/50'>Save 40% on any NFL season package</p>
        </div>

        {/* promo code */}
        <div
          className='flex items-center gap-[5px] px-[10px] py-[5px] rounded-[6px] border border-dashed border-[#f9c924] w-fit text-[16px]'
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(249,201,36,0.15) 0%, rgba(228,175,24,0.15) 31.98%, rgba(255,249,140,0.15) 68.02%, rgba(255,212,64,0.15) 100%), linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1))',
          }}
        >
          <span className='font-normal text-white'>Code:</span>
          <span
            className='font-medium bg-clip-text text-transparent'
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
            }}
          >
            EARLY40
          </span>
        </div>

        {/* countdown */}
        <div className='flex flex-col gap-[5px]'>
          <p className='text-[14px] font-normal text-white/50 leading-[22px]'>Ends In:</p>
          <div className='flex gap-[5px]'>
            <TimeBox value={d} label='Day' />
            <TimeBox value={h} label='Hrs' />
            <TimeBox value={m} label='Min' />
            <TimeBox value={s} label='Sec' />
          </div>
        </div>

        {/* CTA */}
        <button
          className='flex items-center justify-center gap-[10px] px-[15px] py-[10px] rounded-[24px] w-full cursor-pointer'
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
          }}
        >
          <span className='text-[18px] font-medium text-black leading-[28px]'>Claim Offer</span>
          <ArrowUpRight size={20} className='text-black' strokeWidth={2} />
        </button>
      </div>

      {/* ── Welcome Gift card ── */}
      <div className='mx-[20px] mt-[15px] mb-[20px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-[20px] flex items-center justify-between overflow-hidden relative'>
        {/* left text */}
        <div className='flex flex-col gap-[10px] z-10'>
          <div className='flex flex-col'>
            <span className='text-[14px] font-medium text-white'>WELCOME20</span>
            <span className='text-[22px] font-extrabold text-white tracking-[-0.66px] leading-tight'>
              Welcome Gift
            </span>
            <span className='text-[16px] font-normal text-white tracking-[-0.48px]'>
              Exclusive for you!
            </span>
          </div>
          <button
            className='flex items-center gap-[5px] px-[15px] py-[5px] rounded-[24px] w-fit cursor-pointer'
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
            }}
          >
            <span className='text-[12px] font-medium text-black'>Claim Offer</span>
            <ArrowUpRight size={14} className='text-black' strokeWidth={2} />
          </button>
        </div>

        {/* right — 20% UP TO OFF badge */}
        <div className='flex flex-col items-center justify-center z-10 shrink-0'>
          <div className='flex flex-col items-center leading-none font-extrabold text-white'>
            <div className='flex items-start'>
              <span className='text-[40px] leading-none'>20</span>
              <span className='text-[24px] leading-none mt-[2px]'>%</span>
            </div>
            <span className='text-[23px] leading-none'>UP TO</span>
            <span className='text-[9px] leading-none mt-[2px]'>OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
