"use client"

import { darker, lighter } from "@/helpers/functions";
import Image from "next/image";
import React, { useEffect } from "react";
import { forwardRef } from "react";
import styles from "./cover.module.css";
import { NewInvitation } from "@/types/new_invitation";
import Countdown from "./countDown/CountDown";
import ConfettiButton from "./Confetti/Confetti";

type CoverProps = {
  dev: boolean;
  invitation: NewInvitation | null;
  height: string;
};

export const Cover = forwardRef<HTMLDivElement, CoverProps>(function Cover({ dev, invitation, height }, ref) {
  const cover = invitation?.cover;
  const generals = invitation?.generals;
  const image_src = dev ? cover?.image.dev : cover?.image.prod;

  useEffect(() => {
    if (invitation) {
      console.log(invitation.cover)
    }
  }, [])
  

  return (
    invitation && (
      <div ref={ref} className={styles.module_cover_container} style={{ position: "relative", zIndex: 3 }}>
        <div
          className={!dev ? styles.cover_container : styles.cover_container_dev}
          style={{
            height: "100dvh",
            padding: "0",
            minHeight: "100dvh",
            maxHeight: "100dvh",
            background: generals?.colors.primary ?? "#FFFFFF",
          }}
        >
          {cover?.image.dev || cover?.image.prod ? (
            <div
              className={styles.cover_image_container}
              style={{
                top: `${cover.image.position.y ?? 0}px`,
                left: `${cover.image.position.x ?? 0}px`,
                 transform: `scale(${cover.image.zoom ?? 1})`,
                 position:'relative'
              }}
            >
              {image_src && <img style={{ objectFit: "cover", width:'100%', height:'100%'}} loading="lazy" decoding="async" alt="" src={image_src} />}

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
                <ConfettiButton />
                <Countdown cover={cover} generals={generals} dev={dev} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
});
