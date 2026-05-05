import { 
  Package, 
  ArrowDownCircle, 
  ArrowUpCircle, 
  AlertTriangle, 
  Plus, 
  History,
  Search,
  Filter,
  BarChart3,
  TrendingDown,
  X,
  CheckCircle2,
  FileText,
  Truck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';

const inventoryItems = [
  { id: '1', name: 'FOMI CABA', sku: 'PK-FOMI-01', stock: 32, unit: 'Packs', minStock: 20, status: 'OK', category: 'Standard' },
  { id: '2', name: 'FOMI CABA +', sku: 'PK-FOMI-02', stock: 12, unit: 'Packs', minStock: 15, status: 'Bas', category: 'Premium' },
  { id: '3', name: 'NO CONTENTI', sku: 'PK-NOC-01', stock: 8, unit: 'Packs', minStock: 10, status: 'Bas', category: 'Economique' },
  { id: '4', name: 'Sac de Riz (50kg)', sku: 'RZ-50K', stock: 45, unit: 'Sacs', minStock: 30, status: 'OK', category: 'Vrac' },
  { id: '5', name: 'Huile de Palme (5L)', sku: 'HP-05L', stock: 28, unit: 'Bidons', minStock: 20, status: 'OK', category: 'Vrac' },
  { id: '6', name: 'Savon Liquide', sku: 'SV-LQ-01', stock: 15, unit: 'Bouteilles', minStock: 10, status: 'OK', category: 'Hygiène' },
  { id: '7', name: 'Lait en Poudre', sku: 'LT-PD-01', stock: 5, unit: 'Boites', minStock: 12, status: 'Bas', category: 'Alimentation' },
];

export default function BoutiqueInventory() {
  const [activeModal, setActiveModal] = useState<'history' | 'order' | 'anticipate' | null>(null);
  const [orderStep, setOrderStep] = useState<'form' | 'success'>('form');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const categories = ['Tous', ...Array.from(new Set(inventoryItems.map(item => item.category)))];

  const filteredItems = useMemo(() => {
    return inventoryItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterCategory === 'Tous' || item.category === filterCategory;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterCategory]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">gestion du stock</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Inventaire temps réel et demandes de réapprovisionnement</p>
        </div>
        
        <div className="flex gap-3">
           <button 
             onClick={() => setActiveModal('history')}
             className="flex items-center gap-2 bg-white border border-slate-100 text-slate-900 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95"
           >
              <History className="w-4 h-4" />
              Historique
           </button>
           <button 
             onClick={() => {
               setOrderStep('form');
               setActiveModal('order');
             }}
             className="flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 group active:scale-95"
           >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              Commander Stock
           </button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: 'Total Articles', val: '125', icon: Package, color: 'text-slate-900' },
          { label: 'Alertes Stock Bas', val: filteredItems.filter(i => i.status === 'Bas').length.toString(), icon: AlertTriangle, color: 'text-orange-500' },
          { label: 'Entrées du mois', val: '+45', icon: ArrowDownCircle, color: 'text-emerald-500' },
          { label: 'Sorties / Libérations', val: '-82', icon: ArrowUpCircle, color: 'text-blue-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-slate-300 transition-all">
             <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-slate-900 italic tracking-tight">{stat.val}</div>
             </div>
             <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inventory List */}
        <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden min-h-[500px]">
           <div className="p-8 border-b border-slate-50 flex flex-wrap items-center justify-between gap-6">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                 <BarChart3 className="w-5 h-5 text-orange-500" />
                 État actuel des rayons
              </h3>
              <div className="flex gap-2">
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input 
                      type="text" 
                      placeholder="SKU, Nom..." 
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-slate-50 border-none pl-11 pr-6 py-2 rounded-xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20 w-48 transition-all focus:w-64" 
                    />
                 </div>
                 <select 
                   value={filterCategory}
                   onChange={(e) => {
                     setFilterCategory(e.target.value);
                     setCurrentPage(1);
                   }}
                   className="bg-slate-50 border-none px-4 py-2 rounded-xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20"
                 >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                 </select>
              </div>
           </div>
           
           <div className="flex-grow overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-slate-50/30">
                       <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-10">Produit & SKU</th>
                       <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Quantité</th>
                       <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Seuil Alerte</th>
                       <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right pr-10">Statut</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    <AnimatePresence mode='popLayout'>
                      {paginatedItems.map((item) => (
                        <motion.tr 
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          key={item.id} 
                          className="hover:bg-slate-50/50 transition-all group cursor-pointer"
                        >
                           <td className="p-6 pl-10">
                              <div className="text-sm font-black text-slate-900">{item.name}</div>
                              <div className="text-[10px] font-bold text-slate-400 mt-0.5">{item.sku} • {item.category}</div>
                           </td>
                           <td className="p-6 text-center">
                              <span className={`text-lg font-black italic ${item.status === 'Bas' ? 'text-orange-500' : 'text-slate-900'}`}>
                                 {item.stock}
                              </span>
                              <span className="text-[10px] font-bold text-slate-400 ml-1 uppercase">{item.unit}</span>
                           </td>
                           <td className="p-6">
                              <div className="text-xs font-bold text-slate-400 italic">{item.minStock} {item.unit}</div>
                           </td>
                           <td className="p-6 text-right pr-10">
                              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                item.status === 'Bas' ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'
                              }`}>
                                 {item.status === 'Bas' ? 'Besoin Réappro' : 'En Stock'}
                              </span>
                           </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                 </tbody>
              </table>
              {paginatedItems.length === 0 && (
                <div className="py-20 text-center">
                  <Package className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Aucun article trouvé</p>
                </div>
              )}
           </div>

           <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between mt-auto">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
                Affichage de {paginatedItems.length} sur {filteredItems.length} articles
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

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between h-[400px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10 flex flex-col h-full">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingDown className="w-8 h-8 text-orange-500" />
                 </div>
                 <h3 className="text-2xl font-black italic lowercase tracking-tight mb-4">Pic de demande prévu</h3>
                 <p className="text-slate-400 font-medium mb-8">L'analyse des tendances indique une hausse de 15% des libérations de packs FOMI CABA pour la semaine prochaine.</p>
                 <div className="mt-auto">
                    <button 
                      onClick={() => setActiveModal('anticipate')}
                      className="w-full bg-orange-600 text-white font-black py-4 rounded-xl uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all active:scale-95"
                    >
                       Anticiper le Stock
                    </button>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <History className="w-4 h-4" />
                 Dernières Réceptions
              </h4>
              <div className="space-y-6">
                 {[
                   { date: 'Hier, 14:20', val: '+50 packs', source: 'Dépôt Central' },
                   { date: '3 Mai, 09:15', val: '+10 bidons', source: 'Fournisseur Huile' },
                 ].map((log, i) => (
                    <div key={i} className="flex justify-between items-start">
                       <div>
                          <div className="text-xs font-black text-slate-900">{log.val}</div>
                          <div className="text-[10px] font-bold text-slate-400 italic">{log.source}</div>
                       </div>
                       <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">{log.date}</span>
                    </div>
                 ))}
              </div>
      </div>
     </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'history' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-4xl border border-slate-100 overflow-hidden">
               <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                        <History className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-slate-900 italic lowercase tracking-tight">Historique des Flux</h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Journal détaillé des entrées et sorties</p>
                     </div>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                     <X className="w-6 h-6 text-slate-400" />
                  </button>
               </div>
               <div className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
                  {[
                    { type: 'in', item: 'FOMI CABA', qty: '+50 packs', date: 'Hier, 14:20', agent: 'Agent Ousmane' },
                    { type: 'out', item: 'FOMI CABA', qty: '-12 packs', date: 'Hier, 11:45', agent: 'Vente Boutique' },
                    { type: 'in', item: 'Huile Palme', qty: '+10 bidons', date: '3 Mai, 09:15', agent: 'Fournisseur Local' },
                    { type: 'out', item: 'Sac Riz', qty: '-5 sacs', date: '2 Mai, 16:30', agent: 'Vente Boutique' },
                    { type: 'in', item: 'NO CONTENTI', qty: '+20 packs', date: '2 Mai, 10:00', agent: 'Dépôt Central' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                       <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${log.type === 'in' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                             {log.type === 'in' ? <ArrowDownCircle className="w-5 h-5" /> : <ArrowUpCircle className="w-5 h-5" />}
                          </div>
                          <div>
                             <div className="text-sm font-black text-slate-900">{log.item}</div>
                             <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Effectué par: {log.agent}</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className={`text-sm font-black ${log.type === 'in' ? 'text-emerald-600' : 'text-blue-600'}`}>{log.qty}</div>
                          <div className="text-[10px] font-bold text-slate-300 italic">{log.date}</div>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        )}

        {activeModal === 'order' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-md rounded-[3rem] shadow-4xl border border-slate-100 overflow-hidden">
                <div className="p-8 space-y-8">
                   {orderStep === 'form' ? (
                     <>
                        <div className="text-center">
                           <div className="w-20 h-20 bg-orange-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                              <Truck className="w-10 h-10 text-orange-600" />
                           </div>
                           <h3 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-2">nouvelle commande</h3>
                           <p className="text-sm font-medium text-slate-500">Demande de réapprovisionnement au dépôt central</p>
                        </div>
                        <div className="space-y-4">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Produit</label>
                              <select className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-xs font-bold focus:ring-2 focus:ring-orange-500/20">
                                 {inventoryItems.map(item => (
                                   <option key={item.id} value={item.id}>{item.name}</option>
                                 ))}
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Quantité souhaitée</label>
                              <input type="number" placeholder="Quantité..." className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-xs font-bold focus:ring-2 focus:ring-orange-500/20" />
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <button onClick={() => setActiveModal(null)} className="flex-grow bg-slate-100 text-slate-400 font-black py-4 rounded-xl uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-all">Annuler</button>
                           <button onClick={() => setOrderStep('success')} className="flex-grow bg-orange-600 text-white font-black py-4 rounded-xl uppercase tracking-widest text-[10px] hover:bg-orange-700 transition-all shadow-xl shadow-orange-100">Commander</button>
                        </div>
                     </>
                   ) : (
                     <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-200">
                           <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-2">Commande Transmise</h3>
                           <p className="text-sm font-medium text-slate-500">Votre demande #BC-2938 est en attente de validation par le dépôt central.</p>
                        </div>
                        <button onClick={() => setActiveModal(null)} className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all shadow-xl">Compris</button>
                     </div>
                   )}
                </div>
             </motion.div>
          </div>
        )}

        {activeModal === 'anticipate' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-sm rounded-[3rem] shadow-4xl border border-slate-100 overflow-hidden">
                <div className="p-10 text-center space-y-8">
                   <div className="w-20 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-center mx-auto">
                      <TrendingDown className="w-10 h-10 text-orange-500" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-2">Anticipation Confirmée</h3>
                      <p className="text-xs font-medium text-slate-500 leading-relaxed">
                         Votre déclaration d'anticipation de stock (+15% prévus) a été notifiée au département logistique. Une livraison prioritaire sera planifiée.
                      </p>
                   </div>
                   <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex items-center gap-4 text-left">
                      <FileText className="w-8 h-8 text-orange-600 shrink-0" />
                      <div>
                         <div className="text-[10px] font-black text-orange-800 uppercase tracking-widest">Référence Alerte</div>
                         <div className="text-xs font-bold text-orange-950">ANT-MAY-2024-B04</div>
                      </div>
                   </div>
                   <button onClick={() => setActiveModal(null)} className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all">Fermer</button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
