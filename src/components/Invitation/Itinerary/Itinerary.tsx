import { InvitationUIBundle, NewInvitation } from "@/types/new_invitation";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import styles from "./itinerary.module.css";
import Card from "./Card/Card";

type quoteProps = {
  dev: boolean;
  invitation: NewInvitation;
  ui: InvitationUIBundle;
};

export const Itinerary = forwardRef<HTMLDivElement, quoteProps>(function Greeting({ ui, dev, invitation }, ref) {
  const content = invitation.itinerary;
  const generals = invitation.generals;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";

  console.log('it: ', ui)

  // useEffect(() => {
  //   AOS.init({
  //     duration: 900,       // duración de las animaciones (en ms)
  //     once: true,          // si se anima solo la primera vez
  //     easing: 'ease-out',  // tipo de easing
  //   });
  // }, []);

  return (
    <>
      {content.active && generals ? (
        <div className="main_container" style={{ position: "relative", width: "100%" }}>
          <div className="textures_background" style={{ backgroundColor: content.background ? secondary : "transparent" }} />
          <div
            ref={ref}
            className="gm_container"
            // {...(dev ? { 'data-aos': 'fade-left' } : {})}
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
                  color: content.background ? (content.inverted ? primary : accent) : accent,
                  fontFamily: generals.fonts.body?.typeFace,
                }}
              >
                {content.title}
              </span>
              <div
                // data-aos={!dev && generals.texture == null ? "fade-right" : undefined}
                className={styles.itinerary_cards_container}
              >
                <Card ui={ui} invitation={invitation} dev={dev} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {content?.separator && <Separador generals={generals} value={generals?.separator ?? 1} />}
    </>
  );
});
