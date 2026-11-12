
import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaBullseye,
  FaChartLine,
  FaFacebookF,
  FaInstagram,
  FaHeart,
  FaComment,
  FaShare,
} from "react-icons/fa";

const Social = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="facebook"
      ref={ref}
      className="relative z-10 isolate min-h-[100svh] w-full overflow-hidden bg-[#080914]/95 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-secondary-blue/15 blur-[140px]" />
        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-secondary-red/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,123,255,0.04),transparent_45%,rgba(203,52,43,0.05))]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Social Ads mockup */}
        <div
          className={`relative order-2 mx-auto w-full max-w-[540px] transition-all duration-1000 lg:order-1 ${inView
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
            }`}
        >
          <div className="absolute -inset-10 rounded-full bg-secondary-blue/10 blur-[100px]" />

          <div className="relative grid grid-cols-[1fr_0.8fr] items-center gap-3 sm:gap-5">
            {/* Social post */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#151722] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 p-3 sm:p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-secondary-blue to-secondary-red">
                  <span className="text-xs font-bold">M</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold">
                    Sua marca
                  </p>
                  <p className="text-[9px] text-white/40">
                    Patrocinado · Público personalizado
                  </p>
                </div>
                <FaFacebookF className="text-secondary-blue" />
              </div>

              {/* Ad creative */}
              <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#073d83] via-[#0866c9] to-[#03152d] p-4 sm:p-5">
                <div className="absolute -right-14 top-10 h-48 w-48 rounded-full border-[30px] border-white/10" />
                <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-secondary-red/40 blur-3xl" />
                <div className="relative z-10">
                  <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em]">
                    Sua próxima conquista
                  </span>
                  <h3 className="mt-5 max-w-[220px] text-2xl font-black leading-[1.05] sm:text-3xl">
                    SUA MARCA
                    <br />
                    <span className="text-[#8dcaff]">MAIS LONGE.</span>
                  </h3>
                  <p className="mt-3 max-w-[180px] text-[10px] leading-relaxed text-white/75 sm:text-xs">
                    Estratégias para conectar sua empresa às pessoas certas.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-md bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-[#073d83]">
                    Saiba mais
                  </span>
                  <span className="text-[9px] font-semibold tracking-widest text-white/60">
                    SUA MARCA
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-3 text-xs text-white/50 sm:px-4">
                <div className="flex gap-4">
                  <FaHeart />
                  <FaComment />
                  <FaShare />
                </div>
                <span>Ver resultados</span>
              </div>
            </div>

            {/* Campaign dashboard */}
            <div className="relative -ml-5 mt-16 rounded-2xl border border-white/10 bg-[#131725]/95 p-3 shadow-2xl backdrop-blur-xl sm:-ml-8 sm:p-4">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/40">
                    Desempenho
                  </p>
                  <p className="mt-1 text-xs font-bold">Visão geral</p>
                </div>
                <FaChartLine className="text-secondary-blue" />
              </div>

              <div className="mt-4">
                <p className="text-[9px] text-white/40">Alcance</p>
                <p className="mt-1 text-xl font-bold sm:text-2xl">
                  28.450
                </p>
                <span className="text-[9px] font-semibold text-green-400">
                  +18,6%
                </span>
              </div>

              <div className="mt-5">
                <p className="text-[9px] text-white/40">Engajamento</p>
                <p className="mt-1 text-xl font-bold sm:text-2xl">
                  4.820
                </p>
                <span className="text-[9px] font-semibold text-green-400">
                  +12,3%
                </span>
              </div>

              {/* Decorative chart */}
              <div className="mt-5 flex h-20 items-end gap-1.5 border-b border-white/10 pb-1">
                {[30, 45, 35, 65, 48, 75, 58, 90, 70, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-secondary-blue/40 to-secondary-blue"
                    />
                  )
                )}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary-blue/15 text-secondary-blue">
                  <FaBullseye className="text-xs" />
                </div>
                <span className="text-[9px] text-white/60">
                  Público segmentado
                </span>
              </div>
            </div>

            {/* Floating platform icons */}
            <div className="absolute -left-3 -top-8 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#151722] text-xl text-secondary-blue shadow-xl sm:-left-7">
              <FaFacebookF />
            </div>

            <div className="absolute -bottom-5 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#151722] text-xl text-[#e879a9] shadow-xl sm:right-8">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`relative z-10 order-1 ml-auto max-w-xl transition-all delay-200 duration-1000 lg:order-2 ${inView
              ? "translate-x-0 opacity-100"
              : "translate-x-12 opacity-0"
            }`}
        >
          <div className="mb-8 flex items-center justify-start gap-3">
            <span className="h-px w-10 bg-secondary-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff7770]">
              Conexão e posicionamento
            </span>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <div className="flex items-center gap-2 text-2xl">
              <FaFacebookF className="text-secondary-blue" />
              <FaInstagram className="text-[#e879a9]" />
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Meta Ads
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Sua marca
            <br />
            <span className="bg-gradient-to-r from-[#58aaff] via-[#b4a0ff] to-[#ff7770] bg-clip-text text-transparent">
              onde as pessoas estão.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Transformamos presença nas redes sociais em oportunidades de
            negócio. Criamos estratégias e campanhas para aproximar sua marca
            do público certo e gerar resultados.
          </p>

          <div className="mt-9 space-y-4">
            {[
              "Planejamento e estratégia de campanhas",
              "Segmentação e alcance de público",
              "Criativos e anúncios estratégicos",
              "Análise e otimização de resultados",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-blue shadow-[0_0_12px_rgba(2,123,255,0.8)]" />
                {item}
              </div>
            ))}
          </div>

          <Link
            to="/social-detail"
            className="group mt-10 inline-flex items-center gap-4 rounded-sm border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-secondary-blue hover:bg-secondary-blue"
          >
            Conheça a solução
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Social;
