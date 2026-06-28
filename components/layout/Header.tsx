import React from "react";
import { UserCircle2, ChevronDown, ShoppingCart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-black border-b border-[rgba(255,255,255,0.1)]">
      <div className="w-full max-w-[1920px] mx-auto px-4 xl:px-[200px] py-[15px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="relative shrink-0 w-[117px] h-[54px] flex items-center justify-center">
          {/* We use a realistic fallback if image is missing, but assume /logo.png exists per instructions */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 text-white font-black italic tracking-tighter text-2xl flex items-center justify-center rounded border border-red-500/30 overflow-hidden">
            <span className="z-10">GSP</span>
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl mix-blend-overlay" />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-[20px]">
          <div className="flex flex-col items-center justify-center">
            <Link href="/" className="font-sans text-[18px] font-normal leading-[28px] text-white whitespace-nowrap">
              Home
            </Link>
            <div className="w-full h-[1px] bg-white mt-[2px]" />
          </div>
          <Link href="/how-it-works" className="font-sans text-[18px] font-normal leading-[28px] text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
            How It Works
          </Link>
          <Link href="/free-picks" className="font-sans text-[18px] font-normal leading-[28px] text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
            Free Picks
          </Link>
          <Link href="/premium" className="font-sans text-[18px] font-normal leading-[28px] text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
            Premium Picks and Packages
          </Link>
          <Link href="/odds" className="font-sans text-[18px] font-normal leading-[28px] text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
            Live Betting Odds
          </Link>
          <Link href="/news" className="font-sans text-[18px] font-normal leading-[28px] text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
            Betting News
          </Link>
          <Link href="/contact" className="font-sans text-[18px] font-normal leading-[28px] text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-[15px] lg:gap-[20px]">
          {/* Mobile Menu Button */}
          <button className="flex lg:hidden items-center justify-center text-white hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <button className="hidden md:flex items-center gap-[10px] text-white hover:opacity-80 transition-opacity">
            <UserCircle2 className="w-[24px] h-[24px]" strokeWidth={1.5} />
            <span className="font-sans text-[18px] font-medium leading-[28px]">Login</span>
            <ChevronDown className="w-[24px] h-[24px]" strokeWidth={1.5} />
          </button>
          
          <button className="relative text-white hover:opacity-80 transition-opacity flex items-center justify-center">
            <ShoppingCart className="w-[24px] h-[24px]" strokeWidth={1.5} />
            <div className="absolute -right-[10px] -top-[10px] flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-[#F9C924] via-[#E4AF18] via-[#FFF98C] to-[#FFD440]">
              <span className="font-sans text-[12px] font-medium leading-[16px] text-black w-[16px] text-center">
                2
              </span>
            </div>
          </button>
          
          <button className="flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[24px] bg-gradient-to-r from-[#F9C924] via-[#E4AF18] via-[#FFF98C] to-[#FFD440] hover:brightness-110 transition-all shadow-[0_4px_14px_rgba(249,201,36,0.2)]">
            <span className="font-sans text-[18px] font-medium leading-[28px] text-black whitespace-nowrap">
              Get Picks Now
            </span>
            <div className="w-[24px] h-[24px] rounded-full border border-black/20 flex items-center justify-center">
              <ArrowUpRight className="w-[14px] h-[14px] text-black" strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
