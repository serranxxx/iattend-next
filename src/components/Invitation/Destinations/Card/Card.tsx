import { useEffect, useRef, useState } from "react";
import { NewInvitation } from "@/types/new_invitation";
import styles from "./card.module.css";
import { Button } from "antd";
import magazine from "@/assets/textures/magzne.png";
import Image from "next/image";
import { darker, lighter } from "@/helpers/functions";
import { useFitText } from "./useFitText";

type CardProps = {
  invitation: NewInvitation;
};

export default function Card({ invitation }: CardProps) {
  const content = invitation.destinations;

  const slice = 6

  // AHORA hasta 6
  const visibleCards = content.cards.slice(0, slice);
  const total = visibleCards.slice(0, slice).length;

  const primary = invitation.generals.colors.primary ?? "#FFF";
  const secondary = invitation.generals.colors.secondary ?? "#FFF";
  const accent = invitation.generals.colors.accent ?? "#FFF";

  const [frontCard, setFrontCard] = useState<number>(0);
  const [flipped, setFlipped] = useState<boolean>(false);
  const { containerRef, textRef, fontSize } = useFitText({ min: 10, max: 220 });

  // Orden visual (índices del arreglo visible)
  const [order, setOrder] = useState<number[]>(
    () => visibleCards.map((_, i) => i) // ej [0,1,2,...,5]
  );

  const translateType = (type: string) => {
    switch (type) {
      case 'hotel': return 'Hospedajes'
      case 'activitie': return 'Actividades'
      case 'food': return 'Comidas'

      default:
        break;
    }
  }

  const bringToFront = (idx: number) => {
    if (total <= 1) return;
    setOrder((prev) => [idx, ...prev.filter((x) => x !== idx)]);
    setFrontCard(idx);
    setFlipped(false);
  };

  /**
   * Posición genérica en "abanico" para 1–6 cartas.
   * - dx: desplaza lateralmente entre -maxDX y +maxDX
   * - rot: rota entre -maxRot y +maxRot
   * - dy/scale: sutil profundidad
   */
  const BASE_GAP = 40;

  const getPos = (rank: number, total: number) => {
    if (total <= 1) return { dx: 0, dy: 0, rot: 0, scale: 1, z: 2 };

    // índice "ideal" del centro
    const center = (total - 1) / 2;

    // separación horizontal centrada
    const dx = (rank - center) * BASE_GAP;

    // opcional: ligera rotación/escala por profundidad
    const dist = Math.abs(rank - center);
    const rot = 0;              // o por ejemplo: (rank - center) * 2
    const dy = 0;               // puedes usar dist * -2 si quieres una caída sutil
    const scale = 1;            // o 1 - dist * 0.02 para disminuir laterales
    const z = total - rank;     // mantén tu z actual

    return { dx, dy, rot, scale, z };
  };

  return (
    <div
      className="fan_container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        height: 420,
        minWidth: "100vw",
        padding: "0 24px",
        marginTop: -20,
      }}
    >

      <div style={{
        minWidth: '100vw',
        // border: `1px solid ${accent}40`,
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        height: '12px',
        backgroundColor: `${accent}`,
        boxShadow: `0px -8px 36px 12px ${accent}60`,
      }}>

      </div>

      {visibleCards.map((card, i) => {
        const rank = order.indexOf(i);
        const { dx, dy, rot, scale, z } = getPos(rank, total);

        return (
          <div
            key={i}
            className={styles[card.type]}
            onClick={(e) => {
              e.stopPropagation();
              bringToFront(i);
            }}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "6px",
              transform: `translate(-50%) translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${scale})`,
              transformOrigin: "center",
              borderRadius: 4,
              // backgroundColor: lighter(primary, 0.1) ?? "#FFF",
              // background: "transparent",
              zIndex: z,
              transition: "transform .35s ease, z-index .35s ease",
              cursor: total > 1 ? "pointer" : "default",
            }}
          >
            <div className={`${styles.flip_card} ${i === frontCard && flipped ? styles.flipped : ""}`}>
              <div className={styles.flip_inner}>
                <div className={styles.flip_front}>
                  <div
                    className={styles.main_dest_card}
                    style={{
                      border: `1px solid ${accent}10`,
                      backgroundColor:
                        darker(
                          content.background ?
                          content.inverted
                            ? darker(secondary, 0.95) ?? "transparent"
                            : darker(primary, 0.95) ?? "transparent" : darker(secondary, 0.9) ?? "#FFF",
                          invitation.generals.texture == null ? 1 : 1
                          
                        ) ?? "transparent",
                    }}
                  >
                    <div className={styles.dest_text_box}>
                      <span
                        // ref={textRef as any}
                        className={styles.dest_label}
                        // style={{ color: content.inverted ? primary : accent }}
                      >
                        {card.name}
                      </span>
                    </div>

                    {/* {i === frontCard && ( */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlipped((prev) => !prev);
                      }}
                      style={{
                        zIndex: 5,
                        fontSize: "12px",
                        height: "20px",
                        fontWeight: 400,
                        backgroundColor: `${primary}`,
                        backdropFilter: "blur(10px)",
                        boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
                        color: `${accent}99`,
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px'
                      }}
                    >
                      Ver más
                    </Button>
                    {/* )} */}

                    <div className={styles.image_dest_cont} style={{ borderColor: secondary }}>
                      <img
                        src={card.image!}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <span className={styles.card_name_abs}>{translateType(card.type)}</span>

                    {invitation.generals.texture !== null && (
                      <div className={styles.card_texture}>
                        {magazine && (
                          <Image src={magazine} alt="" fill style={{ objectFit: "cover", opacity: 1 }} />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={styles.flip_back}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped((prev) => !prev);
                  }}
                >
                  <div
                    className={styles.main_dest_card}
                    style={{
                      border: `1px solid ${accent}10`,
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "12px",
                      backgroundColor:
                        darker(
                          content.inverted
                            ? darker(secondary, 0.95) ?? "transparent"
                            : darker(primary, 0.95) ?? "transparent",
                          invitation.generals.texture == null ? 1 : 1
                        ) ?? "transparent",
                    }}
                  >
                    <span style={{ color: content.inverted ? primary : accent, fontSize: "16px" }}>
                      <b>Detalles del destino</b>
                    </span>
                    <span style={{ color: content.inverted ? primary : accent, fontSize: "12px" }}>
                      {card.description}
                    </span>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      style={{
                        zIndex: 5,
                        fontSize: "12px",
                        height: "20px",
                        fontWeight: 400,
                        backgroundColor: content.inverted ? primary : accent,
                        backdropFilter: "blur(10px)",
                        boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
                        color: !content.inverted ? primary : accent,
                      }}
                    >
                      Información
                    </Button>

                    {invitation.generals.texture !== null && (
                      <div className={styles.card_texture}>
                        {magazine && (
                          <Image src={magazine} alt="" fill style={{ objectFit: "cover", opacity: 1 }} />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}


    </div>
  );
}