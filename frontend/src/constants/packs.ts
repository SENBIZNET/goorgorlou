import { Pack } from '../types';

export const PACKS: Pack[] = [
  {
    id: 'fomi-caba',
    name: 'FOMI CABA',
    description: '1 saco de Arroz (50 kg), 5 L de óleo de amendoim, 5 Kg de cebolas, 5 barras de sabão, 1 paquet de maggi',
    price: 31000,
    adhesionPrice: 10000,
    cardPrice: 2000,
    contents: ['1 saco de Arroz (50 kg)', '5 L d\'huile d\'arachide', '5 Kg d\'oignons', '5 barres de savon', '1 paquet de maggi'],
    features: ['Paiement en 4 tranches', 'Suivi SMS gratuit', 'Carte valable 1 an'],
    color: 'bg-orange-700',
    theme: 'bronze',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fomi-caba-plus',
    name: 'FOMI CABA +',
    description: 'Ration enrichie pour plus de variété et de confort familial.',
    price: 45000,
    adhesionPrice: 11000,
    cardPrice: 3500,
    contents: ['Riz (25kg)', 'Huile (5L)', 'Sucre (5kg)', 'Lait en poudre', 'Pâtes', 'Savon'],
    features: ['Paiement en 4 tranches', 'Livraison prioritaire', 'Carte valable 1 an'],
    color: 'bg-slate-400',
    theme: 'silver',
    image: 'https://images.unsplash.com/photo-1583258292688-d5ec27974ee1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'no-contenti',
    name: 'NO CONTENTI',
    description: '25 kg riz parfumé, 25 kg riz petites graines, Huile ara 5 L, Oignons 5 Kg, Maggi 1 paquet, Sucres 5 kg, Savon 5 Barres, Mayonnaise 1 boîte, Oeuf 1 casier, Café 1 paquet, Lait 1 carton',
    price: 59200,
    adhesionPrice: 12500,
    cardPrice: 5000,
    contents: ['25 kg riz parfumé', '25 kg riz petites graines', 'Huile ara 5 L', 'Oignons 5 Kg', 'Maggi 1 paquet', 'Sucres 5 kg', 'Savon 5 Barres', 'Mayonnaise 1 boîte', 'Oeuf 1 casier', 'Café 1 paquet', 'Lait 1 carton'],
    features: ['Paiement flexible', 'Carte NFC Premium (1 an)', 'Accès à des formations'],
    color: 'bg-amber-500',
    theme: 'gold',
    image: 'https://images.unsplash.com/photo-1512058560566-40340ca109d9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'no-consigui',
    name: 'NO CONSIGUI',
    description: '50 kg (grosse graines), 50 kg (riz petites graines), Huile ara 10 L, Oignons 10 Kg, Maggi 1 paquet, Sucres 10 kg, Savon 5 Barres, Mayonnaise 5 kg, Espaguetti...1 carton, Lipton........ 1 paquet, Lait omela...1 carton',
    price: 96400,
    adhesionPrice: 15000,
    cardPrice: 7500,
    contents: ['50 kg (grosse graines)', '50 kg (riz petites graines)', 'Huile ara 10 L', 'Oignons 10 Kg', 'Maggi 1 paquet', 'Sucres 10 kg', 'Savon 5 Barres', 'Mayonnaise 5 kg', 'Espaguetti...1 carton', 'Lipton........ 1 paquet', 'Lait omela...1 carton'],
    features: ['Totalement apurable (30j)', 'Carte valable 1 an', 'Assurance livraison'],
    color: 'bg-cyan-900',
    theme: 'diamond',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800'
  }
];
