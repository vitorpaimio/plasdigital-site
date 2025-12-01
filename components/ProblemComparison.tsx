import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, TrendingUp, Users, AlertTriangle, DollarSign } from 'lucide-react';

const ProblemComparison: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight"
          >
            O gargalo que está impedindo <br/><span className="text-blue-600">seu crescimento hoje.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto"
          >
            Você provavelmente está tentando escalar contratando mais pessoas. Isso gera custos trabalhistas, treinamento, turnover e erros humanos.
            <br className="my-4 block" />
            <span className="inline-block bg-red-50 text-red-600 px-2 py-1 rounded mb-2 md:mb-0 md:mr-2 text-sm font-bold">O modelo antigo:</span> <span className="text-sm md:text-base">+ Vendas = + Pessoas = + Problemas.</span>
            <br className="block md:hidden" />
            <span className="inline-block bg-green-50 text-green-600 px-2 py-1 rounded md:ml-4 text-sm font-bold">O novo modelo:</span> <span className="text-sm md:text-base font-semibold">+ Vendas = + Sistemas = Lucro.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Old Model */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-50 rounded-3xl p-6 md:p-8 border border-neutral-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Users size={80} className="md:w-[120px] md:h-[120px]" />
            </div>
            <h3 className="text-xl font-bold text-neutral-500 mb-6 flex items-center gap-2">
              <XCircle size={24} className="text-red-400" />
              Sua Empresa Hoje
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-600">
                <AlertTriangle size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Equipe comercial sobrecarregada e lenta.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-600">
                <AlertTriangle size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Leads frios sem resposta imediata.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-600">
                <AlertTriangle size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Erros em planilhas e dados perdidos.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-600">
                <AlertTriangle size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Custo fixo alto que cresce com a receita.</span>
              </li>
            </ul>
          </motion.div>

          {/* New Model */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-600 rounded-3xl p-6 md:p-8 border border-blue-500 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <TrendingUp size={80} className="md:w-[120px] md:h-[120px]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 size={24} className="text-green-300" />
              Com Plas Digital
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-300 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium">Atendimento 24/7 via IA (WhatsApp/Insta).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-300 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium">CRM atualizado sozinho em tempo real.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-300 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium">Processos à prova de falhas humanas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-300 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium">Margem de lucro maior e previsível.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemComparison;