'use client'

import React, { useState } from "react";
import styles from "./side-events.module.css";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { Calendar1, Crown, LockKeyhole, CircleChevronRight } from "lucide-react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { LuSparkles } from "react-icons/lu";
import { useScreenWidth } from "@/hooks/useScreenWidth";

const side_events: string[] = [
    'https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/side_2.jpg',
    'https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/side_3.jpg',
    'https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/side_1.jpg',
    'https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/side_4.jpg'
]

const cards: {
    text: string,
    icon: LucideIcon
}[] = [
        {
            text: 'Únicos',
            icon: Calendar1
        },
        {
            text: 'Independientes',
            icon: Crown
        },
        {
            text: 'Privados',
            icon: LockKeyhole
        }

    ]


const phrase: string[] = [
    'Es su propia invitación.',
    'Su propia lista de invitados.',
    'Su propio control de asistencia.',
    'Su propia experiencia.'
]


export const SideEvents = () => {

    const width = useScreenWidth();
    const isLargeScreen = width >= 768;

    return (
        <div className={styles.main_cont}>
            <div className={styles.key_cont}>

                <span className={styles.key_sub}>Los grandes eventos rara vez ocurren en un solo momento</span>
                <span className={styles.key_title}>Porque tu evento nunca es solo un día I attend introduce: SideEvents</span>


                <div className={styles.image_cont}>

                    {
                        isLargeScreen ?
                            <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/side_u.jpg" alt="" style={{ objectFit: 'cover' }} />
                            : <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/side_u_1.jpg" alt="" style={{ objectFit: 'cover' }} />
                    }

                </div>


                <span className={styles.key_sub} style={{ opacity: 1 }}>Los Side Events te permiten crear <b>mini eventos</b> que pertenecen a un evento principal,
                    pero que al mismo tiempo son:</span>

                <div className={styles.col} style={{ marginTop: '24px', marginBottom: '-24px' }}>
                    <span style={{ lineHeight: 1 }} className={styles.key_title}>Únicos</span>
                    <span style={{ lineHeight: 1 }} className={styles.key_title}>Independientes</span>
                    <span style={{ lineHeight: 1 }} className={styles.key_title}>Privados</span>

                </div>


                <div className={styles.image_cont}>

                    <img src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/side_u_2.jpg" alt="" style={{ objectFit: 'cover' }} />

                </div>

                <div className={styles.col}>
                    <span style={{ margin: 0, maxWidth: '100%' }} className={styles.key_sub}>Es su propia invitación.</span>
                    <span style={{ margin: 0 }} className={styles.key_sub}>Su propia lista de invitados.</span>
                    <span style={{ margin: 0 }} className={styles.key_sub}>Su propio control de asistencia.</span>
                    <span style={{ margin: 0 }} className={styles.key_sub}>Su propia experiencia</span>
                </div>




                <div className={styles.button_container}>
                    <a href="https://www.iattend.events/side-event/8?password=8UR-zYv" target="_blank" style={{ lineHeight: 1, fontSize:'18px', textDecoration:'underline' }} className={styles.key_title}>Ver ejemplo</a>
                </div>




                {/* <div className={styles.col}>

                    <span className={styles.key_title}>Porque tu evento nunca es solo un evento: <span style={{
                        color: 'var(--brand-color-500)', fontFamily: 'Dancing Script', fontSize: '36px', marginLeft: '4px', lineHeight: '1.4',
                        textShadow: '0px 0px 8px rgba(0,0,0,0.2)'
                    }}>Side Events</span></span>

                    <span style={{ marginTop: '-12px' }} className={styles.key_sub}>Sabemos que los grandes eventos rara vez ocurren en un solo momento</span>
                </div>

                <div className={styles.side_events_cont}>
                    {
                        side_events.map((i, index) => (
                            <div
                                key={index}
                                className={`${styles.inv_device_main_container_ios} ${styles.regular_card_cover
                                    }`}
                            >
                                <div className={styles.device_buttons_container_ios}>
                                    <div className={styles.device_button_ios} />
                                    <div className={styles.device_button_ios} />
                                    <div className={styles.device_button_ios} />
                                </div>
                                <div className={styles.device_power_button_ios} />
                                <div className={styles.inv_device_container_ios}>
                                    <div
                                        style={{
                                            width: "100%",
                                        }}
                                        className={styles.inv_black_space_ios}
                                    >
                                        <span style={{ color: "#FFF", fontFamily: 'Poppins' }}>5:15</span>
                                        <div>
                                        </div>
                                    </div>

                                    <div className={`${styles.ios_invitation} ${styles.inv_set_position} ${styles.cover_sample_img} scroll-invitation`}>
                                        <Image fill alt="" src={i} />
                                    </div>
                                    <div className={styles.inv_light_space_ios} />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.about_side}>
                    <span style={{ padding: '0px 24px' }}>
                        Los <strong style={{ color: 'var(--brand-color-500)', textShadow: '0px 0px 4px rgba(0,0,0,0.1)' }}>Side Events</strong> te permiten crear <b>mini eventos</b> que pertenecen a un evento principal,
                        pero que al mismo tiempo son:
                    </span>

                    <div className={styles.side_side_cont}>
                        <div className={styles.side_events_cont_cards} style={{ gap: '12px', overflowX:'hidden' }}>
                            {
                                cards.map((i, index) => (
                                    <div key={index} className={styles.side_card}>
                                        <i.icon size={24} />
                                        <span>{i.text}</span>
                                    </div>
                                ))
                            }

                        </div>

                        <div className={styles.side_events_cont} style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '12px' }}>
                            {
                                phrase.map((i, index) => (
                                    <div key={index} className={styles.single_row}>
                                        <CircleChevronRight style={{ color: 'var(--brand-color-500)' }} size={16}/>
                                        <span>{i}</span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div className={styles.button_container}>
                        <CustomButton type="primary" url="https://www.iattend.events/side-event/8?password=8UR-zYv" icon={LuSparkles} label="Ver ejemplo" />
                    </div>

                </div> */}


            </div>


        </div>
    );
};
