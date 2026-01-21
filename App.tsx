
import React, { useState, useEffect } from 'react';
import { View } from './types';
import Home from './views/Home';
import WinnersGallery from './views/WinnersGallery';
import Checkout from './views/Checkout';
import Success from './views/Success';
import MyTickets from './views/MyTickets';
import AdminLogin from './views/AdminLogin';
import AdminOrders from './views/AdminOrders';
import AdminOrderDetail from './views/AdminOrderDetail';
import AdminRaffles from './views/AdminRaffles';
import AdminPricing from './views/AdminPricing';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedBundleId, setSelectedBundleId] = useState<string | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(View).includes(hash as View)) {
        const targetView = hash as View;
        
        // Protect admin views
        if (targetView.startsWith('ADMIN_') && targetView !== View.ADMIN_LOGIN && !isAuthenticated) {
          window.location.hash = View.ADMIN_LOGIN;
          setCurrentView(View.ADMIN_LOGIN);
          return;
        }

        setCurrentView(targetView);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAuthenticated]);

  const navigate = (view: View, params?: any) => {
    // Check authentication for admin views
    if (view.startsWith('ADMIN_') && view !== View.ADMIN_LOGIN && !isAuthenticated) {
      window.location.hash = View.ADMIN_LOGIN;
      setCurrentView(View.ADMIN_LOGIN);
      return;
    }

    if (params?.bundleId) setSelectedBundleId(params.bundleId);
    if (params?.orderId) setSelectedOrderId(params.orderId);
    
    window.location.hash = view;
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate(View.HOME);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home navigate={navigate} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />;
      case View.WINNERS:
        return <WinnersGallery navigate={navigate} />;
      case View.CHECKOUT:
        return <Checkout navigate={navigate} bundleId={selectedBundleId} />;
      case View.SUCCESS:
        return <Success navigate={navigate} />;
      case View.MY_TICKETS:
        return <MyTickets navigate={navigate} />;
      case View.ADMIN_LOGIN:
        return <AdminLogin onLogin={() => setIsAuthenticated(true)} navigate={navigate} />;
      case View.ADMIN_ORDERS:
        return <AdminOrders navigate={navigate} />;
      case View.ADMIN_ORDER_DETAIL:
        return <AdminOrderDetail navigate={navigate} orderId={selectedOrderId} />;
      case View.ADMIN_RAFFLES:
        return <AdminRaffles navigate={navigate} />;
      case View.ADMIN_PRICING:
        return <AdminPricing navigate={navigate} />;
      default:
        return <Home navigate={navigate} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />;
    }
  };

  return (
    <div className="min-h-screen flex justify-center grainy-bg selection:bg-accent-yellow selection:text-background-dark">
      <div className="w-full max-w-[520px] lg:max-w-none lg:grid lg:grid-cols-1 overflow-x-hidden">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
