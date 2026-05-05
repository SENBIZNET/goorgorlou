import { MapPin, Navigation, Search, Map as MapIcon, Layers, Info } from 'lucide-react';

export default function CollectionMap() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto overflow-hidden">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">itinéraire tournée</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Optimisation des visites de recouvrement sur le terrain</p>
        </div>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-orange-600 transition-all">
          <Navigation className="w-4 h-4" />
          Démarrer la tournée
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        {/* Left Sidebar - Points */}
        <div className="lg:col-span-4 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
           <div className="p-6 border-b border-slate-50">
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                 <input type="text" placeholder="Rechercher quartier..." className="w-full bg-slate-50 border-none pl-11 pr-6 py-2.5 rounded-xl text-xs font-bold" />
              </div>
           </div>
           <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {[
                { name: 'Mindará - Secteur 1', count: '5 visites', priority: 'Urgent' },
                { name: 'Bandim - Marché', count: '3 visites', priority: 'Moyenne' },
                { name: 'Santa Luzia - Sud', count: '2 visites', priority: 'Basse' },
                { name: 'Antula - Centre', count: '4 visites', priority: 'Haute' },
              ].map((loc, i) => (
                <button key={i} className="w-full text-left p-6 rounded-[2rem] border border-slate-50 hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
                   <div className="flex justify-between items-start mb-2">
                      <div className="text-sm font-black text-slate-900">{loc.name}</div>
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        loc.priority === 'Urgent' ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>{loc.priority}</span>
                   </div>
                   <div className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-orange-500" />
                      {loc.count} identifiées
                   </div>
                </button>
              ))}
           </div>
        </div>

        {/* Map Placeholder */}
        <div className="lg:col-span-8 bg-slate-100 rounded-[3rem] border-4 border-white shadow-xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-15.58,11.86,13,0/800x600?access_token=pk.eyJ1IjoiYm90IiwiYSI6ImNrMWY4Y29pYjAxYjUzbnA1NXV3Z2Q4ZDgifQ')] bg-cover bg-center grayscale opacity-50 contrast-125" />
           <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
           
           <div className="absolute top-8 right-8 flex flex-col gap-2">
              <button className="p-3 bg-white rounded-xl shadow-lg hover:text-orange-600 transition-all"><Layers className="w-5 h-5" /></button>
              <button className="p-3 bg-white rounded-xl shadow-lg hover:text-orange-600 transition-all"><MapIcon className="w-5 h-5" /></button>
           </div>

           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-slate-900/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <MapIcon className="w-8 h-8 text-orange-600" />
                 </div>
                 <div className="text-slate-900 font-black italic text-lg leading-tight mb-2">Carte Interactive<br/>Bissau & Environs</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service de géolocalisation SOGUIA</div>
              </div>
           </div>

           <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/90 backdrop-blur p-6 rounded-[2rem] shadow-2xl border border-white flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                       <Info className="w-6 h-6" />
                    </div>
                    <div>
                       <div className="text-xs font-black text-slate-900">Optimisation de trajet</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Calcul de l'itinéraire le plus court (12.4km total)</div>
                    </div>
                 </div>
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
