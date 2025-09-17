import { Invitation } from "@/types/invitation";
import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef, useEffect } from "react";
import styles from "./greeting.module.css";

import "aos/dist/aos.css";
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
        <div style={{ position: "relative", width: "100%" }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            // data-aos="fade-up"
            style={{ position: "relative" }}
            ref={ref}
            className="gm_container"
          >
            <div
              className="g_module_info_container"
              style={{
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
          </div>
        </div>
      ) : null}

      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
