import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Filter,
  Download,
  CreditCard,
  History,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  PieChart
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const transactionData = [
  { month: 'Jan', revenue: 42000000, collections: 38000000 },
  { month: 'Fév', revenue: 48000000, collections: 41000000 },
  { month: 'Mar', revenue: 45000000, collections: 42000000 },
  { month: 'Avr', revenue: 58000000, collections: 52000000 },
  { month: 'Mai', revenue: 62000000, collections: 59000000 },
];

const creditStatus = [
  { name: 'À jour', value: 85, color: '#10b981' },
  { name: 'Retard < 30j', value: 10, color: '#f59e0b' },
  { name: 'Retard > 30j', value: 5, color: '#ef4444' },
];

const transactions = [
  { id: 'TX-9281', user: 'Mamadu Djalo', type: 'Mensualité', amount: '45,000 F', status: 'Payé', date: 'Aujourd\'hui, 10:22', method: 'Orange Money' },
  { id: 'TX-9280', user: 'Fatima Cassamá', type: 'Mensualité', amount: '31,000 F', status: 'Payé', date: 'Aujourd\'hui, 09:15', method: 'MTN MoMo' },
  { id: 'TX-9279', user: 'Augusto Correia', type: 'Dépôt', amount: '150,000 F', status: 'En attente', date: 'Hier, 18:30', method: 'Virement' },
  { id: 'TX-9278', user: 'Baciro Sanhá', type: 'Mensualité', amount: '45,000 F', status: 'Échec', date: 'Hier, 14:20', method: 'Orange Money' },
];

export default function AdminFinances() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">gestion des finances</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Surveillance des flux de trésorerie et recouvrement des crédits</p>
        </div>
        
        <div className="flex gap-3">
           <button className="flex items-center gap-2 bg-white border border-slate-100 text-slate-900 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
             <Download className="w-4 h-4" />
             Exporter l'état financier
           </button>
           <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
             <Wallet className="w-4 h-4" />
             Réconcilier
           </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Chiffre d\'Affaires Total', value: '328.4M F', sub: 'vs mois dernier', trend: '+12.4%', up: true, color: 'bg-slate-900' },
          { label: 'Crédits Encours', value: '42.8M F', sub: 'Taux recouvrement 92%', trend: '-2.1%', up: false, color: 'bg-white' },
          { label: 'Fonds Disponibles', value: '185.2M F', sub: 'Réserve de sécurité OK', trend: '+5.7%', up: true, color: 'bg-white' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} ${stat.color === 'bg-white' ? 'border border-slate-100 shadow-sm text-slate-900' : 'text-white shadow-2xl shadow-slate-200'} p-10 rounded-[3rem] relative overflow-hidden group`}>
             <div className="relative z-10">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">{stat.label}</div>
                <div className="text-4xl font-black italic mb-4">{stat.value}</div>
                <div className="flex items-center gap-2">
                   <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${stat.up ? 'bg-emerald-500/20 text-emerald-500' : 'bg-red-500/20 text-red-500'}`}>
                      {stat.trend}
                   </span>
                   <span className="text-[9px] font-black uppercase tracking-widest opacity-30">{stat.sub}</span>
                </div>
             </div>
             <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <TrendingUp className="w-full h-full" />
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight">revenus vs recouvrements</h3>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-orange-500" /> Ventes
                 </div>
                 <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-slate-900" /> Recouvrement
                 </div>
              </div>
           </div>
           <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={transactionData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={3} fill="#f97316" fillOpacity={0.05} />
                    <Area type="monotone" dataKey="collections" stroke="#0f172a" strokeWidth={3} fill="#0f172a" fillOpacity={0.05} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Credit Breakdown */}
        <div className="lg:col-span-4 bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between">
           <h3 className="text-xl font-black font-display italic lowercase mb-8">santé du crédit</h3>
           <div className="space-y-8">
              {creditStatus.map((item, i) => (
                <div key={i} className="space-y-3">
                   <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.name}</span>
                      <span className="text-xl font-black italic">{item.value}%</span>
                   </div>
                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-[2rem] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                 <PieChart className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                 <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Alerte Débiteurs</div>
                 <div className="text-xs font-bold mt-0.5">8 clients identifiés à risque ce mois.</div>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
         <div className="p-8 border-b border-slate-50 flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
               <History className="w-5 h-5 text-orange-600" />
               Transactions Récentes
            </h3>
            <div className="flex gap-4">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input type="text" placeholder="Rechercher..." className="bg-slate-50 border-none pl-11 pr-6 py-2.5 rounded-xl text-xs font-bold w-64 focus:ring-2 focus:ring-orange-500/20" />
               </div>
               <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900 transition-colors">
                  <Filter className="w-5 h-5" />
               </button>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50/30">
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-10">Client & Type</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Montant</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Méthode</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right pr-10">Date</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {transactions.map((tx, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-all">
                       <td className="p-6 pl-10">
                          <div className="text-sm font-black text-slate-900">{tx.user}</div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{tx.type}</div>
                       </td>
                       <td className="p-6">
                          <span className="text-sm font-black text-slate-900 italic">{tx.amount}</span>
                       </td>
                       <td className="p-6">
                          <div className="flex items-center gap-2">
                             <CreditCard className="w-3.5 h-3.5 text-slate-300" />
                             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{tx.method}</span>
                          </div>
                       </td>
                       <td className="p-6">
                          <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${
                            tx.status === 'Payé' ? 'text-emerald-500' : 
                            tx.status === 'En attente' ? 'text-orange-500' : 'text-red-500'
                          }`}>
                             {tx.status === 'Payé' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                             {tx.status}
                          </div>
                       </td>
                       <td className="p-6 text-right pr-10 text-[10px] font-bold text-slate-400 italic">
                          {tx.date}
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
