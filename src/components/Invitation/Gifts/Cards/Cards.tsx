import { GiftCard, NewInvitation } from "@/types/new_invitation";
import styles from "./cards.module.css";
import { FaCopy } from "react-icons/fa6";
import { message } from "antd";
import { it } from "node:test";

type CardProps = {
  invitation: NewInvitation;
  dev: boolean;
  GiftCard: GiftCard[];
};

export default function Card({ invitation, dev, GiftCard }: CardProps) {
  const content = invitation.gifts;
  const generals = invitation.generals;
  const font = generals.fonts.body?.typeFace;

  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";
  const actions = generals?.colors.actions ?? "#FFFFFF";

  const [messageApi, contextHolder] = message.useMessage();

  const copyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      messageApi.info("Número de cuenta copiado");
    } catch (err) {
      console.error("Error al copiar el texto: ", err);
    }
  };

  const handleClass = (card: GiftCard) => {
    if (card.kind === "store" && card.brand) {
      switch (card.brand.trim().toLowerCase()) {
        case "liverpool":
          return "liverpool";

        case "palacio de hierro":
          return "palacio";

        case "amazon":
          return "amazon";

        case "sears":
          return "sears";

        default:
          return "default";
      }
    } else {
      switch (card?.bank?.trim().toLowerCase()) {
        case "bbva":
          return "bbva";

        case "citibanamex":
          return "banamex";

        case "banamex":
          return "banamex";

        case "santander":
          return "santander";

        case "hsbc":
          return "hsbc";

        case "scotiabank":
          return "scotiabank";

        case "banorte":
          return "banorte";

        case "nu":
          return "nu";

        case "nu bank":
          return "nu";

        default:
          return "default";
      }
    }
  };
  return GiftCard?.map((item, index) => (
    <>
      {contextHolder}
      {item.kind === "bank" ? (
        <div
          onClick={() => copyToClipboard(item.number!)}
          key={index}
          rel="noopener noreferrer"
          className={`${styles.gift_card_bank} ${styles[handleClass(item)]}`}
          style={{
            color: content.background ? accent : content.inverted ? primary : accent,
            cursor: item.url ? "pointer" : "default",
          }}
        >
          <span
            className={`g_mdoule_regular_text ${styles.bank_name}`}
            style={{
              fontFamily: font,
              fontSize: "16px",
            }}
          >
            <b>{item.bank}</b>
          </span>
          <div className={styles.gifts_single_col}>
            <span
              className="g_mdoule_regular_text"
              style={{
                fontFamily: font,
                fontWeight: 400,
                letterSpacing: "1px",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              {item.name}
            </span>
            <span
              className="g_mdoule_regular_text"
              style={{
                fontFamily: font,
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <b>{item.number}</b> <FaCopy />
            </span>
          </div>
        </div>
      ) : (
        <a
          key={index}
          href={item.url!}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.gift_card_page} ${styles[handleClass(item)]}`}
          style={{
            color: content.background ? accent : content.inverted ? primary : accent,
            cursor: item.url ? "pointer" : "default",
          }}
        >
          <span
            style={{
              fontFamily: font,
            }}
          >
            {item.brand}
          </span>
        </a>
      )}
    </>
  ));
}
