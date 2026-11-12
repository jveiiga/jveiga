
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaStar,
  FaChartLine,
  FaCheckCircle,
  FaSearch,
  FaPhone,
  FaGlobe,
  FaDirections,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const BLUE = "#027BFF";

const Marketing = () => {
  const sectionRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // const mockupY = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [120, -120]
  // );

  const mockupOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9, 1],
    [0.15, 0.25, 0.25, 0.15]
  );

  const benefits = [
    "Mais visibilidade nas pesquisas locais",
    "Destaque para sua empresa no Google Maps",
    "Mais oportunidades de contato com clientes",
  ];

  return (
    <section
      id="gmn"
      ref={(element) => {
        sectionRef.current = element;
        ref(element);
      }}
      className="relative min-h-[100svh] w-full overflow-hidden bg-white"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        <div className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-blue-200/70 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-red-100/60 blur-[120px]" />

        <div className="absolute right-[20%] top-[35%] h-[400px] w-[400px] rounded-full bg-[#027BFF]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#1e293b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white/20 to-red-100/40" />
      </div>

      {/* MOCKUP COMO BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            opacity: mockupOpacity,
          }}
          className="absolute right-[-12%] top-1/2 w-[850px] max-w-[90vw] -translate-y-1/2 lg:right-[-5%] xl:right-[2%]"
        >
          {/* BRILHO */}
          <div className="absolute inset-10 rounded-full bg-[#027BFF]/10 blur-[100px]" />

          {/* CARTÃO PRINCIPAL */}
          <div className="relative rotate-[-5deg] rounded-3xl border border-gray-200 bg-white p-3 shadow-[0_30px_100px_rgba(15,23,42,0.16)] sm:p-5">

            {/* BARRA SUPERIOR */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-2xl">
                  <FcGoogle />
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-800 sm:text-sm">
                    Perfil da Empresa
                  </p>
                  <p className="text-[10px] text-gray-400 sm:text-xs">
                    Visão geral do negócio
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-medium text-green-700 sm:text-xs">
                  Perfil ativo
                </span>
              </div>
            </div>

            {/* CONTEÚDO */}
            <div className="grid gap-4 pt-5 md:grid-cols-[1fr_0.9fr]">

              {/* INFORMAÇÕES DA EMPRESA */}
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                    Sua empresa
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-2xl">
                    Sua Empresa
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-0.5 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <FaStar key={item} className="text-xs" />
                      ))}
                    </div>

                    <span className="text-xs text-gray-500">
                      Avaliações no Google
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    Apresente sua empresa para pessoas que estão procurando
                    pelos seus produtos e serviços.
                  </p>
                </div>

                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#027BFF]">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-700">
                        Localização
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Encontre sua empresa no Maps
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <FaPhone />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-700">
                        Contato
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Facilite o contato com clientes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-500">
                      <FaGlobe />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-700">
                        Website
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Direcione visitantes para seu site
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 border-t border-gray-100 pt-4">
                  <div className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 py-2 text-[10px] font-semibold text-[#027BFF]">
                    <FaDirections />
                    Rotas
                  </div>

                  <div className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 py-2 text-[10px] font-semibold text-[#027BFF]">
                    <FaPhone />
                    Ligar
                  </div>
                </div>
              </div>

              {/* MAPA */}
              <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-[#e9eef0]">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(35deg, transparent 45%, #ffffff 46%, #ffffff 49%, transparent 50%), linear-gradient(120deg, transparent 40%, #ffffff 41%, #ffffff 44%, transparent 45%), linear-gradient(90deg, transparent 48%, #d4e4d5 49%, #d4e4d5 65%, transparent 66%)",
                    backgroundSize: "130px 130px, 160px 160px, 100% 100%",
                  }}
                />

                <div className="absolute left-[15%] top-[20%] h-20 w-20 rounded-full bg-green-200/50 blur-xl" />
                <div className="absolute bottom-[15%] right-[10%] h-24 w-24 rounded-full bg-green-200/50 blur-xl" />

                <div className="absolute left-[52%] top-[43%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#027BFF] text-xl text-white shadow-lg">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="mt-2 rounded-lg bg-white px-3 py-1.5 text-[10px] font-semibold text-gray-700 shadow-md">
                    Sua empresa
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 shadow-sm">
                  <FcGoogle className="text-sm" />
                  <span className="text-[10px] font-medium text-gray-600">
                    Google Maps
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* INDICADOR FLUTUANTE */}
          <div className="absolute -bottom-8 -left-8 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-left-12">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-lg text-green-600">
              <FaChartLine />
            </div>

            <div>
              <p className="text-[10px] text-gray-400">
                Presença digital
              </p>
              <p className="text-sm font-bold text-gray-800">
                Mais visibilidade
              </p>
            </div>
          </div>

          {/* INDICADOR DE PESQUISA */}
          <div className="absolute -right-4 top-8 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:-right-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#027BFF]">
              <FaSearch />
            </div>

            <div>
              <p className="text-[10px] text-gray-400">
                Pesquisa local
              </p>
              <p className="text-xs font-bold text-gray-800">
                Seja encontrado
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-[8] mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-12">
        <div
          className={`max-w-xl transition-all duration-1000 ${
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* IDENTIFICAÇÃO */}
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-2xl shadow-lg shadow-blue-500/10">
              <FcGoogle />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
                Presença local
              </p>
              <p className="text-[11px] text-gray-400">
                Perfil da Empresa no Google
              </p>
            </div>
          </div>

          {/* TÍTULO */}
          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Sua empresa mais perto dos{" "}
            <span className="text-[#027BFF]">clientes.</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Faça sua empresa ser encontrada por quem procura seus produtos
            e serviços. Transforme pesquisas locais em oportunidades reais
            de negócio.
          </p>

          {/* BENEFÍCIOS */}
          <div className="mt-8 space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-sm text-[#027BFF]" />
                <span className="text-sm text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/marketing-detail"
              className="group inline-flex items-center gap-5 bg-[#027BFF] px-7 py-5 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#0064d8]"
            >
              CONHEÇA O SERVIÇO
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <span className="text-xs text-gray-400">
              Visibilidade que gera oportunidades.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
