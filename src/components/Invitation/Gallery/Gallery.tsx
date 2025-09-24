import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import styles from "./gallery.module.css";
import FanStack from "./FanStack";

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
              padding: content.background ? "32px" : "0px",
              position: "relative",
            }}
          >
            <div className="g_module_info_container" style={{
              // width:'auto'
            }}>
              <span
                // data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
                className="g_module_title"
                style={{
                  fontFamily: font,
                  color: content.background && content.inverted ? primary : accent,
                }}
              >
                {content.title}
              </span>
              {/* <div
                data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
                style={{ zIndex: 2, padding: "6px 24px" }}
                className={styles.image_gallery_cont}
              // className="scroll_invitation"
              > */}
              <FanStack
                images={images}
                radius={12}
                invitation={invitation}
              />
              {/* {images?.map((item, index) => (
                  <div
                    key={index}
                    className={styles.image_gallery_item}
                    // className={styles.gallery_items_inner_container}
                    style={{ backgroundColor: primary, transform:`rotate(${index}0deg)`}}
                  >
                    <img src={item} style={{ objectFit: "cover", width:'100%', height:'100%'}} loading="lazy" decoding="async" alt="" />
                  </div>
                ))} */}
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
