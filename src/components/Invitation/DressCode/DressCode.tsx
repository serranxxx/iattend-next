"use client";

import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import { Separador } from "../Separator/Separator";
import styles from "./dresscode.module.css";
import { Button } from "antd";
import { FaPinterest } from "react-icons/fa";

type DresscodeProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const DressCode = forwardRef<HTMLDivElement, DresscodeProps>(function Greeting({ dev, invitation }, ref) {
  const content = invitation.dresscode;
  const generals = invitation.generals;

  const images_src = dev ? content.dev : content.prod;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";

  return (
    <>
      {content.active && generals ? (
        <div style={{ position: "relative", width: "100%", paddingBottom: content.separator ?'36px' : undefined }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            ref={ref}
            className="gm_container"
            style={{
              padding: content.background ? "32px" : "0px 32px",
              position: "relative",
            }}
          >
            <div className="g_module_info_container">
              <span
                // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                className="g_module_title"
                style={{ color: content.background && content.inverted ? primary : accent, fontFamily: generals.fonts.body?.typeFace }}
              >
                {content.title}
              </span>

              <span
                // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                className="g_mdoule_regular_text"
                style={{ color: content.background && content.inverted ? primary : accent, fontFamily: generals.fonts.body?.typeFace }}
              >
                {content.description}
              </span>

              {content.colors && content.colors.length > 0 && (
                <div className={styles.color_palette_cont}>
                  {/* <span
                    className="g_mdoule_regular_text"
                    style={{
                      color: content.background && content.inverted ? primary : accent,
                      fontFamily: generals.fonts.body?.typeFace,
                      opacity: 0.8,
                      fontWeight: 400,
                    }}
                  >
                    Paleta de colores
                  </span> */}
                  <div className={styles.dresscode_colors}>
                    {content.colors.map((color, index) => (
                      <div
                        // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                        key={index}
                        className={styles.dresscode_color}
                        style={{ borderColor: content.background ? secondary : primary, backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {content.images_active && (
                <div className={styles.scroll_invitation} style={{ zIndex: 2 }}>
                  {images_src.map((image, index) => (
                    <div
                      // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                      style={{ position: "relative", padding: "6px 24px" }}
                      key={index}
                      className={styles.dresscode_image_container}
                    >
                      <Image fill alt="" loading="lazy" decoding="async" src={image} style={{ objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              )}

              {content.links_active && (
                <div className={dev ? "dresscode-links-dev" : "dresscode-links"}>
                  {content.links &&
                    content.links.map((link, index) => (
                      <Button
                        key={index}
                        href={link.url}
                        icon={<FaPinterest />}
                        style={{
                          backgroundColor: content.background ? (content.inverted ? primary : secondary) : primary,
                          color: accent,
                          // backgroundColor: "#E60024",
                          // color: "#FFF",
                          boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        ¿Necesitas inspiración?
                      </Button>
                    ))}
                </div>
              )}
            </div>
          </div>
          {content.separator && <Separador generals={generals} value={generals.separator} />}
        </div>
      ) : null}
    </>
  );
});
