import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";

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

  return (
    <>
      {content.active && generals ? (
        <div style={{ position: "relative", width: "100%" }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            // data-aos="fade-up"
            ref={ref}
            className="gm_container"
            style={{
              padding: content.background ? "32px" : "0px 32px",
              position: "relative",
            }}
          >
            <div className="g_module_info_container">
              <span
                // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                className="g_module_title"
                style={{
                  fontFamily: font,
                  color: content.background && content.inverted ? primary : accent,
                }}
              >
                {content.title}
              </span>

              {content.notices &&
                content.notices.map((item, index) => (
                  <div key={index} className="g_module_items_single_col" style={{ gap: "12px" }}>
                    <span
                      // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
                      className="g_mdoule_regular_text"
                      style={{
                        color: content.background && content.inverted ? primary : accent,
                        fontFamily: font,
                      }}
                    >
                      {item}
                    </span>

                    {index < content.notices.length - 1 && (
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
