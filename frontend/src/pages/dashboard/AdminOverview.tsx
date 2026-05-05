import { 
  Users, 
  Store, 
  ArrowUpRight, 
  CreditCard, 
  Wallet,
  AlertCircle,
  TrendingUp,
  Package,
  Activity,
  ChevronRight,
  MoreVertical,
  Search,
  Filter,
  Download,
  Bell
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Lun', users: 400, revenue: 2400 },
  { name: 'Mar', users: 300, revenue: 1398 },
  { name: 'Mer', users: 200, revenue: 9800 },
  { name: 'Jeu', users: 278, revenue: 3908 },
  { name: 'Ven', users: 189, revenue: 4800 },
  { name: 'Sam', users: 239, revenue: 3800 },
  { name: 'Dim', users: 349, revenue: 4300 },
];

const packDistribution = [
  { name: 'Fomi Caba', value: 400, color: '#f97316' },
  { name: 'Fomi Caba +', value: 300, color: '#94a3b8' },
  { name: 'No Contenti', value: 300, color: '#f59e0b' },
  { name: 'No Consigui', value: 200, color: '#0891b2' },
];

const stats = [
  { label: 'Total Abonnés', value: '12,842', trend: '+12%', icon: Users, color: 'bg-blue-500' },
  { label: 'Boutiques Actives', value: '154', trend: '+3', icon: Store, color: 'bg-emerald-500' },
  { label: 'Crédit En Cours', value: '45,2M', trend: 'FCFA', icon: Wallet, color: 'bg-orange-500' },
  { label: 'Taux de Paiement', value: '92.4%', trend: '+1.5%', icon: CreditCard, color: 'bg-purple-500' },
];

const recentSubscribers = [
  { id: 'SG-29318821', name: 'Mamadu Djalo', email: 'mamadu@example.com', pack: 'Fomi Caba', date: 'Il y a 10m', status: 'Actif' },
  { id: 'SG-92817452', name: 'Fatima Cassamá', email: 'fatima@example.com', pack: 'No Contenti', date: 'Il y a 2h', status: 'En attente' },
  { id: 'SG-33445512', name: 'Alhassane Sanhá', email: 'alhassane@example.com', pack: 'No Consigui', date: 'Il y a 4h', status: 'Actif' },
  { id: 'SG-99900113', name: 'Mussa Camará', email: 'mussa@example.com', pack: 'Fomi Caba +', date: 'Hier', status: 'Inactif' },
];

