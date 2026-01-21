
import React from 'react';
import { View } from '../types';

interface AdminSidebarProps {
  currentView: View;
  navigate: (view: View) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ currentView, navigate }) => {
  const menuItems = [
    { id: View.ADMIN_ORDERS, label: 'Overview', icon: 'grid_view' },
    { id: View.ADMIN_RAFFLES, label: 'Raffle Setup', icon: 'settings_input_component' },
    { id: View.ADMIN_PRICING, label: 'Pricing Bundles', icon: 'sell' },
    { id: View.ADMIN_ORDERS, label: 'Orders', icon: 'shopping_cart' },
    { id: View.ADMIN_ORDERS, label: 'Promotions', icon: 'campaign' },
  ];

  const handleLogout = () => {
    // In App.tsx we handle auth state, but here we can just navigate to Home 
    // and the App.tsx hash listener will clear auth if we wanted to enforce it.
    // However, it's cleaner to have a dedicated logout flow. 
    // For simplicity, we just navigate to home which is unprotected.
    window.location.hash = View.HOME;
    window.location.reload(); // Simple way to clear memory state for this "no account" demo
  };

  return (
    <aside className="w-64 bg-[#0a0505] border-r border-white/5 flex flex-col h-full shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="size-10 bg-accent-yellow rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-accent-yellow/10">
            <span className="material-symbols-outlined text-black font-bold">motorcycle</span>
          </div>
          <div>
            <h1 className="text-white text-[13px] font-black uppercase tracking-tight leading-none">Gonza Mas Motos</h1>
            <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-1">Admin Panel</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold uppercase tracking-widest ${
                currentView === item.id 
                ? 'bg-accent-yellow/10 text-accent-yellow shadow-inner shadow-accent-yellow/5' 
                : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${currentView === item.id ? 'text-accent-yellow' : 'text-inherit'}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-white/5 space-y-4">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100?u=admin" className="size-10 rounded-full border border-white/10" alt="Admin" />
          <div className="overflow-hidden">
            <p className="text-white text-xs font-black truncate">Admin User</p>
            <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Settings</p>
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-xs font-bold uppercase tracking-widest text-red-500/60 hover:text-red-500 hover:bg-red-500/5"
        >
          <span className="material-symbols-outlined text-xl">logout</span>
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
