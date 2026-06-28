import React from 'react';
import { Calendar, Clock, Lock } from 'lucide-react';

export function PremiumPick() {
  return (
    <div className='w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[24px] overflow-hidden'>
      {/* section title */}
      <p className='text-[18px] font-semibold text-white leading-[28px] px-[20px] pt-[20px]'>
        Premium Pick
      </p>

      {/* inner card */}
      <div className='mx-[20px] mt-[20px] mb-[20px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[24px] overflow-hidden'>

        {/* "Premium pick of the day" tag */}
        <div className='flex items-center gap-[5px] px-[10px] py-[7px] bg-[#1A1810] border-b border-[#443818]'>
          <Lock size={16} className='text-[#F5C542]' fill='#F5C542' strokeWidth={0} />
          <span className='text-[18px] font-medium text-[#F5C542] uppercase leading-none'>
            Premium pick of the day
          </span>
        </div>

        {/* NFL • SPRED */}
        <div className='flex items-center justify-center gap-[8px] pt-[15px] pb-[10px] text-[14px] text-white/50'>
          <span>NFL</span>
          <span className='w-[4px] h-[4px] rounded-full bg-white/40' />
          <span>SPRED</span>
        </div>

        {/* Team Banner */}
        <div className='relative mx-[20px] h-[107px] rounded-[16px] overflow-hidden'>
          {/* gradient bg */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(circle at 0% 0%, #d32f2f33, transparent 60%), radial-gradient(circle at 100% 0%, #a3221533, transparent 60%), rgba(255,255,255,0.04)',
            }}
          />
          {/* left crest */}
          <div
            className='absolute top-[10px] left-[10px] w-[44px] h-[44px] rounded-[24px] flex items-center justify-center border border-white/10'
            style={{ backgroundColor: '#d32f2f' }}
          >
            <span className='text-[11px] font-black text-white'>KC</span>
          </div>
          {/* right crest */}
          <div
            className='absolute top-[10px] right-[10px] w-[44px] h-[44px] rounded-[24px] flex items-center justify-center border border-white/10'
            style={{ backgroundColor: '#992a0e' }}
          >
            <span className='text-[11px] font-black text-white'>NYG</span>
          </div>
          {/* left team text */}
          <div className='absolute top-[13px] left-[64px] flex flex-col gap-px text-white'>
            <p className='text-[16px] font-semibold leading-none'>KC</p>
            <p className='text-[12px] font-normal leading-none opacity-90'>Chiefs</p>
          </div>
          {/* right team text */}
          <div className='absolute top-[13px] right-[64px] flex flex-col items-end gap-px text-white text-right'>
            <p className='text-[16px] font-semibold leading-none'>NYG</p>
            <p className='text-[12px] font-normal leading-none opacity-90'>Giants</p>
          </div>
          {/* VS badge */}
          <div className='absolute top-[13px] left-1/2 -translate-x-1/2 flex flex-col items-center p-[10px] rounded-[22px] bg-white/10 border border-white/10 backdrop-blur-[10px]'>
            <p className='text-[14px] font-medium italic text-white'>VS</p>
          </div>
          {/* date / time pill */}
          <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-[10px] p-[10px] rounded-[14px] bg-white/10 border border-white/10 backdrop-blur-[10px]'>
            <div className='flex items-center gap-[5px]'>
              <Calendar size={16} className='text-white' />
              <span className='text-[14px] text-white whitespace-nowrap'>May 16, 2025</span>
            </div>
            <div className='w-px h-[16px] bg-white/20' />
            <div className='flex items-center gap-[5px]'>
              <Clock size={16} className='text-white' />
              <span className='text-[14px] text-white whitespace-nowrap'>8:20 PM ET</span>
            </div>
          </div>
        </div>

        {/* Pay After You Win row */}
        <div className='flex items-center gap-[5px] justify-center px-[20px] py-[12px]'>
          <span className='text-[14px] text-white/50'>💰</span>
          <span className='flex-1 text-[14px] font-normal text-white/50 leading-[22px]'>Pay After You Win</span>
          <span className='text-[16px] font-normal text-white line-through opacity-70'>$25</span>
          <span className='text-[16px] font-medium text-[#F5C542]'>$20</span>
        </div>

        {/* CTA */}
        <div className='px-[20px] pb-[15px]'>
          <button
            className='flex items-center justify-center gap-[10px] w-full px-[15px] py-[10px] rounded-[24px] cursor-pointer'
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
            }}
          >
            <span className='text-[18px] font-medium text-black leading-[28px]'>Unlock This Pick</span>
          </button>
        </div>

        {/* zero risk */}
        <p className='text-center text-[14px] font-medium text-white pb-[15px]'>
          <span className='text-white'>🔒 </span>
          <span className='text-[#6ACC53]'>Zero risk</span>
          <span className='text-white'> — charged only on a win</span>
        </p>
      </div>
    </div>
  );
}
