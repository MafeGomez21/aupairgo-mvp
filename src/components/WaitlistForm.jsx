import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { supabase } from '../lib/supabaseClient';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';

const WaitlistForm = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ name, email }]);

      if (error) throw error;
      
      setStatus('success');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Waitlist Error:', error);
      setStatus('error');
      setErrorMsg(error.message || 'Something went wrong.');
    }
  };

  return (
    <div id="waitlist-section" className="w-full mt-32 max-w-lg mx-auto px-6 mb-32">
      <div className="bg-white rounded-[2rem] p-10 shadow-3d-light border border-slate-100 flex flex-col items-center">
        
        <div className="w-16 h-16 bg-brand-lavender/20 rounded-full flex items-center justify-center mb-6 text-brand-purple">
          <Sparkles size={32} />
        </div>
        
        <h3 className="text-3xl font-extrabold text-slate-800 text-center mb-8">
          {t('Join the Waitlist', 'Únete a la Lista de Espera')}
        </h3>

        {status === 'success' ? (
          <div className="flex flex-col items-center text-center py-6 animate-pulse">
            <CheckCircle2 size={64} className="text-brand-cyan mb-4" />
            <h4 className="text-xl font-bold text-slate-800">{t("You're on the list!", "¡Estás en la lista!")}</h4>
            <p className="text-slate-500 mt-2">{t("We'll contact you soon.", "Te contactaremos pronto.")}</p>
          </div>
        ) : (
          <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                {t('Name', 'Nombre')}
              </label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple smooth-transition"
                placeholder={t('Maria Rodriguez', 'María Rodríguez')}
              />
            </div>
            
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                {t('Email', 'Correo electrónico')}
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple smooth-transition"
                placeholder="maria@example.com"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
            )}

            <p className="text-base md:text-lg text-brand-gold font-bold text-center mt-3 flex items-center justify-center gap-2">
              <Sparkles size={16} />
              {t("Get 30 free tokens when we launch!", "¡Obtén 30 tokens gratis en el lanzamiento!")}
              <Sparkles size={16} />
            </p>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="mt-2 w-full py-4 bg-brand-cyan hover:bg-[#2bc4cf] text-white font-bold rounded-xl shadow-md smooth-transition flex justify-center items-center gap-2 border-metallic text-lg"
            >
              {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : t('Reserve My Spot', 'Reservar Mi Lugar')}
            </button>
          </form>
        )}

        {/* App Store Promo */}
        <div className="mt-12 flex flex-col items-center gap-4 w-full border-t border-slate-100 pt-10 opacity-90 hover:opacity-100 smooth-transition animate-fade-in-up">
          <p className="text-lg md:text-xl font-black text-brand-lavender uppercase tracking-[0.15em] text-center">
            {t("GET READY FOR THE APP", "PREPÁRATE PARA LA APLICACIÓN")}
          </p>
          <img 
            src="/Icono fondo App png.png" 
            alt="AuPairGo App Icon" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl rounded-3xl mb-1 transform hover:scale-105 smooth-transition"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <p className="text-sm md:text-base font-bold text-slate-400">
            {t("Google Play & App Store", "Google Play y App Store")}
          </p>
        </div>

      </div>
    </div>
  );
};

export default WaitlistForm;
