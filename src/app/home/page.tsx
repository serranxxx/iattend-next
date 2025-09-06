import { HeaderApp } from "@/components/Header/HeaderApp/HeaderApp";
import styles from "./page.module.css";
import { HomeScroll } from "@/components/HomeScroll/HomeScroll";
import { PiMonitorPlayBold } from "react-icons/pi";
import dec_1 from "@/assets/decorations/decoration_1.png";
import build_inv from "@/assets/content/build_invitations.png";
import Image from "next/image";
import { HomeCards } from "@/helpers/header";

export default function HomePage() {
  return (
    <div className={styles.home_page_container}>
      <HeaderApp position="home" isVisible={true} />
      <div className={styles.disc_page_content_container}>
        <div className={styles.dp_title_container}>
          <span className={styles.dp_primary_text}>
            Diseña, Comparte, <span className={styles.accent_text}>Celebra.</span>
          </span>
        </div>

        <HomeScroll />

        <div className={styles.dph_box_cont}>
          <div className={styles.dp_head_block}>
            <div className={styles.dph_texts_cont}>
              <span className={styles.dp_primary_text_secondary}>Construye invitaciones perfectas</span>
              <span className={styles.d_primary_single_text}>
                Ajusta cada detalle a tu gusto, desde los colores hasta la tipografía, asegurarte que tu invitación sea tan única como tu
                celebración.
              </span>
            </div>

            <div className={styles.dph_cards_cont}>
              <Image alt="" width={400} src={dec_1} className={styles.decoration_image_admin} />
            </div>
          </div>
          <div className={`${styles.test_build_invitation_container} ${styles.first_box}`}>
            <div className={`${styles.try_inv_icon_cont} ${styles.disable_icon}`}>
              <PiMonitorPlayBold />
            </div>

            <span className={styles.try_inv_head}>
              Descubre lo fácil que es diseñar invitaciones personalizadas que capturan la esencia de tu evento
            </span>
            <span className={`${styles.try_inv_single} ${styles.discover_description}`}>
              Con nuestras herramientas intuitivas, puedes ajustar cada detalle a tu gusto, desde los colores hasta la tipografía,
              asegurando que tu invitación sea tan única como tu celebración.
            </span>

            <div className={styles.test_build_invitation_second_container}>
              <Image alt="" src={build_inv} className={styles.module_image_example} />
            </div>
          </div>
          <div className={`${styles.try_inv_second_section} scroll-invitation`}>
            {HomeCards.map((card, index) => (
              <div key={index} className={`${styles.test_build_invitation_container} ${styles.test_build_small_card}`}>
                <div className={styles.card_dph_single_col}>
                  <div className={styles.try_inv_icon_cont}>{<card.icon />}</div>

                  <span className={styles.try_inv_head_second} style={{}}>
                    {card.title}
                  </span>
                  <span style={{}} className={styles.try_inv_single_second}>
                    {card.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div ref={exaplesContainer} className={`${styles.dph_examples_carrusell} scroll-invitation`}>
          {invitation && (
            <div ref={realInvitation} className="invitation-container-box">
              <div className="dph-scroll-buttons-cont">
                <button
                // onClick={scrollUp}
                >
                  <IoIosArrowUp size={18} />
                </button>
                <button
                // onClick={scrollDown}
                >
                  <IoIosArrowDown size={18} />
                </button>
              </div>

              <div style={{ transform: "scale(0.8)", margin: "0px" }} className={`inv-device-main-container-ios inv-dyn-margins`}>
                <div className={`device-buttons-container-ios`}>
                  <div className={`device-button-ios`} />
                  <div className={`device-button-ios`} />
                  <div className={`device-button-ios`} />
                </div>
                <div className={`device-power-button-ios`} />
                <div className={`inv-device-container-ios`}>
                  <div
                    style={{
                      width: "100%",
                    }}
                    className={`inv-black-space-ios`}
                  >
                    <span>5:15</span>
                    <div className={`camera-ios`} />
                    <div>
                      <img
                        alt=""
                        src={ios_settings}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          marginRight: "50px",
                        }}
                      />
                    </div>
                  </div>

                  <div ref={scrollableContentRef} className={`scroll-invitation ios-invitation`}>
                    <InvitationTest invitation={invitation} size={size} land={true} />
                  </div>
                  <div className={`inv-light-space-ios`} />
                </div>
              </div>

              <span
                className="dp-primary-text-secondary invitation-interactive-text"
                style={{
                  fontSize: "74px",
                  textAlign: "left",
                  fontWeight: 700,
                  maxWidth: "650px",
                }}
              >
                Conoce una invitación en <span className="accent-text--w">acción.</span>
              </span>
            </div>
          )}

          <div ref={cardInvitation} className="invitation-container-box">
            <div style={{ transform: "scale(0.8)", margin: "0px" }} className={`inv-device-main-container-ios inv-dyn-margins`}>
              <div className={`device-buttons-container-ios`}>
                <div className={`device-button-ios`} />
                <div className={`device-button-ios`} />
                <div className={`device-button-ios`} />
              </div>
              <div className={`device-power-button-ios`} />
              <div className={`inv-device-container-ios`}>
                <div
                  style={{
                    width: "100%",
                  }}
                  className={`inv-black-space-ios`}
                >
                  <span>5:15</span>
                  <div className={`camera-ios`} />
                  <div>
                    <img
                      alt=""
                      src={ios_settings}
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        marginRight: "50px",
                      }}
                    />
                  </div>
                </div>

                <div className={`scroll-invitation ios-invitation`} style={{ overflowY: "hidden" }}>
                  <img
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="https://firebasestorage.googleapis.com/v0/b/iattend-df79a.appspot.com/o/covers_samples%2FSimulator%20Screenshot%20-%20iPhone%2015%20Pro%20-%202025-03-29%20at%2015.14.55.png?alt=media&token=5ff2d983-8b5b-47bb-b370-1fe0683990b2"
                  />
                </div>
                <div className={`inv-light-space-ios`} />
              </div>
            </div>

            <span
              className="dp-primary-text-secondary invitation-interactive-text"
              style={{
                fontSize: "74px",
                textAlign: "left",
                fontWeight: 700,
                maxWidth: "650px",
              }}
            >
              Tu invitación, solo para quienes <span className="accent-text--w">tú elijas.</span>
            </span>
          </div>

          {invitation && (
            <div ref={blockedInvitation} className="invitation-container-box share-inv-cont-box" style={{ gap: "24px" }}>
              <div
                className="qr-card-container qr-adapted"
                style={{
                  height: "800px",
                  transition: "all 0.3s ease",
                  width: "410px",
                  transform: "scale(0.8)",
                  boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
                  padding: "0px",
                }}
              >
                <div className="module-cover-container" style={{ height: "100%", position: "relative" }}>
                  <div
                    className={"cover-container"}
                    style={{
                      height: "100%",
                      margin: "0px",
                      position: "relative",
                      borderRadius: "32px",
                    }}
                  >
                    <div
                      className="image-card-qr"
                      style={{
                        backgroundImage: `url(${invitation.cover.featured_prod})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "0px",
                        borderRight: "32px",
                      }}
                    ></div>

                    <div
                      className="qr-background-cover"
                      style={{
                        background: `linear-gradient(to top, ${
                          invitation.generals.theme
                            ? darker(invitation.generals.palette.primary, 0.2)
                            : darker(invitation.generals.palette.primary, 0.2)
                        }, rgba(0,0,0,0))`,
                        borderRadius: "0px",
                      }}
                    >
                      <div
                        className="cover--title-container"
                        style={{
                          alignItems: invitation.cover.align,
                          marginTop: "20px",
                          flex: 1,
                          width: "100%",
                          padding: "0px 20px",
                          boxSizing: "border-box",
                        }}
                      >
                        <span
                          style={{
                            color: !invitation.cover.color
                              ? invitation.generals.theme
                                ? lighter(invitation.generals.palette.primary, 0.6)
                                : lighter(invitation.generals.palette.accent, 0.6)
                              : invitation.cover.color,
                            width: "100%",
                            textAlign: invitation.cover.justify,
                            fontSize: `${invitation.cover.fontSize}em`,
                            wordBreak: "break-word",
                            opacity: invitation.cover.opacity,
                            fontFamily: invitation.cover.image,
                            fontWeight: invitation.cover.fontWeight,
                            lineHeight: "0.9",
                          }}
                        >
                          {invitation.cover.title}
                        </span>
                      </div>

                      <span
                        style={{
                          color: invitation.cover.timerColor,
                          width: "100%",
                          padding: "0px 60px",
                          boxSizing: "border-box",
                          textAlign: "center",
                          fontSize: `26px`,
                          wordBreak: "break-word",
                          opacity: invitation.cover.opacity,
                          fontFamily: invitation.cover.image,
                          lineHeight: "1.1",
                          fontWeight: 600,
                          marginTop: "20px",
                          opacity: "0.8",
                        }}
                      >
                        {invitation.greeting.title}
                      </span>

                      <span
                        style={{
                          color: invitation.cover.timerColor,
                          width: "100%",
                          textAlign: "center",
                          fontSize: `18px`,
                          wordBreak: "break-word",
                          opacity: invitation.cover.opacity,
                          fontFamily: invitation.cover.image,
                          lineHeight: "0.8",
                          margin: "20px 0px",
                          opacity: "0.8",
                          marginTop: "10px",
                        }}
                      >
                        {formatDate(invitation.cover.date)}
                      </span>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          flexDirection: "column",
                          overflow: "hidden",
                          // height: '210px', minHeight: '210px',
                          opacity: "0.8",

                          marginBottom: "30px",
                        }}
                      >
                        <QRCodeCanvas
                          bgColor={"transparent"}
                          fgColor={invitation.cover.timerColor}
                          value={`${baseProd}/${invitation.label}/${invitation.generals.eventName}`}
                          size={"80"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="qr-bright-shadow" style={{ borderRadius: "32px" }}></div>
                </div>
              </div>

              <span
                className="dp-primary-text-secondary invitation-interactive-text"
                style={{
                  fontSize: "74px",
                  textAlign: "left",
                  fontWeight: 700,
                  maxWidth: "650px",
                }}
              >
                Haz tu tarjeta digital con QR y <span className="accent-text--w">compartela.</span>
              </span>
            </div>
          )}
        </div> */}

        {/* <div className="carrusell-butons-container">
          <button
            className={`carrousell-button${currentCarrousell >= 0 && currentCarrousell < 1250 ? "--selected" : ""}`}
            onClick={() => handleCarrousell(realInvitation.current.offsetLeft)}
          ></button>
          <button
            className={`carrousell-button${currentCarrousell >= 1250 && currentCarrousell < 2500 ? "--selected" : ""}`}
            onClick={() => handleCarrousell(cardInvitation.current.offsetLeft)}
          ></button>
          <button
            className={`carrousell-button${currentCarrousell >= 2500 ? "--selected" : ""}`}
            onClick={() => handleCarrousell(blockedInvitation.current.offsetLeft)}
          ></button>
        </div> */}

        {/* <div className={styles.dph_box_cont}>
          <div className={styles.dp_head_block}>
            <div className={styles.dph_texts_cont}>
              <span className={styles.dp_primary_text_secondary}>Organiza a tus invitados</span>
              <span className={styles.d_primary_single_text}>
                Administra fácilmente tu lista de invitados, controla quién puede ver tu invitación.
              </span>
            </div>

            <div className={styles.dph_cards_cont}>
              <img alt="" src={decoration.decoration_2} className={styles.decoration_image_admin} />
            </div>
          </div>

          <div className={`${styles.test_build_invitation_container} ${styles.first_box}`}>
            <div className={`${styles.try_inv_icon_cont} ${styles.disable_icon}`}>
              <PiMonitorPlayBold />
            </div>

            <span className={styles.try_inv_head}>Gestiona tus invitados de manera eficiente</span>
            <span className={`${styles.try_inv_single} ${styles.discover_description}`}>
              Administra fácilmente tu lista de invitados, controla quién puede ver tu invitación, y recibe confirmaciones de asistencia en
              tiempo real. Nuestra plataforma te ofrece todas las herramientas necesarias para que la gestión de tus invitados sea sencilla
              y efectiva.
            </span>

            <div className={styles.test_build_invitation_second_container}>
              <img alt="" src={images.guest_page} className={styles.module_image_example} />
            </div>

          </div>

          <div className="styles.try_inv_second_section croll-invitation">
            {guestManagementCards.map((card, index) => (
              <div key={index} className={`${styles.test_build_invitation_container} ${styles.test_build_small_card}`}>
                <div className={styles.card_dph_single_col}>
                  <div className="styles.try_inv_icon_cont">{card.icon}</div>

                  <span className={styles.try_inv_head_second} style={{}}>
                    {card.title}
                  </span>
                  <span style={{}} className={styles.try_inv_single_second}>
                    {card.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="start-building-today">
          <img
            alt=""
            src={decoration.decoration_3}
            style={{
              transform: "scaleX(-1)",
            }}
            className="decoration-image-create"
          />
          <span
            className="dp-primary-text final-text-design"
            style={{
              maxWidth: "30%",
              lineHeight: 1.2,
            }}
          >
            Comienza <span className="accent-text">a crear</span> hoy.
          </span>
        </div> */}

        {/* <Link
          target="_blank"
          className="start-working-web"
          to={`https://wa.me/6145338500?text=${encodeURIComponent("Hola, estoy interesado en las invitaciones digitales")}`}
          style={{ textDecoration: "none" }}
        >
          <Button id="access-button" style={{ borderRadius: "99px" }}>
            COMENZAR A CREAR
          </Button>
        </Link> */}
      </div>

      {/* <Link
        target="_blank"
        to={`https://wa.me/6145338500?text=${encodeURIComponent("Hola, estoy interesado en las invitaciones digitales")}`}
        style={{ textDecoration: "none" }}
      >
        <Button style={{ opacity: isVisible ? 1 : 0, transition: "all 0.3s ease" }} className="start-working-btn">
          MÁS INFORMACIÓN
        </Button>
      </Link> */}
    </div>
  );
}
