"use client";

import { InvitationType, InvitationUIBundle, NewInvitation } from "@/types/new_invitation";
import { useEffect, useRef, useState } from "react";
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
import Image from "next/image";
import { textures } from "@/helpers/textures";
import { TextureOverlay } from "./TexturesOverlay";
import { Button, Drawer, Input, Layout, message } from "antd";
import Confirm from "../Confirm/Confirm";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { GuestAccessPayload, GuestSubabasePayload } from "@/types/guests";
import GoogleTranslate from "@/components/GoogleTranslate/GoogleTranslate";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { createClient } from "@/lib/supabase/client";

type invProps = {
  invitation: NewInvitation | null;
  loader: boolean;
  type: InvitationType;
  mongoID: string | null;
  dev: boolean;
  height: number | string | null;
  ui: InvitationUIBundle;
  invitationID?: string;
};



export default function Invitation({ invitationID, ui, invitation, loader, type, mongoID, dev, height }: invProps) {
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
  const supabase = createClient();

  const [open, setOpen] = useState(false);
  const [guestCode, setGuestCode] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [guestInfo, setGuestInfo] = useState<GuestAccessPayload | null>(null);

  const primary = invitation?.generals?.colors.primary ?? "#FFFFFF";
  const secondary = invitation?.generals?.colors.secondary ?? "#FFFFFF";
  const accent = invitation?.generals?.colors.accent ?? "#FFFFFF";
  const actions = invitation?.generals?.colors.actions ?? "#FFFFFF";
  const font = invitation?.generals.fonts.body?.typeFace ?? "Poppins"

  const width = useScreenWidth();
  const isLargeScreen = width >= 768;
  // const scrollableContentRef = useRef<HTMLDivElement | null>(null);

  const handlePosition = (id: number, invitation: NewInvitation, index: number) => {
    switch (id) {
      case 1:
        return <Greeting key={index} ref={greetingRef} dev={false} invitation={invitation} />;
      case 2:
        return <People key={index} ref={peopleRef} dev={false} invitation={invitation} />;
      case 3:
        return <Quote key={index} ref={quoteRef} dev={dev} invitation={invitation} />;
      case 4:
        return <Itinerary ui={ui} key={index} ref={itineraryRef} dev={false} invitation={invitation} />;
      case 5:
        return <DressCode ui={ui} key={index} ref={dresscodeRef} dev={dev} invitation={invitation} />;
      case 6:
        return <Gifts ui={ui} key={index} ref={giftsRef} dev={false} invitation={invitation} />;
      case 7:
        return <Destinations ui={ui} key={index} ref={destinationRef} dev={false} invitation={invitation} />;
      case 8:
        return <Notices key={index} ref={noticesRef} dev={false} invitation={invitation} />;
      case 9:
        return <Gallery key={index} ref={galleryRef} dev={dev} invitation={invitation} />;

      default:
        break;
    }
  };

  interface CSSVars extends React.CSSProperties {
    ['--hover-color']?: string;
  }

  const btnStyle: CSSVars = {
    ['--hover-color']: `${actions}`,
    height: '56px',
    width: '280px',
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: '2px',
    boxShadow: '0px 0px 12px rgba(0,0,0,0.2)',
    fontFamily: font,
  };

  const onValidateUser = async () => {
    // try {
    //   const response = await axios.post(`https://i-attend-22z4h.ondigitalocean.app/api/guests/login`, {
    //     invitationID: mongoID,
    //     guestID: guestCode,
    //   });

    //   if (response.data.ok) {
    //     messageApi.success(`Bienvenido ${response.data.data.username}`);
    //     setGuestCode("");
    //     setValidated(true);
    //     setGuestInfo(response.data.data);
    //     return response.data.data;
    //   } else {
    //     messageApi.error(`Código incorrecto`);
    //     setGuestCode("");
    //     return null;
    //   }
    // } catch (error: any) {
    //   console.error("❌ Error en login:", error.response?.data || error.message);
    //   return null;
    // }

    try {
      const { data, error } = await supabase
        .from("guests")
        .select("*")
        .eq("password", guestCode)
        .maybeSingle();

      if (error) {
        console.log(error, 'not found')
        return
      }

      if (!data) {
        messageApi.error(`Código incorrecto`);
        return
      }
      
      console.log(data)
      // setGuestInfo(data)
      

    } catch (error) {

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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image alt="" src={"/assets/tools/load.gif"} width={250} />
      </div>
    );
  }

  const tex = textures[invitation.generals?.texture ?? 0];

  return (
    <>
      {contextHolder}

      <div
        ref={scrollableContentRef}
        className={styles.invitation_main_cont}
        style={{
          backgroundColor: invitation.generals.colors.primary ?? "#FFF",
          paddingBottom: validated ? "44px" : "0px",
          maxHeight: "100vh", position: 'relative'
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
        <Cover ui={ui} ref={coverRef} dev={dev} invitation={invitation} height={"100vh"} validated={validated} />
        {validated && (
          <>
            {invitation?.generals.positions.map((position, index) => handlePosition(position, invitation, index))}
            {!dev && (
              <Button
                onClick={() => setOpen(true)}
                style={{
                  position: "fixed",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "20px",
                  zIndex: 3,
                  // height: '44px',
                  letterSpacing: "2px",
                  fontSize: "16px",
                  height: "44px",
                  width: "200px",
                  backgroundColor: `${actions}80`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${actions}40`,
                  color: accent,
                  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.25)",
                }}
              >
                {ui?.buttons.confirm}
              </Button>
            )}
          </>
        )}
        <div
          className={styles.inv_locked_blured}
          style={{ pointerEvents: validated ? "none" : undefined, opacity: validated ? "0" : "1", backgroundColor: `${primary}20` }}
        >
          <div className={styles.locked_icon}>
            <FaLock size={32} style={{ color: "#FFF" }} />
          </div>
          <span style={{ fontFamily: font }} className={styles.locked_title}>{ui?.locked.title}</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span style={{ fontFamily: font }} className={styles.locked_text}>{ui?.locked?.p1}</span>
            <span style={{ fontFamily: font }} className={styles.locked_text}>
              {ui?.locked?.p2}
            </span>
          </div>
          <Input
            value={guestCode}
            // length={6}
            size="large"
            onChange={(e) => setGuestCode(e.target.value)}
            placeholder={ui?.locked.placeholder}
            className={styles.locked_input}
            style={{
              backgroundColor: "#FFFFFF20",
              boxShadow: "0px 0px 12px rgba(0,0,0,0.2)",
              borderWidth: "2px",
              color: "#FFF",
              fontSize: "18px",
              textAlign: "center",
              maxWidth: "280px",
              borderRadius: "99px",
              minHeight: "56px",
              fontFamily: font
            }}
          />

          <Button
            className={styles.locked_btn}
            style={btnStyle}
            onClick={onValidateUser}
          >
            {ui?.locked.access}
          </Button>

        </div>



      </div>
      <Drawer
        placement={isLargeScreen ? 'left' : 'bottom'}
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
            {ui?.confirm.drawerTitle}
          </div>
        }
        height={isLargeScreen ? "100%" : "80%"}
        closeIcon={false}
        style={{
          maxHeight: isLargeScreen ? '1010vh' : "800px",
          borderRadius: isLargeScreen ? '0px 32px 32px 0px' : "32px 32px 0px 0px",
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
        {(guestInfo || type === "open") && mongoID && (
          <Confirm ui={ui} invitation={invitation} type={type} guestInfo={guestInfo} mongoID={mongoID} />
        )}
      </Drawer>
    </>
  );
}
