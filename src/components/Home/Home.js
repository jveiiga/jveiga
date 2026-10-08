import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  HomeSession,
  HomeWrapper,
  Overlay,
  HomeContent,
  TitleContent,
} from "./HomeStyled";
// import { Link } from 'react-router-dom';

const Home = () => {
  const words = [
    "de sites",
    "de landing pages",
    "de conteúdo para redes sociais",
    "gerenciamento de tráfego pago",
  ];

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDevelopment, setShowDevelopment] = useState(true);
  const [isTypingDevelopment, setIsTypingDevelopment] = useState(false);
  const [developmentText, setDevelopmentText] = useState("Desenvolvimento");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const word = words[wordIndex];

    // Entrando em "gerenciamento de tráfego"
    if (wordIndex === 3 && showDevelopment) {
      const timeout = setTimeout(() => {
        setShowDevelopment(false);
      }, 80);

      return () => clearTimeout(timeout);
    }

    // Voltando para "sites" ou "conteúdo..."
    if (wordIndex !== 3 && !showDevelopment) {
      setShowDevelopment(true);
      setDevelopmentText("");

      return;
    }

    // Digitação de "Desenvolvimento"
    if (isTypingDevelopment) {
      if (developmentText.length < "Desenvolvimento".length) {
        const timeout = setTimeout(() => {
          setDevelopmentText(
            "Desenvolvimento".substring(0, developmentText.length + 1)
          );
        }, 80);

        return () => clearTimeout(timeout);
      }

      setIsTypingDevelopment(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentWord(word.substring(0, currentWord.length + 1));

          if (currentWord === word) {
            setIsDeleting(true);
          }
        } else {
          setCurrentWord(word.substring(0, currentWord.length - 1));

          if (currentWord === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);

            if (wordIndex === 3) {
              setIsTypingDevelopment(true);
            }
          }
        }
      },
      isDeleting ? 50 : currentWord === word ? 1800 : 80
    );

    return () => clearTimeout(timeout);
  }, [
    currentWord,
    isDeleting,
    wordIndex,
    showDevelopment,
    isTypingDevelopment,
    developmentText,
  ]);

  return (
    <HomeContainer>
      <HomeSession id="home">
        <HomeWrapper>
          <Overlay />
          <HomeContent className={isVisible ? "animate" : ""}>
            <TitleContent>
              <strong>{"JVEIGA"}&nbsp;</strong>
            </TitleContent>

            <h1>
              {showDevelopment && developmentText && (
                <span>{developmentText}</span>
              )}{" "}
              <span>{currentWord}</span>
            </h1>
          </HomeContent>
        </HomeWrapper>
      </HomeSession>
    </HomeContainer>
  );
};

export default Home;
