'use client';

import Image from 'next/image';

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Figma-sourced logo assets (served from localhost:3845 during dev)          */
/* ──────────────────────────────────────────────────────────────────────────── */

// bet365 logo (text + crown icon loaded separately from public)
const Bet365Logo = () => (
  <div className='relative flex items-center'>
    <Image src='/bet365Crown.svg' alt='bet365' width={90} height={30} className='object-contain' />
  </div>
);

// DraftKings
const DraftKingsLogo = () => (
  <Image src='/draftSung.png' alt='DraftKings' width={80} height={22} className='object-contain' />
);

// FanDuel
const FanduelLogo = () => (
  <Image src='/fanduelWithText.svg' alt='FanDuel' width={80} height={22} className='object-contain' />
);

// Caesars Sportsbook
const CaesarsLogo = () => (
  <Image src='/caesersTextlogo.svg' alt='Caesars Sportsbook' width={80} height={22} className='object-contain' />
);

// PointsBet – red italic POINTS + white BET
const PointsBetLogo = () => (
  <span className='font-extrabold italic tracking-tight text-[14px]' style={{ lineHeight: 1 }}>
    <span style={{ color: '#FF0030' }}>POINTS</span>
    <span style={{ color: '#ffffff' }}>BET</span>
  </span>
);

// Kalshi – teal wordmark SVG
const KalshiLogo = () => (
  <svg viewBox='0 0 78 20' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-[72px] h-[18px]'>
    <path d='M40.1024 0H36.0312V19.9986H40.1024V0Z' fill='#21C891' fillOpacity='0.9' />
    <path d='M0.414062 0.0234375H4.73567V8.99479L12.8152 0.0234375H18.0554L10.644 8.24717L18.5356 20.0013H13.358L7.59586 11.5699L4.73567 14.7472V20.0013H0.414062V0.0234375Z' fill='#21C891' />
    <path fillRule='evenodd' clipRule='evenodd' d='M34.4694 19.8119H32.4026C30.5445 19.8119 29.6259 19.0019 29.6677 17.4029C29.1248 18.2336 28.4568 18.8773 27.6843 19.3134C26.891 19.7496 25.9515 19.978 24.8241 19.978C23.1748 19.978 21.8387 19.6042 20.8157 18.8566C19.8136 18.0882 19.3125 17.0291 19.3125 15.6584C19.3125 14.1009 19.8971 12.8964 21.0453 12.0658C22.2145 11.2143 23.9055 10.7782 26.1185 10.7782H29.0622V10.0721C29.0622 9.40756 28.8117 8.88838 28.3106 8.4938C27.8096 8.09923 27.1415 7.89156 26.2855 7.89156C25.5339 7.89156 24.9285 8.05771 24.4483 8.36921C23.9681 8.70148 23.6759 9.13758 23.5924 9.67752H19.6465C19.7718 8.1823 20.4608 7.01934 21.6716 6.18866C22.8825 5.35798 24.4901 4.92188 26.4943 4.92188C28.582 4.92188 30.2105 5.37875 31.3378 6.2925C32.4861 7.20625 33.0707 8.53534 33.0707 10.259V15.43C33.0707 15.783 33.1542 16.0323 33.3003 16.1776C33.4464 16.3022 33.697 16.3853 34.031 16.3853H34.4694V19.8119ZM26.0768 13.4571C25.2417 13.4571 24.5736 13.6233 24.0934 13.9763C23.6341 14.3086 23.4045 14.7655 23.4045 15.3677C23.4045 15.8869 23.5924 16.2815 23.989 16.593C24.3857 16.9045 24.9285 17.0498 25.5966 17.0498C26.6613 17.0498 27.4964 16.7591 28.1019 16.1569C28.7073 15.5546 29.0622 13.7271V13.4571H26.0768Z' fill='#21C891' />
    <path d='M45.5134 14.9289C45.576 15.5727 45.8892 16.0919 46.4737 16.5072C47.0583 16.9018 47.789 17.1095 48.6867 17.1095C49.5427 17.1095 50.2316 16.9849 50.7327 16.7149C51.2337 16.4241 51.4843 16.0296 51.4843 15.5104C51.4843 15.1366 51.359 14.8458 51.1294 14.6589C50.8997 14.472 50.5657 14.3267 50.1481 14.2644C49.7306 14.1605 49.0416 14.0567 48.0813 13.9529C46.766 13.7867 45.6804 13.5583 44.8244 13.2883C43.9684 13.0183 43.2586 12.603 42.7576 12.0215C42.2356 11.4401 41.9851 10.6924 41.9851 9.73716C41.9851 8.78188 42.2356 7.9512 42.7576 7.22435C43.3004 6.47674 44.052 5.91603 45.0123 5.50069C45.9727 5.10611 47.0792 4.89844 48.3318 4.89844C50.3569 4.91921 51.9644 5.35532 53.1962 6.186C54.4488 7.01668 55.1169 8.17963 55.2213 9.67486H51.359C51.2964 9.11415 51.0041 8.67804 50.4613 8.325C49.9393 7.97196 49.2713 7.78506 48.4362 7.78506C47.6637 7.78506 47.0374 7.93043 46.5572 8.22117C46.0979 8.5119 45.8683 8.88571 45.8683 9.36335C45.8683 9.71639 45.9935 9.9656 46.2441 10.1317C46.4946 10.2979 46.8286 10.4225 47.2253 10.5055C47.622 10.5886 48.3109 10.6717 49.2504 10.7547C51.2546 10.9832 52.7787 11.4193 53.8225 12.0423C54.9081 12.6445 55.4301 13.7037 55.4301 15.2197C55.4301 16.1749 55.1378 17.0056 54.5741 17.7325C54.0104 18.4593 53.238 19.02 52.215 19.4146C51.2129 19.7884 50.0437 19.9961 48.7285 19.9961C46.6825 19.9961 44.9914 19.5392 43.7179 18.6462C42.4235 17.7325 41.7554 16.4864 41.6719 14.9289H45.5134Z' fill='#21C891' />
    <path d='M69.7521 6.72852C68.6248 5.6694 67.2051 5.12946 65.4514 5.12946C63.6351 5.12946 62.1737 5.794 61.0672 7.12309V0H56.9961V19.9986H61.0672V12.4602C61.0672 11.1934 61.3386 10.2174 61.9231 9.5113C62.5077 8.80522 63.3219 8.45218 64.3658 8.45218C65.3679 8.45218 66.1195 8.78445 66.6205 9.42823C67.1216 10.0512 67.3721 10.965 67.3721 12.1902V19.9986H71.4432V12.0241C71.4432 9.55283 70.8795 7.78763 69.7521 6.72852Z' fill='#21C891' />
    <path d='M73.0078 5.29688H77.0789V19.9792H73.0078V5.29688Z' fill='#21C891' fillOpacity='0.9' />
    <path d='M76.4748 0.581477C76.099 0.20767 75.6188 0 75.0342 0C74.4706 0 73.9695 0.20767 73.5728 0.581477C73.197 0.955283 72.9883 1.41216 72.9883 1.97287C72.9883 2.53358 73.197 3.01122 73.5728 3.38503C73.9695 3.75883 74.4706 3.9665 75.0342 3.9665C75.5979 3.9665 76.099 3.7796 76.4748 3.38503C76.8506 2.99045 77.0593 2.53358 77.0593 1.97287C77.0593 1.41216 76.8506 0.934516 76.4748 0.581477Z' fill='#21C891' />
  </svg>
);

