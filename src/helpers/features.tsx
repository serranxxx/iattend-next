import { IconType } from "react-icons";
import { LuClipboardList, LuFeather, LuFrame, LuGift, LuHeartHandshake, LuImage, LuLockKeyhole, LuMapPin, LuNewspaper, LuSettings, LuShirt, LuUsers } from "react-icons/lu";

export type InvitationFeature = {
  id: number;
  name: string;
  description: string;
  icon: IconType;
};

export const invitationFeatures: InvitationFeature[] = [
  {
    id: 0,
    name: "Portada",
    description: "Portada visual con cuenta regresiva automática que genera emoción y expectativa antes del evento.",
    icon: LuFrame as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 1,
    name: "Bienvenida",
    description: "Mensaje de bienvenida personalizable para dar contexto y marcar el tono del evento desde el inicio.",
    icon: LuHeartHandshake as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 2,
    name: "Personas",
    description: "Destacar a padres, padrinos, damas de honor u otras personas clave del evento",
    icon: LuUsers as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 3,
    name: "Cita",
    description: "Espacio para agregar una frase significativa, dedicatoria o mensaje especial",
    icon: LuFeather as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 4,
    name: "Itinerario",
    description: "Mapas interactivos con direcciones para facilitar la llegada de tus invitados.",
    icon: LuClipboardList as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 5,
    name: "Dresscode",
    description: "Sección visual para comunicar el código de vestimenta de forma clara y sin confusiones.",
    icon: LuShirt as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 6,
    name: "Mesa de regalos",
    description: "Mesa de regalos digital integrada con hasta tres opciones como enlaces externos, tarjetas de regalo o transferencias",
    icon: LuGift as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 7,
    name: "Destinos",
    description: "Ideal para bodas destino, donde puedes recomendar hospedaje, restaurantes o actividades.",
    icon: LuMapPin as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 8,
    name: "Avisos",
    description: "Sección para comunicar cambios de horario, recomendaciones o información relevante.",
    icon: LuNewspaper as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 9,
    name: "Galería",
    description: "galería visual para compartir recuerdos, momentos especiales o imágenes significativas.",
    icon: LuImage as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 10,
    name: "Generales",
    description: "Cambia colores, textos y edita cuando quieras sin límite",
    icon: LuSettings as IconType, // placeholder hasta asignar icono real
  },
  {
    id: 11,
    name: "Privacidad",
    description: "Control total sobre quién puede ver la invitación y cómo se accede a ella.",
    icon: LuLockKeyhole as IconType, // placeholder hasta asignar icono real
  },
];
