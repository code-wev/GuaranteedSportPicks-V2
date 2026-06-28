"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does Pay After You Win work?',
      answer: 'When eligible, you only pay for individual picks after a winning result is confirmed.',
    },
    {
      question: 'What sports do you provide picks for?',
      answer: 'We provide picks for NFL, NBA, MLB, NHL, and College Sports.',
    },
    {
      question: 'Can I purchase individual picks?',
      answer: 'Yes, you can purchase single picks or full packages.',
    },
    {
      question: 'How are results tracked?',
      answer: 'All results are documented and available on our transparency page.',
    },
    {
      question: 'Do sportsbook offers vary by location?',
      answer: 'Yes, bonuses depend on your state regulations.',
    },
    {
      question: 'Can I cancel my membership?',
      answer: 'Yes, you can cancel at any time from your account settings.',
    },
  ];

  return (
    <div className='w-full mb-[80px]'>
      <div className='flex items-center justify-between mb-[30px]'>
        <h2 className='text-[34px] md:text-[40px] font-black uppercase tracking-tight text-white leading-none'>
          FREQUENTLY <span className='italic'>ASKED QUESTIONS</span>
        </h2>
        <button className='text-[16px] font-medium text-white hover:text-white/80 transition-colors flex items-center gap-[8px] cursor-pointer'>
          <span>View All</span>
          <ArrowCircleIcon className='text-white' />
        </button>
      </div>

      <div className='flex flex-col gap-[12px]'>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className='bg-[#333333] rounded-[16px] overflow-hidden transition-all duration-300'
          >
            <button
              className='w-full flex items-center justify-between px-[30px] py-[22px] text-left cursor-pointer'
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className='font-bold text-[16px] text-white'>{faq.question}</span>
              <ChevronDown
                size={22}
                className={`text-white transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === i && (
              <div className='px-[30px] pb-[25px] text-[15px] text-white/50 font-medium leading-relaxed'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
