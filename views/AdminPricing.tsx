
import React, { useState } from 'react';
import { View, PricingBundle } from '../types';
import AdminSidebar from '../components/AdminSidebar';

interface AdminPricingProps {
  navigate: (view: View) => void;
}

const AdminPricing: React.FC<AdminPricingProps> = ({ navigate }) => {
  const [bundles, setBundles] = useState<PricingBundle[]>([
    { id: '1', chances: 10, price: 50, label: '', popular: true },
    { id: '2', chances: 25, price: 100, label: 'Mejor Valor', popular: false },
  ]);

  const updateBundle = (id: string, field: keyof PricingBundle, value: any) => {
    setBundles(prev => prev.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0d0d0d] text-white font-spline">
      <AdminSidebar currentView={View.ADMIN_PRICING} navigate={navigate} />

      <main className="flex-1 flex flex-col min-w-0">
        <header className="px-10 py-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest">
            <span>Dashboard</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-white">Pricing Bundles</span>
          </div>
          <button className="bg-accent-yellow text-black font-black px-6 py-2 rounded-lg text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-lg">save</span>
            Guardar Cambios
          </button>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-10 flex gap-10">
          {/* Editor Area */}
          <div className="flex-1 space-y-8 max-w-2xl">
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight">Configuración de Paquetes</h2>
              <p className="text-white/40 mt-2 leading-relaxed">
                Manage and preview your motorcycle raffle ticket bundles and promotional combos.
              </p>
            </div>

            <div className="space-y-6">
              {bundles.map((bundle, idx) => (
                <div key={bundle.id} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 relative group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-accent-yellow/10 rounded-lg flex items-center justify-center text-accent-yellow">
                        <span className="material-symbols-outlined">sell</span>
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-tight">Bundle Tier #{idx + 1}</h3>
                    </div>
                    <button className="text-white/20 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 px-1">Nombre del Combo</label>
                      <input 
                        type="text" 
                        value={bundle.id === '1' ? 'Super Combo' : 'Mega Pack'} 
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-accent-yellow/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 px-1">Etiqueta (Opcional)</label>
                      <input 
                        type="text" 
                        placeholder="Ej: Más Popular"
                        value={bundle.label}
                        onChange={(e) => updateBundle(bundle.id, 'label', e.target.value)}
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-accent-yellow/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 px-1">Cantidad de Números</label>
                      <div className="relative">
                        <input 
                          type="number" 
                          value={bundle.chances}
                          onChange={(e) => updateBundle(bundle.id, 'chances', parseInt(e.target.value))}
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-accent-yellow/50 transition-colors"
                        />
                        <span className="material-symbols-outlined absolute right-4 top-3 text-white/20">confirmation_number</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 px-1">Precio ($)</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          value={bundle.price.toFixed(2)}
                          onChange={(e) => updateBundle(bundle.id, 'price', parseFloat(e.target.value))}
                          className="w-full bg-black/40 border border-white/5 rounded-xl pl-8 pr-4 py-3 outline-none focus:border-accent-yellow/50 transition-colors"
                        />
                        <span className="absolute left-4 top-3.5 text-white/20 text-sm">$</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-12 h-6 rounded-full relative transition-all ${bundle.popular ? 'bg-accent-yellow' : 'bg-white/10'}`}>
                        <div className={`size-4 bg-white rounded-full absolute top-1 transition-all ${bundle.popular ? 'left-7' : 'left-1'}`} />
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={bundle.popular} 
                          onChange={(e) => updateBundle(bundle.id, 'popular', e.target.checked)}
                        />
                      </div>
                      <span className="text-sm font-bold text-white/60 group-hover:text-white">Resaltar como recomendado</span>
                    </label>
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">ID: BDL-0923-{bundle.id === '1' ? 'A' : 'B'}</p>
                  </div>
                </div>
              ))}

              <button className="w-full border-2 border-dashed border-white/5 rounded-2xl py-8 text-white/20 font-bold flex flex-col items-center justify-center gap-2 hover:border-accent-yellow/30 hover:text-accent-yellow transition-all">
                <span className="material-symbols-outlined text-4xl">add_circle</span>
                <span className="text-xs uppercase tracking-widest">Añadir Nuevo Paquete</span>
              </button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex-1 flex flex-col items-center justify-start sticky top-0">
            <div className="relative w-[340px] aspect-[9/18.5] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#222] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#222] rounded-b-3xl z-50 flex items-end justify-center pb-1">
                <div className="w-12 h-1 bg-white/10 rounded-full" />
              </div>

              {/* App Content Preview */}
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-background-dark p-5 pt-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[8px] font-black uppercase text-accent-yellow tracking-widest">Rifa Activa</p>
                    <h4 className="text-white font-black italic uppercase text-lg tracking-tighter leading-none">Sorteo 2024</h4>
                  </div>
                  <div className="size-8 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm text-white/40">notifications</span>
                  </div>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-gradient-to-t from-black to-white/5 flex items-center justify-center p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1614165933026-0750fbd50e0e?auto=format&fit=crop&q=80&w=600" 
                    className="w-full object-contain" 
                    alt="Preview Bike" 
                  />
                </div>

                <p className="text-[10px] font-black uppercase text-white/60 mb-4 tracking-widest">Elegí tu combo</p>

                <div className="space-y-3 mb-8">
                  {bundles.map(b => (
                    <div key={b.id} className={`p-4 rounded-xl border relative ${b.popular ? 'border-accent-yellow bg-accent-yellow/5 ring-4 ring-accent-yellow/10' : 'border-white/5 bg-white/5'}`}>
                      {b.popular && (
                        <div className="absolute -top-2 -right-2 bg-accent-yellow text-black text-[7px] font-black px-2 py-0.5 rounded shadow-lg uppercase tracking-widest">Popular</div>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-black text-xs uppercase italic">{b.id === '1' ? 'Super Combo' : 'Mega Pack'}</p>
                          <p className="text-white/40 text-[8px] font-bold uppercase">{b.chances} Números</p>
                        </div>
                        <p className="text-accent-yellow font-black text-lg leading-none">${b.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 border border-dashed border-white/10 rounded-xl flex items-center justify-center">
                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest italic">Siguiente paquete aquí...</p>
                  </div>
                </div>

                <button className="w-full bg-accent-yellow text-black py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-accent-yellow/20">
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">visibility</span>
              Vista previa en tiempo real
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <footer className="px-10 py-6 border-t border-white/5 bg-[#0a0505] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Todos los cambios sincronizados</p>
            </div>
            <div className="w-px h-4 bg-white/5" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Última edición: hace 2 minutos</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 border border-white/10 rounded-xl text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Descartar
            </button>
            <button className="px-10 py-3 bg-accent-yellow text-black rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-accent-yellow/10 hover:scale-105 transition-transform">
              Guardar Configuración
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminPricing;
