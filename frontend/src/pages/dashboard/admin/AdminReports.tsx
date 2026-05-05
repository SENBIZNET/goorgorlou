import { 
  FileText, 
  Download, 
  Calendar, 
  Search, 
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileSpreadsheet,
  FileBox
} from 'lucide-react';
import { motion } from 'motion/react';

const reports = [
  { id: '1', title: 'Rapport des Ventes Mensuelles', period: 'Avril 2026', type: 'Financier', status: 'Généré', size: '2.4 MB', format: 'PDF' },
  { id: '2', title: 'Inventaire Complet du Réseau', period: '01 Mai 2026', type: 'Opérations', status: 'En cours', size: '-', format: 'Excel' },
  { id: '3', title: 'Statistiques des Nouveaux Abonnés', period: 'Mai 2026', type: 'Marketing', status: 'Généré', size: '1.8 MB', format: 'PDF' },
  { id: '4', title: 'État des Remboursements Crédits', period: 'S1 2026', type: 'Financier', status: 'Généré', size: '4.2 MB', format: 'CSV' },
  { id: '5', title: 'Rapport de Performance Livraisons', period: 'Mai 2026', type: 'Logistique', status: 'Erreur', size: '-', format: 'PDF' },
];

export default function AdminReports() {
  return (
    <div className="p-8 space-y-10 max-w-[1200px] mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 font-display italic lowercase leading-none mb-2">centre de rapports</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Générez et téléchargez des rapports complets en un clic</p>
        </div>
        
        <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
          <FileText className="w-4 h-4" />
          Nouveau Rapport
        </button>
      </header>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Rapports Financiers', count: 12, icon: FileSpreadsheet, color: 'text-emerald-500', bg: 'bg-emerald-50' },
           { label: 'Rapports Logistiques', count: 8, icon: FileBox, color: 'text-blue-500', bg: 'bg-blue-50' },
           { label: 'Analyses Clientèle', count: 15, icon: FileText, color: 'text-purple-500', bg: 'bg-purple-50' },
         ].map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-slate-200 transition-all cursor-pointer">
               <div className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
               </div>
               <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{cat.label}</div>
                  <div className="text-lg font-black text-slate-900">{cat.count} fichiers</div>
               </div>
            </div>
         ))}
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-wrap items-center justify-between gap-6">
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                 type="text" 
                 placeholder="Chercher un rapport..." 
                 className="bg-slate-50 border-none pl-12 pr-6 py-3 rounded-2xl text-xs font-bold w-64 focus:ring-2 focus:ring-orange-500/20"
              />
           </div>
           
           <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                 <Calendar className="w-3 h-3" />
                 Période
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                 <Filter className="w-3 h-3" />
                 Type
              </button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30">
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-10">Titre & Période</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Catégorie</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Format</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {reports.map((report, i) => (
                <motion.tr 
                  key={report.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50/50 transition-all group"
                >
                  <td className="p-6 pl-10">
                    <div>
                      <div className="text-sm font-black text-slate-900 tracking-tight">{report.title}</div>
                      <div className="text-[10px] font-bold text-slate-400 mt-1 italic">{report.period}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 rounded-lg px-3 py-1">{report.type}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      {report.status === 'Généré' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                      {report.status === 'En cours' && <Clock className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />}
                      {report.status === 'Erreur' && <AlertCircle className="w-3.5 h-3.5 text-red-500" />}
                      <span className={`text-[10px] font-black uppercase tracking-widest ${
                        report.status === 'Généré' ? 'text-emerald-600' : 
                        report.status === 'En cours' ? 'text-orange-600' : 'text-red-600'
                      }`}>{report.status}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-[10px] font-bold text-slate-400">{report.format} ({report.size})</span>
                  </td>
                  <td className="p-6 pr-10 text-right">
                    <button className={`p-3 rounded-xl transition-all ${
                       report.status === 'Généré' 
                       ? 'bg-slate-900 text-white hover:bg-orange-600 shadow-lg shadow-slate-200' 
                       : 'bg-slate-50 text-slate-200 cursor-not-allowed'
                    }`}>
                       <Download className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 bg-slate-50/20 border-t border-slate-50 flex items-center justify-between">
           <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">SOGUIA Reporting Engine v2.1</div>
           <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-[10px] font-black uppercase text-slate-400 bg-white border border-slate-100 rounded-lg">Précédent</button>
              <button className="px-4 py-2 text-[10px] font-black uppercase text-slate-900 bg-white border border-slate-100 rounded-lg">Suivant</button>
           </div>
        </div>
      </div>
    </div>
  );
}
