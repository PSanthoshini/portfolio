"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, Float } from "@react-three/drei";

export default function FloatingShape({ position, color, type }) {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = Math.sin(time / 2) / 4;
            mesh.current.rotation.y = Math.cos(time / 2) / 4;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh position={position} ref={mesh}>
                {type === "torus" && <torusKnotGeometry args={[1, 0.3, 128, 16]} />}
                {type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
                {type === "sphere" && <sphereGeometry args={[1, 32, 32]} />}

                <MeshWobbleMaterial color={color} factor={0.6} speed={2} />
            </mesh>
        </Float>
    );
}
