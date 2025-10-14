import { CSSProperties } from "react";

type Texture = {
  /** ruta pública dentro de /public */
  image: string; // ej: "/textures/paper.jpg"
  opacity: number;
  blend: CSSProperties["mixBlendMode"];
  filter: CSSProperties["filter"];
  path: string; // si quieres mantenerlo, puede ser igual que image
};

export const textures: Texture[] = [
  {
    image: "/assets/textures/paper.jpg",
    opacity: 1,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/assets/textures/paper.jpg",
  },
  {
    image: "/assets/textures/pared.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/assets/textures/pared.jpg",
  },
  {
    image: "/assets/textures/paper-2.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/assets/textures/paper-2.jpg",
  },
  {
    image: "/assets/textures/textile.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/assets/textures/textile.jpg",
  },
  {
    image: "/assets/textures/grunge.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/assets/textures/grunge.jpg",
  },
  {
    image: "/assets/textures/crumpled.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/assets/textures/crumpled.jpg",
  },
  {
    image: "/assets/textures/cotton.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1.1) brightness(1)",
    path: "/assets/textures/cotton.jpg",
  },
];
