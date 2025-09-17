import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import styles from "./gallery.module.css";

type DresscodeProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const Gallery = forwardRef<HTMLDivElement, DresscodeProps>(function gallery({ dev, invitation }, ref) {
  const content = invitation.gallery;
  const generals = invitation.generals;
  const font = generals.fonts.body?.typeFace;

  const images = dev ? content.dev : content.prod;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";

  return (
    <>
      {content.active && generals && (
        <div style={{ position: "relative", width: "100%" }}>
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
                data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
                className="g_module_title"
                style={{
                  fontFamily: font,
                  color: content.background && content.inverted ? primary : accent,
                }}
              >
                {content.title}
              </span>
              <div
                data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
                style={{ zIndex: 2, padding: "6px 24px" }}
                className="scroll_invitation"
              >
                {images?.map((item, index) => (
                  <div
                    key={index}
                    className={styles.gallery_items_inner_container}
                    style={{ backgroundColor: primary, position: "relative" }}
                  >
                    <Image fill alt="" loading="lazy" decoding="async" src={item} style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
