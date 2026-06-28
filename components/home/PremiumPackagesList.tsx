import React from 'react';
import { ShoppingCart } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Icons                                                                      */
/* ──────────────────────────────────────────────────────────────────────────── */

const AppleLogo = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox='0 0 384 512' fill='currentColor' className={className}>
    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
  </svg>
);

const ExternalLinkIcon = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    <polyline points='15 3 21 3 21 9' />
    <line x1='10' y1='14' x2='21' y2='3' />
  </svg>
);

const CheckCircleIcon = ({ size = 20, className = 'text-white' }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
    <polyline points='22 4 12 14.01 9 11.01' />
  </svg>
);

const StarIcon = () => (
  <svg width='14' height='14' viewBox='0 0 16 16' fill='none'>
    <path
      d='M8.59997 2.14668L10.2333 5.46001C10.32 5.63334 10.58 5.82001 10.7733 5.85334L13.82 6.36001C15.76 6.68668 16.2 7.99334 14.8066 9.26668L12.44 11.4267C12.28 11.5733 12.1933 11.8533 12.2466 12.0667L12.92 14.98C13.4533 17.3 12.3133 18.1333 10.38 16.8333L7.52664 14.9133C7.33997 14.7867 7.0333 14.7867 6.84664 14.9133L3.9933 16.8333C2.06664 18.1267 0.919972 17.2933 1.45331 14.98L2.12664 12.0667C2.17997 11.8467 2.0933 11.5667 1.9333 11.4267L-0.433361 9.26668C-1.82669 7.98668 -1.39336 6.68001 0.553306 6.35334L3.59997 5.84668C3.78664 5.81334 4.04664 5.62668 4.13997 5.45334L5.77331 2.14001C6.55331 0.560013 7.82664 0.560013 8.59997 2.14668Z'
      fill='#F5C542'
    />
  </svg>
);

const LightningIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
    <path
      d='M13 2L3 14H12L11 22L21 10H12L13 2Z'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const DiamondIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#F5C542' strokeWidth='1.5'>
    <path d='M2.7 8.5L12 21.5L21.3 8.5' />
    <path d='M2.7 8.5L8 3H16L21.3 8.5' />
    <path d='M12 21.5V8.5' />
    <path d='M8 3L12 8.5L16 3' />
    <path d='M2.7 8.5H21.3' />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Package Card Component                                                     */
/* ──────────────────────────────────────────────────────────────────────────── */

