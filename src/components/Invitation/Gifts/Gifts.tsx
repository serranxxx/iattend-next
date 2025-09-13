import { textures } from "@/helpers/textures";
import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import Card from "./Cards/Cards";

type DresscodeProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const Gifts = forwardRef<HTMLDivElement, DresscodeProps>(function Greeting({ dev, invitation }, ref) {
  const content = invitation.gifts;
  const generals = invitation.generals;
  const font = generals.fonts.body?.typeFace;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";
  const actions = generals?.colors.actions ?? "#FFFFFF";

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
        <div
          //    data-aos={!dev ? 'fade-left' : undefined}
          ref={ref}
          className="gm_container"
          style={{
            backgroundColor: content.background ? secondary : "transparent",
            padding: content.background ? "32px" : "0px 32px",
            position: "relative",
          }}
        >
          <div className="g_module_info_container">
            <span
              data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
              className="g_module_title"
              style={{
                color: content.background && content.inverted ? primary : accent,
                fontFamily: font,
              }}
            >
              {content.title}
            </span>
            <span
              data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
              className="g_mdoule_regular_text"
              style={{
                color: content.background && content.inverted ? primary : accent,
                fontFamily: font,
              }}
            >
              {content.description}
            </span>
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
            <div
              style={{ padding: "6px 24px" }}
              data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
              className="scroll_invitation"
            >
              <Card invitation={invitation} dev={dev} GiftCard={content.cards} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {content.separator && <Separador generals={generals} value={generals.separator} />}
    </>
  );
});
