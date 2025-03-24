import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
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
  ServiceListFlag,
  ItemFlagRules
} from './ContactStyled';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const formRef = useRef(null);

  const { ref: formInViewRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formVisible, setFormVisible] = useState(false);

  const { ref: titleCardRef, inView: titleCardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: titleFlagsRef, inView: titleFlagsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: flagLeftRef, inView: flagLeftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: flagCenterRef, inView: flagCenterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: flagRightRef, inView: flagRightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardContents = useMemo(() => [
    {
      id: 1,
      title: "Site Institucional",
      plan: "R$ 1.500,00",
      description: "Ideal para empresas e profissionais que desejam apresentar seus serviços e diferenciais de forma profissional. Um site completo, moderno e otimizado para destacar sua marca na internet.",
      services: [
        "Design Responsivo",
        "SEO",
        "Integração com Redes Sociais",
        "Hospedagem + Dominío"
      ],
    },
    {
      id: 2,
      title: "Landing Page",
      plan: "R$ 1.000,00",
      description: "Página estratégica para converter visitantes em clientes. Criada com design atrativo, carregamento rápido e otimização para capturar leads e aumentar suas vendas.",
      services: [
        "Design Responsivo",
        "SEO",
        "Integração com Redes Sociais",
        "Hospedagem + Dominío"
      ],
    },
    {
      id: 3,
      title: "Páginas de Vendas",
      plan: "R$ 1.000,00",
      description: "Projetada para maximizar conversões e impulsionar suas vendas. Layout persuasivo, copywriting estratégico e integração com sistemas de pagamento para otimizar sua receita.",
      services: [
        "Design Responsivo",
        "SEO",
        "Integração com Redes Sociais",
        "Hospedagem + Dominío"
      ],
    },
    {
      id: 4,
      title: "Hot Site",
      plan: "R$ 1.500,00",
      description: "Perfeito para campanhas promocionais e lançamentos de produtos. Um site dinâmico, chamativo e focado em gerar impacto imediato no público-alvo.",
      services: [
        "Design Responsivo",
        "SEO",
        "Integração com Redes Sociais",
        "Hospedagem + Dominío"
      ],
    },
    {
      id: 5,
      title: "Site One Page",
      plan: "R$ 1.000,00",
      description: "Um site moderno e direto, que reúne todas as informações essenciais em uma única página. Ideal para startups, freelancers e pequenas empresas que querem presença digital rápida e eficiente.",
      services: [
        "Design Responsivo",
        "SEO",
        "Integração com Redes Sociais",
        "Hospedagem + Dominío"
      ],
    },
  ], []);

  const flagContents = [
    {
      plan: "Trimestral",
      value: "R$ 2.400,00",
      details: "3 parcelas de R$ 800,00",
      services: [
        "Gestão de até 2 campanhas no Facebook Ads",
        {
          description: "Desenvolvimento de criativos (com as seguintes regras):",
          rules: [
            "Até 2 criativos por campanha (imagens estáticas ou carrosséis)",
            "Para vídeos ou formatos mais complexos, será necessário um orçamento separado",
            "Revisões limitadas a 2 rodadas por criativo",
            {
              delivery_times: {
                imagens: "até 3 dias úteis após o briefing",
                vídeos: "até 7 dias úteis após o briefing"
              }
            }
          ]
        },
        "Otimização semanal",
        "Relatório mensal de desempenho",
        "Suporte via WhatsApp",
        "Sem ajustes de landing page"
      ]
    },
    {
      plan: "Semestral",
      value: "R$ 6.000,00",
      details: "6 parcelas de R$ 1.000,00",
      services: [
        "Gestão de até 4 campanhas no Facebook Ads ou Google Ads",
        {
          description: "Desenvolvimento de criativos (com as seguintes regras):",
          rules: [
            "Até 5 criativos por campanha (imagens estáticas ou carrosséis)",
            "Para vídeos ou formatos mais complexos, será necessário um orçamento separado",
            "Revisões limitadas a 3 rodadas por criativo",
            {
              delivery_times: {
                imagens: "até 3 dias úteis após o briefing.",
                vídeos: "até 7 dias úteis após o briefing."
              }
            }
          ]
        },
        "Otimização duas vezes por semana",
        "Relatório quinzenal de desempenho",
        "Suporte via WhatsApp e e-mail",
        "Ajustes básicos em landing pages"
      ]
    },
    {
      plan: "Anual",
      value: "R$ 18.000,00",
      details: "12 parcelas de R$ 1.500,00",
      services: [
        "Gestão de campanhas ilimitadas no Facebook Ads, Google Ads e YouTube",
        {
          description: "Desenvolvimento de criativos ilimitados (com as seguintes regras):",
          rules: [
            "Até 10 criativos por campanha (imagens estáticas ou carrosséis)",
            "Para vídeos ou formatos mais complexos, será necessário um orçamento separado",
            "Revisões limitadas a 5 rodadas por criativo",
            {
              delivery_times: {
                imagens: "até 3 dias úteis após o briefing",
                vídeos: "até 7 dias úteis após o briefing"
              }
            }
          ]
        },
        "Otimização diária",
        "Relatórios detalhados e insights estratégicos mensais",
        "Suporte prioritário 24/7 via WhatsApp e e-mail",
        "Ajustes básicos em landing pages",
        "Criação e ajustes completos em landing pages"
      ]
    }
  ];

  useEffect(() => {
    if (formInView) {
      setFormVisible(true);
    }
  }, [formInView]);

  const loadMoreCards = useCallback(() => {
    setCards((prevCards) => [
      ...prevCards,
      ...cardContents,
    ]);
  }, [cardContents]);

  useEffect(() => {
    loadMoreCards();
  }, [loadMoreCards]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      loadMoreCards();
    }
  }, [loadMoreCards]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    fetch('https://formsubmit.co/b79601494f5bb6ab81f2640e897ff29b', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          window.location.href = 'https://jveiga.dev/#/thanks';
        } else {
          console.error('Erro ao enviar formulário');
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Erro ao enviar formulário:', error);
        setLoading(false);
      });
  };

  // Hook para detectar qual card está visível
  const [activeCard, setActiveCard] = useState(0);
  const { ref: cardRef1, inView: card1InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef2, inView: card2InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef3, inView: card3InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef4, inView: card4InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef5, inView: card5InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef6, inView: card6InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef7, inView: card7InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef8, inView: card8InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef9, inView: card9InView } = useInView({ threshold: 0.9 });
  const { ref: cardRef10, inView: card10InView } = useInView({ threshold: 0.9 });

  useEffect(() => {
    // Lógica para verificar se o primeiro card está visível
    if (card1InView) {
      setActiveCard(0);  // Define o primeiro card como ativo
    } else if (card2InView) {
      setActiveCard(1);  // Define o segundo card como ativo
    } else if (card3InView) {
      setActiveCard(2);  // Define o terceiro card como ativo
    } else if (card4InView) {
      setActiveCard(3);  // Define o quarto card como ativo
    } else if (card5InView) {
      setActiveCard(4);  // Define o quinto card como ativo
    } else if (card6InView) {
      setActiveCard(5);  // Define o sexto card como ativo
    } else if (card7InView) {
      setActiveCard(6);  // Define o sétimo card como ativo
    } else if (card8InView) {
      setActiveCard(7);  // Define o oitavo card como ativo
    } else if (card9InView) {
      setActiveCard(8);  // Define o nono card como ativo
    } else if (card10InView) {
      setActiveCard(9);  // Define o décimo card como ativo
    }
  }, [card1InView, card2InView, card3InView, card4InView, card5InView, card6InView, card7InView, card8InView, card9InView, card10InView]);

  return (
    <ContactWrapper>
      <TitleCard ref={titleCardRef} className={titleCardInView ? 'animate' : ''}>
        <h1>Preços para Criação de Sites Exclusivos</h1>
      </TitleCard>
      <CardWrapper>
        {cards.map((card, index) => (
          <Card
            key={index}
            ref={
              index === 0 ? cardRef1 :
                index === 1 ? cardRef2 :
                  index === 2 ? cardRef3 :
                    index === 3 ? cardRef4 :
                      index === 4 ? cardRef5 :
                        index === 5 ? cardRef6 :
                          index === 6 ? cardRef7 :
                            index === 7 ? cardRef8 :
                              index === 8 ? cardRef9 :
                                index === 9 ? cardRef10 : null
            }
            className={`${index === activeCard ? 'active' : ''} ${titleCardInView ? 'rotate' : ''}`}
          >
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <p style={{ padding: '15px 0' }}>A partir de:</p>
              <CardPlan>{card.plan}</CardPlan>
              <CardDescription>{card.description}</CardDescription>
              <ServicesList>
                {card.services.map((service, index) => (
                  <ServiceItemCard key={index}>{service}</ServiceItemCard>
                ))}
              </ServicesList>
            </CardContent>
          </Card>
        ))}
      </CardWrapper>

      <ContainerFlags>
        <TitleFlags ref={titleFlagsRef} className={titleFlagsInView ? 'animate' : ''}>
          <h2>Planos Estratégicos de Tráfego Pago</h2>
        </TitleFlags>
        <FlagsWrapper>
          {flagContents.map((flag, index) => (
            <Flag
              key={index}
              ref={index === 0 ? flagLeftRef : index === 1 ? flagCenterRef : flagRightRef}
              className={
                `${index === 0 ? (flagLeftInView ? 'animate-left' : '') : ''} ${index === 1 ? (flagCenterInView ? 'animate-center' : '') : ''} ${index === 2 ? (flagRightInView ? 'animate-right' : '') : ''}`
              }
            >
              <FlagContent>
                <FlagTitle>{flag.plan}</FlagTitle>
                <p style={{ padding: '10px 0', color: '#FFF' }}>A partir de:</p>
                <CardPlan>{flag.value}</CardPlan>
                <CardDetails>{flag.details}</CardDetails>
                <hr style={{ width: '100%', border: '1px solid #333' }} />
                <ServicesList>
                  {flag.services.map((service, serviceIndex) => {
                    if (typeof service === 'string') {
                      return <ServiceItemFlag key={serviceIndex}>{service}</ServiceItemFlag>;
                    } else if (typeof service === 'object' && service.description) {
                      return (
                        <ServiceListFlag key={serviceIndex}>
                          {service.description}
                          <ItemFlagRules>
                            {service.rules.map((rule, ruleIndex) => {
                              if (typeof rule === 'object' && rule.delivery_times) {
                                return (
                                  <li key={ruleIndex}>
                                    {Object.entries(rule.delivery_times).map(([key, value]) => (
                                      <div key={key}>
                                        {key}: {value}
                                      </div>
                                    ))}
                                  </li>
                                );
                              }
                              return <li key={ruleIndex}>{rule}</li>;
                            })}
                          </ItemFlagRules>
                        </ServiceListFlag>
                      );
                    }
                    return null;
                  })}
                </ServicesList>
              </FlagContent>
            </Flag>
          ))}
        </FlagsWrapper>

      </ContainerFlags>
      <FormWrapper>
        <FormContainer ref={formInViewRef}>
          <FormTitle className={formVisible ? 'visible' : ''}>Entre em Contato</FormTitle>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/b79601494f5bb6ab81f2640e897ff29b"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" value="https://jveiga.dev/#/thanks" />
            <InputGroup className={`left ${formVisible ? 'visible' : ''}`}>
              <Label className={formVisible ? 'visible' : ''}>Nome</Label>
              <Input type="text" id="nome" name="nome" placeholder="Digite seu nome..." required />
            </InputGroup>
            <InputGroup className={`right ${formVisible ? 'visible' : ''}`}>
              <Label className={formVisible ? 'visible' : ''}>Empresa</Label>
              <Input type="text" id="empresa" name="empresa" placeholder="É empresa?" required />
            </InputGroup>
            <InputGroup className={`left ${formVisible ? 'visible' : ''}`}>
              <Label className={formVisible ? 'visible' : ''}>Email</Label>
              <Input type="email" id="email" name="email" placeholder="Ex: raquel@gmail.com" required />
            </InputGroup>
            <InputGroup className={`right ${formVisible ? 'visible' : ''}`}>
              <Label className={formVisible ? 'visible' : ''}>Telefone</Label>
              <Input type="number" id="telefone" name="telefone" placeholder="Ex: 1197855-0000" required />
            </InputGroup>
            <InputGroup className={`left ${formVisible ? 'visible' : ''}`}>
              <Label className={formVisible ? 'visible' : ''}>Tipo de Serviço</Label>
              <Input type="text" id="servico" name="servico" placeholder="Ex: Site Institucional ou Tráfego Pago" required />
            </InputGroup>
            <InputGroup className={`left ${formVisible ? 'visible' : ''}`}>
              <Label className={formVisible ? 'visible' : ''}>Preferência de Contato</Label>
              <Input type="text" id="preferencia" name="preferencia" placeholder="Ex: WhatsApp ou Email" required />
            </InputGroup>
            <SubmitButton type="submit" className={formVisible ? 'visible' : ''}>
              {loading ? <Spinner /> : 'Enviar'}
            </SubmitButton>
          </Form>
        </FormContainer>
      </FormWrapper>
      <Footer />
    </ContactWrapper>
  );
};

export default Contact;