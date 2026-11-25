import Image from "next/image";
import { Button } from "antd";
import {
  ArrowLeft,
  CircleCheck,
  CircleX,
  CloudUpload,
  Eye,
  Images,
  Link2,
  LockOpen,
  Palette,
  PenLine,
  Redo2,
  Shapes,
  Share,
  Undo2,
  Users,
} from "lucide-react";
import { IMG, POPS_APP_URL, type PaperKind, type Tone } from "../data";
import styles from "./shared.module.css";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export const toneClass = (tone: Tone | "pinkStrong" | "kraft") => styles[`tone_${tone}`];

/* ── Decoración ─────────────────────────────────────────── */

export const Star = ({ className, lined }: { className?: string; lined?: boolean }) => (
  <span aria-hidden="true" data-anim="pop" data-hover="spin" data-depth="14" className={cx(styles.star, lined && styles.starLined, className)} />
);

export const Tape = ({ className }: { className?: string }) => (
  <span aria-hidden="true" data-idle="flutter" className={cx(styles.tape, className)} />
);

export const Sticker = ({ src, className }: { src: string; className?: string }) => (
  <Image src={src} alt="" aria-hidden="true" width={128} height={128} unoptimized data-anim="pop" data-idle="float" data-hover="wiggle" data-depth="26" className={cx(styles.sticker, className)} />
);

/** Objeto recortado (PNG/WebP sin fondo) dentro de una caja con tamaño. */
export const Cutout = ({ src, className, sizes }: { src: string; className?: string; sizes: string }) => (
  <div aria-hidden="true" data-anim="drop" data-idle="float" data-depth="20" className={cx(styles.cutout, className)}>
    <Image src={src} alt="" fill sizes={sizes} className={styles.contain} />
  </div>
);

export const Polaroid = ({
  src,
  alt,
  caption,
  className,
  tapeClassName,
  sizes,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  tapeClassName?: string;
  sizes: string;
}) => (
  <figure data-anim="drop" data-idle="flutter" data-hover="wiggle" data-depth="10" className={cx(styles.polaroid, className)}>
    {tapeClassName && <Tape className={tapeClassName} />}
    <div className={styles.polaroidPhoto}>
      <Image src={src} alt={alt} fill sizes={sizes} className={styles.cover} />
    </div>
    <figcaption className={styles.polaroidCaption}>{caption}</figcaption>
  </figure>
);

/* ── CTA ────────────────────────────────────────────────── */

/** CTA de papel lima/blanco hacia la app. Con `href={null}` queda como botón
 *  sin destino. `sticker` y `note` agregan el círculo rosa ("gratis") y la nota
 *  a mano debajo (ajustables desde la página con `[data-part]`). */
export const SendPopButton = ({
  variant,
  className,
  label = "Make a Pop",
  href = POPS_APP_URL,
  sticker,
  note,
}: {
  variant: "lime" | "white";
  className?: string;
  label?: string;
  href?: string | null;
  sticker?: string;
  note?: string;
}) => (
  <Button href={href ?? undefined} data-anim="drop" data-idle="nudge" className={cx(styles.sendPop, variant === "white" && styles.sendPopWhite, className)}>
    <span aria-hidden="true" className={styles.sendPopPlus}>+</span>
    {label}
    {sticker && <span data-part="sticker" className={styles.sendPopSticker}>{sticker}</span>}
    {note && <span data-part="note" aria-hidden="true" className={styles.sendPopNote}>{note}</span>}
  </Button>
);

/* ── Teléfono con un Pop (Motorola recortado) ───────────── */

export const MotoPop = ({ className }: { className?: string }) => (
  <div className={cx(styles.moto, className)}>
    <Image src={IMG.motorola} alt="Teléfono mostrando un Pop" width={271} height={480} className={styles.motoImg} />
    <div className={styles.motoScreen}>
      <Image src={IMG.motoPop} alt="" fill sizes="190px" className={styles.cover} />
      <div className={styles.motoShade} />
      <Sparkles className={styles.motoDots} />
      <div className={styles.popInfo}>
        <span className={styles.motoTitle}>CENA DEL VIERNES</span>
        <span className={styles.motoMeta}>vie. 21 de noviembre, 21:00</span>
        <span className={styles.motoMeta}>Casa de Pau</span>
        <div className={styles.motoRsvp}>
          <span><CircleCheck size={8} strokeWidth={2.2} />Asistiré</span>
          <span className={styles.rsvpDivider} />
          <span><CircleX size={8} strokeWidth={2.2} />No asistiré</span>
        </div>
      </div>
      <span className={styles.motoGlare} />
    </div>
  </div>
);

const DOTS = [
  [18, 14], [72, 22], [40, 34], [86, 40], [12, 52], [58, 60], [30, 70], [80, 30], [50, 12],
];

const Sparkles = ({ className }: { className: string }) => (
  <div aria-hidden="true" className={className}>
    {DOTS.map(([l, t]) => (
      <span key={`${l}-${t}`} style={{ left: `${l}%`, top: `${t}%` }} />
    ))}
  </div>
);

