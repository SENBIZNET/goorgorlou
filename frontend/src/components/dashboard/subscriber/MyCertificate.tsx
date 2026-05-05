import { ShieldCheck, Download, Award, Calendar, CheckSquare, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function MyCertificate() {
  return (
    <div className="px-10 py-8 space-y-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 font-display italic lowercase">mon certificat</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preuve d'adhésion et de solvabilité SOGUIA</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Certificate Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col items-center text-center group"
        >
           {/* Watermark / Logo background */}
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]">
              <ShieldCheck className="w-[80%] h-[80%] text-slate-900" />
           </div>

           <div className="relative z-10 w-full">
              <div className="flex justify-center mb-10">
                 <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center italic font-black text-2xl text-white shadow-xl shadow-orange-900/20">S</div>
              </div>

              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Certificat d'Inclusion Alimentaire</h2>
              <div className="h-0.5 w-24 bg-orange-500 mx-auto mb-10" />

              <p className="text-sm text-slate-500 font-medium mb-12">Il est certifié que le membre identifié ci-dessous est un utilisateur enregistré de la plateforme SOGUIA 4.0, éligible à la dotation alimentaire à crédit.</p>

              <div className="space-y-6 mb-16">
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">TITULAIRE</div>
                    <div className="text-2xl font-black text-slate-900 font-display uppercase">João Domingos</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">IDENTIFIANT UNIQUE</div>
                    <div className="text-lg font-black text-slate-900 font-mono">SG-29382741</div>
                 </div>
                 <div className="flex justify-center gap-12 pt-4">
                    <div>
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">ADHÉSION</div>
                       <div className="text-sm font-black text-orange-600">11 MAR 2026</div>
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">STATUT</div>
                       <div className="text-sm font-black text-emerald-600">ACTIF & SOLVABLE</div>
                    </div>
                 </div>
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                 <div className="text-left">
                    <img 
                       src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=CERT-SG-29382741" 
                       alt="Verification QR" 
                       className="w-16 h-16 opacity-40 grayscale"
                    />
                    <div className="text-[8px] font-bold text-slate-400 uppercase mt-2">ID: SG-29382741</div>
                 </div>
                 <div className="text-right">
                    <div className="text-[8px] font-bold text-slate-400 uppercase mb-4 tracking-widest">Signé par</div>
                    <div className="italic font-black text-slate-900 text-sm">Fodé Gassama</div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Directeur Général</div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Info & Actions */}
        <div className="lg:col-span-5 space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-xl shadow-slate-900/10">
              <div className="flex items-center gap-3 mb-6">
                 <Award className="w-6 h-6 text-orange-500" />
                 <h4 className="text-sm font-black uppercase tracking-widest">Valeur du document</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">
                 Ce certificat peut être utilisé comme preuve d'adresse et de solvabilité financière auprès de nos institutions de micro-finance partenaires. Il atteste de votre assiduité aux remboursements.
              </p>
              <div className="space-y-4">
                 <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                    <Download className="w-4 h-4" />
                    <span>Télécharger l'original</span>
                 </button>
                 <button className="w-full bg-white/10 hover:bg-white/20 text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs border border-white/10">
                    <Share2 className="w-4 h-4" />
                    <span>Partager le lien sécurisé</span>
                 </button>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <CheckSquare className="w-4 h-4 text-emerald-500" />
                 <span>Règles de validation</span>
              </h4>
              <ul className="space-y-4">
                 {[
                   'Valable uniquement si le compte est actif.',
                   'Expire en même temps que la carte membre.',
                   'Vérifiable par QR Code en temps réel.',
                   'Récupérable à tout moment sur l\'espace client.'
                 ].map((text, i) => (
                   <li key={i} className="flex items-start gap-3 text-xs font-medium text-slate-500 leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
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
