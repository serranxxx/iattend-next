import { NewInvitation } from "@/types/new_invitation";
import { Button } from "antd";
import styles from "./card.module.css";
import { FaLocationArrow } from "react-icons/fa6";

type CardProps = {
  invitation: NewInvitation;
};

export default function Card({ invitation }: CardProps) {
  const content = invitation.destinations;
  const generals = invitation.generals;
  const font = generals.fonts.body?.typeFace;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";
  const actions = generals?.colors.actions ?? "#FFFFFF";

  return content.cards.map((dest, index) => (
    <div
      key={index}
      className={styles.destination_card}
      style={{
        backgroundColor: content.background ? primary : secondary,
        backgroundImage: `url(${dest.image}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.dest_info_container}>
        {/* <span style={{ color: content.background && !dest.image ? accent : primary }} className={styles.dest_card_title}>
          {dest.name}
        </span> */}
        {dest.url && (
          <Button
            href={dest.url}
            target="_blank"
            style={{
              backgroundColor: content.background && !dest.image ? secondary : primary,
              color: accent,
            }}
            className={styles.destbutton}
          >
            {dest.name}
          </Button>
        )}
      </div>
    </div>
  ));
}
