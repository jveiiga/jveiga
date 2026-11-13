
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaCode,
  FaDesktop,
  FaMobileAlt,
} from "react-icons/fa";

const Agency = () => {
  return (
    <section
      id="desenvolvimento-de-sites"
      className="relative min-h-screen z-10 isolate w-full overflow-hidden bg-[#f5f7fa]/85 text-[#080b12]"
    >
      {/* Textura de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[550px] w-[550px] rounded-full border border-blue-600/10" />
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[430px] w-[430px] rounded-full border border-blue-600/10" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-28 sm:px-10 lg:px-16">

        {/* Identificação */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#CB342B]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#CB342B] sm:text-xs">
            Soluções digitais
          </span>
        </motion.div>

        {/* Conteúdo principal */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Texto */}
          <div className="relative z-10">

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-5xl font-light leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
            >
              Sua presença digital precisa trabalhar{" "}
              <span className="font-bold text-blue-700">
                pelo seu negócio.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-lg text-sm leading-8 text-[#626b78] sm:text-base"
            >
              Desenvolvemos sites e landing pages que conectam
              tecnologia, experiência e estratégia para fortalecer
              marcas, ampliar oportunidades e transformar visitantes
              em clientes.
            </motion.p>

            {/* Indicadores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-8 border-t border-black/10 pt-7"
            >
              <div>
                <FaDesktop className="mb-3 text-xl text-blue-700" />
                <span className="block text-xs font-bold uppercase tracking-wider">
                  Websites
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  Experiências digitais
                </span>
              </div>

              <div>
                <FaMobileAlt className="mb-3 text-xl text-blue-700" />
                <span className="block text-xs font-bold uppercase tracking-wider">
                  Landing Pages
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  Foco em conversão
                </span>
              </div>

              <div>
                <FaCode className="mb-3 text-xl text-blue-700" />
                <span className="block text-xs font-bold uppercase tracking-wider">
                  Tecnologia
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  Soluções personalizadas
                </span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10"
            >
              <Link
                to="/desenvolvimento-de-sites"
                className="group inline-flex items-center gap-5 bg-[#087cff] px-7 py-5 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#CB342B]"
              >
                Conheça nossas soluções

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Composição visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 35 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            {/* Moldura principal */}
            <div className="relative aspect-[3/4] md:aspect-[2/2] border border-black/10 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.08)]">

              {/* Barra superior */}
              <div className="flex h-9 items-center justify-between border-b border-black/10 px-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>

                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
                  Digital experience
                </span>

                <FaExternalLinkAlt className="text-[10px] text-gray-400" />
              </div>

              {/* Interface ilustrativa */}
              <div className="relative flex h-[calc(100%-36px)] flex-col overflow-hidden bg-[#080b12] p-4 sm:p-9">

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white font-black tracking-widest">
                    BRAND<span className="text-blue-400">.</span>
                  </span>

                  <div className="flex gap-3">
                    <span className="h-1 w-8 bg-white/30" />
                    <span className="h-1 w-8 bg-white/30" />
                  </div>
                </div>

                <div className="relative z-10 mt-5 max-w-[300px] sm:mt-10">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-blue-400">
                    Your digital presence
                  </span>

                  <h3 className="mt-3 text-2xl text-white font-bold leading-tight tracking-tight sm:mt-4 sm:text-4xl">
                    Beyond
                    <br />
                    the ordinary.
                  </h3>

                  <p className="mt-4 md:max-w-[220px] text-[10px] leading-5 text-white/50">
                    Design, technology and strategy working together.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 bg-blue-600 px-5 py-3 text-[9px] font-bold uppercase tracking-wider">
                    Discover more
                    <FaArrowRight />
                  </div>
                </div>

                {/* Elemento gráfico */}
                <div className="pointer-events-none absolute -bottom-24 -right-12 h-64 w-64 rounded-full border border-blue-500/40" />
                <div className="pointer-events-none absolute -bottom-16 -right-4 h-48 w-48 rounded-full border border-blue-400/30" />

                <div className="pointer-events-none absolute bottom-5 right-8 h-32 w-32 rounded-full bg-blue-600/30 blur-[45px]" />

                <span className="absolute bottom-5 left-8 text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Design / Development / Strategy
                </span>
              </div>
            </div>

            {/* Identificação lateral */}
            <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] font-semibold uppercase tracking-[0.35em] text-blue-700 sm:block">
              Built for growth
            </div>

            {/* Marcador */}
            <div className="absolute -bottom-6 -left-6 flex h-16 w-16 items-center justify-center bg-[#CB342B] text-white shadow-xl">
              <FaCode className="text-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Rodapé da seção */}
        <div className="mt-24 flex items-center justify-between border-t border-black/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400">
            JVEIGA / Digital solutions
          </span>

        </div>
      </div>
    </section>
  );
};

export default Agency;
