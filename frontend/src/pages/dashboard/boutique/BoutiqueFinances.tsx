import { 
  Wallet, 
  ArrowUpRight, 
  TrendingUp, 
  CreditCard, 
  History, 
  Download,
  DollarSign,
  Gift,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const earningsData = [
  { day: 'Lun', amount: 12000 },
  { day: 'Mar', amount: 18500 },
  { day: 'Mer', amount: 15400 },
  { day: 'Jeu', amount: 22000 },
  { day: 'Ven', amount: 28900 },
  { day: 'Sam', amount: 35000 },
  { day: 'Dim', amount: 31000 },
];

const commissions = [
  { id: 'COM-01', type: 'Commission Libération', amount: '850 F', status: 'Validé', date: 'Aujourd\'hui, 10:22', details: 'Fomi Caba (AC-2931)' },
  { id: 'COM-02', type: 'Commission Paiement', amount: '225 F', status: 'Validé', date: 'Hier, 18:05', details: 'Tranche Mensuelle (SJ-928)' },
  { id: 'COM-03', type: 'Prime Volume', amount: '5,000 F', status: 'Validé', date: 'Hier, 08:30', details: 'Objectif hebdo atteint' },
  { id: 'COM-04', type: 'Commission Libération', amount: '1,200 F', status: 'En attente', date: '3 Mai, 14:15', details: 'Pack Famille (AB-441)' },
];

export default function BoutiqueFinances() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">mes commissions & gains</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Suivi de votre rentabilité de point de distribution partenaire</p>
        </div>
        
        <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
          <Download className="w-4 h-4" />
          Exporter Historique
        </button>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl shadow-slate-200 relative overflow-hidden group">
           <div className="relative z-10 flex flex-col h-full">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">Gain Total Cumulé</div>
              <div className="text-5xl font-black italic mb-6">482,900 F</div>
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500">
                    <ArrowUpRight className="w-4 h-4" /> +12,400 F (Semaine)
                 </div>
                 <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-orange-500" />
                 </div>
              </div>
           </div>
           <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />
        </div>

        <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm flex flex-col group hover:border-slate-300 transition-all">
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Disponible pour Retrait</div>
           <div className="text-4xl font-black text-slate-900 italic mb-6">35,200 F</div>
           <button className="mt-auto w-full bg-slate-50 hover:bg-orange-500 hover:text-white text-slate-900 font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2">
              Retirer mes gains
              <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm flex flex-col group hover:border-slate-300 transition-all">
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Primes de Performance</div>
           <div className="text-4xl font-black text-slate-900 italic mb-6">12,500 F</div>
           <div className="mt-auto p-4 bg-emerald-50 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                 <Gift className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                 <div className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Niveau Argent</div>
                 <div className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest">Prochaine étape: Niveau Or (+5,000 F)</div>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Earnings Chart */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight">activité de la semaine</h3>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                 <div className="w-2 h-2 rounded-full bg-orange-500" /> Commissions quotidiennes
              </div>
           </div>
           <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="amount" stroke="#f97316" strokeWidth={3} fill="#f97316" fillOpacity={0.05} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Breakdown List */}
        <div className="lg:col-span-4 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
           <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                 <History className="w-5 h-5 text-orange-500" />
                 Détails Récents
              </h3>
              <button className="text-[9px] font-black uppercase text-orange-600 tracking-widest hover:underline">Voir tout</button>
           </div>
           <div className="flex-grow overflow-y-auto divide-y divide-slate-50">
              {commissions.map((item, i) => (
                <div key={i} className="p-6 hover:bg-slate-50 transition-all flex flex-col gap-2">
                   <div className="flex justify-between items-start">
                      <div className="text-xs font-black text-slate-900 tracking-tight">{item.type}</div>
                      <div className="text-sm font-black text-orange-500 italic">+{item.amount}</div>
                   </div>
                   <div className="text-[10px] font-bold text-slate-400 border-l border-slate-100 pl-3 mt-1">
                      {item.details}
                   </div>
                   <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-50/50">
                      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-300">
                         {item.status === 'Validé' ? <CheckCircle2 className="w-3 h-3 text-emerald-500" /> : <Clock className="w-3 h-3 text-orange-400" />}
                         {item.status}
                      </div>
                      <div className="text-[9px] font-black text-slate-300 italic">{item.date}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
