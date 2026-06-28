import React from 'react';
import { Hourglass, Shield, ShieldCheck, FileCheck } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Hourglass size={64} className='text-[#F9C924]' strokeWidth={1} />,
      title: 'Documented results since 1999',
      description: 'Over 25 years of verified performance and proven results.',
    },
    {
      icon: <Shield size={64} className='text-[#F9C924]' strokeWidth={1} />,
      title: 'Pay After You Win guarantee on individual picks',
      description: 'Only pay for eligible picks when they win.',
    },
    {
      icon: <ShieldCheck size={64} className='text-[#F9C924]' strokeWidth={1} />,
      title: 'Package satisfaction guarantee',
      description: 'Backed by a satisfaction-first approach for members.',
    },
    {
      icon: <FileCheck size={64} className='text-[#F9C924]' strokeWidth={1} />,
      title: 'Transparent documented record',
      description: 'Every result tracked, recorded, and publicly documented.',
    },
  ];

  return (
    <div className='w-full mb-[80px]'>
      <div className='mb-[30px]'>
        <h2 className='text-[34px] md:text-[40px] font-black uppercase tracking-tight text-white leading-none'>
          WHY <span className='italic'>CHOOSE GSP</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]'>
        {reasons.map((reason, i) => (
          <div
            key={i}
            className='bg-[#000000] border border-[#222222] rounded-[24px] p-[30px] flex flex-col h-[280px] shadow-xl relative overflow-hidden group hover:border-[#444444] transition-colors'
          >
            {/* Inner top text content */}
            <div className='relative z-10 flex flex-col'>
              <h3 className='text-[18px] font-bold mb-[10px] leading-tight text-white'>
                {reason.title}
              </h3>
              <p className='text-[15px] text-white/50 font-medium leading-relaxed pr-[10px]'>
                {reason.description}
              </p>
            </div>

            {/* Bottom Right Icon with Glow */}
            <div className='absolute -bottom-4 -right-4 w-[140px] h-[140px] flex items-center justify-center pointer-events-none'>
              {/* Radial glow behind icon */}
              <div
                className='absolute inset-0 bg-[#F9C924] blur-[50px] opacity-20 group-hover:opacity-30 transition-opacity'
                style={{ transform: 'translate(20%, 20%)' }}
              />
              
              {/* Icon */}
              <div className='relative z-10 opacity-90 drop-shadow-[0_0_15px_rgba(249,201,36,0.5)]'>
                {reason.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
