
import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaBullseye,
  FaChartLine,
  FaCheck,
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaMousePointer,
  FaPlay,
  FaRegCommentAlt,
  FaRegEye,
  FaRegLightbulb,
  FaSlidersH,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "../Footer/Footer";

const whatsappLink = () =>
  "https://wa.me/5511915181487?text=" +
  encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de gestão de anúncios."
  );

const services = [
  {
    number: "01",
    title: "Reconhecimento de marca",
    description:
      "Coloque sua marca diante das pessoas certas e fortaleça sua presença digital.",
    icon: <FaRegEye />,
    tag: "Visibilidade",
  },
  {
    number: "02",
    title: "Geração de leads",
    description:
      "Transforme o interesse do público em oportunidades reais de negócio.",
    icon: <FaBullseye />,
    tag: "Captação",
  },
  {
    number: "03",
    title: "Campanhas de mensagens",
    description:
      "Direcione potenciais clientes para conversas pelo WhatsApp e outros canais.",
    icon: <FaRegCommentAlt />,
    tag: "Conversão",
  },
  {
    number: "04",
    title: "Remarketing",
    description:
      "Retome o contato com pessoas que já demonstraram interesse na sua empresa.",
    icon: <FaChartLine />,
    tag: "Otimização",
  },
];

const process = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analisamos o negócio, o público, os objetivos e o cenário atual da comunicação.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos estratégia, segmentação, formatos e estrutura das campanhas.",
  },
  {
    number: "03",
    title: "Execução",
    description:
      "Configuramos as campanhas, desenvolvemos os anúncios e iniciamos a veiculação.",
  },
  {
    number: "04",
    title: "Otimização",
    description:
      "Acompanhamos os indicadores e ajustamos a estratégia para melhorar os resultados.",
  },
];

const faqs = [
  {
    question: "O que é gestão de tráfego pago?",
    answer:
      "É o planejamento, a configuração, o acompanhamento e a otimização de campanhas pagas para alcançar públicos estratégicos e gerar resultados para uma empresa.",
  },
  {
    question: "Qual é a diferença entre impulsionar uma publicação e anunciar?",
    answer:
      "Impulsionar é uma forma simplificada de promover uma publicação. Uma campanha estruturada permite trabalhar objetivos específicos, segmentações, posicionamentos, criativos e acompanhamento de resultados.",
  },
  {
    question: "Quanto preciso investir em anúncios?",
    answer:
      "O investimento depende dos objetivos, do público, da região e da competitividade do mercado. O orçamento é definido de acordo com a realidade de cada projeto.",
  },
  {
    question: "Os anúncios são veiculados no Instagram e Facebook?",
    answer:
      "Sim. As campanhas podem alcançar pessoas no Instagram, Facebook, Messenger e outros posicionamentos disponíveis na plataforma Meta, conforme a estratégia definida.",
  },
  {
    question: "Em quanto tempo aparecem os resultados?",
    answer:
      "Os resultados variam conforme o objetivo, o orçamento, a oferta e o comportamento do público. As campanhas precisam de acompanhamento e otimização contínua.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-white/60" : "text-neutral-500"
      }`}
    >
      <span className="h-[2px] w-8 bg-[#CB342B]" />
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <SectionLabel light={light}>{eyebrow}</SectionLabel>}
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
            light ? "text-white/60" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Button({ children, href, variant = "primary" }) {
  const styles = {
    primary: "bg-[#027BFF] text-white hover:bg-[#24D366] hover:text-black",
    secondary:
      "text-white hover:bg-[#24D366] hover:text-black",
    dark: "bg-black text-white hover:bg-[#24D366] hover:text-black",
  };

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-14 items-center justify-center gap-3 px-7 text-sm font-bold transition duration-300 ${styles[variant]}`}
    >
      {children}
      <FaArrowRight className="text-lg" />
    </a>
  );
}

