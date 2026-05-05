import { Truck, FileText, Search, Filter, ChevronRight, Plus, CheckCircle2, Clock, ChevronLeft, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const orders = [
  { id: 'BC-1021', destination: 'SOGUIA Dépôt Central', items: '2,000 Packs', status: 'Confirmé', date: 'Livraison: 05/05' },
  { id: 'BC-1020', destination: 'Boutique Mindará', items: '300 Packs', status: 'Expédié', date: 'Livré: Hier' },
  { id: 'BC-1019', destination: 'Alimentation Bandim', items: '500 Packs', status: 'Livré', date: 'Livré: Hier' },
  { id: 'BC-1018', destination: 'Dépôt Safim', items: '1,500 Packs', status: 'Livré', date: 'Livré: 01/05' },
  { id: 'BC-1017', destination: 'Boutique Antula', items: '200 Packs', status: 'Livré', date: 'Livré: 28/04' },
  { id: 'BC-1016', destination: 'Marché Central', items: '1,200 Packs', status: 'Livré', date: 'Livré: 25/04' },
];

export default function SupplierOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredOrders = useMemo(() => {
    return orders.filter(order => 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">bons de livraison</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gestion des flux de sortie et documentation logistique</p>
        </div>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-orange-600 transition-all shadow-xl active:scale-95">
          <Plus className="w-4 h-4" />
          Nouveau Bon
        </button>
      </header>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
         <div className="p-8 border-b border-slate-50 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  Liste des Commandes
               </h3>
            </div>
            <div className="flex gap-4">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input 
                    type="text" 
                    placeholder="Référence BC..." 
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-slate-50 border-none pl-11 pr-6 py-2.5 rounded-xl text-xs font-bold w-48 focus:ring-2 focus:ring-orange-500/20 focus:w-64 transition-all" 
                  />
               </div>
            </div>
         </div>

         <div className="divide-y divide-slate-50 flex-grow">
            <AnimatePresence mode='popLayout'>
              {paginatedOrders.map((order) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={order.id} 
                  className="p-8 flex items-center justify-between hover:bg-slate-50 transition-all group cursor-pointer"
                >
                   <div className="flex items-center gap-8">
                      <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                         <Truck className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{order.id}</div>
                         <div className="text-sm font-black text-slate-900">{order.destination}</div>
                         <div className="text-[10px] font-bold text-slate-400 mt-0.5">{order.items}</div>
                      </div>
                   </div>

                   <div className="flex items-center gap-12">
                      <div className="text-right">
                         <div className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-2 justify-end mb-1 ${
                           order.status === 'Confirmé' ? 'text-orange-600' : 
                           order.status === 'Expédié' ? 'text-blue-600' : 'text-emerald-600'
                         }`}>
                            {order.status === 'Livré' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                            {order.status}
                         </div>
                         <div className="text-[9px] font-bold text-slate-300 italic">{order.date}</div>
                      </div>
                      <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all active:scale-95">
                         <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {paginatedOrders.length === 0 && (
              <div className="py-20 text-center">
                <FileText className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Aucune commande trouvée</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                >
                  <X className="w-4 h-4" /> Réinitialiser
                </button>
              </div>
            )}
         </div>

         <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between mt-auto">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Page {currentPage} sur {totalPages || 1}</p>
            <div className="flex gap-2">
               <button 
                 disabled={currentPage === 1}
                 onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                 className="p-2 bg-white border border-slate-100 text-slate-900 rounded-xl hover:bg-slate-50 disabled:opacity-50 transition-all flex items-center gap-2 px-4"
               >
                 <ChevronLeft className="w-4 h-4" /> <span className="font-black text-[10px] uppercase tracking-widest">Précédent</span>
               </button>
               <button 
                 disabled={currentPage === totalPages || totalPages === 0}
                 onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                 className="p-2 bg-slate-900 text-white rounded-xl hover:bg-orange-600 disabled:opacity-50 transition-all flex items-center gap-2 px-4"
               >
                 <span className="font-black text-[10px] uppercase tracking-widest">Suivant</span> <ChevronRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
