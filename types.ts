
export enum View {
  HOME = 'HOME',
  WINNERS = 'WINNERS',
  CHECKOUT = 'CHECKOUT',
  SUCCESS = 'SUCCESS',
  MY_TICKETS = 'MY_TICKETS',
  ADMIN_LOGIN = 'ADMIN_LOGIN',
  ADMIN_ORDERS = 'ADMIN_ORDERS',
  ADMIN_ORDER_DETAIL = 'ADMIN_ORDER_DETAIL',
  ADMIN_RAFFLES = 'ADMIN_RAFFLES',
  ADMIN_PRICING = 'ADMIN_PRICING'
}

export interface Raffle {
  id: string;
  title: string;
  image: string;
  price: number;
  progress: number;
  status: 'ACTIVE' | 'DRAFT' | 'ENDED';
  description?: string;
}

export interface Winner {
  id: string;
  name: string;
  prize: string;
  date: string;
  image: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  amount: number;
  date: string;
  method: 'Bank Transfer' | 'Crypto' | 'Digital Wallet';
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  bundleId?: string;
}

export interface PricingBundle {
  id: string;
  chances: number;
  price: number;
  label?: string;
  popular?: boolean;
}
