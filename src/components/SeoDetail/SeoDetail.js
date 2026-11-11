
import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaArrowDown,
  FaBullseye,
  FaChartLine,
  FaCheck,
  FaChevronDown,
  FaGoogle,
  FaMousePointer,
  FaSearch,
  FaSlidersH,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "../Footer/Footer";

const whatsappLink =
  "https://wa.me/5511915181487?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20anunciar%20minha%20empresa%20no%20Google%20Ads.";

const SeoDetail = () => {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = "Gestão de Google Ads e Tráfego Pago | JVEIGA";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    const previousDescription = metaDescription.content;

    metaDescription.content =
      "A JVEIGA planeja, cria e otimiza campanhas de Google Ads para atrair clientes com intenção de compra, gerar contatos e acompanhar resultados.";

    return () => {
      document.title = previousTitle;
      metaDescription.content = previousDescription;
    };
  }, []);

  const services = [
    {
      number: "01",
      title: "Pesquisa de palavras-chave",
      description:
        "Identificamos os termos que seus potenciais clientes utilizam para encontrar produtos e serviços como os seus.",
      icon: <FaSearch />,
    },
    {
      number: "02",
      title: "Estrutura de campanhas",
      description:
        "Organizamos campanhas e grupos de anúncios de acordo com os objetivos, produtos e intenções de busca.",
      icon: <FaBullseye />,
    },
    {
      number: "03",
      title: "Anúncios estratégicos",
      description:
        "Criamos anúncios relevantes, com mensagens direcionadas para atrair o público certo e estimular a conversão.",
      icon: <FaGoogle />,
    },
    {
      number: "04",
      title: "Otimização de investimentos",
      description:
        "Ajustamos lances, segmentações e palavras-chave negativas para reduzir desperdícios e melhorar o desempenho.",
      icon: <FaSlidersH />,
    },
  ];

  const metrics = [
    {
      acronym: "CTR",
      title: "Taxa de cliques",
      description:
        "Avalia a proporção de pessoas que clicaram após visualizar o anúncio.",
    },
    {
      acronym: "CPC",
      title: "Custo por clique",
      description:
        "Indica quanto está sendo investido, em média, por cada clique.",
    },
    {
      acronym: "CPA",
      title: "Custo por conversão",
      description:
        "Mostra quanto custa gerar uma ação desejada.",
    },
    {
      acronym: "ROAS",
      title: "Retorno sobre anúncios",
      description:
        "Relaciona a receita atribuída aos anúncios com o investimento realizado.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description:
        "Analisamos seu negócio, concorrentes, mercado, palavras-chave e potencial de investimento.",
    },
    {
      number: "02",
      title: "Planejamento",
      description:
        "Definimos objetivos, estrutura das campanhas, segmentações e estratégia de conversão.",
    },
    {
      number: "03",
      title: "Implementação",
      description:
        "Configuramos campanhas, anúncios, palavras-chave e acompanhamento das conversões.",
    },
    {
      number: "04",
      title: "Otimização",
      description:
        "Monitoramos os resultados e realizamos ajustes contínuos para melhorar o desempenho.",
    },
  ];

  const faqs = [
    {
      question: "Quanto preciso investir em Google Ads?",
      answer:
        "O investimento depende do segmento, da concorrência, da região e dos objetivos da campanha. Definimos uma recomendação após analisar o cenário do seu negócio. O valor pago ao Google é separado da gestão profissional.",
    },
    {
      question: "Em quanto tempo os anúncios começam a aparecer?",
      answer:
        "Após a configuração e aprovação dos anúncios pelo Google, as campanhas podem começar a ser exibidas. Entretanto, encontrar a melhor configuração e otimizar os resultados exige acompanhamento e análise.",
    },
    {
      question: "Google Ads garante vendas?",
      answer:
        "Não. Os anúncios aumentam as oportunidades de alcançar potenciais clientes, mas as vendas também dependem da oferta, do preço, da página de destino, do atendimento e de outros fatores.",
    },
    {
      question: "Preciso ter um site para anunciar?",
      answer:
        "É recomendável ter uma página de destino alinhada ao anúncio e ao que o usuário procura. Ela pode ser um site ou uma landing page desenvolvida para transformar visitas em contatos e oportunidades.",
    },
    {
      question: "Como sei se minha campanha está funcionando?",
      answer:
        "Acompanhamos indicadores como cliques, CTR, CPC, conversões, CPA e, quando há dados de receita disponíveis, ROAS. Assim, a análise vai além da quantidade de visualizações.",
    },
    {
      question: "A gestão inclui o valor pago ao Google?",
      answer:
        "Não. O orçamento de mídia é pago diretamente à plataforma Google Ads. O serviço de gestão é contratado separadamente.",
    },
  ];

  return (
    <main className="overflow-hidden bg-gradient-to-b from-white via-white to-neutral-50 text-black">

      {/* HERO */}
      <section className="relative bg-[#080808] px-5 pb-20 pt-28 text-white md:pb-28 md:pt-36">

        <div className="absolute inset-0 opacity-30">
          <img
            src={require("../../assets/images/background/google-detail-background.jpg")}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/65" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#027BFF]/15 via-transparent to-[#CB342B]/15 opacity-80" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/[0.02] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-[#CB342B] shadow-[0_0_12px_rgba(203,52,43,0.8)]" />
              Gestão estratégica de Google Ads
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Seus clientes estão pesquisando.
              <span className="text-[#027BFF]">
                {" "}Sua empresa precisa aparecer.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-400">
              Alcance pessoas que já estão procurando pelos seus produtos ou
              serviços. Criamos e gerenciamos campanhas de Google Ads com foco
              em atrair clientes, gerar oportunidades e transformar buscas em
              resultados.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center uppercase justify-center gap-3 bg-[#027BFF] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgba(2,123,255,0.2)] transition hover:bg-[#24D366] hover:text-black"
              >
                Quero anunciar no Google
                <FaArrowRight />
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center border border-white/20 bg-white/[0.03] px-7 py-4 text-sm uppercase font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Conheça a estratégia
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <FaCheck className="text-[#027BFF]" />
                Estratégia personalizada
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="text-[#027BFF]" />
                Acompanhamento contínuo
              </span>
            </div>
          </div>

          {/* SIMULAÇÃO DE PESQUISA */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-[#027BFF]/25 via-[#027BFF]/5 to-[#CB342B]/20 opacity-80 blur-3xl" />

            <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-gradient-to-br from-white via-white to-[#F0F5FF] p-5 text-black shadow-2xl sm:p-7">

              <div className="flex items-center gap-2 border-b border-neutral-100 pb-5">
                <FaGoogle className="text-2xl text-[#4285F4]" />
                <span className="text-lg font-medium text-neutral-600">
                  Pesquisa Google
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-5 py-3 shadow-sm">
                <FaSearch className="text-sm text-neutral-400" />
                <span className="text-sm text-neutral-700">
                  empresa de serviços perto de mim
                </span>
              </div>

              <div className="mt-7 space-y-6">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded border border-neutral-300 px-2 py-0.5 text-[10px] font-bold text-neutral-600">
                      Patrocinado
                    </span>
                    <span className="text-xs text-neutral-400">
                      www.suaempresa.com.br
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-[#1A0DAB]">
                    Sua Empresa | Soluções para você
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Encontre a solução ideal para sua necessidade. Atendimento
                    especializado, qualidade e agilidade. Solicite um orçamento.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-blue-50 to-neutral-100 px-3 py-2 text-xs text-neutral-600">
                      Solicite um orçamento
                    </span>
                    <span className="bg-gradient-to-r from-blue-50 to-neutral-100 px-3 py-2 text-xs text-neutral-600">
                      Fale com um especialista
                    </span>
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-5">
                  <div className="mb-2 text-xs text-neutral-400">
                    Outros resultados
                  </div>
                  <div className="h-3 w-3/4 rounded bg-neutral-100" />
                  <div className="mt-3 h-2 w-full rounded bg-neutral-100" />
                  <div className="mt-2 h-2 w-5/6 rounded bg-neutral-100" />
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-neutral-100 pt-5">
                <span className="text-xs font-medium text-neutral-500">
                  Exemplo ilustrativo de anúncio
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-[#027BFF]">
                  <FaMousePointer />
                  Busca com intenção
                </span>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 hidden rounded-lg border border-white/20 bg-gradient-to-br from-[#CB342B] to-[#941E19] p-4 shadow-xl sm:block">
              <div className="text-xs text-white/70">
                Estratégia orientada
              </div>
              <div className="mt-1 text-sm font-bold text-white">
                Para gerar conversões
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F5F8FF] px-5 py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#027BFF]/[0.06] blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CB342B]">
              O custo de anunciar sem estratégia
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Investir em anúncios não significa necessariamente conquistar
              clientes.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-neutral-600">
              Uma campanha mal estruturada pode consumir seu orçamento com
              cliques de pessoas que não têm interesse real no que sua empresa
              oferece.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-neutral-600">
              O problema nem sempre é o valor investido. Muitas vezes, está na
              escolha das palavras-chave, na segmentação, na mensagem do anúncio
              ou na experiência oferecida depois do clique.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Cliques sem intenção de compra",
                description:
                  "Anúncios alcançando pessoas que pesquisam por algo diferente do que sua empresa oferece.",
              },
              {
                title: "Orçamento mal distribuído",
                description:
                  "Investimento concentrado em termos pouco relevantes ou campanhas sem prioridade clara.",
              },
              {
                title: "Anúncios que não convertem",
                description:
                  "Pessoas clicam, mas não encontram uma proposta clara ou um caminho simples para entrar em contato.",
              },
              {
                title: "Falta de acompanhamento",
                description:
                  "Decisões tomadas sem analisar conversões, custos e qualidade dos contatos gerados.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 border border-neutral-200 bg-gradient-to-r from-white to-neutral-50/80 p-5 transition hover:border-[#CB342B]/50 hover:shadow-lg hover:shadow-[#CB342B]/[0.04]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-br from-[#CB342B]/15 to-[#CB342B]/5 text-[#CB342B]">
                  <FaTimes />
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPORTUNIDADE */}
      <section className="bg-gradient-to-br from-[#F5F5F5] via-[#F8FAFC] to-[#EAF2FF] px-5 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
              A oportunidade está na busca
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Alcance seu público no momento em que ele procura por você.
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Diferentemente de outras formas de publicidade, o Google Ads
              permite alcançar pessoas que já demonstram interesse por
              determinado produto ou serviço através de suas pesquisas.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Intenção",
                description:
                  "Identificamos pesquisas relacionadas ao que sua empresa vende e às necessidades do seu público.",
              },
              {
                number: "02",
                title: "Relevância",
                description:
                  "Criamos anúncios alinhados à pesquisa, com mensagens claras e direcionadas.",
              },
              {
                number: "03",
                title: "Conversão",
                description:
                  "Direcionamos o usuário para uma página preparada para gerar contatos, orçamentos e oportunidades.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t-2 border-[#027BFF] bg-gradient-to-br from-white via-white to-[#027BFF]/[0.04] p-8 shadow-sm transition hover:shadow-xl hover:shadow-[#027BFF]/[0.07]"
              >
                <span className="text-sm font-bold text-[#027BFF]">
                  {item.number}
                </span>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANATOMIA DA CAMPANHA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#11151D] to-[#080808] px-5 py-24 text-white md:py-32">

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#027BFF]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#CB342B]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
                Uma campanha bem estruturada
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Não basta aparecer. É preciso transformar o clique em oportunidade.
              </h2>

              <p className="mt-6 leading-8 text-neutral-400">
                Cada etapa precisa trabalhar em conjunto. Desde a pesquisa
                realizada pelo usuário até o momento em que ele entra em
                contato com sua empresa.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Palavra-chave",
                  description:
                    "O que seu potencial cliente pesquisa no Google.",
                  color: "from-[#027BFF] to-[#0055CC]",
                },
                {
                  number: "02",
                  title: "Anúncio",
                  description:
                    "Uma mensagem relevante para a intenção daquela pesquisa.",
                  color: "from-[#CB342B] to-[#941E19]",
                },
                {
                  number: "03",
                  title: "Página de destino",
                  description:
                    "Uma experiência alinhada à promessa apresentada no anúncio.",
                  color: "from-[#027BFF] to-[#0055CC]",
                },
                {
                  number: "04",
                  title: "Conversão",
                  description:
                    "O contato, orçamento ou ação que representa uma oportunidade.",
                  color: "from-[#CB342B] to-[#941E19]",
                },
              ].map((item, index) => (
                <div key={item.number}>
                  <div className="flex items-center gap-5 border border-white/10 bg-gradient-to-r from-white/[0.07] to-white/[0.02] p-5 transition hover:border-white/20 sm:p-6">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center bg-gradient-to-br ${item.color} text-sm font-black text-white shadow-lg`}
                    >
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {index !== 3 && (
                    <div className="ml-11 h-3 w-px bg-gradient-to-b from-white/30 to-white/5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border border-white/10 bg-gradient-to-r from-white/[0.07] via-white/[0.04] to-[#027BFF]/[0.08] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Sua página também faz parte da estratégia.
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-400">
                  Uma boa campanha precisa direcionar o usuário para uma página
                  que apresente a solução, transmita confiança e facilite o
                  contato.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#24D366] px-6 py-4 uppercase text-sm font-bold text-black transition hover:bg-[#1c1e21] hover:text-white hover:border hover:border-white/20"
              >
                Quero uma página estratégica
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F5F8FF] px-5 py-24 md:py-32" id="solucoes">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#027BFF]/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
              Gestão de campanhas
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Estratégia, configuração e otimização em cada etapa.
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Cuidamos dos principais elementos da sua campanha para que o
              investimento seja direcionado com critério e acompanhado por
              indicadores de desempenho.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-gradient-to-br from-neutral-300 via-[#027BFF]/20 to-neutral-200 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="bg-gradient-to-br from-white via-white to-[#F5F8FF]/80 p-8 transition hover:bg-gradient-to-br hover:from-white hover:to-[#EAF2FF] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#027BFF]">
                    {service.number}
                  </span>
                  <span className="text-2xl text-[#027BFF]">
                    {service.icon}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-black">{service.title}</h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MENSURAÇÃO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-[#F8FAFC] to-[#EAF2FF] px-5 py-24 md:py-32">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#CB342B]/[0.05] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CB342B]">
              Dados e desempenho
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              O que não é mensurado dificilmente pode ser otimizado.
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Acompanhamos indicadores que ajudam a entender o comportamento
              dos anúncios, o custo de aquisição e a eficiência do investimento.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold">
              <FaChartLine className="text-xl text-[#027BFF]" />
              Decisões orientadas por dados
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.acronym}
                className="border border-white/70 bg-gradient-to-br from-white via-white to-[#027BFF]/[0.04] p-7 shadow-sm transition hover:shadow-lg hover:shadow-[#027BFF]/[0.06]"
              >
                <span className="bg-gradient-to-r from-[#027BFF] to-[#CB342B] bg-clip-text text-3xl font-black text-transparent">
                  {metric.acronym}
                </span>
                <h3 className="mt-4 font-bold">{metric.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F7F9FC] px-5 py-24 md:py-32" id="como-funciona">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
              Como trabalhamos
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Do planejamento à otimização contínua.
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Um processo organizado para entender seu negócio, estruturar
              campanhas e acompanhar a evolução dos resultados.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative border-t border-neutral-300 pt-7"
              >
                <span className="bg-gradient-to-r from-[#027BFF] to-[#CB342B] bg-clip-text text-4xl font-black text-transparent">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-black">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0055CC] via-[#027BFF] to-[#003C99] px-5 py-20 text-white md:py-24">

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#CB342B]/30 blur-[110px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Sua próxima oportunidade começa com uma busca
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Sua empresa está preparada para atrair clientes pelo Google?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/80">
              Vamos entender seu negócio e identificar oportunidades para
              desenvolver uma estratégia de anúncios alinhada aos seus objetivos.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#24D366] px-7 py-5 text-sm font-bold text-black transition hover:bg-[#1A1A1A] hover:text-white"
          >
            <FaWhatsapp className="text-2xl" />
            <p className="uppercase">Solicitar diagnóstico</p>
            <FaArrowRight />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F5F8FF] px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
              Dúvidas frequentes
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              O que você precisa saber antes de anunciar.
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Entenda como funciona a gestão de Google Ads e o que considerar
              antes de investir em campanhas.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#027BFF] transition hover:text-[#CB342B]"
            >
              Ainda tem dúvidas? Fale conosco
              <FaArrowRight />
            </a>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold transition hover:text-[#027BFF]">
                  {faq.question}
                  <FaChevronDown className="shrink-0 text-sm text-[#027BFF] transition group-open:rotate-180" />
                </summary>

                <p className="max-w-2xl pt-5 text-sm leading-7 text-neutral-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#11151D] to-[#080808] px-5 py-20 text-center text-white md:py-24">

        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#027BFF]/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#CB342B]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#027BFF]">
            JVEIGA · Google Ads
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Transforme pesquisas em oportunidades para seu negócio.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-neutral-400">
            Tenha uma estratégia de anúncios construída para alcançar o público
            certo e acompanhar o desempenho de cada investimento.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-3 bg-[#027BFF] px-8 py-5 text-sm font-bold text-white shadow-[0_8px_35px_rgba(2,123,255,0.2)] transition hover:bg-[#24D366] hover:text-black"
          >
            <FaWhatsapp className="text-2xl" />
            <p className="uppercase">Falar com a gente</p>
            <FaArrowRight />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SeoDetail;
