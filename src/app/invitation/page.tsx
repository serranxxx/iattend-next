"use client";

import { useEffect, useRef, useState } from "react";
import { Greeting } from "@/components/Invitation/Greeting/Greeting";
import { Itinerary } from "@/components/Invitation/Itinerary/Itinerary";
import { DressCode } from "@/components/Invitation/DressCode/DressCode";
import { Gifts } from "@/components/Invitation/Gifts/Gifts";
import { Destinations } from "@/components/Invitation/Destinations/Destinations";
import { Notices } from "@/components/Invitation/Notices/Notices";
import { Gallery } from "@/components/Invitation/Gallery/Gallery";
import { Cover } from "@/components/Invitation/Cover/Cover";
import load from "@/assets/tools/load.gif";
import Image from "next/image";
import styles from "./invitation.module.css";
import { createClient } from "@/lib/supabase/client";
import { NewInvitation } from "@/types/new_invitation";
import { People } from "@/components/Invitation/Family/Family";
import { Quote } from "@/components/Invitation/Quote/Quote";
import { getPublicServerClient } from "@/lib/supabase/public-server";

export default function InvitationPage() {
  const supabase = getPublicServerClient();

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

  const [loader, setLoader] = useState(false);

  const [invitation, setInvitation] = useState<NewInvitation | null>(null);
  const scrollableContentRef = useRef<HTMLDivElement | null>(null);

  const invitationID = "4b2c6c10-9571-48e8-acf7-0999a9a0ac77";

  // const handlePosition = (id: number, index: number) => {
  //   switch (id) {
  //     case 1:
  //       return <Greeting greetingRef={greetingRef} key={index} dev={false} invitation={invitation} />;
  //     case 2:
  //       return <Family key={index} dev={false} invitation={invitation} />;
  //     case 3:
  //       return <Quote key={index} dev={false} invitation={invitation} />;
  //     case 4:
  //       return <Itinerary key={index} dev={false} invitation={invitation} />;
  //     case 5:
  //       return <DressCode key={index} dev={false} invitation={invitation} />;
  //     case 6:
  //       return <Gifts key={index} dev={false} invitation={invitation} />;
  //     case 7:
  //       return <Destinations key={index} dev={false} invitation={invitation} />;
  //     case 8:
  //       return <Notices key={index} dev={false} invitation={invitation} />;
  //     case 9:
  //       return <Gallery key={index} dev={false} invitation={invitation} />;
  //     default:
  //       return null;
  //   }
  // };

  useEffect(() => {
    const getInv = async () => {
      const { data, error } = await supabase.from("invitations").select("data").eq("id", invitationID).maybeSingle();

      if (error) {
        console.log(error);
        return;
      }
      setInvitation(data?.data); // accedes a la columna `data` (jsonb)
      setLoader(false);
    };

    if (supabase) {
      getInv();
    }

  }, []);

  // Render
  if (loader || !invitation) {
    return (
      <div
        style={{
          height: "100dvh",
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

  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
      {/* <HeaderInvitation visible={isVisible} content={invitation.cover} invitation={invitation} /> */}
      <div
        ref={scrollableContentRef}
        className={styles.invitation_main_cont}
        style={{
          backgroundColor: invitation.generals.colors.primary ?? "#F5F3F2",
        }}
      >
        <Cover ref={coverRef} dev={false} invitation={invitation} height={"100vh"} />
        <Greeting ref={greetingRef} dev={false} invitation={invitation} />
        <People ref={peopleRef} dev={false} invitation={invitation} />
        <Quote ref={quoteRef} dev={false} invitation={invitation} />
        <Itinerary ref={itineraryRef} dev={false} invitation={invitation} />
        <DressCode ref={dresscodeRef} dev={false} invitation={invitation} />
        <Gifts ref={giftsRef} dev={false} invitation={invitation} />
        <Destinations ref={destinationRef} dev={false} invitation={invitation} />
        <Notices ref={noticesRef} dev={false} invitation={invitation} />
        <Gallery ref={galleryRef} dev={false} invitation={invitation} />;
        {/* {invitation.generals.texture !== null && (
          <div className={styles.image_texture_container}>
            {Array.from({ length: 100 }).map((_, index) => (
              <Image
                fill
                loading="lazy"
                decoding="async"
                alt=""
                key={index}
                src={textures[invitation.generals.texture].image}
                className={styles.texture_img}
                style={{
                  opacity: textures[invitation.generals.texture].opacity,
                  filter: textures[invitation.generals.texture].filter,
                  mixBlendMode: textures[invitation.generals.texture].blend,
                }}
              />
            ))}
          </div>
        )} */}
        {/* {invitation.generals.positions.map((position: number, index: number) => handlePosition(position, index))} */}
      </div>
      {/* <FooterInvitation invitation={invitation} /> */}
    </div>
  );
}
