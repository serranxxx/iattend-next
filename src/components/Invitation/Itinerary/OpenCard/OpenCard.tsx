import { ItineraryItem, NewInvitation } from "@/types/new_invitation";
import styles from './open.module.css'
import { Button } from "antd";
import { buttonsColorText, darker, getMexicoHour } from "@/helpers/functions";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { BsFillPinAngleFill } from "react-icons/bs";

type CardProps = {
    invitation: NewInvitation;
    dev: boolean;
    item: ItineraryItem;
    setActiveSteps: React.Dispatch<React.SetStateAction<ItineraryItem[]>>
    activeSteps: ItineraryItem[];
};

export default function OpenCard({ invitation, dev, item, activeSteps, setActiveSteps }: CardProps) {

    const content = invitation.itinerary
    const generals = invitation.generals

    const primary = generals?.colors.primary ?? "#FFFFFF";
    const secondary = generals?.colors.secondary ?? "#FFFFFF";
    const accent = generals?.colors.accent ?? "#FFFFFF";
    const actions = generals.colors.actions

    return (
        <div className={styles.open_card_container} style={{
            fontFamily: generals.fonts.body?.typeFace,
            color: content.inverted ? primary : accent
        }}>

            {/* {
                generals.texture !== null &&
                <div className="image-texture-container">
                    <div className="image-texture-container">
                        {Array.from({ length: 100 }).map((_, index) => (
                            <img alt='' key={index} src={textures[generals.texture].image} className="texture-img"
                                style={{
                                    opacity: textures[generals.texture].opacity,
                                    filter: textures[generals.texture].filter,
                                    mixBlendMode: textures[generals.texture].blend
                                }}
                            />
                        ))}
                    </div>
                </div>
            } */}


            <Button
                onClick={() =>
                    setActiveSteps(activeSteps?.filter(step => step !== item) ?? [])
                }
                className={styles.open_card_button}
                icon={<BsFillPinAngleFill size={18}/>}
                style={{
                    background: content.background ? secondary : content.inverted ? primary : actions ?? "#FFF",
                    color: content.inverted ? accent : buttonsColorText(primary),
                }}
            />

            <div className={styles.image_header_container}>
                <Image
                    alt=""
                    fill
                    src={item.image!}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </div>


            <div className={styles.open_card_info}>
                <span className={styles.open_title}> <b>{item.name}</b> </span>
                <span className={styles.open_sub}> {getMexicoHour(item.time!)} </span>
                <span className={styles.open_text}> {item.subtext} </span>
                {
                    item.address &&
                    <span className={styles.open_card_address} style={{ color: content.inverted ? `${primary}80` : `${accent}80` }}>
                        {`${item.address.street}, ${item.address.number}, ${item.address.neighborhood}, ${item.address.zip}, ${item.address.city}, ${item.address.state}`}
                    </span>
                }
            </div>





            {
                item.moments &&
                <div className={styles.custom_card_subitems} style={{
                }}>
                    {item.moments.map((subitem) => (
                        <div key={subitem.name} className={styles.custom_card_subitem}>
                            <div className={styles.custom_card_subitem_bullet} />
                            <span className={styles.custom_card_subitem_title}>
                                {subitem.name}
                            </span>
                            <span className={styles.custom_card_subitem_time}>
                                {getMexicoHour(subitem.time!)}
                            </span>
                            <span className={styles.custom_card_subitem_description} style={{ color: content.inverted ? `${primary}80` : `${accent}80` }}>
                                {subitem.description}
                            </span>
                        </div>
                    ))}
                </div>
            }

            {item.address
                &&
                <>
                    <div className={`custom-card-row ${item.moments ? 'custom-card-row-column' : ''}`} style={{ width: '100%' }}>
                        {
                            item.address.street && item.address.number && item.address.neighborhood && item.address.zip && item.address.city && item.address.state &&
                            <>
                                {/* <div className="custom-card-weather" style={{ height: item.moments ? '80px' : '97px' }}>
                                    <ForecastWeather invertedColors={invertedColors} cp={item.address.CP} MainColor={MainColor} theme={theme} font={font} colorPalette={colorPalette} />
                                </div> */}

                                <div className={styles.mapa_container} style={{ backgroundColor: secondary }}>
                                    <iframe
                                        title="Mapa"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={simpleaddress(item.address.street, item.address.number, item.address.neighborhood, item.address.zip, item.address.city, item.address.state)}
                                    />
                                </div>
                            </>
                        }


                    </div>
                    {/* {item.address.url && (
                        <Link to={item.address.url} target='_blank' className="custom-card-link" style={{ margin: '16px 0px' }}>
                            <Button
                                icon={<RiMapPin2Fill size={16} />}
                                className={dev ? "custom-card-link-button-dev" : "custom-card-link-button"} style={{ background: invertedColors ? colorPalette.primary : colorPalette.buttons, color: invertedColors ? colorPalette.accent : buttonsColorText(colorPalette.buttons) }}>
                                ¿Cómo llegar?
                            </Button>
                        </Link>
                    )} */}
                </>
            }

            {/* {item.playlist && <SpotifyWidget url={item.playlist} />} */}


        </div>
    )
}



export function simpleaddress(direccion: string, numero: string, colonia: string, codigoPostal: string, ciudad: string, estado: string) {
    const direccionCompleta = `${direccion} ${numero}, ${colonia}, ${codigoPostal}, ${ciudad}, ${estado}, Mexico`;
    // const direccionCodificada = encodeURIComponent(direccionCompleta);
    const urlMapaGenerado = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBZ8NLpvAl4DiTeE2gYekBqhmSZFx43R0M&q=${encodeURIComponent(direccionCompleta)}`;
    return urlMapaGenerado;
}

// type DynamicMapProps = { query: string; height?: number | string };

// export function DynamicMapEmbed({ query, height = 300 }: DynamicMapProps) {
//   const q = encodeURIComponent(query); // "Av. Central 123, 31000, Chihuahua, México"
//   const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
//   const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBZ8NLpvAl4DiTeE2gYekBqhmSZFx43R0M&q=${q}&zoom=16`;

//   return (
//     <div style={{ width: "100%", height, border: 0 }}>
//       <iframe
//         title="Mapa"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         loading="lazy"
//         allowFullScreen
//         referrerPolicy="no-referrer-when-downgrade"
//         src={src}
//       />
//     </div>
//   );
// }