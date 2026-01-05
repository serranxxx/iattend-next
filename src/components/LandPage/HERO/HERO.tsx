import React from "react";
import styles from "./hero.module.css";
import { Button } from "antd";
import { FaBars, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div
      className={styles.hero_cont}
      style={{
        backgroundImage: `url(https://picsum.photos/1200/800)`,
      }}
    >
      <div className={styles.shadow}></div>
      <div className={styles.hero_first_row}>
        <img className={styles.hero_logo} src="/assets/images/blanco.png" alt="i attend" />
      </div>

      <div className={styles.hero_info_box}>
        <span className={styles.hero_h1}>Organiza a tus invitados sin estrés</span>
        <span className={styles.hero_h2}>I attend te acompaña durante todo el proceso</span>
        <Button icon={<FaPaperPlane />} className={styles.hero_cta}>
          CREAR MI EVENTO
        </Button>
      </div>
    </div>
  );
};
