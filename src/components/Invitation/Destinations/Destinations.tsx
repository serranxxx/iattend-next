import { InvitationUIBundle, NewInvitation } from "@/types/new_invitation";
import React, { forwardRef, useEffect } from "react";
import Card from "./Card/Card";
import { Separador } from "../Separator/Separator";
import FadeLeft from "@/components/Motion/FadeLeft";

type DresscodeProps = {
  dev: boolean;
  invitation: NewInvitation;
  ui?: InvitationUIBundle | null;
  invitationID: string | undefined;
};

export const Destinations = forwardRef<HTMLDivElement, DresscodeProps>(function destinations({ ui, dev, invitation, invitationID }, ref) {
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

  const renderTextWithStrong = (text: string) => {
    const parts = text.split(/(\*[^*]+\*)/g);
  
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };
  

  return (
    <>
      {content.active && generals ? (
        <div className="main_container" style={{ position: "relative", width: "100%" }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            //    data-aos={!dev ? 'fade-left' : undefined}
            ref={ref}
            className="gm_container"
            style={{
              padding: content.background ? "24px" : "0px 24px",
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
                  {renderTextWithStrong(content.title ?? "")}
                </span>
              </FadeLeft>

              <FadeLeft>
                <span
                  className="g_mdoule_regular_text"
                  style={{
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: font, whiteSpace: "pre-line",
                  }}
                >
                  {renderTextWithStrong(content.description ?? "")}
                </span>
              </FadeLeft>
              <div
                style={{
                  overflow: "hidden", maxWidth: '450px',
                  // display:'flex',alignItems:'center',justifyContent:'flex-start'
                }}
              // className="scroll_invitation"
              >
                {
                  invitation.destinations.cards.length > 0 &&
                  <Card invitationID={invitationID} invitation={invitation} ui={ui} />
                }
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
