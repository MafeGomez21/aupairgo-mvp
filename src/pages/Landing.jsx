import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TheAbyss from '../components/TheAbyss';
import SurvivalKits from '../components/SurvivalKits';
import PricingSection from '../components/PricingSection';
import WaitlistForm from '../components/WaitlistForm';
import { useScrollReveal } from '../lib/useScrollReveal';

const Landing = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col items-center studio-lighting relative bg-brand-bg animate-page">
      {/* Background ambient lights */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>

      <Navbar />
      
      <div className="w-full max-w-7xl mx-auto">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <HeroSection />
        </div>
        
        <div className="reveal-hidden">
          <TheAbyss />
        </div>
        
        <div className="reveal-hidden" style={{ transitionDelay: '0.1s' }}>
          <SurvivalKits />
        </div>
        
        <div className="reveal-hidden" style={{ transitionDelay: '0.1s' }}>
          <PricingSection />
        </div>
        
        <div className="reveal-hidden" style={{ transitionDelay: '0.2s' }}>
          <WaitlistForm />
        </div>
      </div>

      <footer className="w-full py-8 text-center text-slate-400 font-medium border-t border-slate-100 mt-20 reveal-hidden">
        <p>&copy; {new Date().getFullYear()} AuPairGo. The intelligence behind your journey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
