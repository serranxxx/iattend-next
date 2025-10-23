import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import FadeLeft from "@/components/Motion/FadeLeft";

type peopleProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const People = forwardRef<HTMLDivElement, peopleProps>(function Greeting({ dev, invitation }, ref) {
  const content = invitation?.people;
  const generals = invitation?.generals;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";


  return (
    <>
      {content?.active && generals.colors ? (
        <div style={{ position: "relative", width: "100%" }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />

          <FadeLeft>
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
                  // data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
                  className="g_module_title"
                  style={{
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: generals.fonts.body?.typeFace ?? "Poppins",
                  }}
                >
                  {content.title}
                </span>

                {content.personas
                  ? content.personas.map((persona, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        gap: "0px",
                        alignSelf: "stretch",
                      }}
                    >
                      <FadeLeft>
                        <div
                          key={index}
                          className="g_module_items_single_col"
                        >
                          <span
                            className="g_mdoule_light_text"
                            style={{
                              opacity: "0.6",
                              color: content.background && content.inverted ? primary : accent,
                              fontFamily: generals.fonts.body?.typeFace ?? "Poppins",
                            }}
                          >
                            {persona.title}
                          </span>

                          <span
                            className="g_mdoule_regular_text"
                            style={{
                              color: content.background && content.inverted ? primary : accent,
                              fontFamily: generals.fonts.body?.typeFace ?? "Poppins",
                            }}
                          >
                            {persona.description}
                          </span>
                        </div>
                      </FadeLeft>
                    </div>
                  ))
                  : null}
              </div>
            </div>
          </FadeLeft>

        </div>
      ) : null}

      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
