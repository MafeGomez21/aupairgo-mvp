import React, { useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const { t } = useLanguage();

  // Wompi Widget Integration logic (Simulation for MVP structure)
  const openWompiWidget = (priceInCents, reference, currency = "COP") => {
    // Assuming Wompi widget script is loaded in production. 
    // This is the structure for the integration as requested.
    const checkout = new window.WidgetCheckout({
      currency: currency,
      amountInCents: priceInCents,
      reference: reference,
      publicKey: 'pub_test_XXXXX', // Placeholder
      redirectUrl: 'https://aupairgo.com/dashboard' 
    });
    // In a real environment, you'd call checkout.open()
    alert(`Wompi Widget Open \nAmount: $${priceInCents / 100} ${currency}\nRef: ${reference}\n(Widget requires Wompi script and correct public key)`);
  };

  return (
    <div className="w-full mt-32 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
          {t('Choose Your Path', 'Elige tu camino')}
        </h2>
        <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium">
          {t(
            'Start for free on the waitlist with 30 tokens, or guarantee your premium access today.', 
            'Comienza gratis en la lista de espera con 30 tokens, o garantiza tu acceso premium hoy.'
          )}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        
        {/* Starter Plan */}
        <div className="bg-white rounded-[2rem] p-10 w-full md:w-96 shadow-3d-light border border-slate-100 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-slate-700 mb-2">Starter</h3>
          <div className="text-5xl font-extrabold text-brand-purple mb-6">$12.99<span className="text-lg text-slate-400 font-medium">/mo</span></div>
          
          <ul className="w-full flex flex-col gap-4 text-slate-600 font-medium mb-10">
            <li className="flex items-center gap-3"><Check size={20} className="text-brand-cyan" /> {t('500 AI Interactions', '500 Interacciones con IA')}</li>
            <li className="flex items-center gap-3"><Check size={20} className="text-brand-cyan" /> {t('All Survival Kits', 'Todos los Kits de Supervivencia')}</li>
            <li className="flex items-center gap-3"><Check size={20} className="text-brand-cyan" /> {t('Standard Support', 'Soporte Estándar')}</li>
          </ul>

          <button 
            onClick={() => openWompiWidget(129900, "SUB_STARTER", "COP")}
            className="w-full py-4 bg-brand-purple/10 hover:bg-brand-purple/20 text-brand-purple font-bold rounded-xl smooth-transition"
          >
            {t('Subscribe to Starter', 'Suscribir a Starter')}
          </button>
        </div>

        {/* Unlimited Plan */}
        <div className="bg-brand-purple rounded-[2rem] p-10 w-full md:w-96 shadow-xl border-2 border-brand-gold relative flex flex-col items-center transform md:-translate-y-4">
          <div className="absolute -top-5 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wider">
            {t('Most Popular', 'Más Popular')}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">Unlimited</h3>
          <div className="text-5xl font-extrabold text-white mb-6">$19.99<span className="text-lg text-white/70 font-medium">/mo</span></div>
          
          <ul className="w-full flex flex-col gap-4 text-white/90 font-medium mb-10">
            <li className="flex items-center gap-3"><Check size={20} className="text-brand-gold" /> {t('Unlimited AI 24/7', 'IA Ilimitada 24/7')}</li>
            <li className="flex items-center gap-3"><Check size={20} className="text-brand-gold" /> {t('Live Translation Prompts', 'Prompts de Traducción en Vivo')}</li>
            <li className="flex items-center gap-3"><Check size={20} className="text-brand-gold" /> {t('Priority Support', 'Soporte Prioritario')}</li>
          </ul>

          <button 
            onClick={() => openWompiWidget(199900, "SUB_UNLIM", "COP")}
            className="w-full py-4 bg-brand-cyan hover:bg-[#2bc4cf] text-white font-bold rounded-xl shadow-lg border-metallic smooth-transition hover:scale-105"
          >
            {t('Get Unlimited', 'Obtener Unlimited')}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;
