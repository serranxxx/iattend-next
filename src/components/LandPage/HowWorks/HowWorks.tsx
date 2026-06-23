"use client";

import { useState, useRef } from "react";
import styles from "./howworks.module.css";
import { Star } from "lucide-react";
import { SpinSVG } from "./SpinSVG";


const SPIN1_PATH = "M3 3C6.86 13.58 15.12 22.48 25.4 27.11C36.02 31.89 49.5 32.26 60.06 27.04C72.89 20.7 82.65 2.19 98.67 14.09C113.84 25.36 116.86 49.54 120.68 66.65C124.8 85.12 125.21 104.61 119.47 122.79C117.97 127.53 114.93 132.97 109.96 132.91C103.96 132.83 101.54 125.15 101.34 119.15C100.6 96.07 114.07 30.81 149.59 42.24C158.8 45.2 165.46 53.56 168.81 62.64C173.48 75.27 173.86 86.14 173.21 91.2";
const SPIN2_PATH = "M97.5 3C85.98 13.75 74.4 25.88 69.67 41.3C67.85 47.25 67.37 54.24 71.88 59.12C75.28 62.79 80.39 64.4 85.17 65.27C95.88 67.22 107.61 66.52 118.44 65.89C130.59 65.19 145.84 63.5 154.69 54.19C159.67 48.96 168.92 35.82 160.88 29.41C153.56 23.57 141.13 30.73 134.52 34.46C125.07 39.8 115.71 46.11 107.15 52.77C94.89 62.3 83.22 73.63 77.07 88.1C74.31 94.59 72.04 101.4 67.98 107.23C63.79 113.25 57.83 117.31 50.73 119.12C44.16 120.79 37.19 120.8 30.6 119.32C24.37 117.91 18.31 115.59 11.93 114.9C8.95 114.58 5.91 114.64 3 115.44";
const SPIN3_PATH = "M9.56 3C4.39 11.36 2.33 20.08 3.19 29.48C4.05 38.88 11.73 45.29 20.28 48.07C48.27 56.19 76.72 59.06 105.61 53.59C119.16 51.41 134.15 49.58 144.32 38.94C150.73 31.25 150.22 20.4 142.53 13.99C132.28 5.44 119.29 8.52 108.69 14.46C102.41 18.35 96.3 21.51 89.85 26.12C85.92 29.79 80.71 32.4 76.77 36.07C75.53 38.08 73.74 39.19 71.94 40.3C59.25 51.88 47.11 64.35 50.61 82.04C53.68 95.03 66.29 103.36 78.98 104.82C93.29 105.89 107.52 100.81 121.37 107.13C131.2 110.98 133.16 122.17 136.21 131.06";
const SPIN4_PATH = "M3 54.3446C13.06 56.0146 22.36 60.1846 32.1 59.1246C45.07 57.2746 55.73 47.0446 60.45 35.1146C65.14 22.5246 70.92 4.67463 87.96 6.57463C93.2 7.00463 97.18 8.79463 101.85 11.2146C119.92 22.1946 132.86 35.3546 147.19 50.4146C154.71 58.5746 160.92 66.7946 165.26 77.0546C168.87 85.3846 169.98 96.4246 161.09 102.015C157.27 104.135 153.36 104.295 149.42 103.805C142.83 102.125 137.43 97.7846 134.55 91.3846C126.52 70.8446 123.01 49.4746 124.69 27.2246C125.58 17.4046 130.41 8.07463 140.04 4.40463C151.62 0.654625 162.88 4.75463 171.7 12.8646C179.16 19.7246 184.78 29.2746 194.06 32.8046C207.33 38.1246 218.58 26.5646 230.79 22.1346C234.02 21.3446 237.22 19.9046 241.05 19.8846";

const STEPS = [
  {
    num: "01", title: "EMPIEZA",
    desc: "Te hacemos preguntas simples sobre tu boda y tus invitados. En minutos sabes por dónde empezar, sin sentirte perdida.",
    spinPath: SPIN1_PATH, spinW: 177, spinH: 136, spinVB: "0 0 177 136",
    mobW: 90, mobH: 69,
  },
  {
    num: "02", title: "ORGANIZA",
    desc: "Todo lo de tus invitados que estaba en tu cabeza, en notas, en el teléfono, queda en un solo lugar, sin recordar pendientes.",
    spinPath: SPIN2_PATH, spinW: 168, spinH: 124, spinVB: "0 0 168 124",
    mobW: 90, mobH: 66,
  },
  {
    num: "03", title: "PERSONALIZA",
    desc: "Eliges el estilo que va con tu boda, y que se vea bonito, bien hecho, a tu gusto. Sin saber de diseño. Sin complicarte.",
    spinPath: SPIN3_PATH, spinW: 152, spinH: 135, spinVB: "0 0 152 135",
    mobW: 90, mobH: 80,
  },
  {
    num: "04", title: "DEJA DE PERSEGUIR",
    desc: "Las invitaciones se envían y las confirmaciones llegan solas. Sin escribirle a nadie y sin tener que recordarle a nadie. Un alivio.",
    spinPath: SPIN4_PATH, spinW: 245, spinH: 108, spinVB: "0 0 245 108",
    mobW: 120, mobH: 90,
  },
  {
    num: "05", title: "TEN EL CONTROL",
    desc: "Ves quién va, quién no y cómo va todo, en cualquier momento, tiempo real. Y sin dudas ni sorpresas.",
    spinPath: SPIN1_PATH, spinW: 177, spinH: 136, spinVB: "0 0 177 136",
    mobW: 90, mobH: 69,
  },
];

