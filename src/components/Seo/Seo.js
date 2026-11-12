
import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaBullseye,
  FaChartLine,
  FaGoogle,
  FaMousePointer,
  FaSearch,
} from "react-icons/fa";

const Seo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="google"
      ref={ref}
      className="relative z-10 isolate min-h-[100svh] w-full overflow-hidden bg-[#050914]/95 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-secondary-blue/15 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-secondary-blue/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(2,123,255,0.05)_100%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:px-12">
        {/* Content */}
        <div
          className={`relative z-10 max-w-xl transition-all duration-1000 ${
            inView
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-secondary-blue" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-blue">
              Aquisição de clientes
            </span>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <FaGoogle className="text-3xl text-secondary-blue" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Google Ads
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Sua empresa
            <br />
            <span className="bg-gradient-to-r from-secondary-blue via-[#65b5ff] to-white bg-clip-text text-transparent">
              no momento certo.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Conectamos sua empresa a pessoas que já estão procurando pelos
            produtos e serviços que você oferece. Estratégia, segmentação e
            otimização para transformar buscas em oportunidades.
          </p>

          <div className="mt-9 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: FaSearch, text: "Intenção de busca" },
              { icon: FaBullseye, text: "Público qualificado" },
              { icon: FaChartLine, text: "Otimização contínua" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-white/75">
                <Icon className="shrink-0 text-secondary-blue" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <Link
            to="/seo-detail"
            className="group mt-10 inline-flex items-center gap-4 rounded-sm bg-secondary-blue px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0066d6]"
          >
            Conheça a solução
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Google Ads mockup */}
        <div
          className={`relative mx-auto w-full max-w-[560px] transition-all delay-200 duration-1000 ${
            inView
              ? "translate-x-0 opacity-100"
              : "translate-x-12 opacity-0"
          }`}
        >
          <div className="absolute -inset-8 rounded-full bg-secondary-blue/10 blur-[90px]" />

          <div className="relative rotate-1 rounded-2xl border border-white/10 bg-[#101827]/90 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
            {/* Browser header */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="ml-3 flex-1 rounded-md bg-white/5 px-4 py-2 text-xs text-white/35">
                google.com/search
              </div>
            </div>

            {/* Search */}
            <div className="py-6">
              <div className="flex items-center gap-3">
                <FaGoogle className="text-2xl text-secondary-blue" />
                <div className="flex flex-1 items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="text-xs text-white/65 sm:text-sm">
                    serviços para minha empresa
                  </span>
                  <FaSearch className="text-secondary-blue" />
                </div>
              </div>

              <div className="mt-6 flex gap-5 border-b border-white/10 pb-3 text-[10px] text-white/40 sm:text-xs">
                <span className="border-b-2 border-secondary-blue pb-3 text-white">
                  Todas
                </span>
                <span>Imagens</span>
                <span>Vídeos</span>
                <span>Notícias</span>
              </div>

              {/* Sponsored result */}
              <div className="mt-5 rounded-xl border border-secondary-blue/30 bg-secondary-blue/[0.07] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-secondary-blue/20 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#65b5ff]">
                    Patrocinado
                  </span>
                  <span className="text-[10px] text-white/35">
                    Anúncio
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-[#72baff] sm:text-lg">
                  Sua empresa merece crescer
                </h3>
                <p className="mt-1 text-xs text-white/40">
                  www.suaempresa.com.br
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/65 sm:text-sm">
                  Encontre soluções para o seu negócio. Atendimento
                  especializado e estratégias para alcançar novos clientes.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/10 px-3 py-2 text-[10px] text-white/60">
                    Conheça nossos serviços
                  </span>
                  <span className="rounded-md border border-white/10 px-3 py-2 text-[10px] text-white/60">
                    Solicite um orçamento
                  </span>
                </div>
              </div>

              {/* Organic results */}
              <div className="mt-5 space-y-4 px-1">
                <div>
                  <div className="h-2 w-32 rounded bg-white/10" />
                  <div className="mt-2 h-2 w-full max-w-[300px] rounded bg-white/5" />
                </div>
                <div>
                  <div className="h-2 w-40 rounded bg-white/10" />
                  <div className="mt-2 h-2 w-full max-w-[260px] rounded bg-white/5" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating metrics */}
          <div className="absolute -bottom-7 -left-3 rounded-xl border border-white/10 bg-[#111c2d]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-blue/15 text-secondary-blue">
                <FaMousePointer />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Cliques na campanha
                </p>
                <p className="text-xl font-bold text-white">+24,8%</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 -top-7 rounded-xl border border-white/10 bg-[#111c2d]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-right-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                Campanha ativa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo;
