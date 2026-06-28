import React from "react";
import { TopMarquee } from "@/components/layout/TopMarquee";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ActivePromotions } from "@/components/home/ActivePromotions";
import { PremiumPick } from "@/components/home/PremiumPick";
import { FeaturedPackage } from "@/components/home/FeaturedPackage";
import { TopSportsbooks } from "@/components/home/TopSportsbooks";
import { Newsletter } from "@/components/home/Newsletter";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { TodayFeaturedPicks } from "@/components/home/TodayFeaturedPicks";

import { PremiumPackagesList } from "@/components/home/PremiumPackagesList";
import { LiveBettingLines } from "@/components/home/LiveBettingLines";
import { RecommendedSportsbooks } from "@/components/home/RecommendedSportsbooks";
import { FreePicksBanner } from "@/components/home/FreePicksBanner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F8FAFC] font-sans selection:bg-primary selection:text-black">
      <TopMarquee />
      <Header />
      <HeroSection />
      
      <div className="w-full max-w-[1520px] mx-auto px-4 xl:px-0 py-[60px] flex flex-col xl:flex-row gap-[30px]">
        
        {/* Main Content Column (Left ~75%) */}
        <div className="flex-1 flex flex-col gap-[60px] min-w-0">
          <TodayFeaturedPicks />
          <PremiumPackagesList />
          <LiveBettingLines />
          <RecommendedSportsbooks />
          <FreePicksBanner />
          <WhyChooseUs />
          <Testimonials />
          <FAQSection />
        </div>

        {/* Sidebar Column (Right ~25%) */}
        <aside className="w-full xl:w-[370px] shrink-0 flex flex-col gap-[30px]">
          <ActivePromotions />
          <PremiumPick />
          <FeaturedPackage />
          <TopSportsbooks />
          <Newsletter />
          <FeaturedArticles />
        </aside>
      </div>

      <Footer />
    </main>
  );
}
