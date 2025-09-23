"use client";

import { NewInvitation } from "@/types/new_invitation";
import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./invitation.module.css";
import { Cover } from "../Cover/Cover";
import { Greeting } from "../Greeting/Greeting";
import { People } from "../Family/Family";
import { Quote } from "../Quote/Quote";
import { Itinerary } from "../Itinerary/Itinerary";
import { DressCode } from "../DressCode/DressCode";
import { Gifts } from "../Gifts/Gifts";
import { Destinations } from "../Destinations/Destinations";
import { Notices } from "../Notices/Notices";
import { Gallery } from "../Gallery/Gallery";
import load from "@/assets/tools/load.gif";
import Image, { StaticImageData } from "next/image";
import { textures } from "@/helpers/textures";
import { TextureOverlay } from "./TexturesOverlay";
import { Button, Drawer } from "antd";

type invProps = {
  invitation: NewInvitation | null;
  loader: boolean;
};

export default function Invitation({ invitation, loader }: invProps) {
  const coverRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const dresscodeRef = useRef<HTMLDivElement>(null);
  const giftsRef = useRef<HTMLDivElement>(null);
  const noticesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);
  const scrollableContentRef = useRef<HTMLDivElement>(null);
  const [heightSize, setHeightSize] = useState<number>(0)

  const [open, setOpen] = useState(false)

  const primary = invitation?.generals?.colors.primary ?? "#FFFFFF";
  const secondary = invitation?.generals?.colors.secondary ?? "#FFFFFF";
  const accent = invitation?.generals?.colors.accent ?? "#FFFFFF";
  const actions = invitation?.generals?.colors.actions ?? "#FFFFFF";

  // const scrollableContentRef = useRef<HTMLDivElement | null>(null);

  const handlePosition = (id: number, invitation: NewInvitation, index: number) => {
    switch (id) {
      case 1:
        return <Greeting ref={greetingRef} dev={false} invitation={invitation} />;
      case 2:
        return <People ref={peopleRef} dev={false} invitation={invitation} />;
      case 3:
        return <Quote ref={quoteRef} dev={false} invitation={invitation} />;
      case 4:
        return <Itinerary ref={itineraryRef} dev={false} invitation={invitation} />;
      case 5:
        return <DressCode ref={dresscodeRef} dev={false} invitation={invitation} />;
      case 6:
        return <Gifts ref={giftsRef} dev={false} invitation={invitation} />;
      case 7:
        return <Destinations ref={destinationRef} dev={false} invitation={invitation} />;
      case 8:
        return <Notices ref={noticesRef} dev={false} invitation={invitation} />;
      case 9:
        return <Gallery ref={galleryRef} dev={false} invitation={invitation} />;

      default:
        break;
    }
  };

  useEffect(() => {
    
    const coverHeightPx = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    setHeightSize(coverHeightPx)
  }, [])


  if (loader || !invitation) {
    return (
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image alt="" src={load} width={250} />
      </div>
    );
  }



  const tex = textures[invitation.generals?.texture ?? 0];

  return (
    <>
      <div style={{ minHeight: "100dvh", display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
        {/* <HeaderInvitation visible={isVisible} content={invitation.cover} invitation={invitation} /> */}
        <div
          ref={scrollableContentRef}
          className={styles.invitation_main_cont}
          style={{
            backgroundColor: invitation.generals.colors.primary ?? "#FFF",
          }}
        >
          {invitation.generals.texture !== null && tex && (
            <TextureOverlay
              containerRef={scrollableContentRef as unknown as React.RefObject<HTMLElement>}
              coverHeightPx={heightSize}
              texture={{
                image: tex.image, // StaticImageData o "/public/..."
                opacity: tex.opacity,
                blend: tex.blend,
                filter: tex.filter,
              }}
              tileW={1024} // ajusta a tu imagen
              tileH={1024}
            />
          )}
          <Cover ref={coverRef} dev={false} invitation={invitation} height={"100dvh"} />
          {invitation?.generals.positions.map((position, index) => handlePosition(position, invitation, index))}
          <Button
            onClick={() => setOpen(true)}
            style={{
              position: 'fixed',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '20px',
              zIndex: 999,
              // height: '44px',
              letterSpacing: '2px',
              fontSize: '16px',
              padding: '6px 12px',
              backgroundColor: `${actions}80`,
              backdropFilter: 'blur(10px)',
              color: accent,
              boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25)'
            }}>CONFIRMAR</Button>
        </div>
        {/* <FooterInvitation invitation={invitation} /> */}

      </div>

      <Drawer
        placement="bottom"
        onClose={() => setOpen(false)}
        open={open}
        title={<div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '6px', fontFamily: invitation.generals.fonts.body?.typeFace,
          fontSize: '20px',
          color: accent,
        }}> Confirmar asistencia</div>}
        height={'80%'}
        closeIcon={false}
        style={{
          maxHeight: '800px',
          borderRadius: '32px 32px 0px 0px',
          backgroundColor: primary
        }}
        styles={{
          header: {
            backgroundColor: primary
          },
          body: {
            backgroundColor: primary,
            paddingTop: '12px',
          }
        }}
      // extra={
      //   open?.address?.url &&
      //   <Button
      //     href={open?.address.url}
      //     target="_blank"
      //     rel="noopener noreferrer"
      //     icon={<FaDiamondTurnRight size={14} />}
      //     style={{
      //       background: content.inverted ? primary : actions ?? "#FFF",
      //       color: content.inverted ? accent : buttonsColorText(actions!),
      //     }}
      //   >
      //     ¿Cómo llegar?
      //   </Button>
      // }

      >
      </Drawer>
    </>
  );
}
