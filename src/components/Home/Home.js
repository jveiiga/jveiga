
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

import homeBackground from "../../assets/images/background/myimage-background.png";

// ==========================================
// TEXTOS DINÂMICOS
// ==========================================

const servicePhrases = [
  "Desenvolvimento de sites",
  "Desenvolvimento de landing pages",
  "Criação de automações",
  "Conteúdo para redes sociais",
  "Gestão de tráfego pago",
];

// ==========================================
// HOME
// ==========================================

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null);

  // PROGRESSO DO SCROLL
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ZOOM DO BACKGROUND
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 1.12, 1.2]
  );

  // OPACIDADE DO BACKGROUND
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [1, 1, 0]
  );

  // OPACIDADE DO CONTEÚDO
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [1, 1, 0]
  );

  // ENTRADA DA HOME
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // EFEITO DE DIGITAÇÃO
  useEffect(() => {
    const currentPhrase = servicePhrases[wordIndex];
    let timeout;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % servicePhrases.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }, isDeleting ? 35 : 65);
    }

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, isDeleting]);

  return (
    <>
      {/* ================================== */}
      {/* BACKGROUND GLOBAL DA HOME */}
      {/* ================================== */}

      {createPortal(
        <motion.div
          style={{ opacity: backgroundOpacity }}
          className="pointer-events-none fixed inset-0 z-[4] overflow-hidden"
        >
          <motion.div
            style={{ scale: heroScale }}
            className="absolute inset-0"
          >
            {/* FOTOGRAFIA */}
            <img
              src={homeBackground}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-contain object-[center_-25%] opacity-90"
            />

            {/* CAMADA ESCURA */}
            <div className="absolute inset-0 z-[1] bg-black/25" />

            {/* GRADIENTE PRINCIPAL */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050609]/95 via-[#050609]/70 to-[#050609]/35" />

            {/* ILUMINAÇÃO AZUL */}
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_75%_50%,rgba(0,105,255,0.20),transparent_50%)]" />

            {/* TEXTURA */}
            <div className="absolute inset-0 z-[3] opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:70px_70px]" />
          </motion.div>
        </motion.div>,
        document.body
      )}

      {/* ================================== */}
      {/* ESTRUTURA DA HOME */}
      {/* ================================== */}

      <section
        ref={containerRef}
        className="relative h-[180vh] w-full"
      >
        <div className="sticky top-0 z-[6] h-[100svh] w-full overflow-hidden bg-transparent text-white">

          {/* ================================== */}
          {/* CONTEÚDO COM TRANSIÇÃO */}
          {/* ================================== */}

          <motion.div
            style={{ opacity: contentOpacity }}
            className="absolute inset-0"
          >
            <div
              className={`relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-6 py-32 transition-all duration-1000 sm:px-10 lg:px-16 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <div className="w-full max-w-2xl">

                {/* IDENTIFICAÇÃO */}
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-red-500" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400 sm:text-xs">
                    Estratégia · Tecnologia · Presença digital
                  </span>
                </div>

                {/* MARCA */}
                <div className="mb-5">
                  <span className="text-5xl font-black tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                    JVEIGA<span className="text-[#CB342B]">.</span>
                  </span>
                </div>

                {/* TÍTULO DINÂMICO */}
                <div className="min-h-[110px] sm:min-h-[145px]">
                  <h1 className="w-[65%] max-w-2xl text-3xl font-light leading-tight tracking-tight sm:text-5xl lg:text-5xl">
                    <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
                      {displayText}
                    </span>

                    <span className="ml-1 inline-block h-8 w-[2px] animate-pulse bg-blue-500 align-middle sm:h-12" />
                  </h1>
                </div>

                {/* DESCRIÇÃO */}
                <p className="w-[75%] md:max-w-lg text-sm md:text-xl leading-7 text-white/60 sm:text-base">
                  Desenvolvemos soluções digitais que conectam tecnologia,
                  estratégia e criatividade para fortalecer marcas e
                  impulsionar negócios.
                </p>

                {/* BOTÕES */}
                {/* <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#desenvolvimento-de-sites"
                    className="group inline-flex items-center gap-3 bg-blue-600 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-500"
                  >
                    Conheça nossas soluções

                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                  >
                    Fale conosco
                  </Link>
                </div> */}

                {/* INDICADOR DE SCROLL */}
                <div className="mt-16 items-center gap-4 sm:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                    <FaChevronDown className="animate-bounce text-xs text-blue-400" />
                  </div>

                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">
                    Explore nossas soluções
                  </span>
                </div>
              </div>
            </div>

            {/* IDENTIFICAÇÃO LATERAL */}
            <div className="pointer-events-none absolute bottom-10 right-10 hidden lg:block">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
                Digital experiences · JVEIGA
              </span>
            </div>

            {/* LINHA INFERIOR */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
