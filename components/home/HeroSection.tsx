import {
  Calendar,
  CircleDollarSign,
  Clock,
  Star,
  TrendingDown,
  TrendingUp,
  Trophy,
} from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className='relative w-full overflow-hidden bg-[#000000] min-h-[800px] flex items-center border-b border-[rgba(255,255,255,0.1)]'>
      {/* Background Image Overlay */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='/HeroBannerBG.png'
          alt='Background'
          fill
          priority
          className='object-cover object-center opacity-70'
        />
        {/* Subtle dark effect to match the Figma vibe without completely blacking it out */}
        <div className='absolute inset-0 bg-black/30' />
      </div>

      <div className='relative z-10 w-full max-w-[1920px] mx-auto px-4 xl:px-[200px] py-[60px] flex flex-col xl:flex-row items-center justify-between gap-[40px]'>
        {/* Left Content */}
        <div className='flex-1 flex flex-col items-start w-full max-w-[710px]'>
          {/* Live Picks Badge */}
          <div className='flex items-center gap-[15px] mb-[44px]'>
            <div className='w-[10px] h-[10px] bg-[#2ecc71] rounded-full shadow-[0_0_0_3px_rgba(46,204,113,0.2)] relative'>
              <div className='absolute inset-[-1px] rounded-full animate-ping bg-[#2ecc71] opacity-75' />
            </div>
            <span className='font-sans font-semibold text-[14px] leading-[16.5px] tracking-[1.32px] text-white uppercase'>
              Live Picks · Season In Progress
            </span>
          </div>

          {/* Headline */}
          <div className='flex flex-col w-full mb-[30px]'>
            <h1 className='font-montserrat font-bold text-[60px] leading-[65px] uppercase text-white flex flex-col sm:block'>
              <span>Pay </span>
              <span className='italic text-[#f5c542]'>after you win </span>
              <span>& GET 10% CASH BACK</span>
            </h1>
            <p className='font-sans font-normal text-[18px] leading-[28px] text-white mt-[10px]'>
              Pay Only If You Win. Transparent Records. No Guesswork.
            </p>
          </div>

          {/* Buttons */}
          <div className='flex flex-wrap items-center gap-[20px] mb-[44px]'>
            <button className='flex items-center justify-center gap-[10px] px-[30px] py-[10px] rounded-[24px] bg-gradient-to-r from-[#F9C924] via-[#E4AF18] via-[#FFF98C] to-[#FFD440] hover:brightness-110 transition-all'>
              <span className='font-sans font-medium text-[18px] leading-[28px] text-black whitespace-nowrap'>
                Get Today&apos;s Picks
              </span>
              <Image
                src='/ArrowIcon.png'
                alt='Arrow'
                width={19}
                height={20}
                style={{ width: '19.357px', height: '19.999px' }}
                className='object-contain flex-shrink-0'
              />
            </button>
            <button className='flex items-center justify-center gap-[10px] px-[30px] py-[10px] rounded-[24px] bg-[rgba(255,255,255,0.1)] border border-[#f9c924] backdrop-blur-[15px] hover:bg-[rgba(255,255,255,0.15)] transition-all'>
              <span className='font-sans font-medium text-[18px] leading-[28px] text-white whitespace-nowrap'>
                Register Now
              </span>
              <Image
                src='/ArrowIcon.png'
                alt='Arrow'
                width={19}
                height={20}
                style={{ width: '19.357px', height: '19.999px' }}
                className='object-contain flex-shrink-0 brightness-0 invert'
              />
            </button>
          </div>

          {/* Stats Title */}
          <div className='flex items-center gap-[10px] mb-[15px]'>
            <div className='w-[21px] h-[28px] bg-white/20 rounded flex items-center justify-center'>
              <Image src='/hero/nfl.svg' alt='nfl' height={50} width={50} />
            </div>
            <span className='font-sans font-semibold text-[18px] leading-[28px] text-white'>
              NFL 2026
            </span>
            <span className='font-sans font-normal text-[18px] leading-[28px] text-white/80'>
              Recent Results
            </span>
          </div>

          {/* Stats Box */}
          <div className='w-full max-w-[620px] p-[25px] rounded-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-[15px] flex flex-wrap lg:flex-nowrap items-center justify-between gap-[15px]'>
            <div className='flex flex-col gap-[10px] min-w-[100px]'>
              <div className='flex items-center gap-[5px] text-white'>
                <Trophy size={20} strokeWidth={1.5} />
                <span className='font-sans font-normal text-[14px] lg:text-[16px] uppercase leading-[26px]'>
                  Wins
                </span>
              </div>
              <span className='font-sans font-semibold text-[22px] text-white leading-[32px]'>
                333
              </span>
            </div>

            <div className='hidden lg:block w-[1px] h-[68px] bg-[rgba(255,255,255,0.1)]' />

            <div className='flex flex-col gap-[10px] min-w-[100px]'>
              <div className='flex items-center gap-[5px] text-white'>
                <TrendingDown size={20} strokeWidth={1.5} />
                <span className='font-sans font-normal text-[14px] lg:text-[16px] uppercase leading-[26px]'>
                  Loses
                </span>
              </div>
              <span className='font-sans font-semibold text-[22px] text-white leading-[32px]'>
                277
              </span>
            </div>

            <div className='hidden lg:block w-[1px] h-[68px] bg-[rgba(255,255,255,0.1)]' />

            <div className='flex flex-col gap-[10px] min-w-[100px]'>
              <div className='flex items-center gap-[5px] text-white'>
                <CircleDollarSign size={20} strokeWidth={1.5} />
                <span className='font-sans font-normal text-[14px] lg:text-[16px] uppercase leading-[26px]'>
                  Net
                </span>
              </div>
              <span className='font-sans font-semibold text-[22px] text-white leading-[32px]'>
                +5570
              </span>
            </div>

            <div className='hidden lg:block w-[1px] h-[68px] bg-[rgba(255,255,255,0.1)]' />

            <div className='flex flex-col gap-[10px] min-w-[100px]'>
              <div className='flex items-center gap-[5px] text-white'>
                <TrendingUp size={20} strokeWidth={1.5} />
                <span className='font-sans font-normal text-[14px] lg:text-[16px] uppercase leading-[26px]'>
                  Roi
                </span>
              </div>
              <span className='font-sans font-semibold text-[22px] text-white leading-[32px]'>
                55.7%
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Pick of the Day Card */}
        <div className='relative w-full max-w-[720px] h-auto lg:h-[470px] mt-[40px] xl:mt-0 flex-shrink-0'>
          {/* Player Image Overlaying the right side (placed outside the card to allow overflow) */}
          <div className='absolute right-[-24px] bottom-0 w-[423px] h-[525px] pointer-events-none hidden md:block z-30'>
            <div className='w-full h-full relative'>
              <Image
                src='/hero.png'
                alt='Hero Player'
                fill
                className='object-contain object-bottom'
              />
            </div>
          </div>

          {/* Main Card Container */}
          <div className='relative w-full h-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-[15px] rounded-[24px] p-[30px] flex flex-col justify-between overflow-hidden z-20'>
            {/* Top Tag */}
            <div className='flex items-center gap-[5px] px-[15px] py-[5px] bg-[rgba(249,201,36,0.05)] border border-[rgba(245,197,66,0.5)] rounded-[10px] w-fit relative z-20'>
              <Star size={16} className='text-[#f5c542]' strokeWidth={1.5} />
              <span className='font-sans font-medium text-[14px] text-[#f5c542] uppercase leading-[24px]'>
                Premium pick
              </span>
            </div>

            {/* Card Text & Match Info */}
            <div className='relative z-20 mt-[30px] md:mt-0'>
              <h2 className="font-['Montserrat'] font-semibold text-[22px] text-white leading-[32px] uppercase">
                Pick of the day
              </h2>
              <div className='flex items-center gap-[8px] text-[16px] text-white/70 font-sans mt-[5px]'>
                <span>NFL</span>
                <span className='w-1 h-1 rounded-full bg-white/50' />
                <span>SPREAD</span>
              </div>

              {/* VS Block */}
              <div className='mt-[25px] relative max-w-[340px] rounded-[16px] overflow-hidden flex flex-col border border-[rgba(255,255,255,0.1)]'>
                {/* Top Teams Area */}
                <div className='flex items-center justify-between p-[18px] relative z-10'>
                  {/* Diagonal split background */}
                  <div className='absolute inset-0 bg-[linear-gradient(105deg,rgba(47,119,202,0.1)_50%,rgba(64,169,108,0.1)_50%)] -z-10' />

                  <div className='flex items-center gap-[12px]'>
                    <div className='w-[48px] h-[48px] bg-[#2f77ca] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0'>
                      <Image
                        src='/h1.svg'
                        alt='BUF'
                        width={28}
                        height={28}
                        className='object-contain'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-white font-semibold text-[18px] leading-[22px]'>
                        BUF
                      </span>
                      <span className='text-white/70 text-[13px] leading-[16px]'>Bills</span>
                    </div>
                  </div>

                  <div className='w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] backdrop-blur-[5px] flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                    <span className='text-white font-medium italic text-[15px] tracking-wide'>
                      VS
                    </span>
                  </div>

                  <div className='flex items-center gap-[12px]'>
                    <div className='flex flex-col items-end'>
                      <span className='text-white font-semibold text-[18px] leading-[22px]'>
                        NYJ
                      </span>
                      <span className='text-white/70 text-[13px] leading-[16px]'>Jets</span>
                    </div>
                    <div className='w-[48px] h-[48px] bg-[#40a96c] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0'>
                      <Image
                        src='/h2.svg'
                        alt='NYJ'
                        width={28}
                        height={28}
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className='flex items-center justify-center gap-[15px] p-[12px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] relative z-20 border-t border-[rgba(255,255,255,0.05)]'>
                  <div className='flex items-center gap-[8px]'>
                    <Calendar size={18} className='text-white/90' strokeWidth={1.5} />
                    <span className='text-white/90 text-[15px] font-medium'>May 16, 2025</span>
                  </div>
                  <div className='w-[1px] h-[16px] bg-[rgba(255,255,255,0.2)]' />
                  <div className='flex items-center gap-[8px]'>
                    <Clock size={18} className='text-white/90' strokeWidth={1.5} />
                    <span className='text-white/90 text-[15px] font-medium'>8:20 PM ET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className='relative z-20 w-full max-w-[400px] mt-[30px] md:mt-0'>
              <button className='w-full flex items-center justify-center gap-[10px] px-[15px] py-[15px] rounded-[24px] bg-gradient-to-r from-[#F9C924] via-[#E4AF18] via-[#FFF98C] to-[#FFD440] hover:brightness-110 transition-all'>
                <span className='font-sans font-medium text-[18px] text-black'>
                  Pay After You Win - Get Picks
                </span>
                <Image
                  src='/ArrowIcon.png'
                  alt='Arrow'
                  width={19}
                  height={20}
                  style={{ width: '19.357px', height: '19.999px' }}
                  className='object-contain flex-shrink-0'
                />
              </button>

              <div className='flex items-center justify-center mt-[15px] text-[16px] text-white'>
                <span>
                  🔒 <span className='text-[#38af1c]'>Zero risk</span> — charged only on a win
                </span>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className='absolute bottom-[30px] right-[50px] flex items-center gap-[6px] z-20'>
              <div className='w-[8px] h-[8px] rounded-full bg-white' />
              <div className='w-[8px] h-[8px] rounded-full bg-white/30' />
              <div className='w-[8px] h-[8px] rounded-full bg-white/30' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
