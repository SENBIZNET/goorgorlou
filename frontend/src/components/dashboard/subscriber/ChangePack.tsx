import { PACKS } from '../../../constants/packs';
import { Package, ChevronRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function ChangePack() {
  const [userPackId, setUserPackId] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('soguia_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserPackId(user.packId);
    }
  }, []);

  const currentPack = PACKS.find(p => p.id === userPackId) || PACKS[0];

  return (
    <div className="px-10 py-8 space-y-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 font-display italic lowercase">changer de pack</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Faites évoluer votre dotation selon vos besoins</p>
      </header>

      {/* Current Selection */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
         <img 
            src="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" 
            alt="Current pack"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
         
         <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic group-hover:translate-x-2 transition-transform">Actuel</span>
                  <div className="h-0.5 w-12 bg-white/20" />
               </div>
               <h2 className="text-5xl font-black font-display uppercase tracking-tighter mb-4">{currentPack.name}</h2>
               <div className="flex items-center gap-6">
                  <div className="text-3xl font-black text-orange-500">{currentPack.price.toLocaleString()} FCFA</div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                     <TrendingUp className="w-4 h-4" />
                     <span>Utilisé depuis 2 mois</span>
                  </div>
               </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] max-w-sm">
               <div className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-4">Votre éligibilité</div>
               <p className="text-sm font-medium text-slate-200 mb-6">
                  Bonne nouvelle ! Votre historique de paiement est excellent. Vous pouvez migrer vers un pack supérieur (Frais de migration: 5 000 FCFA).
               </p>
               <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Migration Autorisée</span>
               </div>
            </div>
         </div>
      </div>

      {/* Other Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {PACKS.filter(p => p.name !== currentPack.name).map((pack, i) => (
           <motion.div 
             key={pack.name}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all group flex flex-col justify-between"
           >
              <div>
                 <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 ${pack.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                       <Package className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                       <div className="text-lg font-black text-slate-900">{pack.price.toLocaleString()} F</div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/mois</div>
                    </div>
                 </div>
                 <h4 className="text-xl font-black text-slate-900 font-display mb-4 uppercase tracking-tight">{pack.name}</h4>
                 <ul className="space-y-3 mb-10">
                    {pack.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                         <div className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-orange-500" />
                         {f}
                      </li>
                    ))}
                 </ul>
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center justify-center gap-3 group">
                 <span>Choisir ce Pack</span>
                 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
           </motion.div>
         ))}
      </div>

      {/* Info footer */}
      <div className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-[2.5rem] flex items-center gap-6">
         <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 animate-bounce">
            <TrendingUp className="w-6 h-6" />
         </div>
         <div>
            <h5 className="font-black text-slate-900 text-sm uppercase tracking-tight mb-1">Impact du changement</h5>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
               Migrer vers un nouveau pack prendra effet dès votre prochaine dotation. Les tranches seront recalculées automatiquement via Mobile Money.
            </p>
         </div>
      </div>
    </div>
  );
}
