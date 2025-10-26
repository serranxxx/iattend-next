import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import styles from "./gallery.module.css";
import FanStack from "./FanStack";
import FadeLeft from "@/components/Motion/FadeLeft";
import FadeIn from "@/components/Motion/FadeIn";

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
        <div className="main_container" style={{ position: "relative", width: "100%" }}>
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
              <FadeLeft>
                <span
                  className="g_module_title"
                  style={{
                    fontFamily: font,
                    color: content.background && content.inverted ? primary : accent,
                  }}
                >
                  {content.title}
                </span>
              </FadeLeft>
              <FadeIn>
                <FanStack
                  images={images}
                  radius={12}
                  invitation={invitation}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      )}
      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
