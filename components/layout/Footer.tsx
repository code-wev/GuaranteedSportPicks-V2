"use client";

import React from 'react';
import Image from 'next/image';

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect width='4' height='12' x='2' y='9' />
    <circle cx='4' cy='4' r='2' />
  </svg>
);

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

const GSPLogo = () => (
  <div className='flex flex-col'>
    <div className='text-[8px] font-black tracking-widest text-[#D32F2F] leading-none mb-[2px]'>
      GUARANTEED <span className='text-white'>SPORT PICKS</span>
    </div>
    <div className='text-[36px] font-black italic tracking-tighter leading-none flex'>
      <span className='text-white'>G</span>
      <span className='text-[#D32F2F]'>S</span>
      <span className='text-white'>P</span>
    </div>
  </div>
);

export function Footer() {
  return (
    <footer className='w-full relative mt-[60px]'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <Image
          src='/footer.png'
          alt='Footer Background'
          fill
          className='object-cover object-center opacity-80'
        />
        {/* Dark overlay to ensure text is readable */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-[#000000]/60' />
      </div>

      <div className='relative z-10 w-full max-w-[1520px] mx-auto px-6 xl:px-0 pt-[80px] pb-[30px]'>
        
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[40px] lg:gap-[30px] pb-[40px]'>
          
          {/* Col 1: Logo & About */}
          <div className='lg:col-span-3 flex flex-col gap-[20px]'>
            <GSPLogo />
            <p className='text-white/70 text-[14px] leading-relaxed max-w-[280px]'>
              Professional sports picks, transparent results, and proven strategies trusted since 1999.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className='lg:col-span-2'>
            <div className='inline-block border-b border-white/30 pb-[5px] mb-[25px]'>
              <h4 className='font-medium text-white text-[15px]'>Navigation</h4>
            </div>
            <ul className='flex flex-col gap-[15px] text-[14px] text-white/70'>
              <li><a href='#' className='hover:text-white transition-colors'>Home</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>How It Works</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Free Picks</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Premium Packages</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Betting News</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Policy */}
          <div className='lg:col-span-2'>
            <div className='inline-block border-b border-white/30 pb-[5px] mb-[25px]'>
              <h4 className='font-medium text-white text-[15px]'>Policy</h4>
            </div>
            <ul className='flex flex-col gap-[15px] text-[14px] text-white/70'>
              <li><a href='#' className='hover:text-white transition-colors'>Privacy Policy</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Terms of Service</a></li>
            </ul>
          </div>

          {/* Col 4: Social Links */}
          <div className='lg:col-span-2'>
            <div className='inline-block border-b border-white/30 pb-[5px] mb-[25px]'>
              <h4 className='font-medium text-white text-[15px]'>Social Links</h4>
            </div>
            <ul className='flex flex-col gap-[15px] text-[14px] text-white/70'>
              <li>
                <a href='#' className='flex items-center gap-[10px] hover:text-white transition-colors'>
                  <FacebookIcon size={20} /> Facebook
                </a>
              </li>
              <li>
                <a href='#' className='flex items-center gap-[10px] hover:text-white transition-colors'>
                  <InstagramIcon size={20} /> Instagram
                </a>
              </li>
              <li>
                <a href='#' className='flex items-center gap-[10px] hover:text-white transition-colors'>
                  <LinkedinIcon size={20} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className='lg:col-span-3 flex flex-col'>
            <h4 className='font-bold mb-[10px] text-white text-[16px]'>Free Picks By Email</h4>
            <p className='text-[14px] text-white/50 mb-[20px] leading-relaxed'>
              Join thousands of bettors receiving expert picks and exclusive offers.
            </p>
            <form className='flex flex-col gap-[12px]' onSubmit={(e) => e.preventDefault()}>
              <input
                type='email'
                placeholder='Enter your email'
                className='h-[48px] w-full rounded-full bg-[#333333]/80 border border-transparent px-[20px] text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#F9C924] transition-colors shadow-inner'
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

        {/* Separator */}
        <div className='h-[1px] w-full bg-white/10 mb-[20px]' />

        {/* Copyright */}
        <div className='flex justify-center mb-[20px]'>
          <p className='text-[13px] text-white/50'>
            © 2026 Guaranteed Sports Picks (GSP). All Rights Reserved.
          </p>
        </div>

        {/* Separator */}
        <div className='h-[1px] w-full bg-white/10 mb-[20px]' />

        {/* Disclaimer */}
        <div className='flex justify-center text-center'>
          <p className='text-[13px] text-white/40 max-w-[1000px] leading-relaxed'>
            Disclaimer: Sports betting involves risks. Must be 18+ to participate. Please gamble responsibly. 
            If you have a gambling problem, call 1-800-GAMBLER or visit ncpgambling.org
          </p>
        </div>

      </div>
    </footer>
  );
}
