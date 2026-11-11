import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Footer from "../Footer/Footer";

const whatsappLink =
  "https://wa.me/5511915181487?text=Ol%C3%A1,%20tenho%20interesse%20em%20desenvolver%20um%20site%20para%20minha%20empresa.";

const statistics = [
  {
    value: 89,
    suffix: "%",
    title: "Conectividade no Brasil",
    description:
      "Dos indivíduos com 10 anos ou mais estavam conectados à internet.",
  },
  {
    value: 73,
    suffix: " milhões",
    title: "Compradores digitais",
    description:
      "De pessoas compraram produtos ou serviços pela internet.",
  },
  {
    value: 90,
    suffix: "%",
    title: "Compras em marketplaces",
    description:
      "Dos consumidores online utilizaram sites de compra e venda.",
  },
];

const services = [
  {
    icon: <FaGlobe />,
    title: "Sites institucionais",
    description:
      "Apresente sua empresa com profissionalismo, valorize seus diferenciais e mostre aos clientes por que escolher seus produtos e serviços.",
    benefit: "Sua empresa mais valorizada no digital.",
    color: "text-[#CB342B]",
  },
  {
    icon: <FaRocket />,
    title: "Landing pages",
    description:
      "Transforme campanhas em oportunidades comerciais com páginas estratégicas, argumentos persuasivos e chamadas para ação.",
    benefit: "Mais oportunidades de conversão.",
    color: "text-[#027BFF]",
  },
  {
    icon: <FaMobileAlt />,
    title: "Design responsivo",
    description:
      "Ofereça uma experiência de navegação consistente em celulares, tablets e computadores, independentemente de onde seu cliente acessar.",
    benefit: "Sua empresa acessível em qualquer tela.",
    color: "text-[#027BFF]",
  },
  {
    icon: <FaCode />,
    title: "Desenvolvimento personalizado",
    description:
      "Tenha uma solução desenvolvida de acordo com a identidade, os processos e os objetivos comerciais da sua empresa.",
    benefit: "Uma solução alinhada ao seu negócio.",
    color: "text-[#CB342B]",
  },
  {
    icon: <FaGlobe />,
    title: "Otimização SEO",
    description:
      "Prepare seu site para os mecanismos de busca com conteúdo estratégico, estrutura técnica e palavras-chave relevantes para seu mercado.",
    benefit: "Mais oportunidades de ser encontrado no Google.",
    color: "text-[#CB342B]",
  },
  {
    icon: <FaRocket />,
    title: "Otimização GEO",
    description:
      "Organize as informações da sua empresa para facilitar a compreensão por mecanismos de inteligência artificial e buscas generativas.",
    benefit: "Preparação para a nova geração de buscas.",
    color: "text-[#027BFF]",
  },
];

const steps = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Conhecemos sua empresa, seus produtos, serviços, público e objetivos para entender o que precisa ser comunicado.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Planejamos a estrutura, os conteúdos, as palavras-chave e a experiência necessária para alcançar seus objetivos.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Transformamos o planejamento em um site profissional, responsivo, otimizado e alinhado à identidade da sua marca.",
  },
  {
    number: "04",
    title: "Publicação",
    description:
      "Realizamos os testes e ajustes finais para colocar seu projeto no ar e aproximar sua empresa dos clientes.",
  },
];

