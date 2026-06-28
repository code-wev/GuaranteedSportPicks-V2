"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

export function TopMarquee() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className='relative w-full bg-[#111111] border-b border-white/5 py-[12px] flex items-center overflow-hidden z-[100]'>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          display: flex;
          white-space: nowrap;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Marquee Content */}
      <div className='animate-marquee flex gap-[50px] items-center text-[13px] font-medium text-white/90 tracking-wide'>
        
        {/* We render the sequence twice to create a seamless infinite loop */}
        {[1, 2].map((sequenceIndex) => (
          <React.Fragment key={sequenceIndex}>
            <div className='flex items-center gap-[10px]'>
              <span className='text-[16px]'>🏈</span>
              <span>NFL Early Bird Package — Save 40% - Use Code: <span className='font-bold text-white'>EARLYBIRD40</span></span>
            </div>

            <div className='flex items-center gap-[10px]'>
              <span className='text-[16px]'>⏱️</span>
              <span>Offer Ends:</span>
              <div className='bg-white text-black font-bold px-[8px] py-[3px] rounded-[6px] text-[12px]'>
                47:23:11
              </div>
            </div>

            <div className='flex items-center gap-[10px]'>
              <span className='text-[16px]'>✅</span>
              <span>68.4% Win Rate This Season - 127 Documented Wins</span>
            </div>

            <div className='flex items-center gap-[10px]'>
              <span className='text-[16px]'>💰</span>
              <span>Pay After You Win — Zero Risk Guarantee</span>
            </div>

            <div className='flex items-center gap-[10px]'>
              <span className='text-[16px]'>🏀</span>
              <span>NBA Season Package Now Available - Limited Spots</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Fixed Close Button on the Right */}
      <div className='absolute right-[15px] top-1/2 -translate-y-1/2 bg-[#111111] pl-[10px]'>
        <button
          onClick={() => setIsVisible(false)}
          className='w-[24px] h-[24px] rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors cursor-pointer bg-[#1a1a1a]'
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
