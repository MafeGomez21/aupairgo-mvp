import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-10">
        <img 
          src="/Logotipo completo png grande.png" 
          alt="AuPairGo Logo" 
          className="h-10 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 hover:text-red-500 font-medium transition-colors"
        >
          <LogOut size={20} />
          {t('Sign Out', 'Cerrar Sesión')}
        </button>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="bg-brand-purple rounded-[2rem] p-10 md:p-16 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[50px] pointer-events-none"></div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('Welcome to AuPairGo', 'Bienvenida a AuPairGo')}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {t(
              "You are in! This is the core platform where the intelligence behind your journey lives. (App features pending implementation).",
              "¡Estás dentro! Esta es la plataforma principal donde vive la inteligencia detrás de tu viaje. (Funcionalidades de la App pendientes de implementación)."
            )}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
