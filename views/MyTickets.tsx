
import React from 'react';
import { View } from '../types';

interface MyTicketsProps {
  navigate: (view: View) => void;
}

const MyTickets: React.FC<MyTicketsProps> = ({ navigate }) => {
  const participations = [
    { id: '1', raffle: 'Honda XR 250', date: '24 Oct 2024', chances: 8, status: 'APPROVED', amount: 10000 },
    { id: '2', raffle: 'Kawasaki Ninja H2R', date: 'Justo ahora', chances: 3, status: 'PENDING', amount: 5000 },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'APPROVED': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'PENDING': return 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20';
      default: return 'bg-white/10 text-white/40 border-white/10';
    }
  };

  return (
    <div className="w-full max-w-[520px] bg-white dark:bg-background-dark shadow-2xl min-h-screen flex flex-col relative border-x border-slate-200 dark:border-white/5 mx-auto">
      <header className="sticky top-0 z-50 bg-background-dark text-white border-b border-white/10 px-6 py-6 flex items-center justify-between backdrop-blur-md">
        <button onClick={() => navigate(View.HOME)} className="text-white hover:text-accent-yellow flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest">
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Volver
        </button>
        <h1 className="text-xs font-black uppercase tracking-[0.2em]">Mis Participaciones</h1>
        <div className="size-8" />
      </header>

      <main className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Total Invertido</p>
              <p className="text-xl font-black text-white">$15.000</p>
           </div>
           <div className="bg-accent-yellow/10 p-4 rounded-2xl border border-accent-yellow/20">
              <p className="text-[10px] uppercase font-bold text-accent-yellow tracking-widest mb-1">Chances Totales</p>
              <p className="text-xl font-black text-accent-yellow">11</p>
           </div>
        </div>

        <h3 className="text-xs font-black uppercase tracking-widest text-white/30 px-2">Historial Reciente</h3>
        
        <div className="space-y-4">
          {participations.map(p => (
            <div key={p.id} className="bg-surface-dark border border-white/10 rounded-3xl overflow-hidden group hover:border-accent-yellow/30 transition-all">
               <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h4 className="text-white font-black text-lg italic uppercase tracking-tighter leading-none">{p.raffle}</h4>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">{p.date}</p>
                     </div>
                     <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(p.status)}`}>
                        {p.status === 'APPROVED' ? 'Confirmado' : 'Pendiente'}
                     </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                     <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent-yellow">confirmation_number</span>
                        <p className="text-white font-black">{p.chances} Chances</p>
                     </div>
                     <p className="text-white/60 text-sm font-bold">${p.amount.toLocaleString()}</p>
                  </div>
               </div>
               
               {p.status === 'APPROVED' && (
                 <div className="px-6 py-3 bg-green-500/10 border-t border-green-500/20 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-green-500">verified</span>
                    <p className="text-[10px] font-bold text-green-500/80 uppercase tracking-widest">Tus números han sido asignados vía WhatsApp</p>
                 </div>
               )}
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-center gap-4 mt-12">
           <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">support_agent</span>
           </div>
           <div>
              <p className="text-white font-black text-sm">¿Dudas con tu pago?</p>
              <p className="text-white/40 text-xs mt-1 leading-relaxed">Si pasaron más de 24hs y tu estado sigue pendiente, contactanos.</p>
           </div>
        </div>
      </main>

      <footer className="mt-auto p-12 text-center">
         <button className="text-accent-yellow font-black uppercase text-xs tracking-widest hover:underline decoration-2 underline-offset-8 transition-all">
            Contactar Soporte WhatsApp
         </button>
      </footer>
    </div>
  );
};

export default MyTickets;
