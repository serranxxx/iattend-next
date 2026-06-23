import { TrendingUp } from 'lucide-react';
import styles from './collaboratorCTA.module.css';
import { CollaboratorForm } from './CollaboratorForm';

export function CollaboratorCTA() {
  return (
    <section className={styles.work_section}>
      <div className={styles.work_inner}>
        <TrendingUp size={36} strokeWidth={1.5} className={styles.work_icon} />
        <p className={styles.work_eyebrow}>Programa de colaboradores</p>
        <h2 className={styles.work_title}>
          ¿Te gustaría generar<br />ingresos extra?
        </h2>
        <p className={styles.work_desc}>
          Si conoces parejas que están planeando su boda, si trabajas en el mundo de los eventos
          o simplemente te gusta recomendar lo que usas — hay una oportunidad aquí para ti.
          Sé distribuidor de I attend y gana por cada cliente que llegue contigo.
        </p>
        <CollaboratorForm />
      </div>
    </section>
  );
}
