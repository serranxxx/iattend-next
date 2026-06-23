"use client";
import { useState } from "react";
import styles from "./frequent.module.css";

const FAQS = [
  {
    q: "¿Esto me va a complicar más la planeación?",
    a: "Al contrario — I attend centraliza tu lista de invitados, confirmaciones y pases digitales en un solo lugar. Lo que antes tomaba horas de WhatsApp y Excel ahora lo gestionas en minutos.",
  },
  {
    q: "¿Mis invitados van a saber usarlo?",
    a: "Sí. El proceso es muy sencillo: reciben un link, confirman asistencia y guardan su pase digital. No necesitan descargar ninguna app ni crear una cuenta.",
  },
  {
    q: "¿Y si algo falla el día de mi boda?",
    a: "El acceso a los pases funciona offline desde el teléfono del anfitrión. Además, puedes exportar tu lista completa en cualquier momento como respaldo.",
  },
  {
    q: "¿Realmente lo necesito o lo puedo hacer yo sola?",
    a: "Puedes, claro — pero el día de tu evento agradecerás no estar buscando nombres en un Excel ni respondiendo '¿ya confirmaste?' por WhatsApp. I attend te da esa tranquilidad.",
  },
  {
    q: "¿Cuánto tiempo tengo para usar I attend?",
    a: "Puedes contratar hoy y utilizar la plataforma cuando gustes. El enlace de tu invitación digital estará vigente por siempre",
  },
];

export const Frequent = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className={styles.cont}>
      <div className={styles.left}>
        <div className={styles.stack_wrap}>
          <img src="landing/items/pic3.png" alt="" className={styles.pic_bg} />
          <img src="landing/items/envelope.png" alt="" className={styles.pic_front} />
        </div>
      </div>

      <div className={styles.right}>
        <h2 className={styles.faq_title}>PREGUNTAS<br />FRECUENTES</h2>

        <ul className={styles.faq_list}>
          {FAQS.map((item, i) => (
            <li key={i} className={styles.faq_item} onClick={() => toggle(i)}>
              <div className={styles.faq_header}>
                <span className={styles.faq_question}>{item.q}</span>
                <span className={`${styles.faq_arrow} ${open === i ? styles.faq_arrow_open : ""}`} />
              </div>
              <div className={`${styles.faq_answer} ${open === i ? styles.faq_answer_open : ""}`}>
                <div className={styles.faq_answer_inner}>
                  <p className={styles.faq_answer_text}>{item.a}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
