import { Apple, CheckCircle2, ChevronRight, Star, Zap } from 'lucide-react';

export function FeaturedPackage() {
  const premiumFeatures = [
    '7 days of picks',
    'All sport picks',
    'Priority support',
    'Detailed analysis',
    'Win rate tracking',
  ];

  return (
    <div className='w-[370px] flex flex-col gap-[20px]'>
      <h2 className='text-[20px] font-bold text-white tracking-wide ml-[20px]'>Featured package</h2>

      <div className='bg-[#111] border border-[#222] rounded-[24px] flex flex-col relative overflow-hidden pb-[30px] pt-[10px]'>
        {/* Glow behind the card */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-[#F9C924] blur-[80px] opacity-10' />

        <div className='bg-[#1a1a1a] rounded-[16px] mx-[20px] p-[25px] flex flex-col border border-[#333] relative z-10 mt-[10px]'>
          <div className='flex justify-between items-start mb-[10px]'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-[#F9C924]'>
              <Zap size={20} className='fill-[#F9C924]' />
            </div>
            <div className='flex items-center gap-[6px] bg-[#222] border border-[#333] px-[12px] py-[6px] rounded-[8px]'>
              <Star size={14} className='text-[#F9C924]' />
              <span className='text-white text-[12px] font-bold'>Most Popular</span>
            </div>
          </div>

          <div className='flex items-center gap-[10px] mb-[4px]'>
            <h3 className='text-[24px] font-bold text-white'>Weekly</h3>
            <span className='bg-[#F9C924]/10 text-[#F9C924] text-[12px] font-bold px-[8px] py-[4px] rounded-[6px]'>
              30% off
            </span>
          </div>

          <p className='text-[14px] text-white/60 mb-[20px]'>Most popular for casual bettors</p>

          <div className='flex items-baseline gap-[12px] mb-[25px]'>
            <span className='text-[20px] text-white/40 line-through font-medium'>$49</span>
            <span className='text-[32px] font-black text-white'>$34.30</span>
            <span className='text-[14px] font-bold text-white/50 uppercase tracking-widest'>
              / Week
            </span>
          </div>

          <div className='flex flex-col gap-[15px] mb-[25px]'>
            <button className='w-full h-[48px] rounded-[24px] bg-gradient-to-r from-[#F9C924] to-[#FFD440] flex items-center justify-center gap-[8px] hover:brightness-110 transition-all'>
              <Apple size={20} className='text-black -mt-[2px]' />
              <span className='font-bold text-black text-[16px]'>Pay</span>
            </button>
            <button className='text-[14px] text-white/80 font-bold hover:text-white transition-colors flex items-center justify-center gap-[4px]'>
              View Package <ChevronRight size={16} />
            </button>
          </div>

          <div className='flex items-center justify-center gap-[15px] mb-[25px]'>
            <div className='flex items-center'>
              <div className='w-[6px] h-[6px] rounded-full bg-[#333]' />
              <div className='w-[85px] h-[1px] bg-[#333]' />
            </div>
            <span className='text-[12px] text-white/40 font-bold uppercase tracking-widest'>
              Feature
            </span>
            <div className='flex items-center'>
              <div className='w-[85px] h-[1px] bg-[#333]' />
              <div className='w-[6px] h-[6px] rounded-full bg-[#333]' />
            </div>
          </div>

          <div className='flex flex-col gap-[15px]'>
            {premiumFeatures.map((feature: string, i: number) => (
              <div key={i} className='flex items-center gap-[12px]'>
                <CheckCircle2 size={20} className='text-[#2ecc71] shrink-0' />
                <span className='text-[15px] text-white/90'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
