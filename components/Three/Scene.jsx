"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import FloatingShape from "./FloatingShape";

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f7ff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#bc13fe" />

                <Suspense fallback={null}>
                    <FloatingShape position={[4, 2, 0]} color="#00f7ff" type="torus" />
                    <FloatingShape position={[-4, -2, 2]} color="#bc13fe" type="icosahedron" />
                    <FloatingShape position={[-2, 3, -2]} color="#ff0080" type="sphere" />
                    <Environment preset="city" />
                </Suspense>

                <ContactShadows
                    position={[0, -4, 0]}
                    opacity={0.4}
                    scale={20}
                    blur={2.4}
                    far={4.5}
                />
            </Canvas>
        </div>
    );
}
