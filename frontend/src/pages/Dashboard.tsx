import { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import AdminOverview from './dashboard/AdminOverview';
import AdminUsers from './dashboard/admin/AdminUsers';
import AdminStores from './dashboard/admin/AdminStores';
import AdminPacks from './dashboard/admin/AdminPacks';
import AdminFinances from './dashboard/admin/AdminFinances';
import AdminDeliveries from './dashboard/admin/AdminDeliveries';
import AdminStats from './dashboard/admin/AdminStats';
import AdminReports from './dashboard/admin/AdminReports';
import AdminNotifications from './dashboard/admin/AdminNotifications';
import AdminSettings from './dashboard/admin/AdminSettings';
import BoutiquePortal from './dashboard/BoutiquePortal';
import BoutiqueInventory from './dashboard/boutique/BoutiqueInventory';
import BoutiqueSubscribers from './dashboard/boutique/BoutiqueSubscribers';
import BoutiqueFinances from './dashboard/boutique/BoutiqueFinances';
import BoutiqueSettings from './dashboard/boutique/BoutiqueSettings';
import CollectionPortal from './dashboard/CollectionPortal';
import CollectionCases from './dashboard/collection/CollectionCases';
import CollectionMap from './dashboard/collection/CollectionMap';
import CollectionPayments from './dashboard/collection/CollectionPayments';
import CollectionSettings from './dashboard/collection/CollectionSettings';
import SupplierPortal from './dashboard/SupplierPortal';
import SupplierProduction from './dashboard/supplier/SupplierProduction';
import SupplierOrders from './dashboard/supplier/SupplierOrders';
import SupplierStats from './dashboard/supplier/SupplierStats';
import SupplierSettings from './dashboard/supplier/SupplierSettings';
import SubscriberPortal from './dashboard/SubscriberPortal';
import DeliveryPortal from './dashboard/DeliveryPortal';
import { UserRole } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, ChevronDown, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState<UserRole>('ADMIN');
  const [userInfo, setUserInfo] = useState<any>(null);
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('soguia_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserInfo(user);
      setRole(user.role || 'SUBSCRIBER');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('soguia_user');
    navigate('/auth');
  };

  const renderPortal = () => {
    const path = location.pathname;
    
    switch (role) {
      case 'ADMIN': 
        if (path === '/dashboard/admin/users') return <AdminUsers />;
        if (path === '/dashboard/admin/stores') return <AdminStores />;
        if (path === '/dashboard/admin/packs') return <AdminPacks />;
        if (path === '/dashboard/admin/finances') return <AdminFinances />;
        if (path === '/dashboard/admin/deliveries') return <AdminDeliveries />;
        if (path === '/dashboard/admin/stats') return <AdminStats />;
        if (path === '/dashboard/admin/reports') return <AdminReports />;
        if (path === '/dashboard/admin/notifications') return <AdminNotifications />;
        if (path === '/dashboard/admin/settings') return <AdminSettings />;
        return <AdminOverview />;
      case 'BOUTIQUE': 
        if (path === '/dashboard/boutique/inventory') return <BoutiqueInventory />;
        if (path === '/dashboard/boutique/subscribers') return <BoutiqueSubscribers />;
        if (path === '/dashboard/boutique/finances') return <BoutiqueFinances />;
        if (path === '/dashboard/boutique/settings') return <BoutiqueSettings />;
        return <BoutiquePortal />;
      case 'RECOUVREMENT':
        if (path === '/dashboard/collection/cases') return <CollectionCases />;
        if (path === '/dashboard/collection/map') return <CollectionMap />;
        if (path === '/dashboard/collection/payments') return <CollectionPayments />;
        if (path === '/dashboard/collection/settings') return <CollectionSettings />;
        return <CollectionPortal />;
      case 'FOURNISSEUR':
        if (path === '/dashboard/supplier/production') return <SupplierProduction />;
        if (path === '/dashboard/supplier/orders') return <SupplierOrders />;
        if (path === '/dashboard/supplier/stats') return <SupplierStats />;
        if (path === '/dashboard/supplier/settings') return <SupplierSettings />;
        return <SupplierPortal />;
      case 'SUBSCRIBER': return <SubscriberPortal userInfo={userInfo} />;
      case 'LIVREUR': return <DeliveryPortal />;
      default: return <AdminOverview />;
    }
  };

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar role={role} userInfo={userInfo} onLogout={handleLogout} />
      
      <div className="flex-grow ml-64 min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-100 sticky top-0 z-40 px-8 flex items-center justify-between shadow-sm shadow-slate-100">
          <div className="relative">
            <button 
              onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
              className="flex items-center space-x-3 bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-xl transition-all border border-slate-100 text-sm font-bold"
            >
              <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-slate-900 uppercase tracking-widest text-[10px]">Mock Role: {role}</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showRoleSwitcher ? 'rotate-180' : ''}`} />
            </button>

            {showRoleSwitcher && (
              <div className="absolute top-full mt-2 left-0 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden">
                {(['ADMIN', 'BOUTIQUE', 'SUBSCRIBER', 'LIVREUR', 'RECOUVREMENT', 'FOURNISSEUR'] as UserRole[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRole(r);
                      setShowRoleSwitcher(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      role === r ? 'bg-orange-600 text-white' : 'hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right hidden md:block">
              <div className="text-sm font-black text-slate-900">{userInfo?.name || 'Utilisateur Démo'}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{role} Profile</div>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-slate-50 p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow bg-[#F8F9FA]/50 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderPortal()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
