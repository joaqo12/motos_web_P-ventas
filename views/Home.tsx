
import React, { useState } from 'react';
import { View } from '../types';
import { RAFFLES, BUNDLES, WINNERS } from '../constants';
import Sidebar from '../components/Sidebar';

interface HomeProps {
  navigate: (view: View, params?: any) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (val: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ navigate, isSidebarOpen, setIsSidebarOpen }) => {
  const raffle = RAFFLES[0];

  return (
    <div className="w-full max-w-[520px] bg-white dark:bg-background-dark shadow-2xl min-h-screen flex flex-col relative border-x border-slate-200 dark:border-white/5 mx-auto selection:bg-accent-yellow selection:text-background-dark">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        navigate={navigate} 
      />

      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-xl text-white border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 bg-accent-yellow flex items-center justify-center rounded-xl shadow-lg shadow-accent-yellow/20 rotate-2">
            <span className="material-symbols-outlined text-background-dark font-black">motorcycle</span>
          </div>
          <div>
            <h1 className="text-[15px] font-black tracking-tighter uppercase leading-none">Gonza Mas</h1>
            <p className="text-[9px] text-accent-yellow font-bold uppercase tracking-[0.3em] mt-0.5">Motos VIP</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(View.MY_TICKETS)}
            className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-accent-yellow transition-colors"
          >
            <span className="material-symbols-outlined">confirmation_number</span>
          </button>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:text-accent-yellow transition-transform active:scale-90"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Hero with dynamic lighting */}
      <div className="relative w-full aspect-[4/5] bg-black overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80 scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out" 
          style={{ backgroundImage: `url(${raffle.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,42,51,0.2),transparent_70%)]" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-[0.1em] shadow-lg shadow-primary/30">
               <span className="size-1.5 rounded-full bg-white animate-pulse" />
               Sorteo en Vivo
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter italic uppercase drop-shadow-2xl">
            {raffle.title}
          </h2>
          <div className="flex items-center gap-4">
             <div className="h-0.5 flex-1 bg-white/20 rounded-full" />
             <p className="text-accent-yellow font-black text-xs uppercase tracking-[0.2em] whitespace-nowrap">Exclusividad Extrema</p>
             <div className="h-0.5 flex-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Modernized Progress */}
      <div className="px-8 py-10 space-y-6">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">Oportunidad de Éxito</p>
            <h3 className="text-3xl font-black text-white italic leading-none">CUPOS COMPLETOS</h3>
          </div>
          <div className="text-right">
             <span className="text-4xl font-black text-accent-yellow italic">{raffle.progress}%</span>
          </div>
        </div>
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent-yellow rounded-full transition-all duration-1000 relative" 
            style={{ width: `${raffle.progress}%` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl group cursor-default">
          <span className="material-symbols-outlined text-primary text-2xl animate-bounce">rocket_launch</span>
          <p className="text-xs text-white/60 font-medium leading-relaxed italic">
             <span className="text-white font-black uppercase tracking-widest mr-1">¡Apurate!</span> 
             Estamos a punto de cerrar el sorteo. Cada segundo cuenta para ganar.
          </p>
        </div>
      </div>

      {/* Premium Bundles */}
      <div className="px-8 pb-16 space-y-8">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 text-center">Multiplicá tu suerte hoy</h4>
        <div className="grid grid-cols-1 gap-5">
          {BUNDLES.map(bundle => (
            <div 
              key={bundle.id}
              onClick={() => navigate(View.CHECKOUT, { bundleId: bundle.id })}
              className={`relative group border-2 ${bundle.popular ? 'border-accent-yellow bg-accent-yellow/5' : 'border-white/10 bg-white/5'} rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center justify-between transition-all hover:scale-[1.02] cursor-pointer overflow-hidden active:scale-95`}
            >
              {bundle.popular && (
                <div className="absolute top-0 right-10 bg-accent-yellow text-background-dark text-[10px] font-black px-6 py-1.5 rounded-b-xl uppercase tracking-widest shadow-xl">Más Ganador</div>
              )}
              <div className="space-y-1 mb-4 md:mb-0">
                <p className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">
                  {bundle.chances} <span className="text-lg text-white/40 not-italic">VECES</span>
                </p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.1em]">{bundle.label}</p>
              </div>
              <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                <p className="text-3xl font-black text-accent-yellow leading-none">${bundle.price.toLocaleString()}</p>
                <div className="size-10 bg-white rounded-full flex items-center justify-center text-background-dark group-hover:bg-accent-yellow transition-colors shadow-lg">
                   <span className="material-symbols-outlined font-black">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-auto bg-white/5 border-t border-white/5 p-10 space-y-8">
         <div className="flex justify-between items-center opacity-40">
            <span className="material-symbols-outlined text-3xl">verified</span>
            <span className="material-symbols-outlined text-3xl">security</span>
            <span className="material-symbols-outlined text-3xl">local_shipping</span>
            <span className="material-symbols-outlined text-3xl">payments</span>
         </div>
         <div className="text-center space-y-2">
            <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.4em]">Gonza Mas Motos SRL</p>
            <p className="text-[9px] text-white/10 font-medium">Sorteos realizados ante escribano público nacional. Prohibida la participación de menores de 18 años.</p>
         </div>
      </footer>

      <div className="sticky bottom-6 left-6 right-6 z-40">
         <button 
           onClick={() => navigate(View.CHECKOUT)}
           className="w-full bg-white text-background-dark py-5 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-sm shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-accent-yellow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
         >
           <span className="material-symbols-outlined font-black">confirmation_number</span>
           Quiero Mis Chances
         </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -250% 0; }
          100% { background-position: 250% 0; }
        }
      `}} />
    </div>
  );
};

export default Home;
