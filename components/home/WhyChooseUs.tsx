import Image from 'next/image';

export function WhyChooseUs() {
  const reasons = [
    {
      img: '/GSP!.png',
      title: 'Documented results since 1999',
      description: 'Over 25 years of verified performance and proven results.',
    },
    {
      img: '/chooseGSP2.png',
      title: 'Pay After You Win guarantee on individual picks',
      description: 'Only pay for eligible picks when they win.',
    },
    {
      img: '/chooseGSP3.png',
      title: 'Package satisfaction guarantee',
      description: 'Backed by a satisfaction-first approach for members.',
    },
    {
      img: '/chooseGSP4.png',
      title: 'Transparent documented record',
      description: 'Every result tracked, recorded, and publicly documented.',
    },
  ];

  return (
    <div className='w-full mb-[80px]'>
      <div className='mb-[30px]'>
        <h2 className='text-[30px] font-bold uppercase tracking-tight text-white leading-[40px] font-montserrat'>
          WHY <span className='italic font-black'>CHOOSE GSP</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
        {reasons.map((reason, i) => (
          <div
            key={i}
            className='bg-black border border-white/20 border-l-[#f5c542] rounded-[24px] relative overflow-hidden flex flex-col h-[249px] p-[20px] hover:border-white/30 hover:border-l-[#f5c542] transition-colors'
          >
            {/* Inner text content */}
            <div className='relative z-10 flex flex-col'>
              <h3 className='text-[18px] font-semibold mb-[5px] leading-[28px] text-white max-w-[225px]'>
                {reason.title}
              </h3>
              <p className='text-[16px] text-white/70 font-normal leading-[26px] max-w-[150px]'>
                {reason.description}
              </p>
            </div>

            {/* Background Image */}
            <div className='absolute bottom-0 right-0 w-[200px] h-[150px] pointer-events-none'>
              <Image src={reason.img} alt='' fill className='object-contain object-right-bottom' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
