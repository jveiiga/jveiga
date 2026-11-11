
import React, { useEffect } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaChevronDown,
  FaClock,
  FaCrosshairs,
  FaLocationDot,
  FaMagnifyingGlass,
  FaMapLocationDot,
  FaMessage,
  FaRoute,
  FaStar,
  FaStore,
  FaUserGroup,
  FaWhatsapp,
} from "react-icons/fa6";

import Footer from "../Footer/Footer";

// ==========================================
// CONFIGURAÇÕES
// ==========================================

const WHATSAPP_NUMBER = "5511915181487";

const whatsappLink = () => {
  const message =
    "Olá! Gostaria de melhorar a presença da minha empresa no Google.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const PAGE_TITLE =
  "Perfil da Empresa no Google | Otimização e Presença Local — RJVEIGA";

const PAGE_DESCRIPTION =
  "Melhore a presença da sua empresa no Google e no Google Maps. Otimização de Perfil da Empresa, avaliações, informações e estratégia de visibilidade local com a RJVEIGA.";

// ==========================================
// DADOS
// ==========================================

const services = [
  {
    number: "01",
    icon: FaStore,
    title: "Configuração completa",
    description:
      "Criamos ou configuramos seu Perfil da Empresa no Google com informações corretas e alinhadas ao seu negócio.",
    items: [
      "Categoria e descrição estratégica",
      "Endereço e área de atendimento",
      "Horários e canais de contato",
    ],
  },
  {
    number: "02",
    icon: FaMagnifyingGlass,
    title: "Otimização para buscas locais",
    description:
      "Organizamos as informações do perfil para melhorar sua relevância nas pesquisas relacionadas ao seu segmento e região.",
    items: [
      "Palavras-chave relevantes",
      "Serviços e produtos cadastrados",
      "Informações comerciais completas",
    ],
  },
  {
    number: "03",
    icon: FaStar,
    title: "Gestão de avaliações",
    description:
      "Ajudamos sua empresa a construir uma reputação digital consistente e transmitir mais segurança aos potenciais clientes.",
    items: [
      "Estratégias para conquistar avaliações",
      "Orientação para respostas",
      "Acompanhamento da reputação",
    ],
  },
  {
    number: "04",
    icon: FaMapLocationDot,
    title: "Conteúdo e atualização",
    description:
      "Mantemos seu perfil atualizado para apresentar uma empresa ativa, organizada e preparada para receber novos clientes.",
    items: [
      "Publicações estratégicas",
      "Fotos e vídeos do negócio",
      "Atualização de informações",
    ],
  },
];

const journey = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "O cliente pesquisa um produto ou serviço próximo e encontra sua empresa entre as opções disponíveis.",
    icon: FaMagnifyingGlass,
  },
  {
    number: "02",
    title: "Confiança",
    description:
      "Ele conhece seu negócio, visualiza fotos, consulta informações e analisa as avaliações de outros clientes.",
    icon: FaStar,
  },
  {
    number: "03",
    title: "Contato",
    description:
      "Com as informações acessíveis, o cliente pode ligar, solicitar uma rota ou iniciar uma conversa.",
    icon: FaMessage,
  },
];

const faqs = [
  {
    question: "O que é o Perfil da Empresa no Google?",
    answer:
      "É uma ferramenta gratuita do Google que permite apresentar informações comerciais da sua empresa na Pesquisa Google e no Google Maps, como endereço, telefone, horários, fotos e avaliações.",
  },
  {
    question:
      "Preciso ter um endereço físico para aparecer no Google Maps?",
    answer:
      "Não necessariamente. Empresas que atendem clientes em determinadas regiões podem configurar uma área de atendimento, mesmo sem receber clientes em um endereço comercial.",
  },
  {
    question: "A otimização garante as primeiras posições no Google?",
    answer:
      "Não. O posicionamento depende de diferentes fatores, como relevância, distância e reconhecimento da empresa. A otimização ajuda a melhorar a qualidade e a consistência das informações do perfil.",
  },
  {
    question: "Quanto tempo leva para otimizar meu perfil?",
    answer:
      "O prazo depende da situação atual do perfil, da quantidade de informações necessárias e das eventuais verificações exigidas pelo Google.",
  },
];

