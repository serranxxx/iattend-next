// CountDown.tsx
"use client";

import { Col, Row } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { lighter, formatDate } from "@/helpers/functions";
import { CoverSection, Generals } from "@/types/new_invitation";
import styles from "./count.module.css";

type CountdownProps = {
  cover: CoverSection;
  generals?: Generals;
  dev: boolean;
};

type Units = "days" | "hours" | "minutes" | "seconds";
type TimeLeft = Record<Units, number>;

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function cleanDate(dateString?: string | null): string | null {
  if (!dateString) return null;
  return dateString.endsWith("000Z") ? dateString.slice(0, -5) : dateString;
}

function diffToTimeLeft(target: Date, now = new Date()): TimeLeft {
  const ms = Math.max(0, +target - +now);
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return { days, hours, minutes, seconds };
}

function isSameYMD(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

const labels: Record<Units, { singular: string; plural: string }> = {
  days: { singular: "día", plural: "días" },
  hours: { singular: "hora", plural: "horas" },
  minutes: { singular: "minuto", plural: "minutos" },
  seconds: { singular: "segundo", plural: "segundos" },
};

export default function Countdown({ cover, generals, dev }: CountdownProps) {
  const targetDate = useMemo(() => {
    const s = cleanDate(cover?.date?.value);
    const t = s ? new Date(s) : null;
    return t && !isNaN(+t) ? t : null;
  }, [cover?.date?.value]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    if (!targetDate) {
      setTimeLeft(ZERO);
      setIsToday(false);
      return;
    }

    // tick inmediato y luego cada segundo
    const tick = () => {
      setTimeLeft(diffToTimeLeft(targetDate));
      setIsToday(isSameYMD(new Date(), targetDate));
    };
    tick();

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const color = cover.date.color ?? lighter(generals?.colors.accent ?? "#FFFFFF", 0.6);
  const font = generals?.fonts.body?.typeFace ?? "Poppins";

  if (!targetDate) {
    // sin fecha válida: muestra solo la fecha cruda o nada
    return (
      <div className={styles.date_container}>
        <span className={styles.date_date} style={{ color, fontFamily: font }}>
          {/* si tienes un label alterno, úsalo aquí */}
          {cover?.date?.value ? formatDate(cover.date.value) : "Fecha por definir"}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.date_container}>
      <span className={styles.date_date} style={{ color, fontFamily: font }}>
        {formatDate(cover.date.value)}
      </span>

      {isToday ? (
        <span className={styles.date_unit} style={{ fontSize: "22px", color, fontFamily: font }}>
          ¡Es Hoy!
        </span>
      ) : (
        <>
          <hr className={!dev ? styles.date_divider : styles.date_divider_dev} style={{ border: "1px solid", color, borderColor: color }} />
          <Row className={!dev ? styles.date_row : styles.date_row_dev}>
            {(["days", "hours", "minutes", "seconds"] as Units[]).map((u) => (
              <Col key={u} className={styles.date_col}>
                <span className={styles.date_time} style={{ color, fontFamily: font }}>
                  {timeLeft[u]}
                </span>
                <span className={styles.date_unit} style={{ color, fontFamily: font }}>
                  {timeLeft[u] === 1 ? labels[u].singular : labels[u].plural}
                </span>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
}
