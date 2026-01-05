"use client";

import React, { useState } from "react";
import styles from "./faqs.module.css";
import { Button } from "antd";
import { FaBars } from "react-icons/fa";

export const FAQs = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const questions = [1, 1, 1, 1, 1, 1];

  return (
    <div className={styles.key_cont}>
      <span className={styles.key_title}>¿Tienes más preguntas?</span>

      <div className={styles.ideal_cont}>
        {questions.map((q, index) => (
          <div
            key={index}
            onClick={() => setActiveCard((prev) => (prev === index ? null : index))}
            style={{ height: activeCard === index ? "220px" : undefined }}
            className={styles.ideal_card}
          ></div>
        ))}
      </div>
    </div>
  );
};
