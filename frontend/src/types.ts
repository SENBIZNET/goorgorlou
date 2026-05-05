export interface Pack {
  id: string;
  name: string;
  description: string;
  price: number; // Prix total de la ration
  cardPrice: number; // Prix de la carte d'adhésion variable
  contents: string[];
  features: string[];
  color: string;
  theme?: 'bronze' | 'silver' | 'gold' | 'diamond';
  image?: string;
  adhesionPrice?: number;
}

export type UserRole = 'ADMIN' | 'SUPERVISEUR' | 'BOUTIQUE' | 'LIVREUR' | 'SUBSCRIBER' | 'RECOUVREMENT' | 'FOURNISSEUR';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  shopId?: string; // Pour les boutiques et abonnés liés
  nfcCardId?: string;
  qrCodeUrl?: string;
  cardExpiryDate?: string; // Date d'expiration de la carte (1 an)
  membershipStatus?: 'ACTIVE' | 'EXPIRED' | 'RENEWAL_PENDING';
  currentDebt?: number;
  totalPaid?: number;
}
