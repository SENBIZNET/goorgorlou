import { 
  Settings, 
  Store, 
  MapPin, 
  Phone, 
  Clock, 
  Bell, 
  Shield, 
  Save,
  Camera,
  ChevronRight,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BoutiqueSettings() {
  return (
    <div className="p-8 space-y-10 max-w-[1200px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">paramètres boutique</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Personnalisation du point de distribution et préférences</p>
        </div>
        
        <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 group">
          <Save className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Enregistrer tout
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
            {[
              { label: 'Infos Boutique', icon: Store, active: true },
              { label: 'Localisation', icon: MapPin, active: false },
              { label: 'Horaires', icon: Clock, active: false },
              { label: 'Notifications', icon: Bell, active: false },
              { label: 'Sécurité', icon: Shield, active: false },
            ].map((item, i) => (
              <button 
                key={i}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                  item.active ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-10 pb-20">
           {/* Shop Profile */}
           <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10 relative overflow-hidden">
              <div className="flex items-center gap-10">
                 <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1604719312563-8912e938a4bb?auto=format&fit=crop&q=80&w=400" 
                      className="w-32 h-32 rounded-[2.5rem] object-cover border-4 border-slate-50 group-hover:scale-105 transition-transform duration-500" 
                      alt="" 
                    />
                    <button className="absolute inset-0 bg-black/40 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Camera className="w-8 h-8 text-white" />
                    </button>
                 </div>
                 <div>
                    <h2 className="text-xl font-black text-slate-900 italic lowercase tracking-tight mb-2">Boutique Mindará</h2>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-black uppercase text-orange-600 bg-orange-50 px-3 py-1 rounded-lg tracking-widest">ID: #BT-042</span>
                       <span className="text-[10px] font-bold text-slate-300 italic">Partenaire SOGUIA depuis 2024</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Nom de la Boutique</label>
                    <input 
                      type="text" 
                      defaultValue="Boutique Mindará" 
                      className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20"
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Contact Responsable</label>
                    <input 
                      type="text" 
                      defaultValue="+245 95 000 00 01" 
                      className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-orange-500/20"
                    />
                 </div>
              </div>
           </section>

           {/* Location & Access */}
           <section className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
              <div className="flex items-center gap-4 relative z-10">
                 <MapPin className="w-6 h-6 text-orange-500" />
                 <h2 className="text-xl font-black italic lowercase tracking-tight">zone de desserte</h2>
              </div>
              <div className="space-y-6 relative z-10">
                 <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-between group">
                    <div>
                       <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Quartier & Ville</div>
                       <div className="text-sm font-bold mt-1 italic">Mindará, Bissau</div>
                    </div>
                    <button className="text-[10px] font-black uppercase text-orange-500 tracking-widest hover:underline">Modifier</button>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem]">
                       <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Capacité Stockage</div>
                       <div className="text-sm font-bold mt-1 italic">500 Packs</div>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem]">
                       <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Clients Max</div>
                       <div className="text-sm font-bold mt-1 italic">250 Abonnés</div>
                    </div>
                 </div>
              </div>
           </section>

           {/* Warning / Notice */}
           <div className="bg-orange-50 border border-orange-100 p-8 rounded-[2.5rem] flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                 <Info className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                 <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Conformité Partenaire</h4>
                 <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    Toute modification majeure de l'adresse physique ou des capacités de stockage doit être validée par un agent SOGUIA après inspection du site.
                 </p>
                 <button className="mt-4 text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                    Plus de détails sur le contrat <ChevronRight className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
