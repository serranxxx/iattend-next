import { Invitation } from "@/types/invitation";
import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef, useEffect } from "react";
import styles from "./greeting.module.css";

import "aos/dist/aos.css";
import { textures } from "@/helpers/textures";
import Image from "next/image";
import { Separador } from "../Separator/Separator";

type GreetingProps = {
  dev: boolean;
  invitation: NewInvitation | null;
};

export const Greeting = forwardRef<HTMLDivElement, GreetingProps>(function Greeting({ dev, invitation }, ref) {
  const content = invitation?.greeting;
  const generals = invitation?.generals;
  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";
  const actions = generals?.colors.actions ?? "#FFFFFF";

  // useEffect(() => {
  //   AOS.init({
  //     duration: 900,
  //     once: true,
  //     easing: "ease-out",
  //   });
  // }, []);

  return (
    <>
      {content?.active && generals?.colors ? (
        <>
          <div
            // data-aos="fade-up"
            style={{ position: "relative" }}
            ref={ref}
            className="gm_container"
          >
            <div
              className="g_module_info_container"
              style={{
                backgroundColor: content.background ? secondary : "transparent",
                padding: content.background ? "32px" : "0px 32px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <span
                data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                className="g_module_title"
                style={{
                  color: content.background && content.inverted ? primary : accent,
                  fontFamily: generals.fonts.body?.typeFace ?? "Poppins",
                }}
              >
                {content.title}
              </span>
              <span
                data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                className="g_module_regular_text"
                style={{
                  color: content.background && content.inverted ? primary : accent,
                  fontFamily: generals.fonts.body?.typeFace ?? "Poppins",
                }}
              >
                {content.description}
              </span>
            </div>

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
          </div>

          {content.separator && <Separador generals={generals} value={generals.separator} />}
        </>
      ) : null}
    </>
  );
});
