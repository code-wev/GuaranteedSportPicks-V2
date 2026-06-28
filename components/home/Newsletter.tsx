'use client';

import React from 'react';
import { Check } from 'lucide-react';

export function Newsletter() {
  return (
    <div className='w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-[20px] flex flex-col gap-[15px]'>
      {/* header */}
      <div className='flex flex-col gap-[5px]'>
        <h2 className='text-[18px] font-semibold text-white leading-[28px]'>Free Picks By Email</h2>
        <p className='text-[14px] font-normal text-white/50 leading-[22px]'>
          Join thousands of bettors receiving expert picks and exclusive offers.
        </p>
      </div>

      {/* email input */}
      <input
        type='email'
        placeholder='Enter your email'
        className='w-full h-[48px] rounded-[24px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] px-[20px] text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[rgba(249,201,36,0.5)] transition-colors'
      />

      {/* CTA */}
      <button
        className='flex items-center justify-center gap-[10px] w-full px-[15px] py-[10px] rounded-[24px] cursor-pointer'
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
        }}
      >
        <Check size={20} className='text-black' strokeWidth={2.5} />
        <span className='text-[18px] font-medium text-black leading-[28px]'>Get Free Picks</span>
      </button>

      {/* no spam */}
      <p className='text-center text-[12px] font-normal text-white/40'>
        No Spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