// Fanatics – red logo mark
const FanaticsLogo = () => (
  <svg viewBox='0 0 96 20' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-[80px] h-[18px]'>
    <path d='M51.6678 9.54793C53.9847 9.54793 55.5585 11.3439 55.5585 14.0161V18.9879C55.5585 19.0537 55.4929 19.1194 55.4273 19.1194H53.1541C53.0885 19.1194 53.023 19.0537 53.023 18.9879V14.038C53.023 13.0085 52.5202 11.8915 51.0995 11.8915H51.0557C49.9847 11.9134 49.0667 12.8771 49.0667 13.9723V18.9879C49.0667 19.0537 49.0011 19.1194 48.9355 19.1194H46.6842C46.6186 19.1194 46.553 19.0537 46.553 18.9879V9.78886C46.553 9.72315 46.6186 9.65744 46.6842 9.65744H48.87C48.9355 9.65744 49.0011 9.72315 49.0011 9.78886V10.5993C49.8317 9.87647 50.6842 9.54793 51.6678 9.54793ZM35.9519 7.35767V5.14551C35.9519 5.0579 35.8864 4.99219 35.7989 4.99219H27.6022C27.5148 4.99219 27.4492 5.0579 27.4492 5.14551V18.9441C27.4492 19.0318 27.5148 19.0975 27.6022 19.0975H29.8099C29.8973 19.0975 29.9629 19.0318 29.9629 18.9441V13.3152C29.9629 13.2276 30.0285 13.1619 30.1159 13.1619H34.247C34.3345 13.1619 34.4 13.0961 34.4 13.0085V10.7745C34.4 10.6869 34.3345 10.6212 34.247 10.6212H30.1159C30.0285 10.6212 29.9629 10.5554 29.9629 10.4678V7.68621C29.9629 7.5986 30.0285 7.53289 30.1159 7.53289H35.7771C35.8864 7.53289 35.9519 7.44528 35.9519 7.35767ZM23.6018 2.32235L21.2411 6.00199C21.1974 6.0677 21.0881 6.1115 21.0225 6.0677C15.5799 3.32987 9.28485 8.36747 3.73295 7.16283C3.68923 7.14093 3.64551 7.11902 3.6018 7.07522C3.62366 7.07522 0.935135 2.95753 0.0389613 1.57767C-0.0703282 1.40245 0.0608192 1.16152 0.301256 1.18342C0.78213 1.29293 2.88049 1.75289 4.49797 1.8843C12.9133 2.34426 17.4816 -2.71524 23.5799 2.08143C23.6455 2.12523 23.6673 2.23474 23.6018 2.32235ZM16.7384 12.8575C16.7821 12.8794 16.8258 12.8575 16.8695 12.8137L19.7111 8.36747C19.7548 8.30176 19.7111 8.23606 19.6455 8.21415C15.5143 6.79048 11.6455 9.52831 5.74387 9.68163C5.59087 9.68163 5.43786 9.85685 5.54715 10.054L11.9078 19.9101C11.9952 20.0854 12.2138 19.9758 12.192 19.8225L10.8149 13.5803C10.793 13.5146 10.8368 13.4708 10.8805 13.4489C11.4269 13.2956 15.0335 12.069 16.7384 12.8575Z' fill='#E53D2E' />
  </svg>
);

