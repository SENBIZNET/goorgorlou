import { QrCode, CreditCard, Download, ShieldCheck, Maximize2, X, RefreshCcw, Info, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Pack } from '../../../types';

interface MyCardProps {
  pack?: Pack;
  userInfo?: {
    name: string;
    phone: string;
  };
}

export default function MyCard({ pack, userInfo }: MyCardProps) {
  const [showFullCard, setShowFullCard] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showQRZoom, setShowQRZoom] = useState(false);
  const theme = pack?.theme || 'bronze';
  
  const getCardStyles = (theme: 'bronze' | 'silver' | 'gold' | 'diamond') => {
    switch (theme) {
      case 'bronze':
        return {
          bg: 'bg-gradient-to-br from-[#804A00] via-[#CD7F32] to-[#A0522D]',
          accent: 'text-orange-200',
          badge: 'bg-orange-800',
          border: 'border-orange-400/30',
          label: 'BRONZE MEMBER',
          iconColor: 'text-orange-300'
        };
      case 'silver':
        return {
          bg: 'bg-gradient-to-br from-[#71717A] via-[#A1A1AA] to-[#52525B]',
          accent: 'text-slate-100',
          badge: 'bg-slate-700',
          border: 'border-slate-200/30',
          label: 'SILVER MEMBER',
          iconColor: 'text-slate-300'
        };
      case 'gold':
        return {
          bg: 'bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#DAA520]',
          accent: 'text-amber-50',
          badge: 'bg-amber-800',
          border: 'border-amber-300/40',
          label: 'GOLD MEMBER',
          iconColor: 'text-amber-200'
        };
      case 'diamond':
        return {
          bg: 'bg-gradient-to-br from-[#0C4A6E] via-[#0891B2] to-[#0E7490]',
          accent: 'text-cyan-100',
          badge: 'bg-cyan-900',
          border: 'border-cyan-300/30',
          label: 'DIAMOND MEMBER',
          iconColor: 'text-cyan-300'
        };
      default:
        return {
          bg: 'bg-slate-900',
          accent: 'text-orange-400',
          badge: 'bg-orange-600',
          border: 'border-white/10',
          label: 'MEMBER',
          iconColor: 'text-orange-500'
        };
    }
  };

  const styles = getCardStyles(theme);

  return (
    <div className="px-10 py-8 space-y-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-slate-800 font-display italic lowercase">ma carte membre {theme}</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Identité numérique SOGUIA 4.0</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Physical Card Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${styles.bg} rounded-[3rem] p-12 aspect-[1.6/1] relative overflow-hidden shadow-2xl border ${styles.border} group ring-1 ring-white/10`}
        >
          {/* Holographic pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
          
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className={`${styles.badge} w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg italic shadow-xl`}>S</div>
                <div>
                   <div className="text-[10px] font-black tracking-widest uppercase opacity-80 leading-none">Soguia 4.0</div>
                   <div className="text-[8px] font-bold opacity-60 uppercase tracking-widest mt-0.5">{styles.label}</div>
                </div>
              </div>
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-md">
                <ShieldCheck className={`w-5 h-5 ${styles.iconColor}`} />
              </div>
            </div>

            <div className="text-2xl font-black tracking-[0.3em] font-mono text-white/90 drop-shadow-lg">4000 0560 9015 {userInfo?.phone || '1425'}</div>

            <div className="flex justify-between items-end border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowQRZoom(true);
                  }}
                  className="w-12 h-12 bg-white p-1.5 rounded-xl shadow-inner cursor-zoom-in"
                >
                   <QRCodeSVG 
                     value={`SOGUIA-SUB-${userInfo?.phone || '0000'}`}
                     size={40}
                     level="H"
                   />
                </motion.div>
                <div>
                   <div className="text-lg font-black uppercase tracking-tight">{userInfo?.name || 'João Domingos'}</div>
                   <div className="text-[10px] font-bold text-white/80 flex items-center gap-2">
                     <span className={`w-1.5 h-1.5 ${styles.badge} rounded-full`} />
                     SG-29382741
                   </div>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-3">
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowFullCard(true)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors border border-white/10 backdrop-blur-md"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </motion.button>
                <div>
                   <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-1">Valide jusqu'au</div>
                   <div className="text-xs font-black text-white">11 MAR 2027</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions & Instructions */}
        <div className="space-y-8">
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-6 font-display italic lowercase">options de carte</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-orange-600 shadow-sm transition-colors">
                         <Download className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700">Télécharger la carte PDF</span>
                   </div>
                   <span className="text-[10px] font-black text-slate-400 uppercase">1.2 MB</span>
                </button>
                <button className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-sm transition-colors">
                         <QrCode className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700">Exporter QR Code mobile</span>
                   </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase">PNG</span>
                </button>
              </div>
           </div>

           <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <CreditCard className="w-5 h-5" />
                <h4 className="text-sm font-black uppercase tracking-widest">carte physique NFC</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
                Votre carte contient une puce NFC permettant l'identification sans contact dans toutes nos boutiques partenaires. Ne la pliez pas et évitez les champs magnétiques.
              </p>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                 <span className="text-xs font-bold text-slate-300">Statut de la puce</span>
                 <span className="bg-emerald-500/20 text-emerald-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Active & Sécurisée</span>
              </div>
           </div>
        </div>
      </div>

      {/* QR Zoom Modal */}
      <AnimatePresence>
        {showQRZoom && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowQRZoom(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white p-10 rounded-[3rem] shadow-3xl text-center max-w-sm w-full"
            >
              <button onClick={() => setShowQRZoom(false)} className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-400" />
              </button>
              <div className="mb-8">
                <div className={`${styles.badge} w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl italic text-white italic mx-auto mb-4`}>S</div>
                <h3 className="text-xl font-black text-slate-900 font-display italic lowercase">votre identité qr</h3>
              </div>
              <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 mb-8 inline-block shadow-inner">
                <QRCodeSVG value={`SOGUIA-SUB-${userInfo?.phone || '0000'}`} size={200} level="H" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-black text-slate-900 uppercase tracking-tight">{userInfo?.name || 'João Domingos'}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: SG-29382741</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full Card Recto/Verso Modal */}
      <AnimatePresence>
        {showFullCard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowFullCard(false)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
            />
            
            <div className="relative w-full max-w-4xl py-12 flex flex-col items-center gap-12 z-10">
              <div className="flex items-center justify-between w-full text-white">
                <div>
                   <h2 className="text-3xl font-black font-display italic lowercase leading-none mb-1">carte digitale soguia</h2>
                   <p className="text-xs font-bold text-white/40 uppercase tracking-[0.25em]">Mode Consultation Plein Écran</p>
                </div>
                <button 
                  onClick={() => setShowFullCard(false)}
                  className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 3D Flip Card Container */}
              <div className="perspective-2000 w-full max-w-[700px] aspect-[1.586/1] relative group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <motion.div 
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                  className="w-full h-full relative preserve-3d"
                >
                  {/* RECTO (Front) */}
                  <div className={`absolute inset-0 backface-hidden ${styles.bg} rounded-[3rem] p-12 flex flex-col justify-between border ${styles.border} shadow-4xl text-white`}>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
                    <div className="relative z-10 flex justify-between items-start">
                       <div className="flex items-center gap-6">
                          <div className={`${styles.badge} w-16 h-16 rounded-3xl flex items-center justify-center font-black text-3xl italic shadow-2xl`}>S</div>
                          <div>
                             <div className="text-2xl font-black tracking-widest uppercase">SOGUIA</div>
                             <div className="text-sm font-bold opacity-60 uppercase tracking-[0.3em] font-display italic mt-1">{styles.label}</div>
                          </div>
                       </div>
                       <ShieldCheck className={`w-12 h-12 ${styles.iconColor} opacity-50`} />
                    </div>

                    <div className="relative z-10 text-5xl font-black tracking-[0.3em] font-mono drop-shadow-2xl text-center">
                       4000 0560 9015 {userInfo?.phone || '1425'}
                    </div>

                    <div className="relative z-10 flex justify-between items-end border-t border-white/20 pt-10">
                       <div className="flex items-center gap-6">
                          <div className="bg-white p-2 rounded-2xl shadow-2xl">
                             <QRCodeSVG value={`SOGUIA-SUB-${userInfo?.phone || '0000'}`} size={80} level="H" />
                          </div>
                          <div>
                             <div className="text-3xl font-black uppercase tracking-tight mb-2">{userInfo?.name || 'João Domingos'}</div>
                             <div className="text-sm font-bold text-white/50 tracking-[0.2em] font-mono">SG-29382741</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Valide jusqu'au</div>
                          <div className="text-2xl font-black">11 MAR 2027</div>
                       </div>
                    </div>
                  </div>

                  {/* VERSO (Back) */}
                  <div 
                    className="absolute inset-0 backface-hidden bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-between border border-white/10 shadow-4xl text-white overflow-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl -mr-48 -mt-48" />
                    
                    <div className="relative z-10 space-y-10">
                       <div className="flex justify-between items-center pb-6 border-b border-white/5">
                          <div className="flex items-center gap-2">
                             <div className="w-3 h-3 bg-orange-500 rounded-full" />
                             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 italic">Signature Numérique</span>
                          </div>
                          <div className="text-[10px] font-black text-white/20">SOGUIA v4.0.2</div>
                       </div>

                       <div className="grid grid-cols-2 gap-10">
                          <div className="space-y-6">
                             <div>
                                <h5 className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-3">Conditions d'Utilisation</h5>
                                <p className="text-[9px] text-slate-400 leading-relaxed font-medium">
                                   Cette carte est personnelle et incessible. Elle permet l'accès prioritaire aux sites logistiques SOGUIA et aux offres des boutiques certifiées. Toute utilisation frauduleuse entraînera la résiliation immédiate du pack.
                                </p>
                             </div>
                             <div>
                                <h5 className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-3">Sécurité NFC</h5>
                                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                   <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5" />
                                   <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Authentification biométrique requise pour les transactions supérieures à 50.000 F CFA.</p>
                                </div>
                             </div>
                          </div>
                          <div className="space-y-6">
                             <div>
                                <h5 className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-3">Support Technique</h5>
                                <div className="space-y-3">
                                   <div className="flex items-center gap-3">
                                      <Phone className="w-3 h-3 text-white/30" />
                                      <span className="text-[11px] font-black italic">+245 956 123 456</span>
                                   </div>
                                   <div className="flex items-center gap-3">
                                      <Mail className="w-3 h-3 text-white/30" />
                                      <span className="text-[11px] font-black italic">support@soguia.gw</span>
                                   </div>
                                </div>
                             </div>
                             <div className="pt-6">
                                <div className="w-full h-12 bg-black border border-white/5 rounded-lg flex items-center justify-center">
                                   <div className="w-3/4 h-2 bg-white/10 rounded-full overflow-hidden">
                                      <div className="h-full w-1/2 bg-orange-600 animate-pulse" />
                                   </div>
                                </div>
                                <div className="text-center text-[8px] font-black text-white/20 mt-2 uppercase tracking-widest">Puce NFC d-2938 cryptée</div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="relative z-10 flex justify-between items-center text-[10px] font-black uppercase text-white/20 tracking-[0.4em]">
                       <span>Certifié Bissau Logistic</span>
                       <div className="w-12 h-1 border-t border-white/10" />
                       <span>Plateforme Soguia 2026</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center gap-8 bg-white/5 backdrop-blur-md px-10 py-6 rounded-3xl border border-white/10 shadow-2xl">
                 <button 
                  onClick={() => setIsFlipped(!isFlipped)} 
                  className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:text-orange-400 transition-colors"
                 >
                    <RefreshCcw className={`w-5 h-5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
                    Retourner la carte
                 </button>
                 <div className="w-px h-6 bg-white/10" />
                 <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-bold text-white/40 uppercase">Statut Carte</span>
                       <span className="text-[10px] font-black text-emerald-500 uppercase">En ligne & Active</span>
                    </div>
                 </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">
                 <Info className="w-4 h-4" />
                 Appuyez sur la carte ou le bouton pour pivoter
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
