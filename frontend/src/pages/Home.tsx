import { motion, AnimatePresence } from 'motion/react';
import { PACKS } from '../constants/packs';
import { 
  CreditCard, 
  ShoppingBag, 
  Smartphone, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'summary',
      title: 'SOGUIA 4.0',
      subtitle: 'La faim s\'arrête ici.',
      description: 'Une plateforme révolutionnaire de distribution alimentaire à crédit pour la Guinée-Bissau. Identification NFC/QR, paiement mobile money et réseau de boutiques locales.',
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=2000',
      buttonText: 'Découvrir le projet',
      color: 'bg-orange-600'
    },
    {
      type: 'process',
      title: 'Cartes NFC & QR',
      subtitle: 'Paiement 100% Mobile',
      description: 'Identifiez-vous instantanément en boutique avec votre carte physique ou via l\'application. Payez vos tranches hebdomadaires par Orange ou MTN Money.',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000',
      buttonText: 'Comment ça marche',
      color: 'bg-blue-600'
    },
    {
      type: 'pack',
      title: PACKS[0].name,
      subtitle: `${PACKS[0].price.toLocaleString()} FCFA`,
      description: PACKS[0].description,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=2000',
      buttonText: `Adhérer au pack ${PACKS[0].name}`,
      color: PACKS[0].color,
      pack: PACKS[0]
    },
    {
      type: 'pack',
      title: PACKS[1].name,
      subtitle: `${PACKS[1].price.toLocaleString()} FCFA`,
      description: PACKS[1].description,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacabc88c5?auto=format&fit=crop&q=80&w=2000',
      buttonText: `Adhérer au pack ${PACKS[1].name}`,
      color: PACKS[1].color,
      pack: PACKS[1]
    },
    {
      type: 'pack',
      title: PACKS[2].name,
      subtitle: `${PACKS[2].price.toLocaleString()} FCFA`,
      description: PACKS[2].description,
      image: 'https://images.unsplash.com/photo-1590544313931-29a315f67f68?auto=format&fit=crop&q=80&w=2000',
      buttonText: `Adhérer au pack ${PACKS[2].name}`,
      color: PACKS[2].color,
      pack: PACKS[2]
    },
    {
      type: 'pack',
      title: PACKS[3].name,
      subtitle: `${PACKS[3].price.toLocaleString()} FCFA`,
      description: PACKS[3].description,
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=2000',
      buttonText: `Adhérer au pack ${PACKS[3].name}`,
      color: PACKS[3].color,
      pack: PACKS[3]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - prev + slides.length - 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Slider Section */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="w-full h-full object-cover opacity-60 scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className={`inline-block px-4 py-1.5 ${slides[currentSlide].color} text-white text-xs font-bold rounded-full mb-6 tracking-widest uppercase`}>
                {slides[currentSlide].type === 'summary' ? 'Le Concept' : slides[currentSlide].type === 'process' ? 'Le Processus' : 'Pack Ration'}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] font-display">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-orange-500 mb-4">{slides[currentSlide].subtitle}</p>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg font-medium">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className={`${slides[currentSlide].color} hover:brightness-110 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center`}
                >
                  {slides[currentSlide].buttonText}
                </Link>
                {slides[currentSlide].type === 'pack' && (
                  <div className="flex items-center space-x-4 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <div className="text-sm font-bold text-slate-300 uppercase tracking-widest">Carte: <span className="text-white">{slides[currentSlide].pack?.cardPrice.toLocaleString()} FCFA</span></div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center items-center space-x-4">
          <button onClick={prevSlide} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm border border-white/10 transition-all">
            <Zap className="w-5 h-5 -scale-x-100" />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${currentSlide === i ? 'w-12 bg-orange-600' : 'w-2 bg-white/40 hover:bg-white/60'}`} 
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm border border-white/10 transition-all">
            <Zap className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Abonnés', value: '12,000+', icon: <TrendingUp className="text-orange-600" /> },
              { label: 'Boutiques', value: '150+', icon: <MapPin className="text-orange-600" /> },
              { label: 'Villes', value: '12', icon: <Smartphone className="text-orange-600" /> },
              { label: 'Impact', value: '95%', icon: <Zap className="text-orange-600" /> },
            ].map((stat, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 border-r last:border-r-0 border-slate-100">
                <div className="bg-orange-50 p-3 rounded-xl">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section id="packs" className="py-24 bg-[#0F172A]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-display italic lowercase leading-tight">
              Abonnez-vous à la sérénité
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Des formules adaptées à chaque foyer bissau-guinéen. Bénéficiez d'une alimentation de qualité à travers nos packs modulables et un système de paiement flexible.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKS.map((pack, index) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#F8FAFC] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 h-[680px] flex flex-col"
              >
                {/* Top Image Section */}
                <div className="relative h-[40%] overflow-hidden">
                  <img 
                    src={pack.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 blur-[1px] brightness-75"
                    alt={pack.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pb-8">
                    <h3 className="text-2xl font-black text-white mb-6 tracking-tighter font-display uppercase">{pack.name}</h3>
                    
                    {/* Price Pill */}
                    <div className="bg-[#FFD700] px-8 py-2.5 rounded-full mb-3 shadow-xl shadow-yellow-900/40">
                      <span className="text-xl font-black text-slate-900 uppercase">
                        {pack.price > 0 ? `${pack.price.toLocaleString()} F` : 'Sob Medida'}
                      </span>
                    </div>

                    {/* Adhesion Pill */}
                    <div className="bg-black/40 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/10">
                      <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">
                        Adhésion {pack.adhesionPrice?.toLocaleString()} F
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="flex-grow p-8 flex flex-col">
                  {/* Contents List */}
                  <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                     <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                        {pack.contents.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center">
                              <CheckCircle2 className="w-3 h-3 text-[#FFD700]" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-600 leading-tight">{item}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 mt-6">
                    {pack.id === 'personalizado' && (
                      <button className="w-full bg-[#FFD700] text-slate-900 font-black py-4 rounded-xl transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-yellow-900/10">
                        <ShoppingBag className="w-4 h-4" />
                        Composer mon pack
                      </button>
                    )}
                    <Link 
                      to="/register"
                      className="w-full bg-[#0F172A] hover:bg-black text-white font-black py-4 rounded-xl transition-all text-center uppercase tracking-widest text-[10px] block"
                    >
                      S'inscrire
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Une technologie inclusive <br/>au service de votre table.
              </h2>
              <div className="space-y-12">
                {[
                  { 
                    title: 'Identification Digitale', 
                    desc: 'Recevez votre carte physique NFC ou votre QR code virtuel sur notre application mobile.',
                    icon: <CreditCard className="w-8 h-8"/> 
                  },
                  { 
                    title: 'Boutiques de Proximité', 
                    desc: 'Grâce à notre réseau dense, récupérez vos rations dans la boutique SOGUIA la plus proche de chez vous.',
                    icon: <MapPin className="w-8 h-8"/> 
                  },
                  { 
                    title: 'Paiement sans Cash', 
                    desc: "Reglez vos tranches via Mobile Money. Pas de cash manipulé, tout est sécurisé et tracé.",
                    icon: <Smartphone className="w-8 h-8"/> 
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="bg-orange-600 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-900/20">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 blur-[100px] opacity-20 rounded-full" />
              <div className="relative bg-slate-800 border border-slate-700/50 p-4 rounded-[3rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512428559083-a401c3d19b55?auto=format&fit=crop&q=80&w=800" 
                  alt="App interface" 
                  className="rounded-[2.5rem] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
