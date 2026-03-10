"use client";

import React, { useRef, useState } from "react";
import styles from "./key.module.css";
import { Button, Drawer } from "antd";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Feature = {
  label: React.ReactNode | null;
  seed: string | null;
  image: string;
};

export type KeyFeature = {
  key: string;
  title: string;
  value: string;
  image: string | null;
  path: string;
  type: "video" | "image";
};

export const KEY_FEATURES: KeyFeature[] = [
  {
    key: "paperless",
    title: "Invitación Paperless",
    value:
      "Invitaciones digitales paperless para bodas y eventos: elegantes, personalizables y fáciles de usar. Comparte toda tu información en un solo enlace, actualizable, visual y accesible desde cualquier dispositivo.",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/C0014.mp4",
    path: "invitacion-digital",
    type: "video",
  },
  {
    key: "invitados",
    title: "Gestión de invitados",
    value:
      "Guest Management de I attend: controla invitados en un solo lugar. Envía invitaciones por WhatsApp, gestiona accesos, confirma asistencias en tiempo real y mantén tu evento organizado, claro y sin estrés.",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/guest-management%20(1).jpg",
    path: "guest-management",
    type: "image",
  },
  {
    key: "privacidad",
    title: "Evento privado",
    value:
      "Privacidad total en tus invitaciones digitales: elige eventos públicos o privados, controla accesos, personaliza cada invitado y cambia la modalidad cuando quieras, con seguridad, flexibilidad y control absoluto.",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/C0003%20(1).mp4",
    path: "privacidad",
    type: "video",
  },
  {
    key: "pases",
    title: "Pases digitales",
    value:
      "Pases digitales personalizados para bodas y eventos: acceso seguro desde el celular, generación automática al confirmar asistencia, mesas asignadas y control claro de invitados, sin boletos físicos y con una experiencia moderna.",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/C0007%202.mp4",
    path: "pases-digitales",
    type: "video",
  },
  {
    key: "whatsapp",
    title: "Envíos automáticos",
    value:
      "Envía invitaciones por WhatsApp de forma automática y segura con I attend. Usa el API oficial, evita bloqueos, controla envíos con créditos y comunica tu evento de manera profesional y confiable.",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/C0018.mp4",
    path: "envios-whatsapp",
    type: "video",
  },
  {
    key: "mesas",
    title: "Acomodo por mesas",
    value:
      "Organiza a tus invitados sin estrés con el seating chart digital de I attend: mapa de mesas interactivo, asignación visual, edición flexible y control total para bodas y eventos de cualquier tamaño.",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/mesas.png",
    path: "mapa-de-mesas",
    type: "image",
  },
];

const FEATURES: Feature[] = [
  {
    label: (
      <>
        Invitación <b>Paperless</b>
      </>
    ),
    seed: "paperless",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/key-1.jpg",
  },
  {
    label: (
      <>
        Gestión de <b>invitados</b>
      </>
    ),
    seed: "invitados",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/key-2.jpg",
  },
  {
    label: (
      <>
        {" "}
        Evento <b>Privado</b>
      </>
    ),
    seed: "privacidad",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/key-3.jpg",
  },
  {
    label: (
      <>
        <b>Pases</b> digitales
      </>
    ),
    seed: "pases",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/key-4.jpg",
  },
  {
    label: (
      <>
        Acomodo por <b>mesas</b>
      </>
    ),
    seed: "mesas",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/key-5.jpg",
  },
  {
    label: (
      <>
        Envíos <b>automáticos</b>
      </>
    ),
    seed: "whatsapp",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/key-6.jpg",
  },
];

