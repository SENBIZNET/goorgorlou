import { useState } from 'react';
import { 
  Settings, 
  Shield, 
  Globe, 
  Bell, 
  Database, 
  CreditCard,
  Mail,
  Lock,
  Smartphone,
  ChevronRight,
  Save,
  RefreshCw,
  Server,
  Key,
  History,
  Cloud,
  Eye,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type SettingsCategory = 'GENERAL' | 'SECURITY' | 'NOTIFICATIONS' | 'PAYMENTS' | 'DATA' | 'EMAILS';

export default function AdminSettings() {
  const [activeCategory, setActiveCategory] = useState<SettingsCategory>('GENERAL');

  const categories = [
    { id: 'GENERAL', icon: Globe, label: 'Général' },
    { id: 'SECURITY', icon: Shield, label: 'Sécurité & Accès' },
    { id: 'NOTIFICATIONS', icon: Bell, label: 'Notifications Push' },
    { id: 'PAYMENTS', icon: CreditCard, label: 'Passerelles de Paiement' },
    { id: 'DATA', icon: Database, label: 'Sauvegarde & Data' },
    { id: 'EMAILS', icon: Mail, label: 'Emails Transactionnels' },
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'GENERAL':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <section className="space-y-6">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase border-b border-slate-100 pb-4">paramètres généraux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Nom de l'application</label>
                  <input type="text" defaultValue="Soguia 4.0" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm font-bold focus:ring-2 focus:ring-orange-500/20 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Maintenance du système</label>
                  <div className="h-full flex items-center">
                    <button className="relative w-12 h-6 bg-slate-200 rounded-full transition-colors focus:outline-none">
                      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
                    </button>
                    <span className="ml-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">Désactivé</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Fuseau Horaire</label>
                 <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm font-bold focus:ring-2 focus:ring-orange-500/20 outline-none appearance-none">
                    <option>(GMT+00:00) Bissau / Greenwich Mean Time</option>
                    <option>(GMT+01:00) Central European Time</option>
                 </select>
              </div>
            </section>
          </motion.div>
        );
      case 'SECURITY':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <section className="space-y-6">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase border-b border-slate-100 pb-4">sécurité système</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm"><Smartphone className="w-5 h-5 text-orange-600" /></div>
                    <div>
                      <div className="text-sm font-black text-slate-900">Authentification à deux facteurs</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Requis pour tous les admins</div>
                    </div>
                  </div>
                  <button className="relative w-12 h-6 bg-emerald-500 rounded-full transition-colors focus:outline-none"><span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" /></button>
                </div>
                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm"><Key className="w-5 h-5 text-slate-400" /></div>
                    <div>
                      <div className="text-sm font-black text-slate-900">Force des mots de passe</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Minimum 12 caractères + symboles</div>
                    </div>
                  </div>
                  <button className="relative w-12 h-6 bg-slate-200 rounded-full transition-colors focus:outline-none"><span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" /></button>
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Clés API Système</h4>
                <div className="bg-slate-900 p-6 rounded-2xl text-white flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Server className="w-5 h-5 text-orange-500" /></div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Production API Key</div>
                        <div className="text-sm font-mono mt-1">sk_live_••••••••••••••••3a8c</div>
                      </div>
                   </div>
                   <button className="p-2 border border-white/10 rounded-xl hover:bg-white/5"><Eye className="w-4 h-4" /></button>
                </div>
              </div>
            </section>
          </motion.div>
        );
      case 'NOTIFICATIONS':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <section className="space-y-6">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase border-b border-slate-100 pb-4">notifications push</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Nouvelle Inscription', desc: 'Alerte lors d\'un nouvel abonnement' },
                  { label: 'Paiement Reçu', desc: 'Notification de succès de transaction' },
                  { label: 'Stock Alerte', desc: 'Seuil critique de stock en boutique' },
                  { label: 'Support Ticket', desc: 'Nouveau message d\'assistance' },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div className="max-w-[180px]">
                      <div className="text-xs font-black text-slate-900">{item.label}</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mt-1">{item.desc}</div>
                    </div>
                    <button className="relative w-10 h-5 bg-emerald-500 rounded-full transition-colors focus:outline-none"><span className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full transition-transform" /></button>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        );
      case 'PAYMENTS':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <section className="space-y-6">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase border-b border-slate-100 pb-4">passerelles de paiement</h3>
              <div className="space-y-4">
                {[
                  { name: 'Orange Money Guinea-Bissau', status: 'Actif', brand: 'ORANGE' },
                  { name: 'MTN Mobile Money (MoMo)', status: 'Actif', brand: 'MTN' },
                  { name: 'Paiement par Carte (Stripe)', status: 'Inactif', brand: 'CREDIT' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-slate-200 transition-all">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 font-black text-[10px] text-slate-400">{item.brand}</div>
                       <div>
                          <div className="text-sm font-black text-slate-900">{item.name}</div>
                          <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${item.status === 'Actif' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-500'}`}>{item.status}</span>
                       </div>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 underline">Configurer</button>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        );
      case 'DATA':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <section className="space-y-6">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase border-b border-slate-100 pb-4">sauvegarde & data</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-8 bg-slate-900 rounded-3xl text-white flex flex-col justify-between h-48">
                    <div className="flex justify-between items-start">
                       <div className="bg-white/10 p-2 rounded-lg"><Cloud className="w-5 h-5 text-orange-500" /></div>
                       <span className="text-[9px] font-black bg-emerald-500 px-2 py-1 rounded-md uppercase tracking-widest">En ligne</span>
                    </div>
                    <div>
                       <div className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Dernière Sauvegarde</div>
                       <div className="text-lg font-black italic">Aujourd'hui, 03:22</div>
                    </div>
                 </div>
                 <div className="p-8 bg-white border border-slate-100 rounded-3xl flex flex-col justify-between h-48 shadow-sm">
                    <div className="bg-slate-900/5 p-2 rounded-lg w-fit"><History className="w-5 h-5 text-slate-400" /></div>
                    <div className="space-y-4">
                       <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Fréquence de backup</div>
                       <div className="flex items-center justify-between">
                          <span className="text-sm font-black text-slate-900 italic">Chaque 12 heures</span>
                          <button className="p-2 hover:bg-slate-50 rounded-lg"><RefreshCw className="w-4 h-4 text-slate-400" /></button>
                       </div>
                    </div>
                 </div>
              </div>
              <button className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                 <Database className="w-4 h-4" />
                 Lancer une sauvegarde manuelle
              </button>
            </section>
          </motion.div>
        );
      case 'EMAILS':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <section className="space-y-6">
              <h3 className="text-xl font-black text-slate-900 font-display italic lowercase border-b border-slate-100 pb-4">emails transactionnels</h3>
              <div className="space-y-4">
                {[
                  { name: 'Bienvenue & Onboarding', slug: 'welcome-email' },
                  { name: 'Confirmation de Paiement', slug: 'payment-receipt' },
                  { name: 'Notification de Livraison', slug: 'delivery-ready' },
                  { name: 'Rappel de Tranche', slug: 'payment-reminder' },
                ].map((tpl, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm"><Mail className="w-4 h-4 text-slate-400" /></div>
                      <div className="text-sm font-black text-slate-900">{tpl.name}</div>
                    </div>
                    <div className="flex gap-2">
                       <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 px-4 py-2 bg-white rounded-lg border border-slate-100">Aperçu</button>
                       <button className="text-[10px] font-black uppercase tracking-widest text-orange-600 px-4 py-2 bg-orange-50 rounded-lg border border-orange-100">Modifier</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        );
    }
  };

  return (
    <div className="p-8 space-y-10 max-w-[1200px] mx-auto overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">configuration</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Paramètres globaux du système Soguia 4.0</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-400 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-all">
            <RefreshCw className="w-4 h-4" />
            Réinitialiser
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10">
            <Save className="w-4 h-4" />
            Enregistrer
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-2">
          {categories.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button 
                key={item.id}
                onClick={() => setActiveCategory(item.id as SettingsCategory)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                  isActive 
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-300 scale-[1.02] z-10' 
                  : 'bg-white border border-slate-100 text-slate-500 hover:bg-slate-50 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-white/10' : 'bg-slate-50 text-slate-400'}`}>
                    <item.icon className={`w-4 h-4 ${isActive ? 'text-orange-500' : 'text-slate-400'}`} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight className={`w-3 h-3 ${isActive ? 'text-white/40 translate-x-1' : 'text-slate-200'}`} />
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-slate-50 rounded-full blur-3xl opacity-50" />
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