const benefits = [
  {
    icon: FaMagnifyingGlass,
    title: "Seja encontrado",
    text: "Esteja presente nas pesquisas relevantes.",
  },
  {
    icon: FaStar,
    title: "Transmita confiança",
    text: "Apresente informações e avaliações.",
  },
  {
    icon: FaRoute,
    title: "Facilite o contato",
    text: "Aproxime sua empresa dos clientes.",
  },
];

const problems = [
  "Sua empresa não aparece nas pesquisas relevantes.",
  "O cliente encontra informações desatualizadas.",
  "Seu perfil não transmite confiança.",
  "Avaliações ficam sem respostas.",
  "O cliente não encontra uma forma fácil de contato.",
];

const profileIssues = [
  ["Informações", "Dados incompletos"],
  ["Horários", "Desatualizados"],
  ["Avaliações", "Sem respostas"],
  ["Fotos", "Poucas imagens"],
  ["Contato", "Difícil acesso"],
];

const differentiators = [
  {
    icon: FaLocationDot,
    title: "Presença regional",
    text: "Informações estruturadas para facilitar a descoberta da sua empresa na região atendida.",
  },
  {
    icon: FaStar,
    title: "Credibilidade",
    text: "Avaliações, fotos e informações que ajudam a construir uma percepção positiva.",
  },
  {
    icon: FaClock,
    title: "Informações acessíveis",
    text: "Horários, serviços e contatos organizados para reduzir dúvidas do consumidor.",
  },
  {
    icon: FaMessage,
    title: "Mais facilidade de contato",
    text: "Caminhos claros para o cliente ligar, solicitar rotas ou acessar seu site.",
  },
];

// ==========================================
// COMPONENTES REUTILIZÁVEIS
// ==========================================

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-red-500" : "text-red-600"
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}

