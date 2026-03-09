
"use client";

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export const HeroSection = () => {

  const width = useScreenWidth();
  const isLargeScreen = width >= 768;

  return (
    // <div className={styles.carousel_wrap}>
    //   <Carousel>
    <div
      className={styles.hero_cont}
    >
      {
        isLargeScreen ?
          <Image
            src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/hero_u.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", zIndex: "-1", right: 0 }} />
          :
          <Image
            src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/cov_u.png"
            alt=""
            fill
            style={{ objectFit: "cover", zIndex: "-1", right: 0 }} />
      }

      <div className={styles.shadow}></div>

      <div className={styles.hero_info_box}>
        <img className={styles.hero_logo} src="/assets/images/blanco.png" alt="i attend" />
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <span className={styles.hero_h1}>Organiza a tus invitados sin estrés</span>
          <span className={styles.hero_h2}>I attend te acompaña durante todo el proceso</span>
        </div>
      </div>

    </div>


    //   </Carousel>
    // </div>
  );
};