// BetMGM – gold/white serif wordmark
const BetMGMLogo = () => (
  <div className='flex items-center gap-[1px]'>
    <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 13, color: '#C9A84C', letterSpacing: '0.03em' }}>BET</span>
    <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 13, color: '#ffffff', letterSpacing: '0.03em' }}>MGM</span>
  </div>
);

// BetRivers – white wordmark SVG  
const BetRiversLogo = () => (
  <svg viewBox='0 0 99 20' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-[84px] h-[18px]'>
    <path d='M37.95 13.0022C37.6478 12.5948 37.5842 12.1927 37.6213 11.7641C37.6796 11.1345 37.9553 10.6001 38.3477 10.1186C38.7878 9.57892 39.3234 9.14506 39.9385 8.82231C40.4211 8.57363 40.9195 8.3567 41.4286 8.17151C42.0331 7.94929 42.6482 7.75881 43.1996 7.42019C43.5072 7.22971 43.8147 7.01278 44.0587 6.74823C44.5836 6.19268 44.7321 5.51014 44.573 4.77469C44.4617 4.26146 44.1382 3.8858 43.6875 3.62125C43.3693 3.43077 43.014 3.31966 42.6482 3.28791C40.84 3.12389 39.387 3.75352 38.3583 5.27204C37.791 6.11331 37.4834 7.05511 37.2925 8.04453C37.0327 9.4149 37.038 10.7959 37.1334 12.1821C37.2183 13.4096 37.3827 14.6265 37.6054 15.8329C37.616 15.8858 37.6054 15.9387 37.6054 15.9916C37.3455 16.0657 33.9625 16.0763 33.5913 16.0022C33.5542 15.7906 33.5011 15.563 33.4746 15.3355C33.2148 13.3461 33.0769 11.3461 33.2042 9.34082C33.3155 7.57363 33.6761 5.85405 34.5139 4.26675C35.7123 1.99691 37.6054 0.663575 40.1135 0.197967C41.5346 -0.0665835 42.961 -0.0824565 44.3768 0.250877C45.432 0.499554 46.3865 0.95458 47.1501 1.74294C48.1788 2.80643 48.5765 4.09215 48.4545 5.54188C48.3167 7.235 47.4311 8.45193 45.9676 9.27733C45.2677 9.67416 44.5147 9.93871 43.7352 10.1239C43.6026 10.1556 43.4489 10.1451 43.311 10.2932C43.4064 10.3355 43.4754 10.3832 43.5549 10.399C44.8488 10.6318 45.9888 11.2138 47.0387 11.9757C47.7811 12.5207 48.497 13.0974 49.2181 13.6689C50.109 14.3673 51.0157 15.0392 52.0391 15.5419C53.7253 16.3726 55.507 16.653 57.3735 16.4837C58.8318 16.3514 60.1998 15.9546 61.4672 15.2191C62.5966 14.563 63.5352 13.6953 64.267 12.6107C64.32 12.5313 64.3783 12.4519 64.442 12.362C64.7389 12.526 64.9245 12.7641 65.0783 13.0339C65.5873 13.9334 65.5449 14.8541 65.1419 15.78C64.7972 16.5683 64.2564 17.2085 63.6094 17.7588C62.5065 18.6953 61.218 19.272 59.8181 19.6107C58.3174 19.9757 56.8009 20.071 55.2578 19.9599C53.5928 19.8435 51.9967 19.4625 50.4854 18.7482C49.3136 18.198 48.2477 17.4784 47.2614 16.6477C46.4926 15.9969 45.7555 15.3038 44.9866 14.653C44.4245 14.1715 43.8466 13.6953 43.2474 13.2615C42.5315 12.7429 41.7414 12.3726 40.8612 12.2138C40.4158 12.1345 39.965 12.0816 39.5037 12.1503C38.8939 12.2403 38.3318 12.4096 37.9341 13.0022H37.95Z' fill='white' />
    <path d='M0.0521776 4.85193C0.163533 4.84135 0.248375 4.83077 0.338519 4.83077C1.99294 4.83077 3.64736 4.82019 5.30178 4.84135C6.14489 4.85193 6.98271 4.97363 7.7728 5.30167C8.09626 5.43395 8.41442 5.60855 8.70076 5.8149C9.96278 6.73024 9.84613 8.80961 8.61592 9.62971C8.32427 9.82548 7.9849 9.94717 7.66675 10.1059C7.60312 10.1376 7.53418 10.1694 7.46525 10.2593C7.5766 10.2911 7.68796 10.3228 7.79931 10.3493C8.19171 10.4498 8.55228 10.6085 8.89165 10.8255C10.3605 11.762 10.2597 13.7514 9.30526 14.7091C8.74318 15.2699 8.04854 15.5715 7.30087 15.7673C6.40472 16.0001 5.48737 16.053 4.55941 16.053C3.17012 16.053 1.78614 16.053 0.396848 16.053C0.290796 16.053 0.179441 16.0424 0.046875 16.0318V4.85723L0.0521776 4.85193Z' fill='white' />
    <path d='M84.758 11.7118C85.6701 13.1563 86.5609 14.569 87.4783 16.0134C87.351 16.024 87.2715 16.0399 87.1866 16.0399C86.1314 16.0399 85.0762 16.0346 84.021 16.0452C83.7877 16.0452 83.6604 15.9658 83.5543 15.7648C82.9923 14.7224 82.4196 13.6854 81.8575 12.6431C81.7514 12.4473 81.6348 12.3468 81.3962 12.3573C80.9454 12.3785 80.4894 12.3626 79.9963 12.3626V15.9711C79.6675 16.0558 77.3768 16.0611 77.0586 15.9923V4.84941C77.1276 4.83883 77.223 4.82296 77.3185 4.82296C78.7926 4.82296 80.272 4.81238 81.7461 4.83354C82.7271 4.84941 83.6922 5.00285 84.6096 5.35206C85.1451 5.55312 85.633 5.82825 86.0413 6.23566C86.5927 6.78592 86.8685 7.45788 86.9056 8.22507C86.9268 8.69068 86.895 9.15629 86.7465 9.60074C86.4761 10.4156 85.9299 11.0081 85.2035 11.4473C85.0709 11.5267 84.9383 11.6007 84.758 11.7066V11.7118Z' fill='white' />
    <path d='M75.9019 4.84652V7.39678H69.7827V9.01583C69.9258 9.02641 70.0743 9.04758 70.2228 9.04758C71.7871 9.04758 73.3513 9.04758 74.9156 9.04758H75.361V11.6137C74.9898 11.6455 74.624 11.6243 74.2634 11.6296H69.7827V13.4391C70.297 13.4761 70.8061 13.455 71.3098 13.455H75.9231V15.9788C75.711 16.0476 67.1844 16.0635 66.8291 15.9947V4.83594H75.8966L75.9019 4.84652Z' fill='white' />
    <path d='M20.2396 13.4653V16.0262H11.1403V4.85156H20.1283C20.2237 5.07378 20.2502 6.93093 20.1548 7.38066H14.0514V9.01558C14.237 9.02616 14.4014 9.04733 14.5605 9.04733C16.1036 9.04733 17.6466 9.04733 19.1897 9.04733H19.6563V11.624H14.0674V13.4336C14.7726 13.4865 15.4566 13.4494 16.1407 13.46H20.2449L20.2396 13.4653Z' fill='white' />
    <path d='M57.9466 15.0027C56.5573 11.6271 55.1733 8.2567 53.7734 4.84929H57.1088C58.058 7.40484 58.8321 9.5477 59.6116 11.6853C59.7177 11.9445 59.776 12.0662 59.9881 12.0503C60.2904 11.0927 60.5343 10.4048 60.7835 9.71701C61.335 8.19849 61.8865 6.67998 62.4432 5.16675L62.5758 4.82812H65.8952C65.768 5.18791 64.9143 7.26728 64.0605 9.34135L63.2068 11.4207C63.053 11.7382 62.947 11.881C61.7963 13.4895 60.2426 14.5054 58.3178 14.9551L57.9466 15.0027Z' fill='white' />
    <path d='M31.624 4.87522V7.38845H28.0713V15.981C27.7849 16.0604 25.4995 16.0816 25.0435 16.0128V7.43607H21.4695C21.4536 6.54718 21.4642 5.72179 21.4695 4.90697C21.7399 4.82761 31.2263 4.80644 31.6293 4.88581L31.624 4.87522Z' fill='white' />
    <path d='M52.8595 14.3542C51.6558 13.7405 50.8551 13.1161 50.0597 12.4759C49.9272 12.3701 49.9219 12.2378 49.9219 12.0949V4.85156H52.8595V14.3542Z' fill='white' />
    <path d='M87.9981 12.4252C89.5305 13.2506 90.8032 13.5839 92.1606 13.6051C93.6189 13.531 94.0325 13.4411 94.2127 13.3406C94.5892 12.7056 94.2552 12.4623 93.7779 12.2347C93.0462 12.0496 92.3144 11.8749 91.5826 11.7162C90.9198 11.5734 89.6472 11.1342 89.6472 11.1342C88.4753 10.5998 87.892 9.67918 87.8867 8.40405C87.9079 7.6686 87.9875 7.31939 88.189 6.43579C88.751 5.81146 89.5305 5.3723 90.1987 4.99664C90.9304 4.80617 91.6781 4.71622 93.1575 4.53632C94.6264 4.64743 96.0634 5.04955 97.0921 5.41463V8.36172C95.2839 7.36172 93.6136 7.08659 91.8584 7.32468C91.1743 7.5522 90.8085 7.75855 90.8085 8.15537C91.1584 8.38288 91.7046 8.61569 92.3939 8.77971C93.7779 9.08659 94.3877 9.24003 95.5914 9.61569C97.1769 10.4834 97.6382 12.3776 97.6382 12.3776C96.7633 15.2083 95.3051 15.7691 93.0303 16.2083C91.4183 16.2771 89.8434 16.0443 88.3056 15.5681C87.9769 15.4675 87.9769 15.4623 87.9769 15.1342V12.4199L87.9981 12.4252Z' fill='white' />
    <path d='M37.6875 9.98844C37.8201 9.12072 37.8837 8.68686 37.9632 8.25829C38.1329 7.34294 38.414 6.46993 38.9442 5.68686C39.4745 4.90908 40.1744 4.35882 41.0918 4.10485C42.1099 3.96728 42.5765 3.98844 43.0166 4.09426C43.3825 4.40114 43.6583 4.62866 43.8332 5.27945C43.8438 5.81384 43.6476 6.253 43.2234 6.59162C42.8682 6.87733 42.4705 7.07839 42.0569 7.24241C41.638 7.40643 41.2137 7.544 40.7895 7.70273C40.1108 7.96199 39.4692 8.28474 38.8965 8.74506C38.4723 9.08897 38.0905 9.47522 37.7617 9.90908L37.6875 9.98844Z' fill='#FDB71A' />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Icons                                                                      */
/* ──────────────────────────────────────────────────────────────────────────── */

const StarIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8 1.5L9.79611 5.59549L14.2798 6.09217L11.0401 9.10451L11.9459 13.5078L8 11.25L4.05413 13.5078L4.95987 9.10451L1.72022 6.09217L6.20389 5.59549L8 1.5Z'
      fill='#4CAF50'
      stroke='#4CAF50'
      strokeWidth='0.5'
    />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                       */
/* ──────────────────────────────────────────────────────────────────────────── */

const tabs = ['NFL', 'NBA', 'MLB', 'NHL', 'NCAAF'];

interface OddsEntry {
  book: string;
  v1: string;
  v2: string;
  best: boolean;
}
interface Match {
  t1: { name: string; record: string; bg: string };
  t2: { name: string; record: string; bg: string };
  time: [string, string];
  odds: OddsEntry[];
}

const matches: Match[] = [
  {
    t1: { name: 'BUF', record: '5-1', bg: 'bg-[#0F3F73]' },
    t2: { name: 'NYJ', record: '2-4', bg: 'bg-[#0F5535]' },
    time: ['Today', '8:20 PM ET'],
    odds: [
      { book: 'bet365', v1: '+3.5', v2: '+4.5', best: true },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
      { book: 'kalshi', v1: '+52.5', v2: '-2.3', best: false },
      { book: 'fanatics', v1: '+1.5', v2: '-2.5', best: false },
      { book: 'betmgm', v1: '+56.2', v2: '-2.2', best: false },
      { book: 'betrivers', v1: '+4.5', v2: '-5.5', best: false },
    ],
  },
  {
    t1: { name: 'KCC', record: '5-1', bg: 'bg-[#B4170C]' },
    t2: { name: 'DB', record: '2-4', bg: 'bg-[#184A8C]' },
    time: ['Today', '4:05 PM ET'],
    odds: [
      { book: 'bet365', v1: '+3.5', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: true },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
      { book: 'kalshi', v1: '+52.5', v2: '-2.3', best: false },
      { book: 'fanatics', v1: '+1.5', v2: '-2.5', best: false },
      { book: 'betmgm', v1: '+56.2', v2: '-2.2', best: false },
      { book: 'betrivers', v1: '+4.5', v2: '-5.5', best: false },
    ],
  },
  {
    t1: { name: 'DC', record: '5-1', bg: 'bg-[#5A2C7B]' },
    t2: { name: 'NYG', record: '2-4', bg: 'bg-[#1A3A6A]' },
    time: ['Today', '1:00 PM ET'],
    odds: [
      { book: 'bet365', v1: '-105', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: true },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
      { book: 'kalshi', v1: '+52.5', v2: '-2.3', best: false },
      { book: 'fanatics', v1: '+1.5', v2: '-2.5', best: false },
      { book: 'betmgm', v1: '+56.2', v2: '-2.2', best: false },
      { book: 'betrivers', v1: '+4.5', v2: '-5.5', best: false },
    ],
  },
  {
    t1: { name: 'GBP', record: '5-1', bg: 'bg-[#1A4F1A]' },
    t2: { name: 'CB', record: '2-4', bg: 'bg-[#C07020]' },
    time: ['Today', '7:20 PM ET'],
    odds: [
      { book: 'bet365', v1: '-105', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: true },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: false },
      { book: 'kalshi', v1: '+52.5', v2: '-2.3', best: false },
      { book: 'fanatics', v1: '+1.5', v2: '-2.5', best: false },
      { book: 'betmgm', v1: '+56.2', v2: '-2.2', best: false },
      { book: 'betrivers', v1: '+4.5', v2: '-5.5', best: false },
    ],
  },
  {
    t1: { name: 'GBP', record: '5-1', bg: 'bg-[#1A4F1A]' },
    t2: { name: 'CB', record: '2-4', bg: 'bg-[#C07020]' },
    time: ['Today', '7:20 PM ET'],
    odds: [
      { book: 'bet365', v1: '-105', v2: '+4.5', best: false },
      { book: 'dk', v1: '-3.5', v2: '-4.5', best: false },
      { book: 'fd', v1: '+105', v2: '+100', best: false },
      { book: 'caesars', v1: '+15', v2: '+13.2', best: false },
      { book: 'pointsbet', v1: '+4.5', v2: '+5.5', best: true },
      { book: 'kalshi', v1: '+52.5', v2: '-2.3', best: false },
      { book: 'fanatics', v1: '+1.5', v2: '-2.5', best: false },
      { book: 'betmgm', v1: '+56.2', v2: '-2.2', best: false },
      { book: 'betrivers', v1: '+4.5', v2: '-5.5', best: false },
    ],
  },
];

