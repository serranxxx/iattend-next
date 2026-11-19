import Image from "next/image";
import { Button } from "antd";
import { FEATURES, IMG, INSTAGRAM_URL, OCASIONES, POPS_APP_URL, STEPS } from "../data";
import {
  Cutout,
  MotoPop,
  MacBook,
  PhoneEditor,
  Polaroid,
  PriceTags,
  SendPopButton,
  Star,
  Sticker,
  Tape,
  WalletSticker,
  paperClass,
  toneClass,
} from "../Shared/Shared";
import styles from "./popsWeb.module.css";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

const COLS = Array.from({ length: 9 }, (_, i) => i + 1);
const ROWS = Array.from({ length: 46 }, (_, i) => i + 1);

/** Landing de Pops para ≥ 768px: lienzo de 1440px (se escala con --pops-zoom). */
export const PopsWeb = () => (
  <div className={styles.canvas}>
    {/* Tablero: números de regla, ángulos y compás impresos */}
    <div aria-hidden="true" className={styles.board}>
      {COLS.map((n) => <span key={`c${n}`} className={styles.rulerNum} style={{ left: n * 144 + 4, top: 22 }}>{n}</span>)}
      {ROWS.map((n) => <span key={`r${n}`} className={styles.rulerNum} style={{ left: 24, top: n * 144 + 3 }}>{n}</span>)}
      <span className={cx(styles.line, styles.line45a)} /><span className={styles.angle} style={{ left: 70, top: 940 }}>45°</span>
      <span className={cx(styles.line, styles.lineDashed, styles.line30a)} /><span className={styles.angle} style={{ left: 120, top: 912 }}>30°</span>
      <span className={cx(styles.line, styles.line150)} /><span className={styles.angle} style={{ left: 1330, top: 1740 }}>30°</span>
      <span className={cx(styles.line, styles.line60)} /><span className={styles.angle} style={{ left: 60, top: 3470 }}>60°</span>
      <span className={cx(styles.line, styles.line135)} /><span className={styles.angle} style={{ left: 1360, top: 4200 }}>45°</span>
      <span className={cx(styles.line, styles.lineDashed, styles.line30b)} /><span className={styles.angle} style={{ left: 110, top: 6060 }}>30°</span>
      <span className={styles.circleBig} />
      <span className={styles.circleSmall} />
      <span className={styles.angle} style={{ left: 1325, top: 3540 }}>R 20</span>
      <span className={styles.glow1} />
      <span className={styles.glow2} />
      <span className={styles.glow3} />
    </div>

    {/* Nav */}
    <header className={styles.nav}>
      <a data-anim="drop" data-hover="wiggle" href="#" className={cx(styles.paper, styles.logo)} aria-label="Pops by I attend">
        <Tape className={styles.logoTape} />
        <span className={styles.logoPops}>Pops</span>
        <span className={styles.logoBy}>by I attend</span>
      </a>
      <nav className={styles.navLinks}>
        <a data-anim="drop" data-hover="wiggle" href="#como" className={cx(styles.paper, styles.navLink, styles.navLinkComo)}>cómo funciona</a>
        <a data-anim="drop" data-hover="wiggle" href="#precios" className={cx(styles.paper, styles.navLink, styles.navLinkPrecios)}>precios</a>
        <Button data-anim="drop" href={POPS_APP_URL} className={styles.navCta}>Send a Pop ↗</Button>
      </nav>
    </header>

    {/* Hero */}
    <section className={styles.hero}>
      <Cutout src={IMG.obj1} sizes="330px" className={styles.heroObj} />
      <Polaroid
        src={IMG.polaroid1}
        alt="Posada de la oficina"
        caption="la posada de la ofi ★"
        sizes="236px"
        className={styles.heroPolaroid}
        tapeClassName={styles.heroPolaroidTape}
      />
      <Star lined className={styles.heroStar1} />
      <Star lined className={styles.heroStar2} />
      <Star className={styles.heroStar3} />
      <Star className={styles.heroStar4} />
      <Star className={styles.heroStar5} />

      <div className={styles.heroText}>
        <a data-anim="slap" data-hover="wiggle" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="I attend en Instagram (@iattend.mx)" className={cx(styles.paper, styles.handle)}>@iattend.mx</a>
        <h1 className={styles.heroTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.heroL1)}>Para lo que</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.heroL2)}>surja,</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.heroL3)}>Send a Pop.</span>
        </h1>
        <span data-anim="fade" aria-hidden="true" className={styles.heroDash} />
        <span data-anim="write" className={styles.heroNote}>una invitación en minutos</span>
        <p data-anim="fade" className={styles.heroLead}>la cena del viernes, la junta de ventas, la posada. todo en un solo link.</p>
      </div>

      <div className={styles.heroCtas}>
        <SendPopButton variant="lime" />
        <a data-anim="drop" data-hover="wiggle" href="#precios" className={cx(styles.paper, styles.seePrices)}>ver precios →</a>
      </div>

      <div data-anim="pop" data-idle="flutter" data-hover="wiggle" data-depth="12" className={cx(styles.paper, styles.bubble)}>
        <span className={styles.bubbleFrom}>Ana · WhatsApp</span>
        <span className={styles.bubbleText}>¿vienes el viernes? te mandé el Pop</span>
        <span className={styles.bubbleTime}>20:14 ✓✓</span>
      </div>
      <Sticker src={IMG.corazon} className={styles.heroHeart} />
      <Sticker src={IMG.ojos} className={styles.heroEyes} />
    </section>

    {/* Cómo funciona */}
    <section id="como" className={styles.como}>
      <div className={styles.comoHead}>
        <span data-anim="slap" data-hover="wiggle" className={styles.comoKicker}>cómo funciona</span>
        <h2 className={styles.comoTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.comoL1)}>Empieza hoy.</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.comoL2)}>Mándala hoy.</span>
        </h2>
      </div>
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li data-anim="drop" key={s.n} className={cx(styles.step, styles[`step${i + 1}`], toneClass(s.tone))}>
            <Tape className={styles[`stepTape${i + 1}`]} />
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
    </section>

    {/* Para todo */}
    <section className={styles.band}>
      <div className={styles.bandInner}>
        <div data-anim="rise" className={styles.bandMoto}>
          <MotoPop />
        </div>
        <ul className={styles.pills}>
          {OCASIONES.map((o, i) => (
            <li data-anim="pop" data-hover="wiggle" data-depth="8" key={o.label} className={cx(styles.pill, styles[`pill${i + 1}`], toneClass(o.tone))}>{o.label}</li>
          ))}
        </ul>
        <Star className={styles.bandStar1} />
        <Star className={styles.bandStar2} />
        <div className={styles.bandHead}>
          <span data-anim="write" className={styles.bandKicker}>para todo</span>
          <h2 className={styles.bandTitle}>
            <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.bandL1)}>para lo que</span>{" "}
            <span data-anim="slap" data-hover="wiggle" className={cx(styles.label, styles.bandL2)}>haga falta.</span>
          </h2>
        </div>
        <Polaroid
          src={IMG.polaroid2}
          alt="Cena con amigos"
          caption="viernes ✓"
          sizes="226px"
          className={styles.bandPolaroid}
        />
      </div>
    </section>

    {/* Problemas → soluciones */}
    <section className={styles.incluye}>
      <div className={styles.incluyeHead}>
        <h2 className={styles.incluyeTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.incluyeL1)}>Lo que te preocupa,</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.incluyeL2)}>un Pop lo resuelve.</span>
        </h2>
        <p data-anim="write" className={styles.incluyeNote}>esto le pasa a todos. a ti ya no ↓</p>
      </div>
      <ul className={styles.features}>
        {FEATURES.map((f, i) => (
          <li data-anim="drop" key={f.n} className={cx(styles.paper, styles.feature, styles[`feature${i + 1}`], toneClass(f.tone), paperClass(f.paper))}>
            {f.tape && <Tape className={styles.featureTape} />}
            {f.sticker && <Sticker src={IMG[f.sticker]} className={styles[`featureSticker_${f.sticker}`]} />}
            <span className={cx(styles.featureN, f.pinkNumber && styles.featureNPink)}>{f.n}</span>
            <div className={styles.featureBody}>
              <h3 className={styles.featureTitle}>{f.q}</h3>
              <p className={styles.featureText}>{f.a}</p>
            </div>
            {f.wallet && <WalletSticker />}
          </li>
        ))}
      </ul>
    </section>

    {/* Editor */}
    <section className={styles.editor}>
      <MacBook className={styles.editorMac} sizes="900px" />
      <div className={styles.editorHead}>
        <span data-anim="write" className={styles.editorKicker}>el editor</span>
        <h2 className={styles.editorTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.editorL1)}>Lo armas en el cel</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.editorL2)}>o en la compu,</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.editorL3)}>lo cambias cuando quieras.</span>
        </h2>
      </div>
      <PhoneEditor className={styles.editorPhone} />
      <span data-anim="write" className={cx(styles.editorNote, styles.editorNoteTap)}>toca cualquier parte y edítala ahí mismo →</span>
      <span data-anim="write" className={cx(styles.editorNote, styles.editorNoteMac)}>↑ fondo, stickers, dibujos, itinerario y quién asiste</span>
      <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.editorTag)}>lo que ves es lo que reciben.</span>
      <Image data-anim="pop" data-idle="snip" data-depth="20" src={IMG.tijeras} alt="" aria-hidden="true" width={195} height={260} className={styles.scissors} />
      <Star lined className={styles.editorStar} />
    </section>

    {/* Precios */}
    <section id="precios" className={styles.precios}>
      <div className={styles.preciosHead}>
        <span data-anim="write" className={styles.preciosKicker}>precios</span>
        <h2 className={styles.preciosTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.preciosL1)}>Entre más Pops,</span>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.preciosL2)}>menos pagas.</span>
        </h2>
      </div>
      <div className={styles.prices}>
        <PriceTags />
      </div>
    </section>

    {/* CTA final */}
    <section className={styles.cta}>
      <Polaroid
        src={IMG.polaroid3}
        alt="Brindis en un cumpleaños"
        caption="el cumple de Leo"
        sizes="236px"
        className={styles.ctaPolaroid}
        tapeClassName={styles.ctaPolaroidTape}
      />
      <Cutout src={IMG.obj3} sizes="300px" className={styles.ctaObj} />
      <div className={styles.ctaText}>
        <h2 className={styles.ctaTitle}>
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.ctaL1)}>¿Qué se te</span>{" "}
          <span data-anim="slap" data-hover="wiggle" className={cx(styles.paper, styles.label, styles.ctaL2)}>antoja hoy?</span>
        </h2>
        <SendPopButton variant="white" className={styles.ctaBtn} />
      </div>
      <Sticker src={IMG.destello} className={styles.ctaSparkle} />
      <Star className={styles.ctaStar} />
    </section>

    {/* Footer */}
    <footer className={styles.footer}>
      <div data-anim="drop" data-hover="wiggle" className={cx(styles.paper, styles.footerLogo)}>
        <Image src={IMG.logo} alt="iattend" width={53} height={24} className={styles.footerLogoImg} />
      </div>
      <span data-anim="write" className={styles.footerCopy}>© 2026 iattend · Pops</span>
    </footer>
  </div>
);
