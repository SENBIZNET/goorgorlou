import { Wallet, CheckCircle2, AlertCircle, ArrowUpRight, History, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function MyPayments() {
  const transactions = [
    { id: '#TX-8102', type: 'MENSUALITÉ T3', method: 'Orange Money', date: '15 Mars 2026', amount: '25,000 F', status: 'RÉUSSI' },
    { id: '#TX-8094', type: 'MENSUALITÉ T2', method: 'Telecel Cash', date: '08 Mars 2026', amount: '25,000 F', status: 'RÉUSSI' },
    { id: '#TX-8081', type: 'MENSUALITÉ T1', method: 'Virement Orabank', date: '01 Mars 2026', amount: '25,000 F', status: 'RÉUSSI' },
    { id: '#TX-7921', type: 'ADHÉSION + T1', method: 'Espèces (Boutique)', date: '25 Fév 2026', amount: '14,000 F', status: 'RÉUSSI' },
  ];

  return (
    <div className="px-10 py-8 space-y-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 font-display italic lowercase">mes paiements</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Suivi de vos tranches et remboursements</p>
      </header>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-bold">
                 <Wallet className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">En cours</span>
           </div>
           <div className="text-3xl font-black text-slate-900 mb-1">26,250 FCFA</div>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reste à payer (Avril)</p>
        </div>

        <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-900/20">
           <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center font-bold">
                 <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest">Total payé</span>
           </div>
           <div className="text-3xl font-black text-white mb-1">89,000 FCFA</div>
           <p className="text-xs font-bold text-emerald-100 uppercase tracking-widest opacity-80">Depuis votre adhésion</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full translate-x-16 -translate-y-16" />
           <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center font-bold">
                    <AlertCircle className="w-6 h-6" />
                 </div>
                 <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Prochainement</span>
              </div>
              <div className="text-2xl font-black text-slate-900 mb-1">17 AVRIL</div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Échéance Prochaine</p>
           </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
         <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-[#F8FAFC]/50">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
               <History className="w-4 h-4 text-orange-600" />
               <span>Historique des Transactions</span>
            </h3>
            <button className="text-[10px] font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Exporter tout (.CSV)</button>
         </div>

         <div className="divide-y divide-slate-50">
            {transactions.map((tx, i) => (
              <motion.div 
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 flex flex-col md:flex-row items-center justify-between hover:bg-slate-50 transition-all group"
              >
                 <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center shadow-sm group-hover:border-orange-200 group-hover:scale-105 transition-all">
                       <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                       <h4 className="font-black text-slate-900 text-sm tracking-tight">{tx.type}</h4>
                       <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tx.method}</span>
                          <span className="text-[10px] font-black text-slate-300">•</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tx.id}</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
                    <div className="text-right">
                       <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{tx.date}</div>
                       <div className="text-lg font-black text-slate-900">{tx.amount}</div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="bg-emerald-100 text-emerald-600 text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-widest">{tx.status}</span>
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-orange-600 hover:bg-orange-50 transition-all">
                          <Download className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>

      {/* Payment Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <Wallet className="w-32 h-32" />
            </div>
            <div className="relative z-10">
               <h4 className="text-xl font-black font-display italic lowercase mb-6">nos partenaires de paiement</h4>
               <div className="space-y-6">
                  <div>
                     <h5 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3">Mobile Money</h5>
                     <div className="flex flex-wrap gap-3">
                        <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold">Orange Money</span>
                        <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold">Telecel Cash</span>
                     </div>
                  </div>
                  <div>
                     <h5 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3">Banques Partenaires</h5>
                     <div className="grid grid-cols-2 gap-2">
                        {['BDU', 'Banque Atlantique', 'Ecobank', 'Orabank'].map(bank => (
                           <div key={bank} className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-tight flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                              {bank}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-emerald-50 rounded-[2.5rem] p-10 border border-emerald-100 flex flex-col justify-center">
            <h4 className="text-xl font-black text-emerald-900 font-display italic lowercase mb-6">gestion responsable</h4>
            <div className="space-y-4">
               <p className="text-xs font-medium text-emerald-800 leading-relaxed mb-4">
                  Réglez vos tranches via nos partenaires. Utilisez votre ID membre <span className="font-black">SG-29382741</span> pour les virements bancaires.
               </p>
               <ul className="space-y-4">
                  {[
                     'Paiement hebdomadaire automatique disponible.',
                     'Alerte SMS 24h avant chaque échéance.',
                     'Validation instantanée du paiement.'
                  ].map((text, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm font-medium text-emerald-800">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {text}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
}
