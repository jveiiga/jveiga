
import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

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
// OBJETO 3D
// ==========================================

const OrbitalObject = ({ mouse }) => {
  const groupRef = useRef();
  const ringRef = useRef();
  const secondRingRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const speed = Math.min(delta * 3, 1);

    // Movimento da composição conforme o mouse
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.55 -
        groupRef.current.rotation.y) * speed;

    groupRef.current.rotation.x +=
      (-mouse.current.y * 0.35 -
        groupRef.current.rotation.x) * speed;

    groupRef.current.position.x +=
      (mouse.current.x * 0.2 -
        groupRef.current.position.x) * speed;

    groupRef.current.position.y +=
      (mouse.current.y * 0.12 -
        groupRef.current.position.y) * speed;

    // Órbitas acompanham a inclinação da composição
    if (ringRef.current) {
      ringRef.current.rotation.y =
        groupRef.current.rotation.y * 0.4;
    }

    if (secondRingRef.current) {
      secondRingRef.current.rotation.x =
        groupRef.current.rotation.x * 0.5;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={window.innerWidth < 768 ? 0.55 : 1}
      position={window.innerWidth < 768 ? [0.8, 0, 0] : [0, 0, 0]}
    >
      {/* ESFERA DE VIDRO */}
      <mesh>
        <sphereGeometry args={[1.2, 128, 128]} />

        <MeshTransmissionMaterial
          transmission={1}
          thickness={1.5}
          roughness={0.025}
          ior={1.45}
          chromaticAberration={0.04}
          anisotropy={0.2}
          distortion={0.12}
          distortionScale={0.15}
          temporalDistortion={0}
          samples={16}
          resolution={1024}
          clearcoat={1}
          clearcoatRoughness={0.02}
          color="#d4eaff"
          attenuationColor="#278cff"
          attenuationDistance={3}
        />
      </mesh>

      {/* NÚCLEO AZUL */}
      <mesh scale={0.42}>
        <icosahedronGeometry args={[1, 2]} />

        <meshPhysicalMaterial
          color="#087cff"
          emissive="#087cff"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* PRIMEIRA ÓRBITA */}
      <mesh
        ref={ringRef}
        rotation={[1.1, 0.3, 0.2]}
      >
        <torusGeometry args={[1.7, 0.009, 16, 160]} />

        <meshStandardMaterial
          color="#72c3ff"
          emissive="#087cff"
          emissiveIntensity={2}
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* SEGUNDA ÓRBITA */}
      <mesh
        ref={secondRingRef}
        rotation={[0.3, 1.2, 0.8]}
      >
        <torusGeometry args={[1.95, 0.012, 16, 160]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#168bff"
          emissiveIntensity={2}
          metalness={1}
        />
      </mesh>

      {/* ELEMENTOS ORBITAIS */}
      <mesh position={[1.6, 0.8, 0.4]}>
        <sphereGeometry args={[0.07, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh position={[-1.7, -0.6, 0.3]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshBasicMaterial color="#168bff" />
      </mesh>

      <mesh position={[0.4, -1.8, 0.2]}>
        <sphereGeometry args={[0.045, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

// ==========================================
// CENA 3D
// ==========================================

const ThreeDimensionalScene = ({ mouse }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 1, 2]}
        intensity={5}
        color="#087cff"
      />

      <pointLight
        position={[2, -3, -2]}
        intensity={4}
        color="#168bff"
      />

      <Suspense fallback={null}>
        <Environment preset="city" />

        <OrbitalObject mouse={mouse} />

        <Sparkles
          count={70}
          scale={5}
          size={1.5}
          speed={0.2}
          opacity={0.5}
          color="#8bcaff"
        />
      </Suspense>
    </Canvas>
  );
};

// ==========================================
// HOME
// ==========================================

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Referência compartilhada com a cena 3D
  const mouse = useRef({ x: 0, y: 0 });

  // Entrada da Home
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Efeito de digitação
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

  // Movimento global do mouse
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouse.current = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((event.clientY - rect.top) / rect.height) * 2 - 1),
    };
  };

  const handleMouseLeave = () => {
    mouse.current = { x: 0, y: 0 };
  };

  return (
    <section
      id="home"
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#050609] text-white"
    >
      {/* ================================== */}
      {/* FOTOGRAFIA DE FUNDO */}
      {/* ================================== */}

      <img
        src={homeBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain object-[center_-25%] opacity-90"
      />

      {/* CAMADA ESCURA */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/45" />

      {/* GRADIENTE PRINCIPAL */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#050609]/95 via-[#050609]/70 to-[#050609]/35" />

      {/* ILUMINAÇÃO AZUL */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_75%_50%,rgba(0,105,255,0.20),transparent_50%)]" />

      {/* TEXTURA */}
      <div className="pointer-events-none absolute inset-0 z-[3] opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* ================================== */}
      {/* COMPOSIÇÃO 3D */}
      {/* ================================== */}

      <div className="pointer-events-none absolute inset-y-0 right-0 z-[4] h-full w-full translate-x-12 md:w-[65%] md:translate-x-24">
        <ThreeDimensionalScene mouse={mouse} />
      </div>


      {/* ================================== */}
      {/* CONTEÚDO */}
      {/* ================================== */}

      <div
        className={`relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-6 py-32 transition-all duration-1000 sm:px-10 lg:px-16 ${isVisible
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
            <h1 className="max-w-2xl text-3xl font-light leading-tight tracking-tight sm:text-5xl lg:text-3xl">
              <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
                {displayText}
              </span>

              <span className="ml-1 inline-block h-8 w-[2px] animate-pulse bg-blue-500 align-middle sm:h-12" />
            </h1>
          </div>

          {/* DESCRIÇÃO */}
          <p className="max-w-lg text-sm leading-7 text-white/60 sm:text-base">
            Desenvolvemos soluções digitais que conectam tecnologia,
            estratégia e criatividade para fortalecer marcas e
            impulsionar negócios.
          </p>

          {/* BOTÕES */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
          </div>

          {/* INDICADOR DE SCROLL */}
          <div className="mt-16 hidden items-center gap-4 sm:flex">
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
      <div className="pointer-events-none absolute bottom-10 right-10 z-10 hidden lg:block">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
          Digital experiences · JVEIGA
        </span>
      </div>

      {/* LINHA INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
    </section>
  );
};

export default Home;
