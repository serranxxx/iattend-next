"use client";

import React, { useRef, useState } from "react";
import styles from "./wallet.module.css";
import { NewInvitation } from "@/types/new_invitation";

type CardProps = {
  invitation: NewInvitation;
  dev?: boolean;
};

export default function Wallet({ invitation, dev = false }: CardProps) {
  const base = [4, 50, 100];                // offsets base
  const [bottoms, setBottoms] = useState<number[]>(base);
  const [movedIndex, setMovedIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const accent = invitation.generals?.colors?.accent ?? "#FFFFFF";

  const handleClick = (index: number) => {
    if (movedIndex === index) {
      setBottoms(base);
      setMovedIndex(null);
      return;
    }
    // ⬆ salto responsivo según alto del contenedor
    const h = ref.current?.clientHeight ?? 340;
    const jump = Math.max(160, Math.min(600, h - 10)); // 160–260 aprox
    const next = [...base];
    next[index] = jump;
    setBottoms(next);
    setMovedIndex(index);
  };

  return (
    <div
      ref={ref}
      className={styles.wallet}
      style={{ background: accent, transform:'scale(0.8)' }}
    >
      <div
        className={`${styles.card} ${styles.card1}`}
        style={{ bottom: `${bottoms[0]}px` }}
        onClick={() => handleClick(0)}
      />
      <div
        className={`${styles.card} ${styles.card2}`}
        style={{ bottom: `${bottoms[1]}px` }}
        onClick={() => handleClick(1)}
      />
      <div
        className={`${styles.card} ${styles.card3}`}
        style={{ bottom: `${bottoms[2]}px` }}
        onClick={() => handleClick(2)}
      />

      {/* Lines debajo y sin eventos */}
      <div style={{ background: accent }} className={`${styles.department} ${styles.one}`} />
      <div style={{ background: accent }} className={`${styles.department} ${styles.two}`} />
      <div style={{ background: accent }} className={`${styles.department} ${styles.three}`} />

      {/* <span className={styles.logo}>WALLET</span> */}
    </div>
  );
}