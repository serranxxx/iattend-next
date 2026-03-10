'use client'

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./invitation.module.css";
import { Button } from "antd";

export const InvitationAbout = () => {

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -800,
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 800,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={styles.main_cont}>
            <div className={styles.key_cont}>
                <div className={styles.row}>
                    <span className={styles.key_title}>
                        Una experiencia completa.
                    </span>

                    <a
                        href="https://www.iattend.events/wedding/prueba-iattend?password=Vvx-R7F"
                        target="_blank"
                        className={styles.key_sub_link}
                    >
                        Ver ejemplo
                    </a>
                </div>

                <div
                    ref={scrollRef}
                    className={`${styles.cards_cont} scroll-invitation`}
                >



                    <div className={styles.big_card}>
                        <span className={styles.key_sub}>
                            No creemos en <b>versiones limitadas</b>.
                            Todos nuestros planes incluyen todas las funciones
                        </span>

                        <div className={styles.image_cont}>
                            <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/phones_u.jpg" alt="" />
                        </div>
                    </div>

                    <div
                        className={styles.big_card_cover}
                        style={{ flexDirection: 'row' }}
                    >
                        <span className={styles.key_sub}>
                            <b>Portada visual</b> con cuenta regresiva. Genera emoción y expectativa antes del evento.
                        </span>

                        <div className={styles.image_cont_cover}>
                            <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/portada_u_1.png" alt="" />
                        </div>
                    </div>

                    <div
                        className={styles.big_card_map}
                        style={{ flexDirection: 'row' }}
                    >
                        <div className={styles.shadow_inverse}></div>
                        <img
                            style={{
                                right: 0,
                                top: 0,
                                zIndex: 0,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/gift_u.jpg"
                            alt=""
                        />

                        <span
                            className={styles.key_sub_w}
                            style={{ color: '#FFF', zIndex: 2 }}
                        >
                            <b>Mesa de regalos digital</b> Integrada con hasta tres opciones como enlaces externos
                        </span>
                    </div>

                    <div
                        className={styles.big_card_map}
                        style={{ flexDirection: 'row' }}
                    >
                        <div className={styles.shadow_inverse}></div>

                        <img
                            style={{
                                right: 0,
                                top: 0,
                                zIndex: 0,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/it_u_1.jpg"
                            alt=""
                        />

                        <span
                            className={styles.key_sub_w}
                            style={{ color: '#FFF', zIndex: 2 }}
                        >
                            <b>Mapas interactivos</b> con direcciones para facilitar la llegada de tus invitados.
                        </span>
                    </div>

                    <div
                        className={styles.big_card_cover}
                        style={{ flexDirection: 'row' }}
                    >
                        <span className={styles.key_sub_it}>
                            <b>Itinerario dinámico.</b> Comparte cada momento especial de tu evento.
                        </span>

                        <div className={styles.image_cont_it}>
                            <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/itinerary_u.jpg" alt="" />
                        </div>
                    </div>

                    <div
                        className={styles.big_card_fam}
                        style={{ flexDirection: 'row' }}
                    >
                        <span className={styles.key_sub}>
                            <b>Mensaje de bienvenida personalizable.</b> Destaca a las personas más importantes del evento.
                        </span>

                        <div className={styles.image_cont_fam}>
                            <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/family_u.jpg" alt="" />
                        </div>
                    </div>

                    <div
                        className={styles.big_card}
                        style={{ flexDirection: 'row' }}
                    >
                        <div className={styles.shadow}></div>

                        <img
                            style={{
                                right: 0,
                                top: 0,
                                zIndex: 0,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/acts_u.jpg"
                            alt=""
                        />

                        <span
                            className={styles.key_sub_w}
                            style={{ color: '#FFF', zIndex: 2 }}
                        >
                            Ideal para <b>bodas destino</b> Recomienda hospedaje, restaurantes o actividades.
                        </span>
                    </div>

                    <div
                        className={styles.big_card}
                        style={{ flexDirection: 'row' }}
                    >
                        <div className={styles.shadow}></div>

                        <img
                            style={{
                                right: 0,
                                top: 0,
                                zIndex: 0,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/lock_u.jpg"
                            alt=""
                        />

                        <span
                            className={styles.key_sub_w}
                            style={{ color: '#FFF', zIndex: 2 }}
                        >
                            <b>Control total</b> sobre quién puede ver la invitación y cómo se accede a ella.
                        </span>
                    </div>






                </div>

                <div className={styles.button_frame}>
                    <Button
                        onClick={scrollLeft}
                        icon={<ArrowLeft size={16} />}
                        style={{ left: '5%' }}
                        className={styles.scroll_button}
                    />

                    <Button
                        onClick={scrollRight}
                        icon={<ArrowRight size={16} />}
                        style={{ right: '0%' }}
                        className={styles.scroll_button}
                    />
                </div>
            </div>
        </div>
    );
};