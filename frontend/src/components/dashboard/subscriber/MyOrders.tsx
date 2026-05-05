import { Package, Truck, Calendar, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function MyOrders() {
  const orders = [
    { id: '#ST-9012', pack: 'Pack FOMI +', date: '28 Mars 2026', status: 'LIVRÉ', items: ['Riz 25kg', 'Huile 5L', 'Sucre 5kg'], price: '55,000 F' },
    { id: '#ST-8842', pack: 'Pack Famille', date: '02 Février 2026', status: 'LIVRÉ', items: ['Riz 50kg', 'Huile 10L', 'Farine 10kg'], price: '120,000 F' },
  ];

  return (
    <div className="px-10 py-8 space-y-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 font-display italic lowercase">mes commandes</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Historique de vos dotations alimentaires</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Order / Next Delivery */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-orange-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-orange-900/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover opacity-20" 
                alt="Delivery"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Prochaine Dotation</span>
                </div>
                <h3 className="text-3xl font-black mb-1 font-display">MI-AVRIL</h3>
                <p className="text-orange-100 text-sm font-bold opacity-80 uppercase tracking-wider mb-6">Prévue le 17/04/2026</p>
                
                <div className="space-y-4 pt-6 border-t border-white/20">
                   <div className="flex justify-between items-center text-xs font-bold">
                     <span className="opacity-60 uppercase">Statut</span>
                     <span className="bg-white text-orange-600 px-3 py-1 rounded-full uppercase tracking-widest">En Préparation</span>
                   </div>
                   <div className="flex justify-between items-center text-xs font-bold">
                     <span className="opacity-60 uppercase">Frais de Livraison</span>
                     <span className="text-white">1 500 FCFA</span>
                   </div>
                   <div className="flex justify-between items-center text-xs font-bold">
                     <span className="opacity-60 uppercase">Boutique</span>
                     <span className="text-white">Bissau-Moyen</span>
                   </div>
                </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Package className="w-4 h-4 text-orange-600" />
                <span>Rappel Composition</span>
              </h4>
              <ul className="space-y-4">
                {['Riz haute qualité (25kg)', 'Huile végétale (5L)', 'Sucre blanc (5kg)', 'Pâtes alimentaires'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                     {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* History List */}
        <div className="lg:col-span-2 space-y-4">
           {orders.map((order, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-orange-200 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
             >
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                      <Package className="w-8 h-8" />
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-black text-slate-900 font-display uppercase tracking-tight">{order.pack}</h4>
                        <span className="text-[10px] font-bold text-slate-400">{order.id}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                         <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {order.date}</div>
                         <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg"><CheckCircle2 className="w-3 h-3" /> {order.status}</div>
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-8 justify-between md:justify-end">
                   <div className="text-right">
                      <div className="text-sm font-black text-slate-900 mb-0.5">{order.price}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payé intégralement</div>
                   </div>
                   <button className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
             </motion.div>
           ))}

           <div className="mt-8 p-12 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300 mb-4 shadow-sm">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-slate-800 font-display">Besoin d'une avance ?</h4>
              <p className="text-sm text-slate-500 max-w-xs mt-2 mb-6">
                En cas d'urgence, vous pouvez demander une dotation anticipée si 50% de votre pack précédent est déjà payé.
              </p>
              <button className="text-xs font-black text-orange-600 uppercase tracking-widest hover:underline">Consulter les conditions</button>
           </div>
        </div>
      </div>
    </div>
  );
}
