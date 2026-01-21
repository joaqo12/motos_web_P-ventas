
import React from 'react';
import { View } from '../types';
import { WINNERS } from '../constants';

interface WinnersGalleryProps {
  navigate: (view: View) => void;
}

const WinnersGallery: React.FC<WinnersGalleryProps> = ({ navigate }) => {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <header className="flex items-center justify-between border-b border-white/10 px-6 md:px-20 py-4 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(View.HOME)}
            className="flex items-center justify-center size-10 rounded-xl bg-accent-yellow text-background-dark transition-transform hover:-translate-x-1"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-xl font-black tracking-tighter">Gonza Mas Motos</h2>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Hall of Fame</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-[-0.04em]">Past Winners Gallery</h1>
          <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Celebrate our community of lucky riders and the brand new machines they've taken home. Your name could be next.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WINNERS.concat(WINNERS).map((winner, idx) => (
            <div key={`${winner.id}-${idx}`} className="group flex flex-col bg-card-dark rounded-xl border border-primary/30 overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20 bg-primary text-white px-3 py-1 rounded-lg text-xs font-black uppercase tracking-tighter italic">Official Winner</div>
                <img 
                  src={winner.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt={winner.name} 
                />
              </div>
              <div className="p-6 bg-surface-dark">
                <h3 className="text-white text-2xl font-bold mb-1">{winner.name}</h3>
                <p className="text-primary text-lg font-semibold mb-4">{winner.prize}</p>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>{winner.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-20 rounded-3xl overflow-hidden bg-primary p-12 text-center shadow-2xl">
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-background-dark text-4xl font-black tracking-tight max-w-[720px]">
              Will you be our next winner?
            </h2>
            <p className="text-background-dark/80 text-lg font-medium max-w-[600px]">
              Don't miss out on the next big draw. Your dream motorcycle is waiting in our current active raffles.
            </p>
            <button 
              onClick={() => navigate(View.HOME)}
              className="mt-4 flex min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-background-dark text-primary text-lg font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Join the Next Raffle
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WinnersGallery;
