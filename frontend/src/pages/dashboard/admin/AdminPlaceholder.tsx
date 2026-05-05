import { Construction, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface AdminPlaceholderProps {
  title: string;
  description: string;
}

export default function AdminPlaceholder({ title, description }: AdminPlaceholderProps) {
  const navigate = useNavigate();

  return (
    <div className="p-8 h-[calc(100vh-80px)] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md text-center"
      >
        <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-slate-200">
           <Construction className="w-10 h-10 text-orange-500" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 font-display italic lowercase mb-4">{title}</h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed mb-10">
          {description}
        </p>
        
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-slate-900 text-white px-10 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center gap-3 mx-auto"
        >
          <LayoutDashboard className="w-4 h-4" />
          Retour au Dashboard
        </button>
      </motion.div>
    </div>
  );
}
