"use client";

import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import { Separador } from "../Separator/Separator";
import styles from "./dresscode.module.css";
import PinterestBoard from "./PinterestBoards/PinterestBoard";
import { Button } from "antd";
import { FaPinterest, FaPinterestP } from "react-icons/fa";
import { textures } from "@/helpers/textures";

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
  const actions = generals?.colors.actions ?? "#FFFFFF";

  const [onPinterest, setOnPinterest] = useState<boolean>(false);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 900,       // duración de las animaciones (en ms)
  //     once: true,          // si se anima solo la primera vez
  //     easing: 'ease-out',  // tipo de easing
  //   });
  // }, []);

  return (
    <>
      {content.active && generals ? (
        <>
          <div
            //data-aos={!dev ? 'fade-left' : undefined}
            ref={ref}
            className="gm_container"
            style={{
              backgroundColor: content.background ? secondary : "transparent",
              padding: content.background ? "32px" : "0px 32px",
              position: "relative",
            }}
          >
            {content.background && generals.texture !== null && (
              <div className="image_texture_container">
                <div className="image_texture_container">
                  {Array.from({ length: 100 }).map((_, index) => (
                    <Image
                      fill
                      loading="lazy"
                      decoding="async"
                      alt=""
                      key={index}
                      src={textures[generals.texture].image}
                      className="texture_img"
                      style={{
                        opacity: textures[generals.texture].opacity,
                        filter: textures[generals.texture].filter,
                        mixBlendMode: textures[generals.texture].blend,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="g_module_info_container">
              <span
                data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                className="g_module_title"
                style={{ color: content.background && content.inverted ? primary : accent, fontFamily: generals.fonts.body?.typeFace }}
              >
                {content.title}
              </span>

              <span
                data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                className="g_mdoule_regular_text"
                style={{ color: content.background && content.inverted ? primary : accent, fontFamily: generals.fonts.body?.typeFace }}
              >
                {content.description}
              </span>

              <div className={styles.color_palette_cont}>
                <span
                  className="g_mdoule_regular_text"
                  style={{
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: generals.fonts.body?.typeFace,
                    opacity: 0.8,
                    fontWeight: 400,
                  }}
                >
                  Paleta de colores
                </span>
                {content.colors && (
                  <div className={styles.dresscode_colors}>
                    {content.colors.map((color, index) => (
                      <div
                        data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                        key={index}
                        className={styles.dresscode_color}
                        style={{ borderColor: primary, backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {content.images_active && (
                <div className={styles.scroll_invitation} style={{ zIndex: 2 }}>
                  {images_src.map((image, index) => (
                    <div
                      data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                      style={{ position: "relative" }}
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
                          backgroundColor: primary,
                          color: accent,
                          // backgroundColor: "#E60024",
                          // color: "#FFF",
                          boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.25), 0 0 6px 0 rgba(134, 134, 134, 0.25) inset",
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
        </>
      ) : null}
    </>
  );
});
