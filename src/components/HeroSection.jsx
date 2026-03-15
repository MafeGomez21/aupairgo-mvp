import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full flex flex-col items-center mt-12 md:mt-24 z-10 px-6 text-center">
      {/* Coming Soon Badge */}
      <div className="inline-flex items-center px-8 py-4 rounded-full border-4 border-brand-lavender bg-white shadow-3d-inner mb-10 uppercase tracking-[0.2em] text-xl md:text-2xl font-black text-brand-lavender gap-4 transform hover:scale-105 transition-transform duration-300">
        <Sparkles size={32} className="text-brand-gold" />
        {t('COMING SOON', 'PRÓXIMAMENTE')}
        <Sparkles size={32} className="text-brand-gold" />
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl pt-4">
        <span className="text-brand-purple">{t('The Intelligence Behind ', 'La inteligencia detrás de ')}</span>
        <br className="hidden md:block" />
        <span className="text-brand-purple">{t('Your Journey.', 'tu viaje.')}</span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium">
        {t(
          'Bridging the gap between academic English and real-world survival. Your AI-powered companion for a seamless Au Pair experience.',
          'Cerrando la brecha entre el inglés académico y la supervivencia del mundo real. Tu compañero impulsado por IA para una experiencia Au Pair sin fricciones.'
        )}
      </p>

      {/* CTA Button */}
      <button 
        onClick={scrollToWaitlist}
        className="px-10 py-5 bg-brand-cyan hover:bg-[#2bc4cf] text-white font-bold text-xl rounded-full border-metallic smooth-transition hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3"
      >
        {t('Welcome to the Team', 'Únete al Team')}
        <ArrowRight size={24} />
      </button>
    </main>
  );
};

export default HeroSection;
