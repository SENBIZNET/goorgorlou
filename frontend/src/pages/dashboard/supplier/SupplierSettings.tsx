import { Store, User, Shield, Bell, MapPin, Save, Info } from 'lucide-react';

export default function SupplierSettings() {
  return (
    <div className="p-8 space-y-10 max-w-[1200px] mx-auto overflow-hidden">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">configuration fournisseur</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Paramètres de l'entreprise et accès au portail fournisseur</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
          <Save className="w-4 h-4" />
          Enregistrer
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3 space-y-3">
           {[
             { label: 'Unité de Production', icon: Store, active: true },
             { label: 'Contacts Logistiques', icon: User, active: false },
             { label: 'Sécurité de lot', icon: Shield, active: false },
           ].map((item, i) => (
             <button key={i} className={`w-full flex items-center gap-4 p-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
               item.active ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'
             }`}>
                <item.icon className="w-4 h-4" />
                {item.label}
             </button>
           ))}
        </div>

        <div className="lg:col-span-9 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
              <div className="space-y-4">
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Identité du Partenaire</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" defaultValue="Fournisseur Local Bissau" className="bg-slate-50 border-none px-6 py-4 rounded-xl text-xs font-bold" />
                    <input type="text" defaultValue="ID #FR-293" disabled className="bg-slate-100 border-none px-6 py-4 rounded-xl text-xs font-bold text-slate-400 italic" />
                 </div>
              </div>

              <div className="space-y-4">
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Site de Production</h3>
                 <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <MapPin className="w-5 h-5 text-orange-500" />
                       <div className="text-sm font-bold text-slate-900 italic">Zone Industrielle Safim, Lot 44</div>
                    </div>
                    <button className="text-[10px] font-black uppercase text-orange-600 tracking-widest">Voir Plan</button>
                 </div>
              </div>
           </div>

           <div className="bg-orange-50 border border-orange-100 p-8 rounded-[2.5rem] flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                 <Info className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                 <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-2 text-orange-800">Contrat de Production</h4>
                 <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    Vos identifiants BC (Bon de Commande) sont générés automatiquement par le système central SOGUIA après validation de votre capacité journalière déclarée.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
