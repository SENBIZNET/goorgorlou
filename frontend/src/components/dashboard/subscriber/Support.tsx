import { MessageCircle, Phone, HelpCircle, FileText, ChevronRight, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Support() {
  const faqs = [
    { q: "Comment renouveler ma carte ?", a: "Vous pouvez demander le renouvellement via l'onglet 'Accueil' un mois avant l'expiration ou en boutique." },
    { q: "Que faire en cas de perte de carte ?", a: "Signalez-le immédiatement au support. Nous bloquerons l'ancienne carte et en générerons une nouvelle (frais applicable)." },
    { q: "Puis-je changer de pack en cours de mois ?", a: "Oui, mais le changement sera effectif uniquement lors du prochain cycle de dotation." },
  ];

  return (
    <div className="px-10 py-8 space-y-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 font-display italic lowercase">aide & support</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Une assistance 24/7 pour votre sécurité alimentaire</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Channels */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black font-display mb-8">Canaux Directs</h3>
              <div className="space-y-4">
                 <button className="w-full flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-left">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                       <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                       <div className="text-sm font-black">WhatsApp Support</div>
                       <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest text-emerald-400">En ligne</div>
                    </div>
                 </button>
                 <button className="w-full flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-left">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                       <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                       <div className="text-sm font-black">Appelez le 2222</div>
                       <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Appel gratuit</div>
                    </div>
                 </button>
              </div>
           </div>

           <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-orange-900/20 mb-6">
                 <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-slate-900 font-display">Besoin d'aide urgente ?</h4>
              <p className="text-xs font-medium text-slate-500 mt-2 mb-6 leading-relaxed">
                 Nos agents traitent vos demandes prioritaires en moins de 15 minutes via l'assistance Mobile.
              </p>
              <button className="bg-slate-900 text-white font-black px-8 py-3 rounded-xl uppercase tracking-widest text-[10px]">Lancer un Chat</button>
           </div>
        </div>

        {/* FAQ & Knowledge Base */}
        <div className="lg:col-span-8 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm min-h-[300px]">
              <div className="flex items-center gap-3 mb-10">
                 <HelpCircle className="w-6 h-6 text-orange-600" />
                 <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Questions Fréquentes</h4>
              </div>
              
              <div className="space-y-4">
                 {faqs.map((faq, i) => (
                   <motion.details 
                     key={i}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="group cursor-pointer"
                   >
                     <summary className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl group-open:bg-white group-open:border-orange-200 border border-transparent transition-all">
                        <span className="font-bold text-slate-800 text-sm">{faq.q}</span>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-open:rotate-90 transition-transform" />
                     </summary>
                     <div className="p-6 text-sm text-slate-500 font-medium leading-relaxed bg-white border-x border-b border-slate-50 rounded-b-2xl">
                        {faq.a}
                     </div>
                   </motion.details>
                 ))}
              </div>
           </div>

           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                 <FileText className="w-6 h-6 text-blue-600" />
                 <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Documentation & Guides</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <a href="#" className="flex items-center justify-between p-5 bg-slate-50 hover:bg-blue-50 transition-all rounded-2xl border border-slate-50 hover:border-blue-100">
                    <span className="text-xs font-bold text-slate-700">Guide d'utilisation QR Code</span>
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                 </a>
                 <a href="#" className="flex items-center justify-between p-5 bg-slate-50 hover:bg-blue-50 transition-all rounded-2xl border border-slate-50 hover:border-blue-100">
                    <span className="text-xs font-bold text-slate-700">Conditions Générales (CGU)</span>
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                 </a>
                 <a href="#" className="flex items-center justify-between p-5 bg-slate-50 hover:bg-blue-50 transition-all rounded-2xl border border-slate-50 hover:border-blue-100">
                    <span className="text-xs font-bold text-slate-700">Politique de Confidentialité</span>
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                 </a>
                 <a href="#" className="flex items-center justify-between p-5 bg-slate-50 hover:bg-blue-50 transition-all rounded-2xl border border-slate-50 hover:border-blue-100">
                    <span className="text-xs font-bold text-slate-700">Réseau de boutiques 2026</span>
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
