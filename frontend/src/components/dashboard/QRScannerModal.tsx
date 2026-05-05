import { Scan, X, Camera, ShieldCheck, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScan?: (data: string) => void;
  title?: string;
  description?: string;
}

export default function QRScannerModal({ 
  isOpen, 
  onClose, 
  onScan, 
  title = "Scanner Carte QR/NFC", 
  description = "Maintenez la carte NFC ou scannez le QR code de l'abonné"
}: QRScannerModalProps) {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success'>('idle');
  const [scannedData, setScannedData] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStatus('scanning');
      // Simulate a scan after 3 seconds
      const timer = setTimeout(() => {
        const mockData = "SOGUIA-SUB-951234567";
        setScannedData(mockData);
        setStatus('success');
        if (onScan) onScan(mockData);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setStatus('idle');
      setScannedData(null);
    }
  }, [isOpen, onScan]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[3rem] overflow-hidden shadow-3xl border border-slate-100"
          >
            <div className="p-8 space-y-8 text-center">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xs italic text-white italic">S</div>
                   <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none text-left">Système de Vérification<br/>Soguia 4.0</span>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {status === 'scanning' ? (
                <div className="space-y-8">
                  <div className="relative w-56 h-56 mx-auto bg-slate-900 rounded-[2.5rem] flex items-center justify-center overflow-hidden border-8 border-slate-50 group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400')] opacity-40 grayscale" />
                    <div className="absolute inset-0 bg-slate-900/40" />
                    <div className="absolute inset-x-8 top-0 h-0.5 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-bounce z-20" style={{ animationDuration: '2s' }} />
                    <div className="z-10 flex flex-col items-center">
                       <Scan className="w-16 h-16 text-white mb-2 animate-pulse" />
                       <div className="text-[9px] font-black text-white uppercase tracking-widest opacity-60">Recherche de signal...</div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-2">{title}</h2>
                    <p className="text-sm font-medium text-slate-500">{description}</p>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                    <Camera className="w-4 h-4" /> Caméra Active
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <ShieldCheck className="w-4 h-4" /> Sécurisé
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="w-32 h-32 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-200">
                    <ShieldCheck className="w-16 h-16 text-white" />
                  </div>
                  
                  <div>
                    <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Authentification Réussie</div>
                    <h2 className="text-2xl font-black text-slate-900 italic lowercase tracking-tight mb-1">Abonné Identifié</h2>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{scannedData}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 text-left">
                     <img 
                       src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                       className="w-12 h-12 rounded-xl object-cover shadow-sm" 
                       alt="" 
                     />
                     <div>
                        <div className="text-sm font-black text-slate-900">Alhassane Sanhá</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Membre Bronze • ID: 29382</div>
                     </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={onClose}
                      className="flex-grow bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10"
                    >
                      Ouvrir le Dossier
                    </button>
                  </div>
                </motion.div>
              )}

              <div className="pt-4 border-t border-slate-50 flex items-center gap-3 text-left">
                 <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                    <Info className="w-4 h-4 text-slate-400" />
                 </div>
                 <p className="text-[9px] font-medium text-slate-400 leading-tight">
                    Technologie de balayage photo-électrique conforme aux normes de sécurité biométrique SOGUIA.
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
