"use client";

import { InvitationType, NewInvitation } from "@/types/new_invitation";
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
import { Button, Drawer, Input, Layout, message } from "antd";
import Confirm from "../Confirm/Confirm";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { GuestAccessPayload } from "@/types/guests";
import SwipeToConfirm from "./SwipeToConfirm";

type invProps = {
  invitation: NewInvitation | null;
  loader: boolean;
  type: InvitationType;
  mongoID: string | null;
};

export default function Invitation({ invitation, loader, type, mongoID }: invProps) {
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
  const [heightSize, setHeightSize] = useState<number>(0);

  const [open, setOpen] = useState(false);
  const [guestCode, setGuestCode] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [guestInfo, setGuestInfo] = useState<GuestAccessPayload | null>(null);

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

  const onValidateUser = async () => {
    try {
      const response = await axios.post(`https://i-attend-22z4h.ondigitalocean.app/api/guests/login`, {
        invitationID: mongoID,
        guestID: guestCode,
      });

      if (response.data.ok) {
        messageApi.success(`Bienvenido ${response.data.data.username}`);
        setGuestCode("");
        setValidated(true);
        setGuestInfo(response.data.data);
        return response.data.data;
      } else {
        messageApi.error(`Código incorrecto`);
        setGuestCode("");
        return null;
      }
    } catch (error: any) {
      console.error("❌ Error en login:", error.response?.data || error.message);
      return null;
    }
  };

  useEffect(() => {
    const coverHeightPx = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    setHeightSize(coverHeightPx);
  }, []);

  useEffect(() => {
    console.log(type);
    if (type === "open") {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [type]);

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
      {contextHolder}

      <Layout style={{ display: "flex", width: "100%", minHeight:'100dvh' }}>
        {/* <HeaderInvitation visible={isVisible} content={invitation.cover} invitation={invitation} /> */}
        <div
          ref={scrollableContentRef}
          className={styles.invitation_main_cont}
          style={{
            backgroundColor: invitation.generals.colors.primary ?? "#FFF",
            paddingBottom: validated ? '44px' : '0px'
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
          {
            validated &&
            <>
              {invitation?.generals.positions.map((position, index) => handlePosition(position, invitation, index))}
              <Button
                onClick={() => setOpen(true)}
                style={{
                  position: "fixed",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "20px",
                  zIndex: 999,
                  // height: '44px',
                  letterSpacing: "2px",
                  fontSize: "16px",
                  padding: "6px 12px",
                  backgroundColor: `${actions}80`,
                  backdropFilter: "blur(10px)",
                  color: accent,
                  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.25)",
                }}
              >
                CONFIRMAR
              </Button>
            </>
          }
          <div className={styles.inv_locked_blured} style={{ pointerEvents: validated ? 'none' : undefined,  opacity: validated ? '0' : '1', backgroundColor: `${primary}20` }}>
            <div className={styles.locked_icon}>
              <FaLock size={32} style={{ color: '#FFF' }} />
            </div>
            <span className={styles.locked_title}>Invitación Privada</span>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px'
            }}>
              <span className={styles.locked_text}>
                Nos alegra mucho que seas parte de este evento tan especial.
              </span>
              <span className={styles.locked_text}>
                Esta invitación es <b>exclusiva para ti</b>. Ingresa tu código de invitado para continuar y disfrutar de esta experiencia
                única.
              </span>
            </div>
            <Input
              value={guestCode}
              // length={6}
              size="large"
              onChange={(e) => setGuestCode(e.target.value)}
              placeholder="Código de invitado"
              className="locked-input"
              style={{ fontSize: '18px', textAlign: 'center', maxWidth: "280px", borderRadius: '99px', minHeight: '56px' }}
            />
            <SwipeToConfirm
              label="Desliza para desbloquear"
              threshold={0.85}
              resetOnConfirm
              onConfirm={onValidateUser}
            />

            <Button onClick={onValidateUser}>Acceder</Button>
          </div>
        </div>
        {/* <FooterInvitation invitation={invitation} /> */}
      </Layout>


      <Drawer
        placement="bottom"
        onClose={() => setOpen(false)}
        open={open}
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6px",
              fontFamily: invitation.generals.fonts.body?.typeFace,
              fontSize: "20px",
              color: accent,
            }}
          >
            {" "}
            Confirmar asistencia
          </div>
        }
        height={"80%"}
        closeIcon={false}
        style={{
          maxHeight: "800px",
          borderRadius: "32px 32px 0px 0px",
          backgroundColor: primary,
        }}
        styles={{
          header: {
            backgroundColor: primary,
          },
          body: {
            backgroundColor: primary,
            paddingTop: "12px",
          },
        }}
      >
        {guestInfo && mongoID && <Confirm invitation={invitation} type={type} guestInfo={guestInfo} mongoID={mongoID} />}
      </Drawer>
    </>
  );
}
