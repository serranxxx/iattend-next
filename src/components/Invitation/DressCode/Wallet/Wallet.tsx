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
  const [movedIndex, setMovedIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [messageApi, contextHolder] = message.useMessage();

  const accent = invitation.generals?.colors?.accent ?? "#FFFFFF";
  const primary = invitation.generals?.colors?.primary ?? "#FFFFFF";
  const secondary = invitation.generals?.colors?.secondary ?? "#FFFFFF";
  const fontFamily = invitation.generals.fonts.body?.typeFace;
  const title = invitation.cover.title.text.value;
  // const cards = invitation.gifts.cards.slice(0, 3);

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
  }, []);

  return (
    <>
      {contextHolder}
      <div ref={ref} className={styles.wallet} style={{ backgroundColor: darker(secondary, 0.9) ?? "#FFF", transform: "scale(0.8)" }}>
        {bottoms.length > 0 &&
          cards?.map((card, index) => (
            <div
              className={`${styles.card} ${styles[classifyGiftCard(card).className]}`}
              style={{
                zIndex: cards.length + 1 - index,
                bottom: `${bottoms[index]}px`,
                padding: movedIndex === index ? "24px" : undefined,
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
        <div style={{ backgroundColor: darker(secondary, 0.9) ?? "#FFF" }} className={`${styles.department} ${styles.one}`}>
          <div className={styles.wallet_col} style={{ fontFamily: fontFamily, color: accent }}>
            <span className={styles.wallet_label}>{title}</span>
            <span className={styles.wallet_sec_label}>Tarjetas de regalo</span>
          </div>
        </div>
      </div>
    </>
  );
}
