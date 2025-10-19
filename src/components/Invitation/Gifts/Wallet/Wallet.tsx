"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./wallet.module.css";
import { GiftCard, NewInvitation } from "@/types/new_invitation";
import { darker } from "@/helpers/functions";
import Image from "next/image";
import { classifyGiftCard } from "./classifyGiftCard";
import { Button, message } from "antd";
import { MdArrowOutward } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

type CardProps = {
  invitation: NewInvitation;
  dev?: boolean;
};

export default function Wallet({ invitation, dev = false }: CardProps) {
  // const base = [14, 54, 94]; // offsets base
  const [base, setBase] = useState<number[]>([]);
  const [bottoms, setBottoms] = useState<number[]>([]);
  const [cards, setCards] = useState<GiftCard[] | null>(null);
  // const [movedIndex, setMovedIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [messageApi, contextHolder] = message.useMessage();

  const content = invitation.gifts;
  const accent = invitation.generals?.colors?.accent ?? "#FFFFFF";
  const primary = invitation.generals?.colors?.primary ?? "#FFFFFF";
  const secondary = invitation.generals?.colors?.secondary ?? "#FFFFFF";
  const fontFamily = invitation.generals.fonts.body?.typeFace;
  const title = invitation.cover.title.text.value;

  const ANIM_MS = 250; // duración de cada fase
  const SCALE_UP = 1.2; // escala al abrir
  const DOWN_PX = 50; // “bajar” después de subir

  const [movedIndex, setMovedIndex] = useState<number | null>(null); // ya lo tienes
  const [isScaled, setIsScaled] = useState(false); // NUEVO
  // const cards = invitation.gifts.cards.slice(0, 3);

  const handleClick = (index: number) => {
    // Si click sobre la misma tarjeta -> cerrar (secuencia inversa)
    if (movedIndex === index) {
      // 1) Sube: quita la bajada y el scale
      setIsScaled(false); // quita scale y el translateY(50px)
      // 2) Tras la animación, regresa a base y z-index original
      setTimeout(() => {
        setBottoms(base);
        setMovedIndex(null);
      }, ANIM_MS);
      return;
    }

    // Si había otra abierta, primero ciérrala y luego abre la nueva
    if (movedIndex !== null && movedIndex !== index) {
      setIsScaled(false);
      setTimeout(() => {
        setBottoms(base);
        setMovedIndex(null);
        // abre la nueva después de cerrar la previa
        setTimeout(() => handleClick(index), ANIM_MS);
      }, ANIM_MS);
      return;
    }

    // Abrir la tarjeta seleccionada
    const h = ref.current?.clientHeight ?? 340;
    const jump = Math.max(160, Math.min(600, h - 10)); // tu cálculo actual
    const next = [...base];
    next[index] = jump; // 1) Sube
    setBottoms(next);
    setMovedIndex(index);

    // 2) Después de subir, aplica scale y “bajada” visual
    setTimeout(() => {
      setIsScaled(true);
    }, ANIM_MS);
  };

  const handleReset = () => {
    if (movedIndex !== null) {
      setIsScaled(false);
      setTimeout(() => {
        setBottoms(base);
        setMovedIndex(null);
      }, ANIM_MS);
    }
  };

  const copyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      messageApi.info("Número de cuenta copiado");
    } catch (err) {
      console.error("Error al copiar el texto: ", err);
    }
  };

  useEffect(() => {
    if (invitation) {
      const sliced = invitation.gifts.cards.slice(0, 3);
      switch (sliced.length) {
        case 1:
          setBase([94]);
          break;

        case 2:
          setBase([54, 94]);
          break;

        case 3:
          setBase([14, 54, 94]);
          break;

        default:
          break;
      }
    }
  }, [invitation]);

  useEffect(() => {
    if (base) {
      setBottoms(base);
    }
  }, [base]);

  useEffect(() => {
    if (invitation) {
      setCards(invitation.gifts.cards.slice(0, 3));
    }
  }, [invitation]);

  return (
    <>
      {contextHolder}
      <div
        ref={ref}
        className={invitation.generals.texture !== null ? styles.wallet : styles.wallet_light}
        style={{
          backgroundColor:
            darker(content.background ? (content.inverted ? primary : secondary) : content.inverted ? secondary : primary, 0.95) ?? "#FFF",
          transform: "scale(0.7)",
        }}
      >
        {bottoms.length > 0 &&
          cards?.map((card, index) => (
            <div
              className={`${styles.card} ${styles[classifyGiftCard(card).className]}`}
              style={{
                zIndex: movedIndex === index ? 12 : cards.length + 1 - index, // z-index 12 si activa
                bottom: `${bottoms[index]}px`,
                padding: movedIndex === index ? "24px" : undefined,
                border: `1px solid ${accent}10`,
                transition: "bottom 250ms ease, transform 250ms ease",
                // cuando está activa: escala y “bajar” 50px visualmente
                transform:
                  movedIndex === index
                    ? isScaled
                      ? `scale(${SCALE_UP}) translateY(${DOWN_PX}px)`
                      : "scale(1) translateY(0)"
                    : "scale(1) translateY(0)",
                transformOrigin: "center bottom", // para que “crezca” hacia arriba
              }}
              onClick={() => handleClick(index)}
            >
              <div
                className={styles.card_logo_container}
                style={{
                  height: movedIndex === index ? "24px" : undefined,
                }}
              >
                <img src={classifyGiftCard(card).imageUrl ?? ""} alt="" style={{ height: "100%", objectFit: "cover" }} />
              </div>

              {card.kind === "store" ? (
                <div className={styles.wallet_col} style={{ gap: "6px" }}>
                  <span>Descubre nuestra mesa de regalos</span>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(card.url!, "_blank");
                    }}
                    className={styles.cta_button}
                    icon={<MdArrowOutward />}
                  >
                    Ver regalos
                  </Button>
                </div>
              ) : (
                <div className={styles.wallet_col} style={{ gap: "6px" }}>
                  <span>{card.name}</span>
                  <span>
                    {card.number}{" "}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation(); // evita que se dispare el onClick del padre
                        copyToClipboard(card.number!); // o usa router.push si es interno
                      }}
                      icon={<FaCopy style={{ color: "#FFF" }} />}
                      type="text"
                    />
                  </span>
                </div>
              )}
              {/* <span className={`${styles.bank_name}`}>
            
          </span> */}
            </div>
          ))}

        {/* Lines debajo y sin eventos */}
        <div
          onClick={handleReset}
          style={{
            backgroundColor:
              darker(content.background ? (content.inverted ? primary : secondary) : content.inverted ? secondary : primary, 0.95) ??
              "#FFF",
            borderColor: content.inverted ? `${accent}60` : `${primary}60`,
          }}
          className={`${invitation.generals.texture !== null ? styles.department : styles.department_light} ${styles.one}`}
        >
          <div className={styles.wallet_col} style={{ fontFamily: fontFamily }}>
            <span
              style={{ color: content.background ? (content.inverted ? accent : primary) : content.inverted ? primary : accent }}
              className={styles.wallet_label}
            >
              {title}
            </span>
            <span
              style={{ color: content.background ? (content.inverted ? accent : primary) : content.inverted ? primary : accent }}
              className={styles.wallet_sec_label}
            >
              Tarjetas de regalo
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