function PrimaryButton({
  href = whatsappLink(),
  children,
  icon: Icon = FaArrowRight,
  className = "",
}) {
  return (
    <a
      href={href}
      target={href.startsWith("https://") ? "_blank" : undefined}
      rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-3 bg-[#027BFF] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#24D366] hover:text-black ${className}`}
    >
      {children}
      <Icon />
    </a>
  );
}

function MapIllustration() {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-sm border border-white/10 bg-[#15191d] md:min-h-[530px]">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <svg
          viewBox="0 0 700 530"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <path
            d="M-30 100 L730 430 M-20 300 L720 40 M100 -20 L420 550 M380 -20 L180 550 M600 -20 L350 550"
            stroke="#64748b"
            strokeWidth="24"
            fill="none"
          />
          <path
            d="M-30 100 L730 430 M-20 300 L720 40 M100 -20 L420 550 M380 -20 L180 550 M600 -20 L350 550"
            stroke="#252c33"
            strokeWidth="19"
            fill="none"
          />
          <path
            d="M-20 210 L720 210 M250 -20 L250 550 M520 -20 L520 550"
            stroke="#64748b"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M-20 210 L720 210 M250 -20 L250 550 M520 -20 L520 550"
            stroke="#252c33"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M0 450 Q180 350 300 400 T700 280"
            stroke="#027BFF"
            strokeWidth="3"
            strokeDasharray="9 9"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute left-[8%] top-[12%] h-24 w-32 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[8%] h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />

      <div className="absolute left-[12%] top-[18%] flex items-center gap-2 rounded-sm border border-white/10 bg-[#20262d]/90 px-3 py-2 text-xs text-white shadow-xl backdrop-blur">
        <FaStore className="text-blue-400" />
        Comércio local
      </div>

      <div className="absolute right-[10%] top-[25%] flex items-center gap-2 rounded-sm border border-white/10 bg-[#20262d]/90 px-3 py-2 text-xs text-white shadow-xl backdrop-blur">
        <FaLocationDot className="text-red-400" />
        Região de atendimento
      </div>

      <div className="absolute left-[45%] top-[42%] z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/20">
          <span className="absolute inset-0 animate-ping rounded-full border border-blue-400/40" />
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#027BFF] text-xl text-white shadow-[0_0_35px_rgba(2,123,255,0.6)]">
            <FaStore />
          </span>
        </div>
      </div>

      <div className="absolute bottom-[15%] left-[8%] rounded-sm border border-white/10 bg-[#20262d]/90 p-4 text-white shadow-xl backdrop-blur">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center bg-blue-500/20 text-blue-400">
            <FaCrosshairs />
          </span>
          <span className="text-xs font-semibold">Presença local</span>
        </div>
        <p className="text-[11px] text-neutral-400">
          Sua empresa na jornada de busca.
        </p>
      </div>

      <div className="absolute bottom-5 right-5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500">
        <span className="h-2 w-2 rounded-full bg-blue-500" />
        Estratégia de localização
      </div>
    </div>
  );
}

function SearchSimulation() {
  return (
    <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-neutral-100 px-5 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <FaMagnifyingGlass />
        </div>
        <div className="flex-1 rounded-full bg-neutral-100 px-4 py-2 text-xs text-neutral-500">
          serviço perto de mim
        </div>
      </div>

      <div className="grid md:grid-cols-[1.1fr_0.9fr]">
        <div className="p-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Resultados locais
          </span>

          <div className="mt-5 border-b border-neutral-100 pb-5">
            <div className="flex gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-neutral-100 text-xl text-neutral-500">
                <FaStore />
              </div>

              <div>
                <p className="text-sm font-bold text-neutral-900">
                  Sua empresa
                </p>

                <div className="my-1 flex items-center gap-1 text-xs text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                  <span className="ml-1 text-neutral-500">
                    Avaliações
                  </span>
                </div>

                <p className="text-xs text-neutral-500">
                  Categoria · Região de atendimento
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Ligar", "Rotas", "Site"].map((item) => (
                <span
                  key={item}
                  className="border border-blue-100 bg-blue-50 px-3 py-2 text-[11px] font-semibold text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {[1, 2].map((item) => (
            <div
              key={item}
              className={`mt-5 flex gap-3 ${
                item === 1 ? "opacity-50" : "opacity-30"
              }`}
            >
              <div className="h-12 w-12 shrink-0 bg-neutral-100" />
              <div className="flex-1">
                <div className="mb-2 h-3 w-32 bg-neutral-200" />
                <div className="mb-2 h-2 w-24 bg-neutral-100" />
                <div className="h-2 w-40 bg-neutral-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative min-h-[260px] overflow-hidden bg-[#e8edf0]">
          <div className="absolute inset-0 opacity-70" aria-hidden="true">
            <svg viewBox="0 0 350 350" className="h-full w-full">
              <path
                d="M-20 80 L370 240 M-20 260 L370 70 M80 -20 L230 370 M290 -20 L100 370"
                stroke="#fff"
                strokeWidth="22"
                fill="none"
              />
              <path
                d="M-20 170 L370 170 M170 -20 L170 370"
                stroke="#cbd5e1"
                strokeWidth="5"
                fill="none"
              />
              <path
                d="M-20 80 L370 240"
                stroke="#f8fafc"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#027BFF] text-xl text-white shadow-lg">
            <FaLocationDot />
          </div>

          <div className="absolute bottom-4 left-4 rounded-sm bg-white px-3 py-2 text-[10px] font-semibold text-neutral-700 shadow-md">
            Google Maps
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon />
        </span>

        <span className="text-sm font-bold text-neutral-300">
          {service.number}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-neutral-900">
        {service.title}
      </h3>

      <p className="mb-6 text-sm leading-7 text-neutral-500">
        {service.description}
      </p>

      <ul className="mt-auto space-y-3 border-t border-neutral-100 pt-5">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-xs text-neutral-600"
          >
            <FaCheck className="mt-0.5 shrink-0 text-blue-600" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function JourneyCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="relative border-l border-neutral-300 pb-10 pl-8 last:border-transparent last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8">
      <span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full border-2 border-blue-600 bg-white md:-top-[7px] md:left-0" />

      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-bold text-blue-600">
          {item.number}
        </span>

        <span className="flex h-11 w-11 items-center justify-center bg-neutral-100 text-lg text-neutral-700">
          <Icon />
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-neutral-900">
        {item.title}
      </h3>

      <p className="text-sm leading-7 text-neutral-500">
        {item.description}
      </p>
    </div>
  );
}

function BenefitCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-4 py-6 md:px-8">
      <span className="text-xl text-blue-400">
        <Icon />
      </span>

      <div>
        <p className="text-sm font-bold text-white">{item.title}</p>
        <p className="mt-1 text-xs text-neutral-500">{item.text}</p>
      </div>
    </div>
  );
}

function ProblemCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-5 border border-neutral-200" />

      <div className="relative bg-white p-6 shadow-xl md:p-8">
        <div className="mb-7 flex items-center justify-between border-b border-neutral-100 pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-500">
              Perfil desorganizado
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              O que seu cliente pode encontrar
            </p>
          </div>

          <span className="flex h-10 w-10 items-center justify-center bg-red-50 text-red-500">
            <FaLocationDot />
          </span>
        </div>

        {profileIssues.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-4 border-b border-neutral-100 py-4 last:border-0"
          >
            <span className="text-sm font-semibold text-neutral-700">
              {label}
            </span>

            <span className="flex items-center gap-2 text-xs text-red-500">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              {value}
            </span>
          </div>
        ))}

        <div className="mt-6 bg-red-50 p-4">
          <p className="text-sm font-bold text-red-700">
            Uma oportunidade que pode estar sendo perdida.
          </p>
          <p className="mt-1 text-xs leading-6 text-red-600/80">
            Uma presença local bem estruturada facilita a descoberta e
            a escolha da sua empresa.
          </p>
        </div>
      </div>
    </div>
  );
}

function DifferentiatorCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="border-t-2 border-neutral-200 pt-6 transition hover:border-blue-600">
      <span className="text-2xl text-blue-600">
        <Icon />
      </span>

      <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-neutral-500">
        {item.text}
      </p>
    </div>
  );
}

function FAQItem({ faq, index }) {
  return (
    <details className="group py-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-bold text-neutral-800">
        <span>
          <span className="mr-4 text-xs font-bold text-blue-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          {faq.question}
        </span>

        <FaChevronDown className="shrink-0 text-sm text-neutral-400 transition group-open:rotate-180" />
      </summary>

      <p className="max-w-2xl pl-10 pt-5 text-sm leading-7 text-neutral-500">
        {faq.answer}
      </p>
    </details>
  );
}

// ==========================================
// PÁGINA PRINCIPAL
// ==========================================

