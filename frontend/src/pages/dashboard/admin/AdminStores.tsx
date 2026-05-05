import { 
  Store, 
  Plus, 
  Search, 
  MapPin, 
  Phone,
  Star,
  ChevronRight,
  TrendingUp,
  Package,
  MoreVertical,
  X,
  CreditCard,
  History,
  Truck,
  ArrowUpRight,
  User,
  Activity,
  Map,
  Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const stores = [
  { id: '1', name: 'Boutique Mindará', location: 'Mindará, Bissau', owner: 'Mamadu Djalo', rating: 4.8, sales: '4.2M F', status: 'Ouvert', phone: '+245 95 000 00 01', color: 'bg-orange-500' },
  { id: '2', name: 'Alimentation Bandim', location: 'Bandim Marché', owner: 'Augusto Correia', rating: 4.5, sales: '2.8M F', status: 'Ouvert', phone: '+245 95 000 00 02', color: 'bg-blue-500' },
  { id: '3', name: 'Mini Prix Santa Luzia', location: 'Santa Luzia', owner: 'Baciro Sanhá', rating: 4.9, sales: '5.1M F', status: 'Ouvert', phone: '+245 95 000 00 03', color: 'bg-emerald-500' },
  { id: '4', name: 'Dépôt Antula', location: 'Antula', owner: 'Domingos Monteiro', rating: 4.2, sales: '1.9M F', status: 'Fermé', phone: '+245 95 000 00 04', color: 'bg-slate-500' },
];

export default function AdminStores() {
  const [selectedStore, setSelectedStore] = useState<typeof stores[0] | null>(null);

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto relative">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">gestion des boutiques</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gérez le réseau de distribution et les points de vente</p>
        </div>
        
        <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
          <Plus className="w-4 h-4" />
          Ajouter une boutique
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Boutiques Totales', value: '154', color: 'bg-blue-500' },
          { label: 'Chiffre d\'Affaires Réseau', value: '124,5M F', color: 'bg-emerald-500' },
          { label: 'Livraisons ce jour', value: '428', color: 'bg-orange-500' },
          { label: 'Nouveaux Partenaires', value: '12', color: 'bg-purple-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
             <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
             <div className="text-2xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4 px-2">
           <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Rechercher par nom, quartier ou gérant..."
                className="w-full bg-slate-50 border-none pl-11 pr-6 py-3 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-orange-500/20 shadow-inner"
              />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {stores.map((store, i) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col cursor-pointer"
            onClick={() => setSelectedStore(store)}
          >
            <div className={`relative h-48 overflow-hidden ${store.color} bg-opacity-5`}>
               <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute inset-0 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
               </div>

               <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white opacity-20 blur-2xl transition-transform group-hover:scale-150 duration-700" />
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] group-hover:opacity-10 transition-all duration-500">
                  <Map className="w-32 h-32 text-slate-900 rotate-12 group-hover:rotate-0" />
               </div>

               <div className="absolute top-6 right-6">
                 <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md border ${
                   store.status === 'Ouvert' ? 'bg-emerald-500/20 text-emerald-600 border-emerald-500/20' : 'bg-red-500/20 text-red-600 border-red-500/20'
                 }`}>
                   {store.status}
                 </span>
               </div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                    <Navigation className="w-5 h-5 text-slate-900" />
                 </div>
                 <h3 className="text-xl font-black text-slate-900 font-display italic lowercase leading-none">{store.name}</h3>
                 <div className="flex items-center gap-1 mt-1.5">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{store.location}</span>
                 </div>
               </div>
            </div>

            <div className="p-8 flex-grow space-y-6">
               <div className="flex items-center justify-between text-slate-500">
                  <div className="space-y-1">
                     <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Gérant</span>
                     <div className="text-xs font-black text-slate-900">{store.owner}</div>
                  </div>
                  <div className="text-right space-y-1">
                     <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Évaluation</span>
                     <div className="flex items-center gap-1 justify-end">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-black text-slate-900">{store.rating}</span>
                     </div>
                  </div>
               </div>

               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                     <TrendingUp className="text-emerald-500 w-5 h-5" />
                  </div>
                  <div>
                     <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Ventes Totales</div>
                     <div className="text-sm font-black text-slate-900">{store.sales}</div>
                  </div>
               </div>

               <div className="flex gap-2">
                  <button className="flex-grow bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-[9px] hover:bg-orange-600 transition-all">
                     Détails complets
                  </button>
                  <button className="w-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                     <MoreVertical className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Store Detail Overlay */}
      <AnimatePresence>
        {selectedStore && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStore(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-2xl z-[101] overflow-y-auto"
            >
              <div className="p-10 space-y-10">
                <header className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <Store className="w-6 h-6 text-orange-500" />
                     </div>
                     <div>
                        <h2 className="text-2xl font-black text-slate-900 font-display italic lowercase tracking-tight">{selectedStore.name}</h2>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md tracking-widest">{selectedStore.status}</span>
                           <span className="text-[10px] font-bold text-slate-400">{selectedStore.location}</span>
                        </div>
                     </div>
                  </div>
                  <button 
                    onClick={() => setSelectedStore(null)}
                    className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:text-slate-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </header>

                <div className="grid grid-cols-3 gap-6">
                   <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Ventes/Mois</div>
                      <div className="text-lg font-black text-slate-900">1.2M F</div>
                      <div className="flex items-center text-[9px] font-black text-emerald-500 mt-1">
                         <ArrowUpRight className="w-3 h-3 mr-0.5" /> +12%
                      </div>
                   </div>
                   <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Packs Libérés</div>
                      <div className="text-lg font-black text-slate-900">482</div>
                   </div>
                   <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Clients Actifs</div>
                      <div className="text-lg font-black text-slate-900">124</div>
                   </div>
                </div>

                <section className="space-y-6">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                     <User className="w-4 h-4 text-orange-500" />
                     Informations Propriétaire
                  </h3>
                  <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-2xl font-black italic">
                           {selectedStore.owner.charAt(0)}
                        </div>
                        <div>
                           <div className="text-xl font-black italic">{selectedStore.owner}</div>
                           <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] mt-1">Partenaire Certifié SOGUIA</div>
                        </div>
                     </div>
                     <button className="bg-orange-500 p-4 rounded-2xl hover:bg-orange-600 transition-all">
                        <Phone className="w-5 h-5 text-white" />
                     </button>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                     <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                        <Activity className="w-4 h-4 text-orange-500" />
                        Activités Récentes
                     </h3>
                     <History className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="space-y-4">
                     {[
                       { type: 'DELIVERY', label: 'Pack Fomi Caba livré', user: 'Mamadu Djalo', time: 'Il y a 14 min', icon: Truck },
                       { type: 'STOCKED', label: 'Ravitaillement Riz (50 sacs)', user: 'Système', time: 'Il y a 1h 22min', icon: Package },
                       { type: 'PAYMENT', label: 'Paiement encaissé (Orange Money)', user: 'Alhassane Sanhá', time: 'Il y a 2h', icon: CreditCard },
                     ].map((activity, i) => (
                       <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors">
                          <div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center">
                             <activity.icon className="w-4 h-4 text-slate-400" />
                          </div>
                          <div className="flex-grow">
                             <div className="text-xs font-black text-slate-900">{activity.label}</div>
                             <div className="text-[10px] font-bold text-slate-400 mt-0.5">{activity.user} • {activity.time}</div>
                          </div>
                       </div>
                     ))}
                  </div>
                </section>

                <button className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                   Modifier la Boutique
                   <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
