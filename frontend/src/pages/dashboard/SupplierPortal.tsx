import { 
  Package, 
  Truck, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Search, 
  Filter, 
  Plus,
  History,
  CheckCircle2,
  Clock,
  AlertTriangle,
  BarChart3,
  ChevronRight,
  TrendingUp,
  Box
} from 'lucide-react';
import { motion } from 'motion/react';

const orders = [
  { id: 'CMD-902', client: 'SOGUIA Dépôt Central', items: '1,200 Packs FOMI CABA', status: 'En préparation', date: 'Livraison prévue: Demain' },
  { id: 'CMD-901', client: 'Boutique Mindará', items: '200 Packs Standard', status: 'Expédié', date: 'Livré le: 3 Mai' },
  { id: 'CMD-900', client: 'Alimentation Bandim', items: '450 Packs + Huile', status: 'Livré', date: 'Livré le: 2 Mai' },
];

export default function SupplierPortal() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">espace fournisseur</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gestion de la production et des bons de commande gros volume</p>
        </div>
        
        <div className="flex gap-3">
           <button className="flex items-center gap-2 bg-white border border-slate-100 text-slate-900 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
             <BarChart3 className="w-4 h-4" />
             Rapport Stock
           </button>
           <button className="flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 group">
             <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
             Bon de Livraison
           </button>
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: 'Gros Volumes Prêts', val: '4.5k', icon: Box, color: 'text-slate-900' },
          { label: 'Commandes en Cours', val: '12', icon: Truck, color: 'text-blue-500' },
          { label: 'Sorties Semaine', val: '8.2k', icon: ArrowUpCircle, color: 'text-emerald-500' },
          { label: 'Alertes Production', val: '0', icon: AlertTriangle, color: 'text-emerald-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-slate-300 transition-all">
             <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-slate-900 italic tracking-tight">{stat.val}</div>
             </div>
             <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Orders Table */}
        <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
           <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                 <History className="w-5 h-5 text-orange-500" />
                 Bons de Commande Récents
              </h3>
              <div className="flex gap-2">
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input type="text" placeholder="Rechercher..." className="bg-slate-50 border-none pl-11 pr-6 py-2 rounded-xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20 w-48" />
                 </div>
                 <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900 transition-colors">
                    <Filter className="w-5 h-5" />
                 </button>
              </div>
           </div>
           
           <div className="divide-y divide-slate-50 overflow-y-auto max-h-[500px]">
              {orders.map((order, i) => (
                <div key={order.id} className="p-8 hover:bg-slate-50/50 transition-all flex items-center gap-8 group">
                   <div className="w-14 h-14 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white shrink-0 group-hover:rotate-6 transition-transform">
                      <div className="text-[10px] font-black opacity-40 uppercase">CMD</div>
                      <div className="text-sm font-black italic">{order.id.split('-')[1]}</div>
                   </div>

                   <div className="flex-grow space-y-1">
                      <div className="text-sm font-black text-slate-900">{order.client}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{order.items}</div>
                   </div>

                   <div className="text-right shrink-0">
                      <div className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-1 ${
                        order.status === 'Livré' ? 'bg-emerald-100 text-emerald-600' :
                        order.status === 'Expédié' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                         {order.status}
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 italic">{order.date}</div>
                   </div>

                   <button className="p-4 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between h-[350px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10">
                 <h3 className="text-2xl font-black italic lowercase tracking-tight mb-4">Planification Production</h3>
                 <p className="text-slate-400 font-medium mb-8">Nouveau lot de 2,000 packs FOMI CABA en cours de conditionnement.</p>
                 <button className="w-full bg-orange-600 text-white font-black py-4 rounded-xl uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all">
                    Mise à jour état production
                 </button>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <TrendingUp className="w-4 h-4" />
                 Volume Expédié (Mois)
              </h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase text-slate-400">Total</span>
                    <span className="text-xl font-black italic">42,800 Units</span>
                 </div>
                 <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '82%' }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500" />
                 </div>
                 <p className="text-[9px] font-bold text-slate-400 italic">+15% par rapport au mois d'Avril</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