const faqs = [
  {
    question: "Por que minha empresa precisa de um site profissional?",
    answer:
      "Um site profissional fortalece a presença digital da empresa, apresenta seus produtos e serviços, transmite credibilidade e oferece um canal próprio para que potenciais clientes conheçam suas soluções e entrem em contato.",
  },
  {
    question: "Qual a diferença entre site institucional e landing page?",
    answer:
      "O site institucional apresenta a empresa, seus produtos, serviços e diferenciais de forma abrangente. Já a landing page é uma página estratégica, construída para um objetivo específico, como divulgar uma oferta, captar contatos ou gerar solicitações de orçamento.",
  },
  {
    question: "O site funciona em celulares?",
    answer:
      "Sim. Desenvolvemos sites responsivos, adaptados para smartphones, tablets e computadores. A experiência de navegação é planejada para facilitar o acesso às informações e o contato com sua empresa em diferentes dispositivos.",
  },
  {
    question: "O site será otimizado para aparecer no Google?",
    answer:
      "Os projetos consideram boas práticas de SEO, incluindo estrutura semântica, títulos, descrições, palavras-chave, desempenho e indexação. Essas práticas ajudam os mecanismos de busca a compreender o conteúdo, mas não garantem posições específicas nos resultados.",
  },
  {
    question: "O que é GEO e por que é importante?",
    answer:
      "GEO é a otimização de conteúdo para mecanismos de busca generativos e ferramentas de inteligência artificial. Organizamos as informações da empresa com clareza, contexto e relevância para facilitar sua interpretação por ferramentas como ChatGPT e Gemini. A presença nas respostas dessas plataformas não pode ser garantida.",
  },
  {
    question: "Posso utilizar o site em campanhas de Google Ads?",
    answer:
      "Sim. Podemos desenvolver sites e landing pages considerando os objetivos das campanhas, a experiência do visitante e os caminhos de conversão, como formulários, solicitações de orçamento e contatos pelo WhatsApp.",
  },
  {
    question: "Quanto custa desenvolver um site?",
    answer:
      "O investimento depende do tipo de projeto, quantidade de páginas, funcionalidades e necessidades específicas da empresa. Entre em contato para apresentar sua ideia e receber uma proposta adequada ao seu negócio.",
  },
];

