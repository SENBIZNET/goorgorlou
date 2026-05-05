import { 
  Briefcase, 
  Users, 
  MapPin, 
  CreditCard, 
  Search, 
  Filter, 
  AlertCircle,
  Phone,
  ChevronRight,
  TrendingDown,
  Clock,
  CheckCircle2,
  Calendar,
  Wallet,
  Scan
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import QRScannerModal from '../../components/dashboard/QRScannerModal';

const tasks = [
  { id: '1', name: 'Mamadu Djalo', balance: '12,500 F', delay: '12 jours', location: 'Mindará', status: 'À Visiter', priority: 'Haute' },
  { id: '2', name: 'Augusto Correia', balance: '4,200 F', delay: '5 jours', location: 'Bandim', status: 'Rendez-vous', priority: 'Moyenne' },
  { id: '3', name: 'Baciro Sanhá', balance: '31,000 F', delay: '45 jours', location: 'Santa Luzia', status: 'Contentieux', priority: 'Urgent' },
  { id: '4', name: 'Fatoumata Binta', balance: '8,400 F', delay: '3 jours', location: 'Antula', status: 'À Appeler', priority: 'Faible' },
];

export default function CollectionPortal() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">espace recouvrement</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gestion du recouvrement de terrain et suivi des arriérés</p>
        </div>
        
        <div className="flex gap-4">
           <button 
             onClick={() => setIsScanning(true)}
             className="bg-orange-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-orange-100"
           >
              <Scan className="w-5 h-5" />
              Scanner Abonné
           </button>
           <div className="bg-slate-900 text-white p-6 rounded-[2rem] flex items-center gap-8 shadow-2xl">
              <div>
                 <div className="text-[9px] font-black uppercase opacity-40 tracking-widest">Collecté aujourd'hui</div>
                 <div className="text-2xl font-black italic">145,200 F</div>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                 <Wallet className="w-6 h-6 text-orange-500" />
              </div>
           </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: 'Dossiers Actifs', val: '42', icon: Briefcase, color: 'text-slate-900' },
          { label: 'Visites Prévues', val: '8', icon: MapPin, color: 'text-blue-500' },
          { label: 'Taux de Succès', val: '78%', icon: TrendingDown, color: 'text-emerald-500', rev: true },
          { label: 'Urgent (>30j)', val: '5', icon: AlertCircle, color: 'text-red-500' },
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
        {/* Task List */}
        <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
           <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                 <Calendar className="w-5 h-5 text-orange-500" />
                 Ma tournée du jour
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
           
           <div className="divide-y divide-slate-50">
              {tasks.map((task, i) => (
                <div key={task.id} className="p-8 hover:bg-slate-50/50 transition-all flex items-center gap-8 group">
                   <div className="flex-grow space-y-4">
                      <div className="flex justify-between items-start">
                         <div>
                            <div className="text-sm font-black text-slate-900">{task.name}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1 mt-0.5">
                               <MapPin className="w-3 h-3 text-orange-500" /> {task.location}
                            </div>
                         </div>
                         <div className="text-right">
                            <div className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-1 ${
                              task.priority === 'Urgent' ? 'bg-red-100 text-red-600' :
                              task.priority === 'Haute' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                            }`}>
                               {task.priority}
                            </div>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-3 bg-slate-50 rounded-xl">
                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Arriéré</div>
                            <div className="text-sm font-black text-red-600 italic">{task.balance}</div>
                         </div>
                         <div className="p-3 bg-slate-50 rounded-xl">
                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Retard</div>
                            <div className="text-sm font-black text-slate-900 italic">{task.delay}</div>
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-col gap-2">
                       <button className="p-4 bg-orange-600 text-white rounded-2xl hover:bg-slate-900 transition-all shadow-lg shadow-orange-100">
                          <CheckCircle2 className="w-5 h-5" />
                       </button>
                       <button className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-orange-600 transition-all">
                          <Phone className="w-5 h-5" />
                       </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Action History / Insights */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between h-[400px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10 flex flex-col h-full">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingDown className="w-8 h-8 text-orange-500" />
                 </div>
                 <h3 className="text-2xl font-black italic lowercase tracking-tight mb-4">Objectif Recouvrement</h3>
                 <p className="text-slate-400 font-medium mb-8">Plus que 215,000 F pour atteindre votre objectif hebdomadaire de recouvrement.</p>
                 <div className="mt-auto h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 1.5 }} className="h-full bg-orange-500 rounded-full" />
                 </div>
                 <div className="flex justify-between mt-3">
                    <span className="text-[10px] font-black uppercase text-white/40">65% complété</span>
                    <span className="text-[10px] font-black uppercase text-white/40">400,000 F</span>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <Clock className="w-4 h-4" />
                 Actions Récentes
              </h4>
              <div className="space-y-6">
                 {[
                   { date: '10:15', msg: 'Paiement partiel 5,000F', user: 'Alhassane S.' },
                   { date: 'Hier', msg: 'Visite effectuée', user: 'Augusto C.' },
                   { date: 'Hier', msg: 'Rappel téléphonique', user: 'Mariama D.' },
                 ].map((log, i) => (
                    <div key={i} className="flex justify-between items-start">
                       <div>
                          <div className="text-xs font-black text-slate-900">{log.msg}</div>
                          <div className="text-[10px] font-bold text-slate-400 italic">{log.user}</div>
                       </div>
                       <span className="text-[9px] font-black uppercase tracking-widest text-slate-200">{log.date}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
      <QRScannerModal 
        isOpen={isScanning} 
        onClose={() => setIsScanning(false)}
        title="Identification Débiteur"
        description="Scannez la carte ou le QR code de l'abonné pour accéder à son dossier de paiement"
        onScan={(data) => {
          console.log("Collection scan:", data);
        }}
      />
    </div>
  );
}
