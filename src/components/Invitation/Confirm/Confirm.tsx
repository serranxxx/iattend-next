"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useState } from "react";
import { Button, Input, message } from "antd";
import { FaMinus, FaPlus, FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa";
import { buttonsColorText, generateSimpleId } from "@/helpers/functions";
import { IoMdAdd } from "react-icons/io";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { InvitationType, InvitationUIBundle, NewInvitation } from "@/types/new_invitation";
import { Guest, GuestAccessPayload } from "@/types/guests";
import { useInvitation } from "@/services/customHook";
import { confirmGuests, editGuestsGuest } from "@/services/apiGuests";
import styles from './confirm.module.css'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsCalendar2Check } from "react-icons/bs";
import { AddToCalendarButton } from "add-to-calendar-button-react";


dayjs.extend(utc);
dayjs.extend(timezone);

type ConfirmProps = {
  invitation: NewInvitation;
  type: InvitationType;
  guestInfo: GuestAccessPayload | null;
  mongoID: string;
  ui: InvitationUIBundle;
};

export default function Confirm({ ui, invitation, type, guestInfo, mongoID }: ConfirmProps) {
  const [messageApi, contextHolder] = message.useMessage();

  const generals = invitation?.generals;
  const primary = generals?.colors.primary ?? "#FFFFFF";
  const secondary = generals?.colors.secondary ?? "#FFFFFF";
  const accent = generals?.colors.accent ?? "#FFFFFF";
  const actions = generals?.colors.actions ?? "#FFFFFF";

  const { response, operation } = useInvitation();
  const [tickets, setTickets] = useState<string[]>([]);
  const [localStatus, setLocalStatus] = useState<"esperando" | "confirmado" | "rechazado">("esperando");
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

  // const acceptInvitation = async () => {
  //   if (tickets.some((ticket) => ticket.trim() === "")) {
  //     return message.warning("Escribe los nombres de tus acompañantes");
  //   }

  //   if (!currentGuestName) {
  //     return message.warning("Por favor escribe tu nombre");
  //   }

  //   let url = "";
  //   let payload: any = {};

  //   if (type === "open") {
  //     payload = {
  //       name: currentGuestName,
  //       username: "000-000",
  //       id: generateSimpleId(),
  //       available_cards: [currentGuestName, ...tickets].length,
  //       companions: [currentGuestName, ...tickets],
  //       state: "confirmado",
  //       last_action: "accepted",
  //       last_update_date: new Date(),
  //       creation_date: new Date(),
  //     };
  //     url = `http://localhost:4000/api/guests/confirm/${mongoID}`;
  //   } else if (type === "closed") {
  //     payload = {
  //       id: guestInfo?.guestID,
  //       guestUpdates: {
  //         name: guestInfo?.username,
  //         state: "confirmado",
  //         last_action: "accepted",
  //         available_cards: guestInfo?.cards,
  //         companions: [currentGuestName, ...tickets],
  //       },
  //     };
  //     url = `http://localhost:4000/api/guests/${mongoID}/guests`;
  //   }

  //   console.log(type)
  //   console.log(payload)
  //   console.log(url)
  //   console.log(mongoID)

  //   try {
  //     const response = await axios.patch(url, { data: payload });

  //     if (response.data.ok) {
  //       console.log("✅ Invitación confirmada:", response);
  //       console.log(response.data.guest)
  //     } else {
  //       return null;
  //     }
  //   } catch (error: any) {
  //     console.error("❌ Error en confirmación:", error.response?.data || error.message);
  //     return null;
  //   }
  // };

  const acceptInvitation = () => {
    if (tickets.some(ticket => ticket.trim() === "")) {
      message.warning("Escribe los nombres de tus acompañantes");
      return;
    }

    if (!currentGuestName) {
      message.warning("Por favor escribe tu nombre");
      return;
    }

    setLocalStatus('confirmado')

    if (type === 'open') {
      const newGuest: Guest = {
        name: currentGuestName,
        username: '000-000',
        id: generateSimpleId(),
        available_cards: [currentGuestName, ...tickets].length,
        companions: [currentGuestName, ...tickets],
        state: 'confirmado',
        last_action: 'accepted',
        last_update_date: new Date(),
        creation_date: new Date()
      }
      console.log(newGuest)
      confirmGuests(operation, mongoID, newGuest)
    }

    else if (type === 'closed' && guestInfo) {
      editGuestsGuest(operation, mongoID, guestInfo, 'confirmado', tickets, currentGuestName)
    }

  };
  const rejectInvitation = async () => {
    if (tickets.some(ticket => ticket.trim() === "")) {
      message.warning("Escribe los nombres de tus acompañantes");
      return;
    }

    if (!currentGuestName) {
      message.warning("Por favor escribe tu nombre");
      return;
    }

    setLocalStatus('rechazado')

    if (type === 'open') {
      const newGuest: Guest = {
        name: currentGuestName,
        username: '000-000',
        id: generateSimpleId(),
        available_cards: [currentGuestName, ...tickets].length,
        companions: [currentGuestName, ...tickets],
        state: 'rechazado',
        last_action: 'rejected',
        last_update_date: new Date(),
        creation_date: new Date()
      }
      console.log(newGuest)
      confirmGuests(operation, mongoID, newGuest)
    }

    else if (type === 'closed' && guestInfo) {
      editGuestsGuest(operation, mongoID, guestInfo, 'rechazado', tickets, currentGuestName)
    }
  };

  const handleDescription = (companions: number) => {
    switch (companions) {
      case 0:
        return ui.confirm.confirmedMsgBold;
      case 1:
        return `¡Tu asistencia y la de tu acompañante ha sido confirmada!`;
      default:
        return `¡Tu asistencia y la de tus ${companions} acompañantes ha sido confirmada!`;
    }
  };

  const getTitle = (title: unknown): string => {
    // si ya es string
    if (typeof title === "string") return title;
    // si es objeto con .text o .value (ajústalo a tu modelo)
    if (title && typeof title === "object") {
      // @ts-expect-error acceder flexible
      return title.text ?? title.value ?? "Mi evento";
    }
    return "Mi evento";
  };

  const toYYYYMMDD = (dateLike: unknown): string => {
    // acepta string ISO o { value: string }
    let raw: string | undefined;
    if (typeof dateLike === "string") raw = dateLike;
    else if (dateLike && typeof dateLike === "object") {
      // @ts-expect-error acceder flexible
      raw = dateLike.value;
    }
    if (!raw) return "";
    const d = new Date(raw);
    // Asegura formato 'YYYY-MM-DD'
    return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
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

  useEffect(() => {
    if (response) {
      if (response.data.ok) {
        switch (response.data.msg) {
          case "Guest updated successfully":
            setConfirmed(localStatus)
            break;

          default:
            break;
        }
      }
    }
  }, [response])

  return (
    <>
      {contextHolder}

      <div className={styles.confirm_container}>
        {
          confirmed === "esperando" ? (
            <div className={styles.confirm_cont} style={{width:'100%'}}>
              {/* <div
                className={styles.icon_cont}
                style={{
                  backgroundColor:`${accent}20`
                }}
              >
                <BsCalendar2Check size={32} style={{ color: accent }} />
              </div> */}

              <span
                className={styles.confirm_label}
                style={{
                  color: accent,
                }}
              >

                {freeTickets ? (
                  <>
                  <span>{ui.confirm.hello}, <b>{currentGuestName ?? ""} </b></span>
                  <span>{ui.confirm.passes1} <b>{guestInfo?.cards ?? ""}</b> {ui.confirm.passes2}</span>

                  </>
                ) : currentGuestName ? (
                  <>
                     <span>{ui.confirm.hello}, <b>{currentGuestName ?? ""} </b></span>
                     <span>{ui.confirm.passes1} <b>{guestInfo?.cards ?? ""}</b> {ui.confirm.passes2}</span>
                    {/* puedes usar un texto fijo o agregar algo tipo confirm.thanks al bundle */}
                    <span>{ui.confirm.thanks}</span>
                  </>
                ) : (
                  <span>{ui.confirm.thanks}</span>
                )}
              </span>


              <span
                className={styles.confirm_label}
                style={{
                  color: accent,
                  fontWeight: 800,
                  marginTop: '-8px'
                }}
              >
                {ui?.confirm.howMany}
              </span>

              <div className={styles.confirm_tickets_row}>
                <Button
                  disabled={tickets.length === 0 ? true : false}
                  onClick={removeLastTicket}
                  icon={<FaMinus size={12} style={{ color: primary }} />}
                  className={styles.add_less_btn}
                  style={{
                    color: buttonsColorText(actions),
                    backgroundColor: tickets.length === 0 ? `${accent}20` : accent,
                  }}
                />
                <div
                  className={styles.simulate_input}
                  style={{ borderColor: `${accent}20` }}
                >
                  <span
                    className={styles.confirm_label}
                    style={{
                      color: accent,
                      fontSize: '64px',
                      fontWeight: 800,
                      lineHeight: 1
                    }}
                  >
                    {tickets.length + 1}
                  </span>
                </div>
                {freeTickets ? (
                  <Button
                    onClick={addTicket}
                    disabled={tickets.length === (guestInfo?.cards ?? 1) - 1 ? true : false}
                    icon={<FaPlus size={12} style={{ color: primary }} />}
                    className={styles.add_less_btn}
                    style={{
                      color: buttonsColorText(actions),
                      backgroundColor: tickets.length === (guestInfo?.cards ?? 1) - 1 ? `${accent}20` : accent,
                    }}
                  />
                ) : (
                  <Button
                    onClick={addTicket}
                    icon={<FaPlus size={12} />}
                    className={styles.add_less_btn}
                    style={{
                      color: buttonsColorText(actions),
                      backgroundColor: actions,
                    }}
                  />
                )}
              </div>

              <span
                className={styles.confirm_label}
                style={{
                  color: accent,
                  fontWeight: 600,
                }}
              >
                {ui?.confirm.yourName}
              </span>

              <div className={styles.inputs_cont}>
                <Input
                  value={currentGuestName ?? ""}
                  onChange={(e) => setCurrentGuestName(e.target.value)}
                  className={styles.confirm_input}
                  placeholder="Tu nombre"
                  style={{
                    color: accent,
                    borderColor: `${accent}20`
                  }}
                />
                {tickets.map((tck, index) => (
                  <Input
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    key={index}
                    placeholder="Acompañante"
                    className={styles.confirm_input}
                    value={tck}
                    style={{
                      color: accent,
                      borderColor: `${accent}20`
                    }}
                  />
                ))}
              </div>
            </div>

          ) : confirmed === "rechazado" ? (
            <div className={styles.confirm_cont}>
              <div
                className={styles.icon_cont}
              >
                <FaRegCalendarXmark size={50} style={{ color: accent }} />
              </div>

              <span
                className={styles.confirm_label}
                style={{
                  color: accent,
                }}
              >
                {ui?.confirm.declinedMsg}
              </span>
            </div>
          ) : (
            <div className={styles.confirm_cont}>
              <div
                className={styles.icon_cont}
              >
                <FaRegCalendarCheck size={50} style={{ color: accent }} />
              </div>

              <span
                className={styles.confirm_label}
                style={{
                  color: accent,
                }}
              >
                {ui.confirm.confirmedMsgBold}
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
                className={styles.confirm_label}
                style={{
                  color: accent,
                }}
              >
                {ui?.confirm.addToCalendar}
              </span>
              {
                invitation &&
                <AddToCalendarButton
                  name={getTitle(invitation?.cover?.title)}
                  options={["Google"]}
                  // startDate={formatISODate(invitation.cover.date)}
                  startDate={toYYYYMMDD(invitation?.cover?.date)}
                  timeZone="America/Los_Angeles"
                ></AddToCalendarButton>
              }

            </div>
          )
          // )
        }

        <div className={styles.buttons_container}>
          {confirmed !== "esperando" ? (
            type === "closed" && (
              <Button
                onClick={() => setConfirmed("esperando")}
                style={{
                  background: "transparent",
                  height: '44px', width: '100%', fontSize: '16px',
                  border: `2px solid  ${accent}`,
                  color: accent,
                }}
              >
                {ui?.confirm.changeAnswer}
              </Button>
            )
          ) : (
            <>
              <Button
                onClick={() => { acceptInvitation(), setConfirmed("esperando") }}
                style={{
                  color: primary,
                  backgroundColor: accent,
                  letterSpacing: "2px",
                  height: '44px', width: '100%', fontSize: '16px'
                }}
              >
                {ui?.confirm.cta}
              </Button>

              <Button
                onClick={rejectInvitation}
                style={{

                  border: `2px solid  ${accent}`,
                  color: accent,
                  backgroundColor: 'transparent',
                  height: '44px', width: '100%', fontSize: '16px'
                }}
              >
                {ui?.confirm.decline}
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

//                     <div className={styles.confirm_tickets_row}>
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
