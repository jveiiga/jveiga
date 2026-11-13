
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Environment,
    MeshTransmissionMaterial,
    Sparkles,
} from "@react-three/drei";

const OrbitalObject = ({ mouse, progress }) => {
    const groupRef = useRef();
    const ringRef = useRef();
    const secondRingRef = useRef();
    const sparklesRef = useRef();

    const scenes = [
        // Home
        {
            x: 2.0,
            y: 0,
            scale: 1,
            rx: 0,
            ry: 0,
            rz: 0,
            camera: 5.5,
        },

        // Agency
        {
            x: -1.25,
            y: -0.2,
            scale: 2.8,
            rx: 0.45,
            ry: -0.7,
            rz: 0.35,
            camera: 5.8,
        },

        // SEO
        {
            x: 1.4,
            y: 0.25,
            scale: 1.9,
            rx: -0.4,
            ry: 0.8,
            rz: -0.5,
            camera: 5.5,
        },

        // Social
        {
            x: 1.5,
            y: -0.3,
            scale: 1.3,
            rx: 0.5,
            ry: 1.4,
            rz: 0.7,
            camera: 5.8,
        },

        // Marketing
        {
            x: 1.3,
            y: 0.2,
            scale: 0.9,
            rx: -0.3,
            ry: 2,
            rz: 0.2,
            camera: 6,
        },

        // Footer
        {
            x: 0,
            y: 0.1,
            scale: 0.65,
            rx: 0.2,
            ry: 2.5,
            rz: -0.3,
            camera: 6.2,
        },
    ];

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const elapsed = state.clock.elapsedTime;

        const currentProgress = Math.max(
            0,
            Math.min(progress.current, scenes.length - 1)
        );

        // Desaparecimento gradual ao chegar ao Footer
        const footerFade = Math.max(
            0,
            Math.min(1, (5 - currentProgress) / 0.35)
        );

        const index = Math.min(
            Math.floor(currentProgress),
            scenes.length - 2
        );

        const rawTransition = currentProgress - index;

        const transition =
            rawTransition * rawTransition *
            (3 - 2 * rawTransition);

        const scrollRotation = currentProgress * Math.PI * 2;

        const from = scenes[index];
        const to = scenes[index + 1];

        const interpolate = (start, end) =>
            start + (end - start) * transition;

        const targetX = interpolate(from.x, to.x);
        const targetY = interpolate(from.y, to.y);
        const targetScale = interpolate(from.scale, to.scale);

        const targetRotationX = interpolate(from.rx, to.rx);
        const targetRotationY = interpolate(from.ry, to.ry);
        const targetRotationZ = interpolate(from.rz, to.rz);
        const targetCamera = interpolate(from.camera, to.camera);

        // Movimento autônomo
        const floatingY = Math.sin(elapsed * 0.7) * 0.045;
        const floatingX = Math.cos(elapsed * 0.5) * 0.035;

        // Sensibilidade e suavização
        const mouseSensitivity = 1.2;
        const smoothSpeed = 1 - Math.exp(-delta * 8);

        // Posição
        groupRef.current.position.x +=
            (
                targetX +
                floatingX +
                mouse.current.x * 0.22 -
                groupRef.current.position.x
            ) * smoothSpeed;

        groupRef.current.position.y +=
            (
                targetY +
                floatingY +
                mouse.current.y * 0.16 -
                groupRef.current.position.y
            ) * smoothSpeed;

        // Escala com desaparecimento gradual no Footer
        const finalScale = targetScale * footerFade;

        groupRef.current.scale.setScalar(
            groupRef.current.scale.x +
            (finalScale - groupRef.current.scale.x) * smoothSpeed
        );

        // Rotação
        groupRef.current.rotation.x +=
            (
                targetRotationX -
                mouse.current.y * mouseSensitivity +
                Math.sin(elapsed * 0.35) * 0.025 -
                groupRef.current.rotation.x
            ) * smoothSpeed;

        groupRef.current.rotation.y +=
            (
                targetRotationY +
                mouse.current.x * mouseSensitivity +
                scrollRotation * 0.35 -
                groupRef.current.rotation.y
            ) * smoothSpeed;

        groupRef.current.rotation.z +=
            (
                targetRotationZ +
                scrollRotation * 0.2 -
                groupRef.current.rotation.z
            ) * smoothSpeed;

        // Movimento independente dos anéis
        if (ringRef.current) {
            ringRef.current.rotation.y += delta * 0.35;
            ringRef.current.rotation.z += delta * 0.12;
        }

        if (secondRingRef.current) {
            secondRingRef.current.rotation.x += delta * 0.22;
            secondRingRef.current.rotation.y -= delta * 0.16;
        }

        // Desaparecimento dos elementos luminosos
        if (sparklesRef.current) {
            sparklesRef.current.visible = footerFade > 0.01;
            sparklesRef.current.material.opacity = 0.5 * footerFade;
        }

        // Perspectiva da câmera
        state.camera.position.z +=
            (targetCamera - state.camera.position.z) * smoothSpeed;

        state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <group ref={groupRef}>
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
                <mesh ref={ringRef} rotation={[1.1, 0.3, 0.2]}>
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
                <mesh ref={secondRingRef} rotation={[0.3, 1.2, 0.8]}>
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

            {/* PARTÍCULAS */}
            <Sparkles
                ref={sparklesRef}
                count={70}
                scale={5}
                size={1.5}
                speed={0.2}
                opacity={0.5}
                color="#8bcaff"
            />
        </>
    );
};

const SharedOrbitalScene = ({ mouse, progress }) => {
    return (
        <div className="pointer-events-none fixed inset-0 z-[5]">
            <Canvas
                style={{ pointerEvents: "none" }}
                camera={{ position: [0, 0, 5.5], fov: 55 }}
                dpr={[1, 1.5]}
                gl={{
                    alpha: true,
                    antialias: true,
                    powerPreference: "high-performance",
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor("#000000", 0);
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

                    <OrbitalObject
                        mouse={mouse}
                        progress={progress}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default SharedOrbitalScene;
