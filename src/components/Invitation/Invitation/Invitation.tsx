"use client";

import { NewInvitation } from "@/types/new_invitation";
import { forwardRef, useRef } from "react";
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
import Image from "next/image";

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

  const scrollableContentRef = useRef<HTMLDivElement | null>(null);

  if (loader || !invitation) {
    return (
      <div
        style={{
          height: "100vh",
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
