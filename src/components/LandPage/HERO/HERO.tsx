"use client";

import styles from "./hero.module.css";
import { Button } from "antd";

const VIDEO_URL =
  "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/hf_20260526_202936_917dc5b6-9089-4b7f-82b0-2e76d8126e5d.mp4";

export const HeroSection = () => (
  <div className={styles.hero_cont}>
    <video className={styles.hero_video} src={VIDEO_URL} autoPlay muted loop playsInline />
    <div className={styles.shadow} />
    <div className={styles.hero_info_box}>
      <img src="/landing/logo_cover.png" alt="I attend" className={styles.hero_logo} />
      <div className={styles.hero_main_row}>
        <div className={styles.hero_texts}>
          <div className={styles.h1_wrap}>
            <img src="/landing/corazon.png" alt="" className={styles.hero_heart_left} aria-hidden="true" />
            <h1 className={`${styles.hero_h1} ${styles.hero_h1_spaced}`}>TU EVENTO,</h1>
            <h1 className={`${styles.hero_h1} ${styles.hero_h1_tight}`}>BAJO CONTROL,</h1>
            <img src="/landing/corazon.png" alt="" className={styles.hero_heart_right} aria-hidden="true" />
          </div>
          <h2 className={styles.hero_h2}>en menos de una tarde</h2>
          <h3 className={styles.hero_h3}>Invitación, confirmaciones, mesas: TODO en un solo</h3>
          <h3 className={styles.hero_h3}>lugar mientras tu disfrutas el proceso de tu MOMENTO.</h3>
          <Button className={styles.hero_button}>See how it works</Button>
        </div>
      </div>
    </div>
  </div>
);
