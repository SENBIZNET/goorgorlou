import { 
  QrCode, 
  Wallet, 
  ChevronRight,
  Gift,
  CheckCircle2,
  X,
  Smartphone,
  Building2,
  FileText,
  Download,
  Share2,
  Printer,
  ShieldCheck,
  CreditCard,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import MyCard from '../../components/dashboard/subscriber/MyCard';
import MyOrders from '../../components/dashboard/subscriber/MyOrders';
import MyPayments from '../../components/dashboard/subscriber/MyPayments';
import ChangePack from '../../components/dashboard/subscriber/ChangePack';
import MyCertificate from '../../components/dashboard/subscriber/MyCertificate';
import MyProfile from '../../components/dashboard/subscriber/MyProfile';
import Support from '../../components/dashboard/subscriber/Support';
import { PACKS } from '../../constants/packs';

interface SubscriberPortalProps {
  userInfo?: {
    name: string;
    phone: string;
    packId: string;
  };
}

export default function SubscriberPortal({ userInfo }: SubscriberPortalProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [paymentStep, setPaymentStep] = useState<'method' | 'processing' | 'success'>('method');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [showQRZoom, setShowQRZoom] = useState(false);

  const currentPack = PACKS.find(p => p.id === userInfo?.packId) || PACKS[0];

  const handleAction = (item: any) => {
    setSelectedTransaction(item);
    if (item.status === 'PAID') {
      setShowReceiptModal(true);
    } else {
      setPaymentStep('method');
      setPaymentMethod(null);
      setShowPaymentModal(true);
    }
  };

  const executePayment = (method: string) => {
    setPaymentMethod(method);
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
    }, 2000);
  };

  const getCardStyles = (theme?: 'bronze' | 'silver' | 'gold' | 'diamond') => {
    switch (theme) {
      case 'bronze':
        return {
          bg: 'bg-gradient-to-br from-[#804A00] via-[#CD7F32] to-[#A0522D]',
          badge: 'bg-orange-800',
          border: 'border-orange-400/30',
          label: 'BRONZE MEMBER',
          accent: 'text-orange-400'
        };
      case 'silver':
        return {
          bg: 'bg-gradient-to-br from-[#71717A] via-[#A1A1AA] to-[#52525B]',
          badge: 'bg-slate-700',
          border: 'border-slate-200/30',
          label: 'SILVER MEMBER',
          accent: 'text-slate-200'
        };
      case 'gold':
        return {
          bg: 'bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#DAA520]',
          badge: 'bg-amber-800',
          border: 'border-amber-300/40',
          label: 'GOLD MEMBER',
          accent: 'text-amber-100'
        };
      case 'diamond':
        return {
          bg: 'bg-gradient-to-br from-[#0C4A6E] via-[#0891B2] to-[#0E7490]',
          badge: 'bg-cyan-900',
          border: 'border-cyan-300/30',
          label: 'DIAMOND MEMBER',
          accent: 'text-cyan-400'
        };
      default:
        return {
          bg: 'bg-slate-900',
          badge: 'bg-orange-600',
          border: 'border-white/10',
          label: 'SOGUIA MEMBER',
          accent: 'text-orange-500'
        };
    }
  };

  const cardStyles = getCardStyles(currentPack.theme);

  const renderContent = () => {
    switch (path) {
      case '/dashboard/card': return <MyCard pack={currentPack} userInfo={userInfo} />;
      case '/dashboard/orders': return <MyOrders />;
      case '/dashboard/payments': return <MyPayments />;
      case '/dashboard/packs': return <ChangePack />;
      case '/dashboard/certificate': return <MyCertificate />;
      case '/dashboard/profile': return <MyProfile />;
      case '/dashboard/support': return <Support />;
      default: return (
        <div className="px-10 py-8 space-y-8 max-w-[1600px] mx-auto bg-[#F8FAFC]">
          <header className="mb-8">
            <h1 className="text-2xl font-black text-slate-800 font-display">Accueil</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Espace membre certifié SOGUIA 4.0</p>
          </header>

          {/* Top Bento Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 1. Virtual Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`lg:col-span-4 ${cardStyles.bg} rounded-[2.5rem] relative overflow-hidden aspect-[1.6/1] shadow-2xl group border ${cardStyles.border}`}
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
              
              <div className="relative h-full p-8 flex flex-col justify-between text-white z-10">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className={`${cardStyles.badge} w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs italic shadow-lg`}>S</div>
                    <div className="text-[10px] font-black tracking-widest uppercase opacity-80">Soguia 4.0 <br/><span className="text-[8px] opacity-60 uppercase">{cardStyles.label}</span></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center"><QrCode className="w-4 h-4 text-white" /></div>
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center"><Wallet className="w-4 h-4 text-white" /></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-lg font-black tracking-[0.2em] font-mono opacity-40">4000 0560 9015 {userInfo?.phone || '1425'}</div>
                  <div className={`text-[8px] font-bold ${cardStyles.accent} uppercase tracking-widest`}>Expire fin: 11/03/2027</div>
                </div>

                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowQRZoom(true)}
                      className="w-10 h-10 bg-white p-1.5 rounded-lg cursor-zoom-in"
                    >
                       <QRCodeSVG 
                         value={`SOGUIA-SUB-${userInfo?.phone || '0000'}`}
                         size={28}
                         level="H"
                         includeMargin={false}
                       />
                    </motion.div>
                    <div>
                       <div className="text-sm font-black uppercase tracking-tight">{userInfo?.name || 'João Domingos'}</div>
                       <div className={`text-[10px] font-bold ${cardStyles.accent} animate-pulse font-mono`}>SG-29382741</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-1">Activé le: 11/03/2026</div>
                    <div className="text-xs font-black uppercase tracking-tighter text-white">Pack {currentPack.name}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Progress Tracker Card */}
            <div className="lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800 aspect-[1.6/1]">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-black text-white font-display">AVRIL 2026</h3>
                  <span className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">75% Complété</span>
               </div>

               <div className="relative py-4">
                  <div className="flex justify-between items-center relative z-10">
                    {[1, 2, 3, 4].map((t) => (
                      <div key={t} className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${
                          t <= 3 ? 'bg-emerald-500 border-emerald-900/50 text-white' : 'bg-slate-800 border-slate-700 text-slate-600'
                        }`}>
                          {t <= 3 ? <CheckCircle2 className="w-6 h-6" /> : <span className="text-xs font-black italic">T{t}</span>}
                        </div>
                        <span className="text-[8px] font-bold mt-2 text-slate-500 uppercase tracking-widest">{t === 1 ? 'Livraison' : 'Payé'}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-[3rem] left-0 w-full h-1 bg-slate-800 -z-0" />
                  <div className="absolute top-[3rem] left-0 w-3/4 h-1 bg-emerald-500 -z-0" />
               </div>

               <button 
                 onClick={() => navigate('/dashboard/payments')}
                 className="w-full bg-orange-500 hover:bg-orange-600 text-slate-900 font-black py-4 rounded-2xl transition-all uppercase tracking-widest text-xs"
               >
                 Renouveler mon pack
               </button>
            </div>

            {/* 3. Referral Card */}
            <div className="lg:col-span-4 bg-yellow-400 rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-between group aspect-[1.6/1]">
               <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-6 h-6 text-slate-900" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">Parrainage</span>
               </div>
               
               <div className="flex-grow flex flex-col justify-center text-center px-4">
                 <p className="text-sm font-bold text-slate-800 mb-2">Parrainez 10 personnes et gagnez un</p>
                 <h4 className="text-2xl font-black text-slate-900 font-display mb-4">PACK SOUTOURA</h4>
                 
                 <div className="bg-slate-900/20 h-2 rounded-full mb-2 overflow-hidden">
                    <div className="bg-slate-900 h-full w-[30%] transition-all" />
                 </div>
                 <div className="flex justify-between text-[10px] font-black text-slate-900">
                   <span>3</span>
                   <span>10</span>
                 </div>
               </div>

               <button className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl transition-all uppercase tracking-widest text-xs mt-4 group-hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/20">
                 Parrainer un ami
               </button>
            </div>
          </div>

          {/* Main Content & Right Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Timeline */}
            <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 min-h-[600px] flex flex-col">
              <h3 className="text-2xl font-black text-slate-800 mb-8 lowercase font-display italic">avril 2026</h3>
              <div className="space-y-4 flex-grow">
                {[
                  { title: 'TRANCHE 1', date: '17/04/2026', amount: '14 000 F', status: 'PENDING', label: 'PAYER' },
                  { title: 'TRANCHE 2', date: '08/03/2026', amount: '25 000 F', status: 'PAID', label: 'VOIR' },
                  { title: 'TRANCHE 3', date: '15/03/2026', amount: '25 000 F', status: 'PAID', label: 'VOIR' },
                  { title: 'TRANCHE 4', date: '22/03/2026', amount: '25 000 F', status: 'PAID', label: 'VOIR' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-100 hover:border-orange-200 transition-all group">
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        item.status === 'PAID' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-50 text-red-500'
                      }`}>
                        {item.status === 'PAID' ? <CheckCircle2 className="w-6 h-6" /> : <Wallet className="w-6 h-6 animate-pulse" />}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm tracking-tight">{item.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{item.status === 'PAID' ? 'Paiement effectué' : 'En attente'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-10">
                       <div className="text-right">
                          <div className={`text-sm font-black mb-1 ${item.status === 'PAID' ? 'text-emerald-600' : 'text-red-500'}`}>{item.amount}</div>
                          <div className="text-[10px] font-bold text-slate-400 tracking-widest">{item.date}</div>
                       </div>
                       <button 
                         onClick={() => handleAction(item)}
                         className={`px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${
                           item.status === 'PAID' ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-900 text-white hover:bg-orange-600'
                         }`}
                       >
                         {item.label}
                       </button>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigate('/dashboard/payments')}
                className="w-full mt-10 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-sm shadow-lg shadow-yellow-900/5"
              >
                Renouveler mon pack
              </button>
            </div>

            {/* Right Side: Active Pack Details */}
            <div className="lg:col-span-4 bg-slate-900 rounded-[2.5rem] relative overflow-hidden flex flex-col h-full min-h-[600px] border border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-[60%] object-cover opacity-50"
                alt="Pack background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
              <div className="relative p-10 flex flex-col h-full justify-end text-white z-10">
                <div className="mb-6">
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2 block">Ma Dotation</span>
                  <h2 className="text-3xl font-black font-display uppercase tracking-tight">{currentPack.name}</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Qualité Certifiée</p>
                </div>
                <div className="space-y-6 mb-12">
                  <div>
                    <h5 className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-3">Description</h5>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {currentPack.description}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-3">Composition du pack</h5>
                    <div className="space-y-2">
                       {currentPack.contents.map((item, idx) => (
                         <div key={idx} className="flex items-center gap-3">
                           <div className="w-5 h-5 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
                             <CheckCircle2 className="w-3 h-3" />
                           </div>
                           <span className="text-xs font-black uppercase tracking-widest opacity-60 text-white">{item}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/dashboard/packs')}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
                >
                   Migrer vers un autre pack
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              {paymentStep === 'method' && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-black font-display italic lowercase">choisir le mode de paiement</h3>
                    <button onClick={() => setShowPaymentModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                      <X className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 mb-6">
                      <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Montant à régler</div>
                      <div className="text-2xl font-black text-slate-900">{selectedTransaction?.amount}</div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'om', name: 'Orange Money', icon: <Smartphone className="text-orange-500" /> },
                        { id: 'telecel', name: 'Telecel Cash', icon: <Smartphone className="text-red-500" /> },
                        { id: 'bdu', name: 'BDU', icon: <Building2 className="text-blue-600" /> },
                        { id: 'atlantique', name: 'Banque Atlantique', icon: <Building2 className="text-orange-600" /> },
                        { id: 'ecobank', name: 'Ecobank', icon: <Building2 className="text-emerald-600" /> },
                        { id: 'orabank', name: 'Orabank', icon: <Building2 className="text-slate-800" /> },
                      ].map((method) => (
                        <button
                          key={method.id}
                          onClick={() => executePayment(method.name)}
                          className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-100 transition-all group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                              {method.icon}
                            </div>
                            <span className="font-bold text-slate-700">{method.name}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {paymentStep === 'processing' && (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
                    <div className="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-3xl animate-spin" />
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 font-display italic lowercase">traitement en cours</h3>
                  <p className="text-slate-500 font-medium">Veuillez valider l'opération sur votre téléphone via {paymentMethod}...</p>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-200">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 font-display italic lowercase">paiement réussi !</h3>
                  <p className="text-slate-500 font-medium mb-8">Votre facture a été mise à jour instantanément. Merci de votre confiance.</p>
                  <button 
                    onClick={() => setShowPaymentModal(false)}
                    className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-xs"
                  >
                    Fermer
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Receipt Modal */}
      <AnimatePresence>
        {showReceiptModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReceiptModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden shadow-3xl"
            >
              <div className="bg-slate-900 p-8 text-white relative">
                 <button onClick={() => setShowReceiptModal(false)} className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X className="w-5 h-5 text-white/40" />
                 </button>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center font-bold text-lg italic italic">S</div>
                    <div>
                       <div className="text-xs font-black tracking-widest uppercase opacity-60">Soguia 4.0</div>
                       <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest leading-none mt-0.5">Reçu de Paiement</div>
                    </div>
                 </div>
                 <div className="mt-8">
                    <div className="text-4xl font-black font-display italic lowercase tracking-tight">{selectedTransaction?.amount}</div>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-2">{selectedTransaction?.title}</div>
                 </div>
              </div>

              <div className="p-8 bg-slate-50 relative">
                 {/* Receipt "tear" pattern */}
                 <div className="absolute top-0 left-0 right-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/zigzag.png')] bg-repeat-x opacity-5 -translate-y-2" />
                 
                 <div className="space-y-6">
                    <div className="flex justify-between">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID Transaction</span>
                       <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">#SOG-9210-441</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date & Heure</span>
                       <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">15 Mars 2026 • 14:22</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client</span>
                       <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{userInfo?.name || 'João Domingos'}</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mode de paiement</span>
                       <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Orange Money</span>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-200">
                       <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 mb-6">
                          <QrCode className="w-12 h-12 text-slate-400" />
                          <div>
                             <div className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-0.5">Authentification</div>
                             <div className="text-[8px] font-bold text-slate-400 uppercase">Flash ce code pour vérifier l'authenticité sur Soguia.com</div>
                          </div>
                       </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                       <button className="flex-grow flex items-center justify-center gap-2 bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] transition-all active:scale-95">
                          <Download className="w-4 h-4" />
                          PDF
                       </button>
                       <button className="flex-grow flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] transition-all active:scale-95">
                          <Share2 className="w-4 h-4" />
                          Partager
                       </button>
                       <button className="w-14 bg-white border border-slate-200 text-slate-900 font-black py-4 rounded-2xl flex items-center justify-center transition-all active:scale-95">
                          <Printer className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* QR Zoom Modal */}
      <AnimatePresence>
        {showQRZoom && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQRZoom(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white p-10 rounded-[3rem] shadow-3xl text-center max-w-sm w-full"
            >
              <button 
                onClick={() => setShowQRZoom(false)}
                className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
              
              <div className="mb-8">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center font-bold text-xl italic text-white italic mx-auto mb-4">S</div>
                <h3 className="text-xl font-black text-slate-900 font-display italic lowercase">votre identité qr</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Scanner pour vérification</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 mb-8 inline-block shadow-inner">
                <QRCodeSVG 
                  value={`SOGUIA-SUB-${userInfo?.phone || '0000'}`}
                  size={200}
                  level="H"
                  includeMargin={false}
                />
              </div>

              <div className="space-y-4">
                <div className="text-sm font-black text-slate-900 uppercase tracking-tight">{userInfo?.name || 'João Domingos'}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 py-2 rounded-full inline-block px-6">
                  ID: SG-29382741
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                 <button className="flex-grow bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Enregistrer
                 </button>
                 <button className="flex-grow bg-slate-50 text-slate-400 font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Partager
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
