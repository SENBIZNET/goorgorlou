import { BarChart3, TrendingUp, Download, PieChart, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const data = [
  { month: 'Jan', volume: 12000 },
  { month: 'Fév', volume: 15400 },
  { month: 'Mar', volume: 11200 },
  { month: 'Avr', volume: 18900 },
  { month: 'Mai', volume: 22000 },
];

const COLORS = ['#f97316', '#0f172a', '#e2e8f0', '#94a3b8'];

export default function SupplierStats() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">analyses & volumes</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Indicateurs de performance et prévisions de production</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 flex items-center gap-3 shadow-sm hover:border-slate-300 transition-all cursor-pointer">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-widest">Mai 2024</span>
           </div>
           <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
              <Download className="w-4 h-4 mr-2 inline-block" />
              Rapport PDF
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
           <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight mb-10">croissance du volume expédié</h3>
           <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={data}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="volume" stroke="#f97316" strokeWidth={4} fill="#f97316" fillOpacity={0.05} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between h-[300px]">
              <div>
                 <PieChart className="w-8 h-8 text-orange-500 mb-6" />
                 <h3 className="text-2xl font-black italic lowercase tracking-tight mb-2">Répartition Produits</h3>
                 <p className="text-slate-400 font-medium text-xs leading-relaxed">Le pack FOMI CABA représente 78% de votre volume de production actuel.</p>
              </div>
              <div className="flex gap-2">
                 <div className="h-2 flex-grow bg-orange-500 rounded-full" />
                 <div className="h-2 w-12 bg-white/10 rounded-full" />
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Efficacité du mois</div>
                    <div className="text-2xl font-black text-slate-900 italic">+21.4%</div>
                 </div>
              </div>
              <div className="text-[10px] font-bold text-slate-400 leading-relaxed italic">Progression significative par rapport à la même période l'année dernière.</div>
           </div>
        </div>
      </div>
    </div>
  );
}
