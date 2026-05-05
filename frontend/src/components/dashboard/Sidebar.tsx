import { 
  LogOut, 
  Home,
  ShoppingBasket,
  Wallet,
  Package,
  CheckSquare,
  User,
  MessageSquare,
  CreditCard,
  LayoutDashboard,
  Users,
  Store,
  BarChart3,
  Settings,
  Bell,
  FileText,
  Truck,
  Box,
  MapPin
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { UserRole } from '../../types';

interface DashboardSidebarProps {
  role?: UserRole;
  userInfo?: any;
  onLogout?: () => void;
}

const subscriberItems = [
  { icon: Home, label: 'Accueil', path: '/dashboard' },
  { icon: CreditCard, label: 'Ma Carte Membre', path: '/dashboard/card' },
  { icon: ShoppingBasket, label: 'Mes Commandes', path: '/dashboard/orders' },
  { icon: Wallet, label: 'Mes Paiements', path: '/dashboard/payments' },
  { icon: Package, label: 'Changer de Pack', path: '/dashboard/packs' },
  { icon: CheckSquare, label: 'Mon Certificat', path: '/dashboard/certificate' },
  { icon: User, label: 'Mon Profil', path: '/dashboard/profile' },
  { icon: MessageSquare, label: 'Aide & Support', path: '/dashboard/support' },
];

const adminItems = [
  { icon: LayoutDashboard, label: 'Vue d\'ensemble', path: '/dashboard' },
  { icon: Users, label: 'Gérer Abonnés', path: '/dashboard/admin/users' },
  { icon: Store, label: 'Gérer Boutiques', path: '/dashboard/admin/stores' },
  { icon: Package, label: 'Gestion des Packs', path: '/dashboard/admin/packs' },
  { icon: Wallet, label: 'Gestion Finances', path: '/dashboard/admin/finances' },
  { icon: Truck, label: 'Gestion Livraisons', path: '/dashboard/admin/deliveries' },
  { icon: BarChart3, label: 'Statistiques', path: '/dashboard/admin/stats' },
  { icon: FileText, label: 'Rapports', path: '/dashboard/admin/reports' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/admin/notifications' },
  { icon: Settings, label: 'Configuration', path: '/dashboard/admin/settings' },
];

const boutiqueItems = [
  { icon: LayoutDashboard, label: 'Point de Distribution', path: '/dashboard' },
  { icon: Package, label: 'Gestion du Stock', path: '/dashboard/boutique/inventory' },
  { icon: Users, label: 'Mes Abonnés', path: '/dashboard/boutique/subscribers' },
  { icon: Wallet, label: 'Mes Finances', path: '/dashboard/boutique/finances' },
  { icon: Settings, label: 'Paramètres', path: '/dashboard/boutique/settings' },
];

const collectionItems = [
  { icon: LayoutDashboard, label: 'Tableau de Bord', path: '/dashboard' },
  { icon: Users, label: 'Dossiers Clients', path: '/dashboard/collection/cases' },
  { icon: MapPin, label: 'Itinéraire Tournée', path: '/dashboard/collection/map' },
  { icon: Wallet, label: 'Recettes Quotidiennes', path: '/dashboard/collection/payments' },
  { icon: Settings, label: 'Paramètres', path: '/dashboard/collection/settings' },
];

const supplierItems = [
  { icon: LayoutDashboard, label: 'Tableau de Bord', path: '/dashboard' },
  { icon: Box, label: 'Gestion Production', path: '/dashboard/supplier/production' },
  { icon: Truck, label: 'Bons de Livraison', path: '/dashboard/supplier/orders' },
  { icon: BarChart3, label: 'Analyses Volumes', path: '/dashboard/supplier/stats' },
  { icon: Settings, label: 'Paramètres', path: '/dashboard/supplier/settings' },
];

export default function DashboardSidebar({ role = 'SUBSCRIBER', userInfo, onLogout }: DashboardSidebarProps) {
  const location = useLocation();
  const navItems = role === 'ADMIN' ? adminItems : 
                   role === 'BOUTIQUE' ? boutiqueItems : 
                   role === 'RECOUVREMENT' ? collectionItems :
                   role === 'FOURNISSEUR' ? supplierItems :
                   subscriberItems;
  const userName = userInfo?.name || 'Utilisateur';
  const userInitials = userName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 text-slate-500 flex flex-col border-r border-slate-100 font-sans z-50">
      <div className="p-8 h-24 flex items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm italic">S</span>
          </div>
          <span className="text-slate-900 font-black tracking-tight text-xl font-display">SOGUIA</span>
        </div>
      </div>
      
      <div className="px-6 mb-4">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{role === 'ADMIN' ? 'Menu Admin' : 'Menu Membre'}</h3>
      </div>

      <nav className="flex-grow px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-6 py-3.5 rounded-2xl transition-all text-sm font-bold ${
                isActive 
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                : 'hover:bg-slate-50 text-slate-500 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-orange-500' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-50 space-y-4">
        <button 
          onClick={onLogout}
          className="flex items-center space-x-4 px-6 py-3 w-full rounded-2xl hover:bg-red-50 text-red-500 transition-all text-sm font-black group"
        >
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Déconnexion</span>
        </button>
        
        <div className="flex items-center space-x-3 px-4 pt-4 border-t border-slate-50">
           <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-xs font-black text-white shadow-lg uppercase">{userInitials}</div>
           <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest truncate">{userName}</div>
        </div>
      </div>
    </div>
  );
}
