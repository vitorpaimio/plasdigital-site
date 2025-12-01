import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 p-1.5 rounded-lg text-white">
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="font-bold text-lg text-neutral-900 tracking-tight">Plas Digital</span>
          </div>
          
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Plas Digital. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="text-neutral-400 hover:text-blue-500 transition-colors">LinkedIn</a>
             <a href="#" className="text-neutral-400 hover:text-blue-500 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;