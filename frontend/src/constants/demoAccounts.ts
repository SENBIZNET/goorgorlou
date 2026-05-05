export interface DemoAccount {
  phone: string;
  pin: string;
  name: string;
  packId: string;
  role: 'SUBSCRIBER' | 'ADMIN' | 'BOUTIQUE' | 'LIVREUR' | 'RECOUVREMENT' | 'FOURNISSEUR';
}

export const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    phone: '4401',
    pin: '1234',
    name: 'Moussa Caba',
    packId: 'fomi-caba',
    role: 'SUBSCRIBER'
  },
  {
    phone: '4402',
    pin: '1234',
    name: 'Fatima Caba Plus',
    packId: 'fomi-caba-plus',
    role: 'SUBSCRIBER'
  },
  {
    phone: '4403',
    pin: '1234',
    name: 'Amadou Contenti',
    packId: 'no-contenti',
    role: 'SUBSCRIBER'
  },
  {
    phone: '4404',
    pin: '1234',
    name: 'Binta Consigui',
    packId: 'no-consigui',
    role: 'SUBSCRIBER'
  },
  {
    phone: '4405',
    pin: '1234',
    name: 'Agent Recovery',
    packId: 'staff',
    role: 'RECOUVREMENT'
  },
  {
    phone: '4406',
    pin: '1234',
    name: 'Partenaire Fournisseur',
    packId: 'staff',
    role: 'FOURNISSEUR'
  },
  {
    phone: '4400',
    pin: '1234',
    name: 'Admin Soguia',
    packId: 'admin',
    role: 'ADMIN'
  }
];
