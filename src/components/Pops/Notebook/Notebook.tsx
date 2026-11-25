import Image from "next/image";
import { Button } from "antd";
import { FREE_PLAN, IMG, PLUS_PLAN, POPS_APP_URL, POPS_PLUS_URL } from "../data";
import styles from "./notebook.module.css";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/**
 * Precios de Pops: cuaderno abierto con Gratis (página izquierda) y Pops+
 * (página derecha). Mide 1040px fijos; en mobile la página lo mete en un
 * carril con scroll horizontal y lo escala.
 *
 * `animGroup`: todos los papeles del cuaderno entran juntos en cuanto uno se
 * ve (en mobile la página derecha queda fuera de pantalla).
 */
export const Notebook = ({ animGroup, className }: { animGroup: string; className?: string }) => (
  <div className={cx(styles.notebook, className)}>
    <div aria-hidden="true" className={styles.cover} />

    <div className={styles.spread}>
      <span aria-hidden="true" className={styles.spine}>
        <span className={styles.stitch} />
      </span>

      {/* Página izquierda — Gratis */}
      <article className={cx(styles.page, styles.pageLeft)}>
        <h3 className={styles.planTitle}>{FREE_PLAN.title}</h3>
        <span className={styles.planSub}>{FREE_PLAN.subtitle}</span>

        <ul className={styles.quotes}>
          {FREE_PLAN.items.map((it) => (
            <li key={it.q} className={styles.quote}>
              <span className={styles.quoteQ}>“{it.q}”</span>
              <span className={styles.quoteA}>{it.a}</span>
            </li>
          ))}
        </ul>

        {/* Foto pegada: no ocupa espacio en el flujo. */}
        <div className={styles.photoAnchor}>
          <div data-anim="slap" data-anim-group={animGroup} data-hover="wiggle" className={styles.photo}>
            <span aria-hidden="true" className={styles.photoTape} />
            <Image src={IMG.notebookPhoto} alt="Foto de un cumpleaños" fill sizes="270px" className={styles.cover_img} />
          </div>
        </div>

        <div className={styles.priceBlock}>
          <div className={styles.priceLine}>
            <span className={styles.price}>{FREE_PLAN.price}</span>
            <span className={styles.priceHand}>{FREE_PLAN.priceNote}</span>
          </div>
          <span className={styles.fine}>{FREE_PLAN.fine}</span>
          <Button href={POPS_APP_URL} className={cx(styles.cta, styles.ctaDark)}>
            {FREE_PLAN.cta}
            <span data-anim="pop" data-anim-group={animGroup} className={styles.ctaSticker}>{FREE_PLAN.ctaSticker}</span>
          </Button>
          <span aria-hidden="true" className={styles.ctaNote}>{FREE_PLAN.ctaNote}</span>
        </div>
      </article>

      {/* Página derecha — Pops+ */}
      <article className={cx(styles.page, styles.pageRight)}>
        <h3 className={cx(styles.planTitle, styles.planTitleNavy)}>
          Pops<span className={styles.plus}>+</span>
        </h3>
        <span className={styles.planSub}>{PLUS_PLAN.subtitle}</span>

        <ul className={styles.postIts}>
          {PLUS_PLAN.items.map((it) => (
            <li
              key={it.q}
              data-anim="slap"
              data-anim-group={animGroup}
              data-hover="wiggle"
              className={cx(styles.postIt, styles[`postIt_${it.color}`])}
            >
              <span className={styles.postItQ}>“{it.q}”</span>
              <span className={styles.postItA}>{it.a}</span>
            </li>
          ))}
          {/* Polaroid en la 6ª celda: no estira la fila. */}
          <li aria-hidden="true" className={styles.polaroidCell}>
            <div data-anim="slap" data-anim-group={animGroup} data-hover="wiggle" className={styles.polaroid}>
              <span className={styles.polaroidTape} />
              <div className={styles.polaroidImg}>
                <Image src={IMG.notebookPolaroid} alt="" fill sizes="182px" className={styles.cover_img} />
              </div>
              <span className={styles.polaroidCaption}>{PLUS_PLAN.polaroidCaption}</span>
            </div>
          </li>
        </ul>

        <div className={cx(styles.priceBlock, styles.priceBlockPlus)}>
          <div className={cx(styles.priceLine, styles.priceLinePlus)}>
            <span className={styles.priceLine}>
              <span className={styles.price}>{PLUS_PLAN.price}</span>
              <span className={styles.per}>{PLUS_PLAN.per}</span>
            </span>
            <span className={styles.fine}>{PLUS_PLAN.fine}</span>
          </div>
          <Button href={POPS_PLUS_URL ?? undefined} className={cx(styles.cta, styles.ctaLime)}>
            {PLUS_PLAN.cta}
          </Button>
        </div>
      </article>
    </div>

    {/* Decoración */}
    <span aria-hidden="true" data-idle="flutter" className={styles.tape} />
    <Image
      src={IMG.destello}
      alt=""
      aria-hidden="true"
      width={70}
      height={70}
      unoptimized
      data-anim="pop"
      data-anim-group={animGroup}
      data-idle="float"
      data-hover="spin"
      className={styles.sparkle}
    />
    <Image
      src={IMG.tijeras}
      alt=""
      aria-hidden="true"
      width={83}
      height={110}
      data-anim="pop"
      data-anim-group={animGroup}
      data-idle="snip"
      className={styles.scissors}
    />
  </div>
);
