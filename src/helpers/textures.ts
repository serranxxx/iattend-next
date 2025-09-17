import paper from "@/assets/textures/paper.jpg";
import pared from "@/assets/textures/pared.jpg";
import paper2 from "@/assets/textures/paper-2.jpg";
import textile from "@/assets/textures/textile.jpg";
import grunge from "@/assets/textures/grunge.jpg";
import crumpled from "@/assets/textures/crumpled.jpg";
import cotton from "@/assets/textures/cotton.jpg";
import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

type Texture = {
  image: StaticImageData | string;
  opacity: number;
  blend: CSSProperties["mixBlendMode"]; // ← en vez de string
  filter: CSSProperties["filter"]; // ← también tipado
  path: string;
};

export const textures: Texture[] = [
  {
    image: paper,
    opacity: 1,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "@/assets/textures/paper.jpg",
  },

  {
    image: pared,
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "@/assets/textures/paper.jpg",
  },

  {
    image: paper2,
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "@/assets/textures/paper.jpg",
  },

  {
    image: textile,
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "@/assets/textures/paper.jpg",
  },

  {
    image: grunge,
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "@/assets/textures/paper.jpg",
  },

  {
    image: crumpled,
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1) brightness(1)",
    path: "@/assets/textures/paper.jpg",
  },

  {
    image: cotton,
    opacity: 0.5,
    blend: "multiply",
    filter: "grayscale(1) contrast(1.1) brightness(1)",
    path: "@/assets/textures/paper.jpg",
  },
];
