import React from "react";
import { motion } from "framer-motion";
import { Youtube, Award } from "lucide-react";

const Authority: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-200 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6"
            >
              <Youtube size={16} />
              <span>Autoridade no YouTube</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              Liderado por quem <br />{" "}
              <span className="text-blue-600">ensina o mercado.</span>
            </h2>

            <div className="space-y-6 text-base md:text-lg text-neutral-600">
              <p>
                Meu nome é{" "}
                <strong className="text-neutral-900">Pedro Almeida</strong>, e
                além de fundador da Plas Digital, sou criador de conteúdo
                referência na área de Automação e IA.
              </p>
              <p>
                Semanalmente, publico workflows complexos e soluções inovadoras
                que são copiadas por outras agências.
              </p>
              <p className="border-l-4 border-blue-500 pl-4 italic text-neutral-500 bg-white p-4 rounded-r-lg shadow-sm">
                "Ao nos contratar, você não está pegando um aventureiro que
                aprendeu IA ontem. Você está contratando a fonte do
                conhecimento. Já validei centenas de fluxos em vídeo e agora
                aplico essa mesma engenharia validada dentro da sua empresa."
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-neutral-900">
                  +500k
                </span>
                <span className="text-xs md:text-sm text-neutral-500">
                  Visualizações em Tutoriais
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-neutral-900">
                  +100
                </span>
                <span className="text-xs md:text-sm text-neutral-500">
                  Workflows Criados
                </span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 w-full max-w-sm lg:max-w-sm order-1 lg:order-2 mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative px-4 md:px-0"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-20 blur-xl"></div>
              <img
                src="/images/fundador.webp"
                alt="Fundador Plas Digital"
                className="relative rounded-3xl shadow-2xl w-full border border-neutral-200 bg-white aspect-[4/5] object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-3 max-w-[90%]">
                <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-neutral-500 font-semibold uppercase">
                    Certificado
                  </p>
                  <p className="text-sm md:text-base font-bold text-neutral-900">
                    Especialista n8n
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