function Glow({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[100px] ${className}`}
    />
  );
}

function AdPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[470px] [perspective:1200px]">
      <Glow className="-right-20 top-0 h-64 w-64 bg-[#027BFF]/40" />
      <Glow className="-bottom-16 -left-16 h-56 w-56 bg-[#CB342B]/30" />

      <div className="absolute -right-7 top-12 h-52 w-52 border border-[#027BFF]/30" />
      <div className="absolute -bottom-7 -left-7 h-36 w-36 bg-gradient-to-br from-[#CB342B] to-[#CB342B]/10" />

      <div className="absolute -right-5 top-5 z-20 hidden items-center gap-3 border border-white/20 bg-black/50 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
        <span className="h-2 w-2 animate-pulse bg-[#027BFF]" />
        <div>
          <span className="block text-[9px] font-bold uppercase tracking-widest text-white/50">
            Campanha
          </span>
          <span className="text-xs font-bold text-white">Em estratégia</span>
        </div>
      </div>

      <div className="relative z-10 rotate-[-2deg] border border-white/20 bg-white/10 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition duration-500 hover:rotate-0">
        <div className="border border-neutral-200 bg-white p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
              <FaBullseye />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-black">Sua marca</div>
              <div className="text-xs text-neutral-500">Patrocinado · Anúncio</div>
            </div>
            <span className="text-lg font-bold text-neutral-400">···</span>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-neutral-700">
            Sua empresa pode alcançar novos clientes. Apresente sua solução
            para as pessoas certas.
          </p>

          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-[#027BFF]/70 via-black to-[#CB342B]/60" />
            <div className="absolute -right-12 -top-12 h-52 w-52 border-[28px] border-white/10" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#027BFF]/40 blur-3xl" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:25px_25px]" />

            <div className="relative z-10 max-w-[260px] text-center">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                Sua comunicação
              </span>
              <strong className="block text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                Merece
                <span className="block bg-gradient-to-r from-[#027BFF] to-white bg-clip-text text-transparent">
                  ser vista.
                </span>
              </strong>
              <div className="mx-auto mt-5 h-1 w-16 bg-[#CB342B]" />
            </div>

            <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-white/30 bg-white/20 text-white backdrop-blur-md">
              <FaPlay className="text-xs" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-b border-neutral-100 pb-4">
            <span className="text-xs font-semibold text-neutral-500">
              SUA MARCA · SUA MENSAGEM
            </span>
            <span className="text-xs font-bold text-[#027BFF]">
              Saiba mais
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 text-neutral-500">
            <span className="flex items-center gap-2 text-xs">
              <FaRegEye /> Visualização
            </span>
            <span className="flex items-center gap-2 text-xs">
              <FaRegCommentAlt /> Interação
            </span>
            <span className="flex items-center gap-2 text-xs">
              <FaMousePointer /> Ação
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 right-5 z-20 border border-white/20 bg-black/70 p-4 shadow-2xl backdrop-blur-xl sm:right-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-[#027BFF]/20 text-[#027BFF]">
            <FaChartLine />
          </div>
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-white/50">
              Gestão de anúncios
            </span>
            <span className="text-sm font-bold text-white">
              Estratégia + Performance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformCard({ icon, name, format, color, children }) {
  return (
    <div className="group relative overflow-hidden border border-white/15 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-[#027BFF]/60 hover:bg-white/[0.07]">
      <div className="absolute -right-16 -top-16 h-40 w-40 bg-[#027BFF]/10 blur-3xl transition group-hover:bg-[#027BFF]/25" />
      <div className="relative flex items-center justify-between border-b border-white/10 p-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className={`text-xl ${color}`}>{icon}</span>
          <span className="font-bold text-white">{name}</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
          {format}
        </span>
      </div>
      <div className="relative p-5">{children}</div>
    </div>
  );
}

function SocialDetail() {
  useEffect(() => {
    document.title = "Gestão de Tráfego Pago | RJVEIGA";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Estratégias de tráfego pago no Instagram e Facebook para atrair clientes, gerar oportunidades e fortalecer sua presença digital."
    );
  }, []);

  return (
    <main className="overflow-hidden bg-white text-black">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <Glow className="-right-40 -top-40 h-[600px] w-[600px] bg-[#027BFF]/30" />
        <Glow className="-bottom-40 left-1/4 h-[500px] w-[500px] bg-[#CB342B]/20" />

        <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-[#027BFF]/10 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-36">
          <div>
            <SectionLabel light>Tráfego pago · Meta Ads</SectionLabel>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Sua marca precisa de mais do que{" "}
              <span className="text-[#027BFF]">
                visualizações.
              </span>
              <span className="mt-3 block text-white">
                Precisa de <span className="text-[#027BFF]">resultados.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Planejamos e gerenciamos campanhas no Instagram e Facebook para
              conectar sua empresa ao público certo e transformar atenção em
              oportunidades de negócio.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappLink()}><p className="uppercase">Quero anunciar</p></Button>
              <a
                href="#estrategia"
                className="inline-flex min-h-14 items-center justify-center border border-white/25 bg-white/[0.03] px-7 text-sm font-bold text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black"
              >
                <p className="uppercase">Conheça a estratégia</p>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-7">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <FaInstagram className="text-lg text-[#CB342B]" />
                Instagram
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <FaFacebook className="text-lg text-[#027BFF]" />
                Facebook
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <FaWhatsapp className="text-lg text-[#24D366]" />
                WhatsApp
              </div>
            </div>
          </div>

          <div className="relative py-5">
            <AdPreview />
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-white/[0.025] backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
            {[
              ["01", "Estratégia"],
              ["02", "Criatividade"],
              ["03", "Segmentação"],
              ["04", "Otimização"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="border-r border-white/10 py-6 last:border-r-0"
              >
                <span className="block text-xs font-bold text-[#027BFF]">
                  {number}
                </span>
                <span className="mt-1 block text-sm font-semibold text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA E SOLUÇÃO */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <Glow className="-right-40 top-20 h-80 w-80 bg-[#027BFF]/10" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Além do impulsionamento"
              title="Alcançar pessoas é apenas o começo."
              description="Uma campanha eficiente precisa ter objetivo, mensagem e direcionamento. Não basta aparecer: é necessário despertar interesse e incentivar uma ação."
            />

            <div className="mt-9">
              <Button href={whatsappLink()} variant="dark">
                <p className="uppercase">Planejar minhas campanhas</p>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden border border-neutral-200 bg-gradient-to-br from-neutral-100 to-white p-7">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-neutral-300/40 blur-3xl" />
              <div className="relative flex h-12 w-12 items-center justify-center bg-neutral-200 text-neutral-600">
                <FaRegEye className="text-xl" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Sem estratégia
                </span>
                <h3 className="mt-3 text-2xl font-bold">Apenas aparecer.</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  Investimento sem direcionamento, comunicação genérica e pouca
                  clareza sobre os resultados.
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-black p-7 text-white">
              <Glow className="-right-12 -top-12 h-40 w-40 bg-[#027BFF]/40" />
              <div className="relative flex h-12 w-12 items-center justify-center bg-[#027BFF] text-white">
                <FaBullseye className="text-xl" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-[#027BFF]">
                  Com estratégia
                </span>
                <h3 className="mt-3 text-2xl font-bold">Gerar oportunidades.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Campanhas orientadas por objetivos, público, criativos e
                  indicadores de desempenho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA META */}
      <section className="relative isolate overflow-hidden bg-[#050505] py-24 text-white lg:py-32">
        <Glow className="-left-40 top-1/3 h-[500px] w-[500px] bg-[#027BFF]/20" />
        <Glow className="-right-40 bottom-0 h-[450px] w-[450px] bg-[#CB342B]/15" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Ecossistema Meta"
              title="Sua comunicação em diferentes formatos."
              description="Cada posicionamento tem características próprias. A estratégia considera onde e como sua mensagem será apresentada."
              light
            />
            <div className="flex items-center gap-3 text-sm text-white/50">
              <FaInstagram className="text-xl" />
              <FaFacebook className="text-xl" />
              <span>Instagram + Facebook</span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <PlatformCard
              icon={<FaInstagram />}
              name="Feed"
              format="Publicações"
              color="text-[#CB342B]"
            >
              <div className="flex aspect-[4/3] flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-neutral-100 to-neutral-300 p-5 text-black shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-black" />
                  <div>
                    <div className="text-xs font-bold">Sua empresa</div>
                    <div className="text-[10px] text-neutral-500">Patrocinado</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -right-5 -top-12 h-28 w-28 rounded-full bg-[#027BFF]/20 blur-2xl" />
                  <span className="relative text-xs font-bold uppercase tracking-widest text-[#027BFF]">
                    Sua marca
                  </span>
                  <p className="relative mt-2 text-3xl font-black leading-none">
                    CONTEÚDO
                    <span className="block text-[#CB342B]">QUE CONECTA.</span>
                  </p>
                </div>
                <div className="flex justify-between border-t border-neutral-300 pt-3 text-[10px] font-bold">
                  <span>Saiba mais</span>
                  <FaArrowRight />
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/55">
                Criativos que apresentam sua marca, produtos e serviços no
                cotidiano do público.
              </p>
            </PlatformCard>

            <PlatformCard
              icon={<FaInstagram />}
              name="Stories"
              format="Vertical"
              color="text-[#027BFF]"
            >
              <div className="relative mx-auto flex aspect-[3/4] max-w-[220px] flex-col justify-between overflow-hidden border border-white/20 bg-gradient-to-br from-[#027BFF] via-[#064d9c] to-black p-5 text-white shadow-[0_20px_50px_rgba(2,123,255,0.2)]">
                <div className="absolute -right-12 top-20 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                <div className="relative flex gap-1">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="h-1 flex-1 bg-white/60" />
                  ))}
                </div>
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    O próximo passo
                  </span>
                  <p className="mt-3 text-3xl font-black leading-none">
                    É SUA
                    <span className="block text-white/50">DECISÃO.</span>
                  </p>
                </div>
                <div className="relative border border-white/30 bg-white/15 px-3 py-3 text-center text-xs font-bold backdrop-blur-md">
                  Fale conosco
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/55">
                Formatos verticais para estimular atenção, interação e ações
                rápidas.
              </p>
            </PlatformCard>

            <PlatformCard
              icon={<FaPlay />}
              name="Reels"
              format="Vídeos"
              color="text-[#CB342B]"
            >
              <div className="relative mx-auto flex aspect-[3/4] max-w-[220px] items-center justify-center overflow-hidden border border-white/20 bg-black p-5 shadow-[0_20px_50px_rgba(203,52,43,0.18)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CB342B]/60 via-black to-[#027BFF]/50" />
                <div className="absolute -right-10 -top-10 h-40 w-40 border-[25px] border-white/10" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#027BFF]/40 blur-3xl" />
                <div className="relative z-10 text-center">
                  <FaPlay className="mx-auto mb-5 text-3xl text-white" />
                  <p className="text-3xl font-black leading-none text-white">
                    SUA
                    <span className="block text-[#027BFF]">IDEIA.</span>
                    <span className="block">EM MOVIMENTO.</span>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/55">
                Vídeos pensados para apresentar soluções, gerar identificação
                e despertar interesse.
              </p>
            </PlatformCard>
          </div>
        </div>
      </section>

      {/* ESTRATÉGIA */}
      <section id="estrategia" className="relative overflow-hidden py-24 lg:py-32">
        <Glow className="-right-40 top-0 h-96 w-96 bg-[#CB342B]/10" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Estratégia de campanha"
            title="Do primeiro contato à conversão."
            description="Organizamos a comunicação considerando o momento de cada pessoa na jornada de compra."
          />

          <div className="mt-16 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Alcance",
                description:
                  "Apresentar sua marca para pessoas com potencial interesse.",
                icon: <FaRegEye />,
                color: "text-[#027BFF]",
              },
              {
                number: "02",
                title: "Interesse",
                description:
                  "Despertar curiosidade e apresentar os diferenciais da oferta.",
                icon: <FaRegLightbulb />,
                color: "text-[#CB342B]",
              },
              {
                number: "03",
                title: "Conversão",
                description:
                  "Estimular uma ação: mensagem, cadastro, contato ou compra.",
                icon: <FaMousePointer />,
                color: "text-[#027BFF]",
              },
              {
                number: "04",
                title: "Otimização",
                description:
                  "Analisar o desempenho e aprimorar as campanhas continuamente.",
                icon: <FaSlidersH />,
                color: "text-[#CB342B]",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden border-b border-r border-neutral-200 p-7 transition duration-500 hover:bg-black sm:p-8"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#027BFF]/0 blur-3xl transition group-hover:bg-[#027BFF]/30" />
                <div className="relative flex items-start justify-between">
                  <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                  <span className="text-xs font-bold text-neutral-300 group-hover:text-white/30">
                    {item.number}
                  </span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold transition group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500 transition group-hover:text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="relative overflow-hidden bg-neutral-100 py-24 lg:py-32">
        <Glow className="-left-40 top-0 h-96 w-96 bg-[#027BFF]/10" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="O que fazemos"
              title="Campanhas alinhadas aos seus objetivos."
              description="Cada projeto recebe uma estratégia adequada ao seu momento, mercado e necessidade."
            />
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
              Não trabalhamos com campanhas genéricas. O planejamento parte
              dos objetivos reais do negócio.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-neutral-300 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden bg-neutral-100 p-7 transition duration-500 hover:bg-black hover:text-white sm:p-10"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#027BFF]/0 blur-3xl transition duration-500 group-hover:bg-[#027BFF]/30" />
                <div className="relative flex items-center justify-between">
                  <span className="text-2xl text-[#027BFF]">
                    {service.icon}
                  </span>
                  <span className="text-xs font-bold text-neutral-400 transition group-hover:text-white/40">
                    {service.number}
                  </span>
                </div>
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#CB342B]">
                    {service.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 transition group-hover:text-white/60">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <Glow className="-right-40 top-1/3 h-96 w-96 bg-[#027BFF]/10" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle
              eyebrow="Nosso processo"
              title="Estratégia antes de investimento."
              description="Uma campanha bem estruturada começa com entendimento. Cada etapa tem uma função dentro do planejamento."
            />
            <div className="mt-9">
              <Button href={whatsappLink()} variant="dark">
                <p className="uppercase">Começar um projeto</p>
              </Button>
            </div>
          </div>

          <div className="border-t border-neutral-200">
            {process.map((item) => (
              <div
                key={item.number}
                className="group grid gap-4 border-b border-neutral-200 py-7 transition hover:border-[#027BFF] sm:grid-cols-[70px_1fr] sm:gap-7"
              >
                <span className="text-sm font-bold text-[#027BFF]">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold transition group-hover:text-[#027BFF]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-black py-24 text-white lg:py-32">
        <Glow className="-right-24 -top-24 h-96 w-96 bg-[#027BFF]/35" />
        <Glow className="-bottom-24 -left-24 h-96 w-96 bg-[#CB342B]/25" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-[#027BFF]/10" />
        <div className="absolute right-0 top-0 -z-10 h-full w-1/3 border-l border-white/10 bg-white/[0.02] backdrop-blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel light>Vamos conversar?</SectionLabel>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Sua próxima campanha começa com uma{" "}
              <span className="text-[#027BFF]">
                boa estratégia.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Vamos entender seus objetivos e construir uma estratégia de
              anúncios adequada para o seu negócio.
            </p>
          </div>

          <div className="shrink-0">
            <Button href={whatsappLink()}><p className="uppercase">Falar com a gente</p></Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <Glow className="-right-40 top-20 h-96 w-96 bg-[#CB342B]/10" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle
              eyebrow="Dúvidas frequentes"
              title="O que você precisa saber."
              description="Entenda melhor como funciona a gestão de anúncios e o que considerar antes de começar."
            />
          </div>

          <div className="border-t border-neutral-200">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-neutral-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6">
                  <span className="flex items-start gap-4">
                    <span className="pt-1 text-xs font-bold text-[#027BFF]">
                      0{index + 1}
                    </span>
                    <span className="text-base font-bold sm:text-lg">
                      {faq.question}
                    </span>
                  </span>
                  <FaChevronDown className="shrink-0 text-sm text-neutral-400 transition group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pb-7 pl-9 text-sm leading-relaxed text-neutral-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default SocialDetail;
