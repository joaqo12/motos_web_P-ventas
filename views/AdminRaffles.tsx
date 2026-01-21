
import React, { useState } from 'react';
import { View, Raffle } from '../types';
import { RAFFLES } from '../constants';
import AdminSidebar from '../components/AdminSidebar';

interface AdminRafflesProps {
  navigate: (view: View) => void;
}

const AdminRaffles: React.FC<AdminRafflesProps> = ({ navigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Raffle>>({
    title: '',
    description: '',
    image: '',
    price: 0,
    status: 'DRAFT',
    progress: 0
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setIsEditing(false);
    setFormData({ title: '', description: '', image: '', price: 0, status: 'DRAFT', progress: 0 });
  };

  const handleEdit = (raffle: Raffle) => {
    setFormData(raffle);
    setIsEditing(true);
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const handleCreateNew = () => {
    setFormData({ title: '', description: '', image: '', price: 0, status: 'DRAFT', progress: 0 });
    setIsEditing(false);
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const handleSaveDraft = () => {
    console.log(isEditing ? 'Updating raffle draft:' : 'Creating raffle draft:', { ...formData, status: 'DRAFT' });
    handleClose();
  };

  const handleFinalSubmit = () => {
    console.log(isEditing ? 'Publishing changes for:' : 'Publishing new raffle:', { ...formData, status: 'ACTIVE' });
    handleClose();
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-spline">
      <AdminSidebar currentView={View.ADMIN_RAFFLES} navigate={navigate} />

      <main className="flex-1 overflow-y-auto custom-scrollbar p-10">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Raffle Setup</h2>
            <p className="text-white/40">Create and monitor your active motorcycle raffles.</p>
          </div>
          <button 
            onClick={handleCreateNew}
            className="bg-accent-yellow text-background-dark font-black px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-accent-yellow/20"
          >
            <span className="material-symbols-outlined font-bold">add</span>
            Create New Raffle
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RAFFLES.map(raffle => (
            <div key={raffle.id} className="bg-surface-dark border border-white/5 rounded-3xl overflow-hidden group hover:border-accent-yellow/30 transition-all shadow-2xl">
              <div className="h-56 relative overflow-hidden">
                <img src={raffle.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={raffle.title} />
                <div className="absolute top-4 left-4">
                  <span className={`text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg ${raffle.status === 'ACTIVE' ? 'bg-green-600' : 'bg-white/20'}`}>
                    {raffle.status}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-white font-black text-xl italic leading-tight uppercase tracking-tighter">{raffle.title}</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Ends: Dec 24, 2024</p>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-white/5">
                  <div className="text-center flex-1 border-r border-white/5">
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Ticket</p>
                    <p className="text-accent-yellow font-black">${raffle.price.toLocaleString()}</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Sales</p>
                    <p className="text-white font-black">{raffle.progress}%</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => navigate(View.ADMIN_PRICING)}
                    className="flex-1 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/5 hover:bg-accent-yellow hover:text-background-dark transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">sell</span> Pricing
                  </button>
                  <button 
                    onClick={() => handleEdit(raffle)}
                    className="p-3 bg-white/5 text-white font-bold rounded-xl border border-white/5 hover:bg-white/10 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <button 
            onClick={handleCreateNew}
            className="border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-12 group hover:border-accent-yellow/30 hover:bg-white/5 transition-all space-y-4"
          >
            <div className="size-16 rounded-full bg-white/5 flex items-center justify-center text-accent-yellow group-hover:scale-110 transition-transform shadow-xl">
              <span className="material-symbols-outlined text-4xl">add_circle</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-white uppercase tracking-widest text-xs">Add New Raffle</p>
              <p className="text-white/20 text-[10px] font-medium">Configure tiers and dates</p>
            </div>
          </button>
        </div>
      </main>

      {/* Reusable Multi-step Modal (Edit/Create) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
            onClick={handleClose}
          />
          
          <div className="relative w-full max-w-xl bg-surface-dark border border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="px-10 pt-10 pb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                  {isEditing ? 'Editar Sorteo' : 'Nueva Rifa'}
                </h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">Step {currentStep} of {totalSteps}</p>
              </div>
              <button onClick={handleClose} className="text-white/20 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="px-10 mb-8">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent-yellow transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Modal Content */}
            <div className="px-10 pb-10 flex-1 overflow-y-auto custom-scrollbar">
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Título del Sorteo</label>
                    <input 
                      type="text"
                      placeholder="Ej: BMW S1000RR 2024"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent-yellow/50 transition-all text-white placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Descripción Corta</label>
                    <textarea 
                      rows={4}
                      placeholder="Describe la moto y el sorteo..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent-yellow/50 transition-all text-white placeholder:text-white/10 resize-none"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">URL de la Imagen</label>
                    <input 
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent-yellow/50 transition-all text-white placeholder:text-white/10"
                    />
                    {formData.image && (
                      <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-white/10">
                        <img src={formData.image} className="w-full h-full object-cover" alt="Preview" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Precio Base del Ticket ($)</label>
                    <div className="relative">
                      <input 
                        type="number"
                        placeholder="0.00"
                        value={formData.price || ''}
                        onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                        className="w-full bg-black/40 border border-white/5 rounded-2xl pl-12 pr-6 py-4 outline-none focus:border-accent-yellow/50 transition-all text-white placeholder:text-white/10"
                      />
                      <span className="absolute left-6 top-4.5 text-white/20 font-bold">$</span>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-accent-yellow/5 border border-accent-yellow/20 rounded-3xl p-8 text-center space-y-4">
                    <div className="size-16 bg-accent-yellow rounded-full flex items-center justify-center mx-auto shadow-lg shadow-accent-yellow/20">
                      <span className="material-symbols-outlined text-black text-3xl font-bold">
                        {isEditing ? 'draw' : 'rocket_launch'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase italic tracking-tighter">
                        {isEditing ? 'Confirmar Cambios' : '¿Listos para el Lanzamiento?'}
                      </h4>
                      <p className="text-white/40 text-sm mt-1">
                        {isEditing ? 'Revisá los cambios antes de actualizar.' : 'Revisá los datos antes de publicar la rifa.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Modelo</p>
                      <p className="font-bold truncate text-sm">{formData.title || 'Sin título'}</p>
                    </div>
                    <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Precio Ticket</p>
                      <p className="font-bold text-accent-yellow text-sm">${formData.price || 0}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-10 py-8 bg-black/20 border-t border-white/5 flex items-center justify-between">
              <button 
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-white/40 hover:text-white'}`}
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Atrás
              </button>

              <div className="flex items-center gap-3">
                <button 
                  onClick={handleSaveDraft}
                  className="px-6 py-4 border border-white/10 rounded-2xl text-white/60 font-black text-xs uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all"
                >
                  {isEditing ? 'Pausar' : 'Guardar Borrador'}
                </button>
                
                {currentStep < totalSteps ? (
                  <button 
                    onClick={handleNext}
                    className="bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-accent-yellow hover:scale-105 transition-all"
                  >
                    Continuar
                  </button>
                ) : (
                  <button 
                    onClick={handleFinalSubmit}
                    className="bg-accent-yellow text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-accent-yellow/10 hover:scale-105 transition-all"
                  >
                    {isEditing ? 'Guardar Cambios' : 'Publicar Sorteo'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRaffles;
