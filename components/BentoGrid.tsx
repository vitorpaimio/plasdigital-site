import React from 'react';
import { motion } from 'framer-motion';
import { Target, MessageSquareMore, Briefcase, LineChart } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  className = "", 
  role 
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className={`bg-neutral-50 rounded-3xl border border-neutral-200 p-6 md:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all duration-300 group ${className}`}
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <Icon size={24} />
        </div>
        <span className="px-3 py-1 bg-neutral-200 text-neutral-600 rounded-full text-xs font-bold uppercase tracking-wide">
          {role}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-sm font-semibold text-blue-600 mb-4">{subtitle}</p>
      <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4 md:mb-6">
            Onde atuamos no seu <br /><span className="text-blue-600">Funil de Vendas.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 px-4">
            Foco total em aquisição e vendas. Transformamos funções manuais em software de alta performance.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Hunter */}
          <ServiceCard 
            title="Prospecção & Enriquecimento"
            subtitle="Para quem precisa de leads qualificados."
            description="Raspagem de dados (Scraping), qualificação de listas frias, pesquisa de sites/Instagram e primeiro contato ativo. Seu time comercial só fala com quem já demonstrou interesse real."
            icon={Target}
            role="O Hunter"
            className="md:col-span-1"
          />

          {/* Card 2: Closer */}
          <ServiceCard 
            title="Atendimento & SDR com IA"
            subtitle="Para quem tem volume e perde leads por demora."
            description="Qualificação imediata 24/7, quebra de objeções básicas e agendamento de reuniões direto na agenda do executivo. Tempo de resposta zero e padronização do discurso."
            icon={MessageSquareMore}
            role="O Closer"
            className="md:col-span-1 bg-blue-50/50 border-blue-100"
          />

          {/* Card 3: Manager */}
          <ServiceCard 
            title="Gestão de Pipeline & CRM"
            subtitle="Para organizar a casa e garantir o follow-up."
            description="Atualização automática do CRM, reativação de leads antigos e cadência de follow-up infinita até o cliente responder. Fim do 'esqueci de responder aquele cliente'."
            icon={Briefcase}
            role="O Manager"
            className="md:col-span-1"
          />

          {/* Card 4: Analyst */}
          <ServiceCard 
            title="Inteligência Comercial"
            subtitle="Para tomar decisões baseadas em dados."
            description="Relatórios de motivos de perda, análise de sentimento das conversas e métricas de funil em tempo real."
            icon={LineChart}
            role="O Analyst"
            className="md:col-span-1"
          />

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;