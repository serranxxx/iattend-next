import { useState } from "react";
import { NewInvitation } from "@/types/new_invitation";
import styles from "./card.module.css";
import { Button } from "antd";
import { MdArrowOutward } from "react-icons/md";
import magazine from "@/assets/textures/magzne.png";
import Image from "next/image";

type CardProps = {
  invitation: NewInvitation;
};

export default function Card({ invitation }: CardProps) {
  const content = invitation.destinations;
  const total = content.cards.slice(0, 3).length;

  const primary = invitation.generals.colors.primary ?? "#FFF";
  const secondary = invitation.generals.colors.secondary ?? "#FFF";
  const accent = invitation.generals.colors.accent ?? "#FFF";

  // orden visual (índices del arreglo original)
  const [order, setOrder] = useState<number[]>(
    () => content.cards.map((_, i) => i) // ej [0,1,2,...]
  );

  const bringToFront = (idx: number) => {
    if (total <= 1) return; // con una carta no hay reorden
    setOrder((prev) => [idx, ...prev.filter((x) => x !== idx)]);
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
              overflow: "hidden",
              boxShadow: "4px 2px 6px rgba(0,0,0,0.25)",
              background: "#e9ecef",
              zIndex: z,
              transition: "transform .35s ease, z-index .35s ease",
              cursor: total > 1 ? "pointer" : "default",
            }}
          >
            <div
              className={styles.main_dest_card}
              style={{
                backgroundColor: primary,
              }}
            >
              <span className={styles.dest_label} style={{ color: accent }}>
                {card.name}
              </span>

              <Button
                style={{
                  zIndex: 5,
                  fontSize: "12px",
                  height: "20px",
                  fontWeight: 400,
                  backgroundColor: `${primary}80`,
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
                  color: `${accent}99`,
                  width: "100%",
                }}
              >
                Información
              </Button>

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

              <span className={styles.card_name_abs}>{card.name}</span>

              <div className={styles.card_texture}>
                {magazine && <Image src={magazine} alt="" fill style={{ objectFit: "cover", opacity: 1 }} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
