
import React from 'react';
import { View } from '../types';
import { MOCK_ORDERS } from '../constants';
import AdminSidebar from '../components/AdminSidebar';

interface AdminOrdersProps {
  navigate: (view: View, params?: any) => void;
}

const AdminOrders: React.FC<AdminOrdersProps> = ({ navigate }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white font-spline">
      <AdminSidebar currentView={View.ADMIN_ORDERS} navigate={navigate} />

      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <header className="sticky top-0 z-10 flex items-center justify-between px-10 py-6 border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
          <div className="flex flex-col">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">Pending Payment Approvals</h2>
            <p className="text-white/40 text-sm">Review bank transfers and crypto payments to issue tickets.</p>
          </div>
        </header>

        <div className="p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-surface-dark p-6 rounded-2xl border border-white/5">
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Total Sales</p>
              <h3 className="text-3xl font-extrabold">$125,400</h3>
            </div>
            <div className="bg-accent-yellow p-6 rounded-2xl text-background-dark shadow-xl shadow-accent-yellow/5">
              <p className="text-background-dark/70 text-xs font-bold uppercase tracking-widest mb-1">Pending Approvals</p>
              <h3 className="text-3xl font-extrabold">42</h3>
            </div>
            <div className="bg-surface-dark p-6 rounded-2xl border border-white/5">
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Delivered Tickets</p>
              <h3 className="text-3xl font-extrabold">1,240</h3>
            </div>
          </div>

          <div className="bg-surface-dark rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <h3 className="font-bold">Recent Pending Orders</h3>
              <button className="text-xs bg-accent-yellow/10 text-accent-yellow px-3 py-1 rounded-lg">Filter: All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-[10px] uppercase tracking-widest text-white/30">
                  <tr>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MOCK_ORDERS.map(order => (
                    <tr 
                      key={order.id} 
                      className="hover:bg-white/5 cursor-pointer transition-colors"
                      onClick={() => navigate(View.ADMIN_ORDER_DETAIL, { orderId: order.id })}
                    >
                      <td className="px-6 py-4 text-accent-yellow font-bold">#{order.id}</td>
                      <td className="px-6 py-4">
                        <p className="font-bold">{order.customerName}</p>
                        <p className="text-xs text-white/40">{order.customerPhone}</p>
                      </td>
                      <td className="px-6 py-4 font-bold">${order.amount.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{order.method}</span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button className="bg-green-600 hover:bg-green-700 p-2 rounded-lg"><span className="material-symbols-outlined text-sm">check</span></button>
                        <button className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"><span className="material-symbols-outlined text-sm">close</span></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminOrders;
