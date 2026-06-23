import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const NOTIFY_EMAILS = ['albserrano8@gmail.com', 'pa.perez98@gmail.com'];
const API_URL = process.env.IATTEND_API_URL;

function formatPhone(telefono: string) {
  const digits = telefono.replace(/\D/g, '');
  return digits.startsWith('52') ? digits : `52${digits}`;
}

function buildEmailHtml(data: {
  nombre: string;
  telefono: string;
  email: string;
  estado: string;
  pais: string;
  comoNosConocio: string;
  mensaje: string;
}) {
  const waLink = `https://wa.me/${formatPhone(data.telefono)}`;

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0c171b;">
      <div style="background: #0c171b; padding: 28px 32px; border-radius: 12px 12px 0 0;">
        <p style="margin: 0; font-size: 12px; font-weight: 700; color: rgba(238,233,222,0.45); text-transform: uppercase; letter-spacing: 1.5px;">I attend</p>
        <h2 style="margin: 8px 0 0; font-size: 22px; font-weight: 700; color: #EEE9DE;">
          Nuevo colaborador interesado
        </h2>
      </div>
      <div style="background: #f9f7f3; padding: 28px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e0dbd0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">Nombre</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 15px; font-weight: 600; color: #0c171b;">${data.nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">WhatsApp</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0;">
              <a href="${waLink}" style="display: inline-block; background: #25D366; color: white; text-decoration: none; font-size: 14px; font-weight: 600; padding: 6px 14px; border-radius: 6px;">
                📱 ${data.telefono} — Abrir chat
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0;">
              <a href="mailto:${data.email}" style="color: #0c171b; font-size: 15px;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Ubicación</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 15px; color: #0c171b;">${data.estado}, ${data.pais}</td>
          </tr>
          ${data.comoNosConocio ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Nos conoció por</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd0; font-size: 15px; color: #0c171b;">${data.comoNosConocio}</td>
          </tr>` : ''}
          ${data.mensaje ? `
          <tr>
            <td style="padding: 10px 0; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Mensaje</td>
            <td style="padding: 10px 0; font-size: 15px; color: #0c171b; line-height: 1.6;">${data.mensaje}</td>
          </tr>` : ''}
        </table>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, telefono, email, estado, pais, comoNosConocio = '', mensaje = '' } = body;

  if (!nombre || !telefono || !email || !estado || !pais) {
    return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
  }

  const { error: dbError } = await supabase
    .from('colaboradores_interesados')
    .insert({ nombre, telefono, email, estado, pais, como_nos_conocio: comoNosConocio, mensaje });

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return NextResponse.json({ error: 'Error al guardar' }, { status: 500 });
  }

  try {
    await Promise.all(
      NOTIFY_EMAILS.map((to) =>
        fetch(`${process.env.IATTEND_API_URL}/mail/send-mail`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to,
            subject: `Nuevo colaborador interesado — ${nombre}`,
            html: buildEmailHtml({ nombre, telefono, email, estado, pais, comoNosConocio, mensaje }),
          }),
        })
      )
    );
  } catch (err) {
    console.error('Email notification failed (non-fatal):', err);
  }

  return NextResponse.json({ ok: true });
}
