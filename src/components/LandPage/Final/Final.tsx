"use client";
import { useRef, useEffect, useState } from "react";
import { Button } from "antd";
import { reviews_list } from "@/helpers/SEO/reviews";
import { createClient } from "@/lib/supabase/client";
import styles from "./final.module.css";

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

export const Final = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [eventsCount, setEventsCount] = useState<number | null>(null);
  const [summaryCount, setSummaryCount] = useState<number | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.rpc("get_total_events_count").then(({ data }) => {
      if (typeof data === "number") setEventsCount(data);
    });
    supabase.rpc("get_guest_states_total").then(({ data }) => {
      if (typeof data === "number") setSummaryCount(data);
    });
  }, []);

  const animatedEvents = useCountUp(eventsCount);
  const animatedSummary = useCountUp(summaryCount);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  return (
    <section className={styles.cont}>
      <div className={styles.left}>
        <div className={styles.left_center}>
          <div className={styles.wrap1}>
            <div className={styles.wrap_cont}>
              <img src="landing/items/pic4_.png" alt="" className={styles.pic4} />
              <img src="landing/items/patch.png" alt="" className={styles.patch} />
              <span className={styles.text_1}>I attend nació porque vimos a novias increíbles perder horas, energía y paz mental en algo que debería ser simple.</span>
              <img src="landing/items/pic5_.png" alt="" className={styles.pic5} />
              <img src="landing/items/i_sticker.png" alt="" className={styles.i_sticker} />
              <span className={styles.text_2}>Somos el sistema que hace que la parte más pesada de planear tu boda deje de pesarte a ti.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.shadow} />
        <img src="landing/share.jpg" alt="" className={styles.bg_img} />

        <div className={styles.right_content}>
          <div className={styles.info_block}>
            <img src="landing/items/green.png" alt="I attend" className={styles.logo} />
            <h2 className={styles.hero_title}>Your event, handled.</h2>
            <ul className={styles.stats}>
              <li>{animatedEvents}+ eventos creados</li>
              <li>{animatedSummary.toLocaleString()}+ invitados confirmados</li>
              <li>Una tarde para tenerlo todo bajo control</li>
            </ul>
          </div>

          <div ref={scrollRef} className={`${styles.reviews_scroll} scroll-invitation`}>
            {reviews_list.map((r, i) => (
              <div key={i} className={styles.review_card}>
                <p className={styles.review_text}>&ldquo;{r.review}&rdquo;</p>
                <span className={styles.review_name}>— {r.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.bottom_block}>
            <div className={styles.scroll_nav}>
              <button className={styles.scroll_btn} onClick={() => scroll("left")}>←</button>
              <button className={styles.scroll_btn} onClick={() => scroll("right")}>→</button>
            </div>
            <div style={{
              display:'flex', alignItems:'center',justifyContent:'flex-start', gap:'12px'
            }}>
              <Button className={styles.cta} href={`${process.env.NEXT_PUBLIC_APP_URL}/preview-mood`}>GET STARTED NOW</Button>
              <Button className={styles.cta_text} href="/about/pricing">SEE PLANS</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
