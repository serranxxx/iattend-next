import { NewInvitation } from "@/types/new_invitation";
import React, { forwardRef, useState } from "react";
import { Separador } from "../Separator/Separator";
import Card from "./Cards/Cards";
import styles from "./gifts.module.css";

type DresscodeProps = {
  dev: boolean;
  invitation: NewInvitation;
};

export const Gifts = forwardRef<HTMLDivElement, DresscodeProps>(function Greeting(
  { dev, invitation },
  ref
) {
  const content = invitation.gifts;
  const generals = invitation.generals;
  const font = generals.fonts.body?.typeFace;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";

  // 👉 Guardamos las cards en estado local
  const [cards, setCards] = useState(content.cards);

  // 👉 Función para mover item a la posición 0
  const moveToTop = (index: number) => {
    setCards((prev) => {
      const newArr = [...prev];
      const [selected] = newArr.splice(index, 1);
      newArr.unshift(selected);
      return newArr;
    });
  };

  return (
    <>
      {content.active && generals ? (
        <div style={{ position: "relative", width: "100%" }}>
          <div
            className="textures_background"
            style={{
              backgroundColor: content.background ? secondary : "transparent",
            }}
          />
          <div
            ref={ref}
            className="gm_container"
            style={{
              padding: content.background ? "32px" : "0px 32px",
              position: "relative",
            }}
          >
            <div className="g_module_info_container">
              <span
                className="g_module_title"
                style={{
                  color: content.background && content.inverted ? primary : accent,
                  fontFamily: font,
                }}
              >
                {content.title}
              </span>
              <span
                className="g_mdoule_regular_text"
                style={{
                  color: content.background && content.inverted ? primary : accent,
                  fontFamily: font,
                }}
              >
                {content.description}
              </span>
              <div
                style={{
                  padding: "6px 24px",
                  height: `calc(180px + 50px*(${cards.length - 1}))`,
                }}
                className={styles.cards_container}
              >
                {/* 👉 Pasamos cards y callback */}
                <Card
                  invitation={invitation}
                  dev={dev}
                  GiftCard={cards}
                  onSelect={moveToTop}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {content?.separator && (
        <Separador generals={generals} value={generals?.separator ?? 1} />
      )}
    </>
  );
});