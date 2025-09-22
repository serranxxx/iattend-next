import React, { useEffect, useState } from "react";
import { Button, Col } from "antd";
import { LuBadgeHelp } from "react-icons/lu";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { ItineraryItem, NewInvitation } from "@/types/new_invitation";
import { getItineraryIcon } from "@/helpers/icons";
import styles from "./card.module.css";
import { getMexicoHour } from "@/helpers/functions";
import Image from "next/image";
import { textures } from "@/helpers/textures";
import OpenCard from "../OpenCard/OpenCard";
import { MdArrowOutward } from "react-icons/md";

type CardProps = {
  invitation: NewInvitation;
  dev: boolean;
};

export default function Card({ invitation, dev }: CardProps) {
  const content = invitation.itinerary;
  const generals = invitation.generals;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";
  const actions = generals.colors.actions;

  const steps = invitation.itinerary.object;

  const [activeSteps, setActiveSteps] = useState<ItineraryItem[]>([]);

  const renderIcon = (iconID: number) => {
    if (!iconID) return <LuBadgeHelp size={28} style={{ color: content.background ? accent : accent }} />;
    const Icon = getItineraryIcon(iconID);
    if (Icon) {
      return <Icon size={56} style={{ color: content.background ? accent : accent }} />;
    }
    return <LuBadgeHelp size={28} style={{ color: content.background ? accent : accent }} />;
  };
  const ROW_HEIGHT = 180; // alto mínimo de cada fila (ajústalo a tu diseño)
  const GAP = 0;

  return (
    <>

      <div
        style={{
          position: "relative",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Línea vertical del centro */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: 3,
            transform: "translateX(-50%)",
            background: content.background ? `${primary}` : `${accent}`,
            zIndex: 1,
          }}
        />

        {steps.map((item, index) => {
          const leftSide = index % 2 === 0;

          return (
            <div
              key={index}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: leftSide ? "flex-start" : "flex-end",
                alignItems: "center",
                minHeight: ROW_HEIGHT, // altura fija por fila
                marginBottom: index === steps.length - 1 ? 0 : GAP,
                width: "100%",
              }}
            >
              {/* Tarjeta del evento */}
              <div
                style={{
                  width: "44%",
                  margin: "0 2%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {renderIcon(item.icon!)}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1.25,
                    gap: 4,
                    boxSizing: "border-box",
                    padding: "0px 6px",
                    fontFamily: invitation.generals.fonts.body?.typeFace,
                    fontSize: "12px",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: "16px" }}>
                    {item.name}
                  </span>
                  <span style={{ fontWeight: 400, opacity: "0.5" }}>
                    {item.subtext}
                  </span>
                  <span style={{ fontWeight: 400 }}>{item.time}</span>
                  <div style={{ marginTop: 6 }}>
                    <Button onClick={() => setActiveSteps([...(activeSteps ?? []), item])} icon={<MdArrowOutward />}>Detalles</Button>
                  </div>
                </div>
              </div>

              {/* Punto sobre la línea */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: content.background ? `${primary}` : `${accent}`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              />

              {
                activeSteps?.includes(item) && (
                  <OpenCard dev={dev} invitation={invitation} item={item} setActiveSteps={setActiveSteps} activeSteps={activeSteps} />
                )
              }
            </div>
          );
        })}
      </div>
      {/* {steps.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", // alterna
            width: "80%",
          }}
        >
          <div style={{
            display:'flex', alignItems:'center', justifyContent:'center',
            flexDirection:'column', lineHeight:1, gap:'2px'
          }}>
            {renderIcon(item.icon!)}
            <span>{item.name}</span>
            <span>{item.time}</span>
            <Button>Detalles</Button>
          </div>

        </div>
      ))} */}
      {/* <div
            key={index}
            className={styles.step_card_cont}
            style={{
              background: content.background
                ? `${primary}${Number.isFinite(generals.texture) ? "80" : ""}`
                : `${secondary}${Number.isFinite(generals.texture) ? "80" : ""}`,
              height: activeSteps?.includes(item) ? "auto" : undefined,
              // border: Number.isFinite(generals.texture) ? "1px solid red" : "1px solid blue",
              border: `1px solid ${accent}10`,
              boxShadow: Number.isFinite(generals.texture) ? "0 0 8px 0 rgba(0, 0, 0, 0.25)" : undefined,
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className={styles.card_icon}
              style={{
                backgroundColor: content.background ? secondary : primary,
              }}
            >
              {renderIcon(item.icon!)}
            </div>
            <div
              className={styles.card_info}
              style={{
                fontFamily: generals.fonts.body?.typeFace, textAlign: 'left',
                color: content.background ? accent : content.inverted ? primary : accent
              }}
            >
              <span className={styles.open_title}>
                <b>{item.name}</b>
              </span>
              <span className={styles.open_sub}>{item.time}</span>
              <span className={styles.open_text}>{item.subtext}</span>
            </div>
            {item.moments || item.music || item.address ? (
              <Button
                onClick={() => setActiveSteps([...(activeSteps ?? []), item])}
                className={styles.open_card_button}
                icon={<MdArrowOutward size={18} style={{ color: content.inverted ? primary : accent }} />}
                type="text"
              // style={{
              //   background: content.background ? secondary : content.inverted ? primary : actions ?? "#FFF",
              // }}
              />
            ) : null}

          </div>
          <div style={{
            border: `1px solid ${accent}10`,
            background: content.background
              ? `${primary}`
              : `${accent}`,
          }} className={styles.line_it} /> */}



    </>
  );
}


