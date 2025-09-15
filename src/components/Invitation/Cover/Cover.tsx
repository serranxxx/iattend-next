import { darker, lighter } from "@/helpers/functions";
import Image from "next/image";
import React from "react";
import { forwardRef } from "react";
import styles from "./cover.module.css";
import { NewInvitation } from "@/types/new_invitation";
import Countdown from "./countDown/CountDown";
import { useDeviceTilt } from "./useDeviceTilt";

// 👇 importa tu hook
// ajusta la ruta si es distinta

type CoverProps = {
  dev: boolean;
  invitation: NewInvitation | null;
  height: string;
};

export const Cover = forwardRef<HTMLDivElement, CoverProps>(function Cover({ dev, invitation, height }, ref) {
  const cover = invitation?.cover;
  const generals = invitation?.generals;
  const image_src = dev ? cover?.image.dev : cover?.image.prod;

  // 👇 activa tilt: max desplazamiento en px y suavizado
  const { tilt, requestPermission } = useDeviceTilt(18, 0.3);

  // Profundidad de la capa (qué tanto se mueve la imagen).
  // Ajusta a tu gusto: 0.25 (sutil) → 1.0 (muy notorio)
  const DEPTH = 0.7;

  // Si prefieres respetar "reduce motion", puedes desactivar la transformación:
  const prefersReduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const imageTransform = prefersReduced
    ? "none"
    : `translate3d(${(tilt.x * DEPTH).toFixed(2)}px, ${(tilt.y * DEPTH).toFixed(2)}px, 0) scale(${cover?.image.zoom ?? 1})`;

  return (
    invitation && (
      <div ref={ref} className={styles.module_cover_container} style={{ position: "relative", zIndex: 3 }}>
        <div
          className={!dev ? styles.cover_container : styles.cover_container_dev}
          style={{
            height: height,
            padding: "0",
            minHeight: "630px",
            maxHeight: !dev ? "" : "730px",
            background: generals?.colors.primary ?? "#FFFFFF",
          }}
        >
          {cover?.image.dev && cover.image.prod ? (
            <div
              className={styles.cover_image_container}
              style={{
                top: `${cover.image.position.y ?? 0}px`,
                left: `${cover.image.position.x ?? 0}px`,

                // ❗️ANTES: transform: `scale(${cover.image.zoom ?? 1})`,
                // AHORA: combinamos tilt + zoom:
                transform: imageTransform,

                // Performance y sensación pegajosa al dedo/tilt
                willChange: "transform",
                transition: "transform 0.03s linear",
              }}
            >
              {image_src && <Image fill style={{ objectFit: "cover" }} priority alt="" src={image_src} />}

              {cover.image.background ? (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0px",
                    left: "0px",
                    background: `linear-gradient(to top, ${darker(generals?.colors.primary ?? "#FFFFFF", 0.2)}, rgba(0,0,0,0))`,
                    pointerEvents: "none",
                  }}
                />
              ) : (
                cover.image.blur && <div className={styles.blur_cover} />
              )}
            </div>
          ) : (
            <></>
          )}

          <div
            className={styles.background_cover}
            style={{
              flexDirection: cover?.title.position.column_reverse ?? "column",
            }}
          >
            <div
              className={styles.cover_title_container}
              style={{
                alignItems: cover?.title.position.align_y,
                height: cover?.date.active ? "75%" : "100%",
                padding: cover?.date.active ? 0 : "10px",
              }}
            >
              <span
                style={{
                  color: cover?.title.text.color ?? lighter(generals?.colors.accent ?? "#000000", 0.6) ?? "#FFFFFF",
                  width: "100%",
                  textAlign: cover?.title.position.align_x,
                  fontSize: `${cover?.title.text.size}px`,
                  wordBreak: "break-word",
                  opacity: cover?.title.text.opacity,
                  fontFamily: cover?.title.text.typeFace,
                  fontWeight: cover?.title.text.weight,
                  lineHeight: "1",
                  textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
                  minWidth: "250px",
                }}
              >
                {cover?.title.text.value}
              </span>
            </div>

            {cover?.date.active && (
              <div
                style={{
                  width: "100%",
                  backgroundColor: `transparent`,
                  height: "25%",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "250px",
                }}
              >
                <Countdown cover={cover} generals={generals} dev={dev} />
              </div>
            )}
          </div>
        </div>

        {/* 👇 botón para iOS si hace falta permiso */}
        {tilt.needsPermission && (
          <button
            onClick={requestPermission}
            style={{
              position: "absolute",
              // zIndex: 10,
              right: 12,
              top: 12,
              padding: "8px 12px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              zIndex: 999,
            }}
          >
            Activar movimiento
          </button>
        )}
      </div>
    )
  );
});
