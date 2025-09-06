import { darker, lighter } from "@/helpers/functions";
import { Invitation } from "@/types/invitation";
import Image from "next/image";
import React, { useState } from "react";
import { forwardRef } from "react";
import styles from "./cover.module.css";

type CoverProps = {
  dev: boolean;
  invitation: Invitation | null;
  height: string;
};

export const Cover = forwardRef<HTMLDivElement, CoverProps>(function Cover({ dev, invitation, height }, ref) {
  const content = invitation?.cover;
  const generals = invitation?.generals;
  const src = dev ? content?.featured_dev : content?.featured_prod;

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

  return (
    content &&
    generals && (
      <div ref={ref} className={styles.module_cover_container} style={{ position: "relative", zIndex: 3 }}>
        {/* {checkIfToday(cleanDate(content.date)) && <ConfettiComponent palette={colorPalette} />} */}

        <div
          className={!dev ? styles.cover_container : styles.cover_container_dev}
          style={{
            height: height,
            padding: "0",
            minHeight: "630px",
            maxHeight: !dev ? "" : "730px",
            background: generals?.palette.primary,
          }}
        >
          {content.featured_dev || content.featured_prod ? (
            <div
              className={styles.cover_image_container}
              style={{
                top: `${content.mapPosition?.y ?? 0}px`,
                left: `${content.mapPosition?.x ?? 0}px`,
                transform: `scale(${content.zoomLevel ?? 1})`,
              }}
            >
              {src && <img alt="" src={src} />}

              {content.background ? (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0px",
                    left: "0px",
                    background: `linear-gradient(to top, ${darker(generals.palette.primary, 0.2)}, rgba(0,0,0,0))`,
                  }}
                ></div>
              ) : (
                content.blur && <div className={styles.blur_cover}></div>
              )}
            </div>
          ) : (
            <></>
          )}

          <div
            className={styles.background_cover}
            style={{
              flexDirection: content.flexDirection,
            }}
          >
            <div
              className={styles.cover_title_container}
              style={{
                alignItems: content.align,
                height: content.isDate ? "75%" : "100%",
                padding: content.isDate ? 0 : "10px",
              }}
            >
              <span
                style={{
                  color: content.color ?? lighter(generals.palette.accent, 0.6),
                  width: "100%",
                  textAlign: content.justify,
                  fontSize: `${content.fontSize}em`,
                  wordBreak: "break-word",
                  opacity: content.opacity,
                  fontFamily: content.image ? content.image : "Poppins",
                  fontWeight: content.fontWeight,
                  lineHeight: "1",
                }}
              >
                {content.title}
              </span>
            </div>

            {content.isDate && (
              <div
                style={{
                  width: "100%",
                  backgroundColor: `transparent`,

                  height: "25%",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Countdown
                  mainColor={content.color}
                  color={content.timerColor}
                  colorPalette={colorPalette}
                  dev={dev}
                  targetDate={content.date}
                  MainColor={MainColor}
                  theme={theme}
                  font={font}
                  fontWeight={content.fontWeight}
                /> */}
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
