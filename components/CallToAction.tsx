import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-neutral-900 relative overflow-hidden"
    >
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-600/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Sua equipe comercial merece <br />
              <span className="text-blue-500">essa inteligência.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Não vendemos software de prateleira. Vendemos um processo
              comercial de alta performance. Vamos descobrir se sua empresa está
              pronta para isso?
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle2 size={20} className="text-blue-500" />
              <span>Diagnóstico Gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle2 size={20} className="text-blue-500" />
              <span>Plano Personalizado</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle2 size={20} className="text-blue-500" />
              <span>ROI Estimado</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-0"
          >
            <Button
              size="lg"
              className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 text-lg shadow-blue-500/25 shadow-2xl"
              onClick={() => (window as any).Typebot?.open()}
            >
              Agendar Diagnóstico de Automação
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-neutral-500">
            Poucas vagas disponíveis para consultoria este mês.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
