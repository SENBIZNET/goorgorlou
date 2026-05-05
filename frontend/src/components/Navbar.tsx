import { Link } from 'react-router-dom';
import { ShoppingBasket, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <ShoppingBasket className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-orange-900 tracking-tight">SOGUIA 4.0</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Accueil</Link>
            <Link to="/packs" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Nos Packs</Link>
            <Link to="/about" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">À Propos</Link>
            <Link 
              to="/auth" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-orange-200 flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Connexion</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-orange-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-orange-50 rounded-xl">Accueil</Link>
              <Link to="/packs" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-orange-50 rounded-xl">Nos Packs</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-700 hover:bg-orange-50 rounded-xl">À Propos</Link>
              <Link to="/auth" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-center bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100">
                Se Connecter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