/* ── Teléfono del editor ────────────────────────────────── */

export const PhoneEditor = ({ className, animGroup }: { className?: string; animGroup?: string }) => (
  <div data-anim="rise" data-anim-group={animGroup} className={cx(styles.phone, className)} role="img" aria-label="Editor de Pops en el teléfono">
    <span className={cx(styles.phoneKey, styles.phoneKey1)} />
    <span className={cx(styles.phoneKey, styles.phoneKey2)} />
    <span className={cx(styles.phoneKey, styles.phoneKey3)} />
    <span className={cx(styles.phoneKey, styles.phoneKeyRight)} />
    <span className={styles.phoneGlass} />
    <div className={styles.phoneScreen}>
      <span className={styles.island} />
      <div className={styles.topBar}>
        <div className={styles.topGroup}>
          <span className={styles.circleBtn}><ArrowLeft size={12} strokeWidth={1.8} /></span>
          <span className={cx(styles.circleBtn, styles.dim)}><Undo2 size={11} strokeWidth={1.8} /></span>
          <span className={cx(styles.circleBtn, styles.dim)}><Redo2 size={11} strokeWidth={1.8} /></span>
        </div>
        <div className={styles.topGroup}>
          <span className={styles.segment}>
            <span className={styles.segmentOn}><Palette size={12} strokeWidth={1.8} /></span>
            <span className={styles.segmentOff}><Users size={12} strokeWidth={1.8} /></span>
          </span>
          <span className={cx(styles.circleBtn, styles.green)}><LockOpen size={12} strokeWidth={1.8} /></span>
          <span className={styles.circleBtn}><Share size={12} strokeWidth={1.8} /></span>
        </div>
      </div>
      <div className={styles.editorCard}>
        <Image src={IMG.editorFoto} alt="" fill sizes="250px" className={styles.cover} />
        <div className={styles.editorShade} />
        <Sparkles className={styles.editorDots} />
        <span className={styles.colorDot} />
        <span className={styles.formChip}>+ Formulario</span>
        <div className={cx(styles.popInfo, styles.editorInfo)}>
          <span className={styles.editorTitle}>CUMPLE DE LEO</span>
          <span className={styles.editorMeta}>vie. 19 de diciembre, 20:00</span>
          <span className={styles.editorMeta}>Casa de Ana</span>
          <div className={styles.editorRsvp}>
            <span><CircleCheck size={11} strokeWidth={1.8} />Asistiré</span>
            <span className={styles.rsvpDivider} />
            <span><CircleX size={11} strokeWidth={1.8} />No asistiré</span>
          </div>
        </div>
      </div>
      <span className={styles.editHint}>Toca cualquier parte para editarla</span>
      <div className={styles.toolbar}>
        <Palette size={14} strokeWidth={1.8} />
        <Shapes size={14} strokeWidth={1.8} />
        <Images size={14} strokeWidth={1.8} />
        <PenLine size={14} strokeWidth={1.8} />
        <CloudUpload size={14} strokeWidth={1.8} />
        <Link2 size={14} strokeWidth={1.8} />
        <span className={styles.toolbarDivider} />
        <span className={styles.previewBtn}><Eye size={15} strokeWidth={1.8} /></span>
      </div>
    </div>
  </div>
);

/* ── Tipos de papel y sticker de Wallet (Problemas → soluciones) ── */

/** Capa de papel sobre la textura base: cuaderno, cuadrícula, punteado, post-it… */
export const paperClass = (kind: PaperKind) => styles[`paper_${kind}`];

/** Badge de Apple Wallet pegado como sticker: contorno blanco y cinta rasgada. */
export const WalletSticker = ({ className }: { className?: string }) => (
  <span data-anim="pop" data-hover="wiggle" className={cx(styles.walletSticker, className)}>
    <span className={styles.walletTape} />
    <Image src={IMG.wallet} alt="Agregar a Apple Wallet" width={136} height={42} className={styles.walletImg} />
  </span>
);

/* ── MacBook del editor de escritorio ───────────────────── */

// Lienzo fijo de 780px (pantalla 780×464 + base 905×17); se escala desde fuera.
export const MacBook = ({ className, sizes, animGroup }: { className?: string; sizes: string; animGroup?: string }) => (
  <div data-anim="rise" data-anim-group={animGroup} className={cx(styles.mac, className)} role="img" aria-label="Editor de Pops en computadora">
    <div className={styles.macLid}>
      <span className={styles.macCam} />
      <div className={styles.macScreen}>
        <Image src={IMG.editorDesktop} alt="" fill sizes={sizes} className={styles.macShot} />
        <span className={styles.macGlare} />
      </div>
      <span className={styles.macName}>MacBook</span>
    </div>
    <div className={styles.macBase}>
      <span className={styles.macBaseShine} />
      <span className={styles.macHinge} />
      <span className={styles.macNotch} />
    </div>
  </div>
);
