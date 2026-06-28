import React from 'react';

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

const StarIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' />
  </svg>
);

export function Testimonials() {
  const reviews = [
    {
      text: 'BetPro transformed my betting from guesswork into a much more disciplined process.',
      author: 'Winning Member',
      role: 'Premium Subscriber',
    },
    {
      text: 'The detailed analysis and real-time updates are excellent. I finally feel like I have a real edge instead of just guessing.',
      author: 'Sharp Bettor',
      role: 'Weekend Player',
    },
    {
      text: 'I used to chase random picks. Now I follow a much smarter routine, & the consistency has made the biggest difference for me.',
      author: 'Daily Picks User',
      role: 'Long-term Member',
    },
  ];

  return (
    <div className='w-full mb-[80px]'>
      <div className='flex items-center justify-between mb-[30px]'>
        <h2 className='text-[34px] md:text-[40px] font-black uppercase tracking-tight text-white leading-none'>
          WHAT <span className='italic'>OUR MEMBERS SAY</span>
        </h2>
        <button className='text-[16px] font-medium text-white hover:text-white/80 transition-colors flex items-center gap-[8px] cursor-pointer'>
          <span>View All</span>
          <ArrowCircleIcon className='text-white' />
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-[25px]'>
        {reviews.map((review, i) => (
          <div
            key={i}
            className='bg-[#333333] rounded-[24px] p-[35px] flex flex-col justify-between shadow-lg'
          >
            <div>
              <div className='flex gap-[4px] mb-[25px]'>
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} size={22} className='text-[#F9C924]' />
                ))}
              </div>
              <p className='text-[16px] font-medium text-white/90 leading-relaxed mb-[35px]'>
                {review.text}
              </p>
            </div>

            <div className='mt-auto flex flex-col'>
              <div className='font-bold text-[16px] text-white mb-[4px]'>{review.author}</div>
              <div className='text-[14px] text-white/50 font-medium'>{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
