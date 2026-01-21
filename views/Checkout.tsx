
import React, { useState } from 'react';
import { View } from '../types';
import { BUNDLES } from '../constants';

interface CheckoutProps {
  navigate: (view: View) => void;
  bundleId: string | null;
}

const Checkout: React.FC<CheckoutProps> = ({ navigate, bundleId }) => {
  const [file, setFile] = useState<File | null>(null);
  const bundle = BUNDLES.find(b => b.id === bundleId) || BUNDLES[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(View.SUCCESS);
  };

  return (
    <div className="w-full max-w-[520px] bg-white dark:bg-background-dark shadow-2xl min-h-screen flex flex-col relative border-x border-slate-200 dark:border-white/5 mx-auto font-display">
      <header className="sticky top-0 z-50 bg-background-dark text-white border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-accent-yellow flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-black font-bold">motorcycle</span>
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tighter uppercase leading-none">Gonza Mas</h1>
            <p className="text-[10px] text-accent-yellow font-bold uppercase tracking-[0.2em]">Motos</p>
          </div>
        </div>
        <button onClick={() => navigate(View.HOME)} className="text-white hover:text-accent-yellow">
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
      </header>

      <main className="flex-1 p-6">
        <div className="mb-8">
          <button 
            onClick={() => navigate(View.HOME)}
            className="flex items-center gap-2 text-slate-500 hover:text-accent-yellow transition-colors mb-4 text-sm font-bold uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Volver
          </button>
          <h2 className="text-3xl font-black italic tracking-tighter mb-2 dark:text-white">FINALIZAR COMPRA</h2>
          <p className="text-slate-500 text-sm">Completá tus datos y subí el comprobante de pago.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Combo Seleccionado</p>
            <p className="text-2xl font-black text-accent-yellow italic">{bundle.chances} CHANCES</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-white">${bundle.price.toLocaleString()}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Nombre Completo</label>
              <input 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow outline-none transition-all" 
                placeholder="Ej: Juan Pérez" 
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Número de WhatsApp</label>
              <input 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow outline-none transition-all" 
                placeholder="+54 9 11 1234 5678" 
                type="tel"
              />
            </div>
          </div>

          <div className="pt-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1 block mb-2">Subir Comprobante</label>
            <div className="relative border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-white/5 hover:border-accent-yellow/50 transition-colors cursor-pointer group overflow-hidden">
              <input 
                type="file" 
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <div className="size-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent-yellow/20 transition-colors">
                <span className="material-symbols-outlined text-white group-hover:text-accent-yellow transition-colors text-3xl">cloud_upload</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white">{file ? file.name : 'Sube tu imagen (JPG, PNG) o PDF'}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">Tamaño máximo 5MB</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex gap-3 items-start">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-xs text-white/70 leading-relaxed italic">
              Una vez enviado, nuestro equipo verificará el pago y te enviaremos tus números por WhatsApp en las próximas 24hs.
            </p>
          </div>

          <div className="h-20" /> {/* Spacer */}
          
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[520px] px-6 z-50">
            <button 
              type="submit"
              className="w-full bg-accent-yellow hover:bg-yellow-400 text-background-dark py-4 rounded-xl font-black uppercase tracking-widest shadow-2xl shadow-accent-yellow/20 transform active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined font-bold">send</span>
              Finalizar y Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
