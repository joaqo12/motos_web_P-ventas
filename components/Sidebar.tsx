
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, navigate }) => {
  const menuItems = [
    { view: View.HOME, label: 'Inicio', icon: 'home' },
    { view: View.MY_TICKETS, label: 'Mis Participaciones', icon: 'confirmation_number' },
    { view: View.WINNERS, label: 'Ganadores', icon: 'military_tech' },
    { view: View.ADMIN_LOGIN, label: 'Panel Admin', icon: 'admin_panel_settings', admin: true },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-background-dark z-[70] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) border-l border-white/10 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full shadow-[-20px_0_40px_rgba(0,0,0,0.5)]'}`}>
        <div className="p-8 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
             <div className="size-8 bg-accent-yellow flex items-center justify-center rounded-lg rotate-3 shadow-lg shadow-accent-yellow/20">
                <span className="material-symbols-outlined text-background-dark font-black text-xl">motorcycle</span>
             </div>
             <p className="text-white font-black uppercase text-xs tracking-tighter">Gonza Mas</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-accent-yellow transition-colors">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          {menuItems.map((item) => (
            <button 
              key={item.view}
              onClick={() => { navigate(item.view); onClose(); }}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all group ${item.admin ? 'bg-primary/5 hover:bg-primary/10 border border-primary/10' : 'hover:bg-white/5'}`}
            >
              <span className={`material-symbols-outlined ${item.admin ? 'text-primary' : 'text-accent-yellow'} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </span>
              <span className={`text-sm font-bold uppercase tracking-widest ${item.admin ? 'text-primary' : 'text-white'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-white/5">
           <div className="flex items-center gap-3 mb-6 p-3 bg-white/5 rounded-2xl border border-white/10">
              <img src="https://i.pravatar.cc/100" className="size-10 rounded-full border border-accent-yellow/30" alt="User" />
              <div>
                 <p className="text-white text-xs font-black">Lucas Gomez</p>
                 <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Mi Perfil</p>
              </div>
           </div>
           <p className="text-[10px] text-white/20 uppercase tracking-widest text-center">
             Gonza Mas Motos • v1.2.0
           </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
