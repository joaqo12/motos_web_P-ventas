
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { verifyReceiptAnalysis } from '../services/geminiService';

interface AdminOrderDetailProps {
  navigate: (view: View) => void;
  orderId: string | null;
}

const AdminOrderDetail: React.FC<AdminOrderDetailProps> = ({ navigate, orderId }) => {
  const [analysis, setAnalysis] = useState("Analizando comprobante...");
  
  useEffect(() => {
    const runAnalysis = async () => {
      const result = await verifyReceiptAnalysis(orderId || 'GM-8829', 15000);
      setAnalysis(result || '');
    };
    runAnalysis();
  }, [orderId]);

  return (
    <div className="bg-background-dark text-white min-h-screen font-spline">
      <header className="border-b border-white/10 px-6 py-4 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(View.ADMIN_ORDERS)}
              className="size-10 bg-surface-dark rounded-xl flex items-center justify-center hover:bg-white/10"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-lg font-extrabold tracking-tight uppercase">Order Details</h2>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-4xl font-black tracking-tight">Order #{orderId || '8829'}</h2>
              <span className="bg-accent-yellow/20 text-accent-yellow px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Verification Pending</span>
            </div>
            <p className="text-slate-400">Received on Oct 24, 2023 at 14:32 (GMT-3)</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-surface-dark border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">print</span> Print Invoice
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <section className="bg-surface-dark rounded-xl border border-white/5 overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/5">
                <h3 className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent-yellow">person</span> Customer Details
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Full Name</p>
                    <p className="text-lg font-bold">Carlos Rodriguez</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">ID</p>
                    <p className="text-sm font-mono text-slate-400">CUST-9921-X</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-surface-dark rounded-xl border border-white/5 overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent-yellow">confirmation_number</span> Purchase Summary
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-black/20 p-4 rounded-lg border border-accent-yellow/20">
                  <p className="text-[10px] uppercase font-bold text-accent-yellow tracking-widest mb-2">Raffle Active</p>
                  <h4 className="text-2xl font-black text-accent-yellow italic uppercase tracking-tighter">Honda XR 300</h4>
                  <div className="flex justify-between items-end mt-4">
                    <div>
                      <p className="text-sm text-slate-400">Quantity</p>
                      <p className="text-xl font-bold">5 Chances</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-400">Total Price</p>
                      <p className="text-2xl font-black text-white">$15,000 ARS</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => navigate(View.ADMIN_ORDERS)}
                className="w-full py-5 bg-green-600 hover:bg-green-500 rounded-xl text-white text-lg font-extrabold shadow-lg transition-all active:scale-95"
              >
                Validar y Enviar Números
              </button>
              <button className="w-full py-4 bg-transparent hover:bg-red-600/10 border border-red-600/30 rounded-xl text-red-600 text-base font-bold transition-all">
                Marcar como Fraudulento
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col h-full min-h-[500px]">
            <section className="bg-surface-dark rounded-xl border border-white/5 flex flex-col h-full shadow-2xl overflow-hidden">
              <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/5">
                <h3 className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent-yellow">receipt_long</span> Comprobante
                </h3>
              </div>
              <div className="flex-1 p-6 flex flex-col items-center justify-center bg-black/40 relative">
                <div className="bg-white text-background-dark p-8 rounded-sm shadow-2xl max-w-md w-full">
                  <h4 className="font-black text-xl mb-4 border-b pb-2">BANCO GALICIA</h4>
                  <p className="text-4xl font-black mb-8">$15.000,00</p>
                  <div className="space-y-2 text-xs text-slate-600">
                    <p>De: Carlos Alberto Rodriguez</p>
                    <p>Para: Gonza Mas Motos SRL</p>
                    <p>Fecha: 24 Oct 2023</p>
                  </div>
                </div>
              </div>
            </section>
            
            <div className="mt-4 p-4 bg-accent-yellow/5 border border-accent-yellow/10 rounded-lg flex items-start gap-4">
              <span className="material-symbols-outlined text-accent-yellow mt-0.5">lightbulb</span>
              <div className="text-xs leading-relaxed">
                <p className="font-bold text-accent-yellow mb-1">Gemini AI Analysis Suggestion</p>
                <p className="text-slate-400">{analysis}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminOrderDetail;
