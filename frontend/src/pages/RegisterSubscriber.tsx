import { 
  User, 
  Phone, 
  MapPin, 
  Package, 
  CreditCard, 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft,
  ShieldCheck,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const packs = [
  { id: 'fomi-caba', name: 'FOMI CABA', price: '45,000 F', color: 'bg-orange-500', icon: '📦' },
  { id: 'fomi-caba-plus', name: 'FOMI CABA +', price: '55,000 F', color: 'bg-slate-900', icon: '👑' },
  { id: 'no-contenti', name: 'NO CONTENTI', price: '31,000 F', color: 'bg-blue-600', icon: '🍎' },
];

export default function RegisterSubscriber() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Bissau',
    neighborhood: '',
    packId: 'fomi-caba'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 max-w-lg w-full text-center space-y-8 border border-slate-100"
        >
          <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-200">
             <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 font-display italic lowercase tracking-tight mb-2">Inscription Réussie</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Bienvenue dans la communauté SOGUIA</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Votre demande d'adhésion pour le pack <span className="font-black italic">{packs.find(p => p.id === formData.packId)?.name}</span> a été transmise. Un agent vous contactera sous 24h pour la validation finale.
          </p>
          <Link to="/" className="block w-full bg-slate-900 text-white font-black py-5 rounded-[2rem] uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
             Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white md:bg-slate-50 md:p-12 flex items-center justify-center font-sans">
      <div className="bg-white w-full max-w-4xl min-h-[700px] rounded-[4rem] shadow-3xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
        {/* Left Side: Brand & Progress */}
        <div className="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
           
           <div className="relative z-10">
              <Link to="/" className="flex items-center gap-2 mb-16 group">
                 <ArrowLeft className="w-5 h-5 text-orange-500 group-hover:-translate-x-1 transition-transform" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Retour</span>
              </Link>
              
              <div className="space-y-6">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-2xl italic text-slate-900 shadow-xl shadow-white/5">S</div>
                 <h2 className="text-4xl font-black italic lowercase tracking-tight leading-none">adhésion<br/>soguia</h2>
              </div>
           </div>

           <div className="relative z-10 space-y-8">
              {[
                { s: 1, label: 'Type d\'Offre' },
                { s: 2, label: 'Identité' },
                { s: 3, label: 'Paiement' }
              ].map((item) => (
                <div key={item.s} className="flex items-center gap-4 group">
                   <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black transition-all ${
                     step === item.s ? 'bg-orange-500 border-orange-500 text-white' : 
                     step > item.s ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-white/10 text-white/20'
                   }`}>
                      {step > item.s ? <CheckCircle2 className="w-4 h-4" /> : item.s}
                   </div>
                   <div className={`text-[10px] font-black uppercase tracking-widest transition-opacity ${step === item.s ? 'opacity-100' : 'opacity-20'}`}>
                      {item.label}
                   </div>
                </div>
              ))}
           </div>

           <div className="relative z-10 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3">
                 <ShieldCheck className="w-4 h-4 text-emerald-500" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Données sécurisées</span>
              </div>
           </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center">
           <AnimatePresence mode="wait">
             <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
               
               {step === 1 && (
                 <motion.div 
                   key="step1"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="space-y-10"
                 >
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-2">choisissez votre pack</h3>
                       <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Sélectionnez l'abonnement qui correspond à vos besoins</p>
                    </div>

                    <div className="space-y-4">
                       {packs.map((pack) => (
                         <button
                           key={pack.id}
                           type="button"
                           onClick={() => setFormData({ ...formData, packId: pack.id })}
                           className={`w-full p-8 rounded-[2rem] border-2 text-left transition-all flex items-center justify-between group ${
                             formData.packId === pack.id ? 'border-orange-500 bg-orange-50/30' : 'border-slate-50 bg-slate-50/50 hover:border-slate-200'
                           }`}
                         >
                            <div className="flex items-center gap-6">
                               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110 ${pack.color} text-white`}>
                                  {pack.icon}
                               </div>
                               <div>
                                  <div className="text-lg font-black text-slate-900 italic lowercase tracking-tight">{pack.name}</div>
                                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Abonnement Mensuel</div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-xl font-black text-slate-900 italic">{pack.price}</div>
                               {formData.packId === pack.id && <CheckCircle2 className="w-5 h-5 text-orange-500 ml-auto mt-2" />}
                            </div>
                         </button>
                       ))}
                    </div>

                    <button 
                      onClick={handleNext}
                      className="w-full bg-slate-900 text-white font-black py-5 rounded-[2rem] uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/10"
                    >
                       Suivant <ChevronRight className="w-4 h-4" />
                    </button>
                 </motion.div>
               )}

               {step === 2 && (
                 <motion.div 
                   key="step2"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="space-y-10"
                 >
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-2">informations personnelles</h3>
                       <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Ces détails permettront de valider votre Identifiant SOGUIA</p>
                    </div>

                    <div className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 flex items-center gap-2">
                             <User className="w-3 h-3 text-orange-500" /> Nom complet
                          </label>
                          <input 
                            required
                            type="text" 
                            placeholder="Ex: João Domingos"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-50 border-none px-8 py-4 px-10 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20"
                          />
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 flex items-center gap-2">
                             <Phone className="w-3 h-3 text-orange-500" /> Téléphone WhatsApp
                          </label>
                          <input 
                            required
                            type="tel" 
                            placeholder="+245"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-slate-50 border-none px-8 py-4 px-10 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20"
                          />
                       </div>

                       <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-orange-500" /> Quartier
                             </label>
                             <input 
                               required
                               type="text" 
                               placeholder="Ex: Mindará"
                               value={formData.neighborhood}
                               onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                               className="w-full bg-slate-50 border-none px-8 py-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20"
                             />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Ville</label>
                             <select 
                               className="w-full bg-slate-50 border-none px-8 py-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20"
                               onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                               value={formData.city}
                             >
                                <option value="Bissau">Bissau</option>
                                <option value="Safim">Safim</option>
                                <option value="Bula">Bula</option>
                             </select>
                          </div>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <button 
                         onClick={handleBack}
                         type="button"
                         className="w-1/4 bg-slate-50 text-slate-400 font-black py-5 rounded-[2rem] uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all flex items-center justify-center"
                       >
                          <ArrowLeft className="w-4 h-4" />
                       </button>
                       <button 
                         onClick={handleNext}
                         className="w-3/4 bg-slate-900 text-white font-black py-5 rounded-[2rem] uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/10"
                       >
                          Suivant <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                 </motion.div>
               )}

               {step === 3 && (
                 <motion.div 
                   key="step3"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="space-y-10"
                 >
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-2">mode de paiement</h3>
                       <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Premier versement pour activer l'offre</p>
                    </div>

                    <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-2xl -mr-16 -mt-16" />
                       <div className="flex justify-between items-center relative z-10">
                          <div>
                             <div className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-1">Résumé Commande</div>
                             <div className="text-xl font-black italic">{packs.find(p => p.id === formData.packId)?.name}</div>
                          </div>
                          <div className="text-right">
                             <div className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-1">Total à payer</div>
                             <div className="text-2xl font-black italic text-orange-500">{packs.find(p => p.id === formData.packId)?.price}</div>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Méthode Mobile</label>
                       <div className="grid grid-cols-2 gap-4">
                          <button type="button" className="p-6 rounded-2xl border-2 border-slate-50 bg-slate-50/50 flex flex-col items-center gap-3 hover:border-orange-500 transition-all group active:scale-95">
                             <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center font-black text-white text-xs">OM</div>
                             <span className="text-[10px] font-black uppercase tracking-widest">Orange Money</span>
                          </button>
                          <button type="button" className="p-6 rounded-2xl border-2 border-slate-50 bg-slate-50/50 flex flex-col items-center gap-3 hover:border-orange-500 transition-all group active:scale-95">
                             <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center font-black text-slate-900 text-xs">MTN</div>
                             <span className="text-[10px] font-black uppercase tracking-widest">MTN Mobile</span>
                          </button>
                       </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4">
                       <Info className="w-5 h-5 text-orange-600 mt-1" />
                       <p className="text-[10px] font-bold text-orange-900 leading-relaxed uppercase tracking-tight">
                          Aucun prélèvement automatique aujourd'hui. L'inscription est gratuite, le paiement se fera lors de la validation avec notre agent.
                       </p>
                    </div>

                    <div className="flex gap-4">
                       <button 
                         onClick={handleBack}
                         type="button"
                         className="w-1/4 bg-slate-50 text-slate-400 font-black py-5 rounded-[2rem] uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all flex items-center justify-center"
                       >
                          <ArrowLeft className="w-4 h-4" />
                       </button>
                       <button 
                         disabled={isSubmitting}
                         onClick={handleSubmit}
                         type="submit"
                         className="w-3/4 bg-slate-900 text-white font-black py-5 rounded-[2rem] uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/10 disabled:opacity-50"
                       >
                          {isSubmitting ? (
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                            />
                          ) : (
                            <>Confirmer mon adhésion <ChevronRight className="w-4 h-4" /></>
                          )}
                       </button>
                    </div>
                 </motion.div>
               )}
             </form>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
