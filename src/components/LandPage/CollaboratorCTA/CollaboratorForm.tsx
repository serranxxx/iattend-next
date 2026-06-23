'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './collaboratorCTA.module.css';

type FormState = 'closed' | 'idle' | 'loading' | 'success' | 'error';

const REFERRAL_SOURCES = [
  'Instagram',
  'TikTok',
  'Un amigo o conocido',
  'Google',
  'LinkedIn',
  'Otra forma',
];

export function CollaboratorForm() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    estado: '',
    pais: 'México',
    comoNosConocio: '',
    mensaje: '',
  });
  const [formState, setFormState] = useState<FormState>('closed');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    try {
      const res = await fetch('/api/colaboradores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error en el servidor');
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'closed') {
    return (
      <button
        onClick={() => setFormState('idle')}
        className={styles.form_submit}
      >
        Estoy interesado <ArrowRight size={16} strokeWidth={2.5} />
      </button>
    );
  }

  if (formState === 'success') {
    return (
      <div className={styles.form_success}>
        <CheckCircle2 size={40} strokeWidth={1.5} />
        <h3 className={styles.form_success_title}>¡Listo! Te contactamos pronto.</h3>
        <p className={styles.form_success_desc}>
          Recibimos tu información. Alguien del equipo de I attend se pondrá en contacto contigo muy pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.collab_form}>
      <div className={styles.form_row}>
        <div className={styles.form_field}>
          <label className={styles.form_label}>Nombre completo *</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
            className={styles.form_input}
          />
        </div>
        <div className={styles.form_field}>
          <label className={styles.form_label}>WhatsApp *</label>
          <input
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            required
            placeholder="+52 614 000 0000"
            className={styles.form_input}
          />
        </div>
      </div>

      <div className={styles.form_row}>
        <div className={styles.form_field}>
          <label className={styles.form_label}>Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className={styles.form_input}
          />
        </div>
        <div className={styles.form_field}>
          <label className={styles.form_label}>País *</label>
          <input
            name="pais"
            value={form.pais}
            onChange={handleChange}
            required
            placeholder="México"
            className={styles.form_input}
          />
        </div>
      </div>

      <div className={styles.form_row}>
        <div className={styles.form_field}>
          <label className={styles.form_label}>Estado / Ciudad *</label>
          <input
            name="estado"
            value={form.estado}
            onChange={handleChange}
            required
            placeholder="Chihuahua, CDMX, Jalisco..."
            className={styles.form_input}
          />
        </div>
        <div className={styles.form_field}>
          <label className={styles.form_label}>¿Cómo nos conociste?</label>
          <select
            name="comoNosConocio"
            value={form.comoNosConocio}
            onChange={handleChange}
            className={styles.form_select}
          >
            <option value="">Selecciona una opción</option>
            {REFERRAL_SOURCES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.form_field}>
        <label className={styles.form_label}>¿Algo más que quieras contarnos?</label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos sobre ti, tu red de contactos o a qué te dedicas..."
          rows={3}
          className={styles.form_textarea}
        />
      </div>

      {formState === 'error' && (
        <p className={styles.form_error}>
          Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className={styles.form_submit}
        
      >
        {formState === 'loading' ? 'Enviando...' : 'Enviar mi información'}
        {formState !== 'loading' && <ArrowRight size={16} strokeWidth={2.5} />}
      </button>
    </form>
  );
}
