import type { ReactNode } from "react";
import { ChevronLeft, Ellipsis, Mic, Search } from "lucide-react";
import styles from "./PhoneFrame.module.css";

// Réplica del teléfono del editor de iattend-vite (BuildContent, marco
// `ios26-*` de build-invitation.css): iPhone con Safari a pantalla completa —
// isla, barra de estado y la barra flotante de Safari encima del contenido.
// Si cambia el marco allá, hay que reflejarlo aquí.
//
// Mide 357 × 763 de pantalla, como el original; `scale` lo encoge sin tocar
// sus proporciones.
type Props = {
  children: ReactNode;
  scale?: number;
  url?: string;
  className?: string;
};

export const PhoneFrame = ({ children, scale = 1, url = "iattend.mx", className }: Props) => (
  // Chasis: 357 de pantalla + 2×5 de bisel + 2×7 de riel = 381 × 787, más 5px
  // de botones que sobresalen a cada lado.
  <div
    className={`${styles.wrap} ${className ?? ""}`}
    style={{ width: 391 * scale, height: 787 * scale }}
  >
    <div className={styles.device} style={{ left: 5 * scale, transform: `scale(${scale})` }}>
      <div className={styles.buttons}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.power} />

      <div className={styles.screen}>
        <div className={styles.content}>{children}</div>

        <div className={styles.island} />

        <div className={styles.status}>
          <span>9:41</span>
          <img alt="" src="/assets/images/iphone-settings.svg" />
        </div>

        <div className={styles.nav}>
          <div className={styles.navRound}>
            <ChevronLeft size={20} strokeWidth={2.4} />
          </div>
          <div className={styles.navPill}>
            <Search size={16} strokeWidth={2.4} />
            <span>{url}</span>
            <Mic size={16} strokeWidth={2.4} />
          </div>
          <div className={styles.navRound}>
            <Ellipsis size={20} strokeWidth={2.4} />
          </div>
        </div>

        <div className={styles.home} />
      </div>
    </div>
  </div>
);
