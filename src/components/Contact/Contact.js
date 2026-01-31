import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardWrapper,
  ContactWrapper,
  CardContent,
  CardTitle,
  CardPlan,
  CardDescription,
  ServicesList,
  ServiceItemCard,
  FormContainer,
  Form,
  FormTitle,
  InputGroup,
  Label,
  Input,
  SubmitButton,
  FlagsWrapper,
  TitleCard,
  Flag,
  TitleFlags,
  FormWrapper,
  CardDetails,
  ContainerFlags,
  Spinner,
  FlagTitle,
  ServiceItemFlag,
  FlagContent,
  // ServiceListFlag,
  // ItemFlagRules,
} from "./ContactStyled";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [cardsBasic, setCardsBasic] = useState([]);
  const [cardsIntermediate, setCardsIntermediate] = useState([]);
  const [cardsPremium, setCardsPremium] = useState([]);
  const formRef = useRef(null);

  const { ref: formInViewRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formVisible, setFormVisible] = useState(false);

  const { ref: titleCardBasicRef, inView: titleCardBasicInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: titleCardIntermediateRef, inView: titleCardIntermediateInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  const { ref: titleCardPremiumRef, inView: titleCardPremiumInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  const { ref: titleFlagsBasicRef, inView: titleFlagsBasicInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const {
    ref: titleFlagsIntermediateRef,
    inView: titleFlagsIntermediateInView,
  } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: titleFlagsPremiumRef, inView: titleFlagsPremiumInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  // Refs para flags do Básico
  const { ref: flagBasicLeftRef, inView: flagBasicLeftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: flagBasicCenterRef, inView: flagBasicCenterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: flagBasicRightRef, inView: flagBasicRightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Refs para flags do Intermediário
  const { ref: flagIntermediateLeftRef, inView: flagIntermediateLeftInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  const {
    ref: flagIntermediateCenterRef,
    inView: flagIntermediateCenterInView,
  } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { ref: flagIntermediateRightRef, inView: flagIntermediateRightInView } =
    useInView({ triggerOnce: true, threshold: 0.1 });

  // Refs para flags do Premium
  const { ref: flagPremiumLeftRef, inView: flagPremiumLeftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: flagPremiumCenterRef, inView: flagPremiumCenterInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  const { ref: flagPremiumRightRef, inView: flagPremiumRightInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  // ========== OBJETO 1: PLANOS BÁSICOS (Sites) ==========
  const cardContentsBasic = useMemo(
    () => [
      {
        id: 2,
        title: "Landing Page",
        plan: "de R$ 300,00",
        description:
          "Landing page, criada para capturar leads e gerar oportunidades de negócio de forma prática e objetiva.",
        services: [
          "Design responsivo",
          "Integração com WhatsApp",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Hospedagem + domínio por 1 ano",
        ],
      },
      {
        id: 1,
        title: "Site Institucional",
        plan: "de R$ 500,00",
        description:
          "Site institucional, desenvolvido para apresentar a empresa de forma clara, profissional e objetiva, reforçando credibilidade e presença digital.",
        services: [
          "Até 5 páginas",
          "Design responsivo",
          "Integração com WhatsApp",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Hospedagem + domínio por 1 ano",
        ],
      },
    ],
    []
  );

  // ========== OBJETO 2: PLANOS INTERMEDIÁRIOS (Sites) ==========
  const cardContentsIntermediate = useMemo(
    () => [
      {
        id: 2,
        title: "Landing Page",
        plan: "de R$ 600,00",
        description:
          "Página estratégica, desenvolvida para conversão, com foco em captar leads, direcionar ações e maximizar resultados de campanhas digitais.",
        services: [
          "Página única otimizada para conversão",
          "Design responsivo",
          "Integração com WhatsApp",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Hospedagem + domínio por 1 ano",
          "Formulário de contato funcional",
          "SEO básico",
        ],
      },
      {
        id: 1,
        title: "Site Institucional",
        plan: "de R$ 800,00",
        description:
          "Estrutura mais completa, desenvolvido para apresentar serviços, diferenciais e fortalecer a autoridade da marca, mantendo foco em clareza, performance e experiência do usuário.",
        services: [
          "Até 5 páginas",
          "Design responsivo",
          "Integração com WhatsApp",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Hospedagem + domínio por 1 ano",
          "Formulário de contato funcional",
          "SEO básico",
          "Performance otimizada (carregamento rápido)",
        ],
      },
      {
        id: 3,
        title: "Página de vendas",
        plan: "de R$ 1.000,00",
        description:
          "Estruturada para persuadir, destacar benefícios e conduzir o visitante à decisão de compra, com foco em conversão e resultados.",
        services: [
          "Página de vendas completa",
          "Copywriting persuasivos",
          "Design responsivo",
          "Integração com WhatsApp + botão de compra",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Hospedagem + domínio por 1 ano",
          "Formulário de contato funcional",
          "SEO básico",
          "Otimização para conversão (CTA visível, provas sociais, estrutura AIDA)",
        ],
      },
    ],
    []
  );

  // ========== OBJETO 3: PLANOS PREMIUM (Sites) ==========
  const cardContentsPremium = useMemo(
    () => [
      {
        id: 1,
        title: "One page estratégica",
        plan: "R$ 1.000,00",
        description:
          "Apresentação objetiva do negócio em uma única página, rápida, clara e eficiente.",
        services: [
          "Prototipação UI/UX",
          "Copywriting persuasivo",
          "Design responsivo",
          "Integração com WhatsApp",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Formulário de contato funcional",
          "SEO básico",
          "Otimização para conversão (leitura fluida e CTA claro)",
        ],
      },
      {
        id: 2,
        title: "Landing page de alta conversão",
        plan: "R$ 1.200,00",
        description:
          "Foco total em conversão, ideal para captação de leads e suporte a campanhas de tráfego pago.",
        services: [
          "Prototipação UI/UX",
          "Copywriting persuasivo",
          "Design responsivo",
          "Integração com WhatsApp",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Formulário de contato funcional",
          "SEO básico",
          "Otimização para conversão (CTA visível e hierarquia visual)",
        ],
      },
      {
        id: 3,
        title: "Página para campanhas e lançamentos",
        plan: "R$ 1.800,00",
        description:
          "Páginas criadas para ações pontuais, lançamentos e campanhas com foco em conversão imediata.",
        services: [
          "Prototipação UI/UX",
          "Copywriting persuasivo",
          "Design responsivo",
          "Integração com WhatsApp + CTA estratégico",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Formulário de contato funcional",
          "SEO básico",
          "Otimização para conversão (urgência, escassez e CTA)",
        ],
      },
      {
        id: 4,
        title: "Página de vendas completa",
        plan: "R$ 2.000,00",
        description:
          "Parceria estratégica completa com gestão 360º. Para empresas que querem dominar o mercado digital.",
        services: [
          "Prototipação UI/UX focada em jornada de compra",
          "Copywriting persuasivo",
          "Design responsivo",
          "Integração com WhatsApp + botão de compra",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Hospedagem + domínio por 1 ano",
          "Formulário de contato funcional",
          "SEO básico",
          "Otimização para conversão (CTA visível, provas sociais, estrutura AIDA)",
        ],
      },
      {
        id: 5,
        title: "Site Institucional",
        plan: "R$ 3.500,00",
        description:
          "Site completo para fortalecer a presença digital, transmitir credibilidade e gerar contatos qualificados.",
        services: [
          "Até 7 páginas institucionais",
          "Prototipação UI/UX (wireframe + layout)",
          "Copywriting estratégico",
          "Design responsivo",
          "Integração com WhatsApp",
          "Instalação de pixel de rastreamento (Meta e/ou GA4)",
          "Hospedagem + domínio por 1 ano",
          "Formulário de contato funcional",
          "SEO básico",
          "Otimização de performance e usabilidade",
        ],
      },
    ],
    []
  );

  // ========== OBJETO 4: FLAGS BÁSICO (Tráfego Pago) ==========
  const flagContentsBasic = [
    {
      plan: "Google Meu Negócio",
      value: "R$ 300,00",
      details: "Setup inicial completo",
      services: [
        "Criação ou atualização de perfil",
        "Otimização de categorias",
        "Upload de fotos e logo",
        "Configuração de horários",
        "Suporte básico",
      ],
    },
    {
      plan: "Google meu negócio + Landing Page",
      value: "R$ 400,00",
      details: "Presença digital básica",
      services: [
        "Google Meu Negócio completo",
        "Landing page com 5 seções",
        "Design básico",
        "Sem copy profissional",
        "Sem UI/UX avançado",
        "Hospedagem incluída",
      ],
    },
    {
      plan: "Pacote Completo Básico",
      value: "R$ 700,00 (pagamento único)",
      details: "Tudo para começar",
      services: [
        "Configuração do Google Meu Negócio",
        "Landing page básica",
        "Tráfego pago inicial com recorrência de R$ 400,00/mês (sem permanência mínima)",
        "Gestão de anúncios no Facebook ou Google Ads",
        "Otimizações semanais de campanhas",
        "Ajustes de criativos e públicos",
        "Monitoramento básico de métricas",
        "Relatório mensal simples",
        "Suporte básico",
        "Configuração inicial de campanhas",
        "Verba de anúncios e criativos não inclusos",
      ],
    },
  ];

  // ========== OBJETO 5: FLAGS INTERMEDIÁRIO (Tráfego Pago) ==========
  const flagContentsIntermediate = [
    {
      plan: "Pacote Intermediário",
      value: "R$ 1.400,00 (pagamento único)",
      details: "Presença digital estruturada",
      services: [
        "Configuração completa do Google Meu Negócio",
        "Site institucional",
        "Copywriting básico orientado à conversão",
        "Tráfego pago inicial",
        "Gestão de tráfego pago - R$ 600,00/mês (sem permanência mínima)",
        "Gestão de anúncios no Facebook OU Google Ads",
        "Otimizações semanais de campanhas",
        "Ajustes de criativos e públicos",
        "Monitoramento de métricas",
        "Relatório semanal das métricas da campanha",
        "Suporte padrão",
        "Verba de anúncios e criativos não inclusos",
      ],
    },
    {
      plan: "Pacote Intermediário Plus",
      value: "R$ 1.600,00 (pagamento único)",
      details: "Estrutura completa para conversão",
      services: [
        "Google Meu Negócio otimizado + consultoria estratégica",
        "Site institucional",
        "Copywriting persuasivo orientado à conversão",
        "Tráfego pago inicial otimizado",
        "Gestão de tráfego pago - R$ 800,00/mês (sem permanência mínima)",
        "Gestão de anúncios no Facebook E Google Ads (multicanal)",
        "Otimizações semanais com testes A/B",
        "Monitoramento avançado e análise de métricas",
        "Relatório de métricas semanal detalhado + reunião mensal",
        "Suporte prioritário",
        "Verba de anúncios não inclusa",
      ],
    },
    {
      plan: "Pacote Intermediário Pro",
      value: "R$ 1.900,00 (pagamento único)",
      details: "Performance máxima com gestão completa",
      services: [
        "Google Meu Negócio otimizado + consultoria estratégica",
        "Site institucional",
        "Copywriting persuasivo estratégico",
        "Tráfego pago inicial com estratégia multicanal",
        "Gestão de tráfego pago - R$ 1.100,00/mês (sem permanência mínima)",
        "Gestão de anúncios no Facebook, Google Ads e remarketing",
        "Otimizações semanais com testes A/B contínuos",
        "Monitoramento em tempo real e análise preditiva",
        "Relatório semanal do perfil de negócios google + reunião mensal de estratégia",
        "Suporte VIP com atendimento prioritário",
        "Dashboard personalizado de métricas",
        "Verba de anúncios não inclusa",
      ],
    },
  ];

  // ========== OBJETO 6: FLAGS PREMIUM (Tráfego Pago) ==========
  const flagContentsPremium = [
    {
      plan: "Pacote Premium",
      value: "R$ 2.200,00 (pagamento único)",
      details: "Estratégia completa de alta performance",
      services: [
        "Google Meu Negócio otimizado com estratégia de SEO local",
        "One page estratégica com prototipação UI/UX",
        "Copywriting persuasivo profissional",
        "Tráfego pago inicial com estratégia multicanal",
        "Gestão de tráfego pago - R$ 1.200,00/mês (sem permanência mínima)",
        "Gestão de anúncios no Facebook, Google Ads e remarketing",
        "Otimizações semanais com testes A/B contínuos",
        "Monitoramento em tempo real com análise preditiva",
        "Relatório de métricas semanal + reunião quinzenal",
        "Suporte VIP com atendimento prioritário",
        "Dashboard personalizado de métricas",
        "Verba de anúncios não inclusa",
      ],
    },
    {
      plan: "Pacote Premium Plus",
      value: "R$ 2.700,00 (pagamento único)",
      details: "Máxima conversão com estrutura avançada",
      services: [
        "Google Meu Negócio otimizado + estratégia de reputação online",
        "Landing page de alta conversão com prototipação UI/UX completa",
        "Copywriting persuasivo estratégico com storytelling",
        "Tráfego pago inicial com funil completo de conversão",
        "Gestão de tráfego pago - R$ 1.500,00/mês (sem permanência mínima)",
        "Gestão de anúncios multicanal (Facebook, Google, remarketing e YouTube)",
        "Otimizações diárias com testes A/B avançados",
        "Monitoramento 24/7",
        "Relatório semanal do google meu negócio + reunião semanal de estratégia",
        "Suporte VIP dedicado",
        "Dashboard personalizado com BI avançado",
        "Consultoria estratégica mensal",
        "Verba de anúncios não inclusa",
      ],
    },
    {
      plan: "Pacote Premium Pro",
      value: "R$ 4.000,00 (pagamento único)",
      details: "Solução enterprise para domínio total do mercado",
      services: [
        "Google Meu Negócio + estratégia completa de presença digital",
        "Página de vendas completa com prototipação UI/UX focada em jornada",
        "Copywriting persuasivo master com gatilhos psicológicos",
        "Tráfego pago inicial com funil avançado",
        "Gestão de tráfego pago - R$ 2.000,00/mês (sem permanência mínima)",
        "Gestão omnichannel (Facebook, Google, YouTube e remarketing)",
        "Monitoramento 24/7",
        "Relatório diário + reunião estratégica semanal + revisão mensal",
        "Suporte VIP exclusivo",
        "Dashboard enterprise",
        "Consultoria estratégica quinzenal",
        "Análise de concorrência mensal",
        "Verba de anúncios não inclusa",
      ],
    },
  ];

  useEffect(() => {
    if (formInView) {
      setFormVisible(true);
    }
  }, [formInView]);

  // Load cards Básico
  const loadMoreCardsBasic = useCallback(() => {
    setCardsBasic((prevCards) => [...prevCards, ...cardContentsBasic]);
  }, [cardContentsBasic]);

  useEffect(() => {
    loadMoreCardsBasic();
  }, [loadMoreCardsBasic]);

  // Load cards Intermediário
  const loadMoreCardsIntermediate = useCallback(() => {
    setCardsIntermediate((prevCards) => [
      ...prevCards,
      ...cardContentsIntermediate,
    ]);
  }, [cardContentsIntermediate]);

  useEffect(() => {
    loadMoreCardsIntermediate();
  }, [loadMoreCardsIntermediate]);

  // Load cards Premium
  const loadMoreCardsPremium = useCallback(() => {
    setCardsPremium((prevCards) => [...prevCards, ...cardContentsPremium]);
  }, [cardContentsPremium]);

  useEffect(() => {
    loadMoreCardsPremium();
  }, [loadMoreCardsPremium]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    fetch("https://formsubmit.co/b79601494f5bb6ab81f2640e897ff29b", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "https://jveiga.dev/#/thanks";
        } else {
          console.error("Erro ao enviar formulário");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar formulário:", error);
        setLoading(false);
      });
  };

  // Hooks para detectar card ativo (Básico)
  const [activeCardBasic, setActiveCardBasic] = useState(0);
  const { ref: cardBasicRef1, inView: cardBasic1InView } = useInView({
    threshold: 0.9,
  });
  const { ref: cardBasicRef2, inView: cardBasic2InView } = useInView({
    threshold: 0.9,
  });
  const { ref: cardBasicRef3, inView: cardBasic3InView } = useInView({
    threshold: 0.9,
  });
  const { ref: cardBasicRef4, inView: cardBasic4InView } = useInView({
    threshold: 0.9,
  });
  const { ref: cardBasicRef5, inView: cardBasic5InView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (cardBasic1InView) setActiveCardBasic(0);
    else if (cardBasic2InView) setActiveCardBasic(1);
    else if (cardBasic3InView) setActiveCardBasic(2);
    else if (cardBasic4InView) setActiveCardBasic(3);
    else if (cardBasic5InView) setActiveCardBasic(4);
  }, [
    cardBasic1InView,
    cardBasic2InView,
    cardBasic3InView,
    cardBasic4InView,
    cardBasic5InView,
  ]);

  // Hooks para detectar card ativo (Intermediário)
  const [activeCardIntermediate, setActiveCardIntermediate] = useState(0);
  const { ref: cardIntermediateRef1, inView: cardIntermediate1InView } =
    useInView({ threshold: 0.9 });
  const { ref: cardIntermediateRef2, inView: cardIntermediate2InView } =
    useInView({ threshold: 0.9 });
  const { ref: cardIntermediateRef3, inView: cardIntermediate3InView } =
    useInView({ threshold: 0.9 });
  const { ref: cardIntermediateRef4, inView: cardIntermediate4InView } =
    useInView({ threshold: 0.9 });

  useEffect(() => {
    if (cardIntermediate1InView) setActiveCardIntermediate(0);
    else if (cardIntermediate2InView) setActiveCardIntermediate(1);
    else if (cardIntermediate3InView) setActiveCardIntermediate(2);
    else if (cardIntermediate4InView) setActiveCardIntermediate(3);
  }, [
    cardIntermediate1InView,
    cardIntermediate2InView,
    cardIntermediate3InView,
    cardIntermediate4InView,
  ]);

  // Hooks para detectar card ativo (Premium)
  const [activeCardPremium, setActiveCardPremium] = useState(0);
  const { ref: cardPremiumRef1, inView: cardPremium1InView } = useInView({
    threshold: 0.9,
  });
  const { ref: cardPremiumRef2, inView: cardPremium2InView } = useInView({
    threshold: 0.9,
  });
  const { ref: cardPremiumRef3, inView: cardPremium3InView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (cardPremium1InView) setActiveCardPremium(0);
    else if (cardPremium2InView) setActiveCardPremium(1);
    else if (cardPremium3InView) setActiveCardPremium(2);
  }, [cardPremium1InView, cardPremium2InView, cardPremium3InView]);

  return (
    <ContactWrapper>
      {/* ============ SEÇÃO BÁSICO ============ */}
      <TitleCard
        ref={titleCardBasicRef}
        className={titleCardBasicInView ? "animate" : ""}
      >
        <h1>
          Preços para Criação de Sites Exclusivos{" "}
          <span style={{ color: "#32CD32", textDecoration: "underline" }}>
            Básicos
          </span>
        </h1>
      </TitleCard>
      <CardWrapper>
        {cardsBasic.map((card, index) => (
          <Card
            key={index}
            ref={
              index === 0
                ? cardBasicRef1
                : index === 1
                ? cardBasicRef2
                : index === 2
                ? cardBasicRef3
                : index === 3
                ? cardBasicRef4
                : index === 4
                ? cardBasicRef5
                : null
            }
            className={`${index === activeCardBasic ? "active" : ""} ${
              titleCardBasicInView ? "rotate" : ""
            }`}
          >
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <p style={{ padding: "15px 0" }}>A partir de:</p>
              <CardPlan>{card.plan}</CardPlan>
              <CardDescription>{card.description}</CardDescription>
              <ServicesList>
                {card.services.map((service, idx) => (
                  <ServiceItemCard key={idx}>{service}</ServiceItemCard>
                ))}
              </ServicesList>
            </CardContent>
          </Card>
        ))}
      </CardWrapper>

      <ContainerFlags>
        <TitleFlags
          ref={titleFlagsBasicRef}
          className={titleFlagsBasicInView ? "animate" : ""}
        >
          <h2>
            Planos de Serviços -{" "}
            <span style={{ color: "#32CD32", textDecoration: "underline" }}>
              Básico
            </span>
          </h2>
        </TitleFlags>
        <FlagsWrapper>
          {flagContentsBasic.map((flag, index) => (
            <Flag
              key={index}
              ref={
                index === 0
                  ? flagBasicLeftRef
                  : index === 1
                  ? flagBasicCenterRef
                  : flagBasicRightRef
              }
              className={`${
                index === 0 ? (flagBasicLeftInView ? "animate-left" : "") : ""
              } ${
                index === 1
                  ? flagBasicCenterInView
                    ? "animate-center"
                    : ""
                  : ""
              } ${
                index === 2 ? (flagBasicRightInView ? "animate-right" : "") : ""
              }`}
            >
              <FlagContent>
                <FlagTitle>{flag.plan}</FlagTitle>
                <p style={{ padding: "10px 0", color: "#FFF" }}>A partir de:</p>
                <CardPlan>{flag.value}</CardPlan>
                <CardDetails>{flag.details}</CardDetails>
                <hr style={{ width: "100%", border: "1px solid #333" }} />
                <ServicesList>
                  {flag.services.map((service, serviceIndex) => (
                    <ServiceItemFlag key={serviceIndex}>
                      {service}
                    </ServiceItemFlag>
                  ))}
                </ServicesList>
              </FlagContent>
            </Flag>
          ))}
        </FlagsWrapper>
      </ContainerFlags>

      {/* ============ SEÇÃO INTERMEDIÁRIO ============ */}
      <TitleCard
        ref={titleCardIntermediateRef}
        className={titleCardIntermediateInView ? "animate" : ""}
      >
        <h1>
          Planos de Serviços{" "}
          <span style={{ color: "#32CD32", textDecoration: "underline" }}>
            Intermediário
          </span>
        </h1>
      </TitleCard>
      <CardWrapper>
        {cardsIntermediate.map((card, index) => (
          <Card
            key={index}
            ref={
              index === 0
                ? cardIntermediateRef1
                : index === 1
                ? cardIntermediateRef2
                : index === 2
                ? cardIntermediateRef3
                : index === 3
                ? cardIntermediateRef4
                : null
            }
            className={`${index === activeCardIntermediate ? "active" : ""} ${
              titleCardIntermediateInView ? "rotate" : ""
            }`}
          >
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <p style={{ padding: "15px 0" }}>A partir de:</p>
              <CardPlan>{card.plan}</CardPlan>
              <CardDescription>{card.description}</CardDescription>
              <ServicesList>
                {card.services.map((service, idx) => (
                  <ServiceItemCard key={idx}>{service}</ServiceItemCard>
                ))}
              </ServicesList>
            </CardContent>
          </Card>
        ))}
      </CardWrapper>

      <ContainerFlags>
        <TitleFlags
          ref={titleFlagsIntermediateRef}
          className={titleFlagsIntermediateInView ? "animate" : ""}
        >
          <h2>
            Plano de Tráfego -{" "}
            <span style={{ color: "#32CD32", textDecoration: "underline" }}>
              Intermediário
            </span>
          </h2>
        </TitleFlags>
        <FlagsWrapper>
          {flagContentsIntermediate.map((flag, index) => (
            <Flag
              key={index}
              ref={
                index === 0
                  ? flagIntermediateLeftRef
                  : index === 1
                  ? flagIntermediateCenterRef
                  : flagIntermediateRightRef
              }
              className={`${
                index === 0
                  ? flagIntermediateLeftInView
                    ? "animate-left"
                    : ""
                  : index === 1
                  ? flagIntermediateCenterInView
                    ? "animate-center"
                    : ""
                  : flagIntermediateRightInView
                  ? "animate-right"
                  : ""
              }`}
            >
              <FlagContent>
                <FlagTitle>{flag.plan}</FlagTitle>
                <p style={{ padding: "10px 0", color: "#FFF" }}>A partir de:</p>
                <CardPlan>{flag.value}</CardPlan>
                <CardDetails>{flag.details}</CardDetails>
                <hr style={{ width: "100%", border: "1px solid #333" }} />
                <ServicesList>
                  {flag.services.map((service, serviceIndex) => (
                    <ServiceItemFlag key={serviceIndex}>
                      {service}
                    </ServiceItemFlag>
                  ))}
                </ServicesList>
              </FlagContent>
            </Flag>
          ))}
        </FlagsWrapper>
      </ContainerFlags>

      {/* ============ SEÇÃO PREMIUM ============ */}
      <TitleCard
        ref={titleCardPremiumRef}
        className={titleCardPremiumInView ? "animate" : ""}
      >
        <h1>
          Planos de Serviços{" "}
          <span style={{ color: "#32CD32", textDecoration: "underline" }}>
            Premium
          </span>
        </h1>
      </TitleCard>
      <CardWrapper>
        {cardsPremium.map((card, index) => (
          <Card
            key={index}
            ref={
              index === 0
                ? cardPremiumRef1
                : index === 1
                ? cardPremiumRef2
                : index === 2
                ? cardPremiumRef3
                : null
            }
            className={`${index === activeCardPremium ? "active" : ""} ${
              titleCardPremiumInView ? "rotate" : ""
            }`}
          >
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <p style={{ padding: "15px 0" }}>A partir de:</p>
              <CardPlan>{card.plan}</CardPlan>
              <CardDescription>{card.description}</CardDescription>
              <ServicesList>
                {card.services.map((service, idx) => (
                  <ServiceItemCard key={idx}>{service}</ServiceItemCard>
                ))}
              </ServicesList>
            </CardContent>
          </Card>
        ))}
      </CardWrapper>

      <ContainerFlags>
        <TitleFlags
          ref={titleFlagsPremiumRef}
          className={titleFlagsPremiumInView ? "animate" : ""}
        >
          <h2>
            Planos Estratégicos de Tráfego Pago -{" "}
            <span style={{ color: "#32CD32", textDecoration: "underline" }}>
              Premium
            </span>
          </h2>
        </TitleFlags>
        <FlagsWrapper>
          {flagContentsPremium.map((flag, index) => (
            <Flag
              key={index}
              ref={
                index === 0
                  ? flagPremiumLeftRef
                  : index === 1
                  ? flagPremiumCenterRef
                  : flagPremiumRightRef
              }
              className={`${
                index === 0 ? (flagPremiumLeftInView ? "animate-left" : "") : ""
              } ${
                index === 1
                  ? flagPremiumCenterInView
                    ? "animate-center"
                    : ""
                  : ""
              } ${
                index === 2
                  ? flagPremiumRightInView
                    ? "animate-right"
                    : ""
                  : ""
              }`}
            >
              <FlagContent>
                <FlagTitle>{flag.plan}</FlagTitle>
                <p style={{ padding: "10px 0", color: "#FFF" }}>A partir de:</p>
                <CardPlan>{flag.value}</CardPlan>
                <CardDetails>{flag.details}</CardDetails>
                <hr style={{ width: "100%", border: "1px solid #333" }} />
                <ServicesList>
                  {flag.services.map((service, serviceIndex) => (
                    <ServiceItemFlag key={serviceIndex}>
                      {service}
                    </ServiceItemFlag>
                  ))}
                </ServicesList>
              </FlagContent>
            </Flag>
          ))}
        </FlagsWrapper>
      </ContainerFlags>

      {/* ============ FORMULÁRIO ============ */}
      <FormWrapper>
        <FormContainer ref={formInViewRef}>
          <FormTitle className={formVisible ? "visible" : ""}>
            Entre em Contato
          </FormTitle>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/b79601494f5bb6ab81f2640e897ff29b"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" value="https://jveiga.dev/#/thanks" />
            <InputGroup className={`left ${formVisible ? "visible" : ""}`}>
              <Label className={formVisible ? "visible" : ""}>Nome</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome..."
                required
              />
            </InputGroup>
            <InputGroup className={`right ${formVisible ? "visible" : ""}`}>
              <Label className={formVisible ? "visible" : ""}>Empresa</Label>
              <Input
                type="text"
                id="empresa"
                name="empresa"
                placeholder="É empresa?"
                required
              />
            </InputGroup>
            <InputGroup className={`left ${formVisible ? "visible" : ""}`}>
              <Label className={formVisible ? "visible" : ""}>Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Ex: raquel@gmail.com"
                required
              />
            </InputGroup>
            <InputGroup className={`right ${formVisible ? "visible" : ""}`}>
              <Label className={formVisible ? "visible" : ""}>Telefone</Label>
              <Input
                type="number"
                id="telefone"
                name="telefone"
                placeholder="Ex: 1197855-0000"
                required
              />
            </InputGroup>
            <InputGroup className={`left ${formVisible ? "visible" : ""}`}>
              <Label className={formVisible ? "visible" : ""}>
                Tipo de Serviço
              </Label>
              <Input
                type="text"
                id="servico"
                name="servico"
                placeholder="Ex: Site Institucional ou Tráfego Pago"
                required
              />
            </InputGroup>
            <InputGroup className={`left ${formVisible ? "visible" : ""}`}>
              <Label className={formVisible ? "visible" : ""}>
                Preferência de Contato
              </Label>
              <Input
                type="text"
                id="preferencia"
                name="preferencia"
                placeholder="Ex: WhatsApp ou Email"
                required
              />
            </InputGroup>
            <SubmitButton
              type="submit"
              className={formVisible ? "visible" : ""}
            >
              {loading ? <Spinner /> : "Enviar"}
            </SubmitButton>
          </Form>
        </FormContainer>
      </FormWrapper>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </ContactWrapper>
  );
};

export default Contact;
