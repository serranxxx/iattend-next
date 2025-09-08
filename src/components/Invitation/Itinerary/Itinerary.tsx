import { textures } from "@/helpers/textures";
import { Invitation } from "@/types/invitation";
import { NewInvitation } from "@/types/new_invitation";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Separador } from "../Separator/Separator";
import styles from './itinerary.module.css'
import Card from "./Card/Card";

type quoteProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const Itinerary = forwardRef<HTMLDivElement, quoteProps>(function Greeting({ dev, invitation }, ref) {

  const content = invitation.itinerary
  const generals = invitation.generals

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";

  // useEffect(() => {
  //   AOS.init({
  //     duration: 900,       // duración de las animaciones (en ms)
  //     once: true,          // si se anima solo la primera vez
  //     easing: 'ease-out',  // tipo de easing
  //   });
  // }, []);


  return (
    <>
      {
        content.active && generals ?
          <>
            <div ref={ref} className='gm_container'
              // {...(dev ? { 'data-aos': 'fade-left' } : {})}
              style={{

                backgroundColor: content.background ? secondary : 'transparent',
                padding: content.background ? '32px' : '0px 32px',
                position: 'relative'
              }}
            >
              <div className="g_module_info_container" >

                <span
                  data-aos={!dev && generals.texture == null ? 'fade-right' : undefined}
                  className="g_module_title"
                  style={{
                    color: content.background && content.inverted ? primary : accent,
                    fontFamily: generals.fonts.body?.typeFace,
                  }}
                >
                  {content.title}
                </span>
                <div
                  data-aos={!dev && generals.texture == null ? 'fade-right' : undefined}
                  className={styles.itinerary_cards_container}>
                  <Card invitation={invitation} dev={dev} />
                </div>

              </div>

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

            </div>
            {content.separator && <Separador generals={generals} value={generals.separator} />}
          </>

          : <></>
      }
    </>
  );
})
