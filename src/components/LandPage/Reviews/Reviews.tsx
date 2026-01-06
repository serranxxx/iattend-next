import React from "react";
import styles from "./reviews.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import { reviews_list } from "./reviews";

export const Reviews = () => {
  return (
    <div className={styles.key_cont}>
      <span className={styles.key_title}>Personas reales, eventos reales</span>

      <div className={styles.flow_container}>
        {reviews_list.map((card, index) => (
          <div key={index} className={styles.flow_card}>
            <FaQuoteLeft size={24} style={{ color: "#CFBEE6" }} />
            <span>{card.review}</span>
            <span>— {card.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
