import { 
  Users, 
  Search, 
  Filter, 
  Download,
  MoreVertical,
  ChevronRight,
  UserPlus,
  Mail,
  Phone,
  ShieldCheck,
  Ban
} from 'lucide-react';
import { motion } from 'motion/react';

const subscribers = [
  { id: '1', name: 'Mamadu Djalo', email: 'mamadu@example.com', phone: '+245 95 000 00 01', pack: 'Fomi Caba', status: 'Actif', joined: '12 Mars 2026' },
  { id: '2', name: 'Fatima Cassamá', email: 'fatima@example.com', phone: '+245 95 000 00 02', pack: 'No Contenti', status: 'En attente', joined: '14 Mars 2026' },
  { id: '3', name: 'Alhassane Sanhá', email: 'alhassane@example.com', phone: '+245 95 000 00 03', pack: 'No Consigui', status: 'Actif', joined: '15 Mars 2026' },
  { id: '4', name: 'Mussa Camará', email: 'mussa@example.com', phone: '+245 95 000 00 04', pack: 'Fomi Caba +', status: 'Inactif', joined: '10 Mars 2026' },
  { id: '5', name: 'Aissatou Baldé', email: 'aissa@example.com', phone: '+245 95 000 00 05', pack: 'Fomi Caba', status: 'Actif', joined: '16 Mars 2026' },
];

export default function AdminUsers() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">gestion des abonnés</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Consultez et gérez la base de données des membres</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
            <UserPlus className="w-4 h-4" />
            Nouvel Abonné
          </button>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un nom, email..."
              className="bg-slate-50 border border-slate-100 pl-11 pr-6 py-2.5 rounded-xl text-xs font-medium w-64 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-100">
            <Filter className="w-3 h-3" />
            Filtres
          </button>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
          <Download className="w-3 h-3" />
          Exporter CSV
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-10">Membre</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pack Actuel</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date d'adhésion</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right pr-10">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {subscribers.map((user, i) => (
              <motion.tr 
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="p-6 pl-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center font-black text-white text-sm shadow-lg shadow-slate-200">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-sm tracking-tight">{user.name}</div>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400"><Mail className="w-2.5 h-2.5" /> {user.email}</span>
                        <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400"><Phone className="w-2.5 h-2.5" /> {user.phone}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">{user.pack}</span>
                </td>
                <td className="p-6">
                  <span className="text-xs font-bold text-slate-500 italic">{user.joined}</span>
                </td>
                <td className="p-6">
                  <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                    user.status === 'Actif' ? 'bg-emerald-100 text-emerald-600' : 
                    user.status === 'En attente' ? 'bg-orange-100 text-orange-600' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-6 pr-10 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-emerald-500 transition-all shadow-sm">
                      <ShieldCheck className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-red-500 transition-all shadow-sm">
                      <Ban className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Affichage de 5 sur 12,842 membres</div>
          <div className="flex gap-2">
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase text-slate-400 cursor-not-allowed">Précédent</button>
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase text-slate-900 hover:bg-slate-50">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}
