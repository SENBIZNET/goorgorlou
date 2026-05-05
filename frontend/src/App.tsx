/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDocFromServer } from 'firebase/firestore';
import { auth, db } from './lib/firebase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import RegisterSubscriber from './pages/RegisterSubscriber';
import { useState, useEffect, FormEvent } from 'react';

import { DEMO_ACCOUNTS } from './constants/demoAccounts';
import { Phone, Lock } from 'lucide-react';

function AuthPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const account = DEMO_ACCOUNTS.find(a => a.phone === phone && a.pin === pin);

    if (account) {
      // Store demo user info
      localStorage.setItem('soguia_user', JSON.stringify(account));
      setTimeout(() => {
        navigate('/dashboard');
        setLoading(false);
      }, 800);
    } else {
      setError("Identifiants incorrects. Pour la démo, essayez 4401 avec le code 1234.");
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 text-center">
      <div className="max-w-md mx-auto bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
        <h2 className="text-3xl font-black mb-6 font-display uppercase tracking-tight">Accès Membre</h2>
        <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
          Identifiez-vous avec votre numéro et PIN Soguia pour accéder à votre espace de gestion.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handlePhoneLogin} className="space-y-4 mb-8">
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="tel" 
              placeholder="Numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="password" 
              placeholder="Code PIN (4 chiffres)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-orange-500 font-bold text-slate-800 transition-all font-mono"
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className={`w-full bg-slate-900 hover:bg-black text-white font-black py-4 rounded-2xl shadow-xl shadow-slate-100 transition-all active:scale-95 flex items-center justify-center gap-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Vérification...' : 'Se connecter'}
          </button>
        </form>

        <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 text-left mb-8">
           <h4 className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-2">Comptes Démo par Pack</h4>
           <div className="grid grid-cols-2 gap-2">
              {DEMO_ACCOUNTS.map(a => (
                <button 
                  key={a.phone}
                  onClick={() => { setPhone(a.phone); setPin(a.pin); }}
                  className="text-[9px] font-black bg-white border border-orange-100 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all uppercase truncate"
                >
                  {a.packId.replace('fomi-', '').replace('no-', '').toUpperCase()} (Tél: {a.phone})
                </button>
              ))}
           </div>
        </div>
        
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-slate-400 bg-white px-4">Ou via Google</div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white border-2 border-slate-100 hover:bg-slate-50 text-slate-900 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 text-sm"
        >
          <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
          Continuer avec Google
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error: any) {
        if (error?.message?.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
      } finally {
        setIsFirebaseReady(true);
      }
    }
    testConnection();
  }, []);

  if (!isFirebaseReady) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#FCFAF7]">
        <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<><Navbar /><main className="flex-grow"><Home /></main><Footer /></>} />
          <Route path="/about" element={<><Navbar /><main className="flex-grow"><About /></main><Footer /></>} />
          <Route path="/packs" element={<><Navbar /><main className="flex-grow"><Home /></main><Footer /></>} />
          <Route path="/auth" element={<><Navbar /><main className="flex-grow"><AuthPage /></main><Footer /></>} />
          <Route path="/register" element={<RegisterSubscriber />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
