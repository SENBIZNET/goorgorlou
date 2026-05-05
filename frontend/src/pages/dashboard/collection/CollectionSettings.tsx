import { Settings, Shield, Bell, User, Phone, Save, Info, ChevronRight } from 'lucide-react';

export default function CollectionSettings() {
  return (
    <div className="p-8 space-y-10 max-w-[1200px] mx-auto overflow-hidden">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">paramètres profil</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gestion du compte agent de recouvrement certifié</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
          <Save className="w-4 h-4" />
          Enregistrer
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-4">
           {[
             { label: 'Informations Personnelles', icon: User, active: true },
             { label: 'Notifications Terrain', icon: Bell, active: false },
             { label: 'Sécurité & Accès', icon: Shield, active: false },
           ].map((item, i) => (
             <button key={i} className={`w-full flex items-center gap-4 p-6 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all ${
               item.active ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-400 border border-slate-100 hover:border-slate-300'
             }`}>
                <item.icon className="w-5 h-5" />
                {item.label}
             </button>
           ))}
        </div>

        <div className="lg:col-span-8 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Prénom & Nom</label>
                    <input type="text" defaultValue="Agent de Recouvrement" className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl text-xs font-bold" />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Matricule Agent</label>
                    <input type="text" defaultValue="SOGA-002" disabled className="w-full bg-slate-100 border-none px-6 py-4 rounded-2xl text-xs font-bold text-slate-400 italic" />
                 </div>
              </div>
              <div className="space-y-3">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Secteur Affecté</label>
                 <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-between">
                    <div className="text-sm font-bold text-slate-900 italic">Mindará Central & Bandim 2</div>
                    <span className="text-[8px] font-black uppercase text-orange-600 tracking-widest underline cursor-pointer">Demander changement</span>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex items-start gap-6 border-4 border-slate-800">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                 <Info className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                 <h4 className="text-xs font-black uppercase tracking-widest mb-2">Code de Conduite</h4>
                 <p className="text-[11px] font-medium text-slate-400 leading-relaxed">En tant qu'agent certifié, vous représentez l'image de SOGUIA. Toute irrégularité dans les recettes signalées entraînera une suspension immédiate du matricule.</p>
                 <button className="mt-4 text-[9px] font-black uppercase text-orange-500 tracking-widest flex items-center gap-1">Lire le règlement <ChevronRight className="w-3 h-3" /></button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
