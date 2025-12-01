import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Layers, BarChart3 } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "1. Diagnóstico & Mapeamento",
      desc: "Mergulhamos no seu funil atual. Identificamos onde os leads esfriam, onde o follow-up falha e quais scripts de vendas estão obsoletos."
    },
    {
      icon: <PenTool size={28} />,
      title: "2. Adaptação de Linguagem",
      desc: "O que funciona com humanos não funciona com IA. Reescrevemos sua abordagem e treinamos a IA para ter a persona e a persuasão do seu melhor vendedor."
    },
    {
      icon: <Layers size={28} />,
      title: "3. Implementação do Ecossistema",
      desc: "Construção dos agentes, integração com CRM e configuração das automações de enriquecimento e prospecção em ambiente seguro."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "4. Monitoria de Dados",
      desc: "A IA não dorme e gera dados o tempo todo. Analisamos métricas de conversão reais para otimizar a persuasão do robô semana a semana."
    }
  ];

  return (
    <section id="methodology" className="py-16 md:py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-semibold tracking-wider uppercase text-xs md:text-sm"
          >
            Nossa Metodologia
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mt-3 mb-6"
          >
            O Protocolo de Vendas Autônoma
          </motion.h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            Não adianta colocar um motor de Ferrari num Fusca. Antes de automatizar, nós corrigimos e adaptamos seu processo comercial para a Era da IA.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-neutral-800 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-blue-400 mb-6 md:mb-8 shadow-lg shadow-black/50 hover:scale-105 transition-transform duration-300 hover:border-blue-500 hover:text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4 text-center">{step.title}</h3>
              <p className="text-neutral-400 text-sm text-center leading-relaxed px-2">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;