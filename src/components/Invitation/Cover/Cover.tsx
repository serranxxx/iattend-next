import { darker, lighter } from "@/helpers/functions";
import Image from "next/image";
import React, { useState } from "react";
import { forwardRef } from "react";
import styles from "./cover.module.css";
import { NewInvitation } from "@/types/new_invitation";
import Countdown from "./countDown/CountDown";

type CoverProps = {
  dev: boolean;
  invitation: NewInvitation | null;
  height: string;
};

export const Cover = forwardRef<HTMLDivElement, CoverProps>(function Cover({ dev, invitation, height }, ref) {
  //   const [isToday, setIsToday] = useState(false);

  //   const cleanDate = (dateString: string | null) => {
  //     if (dateString) {
  //       if (dateString.endsWith("000Z")) {
  //         return dateString.slice(0, -5);
  //       }
  //       return dateString;
  //     }
  //   };

  //   const checkIfToday = (targetDate: string) => {
  //     const today = new Date();
  //     const target = new Date(targetDate);

  //     // Comparar solo el año, mes y día
  //     return today.getFullYear() === target.getFullYear() && today.getMonth() === target.getMonth() && today.getDate() === target.getDate();
  //   };

  const cover = invitation?.cover;
  const generals = invitation?.generals;
  const image_src = dev ? cover?.image.dev : cover?.image.prod;

  return (
    invitation && (
      <div ref={ref} className={styles.module_cover_container} style={{ position: "relative", zIndex: 3 }}>
        {/* {checkIfToday(cleanDate(content.date)) && <ConfettiComponent palette={colorPalette} />} */}

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
                transform: `scale(${cover.image.zoom ?? 1})`,
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
                  }}
                ></div>
              ) : (
                cover.image.blur && <div className={styles.blur_cover}></div>
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

        {/* {
                    generals.texture !== null &&
                    <div className="image-texture-container">
                        <div className="image-texture-container">
                            {Array.from({ length: 100 }).map((_, index) => (
                                <img alt='' key={index} src={textures[generals.texture].image} className="texture-img"
                                    style={{
                                        opacity: textures[generals.texture].opacity,
                                        filter: textures[generals.texture].filter,
                                        mixBlendMode: textures[generals.texture].blend
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                } */}
      </div>
    )
  );
});