export const KeyFeatures = () => {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);


  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -800,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 800,
        behavior: "smooth"
      });
    }
  };


  return (
    <div className={styles.main_cont}>
      <section className={styles.key_cont} style={{ position: 'relative' }}>
        <span className={styles.key_title}>Todo fluye cuando tienes el control</span>


        <div className={styles.col}>
          <span className={styles.key_title_sec}>Crea tu lista de invitados y recibe confirmaciones al instante</span>
          <span className={styles.key_title_third}>Administra fácilmente a tus invitados, envía su invitación y recibe sus confirmaciones en tiempo real desde un solo lugar.</span>
          <div className={styles.image_cont}>
            <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/list_u_1.jpg" alt="" />
          </div>
        </div>

        <span className={styles.key_sub}>Organizar a tus invitados nunca fue tan fácil</span>


        <div

          ref={scrollRef}
          className={`${styles.cards_cont} scroll-invitation`}
        >


          <div className={styles.card_col}>
            <div
              className={styles.big_card}
              style={{ flexDirection: 'row' }}
            >
              <img
                style={{
                  right: 0,
                  top: 0,
                  zIndex: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/list_u_2.jpg"
                alt=""
              />
            </div>
            <span>
              <b>Organiza a tus invitados fácilmente</b> Crea tu lista de invitados, clasifícalos como prefieras y envía la invitación solo a las personas que tú decidas.
            </span>
          </div>

          <div className={styles.card_col}>
            <div
              className={styles.big_card}
              style={{ flexDirection: 'row' }}
            >
              <img
                style={{
                  right: 0,
                  top: 0,
                  zIndex: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/lap_u.jpg"
                alt=""
              />
            </div>
            <span>
              <b>Clasifica a tus invitados</b> Organiza tu lista de invitados en diferentes categorías o tiers. Con I attend puedes dar un trato especial a cada grupo y gestionar tu evento con mayor control.
            </span>
          </div>

          <div className={styles.card_col}>
            <div
              className={styles.big_card}
              style={{ flexDirection: 'row' }}
            >
              <img
                style={{
                  right: 0,
                  top: 0,
                  zIndex: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/download_u.jpg"
                alt=""
              />
            </div>
            <span>
              <b>Descarga tu información cuando la necesites</b> Exporta tus listas y datos en formato Excel para consultarlos, compartirlos o analizarlos fácilmente en cualquier momento.
            </span>
          </div>

          <div className={styles.card_col}>
            <div
              className={styles.big_card}
              style={{ flexDirection: 'row' }}
            >
              <img
                style={{
                  right: 0,
                  top: 0,
                  zIndex: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/whats_u.jpg"
                alt=""
              />
            </div>
            <span>
              <b>Envía tus invitaciones automáticamente por WhatsApp</b> Haz que tus invitados reciban su invitación de forma automática a través de WhatsApp. Con I attend, los envíos son más organizados y seguros para evitar bloqueos.
            </span>
          </div>

          <div className={styles.card_col}>
            <div
              className={styles.big_card}
              style={{ flexDirection: 'row' }}
            >
              <img
                style={{
                  right: 0,
                  top: 0,
                  zIndex: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/noti_u.jpg"
                alt=""
              />
            </div>
            <span>
              <b>Recibe confirmaciones al instante</b> Cada vez que un invitado confirme su asistencia, I attend te envía una notificación para que siempre sepas quién asistirá a tu evento.
            </span>
          </div>

          <div className={styles.card_col}>
            <div
              className={styles.big_card}
              style={{ flexDirection: 'row' }}
            >
              <img
                style={{
                  right: 0,
                  top: 0,
                  zIndex: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/cont_u.jpg"
                alt=""
              />
            </div>
            <span>
              <b>Control de tus pases</b> Administra y gestiona fácilmente los pases digitales de tus invitados para mantener el orden y control durante tu evento.
            </span>
          </div>

          <div className={styles.card_col}>
            <div
              className={styles.big_card}
              style={{ flexDirection: 'row' }}
            >
              <img
                style={{
                  right: 0,
                  top: 0,
                  zIndex: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/tables_u.jpg"
                alt=""
              />
            </div>
            <span>
              <b>Planifica el acomodo de tus mesas</b> Organiza a tus invitados fácilmente asignándolos a diferentes mesas y mantén todo listo para el día de tu evento.
            </span>
          </div>






        </div>

        <div className={styles.button_frame} style={{ bottom: '20%' }}>
          <Button
            onClick={scrollLeft}
            icon={<ArrowLeft size={16} />}
            style={{ left: '5%' }}
            className={styles.scroll_button}
          />

          <Button
            onClick={scrollRight}
            icon={<ArrowRight size={16} />}
            style={{ right: '0%' }}
            className={styles.scroll_button}
          />
        </div>



        {/* <div className={styles.key_main_cont}>
          {FEATURES.map((feature, colIndex) => (
            <div key={colIndex} className={styles.key_item}>
              <img src={`${feature.image}`} alt="" style={{ position: "absolute", objectFit: "cover", width: '100%', height: '100%', left: 0, top: 0 }} />
              <div className={styles.shadow}></div>
              <span className={styles.key_label}>{feature.label}</span>
              <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                <div className={styles.key_wrap}>
                  <Button
                    icon={<LuArrowUpRight />}
                    onClick={() => {
                      setOpen(true);
                      setCurrentItem(feature.seed);
                    }}
                    className={styles.key_button}
                  //
                  ></Button>
                </div>
              </div>
            </div>
            // <div key={colIndex} className={styles.key_col}>
            //   {column.map((feature, index) =>
            //     feature && feature.seed ? (

            //     ) : (
            //       <div key={index} className={styles.key_space} />
            //     )
            //   )}
            // </div>
          ))}
          <img className={styles.loop_img} src="/assets/images/espiral.svg" alt="" />
        </div> */}
        {/* <div className={styles.key_grid}>
          {FEAT.map((feature, index) => (
            <div key={index} className={styles.grid_card}>
              <div className={styles.single_row}>
                <feature.icon size={18} style={{ color: "#CFBEE6" }} />
                <span style={{ fontWeight: 600 }}>{feature.label}</span>
              </div>

              <span style={{ fontWeight: 400, lineHeight: "1.4" }}>{feature.desc}</span>
              <Button
                icon={<FaAngleRight />}
                onClick={() => {
                  setOpen(true);
                  setCurrentItem(feature.seed);
                }}
                className={styles.key_button}
                style={{ position: "absolute", top: "0px", right: "16px" }}
              ></Button>
            </div>
          ))}
        </div> */}
      </section>

      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        size="auto"
        closeIcon={false}
        style={{
          borderRadius: "0px 12px 12px 0",
          backgroundImage: `linear-gradient(to bottom, #FFF 40%, #CFBEE660)`,
          maxWidth: "90%",
        }}
        styles={{
          header: {
            display: "none",
            // backgroundColor: content.inverted ? secondary : primary,
          },
          body: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "12px",
            color: "#FFF",
            padding: "8px",
          },
        }}
      >
        <div className={styles.image_cont}>
          {KEY_FEATURES.find((k) => k.key === currentItem)?.type === "video" ? (
            <video
              // ref={videoRef}
              src={KEY_FEATURES.find((k) => k.key === currentItem)?.image!}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
              style={{
                width: "100%",
                borderRadius: 0,
                position: "absolute",
                border: "none",
                objectFit: "cover",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ) : (
            <Image
              src={KEY_FEATURES.find((k) => k.key === currentItem)?.image!}
              fill
              alt=""
              style={{
                position: "absolute",
                objectFit: "cover",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}

          {/* <Image
            src={KEY_FEATURES.find((k) => k.key === currentItem)?.image!}
            fill
            alt=""
            style={{
              position: "absolute", objectFit: "cover",
              left: '50%', top: '50%', transform: 'translate(-50%, -50%)'
            }}
          /> */}
        </div>

        <span className={styles.drawer_title}>{KEY_FEATURES.find((k) => k.key === currentItem)?.title}</span>
        <span className={styles.drawer_value}>{KEY_FEATURES.find((k) => k.key === currentItem)?.value}</span>
        <div style={{ marginTop: "16px" }} className={styles.action_wrap}>
          <Button icon={<LuArrowUpRight size={16} />} className={styles.action_button}>
            <Link href={`/about/${KEY_FEATURES.find((k) => k.key === currentItem)?.path ?? "privacidad"}`}>Más información</Link>
          </Button>
        </div>

        {/* <a className={styles.drawer_a} href={`about/features/${KEY_FEATURES.find((k) => k.key === currentItem)?.path ?? 'privacidad'}`}>Ver más</a> */}
      </Drawer>

      <section className={styles.seo_content}>
        {KEY_FEATURES.map((f) => (
          <article key={f.key}>
            <h2>{f.title}</h2>
            <p>{f.value}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
