import { 
  Bell, 
  Send, 
  Search, 
  Filter,
  MoreVertical,
  Mail,
  Smartphone,
  Info,
  CheckCircle2,
  AlertTriangle,
  History,
  Clock,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

const notifications = [
  { id: '1', title: 'Maintenance Système', message: 'Une maintenance est prévue ce dimanche à 02:00.', target: 'Tous les membres', status: 'Envoyé', time: 'Il y a 2h', type: 'info' },
  { id: '2', title: 'Alerte Stock Critique', message: 'Le stock de Riz 50kg est inférieur à 10 unités à Bandim.', target: 'Gérants Boutique', status: 'Échec', time: 'Il y a 4h', type: 'warning' },
  { id: '3', title: 'Promotion Fomi Caba +', message: 'Bénéficiez de 10% de réduction pour toute nouvelle inscription.', target: 'Liste Attente', status: 'Planifié', time: 'Demain, 09h00', type: 'promo' },
  { id: '4', title: 'Confirmation de Livraison', message: 'Votre pack a bien été livré par Mamadu.', target: 'Abonné #1284', status: 'Envoyé', time: 'Hier', type: 'success' },
];

export default function AdminNotifications() {
  return (
    <div className="p-8 space-y-10 max-w-[1200px] mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-600 rounded-lg shadow-lg shadow-orange-900/20">
                 <Bell className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none">notifications</h1>
           </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gérez les communications système et les alertes automatiques</p>
        </div>
        
        <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 group">
          <span>Envoyer une notification</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Envoyées', val: '12.4k', icon: Info, color: 'emerald' },
          { label: 'En attente', val: '42', icon: Clock, color: 'blue' },
          { label: 'Échecs', val: '5', icon: AlertTriangle, color: 'red' },
          { label: 'Taux Ouv.', val: '86%', icon: Smartphone, color: 'orange' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center justify-between shadow-sm">
             <div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xl font-black text-slate-900">{stat.val}</div>
             </div>
             <stat.icon className={`w-6 h-6 text-${stat.color}-500/30`} />
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden min-h-[500px]">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
           <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <History className="w-4 h-4 text-slate-400" />
              Journal des envois
           </h3>
           <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-300 transition-colors"><Search className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-300 transition-colors"><Filter className="w-4 h-4" /></button>
           </div>
        </div>

        <div className="divide-y divide-slate-50">
          {notifications.map((notif, i) => (
            <motion.div 
              key={notif.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="p-8 hover:bg-slate-50/50 transition-all flex items-start gap-8 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:rotate-3 shadow-sm ${
                notif.type === 'info' ? 'bg-blue-50 border-blue-100 text-blue-500' :
                notif.type === 'warning' ? 'bg-orange-50 border-orange-100 text-orange-500' :
                notif.type === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-500' :
                'bg-slate-50 border-slate-100 text-slate-500'
              }`}>
                 {notif.type === 'info' && <Info className="w-6 h-6" />}
                 {notif.type === 'warning' && <AlertTriangle className="w-6 h-6" />}
                 {notif.type === 'success' && <CheckCircle2 className="w-6 h-6" />}
                 {notif.type === 'promo' && <Smartphone className="w-6 h-6" />}
              </div>

              <div className="flex-grow">
                 <div className="flex justify-between items-start mb-2">
                    <div>
                       <div className="font-black text-slate-900 text-base">{notif.title}</div>
                       <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1"><Users className="w-3 h-3" /> {notif.target}</span>
                          <span className="text-[10px] font-bold text-slate-300 italic">{notif.time}</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                         notif.status === 'Envoyé' ? 'bg-emerald-100 text-emerald-600' : 
                         notif.status === 'Échec' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                       }`}>
                         {notif.status}
                       </span>
                       <button className="text-slate-200 hover:text-slate-900 transition-colors"><MoreVertical className="w-5 h-5" /></button>
                    </div>
                 </div>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">{notif.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
