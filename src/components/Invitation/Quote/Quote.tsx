import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import FadeIn from "@/components/Motion/FadeIn";

type quoteProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const Quote = forwardRef<HTMLDivElement, quoteProps>(function Greeting({ dev, invitation }, ref) {
  const content = invitation.quote;
  const generals = invitation.generals;

  const image_src = dev ? content.image.dev : content.image.prod;

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
      {content.active ? (
        <div className="main_container" style={{ position: "relative", width: "100%" }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            // data-aos={!dev && generals.texture == null ? "fade-left" : undefined}
            ref={ref}
            className="gm_container"
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth:'1250px !important'
            }}
          >
            {content.image.active ? (
              <FadeIn>
                <div className="background_image_quote_container">
                  <div style={{ backgroundColor: primary, height: "100%", width: "100%" }}>
                    {image_src && <Image fill style={{ objectFit: "cover" }} loading="lazy" decoding="async" alt="" src={image_src} />}
                  </div>

                  {content.text.shadow && (
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "400px",
                        top: "0px",
                        left: "50%",
                        transform: "translate(-50%)",
                        background: `linear-gradient(to top, ${accent}, rgba(0,0,0,0))`,
                      }}
                    ></div>
                  )}

                  <div
                    className={!dev ? "qt_image_cnt" : undefined}
                    style={{
                      height: "400px",
                      display: "flex",
                      alignItems: content.text.align,
                      position: "absolute",
                      width: "100%",
                      top: "0px",
                      left: "50%",
                      transform: "translate(-50%)",
                      padding: "24px",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="g_mdoule_regular_text"
                      style={{
                        whiteSpace: "pre-line",
                        color: content.text.font.color,
                        fontFamily: content.text.font.typeFace ?? "Poppins",
                        fontSize: `${content.text.font.size}px`,
                        opacity: content.text.font.opacity,
                        fontWeight: content.text.font.weight,
                        textAlign: content.text.justify,
                        width: `${content.text.width}%`,
                      }}
                    >
                      {content.text.font.value}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ) : (
              <span
                className="g_mdoule_regular_text"
                style={{
                  color: content.background && content.inverted ? primary : accent,
                  fontFamily: content.text.font.typeFace,
                  fontSize: `16px`,
                  textAlign: "center",
                  width: "60%",
                  fontStyle: "italic",
                  padding: "64px 0px",
                }}
              >
                {content.text.font.value}
              </span>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}

      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
