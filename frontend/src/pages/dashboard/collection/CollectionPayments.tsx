import { Wallet, History, ArrowDownCircle, Download, CheckCircle2, Clock, Calendar, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const paymentData = [
  { day: 'Lun', amount: 45000 },
  { day: 'Mar', amount: 82000 },
  { day: 'Mer', amount: 61000 },
  { day: 'Jeu', amount: 95000 },
  { day: 'Ven', amount: 124000 },
];

const transactions = [
  { id: 'REC-01', client: 'Alhassane S.', amount: '5,000 F', type: 'Paiement Espèces', date: 'Aujourd\'hui, 09:12', status: 'Encaissé' },
  { id: 'REC-02', client: 'Fatoumata B.', amount: '12,500 F', type: 'Orange Money', date: 'Hier, 17:45', status: 'Encaissé' },
  { id: 'REC-03', client: 'Augusto C.', amount: '2,100 F', type: 'Paiement Espèces', date: 'Hier, 11:20', status: 'Encaissé' },
  { id: 'REC-04', client: 'Mariama D.', amount: '8,400 F', type: 'Paiement Espèces', date: '2 Mai, 15:30', status: 'Encaissé' },
  { id: 'REC-05', client: 'Ousmane F.', amount: '3,000 F', type: 'Paiement Espèces', date: '2 Mai, 10:15', status: 'Encaissé' },
];

export default function CollectionPayments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => 
      t.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">recettes quotidiennes</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Journal de bord des encaissements terrain et versements</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
          <Download className="w-4 h-4" />
          Relevé Hebdo
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
           {/* Chart */}
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase tracking-tight mb-8">volume de recouvrement</h3>
              <div className="h-[300px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={paymentData}>
                       <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 800, fill: '#94a3b8'}} />
                       <YAxis hide />
                       <Tooltip />
                       <Area type="monotone" dataKey="amount" stroke="#f97316" strokeWidth={4} fill="#f97316" fillOpacity={0.05} />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>

           {/* Transactions */}
           <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[400px]">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                 <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <History className="w-5 h-5 text-orange-600" />
                    Dernières Recettes
                 </h3>
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input 
                      type="text" 
                      placeholder="Client, type..." 
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-slate-50 border-none pl-11 pr-6 py-2 rounded-xl text-xs font-bold w-48 focus:ring-2 focus:ring-orange-500/20 focus:w-64 transition-all" 
                    />
                 </div>
              </div>
              <div className="divide-y divide-slate-50 flex-grow">
                 <AnimatePresence mode='popLayout'>
                   {paginatedTransactions.map((t) => (
                     <motion.div 
                       layout
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       key={t.id} 
                       className="p-8 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group"
                     >
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                              <ArrowDownCircle className="w-6 h-6 text-emerald-600" />
                           </div>
                           <div>
                              <div className="text-sm font-black text-slate-900">{t.amount}</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.client} • {t.type}</div>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="text-[9px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 justify-end">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {t.status}
                           </div>
                           <div className="text-[9px] font-bold text-slate-300 italic mt-1">{t.date}</div>
                        </div>
                     </motion.div>
                   ))}
                 </AnimatePresence>
                 {paginatedTransactions.length === 0 && (
                   <div className="py-20 text-center">
                     <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Aucune transaction trouvée</p>
                   </div>
                 )}
              </div>
              <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between mt-auto">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Page {currentPage} sur {totalPages || 1}</p>
                 <div className="flex gap-2">
                    <button 
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      className="p-2 bg-white border border-slate-100 text-slate-900 rounded-xl hover:bg-slate-50 disabled:opacity-50 transition-all"
                    >
                       <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      disabled={currentPage === totalPages || totalPages === 0}
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      className="p-2 bg-slate-900 text-white rounded-xl hover:bg-orange-600 disabled:opacity-50 transition-all"
                    >
                       <ChevronRight className="w-4 h-4" />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="relative z-10 w-full flex flex-col items-center">
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-4">Solde en main (Espèces)</div>
                 <div className="text-5xl font-black italic mb-2 text-orange-500">12,100 F</div>
                 <p className="text-[10px] font-bold text-slate-400 italic mb-8">Pointage effectué à 09:00</p>
                 <button className="w-full bg-white text-slate-900 font-black py-4 rounded-xl uppercase tracking-widest text-[10px] hover:bg-orange-500 hover:text-white transition-all shadow-xl active:scale-95">
                    Déposer au siège
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
