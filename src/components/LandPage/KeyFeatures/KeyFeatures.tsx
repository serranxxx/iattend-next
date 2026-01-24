"use client";

import React, { useState } from "react";
import styles from "./key.module.css";
import { Button, Drawer } from "antd";
import Image from "next/image";
import { body } from "motion/react-client";
import { FaAngleRight, FaEnvelopeOpen, FaPaperPlane, FaUber } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlinePhonelink, MdOutlinePhonelinkLock } from "react-icons/md";
import { BsPassport, BsStars } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { FaTableList, FaTicket, FaUnlockKeyhole } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import AnimatedPath from "@/components/Motion/AnimatedPath";
import Link from "next/link";

type Feature = {
  label: React.ReactNode | null;
  seed: string | null;
  image: string;
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
  path: string;
};

export const KEY_FEATURES: KeyFeature[] = [
  {
    key: "paperless",
    title: "Invitación Paperless",
    value:
      "Invitaciones digitales paperless para bodas y eventos: elegantes, personalizables y fáciles de usar. Comparte toda tu información en un solo enlace, actualizable, visual y accesible desde cualquier dispositivo.",
    image: null,
    path: "invitacion-paperless",
  },
  {
    key: "invitados",
    title: "Gestión de invitados",
    value:
      "Guest Management de I attend: controla invitados en un solo lugar. Envía invitaciones por WhatsApp, gestiona accesos, confirma asistencias en tiempo real y mantén tu evento organizado, claro y sin estrés.",
    image: null,
    path: "guest-management",
  },
  {
    key: "privacidad",
    title: "Evento privado",
    value:
      "Privacidad total en tus invitaciones digitales: elige eventos públicos o privados, controla accesos, personaliza cada invitado y cambia la modalidad cuando quieras, con seguridad, flexibilidad y control absoluto.",
    image: null,
    path: "privacidad",
  },
  {
    key: "pases",
    title: "Pases digitales",
    value:
      "Pases digitales personalizados para bodas y eventos: acceso seguro desde el celular, generación automática al confirmar asistencia, mesas asignadas y control claro de invitados, sin boletos físicos y con una experiencia moderna.",
    image: null,
    path: "pases-digitales",
  },
  {
    key: "whatsapp",
    title: "Envíos automáticos",
    value:
      "Envía invitaciones por WhatsApp de forma automática y segura con I attend. Usa el API oficial, evita bloqueos, controla envíos con créditos y comunica tu evento de manera profesional y confiable.",
    image: null,
    path: "envios-whatsapp",
  },
  {
    key: "mesas",
    title: "Acomodo por mesas",
    value:
      "Organiza a tus invitados sin estrés con el seating chart digital de I attend: mapa de mesas interactivo, asignación visual, edición flexible y control total para bodas y eventos de cualquier tamaño.",
    image: null,
    path: "mapa-de-mesas",
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
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/paperless.jpg",
  },
  {
    label: (
      <>
        Gestión de <b>invitados</b>
      </>
    ),
    seed: "invitados",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/guest-management%20(1).jpg",
  },
  {
    label: (
      <>
        {" "}
        Evento <b>Privado</b>
      </>
    ),
    seed: "privacidad",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/privacy%20(1).jpg",
  },
  {
    label: (
      <>
        <b>Pases</b> digitales
      </>
    ),
    seed: "pases",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/pass.jpg",
  },
  {
    label: (
      <>
        Acomodo por <b>mesas</b>
      </>
    ),
    seed: "mesas",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/tabs.jpg",
  },
  {
    label: (
      <>
        Envíos <b>automáticos</b>
      </>
    ),
    seed: "whatsapp",
    image: "https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/whats.jpg",
  },
];

export const KeyFeatures = () => {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);

  return (
    <>
      <section className={styles.key_cont}>
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
                    <div className={styles.key_wrap}>
                      <Button
                        icon={<LuArrowUpRight />}
                        onClick={() => {
                          setOpen(true);
                          setCurrentItem(feature.seed);
                        }}
                        className={styles.key_button}
                        // style={{ position: "absolute", top: "0px", right: "16px" }}
                      ></Button>
                    </div>
                  </div>
                ) : (
                  <div key={index} className={styles.key_space} />
                )
              )}
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
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        height="auto"
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
          <Image
            src={KEY_FEATURES.find((k) => k.key === currentItem)?.image!}
            fill
            alt=""
            style={{ position: "absolute", objectFit: "cover", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          />
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
    </>
  );
};
