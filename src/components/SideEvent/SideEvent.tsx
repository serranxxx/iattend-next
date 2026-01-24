"use client";

import { SideEvent } from "@/types/side_event";
import React, { useEffect } from "react";
import styles from "./side-event.module.css";
import Image from "next/image";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/es";
import { Button } from "antd";
import { LuCircleCheck, LuCircleHelp, LuCircleX } from "react-icons/lu";
import { simpleaddress } from "../Invitation/Itinerary/OpenCard/OpenCard";
import WeatherWidget from "../Invitation/Itinerary/WeatherApi/WeatherWidget";

type invProps = {
  info: SideEvent | null;
};

export default function SideEvents({ info }: invProps) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.locale("es");

  const formatDateMexico = (isoString: string | null | undefined): string => {
    if (!isoString) return "";

    return dayjs.utc(isoString).tz("America/Mexico_City").format("ddd D [de] MMMM, HH:mm");
  };

  const renderTextWithStrong = (text: string) => {
    const parts = text.split(/(\*[^*]+\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      // ajusta estos valores a tu gusto
      const scale = Math.min(1 + scrollY / 1000, 1.25);
      document.documentElement.style.setProperty("--bg-scale", scale.toString());
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.side_event_main_cont}>
      <div className={styles.hero}>
        {info?.body.image && <Image className={styles.hero_bg} fill src={info?.body.image} alt="" style={{ objectFit: "cover" }} />}
        <div className={styles.blur_cover}></div>
        <div className={styles.shadow}></div>
      </div>

      <div
        className={styles.info_cont}
        style={
          {
            "--blur-color": `${info?.body.color ?? "#000000"}`,
          } as React.CSSProperties
        }
      >
        <span
          style={{
            fontFamily: info?.body.title.font,
            fontWeight: info?.body.title.weight,
            fontSize: info?.body.title.size,
            lineHeight: info?.body.title.line_height,
            opacity: info?.body.title.opacity,
            textAlign: "center",
            color: "#FFF",
            textShadow: "0px 0px 12px rgba(0, 0, 0, 0.55)",
          }}
        >
          {info?.name}
        </span>

        <div
          className={styles.col}
          style={{
            fontFamily: info?.body.title.font,
            zIndex: 99,
          }}
        >
          <span>{formatDateMexico(info?.body.hour)}</span>
          <span>
            {info?.body.address.street} {info?.body.address.number},
          </span>
          <span>
            {info?.body.address.state} {info?.body.address.country}
          </span>
        </div>

        <div className={styles.buttons_cont}>
          <Button icon={<LuCircleCheck size={18} style={{ opacity: "0.5" }} />} type="text" className={styles.side_buttons}>
            Asistiré
          </Button>
          <Button icon={<LuCircleX size={18} style={{ opacity: "0.5" }} />} type="text" className={styles.side_buttons}>
            No asistiré
          </Button>
          <Button icon={<LuCircleHelp size={18} style={{ opacity: "0.5" }} />} type="text" className={styles.side_buttons}>
            Quizá
          </Button>
        </div>

        {info?.body.address.street &&
          info?.body.address.number &&
          info?.body.address.neighborhood &&
          info?.body.address.zipcode &&
          info?.body.address.city &&
          info?.body.address.state &&
          info?.body.address.country && (
            <>
              <WeatherWidget item={info?.body} isSide={true} />

              <div className={styles.mapa_container}>
                <Button className={styles.get_there} type="text">
                  Como llegar
                </Button>
                <iframe
                  title="Mapa"
                  width="100%"
                  height="100%"
                  // style={{ borderColor: content.inverted ? primary : secondary }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={simpleaddress(
                    info?.body.address.street,
                    info?.body.address.number,
                    info?.body.address.neighborhood,
                    info?.body.address.zipcode,
                    info?.body.address.city,
                    info?.body.address.state,
                    info?.body.address.country
                  )}
                />
              </div>
            </>
          )}

        {info?.body.extras && (
          <div className={styles.mapa_container} style={{ padding: "12px 18px" }}>
            <span
              style={{
                color: "#FFFFFF",
                whiteSpace: "pre-line",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "14px",
                mixBlendMode: "soft-light",
              }}
            >
              {renderTextWithStrong(info.body.extras ?? "")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
