"use client";

import { useEffect, useRef } from "react";
import styles from "./SpinSVG.module.css";

interface SpinSVGProps {
  path: string;
  width: number;
  height: number;
  viewBox: string;
  delay?: number;
}

export const SpinSVG = ({ path, width, height, viewBox, delay = 0 }: SpinSVGProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const length = el.getTotalLength();
    el.style.setProperty("--path-length", String(length));
  }, []);

  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={pathRef}
        d={path}
        stroke="#0C171B"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        className={styles.path}
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
};
