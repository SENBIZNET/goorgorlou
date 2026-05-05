import { 
  Truck, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  Clock,
  Navigation2,
  PackageCheck,
  Scan
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import QRScannerModal from '../../components/dashboard/QRScannerModal';

export default function DeliveryPortal() {
  const [isScanning, setIsScanning] = useState(false);
  const deliveries = [
    { id: '#DL-882', destination: 'Boutique Bissau-Moyen', status: 'En cours', address: 'Av. Amilcar Cabral', items: 15 },
    { id: '#DL-883', destination: 'Boutique Santa Luzia', status: 'En attente', address: 'Rue de la Paix', items: 8 },
    { id: '#DL-884', destination: 'Subscriber #AC-22', status: 'Livré', address: 'Quartier Militaire', items: 1 },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-4xl mx-auto">
      <header className="flex justify-between items-center pr-2">
        <div>
          <h1 className="text-3xl font-black text-slate-900 font-display uppercase tracking-tight">Espace Livreur</h1>
          <p className="text-slate-500 font-medium">Connecté: Bakari Diallo (Camion #B-22)</p>
        </div>
        <div className="bg-emerald-600 p-4 rounded-2xl text-white shadow-lg shadow-emerald-100">
           <Truck className="w-8 h-8" />
        </div>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Livraisons', value: '12/20', color: 'bg-blue-500' },
          { label: 'Rations', value: '450kg', color: 'bg-orange-500' },
          { label: 'Carburant', value: '75%', color: 'bg-emerald-500' },
          { label: 'ID', value: '#L-99', color: 'bg-slate-800' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">{stat.label}</div>
            <div className="text-xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Active Map / Task Section */}
      <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative min-h-[300px]">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
          alt="Map" 
          className="w-full h-full object-cover opacity-40 absolute inset-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        
        <div className="relative p-8 h-full flex flex-col justify-end text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-orange-600 p-2 rounded-lg animate-pulse">
              <Navigation className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">Prochain Arrêt</span>
          </div>
          <h2 className="text-3xl font-black mb-2">Boutique Bissau-Moyen</h2>
          <p className="text-slate-400 flex items-center mb-6">
            <MapPin className="w-4 h-4 mr-2 text-red-500" />
            Av. Amilcar Cabral, Secteur 4
          </p>
          <div className="flex space-x-3">
             <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-sm flex items-center space-x-2">
               <Navigation2 className="w-4 h-4" />
               <span>Itinéraire</span>
             </button>
             <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-black text-sm flex items-center space-x-2">
               <PackageCheck className="w-4 h-4" />
               <span>Confirmer Arrivée</span>
             </button>
          </div>
        </div>
      </div>

      {/* Delivery List */}
      <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="text-xl font-black mb-6 flex items-center space-x-2 font-display">
          <Clock className="text-slate-400 w-5 h-5" />
          <span>Feuille de Route Aujourd'hui</span>
        </h3>
        
        <div className="space-y-4">
          {deliveries.map((dl, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 hover:bg-white border hover:border-orange-200 transition-all rounded-3xl"
            >
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  dl.status === 'Livré' ? 'bg-emerald-100 text-emerald-600' : 
                  dl.status === 'En cours' ? 'bg-orange-100 text-orange-600' : 
                  'bg-slate-200 text-slate-400'
                }`}>
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 underline decoration-slate-200">{dl.destination}</h4>
                  <p className="text-xs text-slate-500 font-medium">{dl.address} • {dl.items} packs</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:space-x-8">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                  dl.status === 'Livré' ? 'bg-emerald-500 text-white' : 
                  dl.status === 'En cours' ? 'bg-orange-500 text-white' : 
                  'bg-slate-300 text-slate-600'
                }`}>
                  {dl.status}
                </span>
                
                {dl.status !== 'Livré' && (
                  <button 
                    onClick={() => setIsScanning(true)}
                    className="flex items-center gap-2 bg-slate-900 group-hover:bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-lg shadow-slate-900/10 active:scale-95"
                  >
                    <Scan className="w-4 h-4" />
                    Scanner Reception
                  </button>
                )}
                {dl.status === 'Livré' && (
                   <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-slate-900 rounded-3xl text-white flex flex-col md:row items-center justify-between gap-6">
           <div className="flex items-center space-x-4">
             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Truck className="text-orange-500 w-6 h-6" />
             </div>
             <div>
               <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Temps de service</div>
               <div className="text-xl font-black">06h 42min</div>
             </div>
           </div>
           <button className="w-full md:w-auto bg-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all uppercase tracking-widest text-sm">
             Terminer la tournée
           </button>
        </div>
      </section>

      <QRScannerModal 
        isOpen={isScanning} 
        onClose={() => setIsScanning(false)}
        title="Scanner Livraison"
        description="Scannez le QR code du point de livraison pour confirmer la décharge"
        onScan={(data) => {
          console.log("Delivery point scanned:", data);
        }}
      />
    </div>
  );
}

