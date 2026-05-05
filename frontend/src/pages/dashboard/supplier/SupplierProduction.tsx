import { Package, TrendingUp, History, Play, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function SupplierProduction() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">gestion production</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Suivi en temps réel des lots de conditionnement et transformation</p>
        </div>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-900 transition-all shadow-xl">
          <Play className="w-4 h-4 fill-current" />
          Nouveau Lot
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                 <div className="relative z-10">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Lot en cours: #P-882</div>
                    <div className="text-4xl font-black text-slate-900 italic mb-6">Lot FOMI CABA</div>
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[10px] font-black uppercase text-slate-400">Progression</span>
                       <span className="text-[10px] font-black uppercase text-orange-600">85%</span>
                    </div>
                    <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} className="h-full bg-orange-500" />
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 p-8">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                       <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                 </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-center">
                 <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Production du jour</div>
                 <div className="text-4xl font-black italic mb-2">1,200 Packs</div>
                 <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">+12% vs hier</div>
              </div>
           </div>

           <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                 <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Historique des Lots Produits</h3>
              </div>
              <div className="divide-y divide-slate-50">
                 {[
                   { lot: '#LOT-291', name: 'FOMI CABA', qty: '5,000 Packs', status: 'Terminé', date: '3 Mai 2024' },
                   { lot: '#LOT-290', name: 'Standard Mix', qty: '2,500 Packs', status: 'Terminé', date: '2 Mai 2024' },
                   { lot: '#LOT-289', name: 'FOMI CABA', qty: '4,000 Packs', status: 'Terminé', date: '1 Mai 2024' },
                 ].map((l, i) => (
                   <div key={i} className="p-8 flex items-center justify-between hover:bg-slate-50 transition-all">
                      <div className="flex items-center gap-6">
                         <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-slate-400" />
                         </div>
                         <div>
                            <div className="text-sm font-black text-slate-900">{l.name}</div>
                            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{l.lot} • {l.qty}</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1 justify-end">
                            <CheckCircle2 className="w-3 h-3" /> {l.status}
                         </div>
                         <div className="text-[9px] font-bold text-slate-300 italic mt-1">{l.date}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <AlertTriangle className="w-4 h-4 text-orange-500" />
                 Alertes Matières Premières
              </h4>
              <div className="space-y-4">
                 <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                    <div className="text-xs font-black text-red-900 mb-1 italic">Sacs de conditionnement</div>
                    <div className="text-[9px] font-bold text-red-600 uppercase tracking-widest">Stock critique (Restant: 400 unités)</div>
                 </div>
                 <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="text-xs font-black text-emerald-900 mb-1 italic">Huile de tournesol</div>
                    <div className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Stock suffisant (Restant: 200L)</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
