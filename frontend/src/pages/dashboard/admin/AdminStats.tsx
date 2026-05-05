import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingDown,
  Calendar,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const revenueData = [
  { month: 'Jan', amount: 45000000 },
  { month: 'Fév', amount: 52000000 },
  { month: 'Mar', amount: 48000000 },
  { month: 'Avr', amount: 61000000 },
  { month: 'Mai', amount: 55000000 },
  { month: 'Jun', amount: 67000000 },
];

const packSalesData = [
  { name: 'Fomi Caba', sales: 420 },
  { name: 'Fomi Caba +', sales: 380 },
  { name: 'No Contenti', sales: 290 },
  { name: 'No Consigui', sales: 150 },
];

const colors = ['#f97316', '#0f172a', '#94a3b8', '#cbd5e1'];

export default function AdminStats() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">statistiques avancées</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Analyse approfondie des performances de SOGUIA 4.0</p>
        </div>
        
        <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
           <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white rounded-xl shadow-lg">7 Derniers Jours</button>
           <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">30 Jours</button>
           <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Année</button>
        </div>
      </header>

      {/* Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Revenu Total', value: '328.4M F', trend: '+14.2%', up: true, icon: TrendingUp },
          { label: 'Nouveaux Abonnés', value: '+1,242', trend: '+5.4%', up: true, icon: Users },
          { label: 'Commandes Libérées', value: '8,420', trend: '-2.1%', up: false, icon: ShoppingBag },
          { label: 'Taux de Conversion', value: '12.4%', trend: '+0.8%', up: true, icon: BarChart3 },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
               <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-slate-900" />
               </div>
               <div className={`flex items-center text-[10px] font-black px-2 py-1 rounded-lg ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.trend}
               </div>
            </div>
            <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue Trend Chart */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight">évolution du chiffre d'affaires (FCFA)</h3>
            <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition-colors"><Calendar className="w-5 h-5" /></button>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '16px', border: 'none', padding: '12px' }}
                  itemStyle={{ color: '#fff', fontWeight: 800, fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="amount" stroke="#f97316" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pack Popularity Chart */}
        <div className="lg:col-span-4 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight mb-10">volume par pack</h3>
          <div className="flex-grow flex items-center justify-center">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={packSalesData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#475569' }} width={80} />
                  <Tooltip />
                  <Bar dataKey="sales" radius={[0, 10, 10, 0]} barSize={20}>
                    {packSalesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-50 space-y-3">
             {packSalesData.map((item, i) => (
               <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[i] }} />
                     <span className="text-[10px] font-black uppercase text-slate-500">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-900">{item.sales} ventes</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <h3 className="text-xl font-black font-display italic lowercase mb-8">prévisions du mois prochain</h3>
            <div className="flex items-center gap-8">
               <div className="w-24 h-24 rounded-full border-4 border-orange-500/20 flex items-center justify-center relative">
                  <div className="text-2xl font-black text-orange-500">+18%</div>
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                     <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-orange-500" strokeDasharray="276" strokeDashoffset="50" />
                  </svg>
               </div>
               <div className="space-y-2 max-w-sm">
                  <p className="text-sm font-bold text-white/80 leading-relaxed italic italic">Basé sur les tendances actuelles, nous prévoyons une augmentation de 18% des nouveaux abonnements à Mindará et Bandim.</p>
                  <button className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 flex items-center gap-2 hover:translate-x-1 transition-transform">Explorer le Modèle IA <ArrowUpRight className="w-4 h-4" /></button>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight mb-1">santé du réseau</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance des boutiques partenaires</p>
               </div>
               <Filter className="w-5 h-5 text-slate-300" />
            </div>
            <div className="space-y-6">
               {[
                 { label: 'Temps de livraison moyen', value: '2.4h', progress: 85 },
                 { label: 'Disponibilité des stocks', value: '94.2%', progress: 94 },
                 { label: 'Satisfaction client', value: '4.8/5', progress: 96 },
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                       <span className="text-slate-400">{item.label}</span>
                       <span className="text-slate-900">{item.value}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-slate-900 rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