function PackageCard({
  title,
  oldPrice,
  newPrice,
  period,
  subtitle,
  features,
  popular,
  discount,
  icon,
}: {
  title: string;
  oldPrice: string;
  newPrice: string;
  period: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
  discount: string;
  icon: 'lightning' | 'external' | 'diamond';
}) {
  return (
    <div
      className={`relative rounded-[24px] flex flex-col items-center ${
        popular ? 'p-[1px]' : 'bg-[#181818] border border-[rgba(255,255,255,0.08)] overflow-hidden'
      }`}
      style={
        popular
          ? {
              background:
                'linear-gradient(180deg, #F9C924 0%, rgba(255,255,255,0.08) 15%, rgba(255,255,255,0.08) 85%, #F9C924 100%)',
              boxShadow: '0px 0px 40px rgba(249, 201, 36, 0.15)',
            }
          : {}
      }
    >
      {/* Inner background for popular card to cover the gradient center */}
      {popular && (
        <div className='absolute inset-[1px] rounded-[23px] bg-[#181818] z-0 overflow-hidden'>
          {/* inner gradient area */}
          <div
            className='absolute top-[8px] left-[8px] right-[8px] h-[340px] rounded-[16px] pointer-events-none'
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          />
        </div>
      )}

      {/* inner gradient area for non-popular card */}
      {!popular && (
        <div
          className='absolute top-[8px] left-[8px] right-[8px] h-[340px] rounded-[16px] pointer-events-none z-0'
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        />
      )}

      {/* Header icon + popular badge */}
      <div className='flex items-center justify-between w-full px-[30px] pt-[30px] relative z-10'>
        {icon === 'external' && (
          <div className='w-[44px] h-[44px] rounded-full border border-white/10 flex items-center justify-center'>
            <ExternalLinkIcon size={20} className='text-[#F5C542]' />
          </div>
        )}
        {icon === 'lightning' && (
          <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#F9C924] to-[#FFD440] shadow-[0_0_15px_rgba(249,201,36,0.5)]'>
            <LightningIcon />
          </div>
        )}
        {icon === 'diamond' && (
          <div className='w-[44px] h-[44px] rounded-full border border-white/10 flex items-center justify-center'>
            <DiamondIcon />
          </div>
        )}

        {popular && (
          <div className='bg-[rgba(245,197,66,0.1)] rounded-[8px] px-[12px] py-[6px] flex items-center justify-center gap-[6px] border border-[rgba(245,197,66,0.15)]'>
            <StarIcon />
            <span className='text-[#f5c542] text-[12px] font-medium'>Most Popular</span>
          </div>
        )}
      </div>

      {/* Title & Badge */}
      <div className='flex items-center gap-[10px] w-full px-[30px] mt-[20px] relative z-10'>
        <h3 className='text-[20px] font-bold text-white'>{title}</h3>
        <div className='bg-[rgba(106,204,83,0.1)] rounded-[6px] px-[8px] py-[4px] flex items-center justify-center'>
          <span className='text-[#6acc53] text-[11px] font-bold uppercase tracking-wide'>
            {discount}
          </span>
        </div>
      </div>

      <p className='text-[15px] font-normal text-white/60 w-full px-[30px] mt-[8px] relative z-10'>
        {subtitle}
      </p>

      {/* Price section */}
      <div className='flex items-baseline gap-[6px] w-full px-[30px] mt-[20px] relative z-10'>
        <span className='text-[16px] font-normal text-white/50 line-through'>{oldPrice}</span>
        <span className='text-[28px] font-bold text-[#f5c542]'>{newPrice}</span>
        <span className='text-[14px] font-normal text-white/50'>/ {period}</span>
      </div>

      {/* Buttons (Pay + Add to Cart) */}
      <div className='flex items-center gap-[12px] w-full px-[30px] mt-[25px] relative z-10'>
        <button
          className={`flex-1 flex items-center justify-center gap-[8px] h-[46px] rounded-[24px] cursor-pointer ${
            popular
              ? ''
              : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]'
          }`}
          style={
            popular
              ? {
                  backgroundImage:
                    'linear-gradient(90deg, rgb(249, 201, 36) 0%, rgb(228, 175, 24) 31.98%, rgb(255, 249, 140) 68.02%, rgb(255, 212, 64) 100%)',
                }
              : {}
          }
        >
          <AppleLogo className={popular ? 'text-black' : 'text-white'} />
          <span className={`text-[16px] font-medium ${popular ? 'text-black' : 'text-white'}`}>
            Pay
          </span>
        </button>

        <button className='flex-1 flex items-center justify-center gap-[8px] h-[46px] rounded-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] cursor-pointer'>
          <ShoppingCart size={18} className='text-white' />
          <span className='text-[16px] font-medium text-white'>Add To Cart</span>
        </button>
      </div>

      <button className='flex items-center justify-center gap-[8px] w-full mt-[20px] mb-[25px] relative z-10 cursor-pointer text-white hover:text-white/80 transition-colors'>
        <span className='text-[14px] font-medium'>View Package</span>
        <ExternalLinkIcon size={14} className='opacity-80' />
      </button>

      {/* Feature divider */}
      <div className='flex items-center justify-center gap-[15px] w-full px-[30px] relative z-10'>
        <div className='flex-1 flex items-center'>
          <div className='w-[4px] h-[4px] rounded-full bg-white/20' />
          <div
            className='flex-1 h-px'
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }}
          />
        </div>
        <span className='text-[10px] font-semibold text-white/30 uppercase tracking-widest'>
          FEATURE
        </span>
        <div className='flex-1 flex items-center'>
          <div
            className='flex-1 h-px'
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1))' }}
          />
          <div className='w-[4px] h-[4px] rounded-full bg-white/20' />
        </div>
      </div>

      {/* Feature list */}
      <div className='flex flex-col gap-[12px] w-full px-[30px] mt-[25px] mb-[35px] relative z-10'>
        {features.map((feature, i) => (
          <div key={i} className='flex items-center gap-[10px]'>
            <CheckCircleIcon />
            <span className='text-[14px] font-normal text-white leading-tight'>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Main List Component                                                        */
/* ──────────────────────────────────────────────────────────────────────────── */

export function PremiumPackagesList() {
  const dailyFeatures = [
    'Access for 1 day',
    'All sport picks',
    'Expert analysis',
    'Email delivery',
  ];

  const weeklyFeatures = [
    '7 days of picks',
    'All sport picks',
    'Priority support',
    'Detailed analysis',
    'Win rate tracking',
  ];

  const monthlyFeatures = [
    '30+ days of picks',
    'All sport picks',
    'VIP analysis',
    'Direct expert access',
    'Custom strategies',
    'Phone support',
  ];

  return (
    <div className='w-full flex flex-col gap-[30px]'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[28px] font-bold italic uppercase tracking-tight text-white leading-none'>
          Featured <span className='font-bold italic'>Packages</span>
        </h2>
        <button className='flex items-center gap-[8px] text-[15px] font-medium text-white cursor-pointer'>
          <span>View All Packages</span>
          <div className='w-[24px] h-[24px] rounded-full border border-white/20 flex items-center justify-center'>
            <ExternalLinkIcon size={12} className='text-white' />
          </div>
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]'>
        <PackageCard
          title='Daily'
          oldPrice='$9.99'
          newPrice='$7.99'
          period='day'
          subtitle='Perfect for trying a single day'
          features={dailyFeatures}
          discount='20% OFF'
          icon='external'
        />
        <PackageCard
          title='Weekly'
          oldPrice='$49'
          newPrice='$34.30'
          period='Week'
          subtitle='Most popular for casual bettors'
          features={weeklyFeatures}
          discount='30% OFF'
          icon='lightning'
          popular
        />
        <PackageCard
          title='Monthly'
          oldPrice='$149'
          newPrice='$111.75'
          period='month'
          subtitle='Best value for serious bettors'
          features={monthlyFeatures}
          discount='25% OFF'
          icon='diamond'
        />
      </div>
    </div>
  );
}
