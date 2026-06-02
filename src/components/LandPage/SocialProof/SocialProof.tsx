"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import styles from "./socialproof.module.css";
import { createClient } from "@/lib/supabase/client";
import { ArrowRight } from "lucide-react";

const ROW_NATURAL_WIDTH = 1008; // 3 cards × 320px + 2 gaps × 24px
const CARD_HEIGHT = 400;
const BREAKPOINT = 768;
const PADDING = 32;

const useCountUp = (target: number | null, duration = 900) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === null) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return count;
};

export const SocialProof = () => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [eventsCount, setEventsCount] = useState<number | null>(null);
  const [guestsCount, setGuestsCount] = useState<number | null>(null);
  const [summaryCount, setSummaryCount] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase.rpc("get_total_events_count").then(({ data }) => {
      if (typeof data === "number") setEventsCount(data);
    });
    supabase.rpc("get_total_guest_states").then(({ data }) => {
      if (typeof data === "number") setGuestsCount(data);
    });
    supabase.rpc("get_guest_states_total").then(({ data }) => {
      console.log(data);
      if (typeof data === "number") setSummaryCount(data);
    });
  }, []);

  const animatedEvents = useCountUp(isVisible ? eventsCount : null);
  const animatedGuests = useCountUp(isVisible ? guestsCount : null);
  const animatedSummary = useCountUp(isVisible ? summaryCount : null);

  const isMobile = width > 0 && width < BREAKPOINT;
  const cardScale = isMobile ? Math.min(1, (width - PADDING) / ROW_NATURAL_WIDTH) : 1;
  const marginCompensation = `${(CARD_HEIGHT * (cardScale - 1)) / 2}px`;

  const rowStyle = isMobile
    ? { transform: `scale(${cardScale})`, marginTop: marginCompensation, marginBottom: marginCompensation }
    : undefined;
  return (
    <section ref={sectionRef} className={styles.cont}>
      <div className={styles.proof_row}>
        <div className={styles.proof_col}>
          <span className={styles.proof_number}>{animatedEvents}</span>
          <span className={styles.proof_label}>EVENTOS CREADOS</span>
        </div>
        <div className={styles.proof_divider} />
        <div className={styles.proof_col}>
          <span className={styles.proof_number}>{animatedGuests.toLocaleString()}</span>
          <span className={styles.proof_label}>INVITACIONES ENVIADAS</span>
        </div>
        <div className={styles.proof_divider} />
        <div className={styles.proof_col}>
          <span className={styles.proof_number}>{animatedSummary.toLocaleString()}</span>
          <span className={styles.proof_label}>INVITADOS CONFIRMADOS</span>
        </div>
      </div>

      <div className={styles.situation_row}>
        <div className={styles.situation_block_1}>
          <img
            src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/sign/landing/block1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYTYzMmQ4Yy0wZDFiLTRmZGItYTk3MS1kZWY4YmVlNWFiOTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nL2Jsb2NrMS5qcGciLCJpYXQiOjE3Nzk4MzE5MzQsImV4cCI6MjA5NTE5MTkzNH0.7IdkWTzSQGI2nnzZJB9r0T12kTMjynFdrJfZUcnzZsI"
            alt="situation 1"
            className={styles.situation_img}
          />
        </div>
        <div className={styles.situation_block_2}>

          <img 
          src="/landing/items/item3.png" alt="situation 2" className={styles.item3} />

          <img 
          src="/landing/items/item3.png" alt="situation 2" className={styles.item4} />

          <div className={styles.situation_info}>
            <span className={styles.situation_info_title}>TE IDENTIFICAS CON...</span>
            <div className={styles.situation_info_grid}>
              <div className={styles.situation_info_grid_item}>
                <span>Tienes mil decisiones encima y no sabes cuál delegar y cuál resolver tú.</span>
              </div>
              <div className={styles.situation_info_grid_item}>
                <span>Hay tanto en el proceso de organizar que se siente más pesado de lo que esperabas.</span>
              </div>
              <div className={styles.situation_info_grid_item}>
                <span>Tienes miedo de hacer algo mal en un momento TAN importante.</span>
              </div>
              <div className={styles.situation_info_grid_item}>
                <span>Sientes que hacer TODO sola NO es la respuesta.</span>
              </div>
            </div>
            <span className={styles.situation_info_label}>Planear tu boda no debería sentirse así...</span>
            <Button className={styles.situation_button}>Let&apos;s start <ArrowRight strokeWidth={3} size={18}  /></Button>
          </div>

          

          <img 
          src="/landing/items/item1.png" alt="situation 2" className={styles.item1} />

           <img 
          src="/landing/items/item2.png" alt="situation 2" className={styles.item2} />
        </div>
      </div>

      <div className={styles.situation_cards}>
        <img
        style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
        src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/landing/situation.jpg" alt="situation cards" />
        <div className={styles.shadow} />

        <span className={styles.situation_cards_labels}>Pero imagina esto:</span>
        <div className={styles.situation_cards_row} style={rowStyle}>
          <div className={styles.situation_card}>
            <img src="/landing/items/clip.png" alt="" className={styles.clip}/>
            <img src="/landing/items/i_sticker.png" alt="" className={styles.i_sticker}/>
            <span className={styles.sit_card_text}>
              Las cosas en tu organización fluyen sin que tengas que pensar en TODO
            </span>
          </div>

          <div className={styles.situation_card}>
            <img src="/landing/items/clip.png" alt="" className={styles.clip}/>
            <span className={styles.sit_card_text}>
              Vuelves a tener el control de tu evento, sin cargarlo tú sola
            </span>
          </div>

          <div className={styles.situation_card}>
            <img src="/landing/items/clip.png" alt="" className={styles.clip}/>
            <img src="/landing/items/a_sticker.png" alt="" className={styles.a_sticker}/>
            <span className={styles.sit_card_text}>
              Puedes disfrutar el proceso en lugar de sobrevivirlo
            </span>
          </div>
        </div>
        <span className={styles.situation_cards_labels}>Una plataforma que trabaja contigo para que no tengas que preocuparte</span>

      </div>
    </section>
  );
};
