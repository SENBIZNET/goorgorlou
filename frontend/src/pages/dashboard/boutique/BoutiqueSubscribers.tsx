import { 
  Users, 
  Search, 
  Filter, 
  ChevronRight, 
  CreditCard, 
  Calendar,
  Phone,
  MoreVertical,
  CheckCircle2,
  Clock,
  Navigation,
  ChevronLeft,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';

const subscribers = [
  { id: 'SG-29318821', name: 'Alhassane Sanhá', phone: '+245 95 123 45 67', pack: 'FOMI CABA', status: 'Payé', lastDelivery: 'Il y a 2 jours', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  { id: 'SG-92817452', name: 'Mariama Djalo', phone: '+245 95 876 54 32', pack: 'FOMI CABA +', status: 'Retard', lastDelivery: 'Il y a 3 semaines', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  { id: 'SG-33445512', name: 'Augusto Correia', phone: '+245 96 333 44 55', pack: 'NO CONTENTI', status: 'Payé', lastDelivery: 'Aujourd\'hui', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
  { id: 'SG-99900113', name: 'Fatoumata Binta', phone: '+245 95 999 00 11', pack: 'FOMI CABA', status: 'Payé', lastDelivery: 'Il y a 1 semaine', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200' },
  { id: 'SG-55511224', name: 'Moussa Baldé', phone: '+245 95 555 11 22', pack: 'FOMI CABA +', status: 'Payé', lastDelivery: 'Hier', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200' },
  { id: 'SG-44488995', name: 'Awa Diop', phone: '+245 96 444 88 99', pack: 'NO CONTENTI', status: 'Retard', lastDelivery: 'Il y a 1 mois', image: 'https://images.unsplash.com/photo-1523824921871-d6f1a3215111?auto=format&fit=crop&q=80&w=200' },
];

export default function BoutiqueSubscribers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'Payé' | 'Retard'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredSubscribers = useMemo(() => {
    return subscribers.filter(sub => {
      const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           sub.phone.includes(searchTerm);
      const matchesFilter = filterStatus === 'all' || sub.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus]);

  const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
  const paginatedSubscribers = filteredSubscribers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">mes abonnés rattachés</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gestion des clients fidélisés à votre point de distribution</p>
        </div>
        
        <div className="flex gap-4">
           <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-6 shadow-sm">
              <div className="flex -space-x-3">
                 {subscribers.slice(0, 3).map((sub, i) => (
                   <img key={i} src={sub.image} className="w-10 h-10 rounded-xl border-2 border-white object-cover" alt="" />
                 ))}
                 <div className="w-10 h-10 rounded-xl border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] font-black text-white italic">+121</div>
              </div>
              <div className="h-8 w-px bg-slate-100" />
              <div>
                 <div className="text-xl font-black text-slate-900 italic leading-none">124</div>
                 <div className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-0.5">Total Clients</div>
              </div>
           </div>
        </div>
      </header>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden min-h-[600px] flex flex-col">
         <div className="p-8 border-b border-slate-50 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  Liste des Profils
               </h3>
               <span className="bg-slate-50 text-[10px] font-black text-slate-400 px-3 py-1 rounded-full uppercase tracking-widest">Secteur: Bissau-Moyen</span>
            </div>
            <div className="flex gap-4">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input 
                    type="text" 
                    placeholder="Nom ou téléphone..." 
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-slate-50 border-none pl-11 pr-6 py-2.5 rounded-xl text-xs font-bold w-64 focus:ring-2 focus:ring-orange-500/20" 
                  />
               </div>
               <div className="flex bg-slate-50 rounded-xl p-1 gap-1">
                  {(['all', 'Payé', 'Retard'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setFilterStatus(status);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                        filterStatus === status ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {status === 'all' ? 'Tous' : status === 'Payé' ? 'À Jour' : 'Retard'}
                    </button>
                  ))}
               </div>
            </div>
         </div>

         <div className="flex-grow overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50/30">
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-10">Abonné</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type d'Offre</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Dernière Ration</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">État Financier</th>
                     <th className="p-6 text-right pr-10"></th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  <AnimatePresence mode='popLayout'>
                    {paginatedSubscribers.map((sub) => (
                      <motion.tr 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={sub.id} 
                        className="hover:bg-slate-50/50 transition-all group cursor-pointer"
                      >
                         <td className="p-6 pl-10">
                            <div className="flex items-center gap-4">
                               <img src={sub.image} className="w-12 h-12 rounded-2xl object-cover shadow-sm group-hover:scale-110 transition-transform" alt="" />
                               <div>
                                  <div className="text-sm font-black text-slate-900">{sub.name}</div>
                                  <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-0.5">
                                     <Phone className="w-3 h-3 text-orange-500" /> {sub.phone}
                                  </div>
                               </div>
                            </div>
                         </td>
                         <td className="p-6">
                              <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1 rounded-lg">
                                 {sub.pack}
                              </span>
                         </td>
                         <td className="p-6 text-center">
                            <div className="flex flex-col items-center">
                               <div className="text-xs font-black text-slate-900">{sub.lastDelivery}</div>
                               <div className="flex items-center gap-1 text-[9px] font-black text-slate-300 uppercase tracking-widest mt-1">
                                  <Clock className="w-3 h-3" /> Historique
                               </div>
                            </div>
                         </td>
                         <td className="p-6">
                            <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${
                              sub.status === 'Payé' ? 'text-emerald-500' : 'text-red-500'
                            }`}>
                               {sub.status === 'Payé' ? <CheckCircle2 className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                               {sub.status === 'Payé' ? 'À jour' : 'Retard Paiement'}
                            </div>
                         </td>
                         <td className="p-6 text-right pr-10">
                            <div className="flex items-center justify-end gap-2">
                               <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all active:scale-95">
                                  <Navigation className="w-4 h-4" />
                               </button>
                               <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900 transition-all active:scale-95">
                                  <MoreVertical className="w-4 h-4" />
                               </button>
                            </div>
                         </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
               </tbody>
            </table>
            {paginatedSubscribers.length === 0 && (
              <div className="py-20 text-center">
                <Users className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Aucun abonné trouvé</p>
                <button 
                  onClick={() => { setSearchTerm(''); setFilterStatus('all'); }}
                  className="mt-4 text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                >
                  <X className="w-4 h-4" /> Réinitialiser
                </button>
              </div>
            )}
         </div>

         <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
              Affichage de {paginatedSubscribers.length} sur {filteredSubscribers.length} abonnés {searchTerm || filterStatus !== 'all' ? 'filtrés' : 'rattachés'}
            </p>
            <div className="flex gap-2">
               <button 
                 disabled={currentPage === 1}
                 onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                 className="px-4 py-2 bg-white border border-slate-100 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
               >
                 <ChevronLeft className="w-4 h-4" /> Précédent
               </button>
               <button 
                 disabled={currentPage === totalPages || totalPages === 0}
                 onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                 className="px-4 py-2 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
               >
                 Suivant <ChevronRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
