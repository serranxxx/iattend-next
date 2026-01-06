"use client";

import React, { useState } from "react";
import styles from "./faqs.module.css";
import { Button } from "antd";

import { LuChevronDown } from "react-icons/lu";
import { faqs_list } from "@/helpers/SEO/faqs";

export const FAQs = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className={styles.key_cont}>
      <span className={styles.key_title}>¿Tienes más preguntas?</span>

      <div className={styles.ideal_cont}>
        {faqs_list.slice(0, 5).map((q, index) => (
          <div key={index} onClick={() => setActiveCard((prev) => (prev === index ? null : index))} className={styles.ideal_card}>
            <div className={styles.question_head}>
              <span>{q.question}</span>
              <Button
                icon={
                  <LuChevronDown
                    style={{ transform: activeCard === index ? "rotate(180deg)" : "rotate(0deg)", transition: "all 0.3s ease" }}
                    size={16}
                  />
                }
                style={{ backgroundColor: "#FFF", maxHeight: "26px", minWidth: "26px", maxWidth: "26px" }}
              ></Button>
            </div>

            {activeCard === index && <span style={{ fontWeight: 200, whiteSpace: "pre-line" }}>{q.answer}</span>}
          </div>
        ))}
      </div>
      <div className={styles.button_cont}>
        <Button style={{ textDecoration: "underline" }} type="text">
          Ver más
        </Button>
      </div>
    </div>
  );
};
