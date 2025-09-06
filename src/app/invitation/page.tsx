"use client";

import { useEffect, useRef, useState } from "react";
import { useInvitation } from "@/services/customHook";
import { Invitation } from "@/types/invitation";
import { getInvitationbyID } from "@/services/apiInvitation";
import { Greeting } from "@/components/Invitation/Greeting/Greeting";
import { Family } from "@/components/Invitation/Family/Family";
import { Quote } from "@/components/Invitation/Quote/Quote";
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

export default function InvitationPage() {
  const coverRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const familyRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const dresscodeRef = useRef<HTMLDivElement>(null);
  const giftsRef = useRef<HTMLDivElement>(null);
  const noticesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const { response, operation } = useInvitation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [loader, setLoader] = useState(false);
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const scrollableContentRef = useRef<HTMLDivElement | null>(null);

  const invitationID = "680ddfb5d6985973ff0d36dd";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const margin = 680;
      setIsVisible(currentScrollPos >= margin && prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    switch (response?.data.msg) {
      case "Get invitation By Id":
        setTimeout(() => {
          setInvitation(response.data.data);
          setLoader(false);
        }, 3000);

        break;

      default:
        break;
    }
  }, [response]);

  useEffect(() => {
    console.log("inicio");
    getInvitationbyID(operation, invitationID);
  }, []);

  // Render
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
      <div ref={scrollableContentRef} className={styles.invitation_main_cont}>
        <Cover ref={coverRef} dev={false} invitation={invitation} height={"100vh"} />
        {/* {invitation.generals.positions.map((position: number, index: number) => handlePosition(position, index))} */}
      </div>
      {/* <FooterInvitation invitation={invitation} /> */}
    </div>
  );
}
