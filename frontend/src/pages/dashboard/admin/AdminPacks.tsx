import { 
  Package, 
  Plus, 
  Settings2, 
  Eye, 
  Trash2, 
  TrendingUp,
  Tag,
  Boxes,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { PACKS } from '../../../constants/packs';

export default function AdminPacks() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">gestion des packs</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Configurez les offres et le contenu des packs Soguia</p>
        </div>
        
        <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
          <Plus className="w-4 h-4" />
          Nouveau Pack
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PACKS.map((pack, i) => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group"
          >
            <div className="relative h-40 overflow-hidden">
               <img src={pack.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={pack.name} />
               <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Modifier le pack</span>
               </div>
            </div>

            <div className="p-6 space-y-6">
               <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 uppercase font-display">{pack.name}</h3>
                    <div className="text-[9px] font-black text-orange-600 mt-1 uppercase tracking-widest">{pack.price > 0 ? `${pack.price.toLocaleString()} F` : 'Sur-mesure'}</div>
                  </div>
                  <div className="bg-slate-900 w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg italic">S</div>
               </div>

               <div className="space-y-2">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Contenu ({pack.contents.length} articles)</div>
                  <div className="flex flex-wrap gap-1">
                     {pack.contents.slice(0, 3).map((item, idx) => (
                       <span key={idx} className="text-[8px] font-bold bg-slate-50 border border-slate-100 text-slate-500 px-2 py-1 rounded-md">{item}</span>
                     ))}
                     {pack.contents.length > 3 && <span className="text-[8px] font-bold bg-slate-50 border border-slate-100 text-slate-500 px-2 py-1 rounded-md">+{pack.contents.length - 3}</span>}
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-2">
                  <button className="bg-slate-900 text-white font-black py-3 rounded-xl uppercase tracking-widest text-[8px] hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
                     <Settings2 className="w-3 h-3" />
                     Gérer
                  </button>
                  <button className="bg-white border border-slate-200 text-slate-400 font-black py-3 rounded-xl uppercase tracking-widest text-[8px] hover:text-red-500 transition-all flex items-center justify-center gap-2">
                     <Trash2 className="w-3 h-3" />
                     Supprimer
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
        
        {/* Simple Analytics Card */}
        <div className="lg:col-span-1 bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl">
           <div>
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-900/20">
                 <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black font-display italic lowercase">performance</h3>
              <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-1">Pack le plus populaire</p>
           </div>
           
           <div className="my-8">
              <div className="text-2xl font-black text-orange-500 uppercase font-display italic">FOMI CABA +</div>
              <div className="text-[10px] font-black text-white/60 mt-2">42% DES ABONNEMENTS</div>
           </div>
           
           <div className="space-y-2">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-orange-600 w-[42%] rounded-full" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
