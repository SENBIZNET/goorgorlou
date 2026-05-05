import { 
  Truck, 
  MapPin, 
  User, 
  Navigation, 
  Search, 
  Filter,
  MoreVertical,
  Activity,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Phone,
  BarChart3,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

const deliveryStats = [
  { label: 'Livraisons Aujourd\'hui', val: '124', icon: Truck, color: 'text-orange-500' },
  { label: 'Livreurs Actifs', val: '18', icon: User, color: 'text-blue-500' },
  { label: 'Retards Signalés', val: '2', icon: AlertTriangle, color: 'text-red-500' },
  { label: 'Score Service', val: '4.8/5', icon: CheckCircle2, color: 'text-emerald-500' },
];

const deliveries = [
  { id: 'DL-4829', subscriber: 'Baciro Sanhá', store: 'Alimentation Bandim', agent: 'Mamadu Djalo', status: 'En cours', time: 'Arrivée prévue 14:30', progress: 65 },
  { id: 'DL-4828', subscriber: 'Fatima Cassamá', store: 'Boutique Mindará', agent: 'Mussa Baldé', status: 'Livré', time: 'Livré à 10:15', progress: 100 },
  { id: 'DL-4827', subscriber: 'Mussa Camará', store: 'Mini Prix Santa Luzia', agent: 'Domingos Monteiro', status: 'En attente', time: 'Départ à 15:00', progress: 0 },
  { id: 'DL-4826', subscriber: 'Aissatou Baldé', store: 'Dépôt Antula', agent: 'Augusto Correia', status: 'Retardé', time: 'Panne signalée', progress: 40 },
];

export default function AdminDeliveries() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">gestion des livraisons</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Suivi en temps réel de la chaîne logistique et du réseau de distribution</p>
        </div>
        
        <div className="flex gap-3">
           <button className="flex items-center gap-2 bg-white border border-slate-100 text-slate-900 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
             <BarChart3 className="w-4 h-4" />
             Rapport Logistique
           </button>
           <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 group">
             <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
             Carte Interactive
           </button>
        </div>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {deliveryStats.map((stat, i) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        {/* Active Deliveries List */}
        <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
           <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                 <Activity className="w-5 h-5 text-orange-500" />
                 Flux de livraison actuel
              </h3>
              <div className="flex gap-2">
                 <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900 transition-colors">
                    <Search className="w-5 h-5" />
                 </button>
                 <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900 transition-colors">
                    <Filter className="w-5 h-5" />
                 </button>
              </div>
           </div>
           
           <div className="flex-grow overflow-y-auto divide-y divide-slate-50">
              {deliveries.map((delivery, i) => (
                <motion.div 
                  key={delivery.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 hover:bg-slate-50/50 transition-all flex items-center gap-8 group"
                >
                   <div className="w-14 h-14 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white shrink-0 group-hover:rotate-3 transition-transform">
                      <div className="text-[10px] font-black opacity-40 uppercase">DL</div>
                      <div className="text-sm font-black italic">{delivery.id.split('-')[1]}</div>
                   </div>

                   <div className="flex-grow space-y-4">
                      <div className="flex justify-between items-start">
                         <div>
                            <div className="text-sm font-black text-slate-900 tracking-tight">{delivery.subscriber}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{delivery.store}</div>
                         </div>
                         <div className="text-right">
                            <div className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-1 ${
                              delivery.status === 'Livré' ? 'bg-emerald-100 text-emerald-600' :
                              delivery.status === 'En cours' ? 'bg-blue-100 text-blue-600' :
                              delivery.status === 'Retardé' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                            }`}>
                               {delivery.status}
                            </div>
                            <div className="text-[9px] font-bold text-slate-400 italic">{delivery.time}</div>
                         </div>
                      </div>

                      <div className="space-y-1.5">
                         <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-400">
                            <span>Livreur: {delivery.agent}</span>
                            <span>{delivery.progress}% complet</span>
                         </div>
                         <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${delivery.progress}%` }}
                              transition={{ duration: 1.5, ease: 'easeOut' }}
                              className={`h-full rounded-full ${
                                delivery.status === 'Livré' ? 'bg-emerald-500' :
                                delivery.status === 'Retardé' ? 'bg-red-500' : 'bg-orange-500'
                              }`}
                            />
                         </div>
                      </div>
                   </div>

                   <button className="p-4 text-slate-200 hover:text-slate-900 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                   </button>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Distribution Map Placeholder/Quick Info */}
        <div className="lg:col-span-4 space-y-8 h-full flex flex-col">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex-grow relative overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 opacity-10">
                 <div className="absolute inset-0 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
              </div>
              <div className="relative z-10 space-y-6">
                 <div className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-orange-900/50">
                    <MapPin className="w-10 h-10 text-white" />
                 </div>
                 <div>
                    <h3 className="text-xl font-black italic tracking-tight mb-2">localisation active</h3>
                    <p className="text-sm font-medium text-white/50 px-8">18 livreurs connectés actuellement sur le réseau de Bissau.</p>
                 </div>
                 <button className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/10 px-8 py-3 rounded-2xl hover:bg-white text-white hover:text-slate-900 transition-all">Accéder au GPS</button>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Performance par Zone</h4>
              <div className="space-y-6">
                 {[
                   { zone: 'Bissau Central', score: 98, status: 'Optimal' },
                   { zone: 'Mindará / Antula', score: 82, status: 'Trafic intense' },
                   { zone: 'Bandim / Santa Luzia', score: 94, status: 'Fluide' },
                 ].map((zone, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${zone.score > 90 ? 'bg-emerald-500' : 'bg-orange-500'}`} />
                          <div className="text-xs font-black text-slate-900">{zone.zone}</div>
                       </div>
                       <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 italic">{zone.status}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
