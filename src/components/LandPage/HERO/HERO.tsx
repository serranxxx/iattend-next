
"use client";

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { LucideArrowUpRight } from "lucide-react";

export const HeroSection = () => {

  const width = useScreenWidth();
  const isLargeScreen = width >= 768;
  const message = encodeURIComponent(
    "¡Hola! Me interesan los servicios de I attend"
  );

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
        {
          isLargeScreen ?
            <img className={styles.hero_logo} src="/assets/images/blanco.png" alt="i attend" />
            : <img className={styles.hero_logo} src="/assets/images/morado.png" alt="i attend" />
        }
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <span className={styles.hero_h1}>Organiza a tus invitados sin estrés</span>
          <span style={{ marginBottom: '12px' }} className={styles.hero_h2}>I attend te acompaña durante todo el proceso</span>
          <CustomButton type="secondary" url={`https://wa.me/6145338500?text=${message}`} icon={LucideArrowUpRight} label="PLATICA CON NOSOTROS" />

        </div>
      </div>

    </div>


    //   </Carousel>
    // </div>
  );
};
