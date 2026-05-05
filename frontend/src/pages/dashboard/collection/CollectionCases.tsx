import { Users, Search, Filter, Phone, MapPin, ChevronRight, AlertCircle, Clock, ChevronLeft, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const clients = [
  { id: 'SG-29318821', name: 'Alhassane Sanhá', balance: '12,500 F', status: 'En retard', delay: '12j', phone: '951234567', location: 'Bissau, Mindará' },
  { id: 'SG-92817452', name: 'Mariama Djalo', balance: '8,400 F', status: 'Contentieux', delay: '45j', phone: '958765432', location: 'Bissau, Bandim' },
  { id: 'SG-33445512', name: 'Augusto Correia', balance: '4,200 F', status: 'À jour', delay: '0j', phone: '963334455', location: 'Bissau, Santa Luzia' },
  { id: 'SG-99900113', name: 'Fatoumata Binta', balance: '31,000 F', status: 'En retard', delay: '15j', phone: '959990011', location: 'Bissau, Antula' },
  { id: 'SG-55511224', name: 'Domingos Lopes', balance: '0 F', status: 'À jour', delay: '0j', phone: '951112233', location: 'Bissau, Safim' },
  { id: 'SG-44488995', name: 'N\'fali Cassamá', balance: '15,000 F', status: 'En retard', delay: '5j', phone: '964445566', location: 'Bissau, Plaquá 2' },
];

export default function CollectionCases() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const statuses = ['Tous', 'À jour', 'En retard', 'Contentieux'];

  const filteredClients = useMemo(() => {
    return clients.filter(client => {
      const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           client.phone.includes(searchTerm);
      const matchesFilter = filterStatus === 'Tous' || client.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus]);

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header>
        <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">dossiers clients</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gestion détaillée des portefeuilles et historiques de paiement</p>
      </header>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden min-h-[600px] flex flex-col">
         <div className="p-8 border-b border-slate-50 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  Base de données
               </h3>
            </div>
            <div className="flex gap-4">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input 
                    type="text" 
                    placeholder="Rechercher un client..." 
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-slate-50 border-none pl-11 pr-6 py-2.5 rounded-xl text-xs font-bold w-64 focus:ring-2 focus:ring-orange-500/20" 
                  />
               </div>
               <div className="flex bg-slate-50 rounded-xl p-1 gap-1">
                  {statuses.map((status) => (
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
                      {status}
                    </button>
                  ))}
               </div>
            </div>
         </div>

         <div className="flex-grow overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50/30">
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-10">Client</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Localisation</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Balance</th>
                     <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</th>
                     <th className="p-6 text-right pr-10">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  <AnimatePresence mode='popLayout'>
                    {paginatedClients.map((client) => (
                      <motion.tr 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={client.id} 
                        className="hover:bg-slate-50/50 transition-all group cursor-pointer"
                      >
                         <td className="p-6 pl-10">
                            <div>
                               <div className="text-sm font-black text-slate-900">{client.name}</div>
                               <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-0.5">
                                  <Phone className="w-3 h-3 text-orange-500" /> {client.phone}
                               </div>
                            </div>
                         </td>
                         <td className="p-6">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                               <MapPin className="w-4 h-4 text-orange-500" />
                               {client.location}
                            </div>
                         </td>
                         <td className="p-6">
                            <div className="text-sm font-black text-slate-900 italic">{client.balance}</div>
                            <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mt-0.5">{client.delay} de retard</div>
                         </td>
                         <td className="p-6">
                            <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                               client.status === 'À jour' ? 'bg-emerald-100 text-emerald-600' : 
                               client.status === 'En retard' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                            }`}>
                               {client.status}
                            </span>
                         </td>
                         <td className="p-6 text-right pr-10">
                            <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-all active:scale-90">
                               <ChevronRight className="w-4 h-4" />
                            </button>
                         </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
               </tbody>
            </table>
            {paginatedClients.length === 0 && (
              <div className="py-20 text-center">
                <Users className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Aucun client trouvé</p>
                <button 
                  onClick={() => { setSearchTerm(''); setFilterStatus('Tous'); }}
                  className="mt-4 text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                >
                  <X className="w-4 h-4" /> Réinitialiser
                </button>
              </div>
            )}
         </div>

         <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between mt-auto">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
              Affichage de {paginatedClients.length} sur {filteredClients.length} dossiers
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
