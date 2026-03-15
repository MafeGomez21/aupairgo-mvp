import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <nav className="w-full pt-6 pb-4 flex justify-between items-center sticky top-0 bg-brand-bg/90 backdrop-blur-md z-50 shadow-sm px-6 md:px-12 lg:px-24">
      <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
        {/* We assume the user drops the images in the public folder */}
        <img 
          src="/Logotipo completo png grande.png" 
          alt="AuPairGo Logo" 
          className="h-20 md:h-28 lg:h-36 object-contain drop-shadow-lg transform scale-125 origin-left"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/200x50?text=AuPairGo'; }}
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleLanguage}
          className="text-sm font-semibold text-brand-purple hover:text-brand-blue smooth-transition px-3 py-1 rounded-full border border-brand-purple/30 hover:bg-brand-purple/10"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
        
        <button 
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-brand-purple hover:bg-[#8b7fcc] text-white font-bold rounded-full shadow-md smooth-transition hover:-translate-y-0.5"
        >
          {t('Log In', 'Iniciar Sesión')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