export const HowWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const touchStartX = useRef(0);
  const invCardsRef = useRef<HTMLDivElement>(null);

  const scrollInvCards = (dir: 'left' | 'right') => {
    invCardsRef.current?.scrollBy({ left: dir === 'right' ? 240 : -240, behavior: 'smooth' });
  };

  const goTo = (idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setActiveStep(idx);
      setVisible(true);
    }, 150);
  };

  const prev = () => goTo((activeStep + STEPS.length - 1) % STEPS.length);
  const next = () => goTo((activeStep + 1) % STEPS.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) { if (delta < 0) next(); else prev(); }
  };

  const step = STEPS[activeStep];

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', width: '100%', maxWidth: '1700px', boxShadow: '-20px 0 40px rgba(0,0,0,0.2), 20px 0 40px rgba(0,0,0,0.2)' }}>
      <section className={styles.cont}>

        {/* ── Desktop layout ── */}
        <div className={styles.how_line} />
        <div className={styles.how_main}>
          <div className={styles.how_inner}>

            <div className={styles.how_cont}>
              <div className={styles.how_steps_cont}>
                <span className={styles.steps_title}>HOW IT WORKS.</span>

                <div className={styles.step}>
                  <div className={styles.step_header}>
                    <div className={styles.step_number}><span>1</span></div>
                    <div className={styles.step_title}><span>EMPIEZA</span></div>
                  </div>
                  <span className={styles.step_desc}>
                    Te hacemos preguntas simples sobre tu boda y tus invitados. En minutos sabes por dónde empezar, sin sentirte perdida.
                  </span>
                </div>

                <div className={styles.spin_cont}>
                  <SpinSVG path={SPIN1_PATH} width={177} height={136} viewBox="0 0 177 136" delay={0} />
                </div>

                <div className={styles.step}>
                  <div className={styles.step_header}>
                    <div className={styles.step_number}><span>2</span></div>
                    <div className={styles.step_title}><span>ORGANIZA</span></div>
                  </div>
                  <span className={styles.step_desc}>
                    Todo lo de tus invitados que estaba en tu cabeza, en notas, en el teléfono, queda en un solo lugar, sin recordar pendientes.
                  </span>
                </div>

                <div className={styles.spin_cont}>
                  <SpinSVG path={SPIN2_PATH} width={168} height={124} viewBox="0 0 168 124" delay={0.5} />
                </div>

                <div className={styles.step}>
                  <div className={styles.step_header}>
                    <div className={styles.step_number}><span>3</span></div>
                    <div className={styles.step_title}><span>PERSONALIZA</span></div>
                  </div>
                  <span className={styles.step_desc}>
                    Eliges el estilo que va con tu boda, y que se vea bonito, bien hecho, a tu gusto. Sin saber de diseño. Sin complicarte.
                  </span>
                </div>

                <div className={styles.spin_cont}>
                  <SpinSVG path={SPIN3_PATH} width={152} height={135} viewBox="0 0 152 135" delay={1} />
                </div>
              </div>

              <div className={styles.image_cont}>
                <img src="/landing/dance.jpg" alt="test" className={styles.img_test} />
                <img src="/landing/items/s_sticker.png" alt="" className={styles.s_sticker} />
                <img src="/landing/items/item4.png" alt="" className={styles.item4} />
              </div>
            </div>

            <div className={styles.extra_steps_row}>
              <div className={styles.step} style={{ maxWidth: '320px' }}>
                <div className={styles.step_header}>
                  <div className={styles.step_number}><span>4</span></div>
                  <div className={styles.step_title}><span>DEJA DE PERSEGUIR</span></div>
                </div>
                <span className={styles.step_desc}>
                  Las invitaciones se envían y las confirmaciones llegan solas. Sin escribirle a nadie y sin tener que recordarle a nadie. Un alivio.
                </span>
              </div>

              <div className={styles.spin_cont_h}>
                <span className={styles.spin_desktop}>
                  <SpinSVG path={SPIN4_PATH} width={205} height={108} viewBox="0 0 245 108" delay={1.5} />
                </span>
                <span className={styles.spin_mobile}>
                  <SpinSVG path={SPIN3_PATH} width={152} height={135} viewBox="0 0 152 135" delay={1.5} />
                </span>
              </div>

              <div className={styles.step}>
                <div className={styles.step_header}>
                  <div className={styles.step_number}><span>5</span></div>
                  <div className={styles.step_title}><span>TEN EL CONTROL</span></div>
                </div>
                <span className={styles.step_desc}>
                  Ves quién va, quién no y cómo va todo, en cualquier momento, tiempo real. Y sin dudas ni sorpresas.
                </span>
              </div>
            </div>

            <div className={styles.bottom_row}>
              <span>Y lo mejor: disfrutando el proceso de planear tu evento.</span>
            </div>

          </div>
        </div>

        {/* ── Mobile carousel ── */}
        <div className={styles.mob_carousel}>
          <span className={styles.steps_title}>HOW IT WORKS.</span>

          <div className={styles.mob_image_cont}>
            <img src="/landing/dance.jpg" alt="" className={styles.mob_img} />
            <img src="/landing/items/s_sticker.png" alt="" className={styles.mob_sticker} />
            <img src="/landing/items/item4.png" alt="" className={styles.mob_item4} />
          </div>

          <div
            className={styles.mob_card}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(12px)',
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.step_header}>
              <div className={styles.step_number}><span>{activeStep + 1}</span></div>
              <div className={styles.step_title}><span>{step.title}</span></div>
            </div>
            <span style={{ textAlign: 'center', lineHeight: '1.6' }} className={styles.step_desc}>{step.desc}</span>
            <div className={styles.mob_spin} style={{ width: '100%', justifyContent: 'center', display: 'flex' }} >
              <SpinSVG
                path={step.spinPath}
                width={step.mobW}
                height={step.mobH}
                viewBox={step.spinVB}
                delay={0}
              />
            </div>
          </div>

          <div className={styles.mob_nav}>
            <button className={styles.mob_arrow} onClick={prev} aria-label="Anterior">←</button>
            <div className={styles.mob_dots}>
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.mob_dot} ${i === activeStep ? styles.mob_dot_active : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.mob_arrow} onClick={next} aria-label="Siguiente">→</button>
          </div>
        </div>

        <img src="/landing/items/stamp.png" alt="" className={styles.stamp} />

      </section>

      <div className={styles.filter_row} >
        <div className={styles.filter_block_1}>
          <img src="/landing/spins/spin6.png" alt="" className={styles.spin6} />
          <span className={styles.filter_title}>ESTO ES PARA TI SI:</span>
          <div className={styles.filter_content}>
            <span>• Ya estás comprometida y en plena planeación de tu boda/evento</span>
            <span>• Tienes mil decisiones encima y no sabes cuál delegar</span>
            <span>• Sientes que cada pendiente es una carga más</span>
            <span>• Quieres tener todo bajo control sin hacer el trabajo de una wedding planner</span>
            <span>• Quieres disfrutar el proceso de tu boda, no estresarte</span>
            <span>• Quieres confiar en algo que lo resuelva sin complicarte</span>
          </div>
        </div>

        <div className={styles.filter_block_2}>
          <span className={styles.filter_title}>ESTO NO ES PARA TI SI:</span>
          <div className={styles.filter_content}>
            <span>• Solo buscas una imagen bonita para mandar por WhatsApp</span>
            <span>• Te gusta manejar todo manualmente con muchos procesos en muchas plataformas</span>
            <span>• No estás lista para soltar una parte del proceso</span>
            <span>• Crees que un evento es algo que puedes resolver sola</span>
            <span>• Tu boda ya está completamente organizada y tienes todo bajo control</span>
            {/* <span>• Tu fecha es en más de un año y todavía no estás en modo planificación</span> */}
          </div>
        </div>

        <img src="/landing/loops_1.png" alt="" className={styles.loops} />
        <img src="/landing/items/detail.png" alt="" className={styles.detail} />
        <img src="/landing/spins/spin5.png" alt="" className={styles.spin5} />
      </div>

      <div className={styles.bonus_cont}>
        <img src="/landing/dinner.jpg" alt="" className={styles.dinner} />
        <div className={styles.shadow} />
        <span className={styles.bonus_label}>Oh, and one more thing</span>

        <div className={styles.inv_cards_row} ref={invCardsRef}>
          {[
            {
              title: "¿Tienes despedida, ensayo o brunch del día siguiente?",
              text: "Todo conectado en el mismo sistema, sin empezar de cero.",
            },
            {
              title: "¿Te preocupa que te llegue alguien de sorpresa?",
              text: "Cada invitado recibe su propio link personalizado y sin que se pueda reenviar. Sin descargar nada, ni saber de tecnología.",
            },
          ].map((item, i) => (
            <div key={i} className={styles.inv_row}>
              <div className={styles.inv_sleeve_wrap}>
                <div className={styles.inv_card_peek} />
                <div className={styles.inv_pocket}>
                  <span className={styles.bonus_title}>{item.title}</span>
                </div>
              </div>
              <div className={styles.inv_card}>
                <Star size={16} color="#0c171b" />
                <span className={styles.bonus_text}>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.inv_nav}>
          <button className={styles.inv_nav_btn} onClick={() => scrollInvCards('left')} aria-label="Anterior">←</button>
          <button className={styles.inv_nav_btn} onClick={() => scrollInvCards('right')} aria-label="Siguiente">→</button>
        </div>

        <span className={styles.bonus_label} style={{ fontSize: '24px' }}>Pero no te dejamos sola., estamos contigo desde que empiezas
          hasta el día de tu boda: soporte en TODO el proceso</span>t
      </div>
    </div>
  );
};
