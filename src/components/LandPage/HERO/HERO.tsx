"use client";

import styles from "./hero.module.css";
import { Button } from "antd";

const VIDEO_URL =
  "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/sign/landing/hf_20260526_202936_917dc5b6-9089-4b7f-82b0-2e76d8126e5d.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYTYzMmQ4Yy0wZDFiLTRmZGItYTk3MS1kZWY4YmVlNWFiOTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nL2hmXzIwMjYwNTI2XzIwMjkzNl85MTdkYzViNi05MDg5LTRiN2YtODJiMC0yZTc2ZDgxMjZlNWQubXA0IiwiaWF0IjoxNzc5ODI4MTY1LCJleHAiOjIwOTUxODgxNjV9.y4s9j1n3_LIWa7_PV4mGJ6FkhE7HxhGaqG1Lz7aHQmE";

export const HeroSection = () => (
  <div className={styles.hero_cont}>
    <video className={styles.hero_video} src={VIDEO_URL} autoPlay muted loop playsInline />
    <div className={styles.shadow} />
    <div className={styles.hero_info_box}>
      <img src="/landing/logo_cover.png" alt="I attend" className={styles.hero_logo} />
      <div className={styles.hero_main_row}>
        <img src="/landing/corazon.png" alt="" className={styles.hero_heart} aria-hidden="true" />
        <div className={styles.hero_texts}>
          <h1 className={`${styles.hero_h1} ${styles.hero_h1_spaced}`}>TU EVENTO,</h1>
          <h1 className={`${styles.hero_h1} ${styles.hero_h1_tight}`}>BAJO CONTROL,</h1>
          <h2 className={styles.hero_h2}>en menos de una tarde</h2>
          <h3 className={styles.hero_h3}>Invitación, confirmaciones, mesas: TODO en un solo</h3>
          <h3 className={styles.hero_h3}>lugar mientras tu disfrutas el proceso de tu MOMENTO.</h3>
          <Button className={styles.hero_button}>See how it works</Button>
        </div>
        <img src="/landing/corazon.png" alt="" className={styles.hero_heart} aria-hidden="true" />
      </div>
    </div>
  </div>
);
