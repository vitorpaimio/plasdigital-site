import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pb-16 pt-24 md:py-0"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://azuton.com/wp-content/uploads/2022/09/automacao-de-markerting.jpg"
          alt="Automação em ação"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-[2px]"></div>
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-900/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-white tracking-wide uppercase">
              Automações & IA Avançada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            A Maneira Mais Inteligente de Escalar sua Empresa{" "}
            <span className="text-blue-400 block sm:inline">
              sem Contratar.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 md:px-0"
          >
            Transformamos processos manuais e lentos em sistemas de Inteligência
            Artificial autônomos. Pare de gastar tempo com o operacional e foque
            no estratégico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto group min-w-[200px]"
              onClick={() => (window as any).Typebot?.open()}
            >
              Agendar Diagnóstico
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
              href="#services"
            >
              Saber mais
              <ChevronRight className="ml-1 w-5 h-5 text-neutral-400" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
