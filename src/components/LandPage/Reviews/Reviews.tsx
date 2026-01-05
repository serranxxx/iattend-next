import React from "react";
import styles from "./reviews.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const cards = [
  {
    user: "Alberto",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    user: "Alberto",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    user: "Alberto",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const Reviews = () => {
  return (
    <div className={styles.key_cont}>
      <span className={styles.key_title}>Personas reales, eventos reales</span>

      <div className={styles.flow_container}>
        {cards.map((card, index) => (
          <div key={index} className={styles.flow_card}>
            <FaQuoteLeft size={24} style={{ color: "#CFBEE6" }} />
            <span>{card.review}</span>
            <span>— {card.user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
