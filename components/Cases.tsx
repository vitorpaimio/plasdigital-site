import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, UserCheck, RefreshCcw } from 'lucide-react';

const CaseCard = ({ title, challenge, solution, result, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ margin: "-50px" }}
    className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
  >
    <div className="w-12 h-12 bg-neutral-100 text-neutral-900 rounded-2xl flex items-center justify-center mb-6">
      <Icon size={24} />
    </div>
    
    <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-6 leading-tight">{title}</h3>
    
    <div className="space-y-6 flex-grow">
      <div>
        <h4 className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1">O Desafio</h4>
        <p className="text-neutral-600 text-sm leading-relaxed">{challenge}</p>
      </div>
      <div>
        <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">A Solução</h4>
        <p className="text-neutral-600 text-sm leading-relaxed">{solution}</p>
      </div>
    </div>
    
    <div className="mt-8 pt-6 border-t border-neutral-100">
       <h4 className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Resultado</h4>
       <p className="font-bold text-neutral-900 text-sm md:text-base">{result}</p>
    </div>
  </motion.div>
);

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 md:mb-6">
            Bastidores da Eficiência
          </h2>
          <p className="text-base md:text-lg text-neutral-600">
            Soluções reais que criamos para resolver problemas reais de escala.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <CaseCard 
            title="Enriquecimento de Leads B2B"
            icon={Zap}
            challenge="Cliente perdia 4 horas/dia pesquisando dados de empresas no Google para prospecção."
            solution="Agente de IA que varre o site/Instagram do lead, analisa o perfil e já escreve uma abordagem personalizada."
            result="Prospecção 10x mais rápida e personalizada."
            delay={0}
          />
          <CaseCard 
            title="SDR 24h para Infoproduto"
            icon={Clock}
            challenge="Leads do tráfego pago chegavam de madrugada e esfriavam até a manhã seguinte."
            solution="Implementação de IA no WhatsApp que qualifica e agenda reuniões instantaneamente."
            result="Aumento de 40% na conversão de agendamentos."
            delay={0.1}
          />
          <CaseCard 
            title="Reativação de Base Morta"
            icon={RefreshCcw}
            challenge="Milhares de contatos parados no CRM há meses sem comprar nada."
            solution="Campanha de reaquecimento via IA que dialoga (não é disparo em massa) para entender o momento do lead."
            result="R$ 150k recuperados em vendas no primeiro mês."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Cases;