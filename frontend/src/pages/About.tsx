import { motion } from 'motion/react';
import { Heart, ShieldCheck, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-orange-600 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Pourquoi SOGUIA 4.0 ?
          </motion.h1>
          <p className="text-xl md:text-2xl text-orange-50 max-w-2xl mx-auto font-medium">
            Parce que personne ne devrait avoir à choisir entre son loyer et son repas du soir.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-orange-600 font-bold tracking-widest uppercase text-sm">
                <Globe className="w-4 h-4" />
                <span>Le Contexte Bissau-Guinéen</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Répondre aux défis alimentaires de l'Afrique de l'Ouest.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  En Guinée-Bissau, comme dans de nombreux pays de la sous-région, l'insécurité alimentaire est souvent liée non pas à une pénurie, mais à une <strong>instabilité des revenus</strong>. Les familles font face à des cycles de trésorerie précaires où l'accès à une nourriture de qualité devient un luxe mensuel.
                </p>
                <p>
                  <strong>SOGUIA 4.0</strong> est né de cette volonté de briser ce cycle. Nous ne sommes pas une œuvre caritative, mais une plateforme d'inclusion financière et alimentaire.
                </p>
                <p>
                  En introduisant le micro-crédit alimentaire structuré, payable en 4 tranches, nous redonnons du pouvoir d'achat et de la dignité aux ménages.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                  <Heart className="text-orange-600 mb-4 w-10 h-10" />
                  <h4 className="text-xl font-black text-slate-900 mb-2">Social</h4>
                  <p className="text-slate-600 text-sm">Soutenir les familles en période de soudure.</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                  <ShieldCheck className="text-orange-500 mb-4 w-10 h-10" />
                  <h4 className="text-xl font-black mb-2">Sécurité</h4>
                  <p className="text-slate-400 text-sm">Identification NFC/QR pour éviter toute fraude ou abus.</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
                  <Users className="text-emerald-600 mb-4 w-10 h-10" />
                  <h4 className="text-xl font-black text-slate-900 mb-2">Communauté</h4>
                  <p className="text-slate-600 text-sm">Un réseau de boutiques locales au cœur des quartiers.</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=600" 
                  alt="Communauté" 
                  className="rounded-[2rem] shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-16 underline decoration-orange-600 decoration-8 underline-offset-8">Nos engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Transparence Totale', 
                desc: 'Aucun frais caché. Les prix sont affichés et le suivi des paiements est accessible 24/7 sur mobile.' 
              },
              { 
                title: 'Qualité Certifiée', 
                desc: 'Toutes nos denrées sont rigoureusement sélectionnées auprès des meilleurs grossistes de Bissau.' 
              },
              { 
                title: 'Zéro Cash', 
                desc: 'Nous militons pour une économie digitale plus sûre, réduisant les risques de vol et de corruption.' 
              }
            ].map((v, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="text-orange-600 text-5xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity leading-none">0{i+1}</div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h4>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
