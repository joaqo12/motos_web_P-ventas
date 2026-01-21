
import { Raffle, Winner, Order, PricingBundle } from './types';

export const RAFFLES: Raffle[] = [
  {
    id: '1',
    title: 'HONDA XR 250',
    image: 'https://images.unsplash.com/photo-1614165933026-0750fbd50e0e?auto=format&fit=crop&q=80&w=1200',
    price: 5000,
    progress: 33,
    status: 'ACTIVE',
    description: '¡Ganá esta bestia hoy!'
  },
  {
    id: '2',
    title: 'KAWASAKI NINJA H2R',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200',
    price: 15000,
    progress: 65,
    status: 'ACTIVE'
  }
];

export const WINNERS: Winner[] = [
  {
    id: 'w1',
    name: 'Juan P.',
    prize: 'Yamaha R3',
    date: 'Hace 2 días',
    image: 'https://i.pravatar.cc/150?u=juan'
  },
  {
    id: 'w2',
    name: 'Maria G.',
    prize: 'Honda CB500',
    date: 'Hace 1 semana',
    image: 'https://i.pravatar.cc/150?u=maria'
  },
  {
    id: 'w3',
    name: 'Carlos R.',
    prize: 'Kawasaki Ninja 400',
    date: 'Hace 1 mes',
    image: 'https://i.pravatar.cc/150?u=carlos'
  }
];

export const BUNDLES: PricingBundle[] = [
  { id: 'b1', chances: 3, price: 5000, label: 'Combo Inicial' },
  { id: 'b2', chances: 8, price: 10000, label: 'Maximiza tus opciones', popular: true },
  { id: 'b3', chances: 25, price: 25000, label: 'Mega Pack' }
];

export const MOCK_ORDERS: Order[] = [
  { id: 'GM-1024', customerName: 'Juan Perez', customerPhone: '+54 9 11 1234-5678', amount: 5000, date: 'Oct 24, 2023', method: 'Bank Transfer', status: 'PENDING' },
  { id: 'GM-1025', customerName: 'Maria Garcia', customerPhone: '+54 9 11 8765-4321', amount: 2500, date: 'Oct 24, 2023', method: 'Crypto', status: 'PENDING' },
  { id: 'GM-1026', customerName: 'Ricardo Sosa', customerPhone: '+54 9 11 5555-0000', amount: 10000, date: 'Oct 23, 2023', method: 'Bank Transfer', status: 'PENDING' }
];
