import { useState } from "react";
import { NewInvitation } from "@/types/new_invitation";
import styles from "./card.module.css";
import { Button } from "antd";
import { MdArrowOutward } from "react-icons/md";
import magazine from "@/assets/textures/magzne.png";
import Image from "next/image";
import { darker } from "@/helpers/functions";
import { useFitText } from "./useFitText";

type CardProps = {
  invitation: NewInvitation;
};

export default function Card({ invitation }: CardProps) {
  const content = invitation.destinations;
  const total = content.cards.slice(0, 3).length;

  const primary = invitation.generals.colors.primary ?? "#FFF";
  const secondary = invitation.generals.colors.secondary ?? "#FFF";
  const accent = invitation.generals.colors.accent ?? "#FFF";
  const [frontCard, setFrontCard] = useState<number>(0)
  const [flipped, setFlipped] = useState<boolean>(false);
  const { containerRef, textRef, fontSize } = useFitText({ min: 10, max: 220 });

  // orden visual (índices del arreglo original)
  const [order, setOrder] = useState<number[]>(
    () => content.cards.map((_, i) => i) // ej [0,1,2,...]
  );

  const bringToFront = (idx: number) => {
    if (total <= 1) return; // con una carta no hay reorden
    setOrder((prev) => [idx, ...prev.filter((x) => x !== idx)]);
    setFrontCard(idx)
    setFlipped(false)
  };

  const getPos = (rank: number) => {
    if (total === 1) {
      // Solo una carta, centrada
      return { dx: 0, dy: 0, rot: 0, scale: 1, z: 2 };
    }

    if (total === 2) {
      // Dos cartas: -30 y +30
      if (rank === 0) return { dx: -30, dy: 0, rot: 0, scale: 1, z: 2 };
      if (rank === 1) return { dx: 30, dy: 0, rot: 0, scale: 1, z: 1 };
    }

    // 3 o más → abanico normal
    if (rank === 0) return { dx: -40, dy: 0, rot: 0, scale: 1, z: 4 }; // izquierda
    if (rank === 1) return { dx: 0, dy: 0, rot: 0, scale: 1, z: 3 }; // centro
    if (rank === 2) return { dx: 40, dy: 0, rot: 0, scale: 1, z: 2 }; // derecha

    // restantes apiladas detrás
    const depth = Math.min(rank - 2, 4);
    return { dx: 0, dy: depth * 2, rot: 0, scale: 0.96, z: 1 };
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
      {content.cards.map((card, i) => {
        const rank = order.indexOf(i);
        const { dx, dy, rot, scale, z } = getPos(rank);

        return (
          <div
            key={i}
            className="fan_card"
            onClick={(e) => {
              e.stopPropagation();
              bringToFront(i);
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 170,
              height: 340,
              transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${scale})`,
              transformOrigin: "center",
              borderRadius: 4,
              // overflow: "hidden",

              background: "transparent",
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
                      backgroundColor: darker(content.inverted ? darker(secondary, 0.95) ?? "transparent" : darker(primary, 0.95) ?? "transparent", invitation.generals.texture == null ? 1 : 1) ?? "transparent",
                    }}
                  >
                    <div ref={containerRef} className={styles.dest_text_box}>
                      <span
                        ref={textRef as any}
                        className={styles.dest_label} style={{ color: content.inverted ? primary : accent, fontSize }}>
                        {card.name}
                      </span>
                    </div>


                    {
                      i == frontCard &&
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
                        }}
                      >
                        Ver más
                      </Button>
                    }

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

                    <span className={styles.card_name_abs}>{card.name?.slice(0, 10)}</span>

                    {invitation.generals.texture !== null && (
                      <div className={styles.card_texture}>
                        {magazine && <Image src={magazine} alt="" fill style={{ objectFit: "cover", opacity: 1 }} />}
                      </div>
                    )}
                  </div>
                </div>


                <div className={styles.flip_back} onClick={(e) => {
                  e.stopPropagation();
                  setFlipped((prev) => !prev);
                }}>
                  <div
                    className={styles.main_dest_card}
                    style={{
                      border: `1px solid ${accent}10`, alignItems: 'center', justifyContent: 'flex-start',
                      gap: '12px',
                      backgroundColor: darker(content.inverted ? darker(secondary, 0.95) ?? "transparent" : darker(primary, 0.95) ?? "transparent", invitation.generals.texture == null ? 1 : 1) ?? "transparent",
                    }}
                  >
                    <span style={{ color: content.inverted ? primary : accent, fontSize: '16px' }}><b>Detalles del destino</b></span>
                    <span style={{ color: content.inverted ? primary : accent, fontSize: '12px' }}>{card.description}</span>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        // setFlipped((prev) => !prev);
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
                        {magazine && <Image src={magazine} alt="" fill style={{ objectFit: "cover", opacity: 1 }} />}
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
