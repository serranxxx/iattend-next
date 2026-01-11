import React from "react";
import styles from "./work.module.css";
import { Button } from "antd";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

export const WorkFlow = () => {
  return (
    <div className={styles.key_cont}>
      <span className={styles.key_title}>Paso a paso, sin complicarte</span>

      <div className={styles.flow_container}>
        <div className={styles.flow_card} >
          <Image fill src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/ARJ00442.jpg" alt="" style={{ objectFit: 'cover' }} />
          <div className={styles.shadow}></div>
          <img className={styles.lines} src="/assets/images/line_2.svg" alt="" />
          <span className={styles.flow_title}>
            Haz tu lista de <span style={{ color: "#CFBEE6" }}>invitados</span>
          </span>
          <span className={styles.flow_sub}>Crea y organiza tu lista de invitados desde un solo lugar.</span>
        </div>
        <div className={styles.flow_card}>
          <Image fill src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/ARJ00285.jpg" alt="" style={{ objectFit: 'cover', transform: 'scaleX(-1)' }} />
          <div className={styles.shadow}></div>
          <img style={{ bottom: "0px" }} className={styles.lines} src="/assets/images/line_3.svg" alt="" />
          <span className={styles.flow_title}>
            Diseña tu <span style={{ color: "#CFBEE6" }}>invitación</span>
          </span>
          <span className={styles.flow_sub}>Personaliza tu invitación de forma sencilla y sin complicaciones.</span>
        </div>
        <div className={styles.flow_card} >
          <Image fill src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/ARJ00414.jpg" alt="" style={{ objectFit: 'cover' }} />
          <div className={styles.shadow}></div>
          <img style={{ bottom: "12px", }} className={styles.lines} src="/assets/images/line_4.svg" alt="" />
          <span className={styles.flow_title}>
            <span style={{ color: "#CFBEE6" }}>Comparte</span> con tus invitados
          </span>
          <span className={styles.flow_sub}>Envía tu invitación de manera rápida y directa.</span>
        </div>
        {/* <div className={styles.flow_card} style={{ backgroundImage: `url(https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/ARJ00440.jpg)`, }}>
          <div className={styles.shadow}></div>
          <img style={{ bottom: "-8px",  }} className={styles.lines} src="/assets/images/line_4.svg" alt="" />
          <span className={styles.flow_title}>
            <span style={{ color: "#CFBEE6" }}>Controla</span> confirmaciones y acomodo
          </span>
          <span className={styles.flow_sub}>Visualiza respuestas en tiempo real y organiza a tus invitados con facilidad.</span>
        </div> */}
      </div>
    </div>
  );
};
