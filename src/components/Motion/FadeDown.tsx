"use client";

import { motion } from "motion/react";

type FadeDownProps = {
  children: React.ReactNode;
  zIndex?: number; // 👈 z-index opcional
  duration: number
};

export default function FadeDown({ children, zIndex = 1, duration }: FadeDownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}           // empieza arriba y transparente
      whileInView={{ opacity: 1, y: 320 }}         // baja y aparece
      transition={{ duration: duration + 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ position: "relative", zIndex }}   // 👈 aplica el z-index recibido
    >
      {children}
    </motion.div>
  );
}