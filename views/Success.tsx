
import React from 'react';
import { View } from '../types';

interface SuccessProps {
  navigate: (view: View) => void;
}

const Success: React.FC<SuccessProps> = ({ navigate }) => {
  return (
    <div className="w-full max-w-[600px] flex flex-col items-center justify-center min-h-screen px-6 py-12 text-white dark:bg-background-dark mx-auto">
      {/* Success Icon */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-accent-yellow bg-background-dark">
          <span className="material-symbols-outlined text-accent-yellow text-6xl font-bold">check</span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-center text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase italic">
        ¡TODO LISTO!
      </h1>

      {/* Body Message */}
      <p className="text-center text-lg leading-relaxed text-zinc-400 mb-10 px-4">
        Gracias por participar en <span className="text-accent-yellow font-semibold italic">Gonza Mas Motos</span>. Estamos verificando tu pago. Recibirás tus números por WhatsApp en breve.
      </p>

      {/* Summary Card */}
      <div className="w-full bg-surface-dark border border-accent-yellow/30 rounded-xl p-6 mb-12 shadow-2xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-2">Resumen de Participación</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-zinc-400">ID de Orden</p>
            <p className="text-base font-bold">#GZM-12345</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-zinc-400">Sorteo</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-yellow text-sm">motorcycle</span>
              <p className="text-base font-bold">Honda XR 250</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-zinc-400">Estado</p>
            <span className="px-2 py-1 bg-accent-yellow/10 text-accent-yellow text-[10px] font-bold rounded uppercase tracking-tighter">Procesando</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 w-full">
        <button className="flex items-center justify-center gap-2 w-full h-14 bg-accent-yellow text-background-dark text-lg font-bold rounded-xl transition-all hover:scale-105 active:scale-95">
          <span className="material-symbols-outlined font-bold">chat</span>
          <span>Contactar Soporte</span>
        </button>
        <button 
          onClick={() => navigate(View.HOME)}
          className="flex items-center justify-center w-full h-14 border-2 border-zinc-800 text-white text-lg font-bold rounded-xl transition-all hover:border-accent-yellow hover:text-accent-yellow active:scale-95"
        >
          <span>Volver al Inicio</span>
        </button>
      </div>

      <footer className="w-full py-8 text-center text-zinc-500 text-xs mt-12">
        © 2024 Gonza Mas Motos. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Success;
