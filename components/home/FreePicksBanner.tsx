"use client";

import React from 'react';
import Image from 'next/image';

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Icons                                                                      */
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

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Component                                                                  */
/* ──────────────────────────────────────────────────────────────────────────── */

export function FreePicksBanner() {
  return (
    <div className='w-full border border-[#2A2A2A] rounded-[24px] overflow-hidden relative grid grid-cols-1 md:grid-cols-3 items-stretch my-[40px] shadow-2xl min-h-[420px] bg-[#111111]'>
      
      {/* Background stadium + model image */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <Image
          src='/banner-bg.png'
          alt='Background'
          fill
          className='object-cover object-center'
          priority
        />
      </div>

      {/* Left Text Block */}
      <div className='col-span-1 p-[40px] md:pl-[50px] lg:pl-[60px] md:pr-[20px] z-10 flex flex-col justify-center'>
        <h2 className='text-[34px] md:text-[38px] font-black uppercase tracking-tight text-white mb-[15px] leading-[1.15]'>
          GET FREE PICKS<br />
          <span className='italic'>DELIVERED TO YOUR</span><br />
          <span className='italic'>INBOX</span>
        </h2>
        <p className='text-[15px] text-white/80 mb-[30px] font-medium leading-relaxed'>
          Join thousands of sports bettors receiving free picks, betting insights, exclusive offers,
          and important updates directly from GSP.
        </p>
        <button
          className='w-fit h-[48px] px-[25px] rounded-full flex items-center justify-center gap-[8px] cursor-pointer hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(249,201,36,0.25)]'
          style={{
            background:
              'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
          }}
        >
          <span className='text-[16px] font-bold text-black whitespace-nowrap'>Get Free Picks</span>
          <ArrowCircleIcon className='text-black' />
        </button>
      </div>

      {/* Middle Form Block */}
      <div className='col-span-1 py-[40px] z-10 flex flex-col justify-center items-center relative'>
        <div 
          className='bg-[#222222]/70 backdrop-blur-xl rounded-[24px] p-[35px] w-full max-w-[400px] shadow-2xl relative z-20'
          style={{
            borderTop: '1px solid rgba(249, 201, 36, 0.4)',
            borderLeft: '1px solid rgba(249, 201, 36, 0.4)',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <h3 className='text-[20px] font-bold text-white mb-[10px]'>Newsletter</h3>
          <p className='text-[14px] text-white/60 mb-[25px] leading-relaxed pr-[20px]'>
            Join thousands of bettors receiving expert picks and exclusive offers.
          </p>

          <form className='flex flex-col gap-[15px]' onSubmit={(e) => e.preventDefault()}>
            <input
              type='email'
              placeholder='Enter your email'
              className='h-[48px] w-full rounded-full bg-white text-black px-[25px] text-[15px] font-medium placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F9C924] transition-all shadow-inner'
              required
            />
            <button
              type='submit'
              className='w-full h-[48px] rounded-full flex items-center justify-center gap-[8px] cursor-pointer hover:brightness-110 transition-all shadow-[0_4px_15px_rgba(249,201,36,0.2)]'
              style={{
                background:
                  'linear-gradient(90deg, rgb(249,201,36) 0%, rgb(228,175,24) 31.98%, rgb(255,249,140) 68.02%, rgb(255,212,64) 100%)',
              }}
            >
              <span className='text-[16px] font-bold text-black'>Submit</span>
              <ArrowCircleIcon className='text-black' />
            </button>
          </form>
        </div>
      </div>
      
      {/* Right empty column for the background girl to be visible */}
      <div className='col-span-1 hidden md:block relative z-10 pointer-events-none'>
        <div className='absolute right-0 bottom-0 h-[420px] w-[350px]'>
          <Image
            src='/newsletter-model.jpg'
            alt='Model pointing'
            fill
            className='object-cover object-[80%_bottom] [mask-image:linear-gradient(to_left,black_60%,transparent_100%)] mix-blend-screen'
          />
        </div>
      </div>

    </div>
  );
}
