import { CSSProperties } from "react";

type Texture = {
  /** ruta pública dentro de /public */
  image: string; // ej: "/textures/paper.jpg"
  opacity: number;
  blend: CSSProperties["mixBlendMode"];
  filter: CSSProperties["filter"];
  path: string;   // si quieres mantenerlo, puede ser igual que image
};

export const textures: Texture[] = [
  {
    image: "/textures/paper.jpg",
    opacity: 1,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/textures/paper.jpg",
  },
  {
    image: "/textures/pared.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/textures/pared.jpg",
  },
  {
    image: "/textures/paper-2.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/textures/paper-2.jpg",
  },
  {
    image: "/textures/textile.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/textures/textile.jpg",
  },
  {
    image: "/textures/grunge.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/textures/grunge.jpg",
  },
  {
    image: "/textures/crumpled.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "/textures/crumpled.jpg",
  },
  {
    image: "/textures/cotton.jpg",
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1.1) brightness(1)",
    path: "/textures/cotton.jpg",
  },
];