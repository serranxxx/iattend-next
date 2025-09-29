import { InvitationType } from "./new_invitation";

export interface Guests {
  userID: string;
  invitationID: string;
  tickets: number | null;
  type: "open" | "private"; // o simplemente `string` si usas más tipos
  guests: Guest[]; // Puedes tiparlo más adelante si defines su estructura
  share: {
    email: string;
    password: string;
    id: string;
  }[];
  tables: any[]; // o define una interfaz Table[] si tienes su estructura
}

export interface Guest {
  name: string;
  username: string;
  id: string;
  available_cards: number;
  companions: string[];
  state: "esperando" | "confirmado" | "rechazado"; // puedes ajustar según tus estados
  last_action: "created" | "accepted" | "edited" | "rejected"; // ajusta si hay más
  last_update_date: Date;
  creation_date: Date;
}

export interface GuestUpdate {
  name: string;
  username: string;
  tickets: number;
  companions: string[];
  state: "esperando" | "confirmado" | "rechazado"; // ajusta según los valores válidos
}

export interface Table {
  id: number;
  name: string;
  totalChairs: number;
  occupiedChairs: OccupiedChair[];
  position: {
    x: number;
    y: number;
  };
}

export interface OccupiedChair {
  about: ChairAbout | null;
  color_id: number | null;
  family: boolean;
  name: string;
  parent: string;
  place: number;
}

export interface ChairAbout {
  last_action: string;
  last_update_date: string | Date;
  creation_date: string | Date;
}

export interface GuestAccessPayload {
  guestID: string;
  username: string;
  status: "esperando" | "confirmado" | "rechazado";
  companions: string[];
  tickets: number;
  cards: number;
  token: string;
  type: InvitationType;
}