const AgencyDetail = () => {
  useEffect(() => {
    document.title = "Criação de Sites Profissionais e Landing Pages | JVEIGA";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "A JVEIGA desenvolve sites profissionais, sites institucionais e landing pages para empresas. Soluções responsivas com SEO, GEO e foco em conversão.";

    return () => {
      document.title = "Desenvolvimento de Sites & Tráfego Pago | JVEIGA";
    };
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <main className="bg-white text-[#000000]">
      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#000000]">
        <img
          src={require("../../assets/images/background/dev1-background.jpg")}
          alt="Desenvolvimento de sites profissionais e soluções digitais pela JVEIGA"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-[#027BFF]/10" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="h-2 w-2 bg-[#CB342B]" />
              Desenvolvimento web estratégico
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Seu negócio tem valor.{" "}
              <span className="text-[#027BFF]">
                Seu site precisa mostrar isso.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              Desenvolvemos sites profissionais e landing pages para
              empresas que desejam valorizar seus produtos, destacar
              seus diferenciais e conquistar novas oportunidades no
              ambiente digital.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#027BFF] px-7 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#24D366]"
              >
                Solicitar orçamento
                <FaArrowRight />
              </a>

              <a
                href="#solucoes"
                className="inline-flex items-center border border-white/30 px-7 py-4 text-sm font-semibold uppercase text-white transition hover:border-[#027BFF] hover:text-[#027BFF]"
              >
                Conhecer soluções
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-2 w-1/3 bg-gradient-to-r from-[#CB342B] to-[#027BFF]" />
      </section>

      {/* INTRODUÇÃO */}
      <section className="border-b border-black/10 bg-gradient-to-b from-white via-[#027BFF]/[0.025] to-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CB342B]">
              Sua empresa merece destaque
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Não basta oferecer bons produtos e serviços. É preciso
              mostrar ao mercado por que eles merecem ser escolhidos.
            </h2>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-black/60">
            <p>
              Antes de tomar uma decisão de compra, seus potenciais
              clientes pesquisam, comparam empresas e procuram
              informações que transmitam confiança. Nesse cenário, a
              presença digital influencia diretamente a percepção
              sobre sua marca.
            </p>

            <p>
              Um site profissional permite apresentar seus produtos,
              valorizar seus serviços, destacar seus diferenciais e
              construir uma experiência que conduza o visitante ao
              próximo passo: conhecer melhor sua empresa e entrar em
              contato.
            </p>

            <p>
              Na JVEIGA, desenvolvemos soluções digitais que unem
              estratégia, design, tecnologia e otimização para
              transformar a presença online da sua empresa em uma
              ferramenta comercial.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTER */}
      <section className="bg-gradient-to-b from-[#000000] via-[#080D16] to-[#000000] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {statistics.map((stat) => (
            <article
              key={stat.title}
              className="border border-white/15 bg-gradient-to-br from-[#111111] via-[#080808] to-[#027BFF]/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#027BFF] hover:shadow-lg"
            >
              <div className="text-4xl font-bold tracking-tight text-[#CB342B] sm:text-5xl">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy={false}
                  />
                )}
                {!inView && "0"}
              </div>

              <h4 className="mt-5 text-base font-bold text-white">
                {stat.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {stat.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-center leading-relaxed text-white/40">
          Fonte: Pesquisa TIC Domicílios 2024 — CGI.br, NIC.br e
          Cetic.br.
        </p>
      </section>

      <section
        ref={ref}
        className="border-t border-black/10 bg-gradient-to-b from-white via-[#027BFF]/[0.035] to-white px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
            O cenário digital em números
          </span>

          <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
            Seus clientes já estão na internet. Sua empresa está
            preparada para encontrá-los?
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-black/60">
            Os hábitos de consumo mudaram. Estar presente no ambiente
            digital deixou de ser apenas um diferencial e passou a
            fazer parte da jornada de compra.
          </p>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section
        id="solucoes"
        className="bg-gradient-to-b from-white via-[#027BFF]/[0.025] to-white px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
              Soluções para sua empresa
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Tudo o que sua presença digital precisa para se destacar.
            </h2>

            <p className="mt-4 leading-relaxed text-black/60">
              Do primeiro contato à decisão de compra, cada elemento
              do projeto tem um propósito: apresentar melhor sua
              empresa, valorizar suas soluções e facilitar a conexão
              com seus clientes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={index}
                className="group border border-black/10 bg-gradient-to-br from-white via-white to-[#027BFF]/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl"
              >
                <div className={`text-3xl ${service.color}`}>
                  {service.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-black/10 pt-5">
                  <p className="text-xs font-bold uppercase leading-relaxed text-black/80">
                    {service.benefit}
                  </p>
                </div>

                <div className="mt-7 h-1 w-10 bg-[#027BFF] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO E GEO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#080D16] to-[#06182C] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#027BFF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#CB342B]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CB342B]">
              Visibilidade nos mecanismos de busca
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Seu site precisa ser encontrado, compreendido e
              considerado.
            </h2>

            <p className="mt-5 leading-relaxed text-white/60">
              Desenvolver um site é também preparar sua empresa para
              ser descoberta na internet. Por isso, consideramos
              estratégias de SEO e GEO desde a estruturação do
              conteúdo até a organização das informações da sua marca.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="border border-white/15 bg-gradient-to-br from-white/[0.06] to-transparent p-7 sm:p-9">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#CB342B]">
                SEO
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Otimização para mecanismos de busca
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                SEO (Search Engine Optimization) reúne práticas que
                ajudam mecanismos como o Google a compreender,
                indexar e apresentar as páginas da sua empresa nos
                resultados de pesquisa.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Pesquisa e aplicação estratégica de palavras-chave.",
                  "Estrutura semântica com títulos e hierarquia de conteúdo.",
                  "Otimização de títulos e meta descriptions.",
                  "Desempenho, velocidade e experiência em dispositivos móveis.",
                  "Indexação e dados estruturados quando aplicáveis.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="mt-1 shrink-0 text-[#CB342B]" />
                    <span className="text-sm leading-relaxed text-white/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-white/15 bg-gradient-to-br from-white/[0.06] to-transparent p-7 sm:p-9">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#027BFF]">
                GEO
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Otimização para mecanismos generativos
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                GEO (Generative Engine Optimization) busca preparar
                conteúdos para facilitar sua interpretação por
                mecanismos de inteligência artificial e ferramentas
                de busca generativa.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Conteúdo claro, relevante e contextualizado.",
                  "Informações organizadas sobre a empresa e suas soluções.",
                  "Identificação de produtos, serviços e áreas de atuação.",
                  "Consistência de informações e dados estruturados.",
                  "Conteúdo preparado para mecanismos de inteligência artificial.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="mt-1 shrink-0 text-[#027BFF]" />
                    <span className="text-sm leading-relaxed text-white/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/45">
            SEO e GEO ampliam as possibilidades de descoberta e
            compreensão do conteúdo, mas não garantem posições no
            Google ou citações em respostas de ferramentas de
            inteligência artificial.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-gradient-to-b from-white via-[#CB342B]/[0.025] to-white px-5 py-24 text-[#000000] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CB342B]">
              O valor de uma presença digital estratégica
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Uma experiência que valoriza sua marca antes mesmo do
              primeiro contato.
            </h2>

            <p className="mt-5 leading-relaxed text-black/60">
              Seu site é um dos principais pontos de contato entre
              sua empresa e o mercado. Ele precisa transmitir
              profissionalismo, apresentar suas soluções com clareza
              e tornar a jornada do cliente mais simples.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Credibilidade e confiança",
                description:
                  "Uma apresentação profissional fortalece a percepção de valor da sua empresa.",
              },
              {
                title: "Valorização dos produtos e serviços",
                description:
                  "Apresente suas soluções com informações, benefícios e diferenciais que ajudam o cliente a escolher.",
              },
              {
                title: "Mais oportunidades comerciais",
                description:
                  "Facilite solicitações de orçamento, contatos e conversas com potenciais clientes.",
              },
              {
                title: "Presença digital contínua",
                description:
                  "Disponibilize informações sobre sua empresa mesmo quando sua equipe não estiver atendendo.",
              },
              {
                title: "Descoberta nos mecanismos de busca",
                description:
                  "Organize seu conteúdo para facilitar a descoberta por mecanismos de pesquisa e ferramentas de IA.",
              },
              {
                title: "Estrutura para campanhas",
                description:
                  "Utilize seu site como destino para campanhas de tráfego pago e ações de marketing digital.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b border-black/10 pb-5"
              >
                <span className="mt-1 text-[#027BFF]">
                  <FaCheck />
                </span>

                <div>
                  <h3 className="text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-black/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="bg-gradient-to-b from-white via-[#027BFF]/[0.025] to-white px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CB342B]">
              Nosso processo
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Da estratégia ao lançamento do seu site.
            </h2>

            <p className="mt-4 text-black/60">
              Cada etapa é planejada para transformar as necessidades
              da sua empresa em uma solução digital funcional,
              estratégica e preparada para crescer.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border-t-2 border-black pt-6"
              >
                <span className="text-sm font-bold text-[#027BFF]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="bg-gradient-to-r from-[#027BFF] via-[#086FE0] to-[#027BFF] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">
              Sua empresa está pronta para se destacar?
            </h2>

            <p className="mt-3 text-sm text-white/80">
              Vamos entender seus objetivos e desenvolver uma
              presença digital que valorize o que sua empresa tem
              de melhor.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 bg-[#24D366] px-7 py-4 text-sm font-bold text-black uppercase transition hover:bg-[#1C1E21] hover:text-white"
          >
            Solicitar orçamento
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-white via-[#CB342B]/[0.02] to-white px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CB342B]">
            Dúvidas frequentes
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Tudo o que você precisa saber sobre criação de sites.
          </h2>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold">
                  {faq.question}

                  <span className="text-xl text-[#027BFF] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-b from-white to-[#027BFF]/[0.035] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-5xl overflow-hidden bg-gradient-to-br from-[#000000] via-[#080D16] to-[#06182C] px-6 py-16 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#027BFF]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#CB342B]/10 blur-3xl" />

          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#CB342B] to-[#027BFF]" />

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
              Vamos construir algo relevante?
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Mostre ao mercado o verdadeiro valor da sua empresa.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/60">
              Desenvolva um site profissional que valorize seus
              produtos e serviços, fortaleça sua marca e aproxime
              sua empresa de novos clientes.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center uppercase gap-3 bg-[#027BFF] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#24D366]"
            >
              Falar sobre meu projeto
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AgencyDetail;