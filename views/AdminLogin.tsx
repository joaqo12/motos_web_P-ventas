
import React, { useState } from 'react';
import { View } from '../types';

interface AdminLoginProps {
  onLogin: () => void;
  navigate: (view: View) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de autenticación (Cualquier credencial es válida para el test)
    setTimeout(() => {
      onLogin();
      navigate(View.ADMIN_ORDERS);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0505] font-spline p-6 overflow-hidden relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-accent-yellow/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] aspect-square bg-primary/5 blur-[120px] rounded-full animate-pulse" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12">
          <div className="size-16 bg-accent-yellow rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 shadow-2xl shadow-accent-yellow/20">
            <span className="material-symbols-outlined text-black text-4xl font-black">motorcycle</span>
          </div>
          <h1 className="text-white text-3xl font-black uppercase tracking-tight italic">Gonza Mas Motos</h1>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mt-2 text-center flex items-center justify-center gap-2">
            <span className="size-1 bg-accent-yellow rounded-full animate-ping" />
            Admin Control Center
          </p>
        </div>

        <div className="bg-surface-dark/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group">
          {/* Badge de Modo Prueba */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-yellow text-black text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-accent-yellow/20">
            Test Mode Active
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 px-1">Usuario / Email</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Cualquier usuario para test"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent-yellow/50 transition-all text-white placeholder:text-white/10"
                  required
                />
                <span className="material-symbols-outlined absolute right-5 top-4 text-white/10">account_circle</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 px-1">Contraseña</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Cualquier contraseña"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent-yellow/50 transition-all text-white placeholder:text-white/10"
                  required
                />
                <span className="material-symbols-outlined absolute right-5 top-4 text-white/10">lock</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent-yellow text-sm">info</span>
              <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                Entorno de pruebas: no se requiere validación de base de datos.
              </p>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent-yellow text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-accent-yellow/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <div className="size-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">login</span>
                  Ingresar al Panel
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <button 
            onClick={() => navigate(View.HOME)}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-white transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Volver a la tienda
          </button>
          <p className="text-[8px] text-white/10 font-medium uppercase tracking-widest">v1.2.0-beta • Testing Build</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
