"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useState } from "react";
import { Button, Input, message } from "antd";
import { FaMinus, FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa";
import { buttonsColorText, generateSimpleId } from "@/helpers/functions";
import { IoMdAdd } from "react-icons/io";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { InvitationType, NewInvitation } from "@/types/new_invitation";
import { GuestAccessPayload } from "@/types/guests";
import axios from "axios";

dayjs.extend(utc);
dayjs.extend(timezone);

type ConfirmProps = {
  invitation: NewInvitation;
  type: InvitationType;
  guestInfo: GuestAccessPayload;
  mongoID: string;
};

export default function Confirm({ invitation, type, guestInfo, mongoID }: ConfirmProps) {
  const [messageApi, contextHolder] = message.useMessage();

  const content = invitation?.greeting;
  const generals = invitation?.generals;
  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";
  const actions = generals?.colors.actions ?? "#FFFFFF";

  //   const { response, operation } = useInvitation();
  const [tickets, setTickets] = useState<string[]>([]);
  const [freeTickets, setFreeTickets] = useState<number>(0);
  const [confirmed, setConfirmed] = useState<"esperando" | "confirmado" | "rechazado">("esperando");
  const [currentGuestName, setCurrentGuestName] = useState<string | null>(null);

  const addTicket = () => {
    setTickets([...tickets, ""]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newTickets = [...tickets];
    newTickets[index] = value;
    setTickets(newTickets);
  };

  const removeLastTicket = () => {
    if (tickets.length > 0) {
      setTickets(tickets.slice(0, -1));
    }
  };

  const acceptInvitation = async () => {
    if (tickets.some((ticket) => ticket.trim() === "")) {
      return message.warning("Escribe los nombres de tus acompañantes");
    }

    if (!currentGuestName) {
      return message.warning("Por favor escribe tu nombre");
    }

    let url = "";
    let payload: any = {};

    if (type === "open") {
      payload = {
        name: currentGuestName,
        username: "000-000",
        id: generateSimpleId(),
        available_cards: [currentGuestName, ...tickets].length,
        companions: [currentGuestName, ...tickets],
        state: "confirmado",
        last_action: "accepted",
        last_update_date: new Date(),
        creation_date: new Date(),
      };
      url = `https://i-attend-22z4h.ondigitalocean.app/api/guests/confirm/${mongoID}`;
    } else if (type === "closed") {
      payload = {
        id: guestInfo.guestID,
        guestUpdates: {
          name: guestInfo.username,
          state: confirmed,
          last_action: confirmed === "confirmado" ? "accepted" : "rejected",
          available_cards: guestInfo.cards,
          companions: confirmed === "confirmado" ? [currentGuestName, ...tickets] : tickets,
        },
      };
      url = `https://i-attend-22z4h.ondigitalocean.app/api/guests/${mongoID}/guests`;
    }

    try {
      const response = await axios.patch(url, { data: payload });

      if (response.data.ok) {
        console.log("✅ Invitación confirmada:", response);
      } else {
        return null;
      }
    } catch (error: any) {
      console.error("❌ Error en confirmación:", error.response?.data || error.message);
      return null;
    }
  };

  const rejectInvitation = async () => {
    if (!currentGuestName) {
      return message.warning("Por favor escribe tu nombre");
    }

    let url = "";
    let payload: any = {};

    if (type === "open") {
      payload = {
        name: currentGuestName,
        username: "000-000",
        id: generateSimpleId(),
        available_cards: 1,
        companions: [],
        state: "rechazado",
        last_action: "rejected",
        last_update_date: new Date(),
        creation_date: new Date(),
      };
      url = `https://i-attend-22z4h.ondigitalocean.app/api/guests/confirm/${mongoID}`;
    } else if (type === "closed") {
      payload = {
        id: guestInfo.guestID,
        guestUpdates: {
          name: guestInfo.username,
          state: "rechazado",
          last_action: "rejected",
          available_cards: guestInfo.cards,
          companions: tickets,
        },
      };
      url = `https://i-attend-22z4h.ondigitalocean.app/api/guests/confirm/${mongoID}/guests`;
    }

    try {
      const response = await axios.patch(url, { data: payload });

      if (response.data.ok) {
        console.log("❌ Invitación rechazada:", response);
      } else {
        return null;
      }
    } catch (error: any) {
      console.error("❌ Error en rechazo:", error.response?.data || error.message);
      return null;
    }
  };

  const handleDescription = (companions: number) => {
    switch (companions) {
      case 0:
        return `¡Tu asistencia ha sido confirmada!`;
      case 1:
        return `¡Tu asistencia y la de tu acompañante ha sido confirmada!`;
      default:
        return `¡Tu asistencia y la de tus ${companions} acompañantes ha sido confirmada!`;
    }
  };

  useEffect(() => {
    if (guestInfo) {
      setConfirmed(guestInfo.status);
      setTickets(guestInfo.companions.slice(1));
      setFreeTickets(guestInfo.tickets);
      setCurrentGuestName(guestInfo.username);
    } else {
      setConfirmed("esperando");
      setTickets([]);
      setFreeTickets(0);
      setCurrentGuestName(null);
    }
  }, []);

  return (
    <>
      {contextHolder}

      <div className="confirm-componentes-container">
        {
          // currentGuest && (

          confirmed === "esperando" ? (
            <div className="confirm-main-container">
              <div
                className="icon-container"
                style={{
                  border: `3px solid ${secondary}`,
                }}
              >
                <FaRegCalendar size={42} style={{ color: accent }} />
              </div>

              <span
                className="drawer-confirm-label"
                style={{
                  color: accent,
                }}
              >
                {freeTickets ? (
                  <span>
                    ¡Hola <b>{currentGuestName}</b>! Tienes <b>{guestInfo.cards} pases</b> disponibles para ti y tus acompañantes
                  </span>
                ) : !freeTickets && currentGuestName ? (
                  <span>
                    ¡Hola <b>{currentGuestName}</b>! Estamos felices de que nos puedas acompañar
                  </span>
                ) : (
                  <span>¡Hola! Estamos felices de que nos puedas acompañar</span>
                )}
              </span>

              <div
                className="how-much-tickets-container"
                style={{
                  border: `3px solid ${secondary}`,
                }}
              >
                <span
                  className="drawer-confirm-label"
                  style={{
                    color: accent,
                    fontSize: "22px",
                    fontWeight: 600,
                  }}
                >
                  ¿Cuántos pases vas a utilizar?
                </span>

                <div className="input-number-tickets-row">
                  <Button
                    disabled={tickets.length === 0 ? true : false}
                    onClick={removeLastTicket}
                    icon={<FaMinus size={20} />}
                    id="ticket-button"
                    style={{
                      color: buttonsColorText(actions),
                      backgroundColor: tickets.length === 0 ? "rgba(0,0,0,0.20)" : actions,
                    }}
                  />
                  <div
                    className="simulated-input"
                    style={{
                      backgroundColor: "var(--ft-color)",
                    }}
                  >
                    <span
                      className="drawer-confirm-label"
                      style={{
                        color: accent,
                        margin: 0,
                      }}
                    >
                      {tickets.length + 1}
                    </span>
                  </div>
                  {freeTickets ? (
                    <Button
                      onClick={addTicket}
                      disabled={tickets.length === guestInfo.cards - 1 ? true : false}
                      icon={<IoMdAdd size={25} />}
                      id="ticket-button"
                      style={{
                        color: buttonsColorText(actions),
                        backgroundColor: tickets.length === guestInfo.cards - 1 ? "rgba(0,0,0,0.20)" : actions,
                      }}
                    />
                  ) : (
                    <Button
                      onClick={addTicket}
                      icon={<IoMdAdd size={25} />}
                      id="ticket-button"
                      style={{
                        color: buttonsColorText(actions),
                        backgroundColor: actions,
                      }}
                    />
                  )}
                </div>

                <span
                  className="drawer-confirm-label"
                  style={{
                    color: accent,
                    fontWeight: 600,
                  }}
                >
                  {freeTickets === 1 ? "Agrega tu nombre" : "Agrega tu nombre y el de tus acompañantes"}
                </span>

                <div className="confirm-inputs-container">
                  <Input
                    value={currentGuestName ?? ""}
                    onChange={(e) => setCurrentGuestName(e.target.value)}
                    className="confirm-input"
                    placeholder="Tu nombre"
                    style={{
                      background: `var(--ft-color)`,
                      border: `0px solid ${secondary}`,
                      color: accent,
                    }}
                  />
                  {tickets.map((tck, index) => (
                    <Input
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      key={index}
                      placeholder="Acompañante"
                      className="confirm-input"
                      value={tck}
                      style={{
                        background: "var(--ft-color)",
                        border: `0px solid ${secondary}`,
                        color: accent,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : confirmed === "rechazado" ? (
            <div className="confirm-main-container">
              <div
                className="icon-container"
                style={{
                  backgroundColor: secondary,
                }}
              >
                <FaRegCalendarXmark size={50} style={{ color: accent }} />
              </div>

              <span
                className="drawer-confirm-label"
                style={{
                  color: accent,
                }}
              >
                Lamentamos no poder contar con tu asistencia esperamos pronto poder celebrar juntos
              </span>
            </div>
          ) : (
            <div className="confirm-main-container">
              <div
                className="icon-container"
                style={{
                  backgroundColor: secondary,
                  // border: `1px solid ${theme ? darker(MainColor, 0.8) : lighter(MainColor, 0.8)}20`
                }}
              >
                <FaRegCalendarCheck size={50} style={{ color: accent }} />
              </div>

              <span
                className="drawer-confirm-label"
                style={{
                  color: accent,
                }}
              >
                {handleDescription(tickets.length)} <b>Esperamos verte y celebrar juntos muy pronto.</b>
              </span>

              <div
                style={{
                  width: "50%",
                  height: "2px",
                  borderRadius: "5px",
                  backgroundColor: secondary,
                }}
              />

              <span
                className="drawer-confirm-label"
                style={{
                  color: accent,
                }}
              >
                Agrega el evento a tu calendario
              </span>

              {/* <AddToCalendarButton
                name={invitation.cover.title}
                options={["Google"]}
                // startDate={formatISODate(invitation.cover.date)}
                startDate={invitation.cover.date.split("T")[0]}
                timeZone="America/Los_Angeles"
              ></AddToCalendarButton> */}
            </div>
          )
          // )
        }

        <div className="confirm-buttons-container">
          {confirmed !== "esperando" ? (
            type === "closed" && (
              <Button
                onClick={() => setConfirmed("esperando")}
                id="confirm-confirm-button"
                style={{
                  background: "transparent",
                  marginTop: "50px",
                  border: `2px solid  ${actions}`,
                  color: actions,
                }}
              >
                Cambiar respuesta
              </Button>
            )
          ) : (
            <>
              <Button
                onClick={acceptInvitation}
                id="confirm-confirm-button"
                style={{
                  color: buttonsColorText(actions),
                  backgroundColor: actions,
                  letterSpacing: "2px",
                }}
              >
                CONFIRMAR
              </Button>

              <Button
                onClick={rejectInvitation}
                id="confirm-confirm-button"
                style={{
                  background: "var(--ft-color)",
                  border: `2px solid  ${secondary}`,
                  color: accent,
                  backgroundColor: primary,
                }}
              >
                No podré asistir
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// export const ConfirmDrawerWeb = ({ visible, setVisible, MainColor, theme }) => {

//     const { user } = useContext(appContext)
//     const { response, operation } = useInvitation()
//     const [tickets, setTickets] = useState(["", "", "", "", "", "", "", ""])

//     const handleClose = () => {
//         setVisible(false)
//     }

//     return (
//         <Drawer
//             // title="Basic Drawer"
//             placement="right"
//             closable={true}
//             onClose={handleClose}
//             open={visible}
//             width={'35%'}
//             style={{ background: theme ? lighter(MainColor, 0.9) : darker(MainColor, 0.6) }}
//             extra={
//                 <Row>

//                     <Button id="confirm-confirm-button" style={{
//                         background: 'transparent',
//                         border: `2px solid  ${!theme ? lighter(MainColor, 0.4) : darker(MainColor, 0.6)}`,
//                         color: !theme ? lighter(MainColor, 0.4) : darker(MainColor, 0.6),
//                     }}>

//                         No podre asistir
//                     </Button>

//                     <Button id='confirm-confirm-button' style={{
//                         color: theme ? lighter(MainColor, 0.6) : darker(MainColor, 0.4),
//                         backgroundColor: theme ? darker(MainColor, 0.6) : lighter(MainColor, 0.4)
//                     }}>
//                         Confirmar
//                     </Button>

//                 </Row>
//             }

//         // key={placement}
//         >

//             <div className='confirm-main-container'>

//                 <div className='icon-container' style={{
//                     backgroundColor: theme ? lighter(MainColor, 0.7) : darker(MainColor, 0.3),
//                     border: `2px solid ${theme ? darker(MainColor, 0.8) : lighter(MainColor, 0.8)}`
//                 }}>
//                     <FaRegCalendar size={50} style={{ color: theme ? darker(MainColor, 0.8) : lighter(MainColor, 0.8) }} />
//                 </div>

//                 <span className='drawer-confirm-label' style={{
//                     color: accent
//                 }}>
//                     ¡Hola <b>Usuario</b>! Tienes <b>8 pases</b> disponibles para ti y tus acompañantes
//                 </span>

//                 <div className='how-much-tickets-container' style={{
//                     border: `2px solid ${theme ? darker(MainColor, 0.8) : lighter(MainColor, 0.8)}`,
//                     backgroundColor: theme ? lighter(MainColor, 0.7) : darker(MainColor, 0.3)
//                 }}>

//                     <span className='drawer-confirm-label' style={{
//                         color: accent,
//                         fontSize: '22px'
//                     }}>
//                         <b>¿Cuántos pases vas a utilizar?</b>
//                     </span>

//                     <div className='input-number-tickets-row'>
//                         <Button
//                             disabled={tickets.length === 0 ? true : false}
//                             onClick={() => setTickets(tickets.slice(0, -1))}
//                             icon={<FaMinus size={20} />}
//                             id='ticket-button' style={{
//                                 backgroundColor: tickets.length === 0 ? 'rgba(0,0,0,0.20)' : lighter(MainColor, 0.4)
//                             }} />
//                         <div className='simulated-input' style={{
//                             backgroundColor: accent
//                         }}>
//                             <span className='drawer-confirm-label'
//                                 style={{
//                                     color: theme ? lighter(MainColor, 0.6) : darker(MainColor, 0.3),
//                                     margin: 0
//                                 }}>{tickets.length + 1}</span>
//                         </div>
//                         <Button
//                             onClick={() => setTickets([...tickets, ""])}
//                             disabled={tickets.length === 8 - 1 ? true : false}
//                             icon={<IoMdAdd size={25} />}
//                             id='ticket-button' style={{
//                                 backgroundColor: tickets.length === 8 - 1 ? 'rgba(0,0,0,0.20)' : lighter(MainColor, 0.4)
//                             }} />
//                     </div>

//                     <span className='drawer-confirm-label'
//                         style={{
//                             color: accent,

//                         }}><b>Tus acompañantes</b></span>

//                     <div className='confirm-inputs-container'>
//                         <div
//                             className='confirm-input'
//                             style={{
//                                 background: `${theme ? darker(MainColor, 0.6) : lighter(MainColor, 0.8)}80`,
//                                 color: lighter(MainColor, 0.6),
//                                 marginBottom: '15px', fontSize: '16px', fontWeight: 700,
//                                 display: 'flex', alignItems: 'center', justifyContent: 'center'
//                             }}
//                         >
//                             Usuario
//                         </div>
//                         {
//                             tickets.map((tck) => (
//                                 <Input
//                                     placeholder='Nombre'
//                                     className='confirm-input'
//                                     style={{
//                                         background: theme ? lighter(MainColor, 0.9) : lighter(MainColor, 0.8),
//                                         border: `1px solid ${theme ? darker(MainColor, 0.8) : lighter(MainColor, 0.8)}50`,
//                                         color: darker(MainColor, 0.3)
//                                     }}
//                                 />
//                             ))
//                         }
//                     </div>
//                 </div>

//             </div>

//         </Drawer>
//     )
// }
