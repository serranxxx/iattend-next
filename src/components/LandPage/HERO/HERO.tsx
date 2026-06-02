"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import { Button } from "antd";
import { ArrowRight } from "lucide-react";

const VIDEOS = [
  "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/hf_20260526_202936_917dc5b6-9089-4b7f-82b0-2e76d8126e5d.mp4",
  "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/bucket.mp4",
  "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/video.mp4",
];

export const HeroSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const el = videoRefs.current[activeIdx];
    if (el) {
      el.currentTime = 0;
      el.play().catch(() => {});
    }
  }, [activeIdx]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % VIDEOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.hero_cont}>
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={el => { videoRefs.current[i] = el; }}
          className={`${styles.hero_video} ${i === activeIdx ? styles.hero_video_active : styles.hero_video_inactive}`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      ))}
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
            <Button className={styles.hero_button} href="https://www.iattend.site/login?mode=register">See how it works <ArrowRight size={18} strokeWidth={3} /></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
