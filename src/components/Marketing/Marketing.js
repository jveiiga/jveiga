import React, { useEffect, useState } from "react";
import {
  BackgroundImage,
  Button,
  MarketingContent,
  MarketingContentWrapper,
  MarketingSession,
  MarketingWrapper,
  Overlay,
  TitleContent,
} from "./MarketingStyled";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";


const Marketing = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
  
        return () => clearTimeout(timer);
      }
    }, [inView]);

  return (
    <MarketingSession id="gmn">
      <MarketingWrapper id="marketing-wrapper">
        <BackgroundImage
          id="marketin-image"
          src={require("../../assets/images/background/gmn-background.png")}
          alt="Marketing Background"
        />
        <Overlay />
        <MarketingContentWrapper>
          <MarketingContent ref={ref} className={inView ? "animate" : ""}>
            <TitleContent>
              <strong>Perfil de Negócios</strong>
              <h2>&nbsp;Google</h2>
            </TitleContent>
            <p>
              Visibilidade para sua empresa de forma certa, alcance resultados
              lucrativos.
            </p>
            <Button
              as={Link}
              to="/marketing-detail"
              className={isVisible ? "animate" : ""}
            >
              Saber Mais
            </Button>
          </MarketingContent>
        </MarketingContentWrapper>
      </MarketingWrapper>
    </MarketingSession>
  );
};

export default Marketing;
