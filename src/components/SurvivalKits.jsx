import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Users, Baby, Home, Car, Globe, Coffee } from 'lucide-react';

const Card = ({ title, icon: Icon, delay }) => {
  return (
    <div 
      className={`bg-brand-bg rounded-[2rem] p-8 shadow-3d-light hover:shadow-3d-light-hover smooth-transition flex flex-col items-center justify-center text-center gap-6 cursor-pointer transform hover:-translate-y-2`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-20 h-20 rounded-full bg-brand-gradient p-[2px] shadow-lg">
        <div className="w-full h-full bg-brand-bg rounded-full flex items-center justify-center">
          <Icon size={36} className="text-brand-purple" />
        </div>
      </div>
      <h3 className="font-bold text-xl text-slate-800">{title}</h3>
    </div>
  );
};

const SurvivalKits = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full mt-32 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-800 mb-16">
        {t('Our ', 'Nuestros ')}<span className="text-3d-gradient">{t('Survival Kits', 'Kits de Supervivencia')}</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <Card title={t('Au Pair Program', 'Programa Au Pair')} icon={Users} delay={100} />
        <Card title={t('Toddler/Kids Care', 'Cuidado de Niños')} icon={Baby} delay={200} />
        <Card title={t('Host Family', 'Familia Anfitriona')} icon={Home} delay={300} />
        <Card title={t('DMV & Driving', 'DMV y Conducir')} icon={Car} delay={400} />
        <Card title={t('Culture', 'Cultura')} icon={Globe} delay={500} />
        <Card title={t('Daily Life', 'Vida Diaria')} icon={Coffee} delay={600} />
      </div>
    </div>
  );
};

export default SurvivalKits;
