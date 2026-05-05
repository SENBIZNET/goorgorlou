import { Heart, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">SOGUIA 4.0</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Combattre l'insécurité alimentaire en Guinée-Bissau grâce à l'innovation technologique SOGUIA 4.0.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Micro-crédit alimentaire</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Distribution locale</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Paiement Mobile</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Suivi Nutritionnel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Conditions d'adhésion</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SOGUIA 4.0. Tous droits réservés.
          </p>
          <p className="flex items-center text-sm text-slate-500">
            Fait avec <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> pour la Guinée-Bissau.
          </p>
        </div>
      </div>
    </footer>
  );
}