export default function AdminOverview() {
  const navigate = useNavigate();

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      {/* Welcome & Global Actions */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-orange-600/10 text-orange-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Super Admin</span>
            <h1 className="text-4xl font-black text-slate-900 font-display lowercase leading-none italic italic">dashboard central</h1>
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Vue d'ensemble de la plateforme SOGUIA 4.0</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher..."
              className="bg-white border border-slate-200 pl-11 pr-6 py-3 rounded-2xl text-sm font-medium w-64 focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            />
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="w-5 h-5 text-slate-600" />
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
            <Download className="w-4 h-4" />
            Exporter
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${stat.color} opacity-[0.03] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
            
            <div className="flex justify-between items-start mb-6">
              <div className={`${stat.color} p-4 rounded-2xl shadow-lg shadow-slate-100 group-hover:scale-110 transition-transform`}>
                <stat.icon className="text-white w-6 h-6" />
              </div>
              <div className="flex items-center text-emerald-600 text-[10px] font-black bg-emerald-50 px-2.5 py-1 rounded-lg uppercase tracking-tight">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.trend}
              </div>
            </div>
            
            <div className="text-4xl font-black text-slate-900 mb-1 tracking-tight">{stat.value}</div>
            <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart Card */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-black text-slate-900 font-display italic lowercase tracking-tight mb-1">croissance des abonnements</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Évolution hebdomadaire des nouveaux inscrits</p>
            </div>
            <div className="flex gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
              <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-white shadow-sm rounded-lg text-slate-900">Mois</button>
              <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">Annéee</button>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} 
                  dy={15}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderRadius: '16px', 
                    border: 'none', 
                    padding: '12px 16px',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                  }}
                  itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 800 }}
                  labelStyle={{ display: 'none' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#f97316" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorUsers)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Small Charts / Info Cards */}
        <div className="lg:col-span-4 flex flex-col gap-8">
           <div className="flex-grow bg-slate-900 p-8 rounded-[3rem] text-white flex flex-col justify-between shadow-xl shadow-slate-200">
              <div className="flex justify-between items-start">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <Package className="text-orange-500 w-6 h-6" />
                 </div>
              </div>
              
              <div className="mt-8">
                 <div className="text-4xl font-black mb-2 tracking-tight">4,820</div>
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Packs livrés ce mois</div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Objectif Mensuel</span>
                    <span className="text-[10px] font-black text-orange-500">82%</span>
                 </div>
                 <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600 rounded-full w-[82%]" />
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-6 font-display italic lowercase">répartition des packs</h3>
              <div className="h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={packDistribution}
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {packDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                 {packDistribution.map((item, i) => (
                   <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{item.name}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Subscribers List */}
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight">nouveaux abonnés</h3>
            <button 
              onClick={() => navigate('/dashboard/admin/users')}
              className="text-[10px] font-black text-orange-600 uppercase tracking-widest hover:underline flex items-center gap-1"
            >
               Voir tout <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-4">
            {recentSubscribers.map((user) => (
              <div key={user.id} className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 rounded-[2rem] transition-all duration-300 border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-sm tracking-tight">{user.name}</div>
                    <div className="flex items-center gap-2">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{user.pack}</span>
                       <span className="w-1 h-1 bg-slate-200 rounded-full" />
                       <span className="text-[9px] font-bold text-slate-400 italic">{user.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                   <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                     user.status === 'Actif' ? 'bg-emerald-100 text-emerald-600' : 
                     user.status === 'En attente' ? 'bg-orange-100 text-orange-600' : 'bg-slate-200 text-slate-500'
                   }`}>
                      {user.status}
                   </span>
                   <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity / Alerts */}
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-orange-600/5 rounded-full blur-3xl`} />
          
          <h3 className="text-xl font-black text-slate-900 mb-8 font-display italic lowercase tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-600" />
            activité en temps réel
          </h3>
          <div className="space-y-8 relative">
            {[
              { type: 'payment', msg: 'Paiement de 31,000 F reçu de Boutique Mindará', time: 'À l\'instant', color: 'bg-emerald-500' },
              { type: 'alert', msg: 'Alerte stock: Riz 50kg insuffisant à Bandim', time: 'Il y a 5m', color: 'bg-orange-600' },
              { type: 'delivery', msg: 'Livraison pack Fomi Caba effectuée à Antula', time: 'Il y a 12m', color: 'bg-blue-600' },
              { type: 'user', msg: 'Nouvelle boutique "Afrishop" validée', time: 'Il y a 45m', color: 'bg-purple-600' }
            ].map((activity, i) => (
              <div key={i} className="flex gap-6 items-start relative">
                {i !== 3 && <div className="absolute left-3 top-10 bottom-[-32px] w-0.5 bg-slate-100" />}
                <div className={`w-6 h-6 rounded-lg ${activity.color} flex-shrink-0 animate-pulse relative z-10`} />
                <div className="flex-grow">
                  <div className="text-[11px] font-black text-slate-900 leading-normal tracking-tight mb-0.5">{activity.msg}</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => navigate('/dashboard/admin/notifications')}
            className="w-full mt-12 py-4 bg-slate-50 text-slate-400 font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-slate-100 transition-all border border-slate-100"
          >
             Voir le journal complet
          </button>
        </div>
      </div>
    </div>
  );
}
