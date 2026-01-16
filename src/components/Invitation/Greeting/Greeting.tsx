
"use client";

import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef, useEffect } from "react";
import { Separador } from "../Separator/Separator";
import FadeLeft from "@/components/Motion/FadeLeft";

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


  return (
    <>
      {content?.active && generals?.colors ? (
        <div className="main_container " style={{ position: "relative", width: "100%", }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            style={{ position: "relative" }}
            ref={ref}
            className="gm_container"
          >
            <div
              className="g_module_info_container"
              style={{
                padding: content.background ? "24px" : "0px 24px",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <FadeLeft>
                <span
                  className="g_module_title"
                  style={{
                    display: "inline-block",
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: generals.fonts.body?.typeFace ?? "Poppins",
                  }}
                >
                  {content.title}
                </span>
              </FadeLeft>

              <FadeLeft>
                <span
                  className="g_module_regular_text"
                  style={{
                    display: "inline-block", whiteSpace: "pre-line",
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: generals.fonts.body?.typeFace ?? "Poppins",
                  }}
                >
                  {content.description}
                </span>
              </FadeLeft>

            </div>
          </div>
        </div>
      ) : null}

      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
