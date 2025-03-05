import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Card,
  CardWrapper,
  ContactWrapper,
  CardContent,
  CardTitle,
  FlagTitle,
  CardPlan,
  CardDescription,
  ServicesList,
  ServiceItemCard,
  ServiceItemFlag,
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
  ContainerFlags
} from './ContactStyled';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Removemos formRef do useRef e usamos o hook do intersection observer
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formVisible, setFormVisible] = useState(false);

  // Outras configurações de inView (para animações de títulos e flags)
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
  const { ref: cardWrapperRef, inView: cardWrapperInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Dados para cada card
  const cardContents = [
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
      plan: "R$ 500,00",
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
      plan: "R$ 800,00",
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
      plan: "R$ 1.000,00",
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
  ];

  // Dados para os cards em formato de bandeira
  const flagContents = [
    {
      plan: "Trimestral",
      value: "R$ 1.500,00",
      details: "3 parcelas de R$ 500,00",
      services: [
        "Gestão de até 2 campanhas no Facebook Ads",
        "Otimização semanal",
        "Relatório mensal de desempenho",
        "Suporte via WhatsApp",
        "Sem ajustes de landing page"
      ]
    },
    {
      plan: "Semestral",
      value: "R$ 4.300,00",
      details: "6 parcelas de R$ 716,67",
      services: [
        "Gestão de até 4 campanhas no Facebook Ads ou Google Ads",
        "Otimização duas vezes por semana",
        "Relatório quinzenal de desempenho",
        "Suporte via WhatsApp e e-mail",
        "Ajustes básicos em landing pages"
      ]
    },
    {
      plan: "Anual",
      value: "R$ 8.200,00",
      details: "12 parcelas de R$ 683,33",
      services: [
        "Gestão de campanhas ilimitadas no Facebook Ads, Google Ads e YouTube, com otimização contínua",
        "Otimização diária",
        "Relatórios detalhados e insights",
        "Suporte prioritário 24/7",
        "Criação e ajustes de landing pages"
      ]
    }
  ];

  // Detecta qual card está em evidência durante o scroll
  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.firstChild.offsetWidth;
      const newActiveIndex = Math.round(scrollPosition / cardWidth) % cardContents.length;
      setActiveIndex(newActiveIndex);
    }
  };

  // Usando useEffect para marcar o formulário como visível uma vez que esteja em view
  useEffect(() => {
    if (formInView) {
      setFormVisible(true);
    }
  }, [formInView]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Lógica para enviar o formulário
  //   console.log('Formulário enviado!');
  // };

  return (
    <ContactWrapper>
      <TitleCard ref={titleCardRef} className={titleCardInView ? 'animate' : ''}>
        <h1>Preços para Criação de Sites Exclusivos</h1>
      </TitleCard>
      <CardWrapper ref={cardWrapperRef} onScroll={handleScroll} className={cardWrapperInView ? 'animate' : ''}>
        {Array.from({ length: 30 }, (_, i) => {
          // Repete os 10 cards três vezes para simular um scroll infinito
          const cardIndex = i % cardContents.length;
          const cardData = cardContents[cardIndex];
          const isActive = activeIndex === cardIndex;

          return (
            <Card
              key={`${cardData.id}-${i}`}
              className={`card ${isActive ? 'active' : ''}`}
              style={{
                '--index': i,
                transform: isActive ? 'rotate(360deg)' : 'rotate(0deg)',
                transition: 'transform 1.2s ease-in-out'
              }}
            >
              <CardContent>
                <CardTitle>{cardData.title}</CardTitle>
                <p style={{ padding: '15px 0' }}>A partir de:</p>
                <CardPlan>{cardData.plan}</CardPlan>
                <CardDescription>{cardData.description}</CardDescription>
                <ServicesList>
                  {cardData.services.map((service, index) => (
                    <ServiceItemCard key={index}>{service}</ServiceItemCard>
                  ))}
                </ServicesList>
              </CardContent>
            </Card>
          );
        })}
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
              className={`
                ${index === 0 ? (flagLeftInView ? 'animate-left' : '') : ''}
                ${index === 1 ? (flagCenterInView ? 'animate-center' : '') : ''}
                ${index === 2 ? (flagRightInView ? 'animate-right' : '') : ''}
              `}
            >
              <CardContent>
                <FlagTitle>{flag.plan}</FlagTitle>
                <p style={{ padding: '10px 0', color: '#FFF' }}>A partir de:</p>
                <CardPlan>{flag.value}</CardPlan>
                <CardDetails>{flag.details}</CardDetails>
                <hr style={{ width: '100%', border: '1px solid #333' }} />
                <ServicesList>
                  {flag.services.map((service, index) => (
                    <ServiceItemFlag key={index}>{service}</ServiceItemFlag>
                  ))}
                </ServicesList>
              </CardContent>
            </Flag>
          ))}
        </FlagsWrapper>
      </ContainerFlags>
      <FormWrapper>
        <FormContainer ref={formRef}>
          <FormTitle className={formVisible ? 'visible' : ''}>Entre em Contato</FormTitle>
          <Form 
            action="https://formsubmit.co/b79601494f5bb6ab81f2640e897ff29b" method="POST"
            >
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
              Enviar
            </SubmitButton>
          </Form>
        </FormContainer>
      </FormWrapper>
      <Footer />
    </ContactWrapper>
  );
};

export default Contact;
