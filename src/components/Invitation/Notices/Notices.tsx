import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import FadeLeft from "@/components/Motion/FadeLeft";

type DresscodeProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const Notices = forwardRef<HTMLDivElement, DresscodeProps>(function notices({ dev, invitation }, ref) {
  const content = invitation.notices;
  const generals = invitation.generals;
  const font = generals.fonts.body?.typeFace;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";

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
                    fontFamily: font,
                    color: content.background && content.inverted ? primary : accent,
                  }}
                >
                  {content.title}
                </span>
              </FadeLeft>

              {content.notices &&
                content.notices.map((item, index) => (
                  <div key={index} className="g_module_items_single_col" style={{ gap: "12px" }}>
                    <FadeLeft>
                      <span
                        className="g_mdoule_regular_text"
                        style={{
                          color: content.background && content.inverted ? primary : accent,
                          fontFamily: font,whiteSpace: "pre-line",
                        }}
                      >
                        {renderTextWithStrong(item)}
                      </span>
                    </FadeLeft>

                    {index < content.notices.length - 1 && (
                      <FadeLeft>
                        <span
                          // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                          className="g_mdoule_regular_text"
                          style={{
                            fontFamily: font,
                            color: content.background && content.inverted ? primary : accent,
                          }}
                        >
                          ...
                        </span>
                      </FadeLeft>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : null}
      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
