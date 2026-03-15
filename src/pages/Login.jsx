import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { supabase } from '../lib/supabaseClient';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      if (isLogin) {
        // Handle Sign In
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password: pwd,
        });
        if (error) throw error;
        
        // Show Transition Animation
        setRedirecting(true);
        setTimeout(() => {
          // Redirect to external App after 1.5s
          window.location.href = 'https://au-pair-go.vercel.app/';
        }, 1500);

      } else {
        // Handle Sign Up
        const { error } = await supabase.auth.signUp({
          email,
          password: pwd,
          options: {
            data: {
              full_name: fullName,
              phone: phone,
            }
          }
        });
        if (error) throw error;
        setSuccessMsg(t('Check your email for the confirmation link!', '¡Revisa tu correo para confirmar tu cuenta!'));
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false); // Only set to false on error, keep loading on success redirect
    } finally {
      if (!isLogin) {
        setLoading(false); // Only unlock on Signup
      }
    }
  };

  if (redirecting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg relative studio-lighting px-6 animate-page">
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
        <img src="/Icono fondo blanco png.png" alt="AuPairGo Logo" className="h-24 md:h-32 mb-8 animate-pulse" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 animate-fade-in-up">
          {t('Loading your Dashboard...', 'Cargando tu Tablero...')}
        </h2>
        <div className="w-48 h-2 bg-slate-200 mt-8 rounded-full overflow-hidden">
          <div className="w-full h-full bg-brand-purple rounded-full origin-left animate-page" style={{ animationDuration: '1.5s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg relative studio-lighting px-6 animate-page">
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-white rounded-[2rem] p-10 shadow-3d-light border border-slate-100 z-10 text-center">
        <img 
          src="/Icono fondo blanco png.png" 
          alt="Icon" 
          className="h-16 mx-auto mb-6" 
          onClick={() => navigate('/')} 
          style={{cursor: 'pointer'}}
        />

        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          {isLogin ? t('Welcome Back', '¡Hola de nuevo!') : t('Create Account', 'Crear Cuenta')}
        </h2>

        <form onSubmit={handleAuth} className="flex flex-col gap-5 text-left">
          
          {!isLogin && (
            <>
              <div>
                <label className="text-sm font-semibold text-slate-600 mb-2 block">{t('Full Name', 'Nombre Completo')}</label>
                <input 
                  type="text" 
                  required
                  value={fullName}
                  onChange={(e)=>setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-600 mb-2 block">{t('Phone Number', 'Celular')}</label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
            </>
          )}

          <div>
            <label className="text-sm font-semibold text-slate-600 mb-2 block">{t('Email', 'Correo')}</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600 mb-2 block">{t('Password', 'Contraseña')}</label>
            <input 
              type="password" 
              required
              value={pwd}
              onChange={(e)=>setPwd(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            />
          </div>

          {errorMsg && <p className="text-red-500 text-sm font-medium text-center">{errorMsg}</p>}
          {successMsg && <p className="text-green-500 text-sm font-medium text-center">{successMsg}</p>}
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-brand-purple hover:bg-[#8b7fcc] text-white font-bold rounded-xl shadow-md mt-4 smooth-transition flex justify-center items-center"
          >
            {loading ? '...' : isLogin ? t('Sign In', 'Ingresar') : t('Sign Up', 'Registrarse')}
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-500">
          {isLogin ? t("Don't have an account? ", "¿No tienes cuenta? ") : t("Already have an account? ", "¿Ya tienes cuenta? ")}
          <span 
            className="text-brand-purple font-bold cursor-pointer hover:underline"
            onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); setSuccessMsg(''); }}
          >
            {isLogin ? t('Sign Up', 'Regístrate aquí') : t('Sign In', 'Ingresa aquí')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
