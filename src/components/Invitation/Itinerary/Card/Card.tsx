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
      return <Icon size={28} style={{ color: content.background ? accent : accent }} />;
    }
    return <LuBadgeHelp size={28} style={{ color: content.background ? accent : accent }} />;
  };

  useEffect(() => {
    console.log("card: ", invitation);
  }, [invitation]);

  return (
    <>
      {steps.map((item, index) => (
        <div
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
          {activeSteps?.includes(item) ? (
            <OpenCard dev={dev} invitation={invitation} item={item} setActiveSteps={setActiveSteps} activeSteps={activeSteps} />
          ) : (
            <>
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
                  fontFamily: generals.fonts.body?.typeFace,
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
                  icon={<FaArrowRight />}
                  style={{
                    background: content.background ? secondary : content.inverted ? primary : actions ?? "#FFF",
                  }}
                />
              ) : null}
            </>
          )}
        </div>
      ))}
    </>
  );
}
