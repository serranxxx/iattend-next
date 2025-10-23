import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef } from "react";
import Card from "./Card/Card";
import { Separador } from "../Separator/Separator";
import FadeLeft from "@/components/Motion/FadeLeft";

type DresscodeProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const Destinations = forwardRef<HTMLDivElement, DresscodeProps>(function destinations({ dev, invitation }, ref) {
  const content = invitation.destinations;
  const generals = invitation.generals;
  const font = generals.fonts.body?.typeFace;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";

  // useEffect(() => {
  //   AOS.init({
  //     duration: 900, // duración de las animaciones (en ms)
  //     once: true, // si se anima solo la primera vez
  //     easing: "ease-out", // tipo de easing
  //   });
  // }, []);

  return (
    <>
      {content.active && generals ? (
        <div style={{ position: "relative", width: "100%" }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            //    data-aos={!dev ? 'fade-left' : undefined}
            ref={ref}
            className="gm_container"
            style={{
              padding: content.background ? "32px" : "0px 32px",
              position: "relative",
            }}
          >
            <div className="g_module_info_container">
              <FadeLeft>
                <span
                  className="g_module_title"
                  style={{
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: font,
                  }}
                >
                  {content.title}
                </span>
              </FadeLeft>

              <FadeLeft>
                <span
                  className="g_mdoule_regular_text"
                  style={{
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: font,
                  }}
                >
                  {content.description}
                </span>
              </FadeLeft>
              <div
                style={{ overflow: "hidden" }}
              // className="scroll_invitation"
              >
                <Card invitation={invitation} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
