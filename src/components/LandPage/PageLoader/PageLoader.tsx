"use client";

import { useEffect, useState } from "react";
import styles from "./PageLoader.module.css";

const MIN_VISIBLE_MS = 300;
const MAX_WAIT_MS = 4000;

export const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let settled = false;

    const reveal = () => {
      if (settled) return;
      settled = true;
      const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - start));
      window.setTimeout(() => setReady(true), remaining);
    };

    const fallback = window.setTimeout(reveal, MAX_WAIT_MS);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(reveal, reveal);
    } else {
      reveal();
    }

    return () => window.clearTimeout(fallback);
  }, []);

  return (
    <>
      <div className={`${styles.loader} ${ready ? styles.loader_hidden : ""}`} aria-hidden={ready}>
        <img src="/landing/logo_cover.png" alt="" className={styles.loader_logo} />
      </div>
      {children}
    </>
  );
};
