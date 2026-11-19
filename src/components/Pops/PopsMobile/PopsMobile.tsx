import Image from "next/image";
import { Button } from "antd";
import { FEATURES, IMG, INSTAGRAM_URL, OCASIONES, PLANS, POPS_APP_URL, STEPS } from "../data";
import { Carousel } from "../Carousel/Carousel";
import {
  Cutout,
  MotoPop,
  MacBook,
  PhoneEditor,
  Polaroid,
  PriceTag,
  SendPopButton,
  Star,
  Sticker,
  Tape,
  WalletSticker,
  paperClass,
  toneClass,
} from "../Shared/Shared";
import styles from "./popsMobile.module.css";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/** Landing de Pops para < 768px: lienzo de 390px (se escala con --pops-zoom). */
export const PopsMobile = () => (
  <div className={styles.canvas}>
    {/* Nav */}
    <header className={styles.nav}>
      <a data-anim="drop" data-hover="wiggle" href="#" className={cx(styles.paper, styles.logo)} aria-label="Pops by I attend">
        <Tape className={styles.logoTape} />
        <span className={styles.logoPops}>Pops</span>
        <span className={styles.logoBy}>by I attend</span>
      </a>
      <Button data-anim="drop" href={POPS_APP_URL} className={styles.navCta}>Send a Pop ↗</Button>
    </header>

    {/* Hero */}
    <section className={styles.hero}>
      <Cutout src={IMG.obj1} sizes="170px" className={styles.heroObj} />
      <Polaroid
        src={IMG.polaroid1}
        alt="Posada de la oficina"
        caption="la posada de la ofi ★"
        sizes="124px"
        className={styles.heroPolaroid}
        tapeClassName={styles.tapeSm}
      />
      <Star lined className={styles.heroStar1} />
      <Star className={styles.heroStar2} />
      <Star className={styles.heroStar3} />

      <div className={styles.heroText}>
        <a data-anim="slap" data-hover="wiggle" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="I attend en Instagram (@iattend.mx)" className={cx(styles.paper, styles.handle)}>@iattend.mx</a>
        <h1 className={styles.heroTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.heroL1)}>Para lo que</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.heroL2)}>surja,</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.heroL3)}>Send a Pop.</span>
        </h1>
        <span data-anim="write" className={styles.heroNote}>una invitación en minutos</span>
      </div>
      <p data-anim="fade" className={styles.heroLead}>la cena del viernes, la junta de ventas, la posada. todo en un solo link.</p>
      <div className={styles.heroCtas}>
        <SendPopButton variant="lime" className={styles.sendPopSm} />
        <a data-anim="drop" data-hover="wiggle" href="#precios-m" className={cx(styles.paper, styles.seePrices)}>ver precios →</a>
      </div>
      <div data-anim="pop" data-idle="flutter" data-hover="wiggle" data-depth="12" className={cx(styles.paper, styles.bubble)}>
        <span className={styles.bubbleFrom}>Ana · WhatsApp</span>
        <span className={styles.bubbleText}>¿vienes el viernes? te mandé el Pop</span>
        <span className={styles.bubbleTime}>20:14 ✓✓</span>
      </div>
      <Sticker src={IMG.corazon} className={styles.heroHeart} />
    </section>

    {/* Cómo funciona */}
    <section className={styles.como}>
      <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.comoKicker)}>cómo funciona</span>
      <h2 className={styles.stackTitle}>
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.comoL1)}>Empieza hoy.</span>{" "}
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.comoL2)}>Mándala hoy.</span>
      </h2>
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li data-anim="drop" key={s.n} className={cx(styles.paper, styles.step, styles[`step${i + 1}`], toneClass(s.tone))}>
            <Tape className={cx(styles.tapeSm, i % 2 ? styles.tapeRight : styles.tapeLeft)} />
            <span className={styles.stepN}>{s.n}</span>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepText}>{s.text}</p>
          </li>
        ))}
      </ol>
      <p data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.comoEasy)}>
        <Tape className={styles.comoEasyTape} />
        Hacer un Pop es así de fácil.
      </p>
      <span data-anim="write" className={styles.comoFoot}>listo en 5 minutos ✂︎</span>
      {/* Aún no lleva a ningún lado. */}
      <SendPopButton variant="white" label="Make a Pop" href={null} className={cx(styles.sendPopSm, styles.comoCta)} />
    </section>

    {/* Para todo */}
    <section className={styles.band}>
      <div className={styles.bandHead}>
        <span data-anim="write" className={styles.bandKicker}>para todo</span>
        <h2 className={styles.bandTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.bandL1)}>para lo que</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.bandL2)}>haga falta.</span>
        </h2>
      </div>
      <Polaroid
        src={IMG.polaroid2}
        alt="Cena con amigos"
        caption="viernes ✓"
        sizes="104px"
        className={styles.bandPolaroid}
      />
      <ul className={styles.pills}>
        {OCASIONES.map((o, i) => (
          <li data-anim="pop" data-hover="wiggle" data-depth="8" key={o.label} className={cx(styles.pill, styles[`pill${i + 1}`], toneClass(o.tone))}>{o.label}</li>
        ))}
      </ul>
      <Star className={styles.bandStar1} />
      <Star className={styles.bandStar2} />
      <div data-anim="rise" className={styles.bandMoto}>
        <MotoPop />
      </div>
    </section>

    {/* Problemas → soluciones */}
    <section className={styles.incluye}>
      <h2 className={styles.stackTitle}>
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.incluyeL1)}>Lo que te preocupa,</span>{" "}
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.incluyeL2)}>un Pop lo resuelve.</span>
      </h2>
      <p data-anim="write" className={styles.incluyeNote}>esto le pasa a todos. a ti ya no ↓</p>
      <Carousel label="Problemas que Pops resuelve" trackClassName={styles.featureTrack}>
        {FEATURES.map((f, i) => (
          <div data-anim="drop" key={f.n} className={cx(styles.paper, styles.feature, styles[`feature${i + 1}`], toneClass(f.tone), paperClass(f.paper))}>
            {f.tape && <Tape className={styles.featureTape} />}
            {f.sticker && <Sticker src={IMG[f.sticker]} className={styles[`featureSticker_${f.sticker}`]} />}
            <span className={cx(styles.featureN, f.pinkNumber && styles.featureNPink)}>{f.n}</span>
            <h3 className={styles.featureTitle}>{f.q}</h3>
            <p className={styles.featureText}>{f.a}</p>
            {f.wallet && <WalletSticker className={styles.walletSticker} />}
          </div>
        ))}
      </Carousel>
    </section>

    {/* Editor */}
    <section className={styles.editor}>
      <span data-anim="write" className={styles.kicker}>el editor</span>
      <h2 className={styles.stackTitle}>
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.editorL1)}>Lo armas en el cel</span>{" "}
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.editorL2)}>o en la compu,</span>{" "}
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.editorL3)}>lo cambias cuando quieras.</span>
      </h2>
      <Image data-anim="pop" data-idle="snip" data-depth="20" src={IMG.tijeras} alt="" aria-hidden="true" width={83} height={110} className={styles.scissors} />
      <Carousel label="El editor en el cel o en la compu" trackClassName={styles.editorTrack} dotsClassName={styles.editorDots}>
        <figure className={styles.editorSlide}>
          <div className={styles.editorStage}>
            <PhoneEditor className={styles.editorPhone} animGroup="editor" />
          </div>
          <figcaption data-anim="write" className={cx(styles.editorCaption, styles.editorCaptionCel)}>en el cel</figcaption>
        </figure>
        <figure className={cx(styles.editorSlide, styles.editorSlideMac)}>
          <div className={styles.editorStage}>
            <div className={styles.editorMacFrame}>
              <MacBook className={styles.editorMac} sizes="600px" animGroup="editor" />
            </div>
          </div>
          <figcaption data-anim="write" className={cx(styles.editorCaption, styles.editorCaptionMac)}>o en la compu</figcaption>
        </figure>
      </Carousel>
      <span data-anim="write" className={styles.editorNote}>↑ toca cualquier parte y edítala ahí mismo: fondo, stickers, dibujos, itinerario y quién asiste</span>
      <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.editorTag)}>lo que ves es lo que reciben.</span>
      <Star lined className={styles.editorStar} />
    </section>

    {/* Precios */}
    <section id="precios-m" className={styles.precios}>
      <span data-anim="write" className={styles.kicker}>precios</span>
      <h2 className={styles.preciosTitle}>
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.preciosL1)}>Entre más Pops,</span>{" "}
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.preciosL2)}>menos pagas.</span>
      </h2>
      <div className={styles.pricesBleed}>
        <Carousel label="Precios de Pops" trackClassName={styles.priceTrack} dotsClassName={styles.priceDots}>
          {PLANS.map((p) => <PriceTag key={p.title} plan={p} />)}
        </Carousel>
      </div>
    </section>

    {/* CTA final */}
    <section className={styles.cta}>
      <Polaroid
        src={IMG.polaroid3}
        alt="Brindis en un cumpleaños"
        caption="el cumple de Leo"
        sizes="124px"
        className={styles.ctaPolaroid}
        tapeClassName={styles.tapeSm}
      />
      <Cutout src={IMG.obj3} sizes="170px" className={styles.ctaObj} />
      <h2 className={styles.ctaTitle}>
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.ctaL1)}>¿Qué se te</span>{" "}
        <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.ctaL2)}>antoja hoy?</span>
      </h2>
      <SendPopButton variant="white" className={cx(styles.sendPopSm, styles.ctaBtn)} />
      <Star className={styles.ctaStar1} />
      <Star lined className={styles.ctaStar2} />
    </section>

    {/* Footer */}
    <footer className={styles.footer}>
      <div data-anim="drop" data-hover="wiggle" className={cx(styles.paper, styles.footerLogo)}>
        <Image src={IMG.logo} alt="iattend" width={40} height={18} className={styles.footerLogoImg} />
      </div>
      <span data-anim="write" className={styles.footerCopy}>© 2026 iattend · Pops</span>
    </footer>
  </div>
);
