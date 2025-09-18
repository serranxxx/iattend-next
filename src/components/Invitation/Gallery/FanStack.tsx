// FanStack.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type FanStackProps = {
    images: string[];
    size?: number;      // lado mayor de la tarjeta
    radius?: number;    // border-radius
    maxFanDeg?: number; // amplitud máxima de rotación (±)
    gap?: number;       // desplazamiento entre cartas (px)
};

export default function FanStack({
    images,
    size = 320,
    radius = 24,
    maxFanDeg = 14,
    gap = 14,
}: FanStackProps) {
    // centro “conceptual” del abanico
    const n = images.length;
    const mid = (n - 1) / 2;

    const [onScroll, setOnScroll] = useState<boolean>(false)
    const [handleImages, setHandleImages] = useState<string[]>([])


    useEffect(() => {
        if (onScroll) {
            setHandleImages(images)
        } else {
            setHandleImages(images.slice(0,3))
        }
      }, [onScroll])
    

    return (
        <div
            onClick={() => setOnScroll(!onScroll)}
            className={onScroll ? "fan_container_active" : "fan_container"}
            style={{
                position: "relative",
                width: "100%",
                maxWidth:'100vw',
                height:'360px',
                minWidth:'100vw',
                padding:'0px 24px',
                marginTop:'-30px',
                // overflowY:'auto'
                // maxWidth: size + 40,
                // aspectRatio: "1 / 1",
                // margin: "0 auto",
            }}
        >
            {handleImages.map((src, i) => {
                // ángulo repartido de -maxFanDeg a +maxFanDeg
                // Control manual de posición para hasta 4 imágenes
                let dx = 0;
                let dy = 0;
                let rot = 0;
                let scale = 1;

                if (i === 1) {
                    dx = -80; // izquierda
                    dy = 10;
                    rot = -20;
                    scale = 0.9;
                } else if (i === 2) {
                    dx = 80; // derecha
                    dy = 10;
                    rot = 20;
                    scale = 0.9;
                } 

                // else if (i === 3) {
                //     dx = 40; // derecha
                //     dy = -10;
                //     rot = 30;
                //     scale = 0.9;
                // } 


                // z-index: la de arriba (centro) al frente
                // const z = Math.round((1 - Math.abs(t)) * 100) + i;
                const z = images.length - i;

                return (
                    <div
                        key={i}
                        className="fan_card"
                        style={{
                            position: onScroll ? "static" : "absolute",
                            left: onScroll ? '' : "50%",
                            top:onScroll ? '' :  "50%",
                            minWidth: onScroll ? '200px' : '',
                            width: 200,
                            height: 280, // proporción 4:3; ajusta a tu gusto
                            transform: onScroll ? '' : `translate(-50%, -50%) translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${scale})`,
                            transformOrigin: "center",
                            borderRadius: radius,
                            overflow: "hidden",
                            boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.25), 0 0 8px 0 rgba(134, 134, 134, 0.45) inset",
                            background: "#e9ecef",
                            zIndex: z,
                            transition: "all 0.35s ease",
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            // fill
                            loading="lazy"
                            style={{
                                width:'100%',
                                height:'100%',
                                objectFit: "cover",
                                // display: "block",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}