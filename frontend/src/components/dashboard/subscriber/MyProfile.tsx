import { User, Phone, Mail, MapPin, Shield, Camera, Save, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function MyProfile() {
  return (
    <div className="px-10 py-8 space-y-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 font-display italic lowercase">mon profil</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gérez vos informations personnelles et sécurisez votre compte</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-1 space-y-8">
           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="relative mb-6">
                 <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-2xl relative overflow-hidden group">
                    <span className="group-hover:opacity-20 transition-opacity">JD</span>
                    <div className="absolute inset-0 bg-orange-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                       <Camera className="w-8 h-8" />
                    </div>
                 </div>
                 <div className="absolute bottom-1 right-1 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full" />
              </div>
              <h3 className="text-xl font-black text-slate-800 font-display uppercase tracking-tight">João Domingos</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Membre depuis Mars 2026</p>
              
              <div className="mt-8 pt-8 border-t border-slate-50 w-full flex justify-around">
                 <div>
                    <div className="text-lg font-black text-slate-900">12</div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase">Dotations</div>
                 </div>
                 <div className="w-px h-8 bg-slate-100" />
                 <div>
                    <div className="text-lg font-black text-slate-900">4.9/5</div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase">Score</div>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
              <div className="flex items-center gap-3 mb-6">
                 <Shield className="w-5 h-5 text-orange-500" />
                 <h4 className="text-sm font-black uppercase tracking-widest">Sécurité du compte</h4>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-xs font-medium text-slate-400">Authentification 2FA</span>
                    <span className="text-[10px] font-black text-emerald-500 uppercase">Activée</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-xs font-medium text-slate-400">Niveau de confiance</span>
                    <span className="text-[10px] font-black text-orange-500 uppercase">Premium</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-2">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-10 font-display italic lowercase">coordonnées personnelles</h3>
              
              <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nom complet</label>
                       <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="text" defaultValue="João Domingos" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Numéro de téléphone</label>
                       <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="tel" defaultValue="+245 44 123 4567" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all font-mono" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email (Optionnel)</label>
                       <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="email" placeholder="votre@email.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ville / Région</label>
                       <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all appearance-none">
                             <option>Bissau (Secteur Autonome)</option>
                             <option>Gabú</option>
                             <option>Bafatá</option>
                             <option>Canchungo</option>
                          </select>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Adresse précise</label>
                    <textarea rows={3} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all" defaultValue="Quartier Santa Luzia, face à la boutique #BT-042" />
                 </div>

                 <div className="pt-6 flex justify-end">
                    <button type="button" className="bg-slate-900 text-white font-black px-10 py-5 rounded-[1.5rem] hover:bg-orange-600 transition-all flex items-center gap-3 uppercase tracking-widest text-xs shadow-xl shadow-slate-200">
                       <Save className="w-4 h-4" />
                       <span>Enregistrer les modifications</span>
                    </button>
                 </div>
              </form>
           </div>
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm mt-8">
              <h3 className="text-xl font-black text-slate-800 mb-10 font-display italic lowercase">sécurité & mot de passe</h3>
              
              <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mot de passe actuel</label>
                       <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all font-mono" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nouveau mot de passe</label>
                       <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all font-mono" />
                       </div>
                    </div>
                 </div>

                 <div className="pt-2 flex justify-end">
                    <button type="button" className="bg-orange-600 text-white font-black px-10 py-5 rounded-[1.5rem] hover:bg-slate-900 transition-all flex items-center gap-3 uppercase tracking-widest text-xs shadow-xl shadow-orange-200/50">
                       <Shield className="w-4 h-4" />
                       <span>Mettre à jour le mot de passe</span>
                    </button>
                 </div>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
