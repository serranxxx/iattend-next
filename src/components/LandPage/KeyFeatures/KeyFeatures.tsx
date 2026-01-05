"use client";

import React, { useState } from "react";
import styles from "./key.module.css";
import { Button, Drawer } from "antd";
import Image from "next/image";
import { body } from "motion/react-client";
import { FaAngleRight, FaEnvelopeOpen, FaPaperPlane, FaUber } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlinePhonelink, MdOutlinePhonelinkLock } from "react-icons/md";
import { BsPassport } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { FaTableList, FaTicket, FaUnlockKeyhole } from "react-icons/fa6";

type Feature = {
  label: React.ReactNode | null;
  seed: string | null;
};

type Feat = {
  label: React.ReactNode | null;
  seed: string | null;
  icon: any;
  desc: string;
};

export type KeyFeature = {
  key: string;
  title: string;
  value: string;
  image: string | null;
};

export const KEY_FEATURES: KeyFeature[] = [
  {
    key: "respuestas",
    title: "Respuestas",
    value:
      "Conoce quién asistirá a tu evento en tiempo real. Tus invitados confirman su asistencia de forma sencilla y tú mantienes el control total de las respuestas, sin mensajes perdidos ni listas manuales.",
    image: null,
  },
  {
    key: "paperless",
    title: "Invitación Paperless",
    value:
      "Tu invitación vive en línea, siempre actualizada y fácil de compartir. Olvídate del papel y de los reenvíos infinitos, todo tu evento en un solo enlace.",
    image: null,
  },
  {
    key: "invitados",
    title: "Gestión de invitados",
    value:
      "Administra tu lista de invitados desde un solo lugar. Agrega, edita y organiza invitados fácilmente, controla accesos y mantén todo bajo control sin complicaciones.",
    image: null,
  },
  {
    key: "privacidad",
    title: "Privacidad",
    value:
      "Tu evento solo para quien tú decidas. Controla quién puede ver tu invitación mediante accesos privados, códigos o enlaces seguros, protegiendo la información de tu evento.",
    image: null,
  },
  {
    key: "pases",
    title: "Pases digitales",
    value:
      "Convierte la invitación en un pase de acceso. Cada invitado cuenta con su pase digital para validar su entrada y facilitar el control el día del evento.",
    image: null,
  },
  {
    key: "whatsapp",
    title: "Envíos por WhatsApp",
    value:
      "Comparte tu invitación de forma rápida y directa. Envía accesos personalizados por WhatsApp y asegúrate de que tu invitación llegue a cada invitado sin fricciones.",
    image: null,
  },
  {
    key: "mesas",
    title: "Acomodo por mesas",
    value:
      "Organiza a tus invitados de forma clara y visual. Define mesas, asigna lugares y ajusta el acomodo cuando lo necesites para que el día del evento todo fluya sin estrés.",
    image: null,
  },
];

const FEATURES: Feature[][] = [
  [
    {
      label: null,
      seed: null,
    },
    {
      label: (
        <>
          Invitación <b>Paperless</b>
        </>
      ),
      seed: "paperless",
    },
    {
      label: (
        <>
          Gestión de <b>invitados</b>
        </>
      ),
      seed: "invitados",
    },

    {
      label: null,
      seed: null,
    },
  ],
  [
    {
      label: <b>Respuestas</b>,
      seed: "respuestas",
    },
    {
      label: <b>Privacidad</b>,
      seed: "privacidad",
    },
    {
      label: (
        <>
          <b>Pases</b> digitales
        </>
      ),
      seed: "pases",
    },
  ],
  [
    {
      label: null,
      seed: null,
    },
    {
      label: (
        <>
          Acomodo por <b>mesas</b>
        </>
      ),
      seed: "mesas",
    },
    {
      label: (
        <>
          Envíos por <b>Whatsapp</b>
        </>
      ),
      seed: "whatsapp",
    },
    {
      label: null,
      seed: null,
    },
  ],
];

const FEAT: Feat[] = [
  {
    label: "Invitación Paperless",
    seed: "paperless",
    icon: FaEnvelopeOpen,
    desc: "Tu invitación vive en línea, siempre actualizada y fácil de compartir.",
  },
  {
    label: "Gestión de invitados",
    seed: "invitados",
    icon: FaTableList,
    desc: "Administra tu lista de invitados desde un solo lugar.",
  },
  //   {
  //     label: <b>Respuestas</b>,
  //     seed: "respuestas",
  //   },
  {
    label: "Privacidad",
    seed: "privacidad",
    icon: FaUnlockKeyhole,
    desc: "Controla quién puede ver tu invitación mediante accesos privados.",
  },
  {
    label: "Pases digitales",
    seed: "pases",
    icon: FaTicket,
    desc: "Convierte la invitación en un pase de acceso.",
  },
  {
    label: "Acomodo por mesas",
    seed: "mesas",
    icon: ImSpoonKnife,
    desc: "Organiza a tus invitados de forma clara y visual.",
  },
  {
    label: "Envíos por Whatsapp",
    seed: "whatsapp",
    icon: FaPaperPlane,
    desc: "Comparte tu invitación de forma rápida y directa.",
  },
];

export const KeyFeatures = () => {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);

  return (
    <>
      <section className={styles.key_cont}>
        <img className={styles.loop_img} src="/assets/images/espiral.svg" alt="" />
        <span className={styles.key_title}>Todo fluye cuando tienes el control</span>
        <div className={styles.key_main_cont}>
          {FEATURES.map((column, colIndex) => (
            <div key={colIndex} className={styles.key_col}>
              {column.map((feature, index) =>
                feature && feature.seed ? (
                  <div key={index} className={styles.key_item}>
                    <Image
                      src={`https://picsum.photos/seed/${feature.seed}/600/400`}
                      alt=""
                      fill
                      style={{ position: "absolute", objectFit: "cover" }}
                    />
                    <div className={styles.shadow}></div>
                    <span className={styles.key_label}>{feature.label}</span>
                    <Button
                      onClick={() => {
                        setOpen(true);
                        setCurrentItem(feature.seed);
                      }}
                      className={styles.key_button}
                    >
                      Ver
                    </Button>
                  </div>
                ) : (
                  <div key={index} className={styles.key_space} />
                )
              )}
            </div>
          ))}
        </div>
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
        placement="bottom"
        open={open}
        onClose={() => setOpen(false)}
        height="auto"
        closeIcon={false}
        style={{
          borderRadius: "24px 24px 0 0",
          backgroundImage: `linear-gradient(to bottom, #FFF 40%, #CFBEE660)`,
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
          },
        }}
      >
        <div className={styles.image_cont}>
          <Image
            src={`https://picsum.photos/seed/${currentItem}/600/400`}
            fill
            alt=""
            style={{ position: "absolute", objectFit: "cover" }}
          />
          <img className={styles.loop_drawer} src="/assets/images/espiral.svg" alt="" />
        </div>

        <span className={styles.drawer_title}>{KEY_FEATURES.find((k) => k.key === currentItem)?.title}</span>
        <span className={styles.drawer_value}>{KEY_FEATURES.find((k) => k.key === currentItem)?.value}</span>
      </Drawer>
    </>
  );
};
