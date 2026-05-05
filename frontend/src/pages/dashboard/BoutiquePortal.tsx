import { 
  Scan, 
  Search, 
  CreditCard, 
  CheckCircle2, 
  Package,
  History
} from 'lucide-react';
import { useState } from 'react';
import QRScannerModal from '../../components/dashboard/QRScannerModal';

export default function BoutiquePortal() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <header className="flex flex-col md:row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2 font-display uppercase tracking-tight">Point de Distribution</h1>
          <p className="text-slate-500 font-medium">Boutique de Bissau-Moyen (ID: #BT-042)</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setIsScanning(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-3 shadow-xl shadow-orange-200 transition-all active:scale-95"
          >
            <Scan className="w-6 h-6" />
            <span>Scanner Carte QR/NFC</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Interface */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Search */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Rechercher un abonné par nom ou téléphone..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 transition-all font-medium"
              />
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-600 p-8 rounded-[2rem] text-white shadow-xl shadow-emerald-200/50 flex flex-col justify-between h-64">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2 font-display uppercase">Livraison Ration</h3>
                <p className="text-emerald-100 text-sm">Vérifier l'éligibilité et enregistrer la distribution du pack.</p>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-200/50 flex flex-col justify-between h-64">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <CreditCard className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2 font-display uppercase">Encaisser Tranche</h3>
                <p className="text-blue-100 text-sm">Saisir un paiement fait via Mobile Money (Orange/MTN).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Status */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black mb-6 flex items-center space-x-2 font-display">
              <Package className="text-orange-600 w-5 h-5" />
              <span>Stock Boutique</span>
            </h3>
            <div className="space-y-4">
              {[
                { name: 'FOMI CABA', qty: 32 },
                { name: 'FOMI CABA +', qty: 12 },
                { name: 'NO CONTENTI', qty: 8 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                  <span className="font-bold text-slate-700 text-sm">{item.name}</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-lg font-black text-slate-900">{item.qty}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-orange-600 font-bold bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors text-xs uppercase tracking-widest">
              Demander Réapprovisionnement
            </button>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black mb-6 flex items-center space-x-2 font-display">
              <History className="text-slate-400 w-5 h-5" />
              <span>Derniers Mouvements</span>
            </h3>
            <div className="space-y-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border-l-4 border-emerald-500">
                <div className="font-bold text-slate-900 mb-1">Ration remise: #AC-2931</div>
                <div className="text-slate-500 italic">Il y a 12 min</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border-l-4 border-blue-500">
                <div className="font-bold text-slate-900 mb-1">Paiement reçu: 8,750 FCFA</div>
                <div className="text-slate-500 italic">Il y a 45 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QRScannerModal 
        isOpen={isScanning} 
        onClose={() => setIsScanning(false)} 
        onScan={(data) => {
          console.log("Scanned:", data);
        }}
      />
    </div>
  );
}