/* Sportsbook column configuration */
const BOOKS = [
  { key: 'bet365', logo: <Bet365Logo />, highlight: true },
  { key: 'dk', logo: <DraftKingsLogo />, highlight: false },
  { key: 'fd', logo: <FanduelLogo />, highlight: false },
  { key: 'caesars', logo: <CaesarsLogo />, highlight: false },
  { key: 'pointsbet', logo: <PointsBetLogo />, highlight: false },
  { key: 'kalshi', logo: <KalshiLogo />, highlight: false },
  { key: 'fanatics', logo: <FanaticsLogo />, highlight: false },
  { key: 'betmgm', logo: <BetMGMLogo />, highlight: false },
  { key: 'betrivers', logo: <BetRiversLogo />, highlight: false },
];

/* ──────────────────────────────────────────────────────────────────────────── */
/*  Component                                                                  */
/* ──────────────────────────────────────────────────────────────────────────── */

export function LiveBettingLines() {
  /* Exact pixel widths from Figma node dimensions */
  const MATCHUP_W = 240; // px
  const TIME_W = 138;    // px
  const BOOK_W = 138;    // px

  return (
    <div className='w-full'>
     {/* Custom scrollbar styles injected once */}
<style dangerouslySetInnerHTML={{
  __html: `
    .lbl-scroll::-webkit-scrollbar { 
      width: 6px;
      height: 6px;
    }
    .lbl-scroll::-webkit-scrollbar-track {
      background: rgba(255,255,255,0.10);
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.10);
      margin: 0 4px;
    }
    .lbl-scroll::-webkit-scrollbar-thumb {
      background: #ffffff;
      border-radius: 14px;
    }
    .lbl-scroll::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.85);
    }
  `
}} />

      {/* ── Section Header ──────────────────────────────── */}
      <div className='flex items-center justify-between mb-5'>
        <h2
          className='text-[28px] font-black uppercase tracking-tight text-white leading-none'
          style={{ fontFamily: 'inherit' }}
        >
          LIVE <em>BETTING LINES</em>
        </h2>

        {/* View All CTA – matches Figma: text + circular arrow icon */}
        <button className='group flex items-center gap-2 text-white text-[15px] font-semibold cursor-pointer hover:opacity-80 transition-opacity'>
          <span className='text-lg'>View All</span>
          <div className='flex items-center justify-center transition-colors group-hover:border-white/60'>
            {/* Circular arrow icon from Figma Icon node 2345:23118 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4.93299 4.93225C6.33148 3.53375 8.11328 2.58135 10.0531 2.19551C11.9928 1.80966 14.0035 2.00768 15.8307 2.76454C17.6579 3.5214 19.2197 4.8031 20.3185 6.44756C21.4173 8.09202 22.0037 10.0254 22.0038 12.0032C22.0035 13.6665 21.5885 15.3035 20.7963 16.766C20.004 18.2285 18.8595 19.4704 17.4664 20.3792C16.0733 21.288 14.4755 21.835 12.8177 21.9707C11.1599 22.1064 9.49448 21.8266 7.9721 21.1565C7.91304 21.1308 7.85963 21.0936 7.81495 21.0472C7.77026 21.0008 7.73518 20.9461 7.71172 20.8861C7.68825 20.8261 7.67687 20.7621 7.67822 20.6977C7.67956 20.6333 7.69361 20.5698 7.71957 20.5108C7.74552 20.4518 7.78286 20.3986 7.82944 20.3541C7.87603 20.3096 7.93094 20.2748 7.99103 20.2516C8.05112 20.2283 8.1152 20.2172 8.17959 20.2188C8.24399 20.2205 8.30743 20.2348 8.36628 20.261C11.7989 21.772 15.7307 21.0345 18.383 18.3822C21.9004 14.8648 21.9005 9.14166 18.383 5.62412C14.8654 2.10658 9.14227 2.10672 5.62486 5.62412C2.97257 8.27642 2.23511 12.2082 3.74614 15.6408C3.77234 15.6997 3.78666 15.7631 3.78827 15.8275C3.78989 15.8919 3.77877 15.956 3.75556 16.0161C3.73234 16.0762 3.69749 16.1311 3.653 16.1777C3.60851 16.2243 3.55526 16.2616 3.49631 16.2875C3.43735 16.3135 3.37385 16.3275 3.30944 16.3289C3.24504 16.3302 3.18101 16.3189 3.12102 16.2954C3.06103 16.2719 3.00626 16.2368 2.95986 16.1922C2.91347 16.1475 2.87635 16.0941 2.85064 16.035C2.03861 14.19 1.80294 12.1428 2.17452 10.1615C2.54611 8.18033 3.5076 6.35759 4.93299 4.93225Z" fill="white" stroke="white" stroke-width="0.5" />
              <path d="M15.8621 8.14119C15.8003 8.07898 15.7267 8.02966 15.6456 7.99607C15.5645 7.96249 15.4776 7.94531 15.3899 7.94553L12.267 7.94555C12.1379 7.94655 12.0145 7.99852 11.9235 8.09016C11.8326 8.1818 11.7815 8.30567 11.7815 8.43478C11.7815 8.56388 11.8326 8.68775 11.9235 8.7794C12.0144 8.87104 12.1379 8.92303 12.267 8.92402L14.3874 8.924L4.93038 18.3811C4.83862 18.4728 4.78708 18.5972 4.78708 18.727C4.78708 18.8568 4.83862 18.9812 4.93037 19.073C5.02213 19.1647 5.14657 19.2163 5.27633 19.2162C5.40608 19.2162 5.53052 19.1647 5.62228 19.073L15.0793 9.6159L15.0793 11.7363C15.0803 11.8654 15.1323 11.9889 15.2239 12.0798C15.3156 12.1708 15.4394 12.2218 15.5686 12.2218C15.6977 12.2218 15.8215 12.1708 15.9132 12.0798C16.0048 11.9889 16.0568 11.8654 16.0578 11.7363L16.0577 8.61351C16.058 8.52575 16.0409 8.43882 16.0073 8.35775C15.9737 8.27667 15.9244 8.20306 15.8621 8.14119Z" fill="white" stroke="white" stroke-width="0.5" />
            </svg>
          </div>
        </button>
      </div>

      {/* ── Top Card Section: Tabs + Live badge (no scroll) ───── */}
      <div
        style={{
          background: '#111213',
          border: '1px solid rgba(255,255,255,0.10)',
          borderBottom: 'none',
          borderRadius: '24px 24px 0 0',
        }}
      >
        <div className='flex items-center justify-between px-5 py-4'>
          <div className='flex items-center gap-2'>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`text-[12px] font-bold uppercase px-4 py-[7px] rounded-full transition-colors cursor-pointer ${i === 0
                  ? 'bg-[#2a2a2a] text-white border border-white/15'
                  : 'text-white/50 hover:text-white/80 border border-transparent hover:border-white/10'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className='flex items-center gap-[6px] text-[#4CAF50] text-[13px] font-medium'>
            <span className='w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse shadow-[0_0_6px_#4CAF50]' />
            Live odds
          </div>
        </div>
      </div>

      {/* ── Bottom Card Section: Table with scroll ───────────── */}
      {/*
        overflow-x-auto is on THIS div (outside the card border).
        The card's bottom rounded border is on the inner container.
        The scrollbar therefore renders BELOW the card — outside the
        card border — not inside the table content area.
      */}
      <div
        className='overflow-x-auto lbl-scroll'
        style={{ paddingBottom: 14 }}
      >
        <div
          style={{
            minWidth: `${MATCHUP_W + TIME_W + BOOK_W * BOOKS.length}px`,
            background: '#111213',
            border: '1px solid rgba(255,255,255,0.10)',
            borderTop: 'none',
            borderRadius: '0 0 24px 24px',
          }}
        >

          {/* Table Header Row */}
          {/*
              Node 2345:23127 "Bg" (rounded-tl-[24px] rounded-tr-[24px]):
              background: rgba(255,255,255,0.10), border: rgba(255,255,255,0.10)
              Height: 68px (from design "Bg" height = 136 / 2 for the visible header area)
            */}
          <div
            className='flex items-stretch rounded-t-3xl bg-white/10'
            style={{
              height: 68,
              borderTop: '1px solid rgba(255,255,255,0.10)',
              borderBottom: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            {/* MATCHUP header */}
            {/*
                Node 2345:23129 "Bg" – rounded-bl-[24px] rounded-tl-[24px], 
                background: rgba(255,255,255,0.10), border: rgba(255,255,255,0.10)
                Width: 240px
              */}
            <div
              className='flex items-center pl-5 shrink-0 rounded-tl-3xl' // <-- Added rounded-tl-lg here
              style={{
                width: MATCHUP_W,
                background: 'rgba(255,255,255,0.06)',
                borderRight: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <span className='text-lg font-bold text-white uppercase tracking-widest'>
                Matchup
              </span>
            </div>

            {/* TIME (ET) header */}
            <div
              className='flex items-center pl-4 shrink-0'
              style={{
                width: TIME_W,
                borderRight: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <span className='text-lg font-bold text-white uppercase tracking-widest'>
                Time (ET)
              </span>
            </div>

            {/* Sportsbook Logo Headers */}
            {BOOKS.map((book) => (
              <div
                key={book.key}
                className='flex items-center justify-center shrink-0'
                style={{
                  width: BOOK_W,
                  background: book.highlight
                    ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), rgba(106, 204, 83, 0.10)'
                    : 'transparent',
                  ...(book.highlight
                    ? {
                      border: '1px solid rgba(255, 255, 255, 0.20)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
                      borderRadius: '10px 10px 0 0',
                    }
                    : {
                      borderRight: '1px solid rgba(255,255,255,0.10)',
                    }),
                }}
              >
                {book.logo}
              </div>
            ))}
          </div>

          {/* Table Body Rows */}
          {/*
              Node 2345:23128 "Bg" – background: rgba(255,255,255,0.10), 
              border: rgba(255,255,255,0.10), rounded-[24px]
              Node 2345:23129 "Bg" (matchup side panel) – same styling but 
              rounded-bl-[24px] rounded-tl-[24px], width: 240px
            */}
          {matches.map((match, rowIdx) => {
            const isLast = rowIdx === matches.length - 1;
            return (
              <div
                key={rowIdx}
                className='flex items-stretch transition-colors hover:bg-white/[0.02]'
                style={{ height: 84 }}
              >
                {/* Matchup Cell */}
                <div
                  className={`flex items-center justify-between px-4 shrink-0 ${isLast ? 'rounded-bl-3xl' : ''}`}
                  style={{
                    width: MATCHUP_W,
                    background: 'rgba(255,255,255,0.10)',
                    borderRight: '1px solid rgba(255,255,255,0.10)',
                    borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Team 1 */}
                  <div className='flex items-center gap-[8px]'>
                    <div
                      className={`w-[38px] h-[38px] rounded-full ${match.t1.bg} flex items-center justify-center shrink-0 overflow-hidden`}
                    >
                      <Image src='/h1.svg' alt={match.t1.name} width={22} height={22} className='object-contain' />
                    </div>
                    <div>
                      <div className='text-[14px] font-bold text-white leading-tight'>{match.t1.name}</div>
                      <div className='text-[11px] text-white/45'>{match.t1.record}</div>
                    </div>
                  </div>

                  <span className='text-[11px] font-bold italic text-white/25 shrink-0'>VS</span>

                  {/* Team 2 */}
                  <div className='flex items-center gap-[8px]'>
                    <div className='text-right'>
                      <div className='text-[14px] font-bold text-white leading-tight'>{match.t2.name}</div>
                      <div className='text-[11px] text-white/45'>{match.t2.record}</div>
                    </div>
                    <div
                      className={`w-[38px] h-[38px] rounded-full ${match.t2.bg} flex items-center justify-center shrink-0 overflow-hidden`}
                    >
                      <Image src='/h2.svg' alt={match.t2.name} width={22} height={22} className='object-contain' />
                    </div>
                  </div>
                </div>

                {/* Time Cell */}
                <div
                  className='flex flex-col justify-center pl-4 shrink-0'
                  style={{
                    width: TIME_W,
                    borderRight: '1px solid rgba(255,255,255,0.10)',
                    borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className='text-[13px] font-semibold text-white'>{match.time[0]}</div>
                  <div className='text-[12px] text-white/50'>{match.time[1]}</div>
                </div>

                {/* Odds Cells */}
                {match.odds.map((odd, colIdx) => {
                  const book = BOOKS[colIdx];
                  return (
                    <div
                      key={colIdx}
                      className='flex items-center justify-center shrink-0 relative'
                      style={{
                        width: BOOK_W,
                        background: book.highlight
                          ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), rgba(106, 204, 83, 0.10)'
                          : 'transparent',
                        ...(book.highlight
                          ? {
                            borderLeft: '1px solid rgba(255, 255, 255, 0.20)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.20)',
                            borderBottom: isLast
                              ? '1px solid rgba(255, 255, 255, 0.20)'
                              : '1px solid rgba(255, 255, 255, 0.08)',
                            ...(isLast && {
                              borderRadius: '0 0 10px 10px',
                              paddingBottom: 6,
                            }),
                          }
                          : {
                            borderRight: '1px solid rgba(255,255,255,0.10)',
                            borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.08)',
                          }),
                      }}
                    >
                      {/* Best Line badge */}
                      {odd.best && (
                        <div
                          className='absolute top-[6px] left-0 right-0 flex items-center justify-center gap-[3px]'
                          style={{ pointerEvents: 'none' }}
                        >
                          {/* Star icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M10.303 13.2237C9.99387 13.2237 9.5972 13.1245 9.10137 12.8329L7.3572 11.8004C7.17637 11.6954 6.82637 11.6954 6.65137 11.8004L4.90137 12.8329C3.86887 13.4454 3.2622 13.2004 2.98804 13.002C2.7197 12.8037 2.2997 12.2962 2.57387 11.1295L2.98804 9.3387C3.0347 9.15203 2.94137 8.8312 2.80137 8.6912L1.3547 7.24453C0.631371 6.5212 0.689704 5.90286 0.788871 5.59953C0.888037 5.2962 1.20304 4.75953 2.20637 4.59036L4.0672 4.2812C4.2422 4.25203 4.49304 4.06536 4.56887 3.90786L5.60137 1.8487C6.06804 0.909531 6.68054 0.769531 7.00137 0.769531C7.3222 0.769531 7.9347 0.909531 8.40137 1.8487L9.42804 3.90203C9.5097 4.05953 9.76054 4.2462 9.93554 4.27536L11.7964 4.58453C12.8055 4.7537 13.1205 5.29036 13.2139 5.5937C13.3072 5.89703 13.3655 6.51536 12.648 7.2387L11.2014 8.6912C11.0614 8.8312 10.9739 9.1462 11.0147 9.3387L11.4289 11.1295C11.6972 12.2962 11.283 12.8037 11.0147 13.002C10.8689 13.107 10.6355 13.2237 10.303 13.2237Z" fill="#6ACC53" />
                          </svg>
                          <span className='text-[#4CAF50] text-xs font-bold leading-none'>Best Line</span>
                        </div>
                      )}

                      {/* Odds buttons */}
                      <div className='flex items-center gap-[6px]'>
                        <button
                          className='flex items-center justify-center text-white text-[12px] font-semibold cursor-pointer transition-all hover:scale-[1.04]'
                          style={{
                            width: 50,
                            height: 38,
                            borderRadius: 999,
                            background: 'rgba(255,255,255,0.10)',
                            border: '1px solid rgba(255,255,255,0.12)',
                          }}
                        >
                          {odd.v1}
                        </button>
                        <button
                          className='flex items-center justify-center text-white text-[12px] font-semibold cursor-pointer transition-all hover:scale-[1.04]'
                          style={{
                            width: 50,
                            height: 38,
                            borderRadius: 999,
                            background: 'rgba(255,255,255,0.10)',
                            border: '1px solid rgba(255,255,255,0.12)',
                          }}
                        >
                          {odd.v2}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
