import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { ShieldAlert, HeartCrack } from 'lucide-react';

const TheAbyss = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full mt-32 bg-brand-lavender/80 py-24 rounded-[3rem] shadow-inner px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
          {t('The Abyss', 'El Abismo')}
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mx-auto">
          {t(
            "Academic English doesn't prepare you for the reality of living abroad. We solve the critical gaps that lead to early program termination.",
            "El inglés académico no te prepara para la realidad de vivir en el extranjero. Resolvemos las brechas críticas que llevan a la terminación prematura del programa."
          )}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto">
        {/* Safety Gap Card */}
        <div className="bg-white rounded-[2rem] p-10 shadow-xl flex-1 flex flex-col items-center text-center transform hover:-translate-y-2 smooth-transition">
          <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-6 shadow-sm border border-red-100">
            <ShieldAlert size={40} className="text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('Safety Gap', 'Brecha de Seguridad')}</h3>
          <p className="text-slate-600 font-medium leading-relaxed">
            {t(
              "Emergencies don't wait for translation apps. Learn the critical survival context needed to protect yourself and your host kids.",
              "Las emergencias no esperan a las aplicaciones de traducción. Aprende el contexto crítico de supervivencia necesario para protegerte a ti y a tus niños anfitriones."
            )}
          </p>
        </div>

        {/* Cultural Burnout Card */}
        <div className="bg-white rounded-[2rem] p-10 shadow-xl flex-1 flex flex-col items-center text-center transform hover:-translate-y-2 smooth-transition">
          <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 shadow-sm border border-purple-100">
            <HeartCrack size={40} className="text-brand-purple" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('Cultural Burnout', 'Agotamiento Cultural')}</h3>
          <p className="text-slate-600 font-medium leading-relaxed">
            {t(
              "Misunderstandings breed resentment. Navigate cultural nuances and family dynamics with confidence and emotional intelligence.",
              "Los malentendidos crían resentimiento. Navega por los matices culturales y las dinámicas familiares con confianza e inteligencia emocional."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheAbyss;
