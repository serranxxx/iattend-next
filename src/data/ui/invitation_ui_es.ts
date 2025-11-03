import { InvitationUIBundle } from "@/types/new_invitation";


const uiES: InvitationUIBundle = {
  cover: {
    countdown: { days: "días", hours: "horas", minutes: "minutos", seconds: "segundos" },
    datePrefix: ""
  },
  labels: {
    food: "Comidas",
    lodging: "Hospedaje",
    activities: "Actividades",
    cards: "Tarjetas de regalo",
    seeGifts: "Ver regalos",
    DiscoverGifts: "Descubre nuestra mesa de regalos",
  },
  locked: {
    p1: "Nos alegra mucho que seas parte de este evento tan especial.",
    p2: "Esta invitación es exclusiva para ti. Ingresa tu código de invitado para continuar y disfrutar de esta experiencia única.",
    title: "Invitación Privada",
    access: "ACCEDER",
    placeholder: "Código de invitado"
  },
  buttons: {
    confirm: "CONFIRMAR",
    details: "Detalles",
    directions: "¿Cómo llegar?",
    inspiration: "¿Necesitas inspiración?"
  },
  confirm: {
    cta: "CONFIRMAR",
    hello: "¡Hola {name}!",
    passes: "Tienes {count} pases disponibles para ti y tus acompañantes",
    decline: "No podré asistir",
    howMany: "¿Cuántos pases vas a utilizar?",
    yourName: "Escribe tu nombre y quienes te acompañan",
    declinedMsg: "Lamentamos no poder contar con tu asistencia, esperamos pronto poder celebrar juntos",
    drawerTitle: "Confirmar asistencia",
    changeAnswer: "Cambiar respuesta",
    addToCalendar: "Agrega el evento a tu calendario",
    declinedTitle: "Confirmar asistencia",
    confirmedTitle: "Confirmar asistencia",
    changeAnswerBtn: "Cambiar respuesta",
    addToCalendarBtn: "Add to Calendar",
    confirmedMsgBold: "¡Tu asistencia ha sido confirmada! Esperamos verte y celebrar juntos muy pronto.",
    thanks: "Estamos felices de que nos puedas acompañar",
  }
};

export default uiES;