export default function MarketingDetail() {
  useEffect(() => {
    const previousTitle = document.title;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    const previousDescription = description?.content;
    const createdDescription = !description;

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    document.title = PAGE_TITLE;
    description.content = PAGE_DESCRIPTION;

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        description.remove();
      } else {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <main className="overflow-hidden bg-white text-neutral-900">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#080a0d] text-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-red-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionLabel light>
                Presença digital local
              </SectionLabel>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                Sua empresa precisa estar{" "}
                <span className="text-blue-500">no mapa.</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-neutral-400 md:text-lg">
                Quando alguém procura por um serviço na sua região, sua
                empresa precisa ser encontrada. Transformamos seu Perfil
                da Empresa no Google em um ponto estratégico de descoberta,
                confiança e novos contatos.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>
                  <p className="uppercase">Quero ser encontrado</p>
                </PrimaryButton>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white"
                >
                  <p className="uppercase">Entenda como funciona</p>
                  <FaArrowRight />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Pesquisa Google
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Mais visibilidade
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Google Maps
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Presença local
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Reputação
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Mais confiança
                  </p>
                </div>
              </div>
            </div>

            <MapIllustration />
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-10">
            {benefits.map((item) => (
              <BenefitCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}

      <section className="bg-[#f5f6f7] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>O problema</SectionLabel>

            <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Não basta ter uma boa empresa.{" "}
              <span className="text-[#027BFF]">
                As pessoas precisam encontrá-la.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-500">
              Seu negócio pode oferecer um excelente serviço, mas se as
              informações estiverem incompletas ou desatualizadas, você
              pode perder oportunidades para concorrentes que apresentam
              uma presença digital mais organizada.
            </p>

            <div className="mt-9 space-y-5">
              {problems.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-red-100 text-xs text-red-600">
                    <FaCheck />
                  </span>

                  <p className="text-sm leading-6 text-neutral-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ProblemCard />
        </div>
      </section>

      {/* JORNADA DO CLIENTE */}

      <section
        id="como-funciona"
        className="px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <SectionLabel>A jornada do cliente</SectionLabel>

              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                Da pesquisa ao primeiro contato.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-500 md:justify-self-end">
              O Perfil da Empresa no Google participa de diferentes
              momentos da decisão de compra. Nossa estratégia considera
              cada etapa dessa jornada.
            </p>
          </div>

          <SearchSimulation />

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {journey.map((item) => (
              <JourneyCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}

      <section className="bg-[#f5f6f7] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <SectionLabel>O que fazemos</SectionLabel>

            <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Uma presença local construída com estratégia.
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-500">
              Não se trata apenas de cadastrar sua empresa. Trabalhamos
              os elementos que ajudam seu negócio a apresentar
              informações completas, relevantes e confiáveis.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE ADS */}

      <section className="relative overflow-hidden bg-[#080a0d] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel light>
              Visibilidade ampliada
            </SectionLabel>

            <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Sua presença local pode ir além do resultado orgânico.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400">
              Quando faz sentido para o negócio, o Perfil da Empresa
              pode trabalhar em conjunto com campanhas do Google Ads
              para ampliar a exposição da empresa em pesquisas estratégicas.
            </p>

            <PrimaryButton className="mt-9">
              <p className="uppercase">Conhecer essa estratégia</p>
            </PrimaryButton>
          </div>

          <div className="border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  Estratégia integrada
                </p>

                <p className="mt-2 text-lg font-bold">
                  Google + Google Ads
                </p>
              </div>

              <FaArrowUpRightFromSquare className="text-xl text-blue-400" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-11 w-11 items-center justify-center bg-blue-500/10 text-blue-400">
                  <FaMagnifyingGlass />
                </span>

                <div>
                  <p className="text-sm font-bold">Busca orgânica</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Relevância e presença local.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center text-blue-400">
                <FaArrowDown />
              </div>

              <div className="flex items-center gap-4 border border-blue-500/40 bg-blue-500/10 p-4">
                <span className="flex h-11 w-11 items-center justify-center bg-blue-500/20 text-blue-400">
                  <FaCrosshairs />
                </span>

                <div>
                  <p className="text-sm font-bold">Google Ads</p>
                  <p className="mt-1 text-xs text-neutral-400">
                    Campanhas para pesquisas estratégicas.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center text-blue-400">
                <FaArrowDown />
              </div>

              <div className="flex items-center gap-4 border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-11 w-11 items-center justify-center bg-red-500/10 text-red-400">
                  <FaUserGroup />
                </span>

                <div>
                  <p className="text-sm font-bold">
                    Potenciais clientes
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Mais oportunidades de contato.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[11px] leading-5 text-neutral-500">
              A integração depende dos objetivos, do segmento e do
              orçamento disponível para mídia.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>Por que otimizar?</SectionLabel>

              <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
                Sua empresa mais preparada para ser escolhida.
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-500">
                Uma presença local organizada ajuda o consumidor a
                entender quem você é, o que oferece e como pode entrar
                em contato.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {differentiators.map((item) => (
                <DifferentiatorCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#f5f6f7] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel>Dúvidas frequentes</SectionLabel>

            <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
              O que você precisa saber.
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-500">
              Entenda como funciona a otimização do Perfil da Empresa
              no Google e o que esperar desse trabalho.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}

      <section className="relative overflow-hidden bg-[#080a0d] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <SectionLabel light>
            O próximo passo começa aqui
          </SectionLabel>

          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-6xl">
            Quantas oportunidades sua empresa está perdendo por não
            ser encontrada?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
            Vamos analisar sua presença no Google e identificar como
            melhorar a forma como seus clientes encontram seu negócio.
          </p>

          <PrimaryButton
            className="mt-10 px-9 py-5"
            icon={FaArrowRight}
          >
            <FaWhatsapp className="text-xl" />
            <p className="uppercase">Solicitar uma análise</p>
          </PrimaryButton>

          <p className="mt-5 text-xs text-neutral-500">
            Atendimento direto pelo WhatsApp.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
