'use client'

import React, { useState } from "react";
import styles from "./invitation.module.css";
import { cover_samples } from "@/helpers/images";
import Image from "next/image";
import { invitationFeatures } from "@/helpers/features";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { LuArrowUpRight, LuFrame } from "react-icons/lu";


export const InvitationAbout = () => {

    const [selected, setSelected] = useState<number>(0)

    return (
        <div className={styles.main_cont}>
            <div className={styles.key_cont}>

                <div className={styles.col}>
                    <span className={styles.key_title}>La experiencia completa, en cualquier plan</span>
                    <span className={styles.key_sub}>En I attend no creemos en versiones limitadas.
                        Todos nuestros planes incluyen todas las funciones</span>
                </div>
                <div className={styles.content_container}>
                    <div
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
                                {/* <div className={`camera-ios`} /> */}
                                <div>
                                </div>
                            </div>

                            <div className={`${styles.ios_invitation} ${styles.inv_set_position} ${styles.cover_sample_img} scroll-invitation`}>
                                <Image fill alt="" src={cover_samples[10]} />
                            </div>
                            <div className={styles.inv_light_space_ios} />
                        </div>
                    </div>

                    <div className={`${styles.features_grid} srcoll-invitation`}>
                        {
                            invitationFeatures.map((f) => (
                                <div onClick={() => setSelected(f.id)} key={f.id} className={selected === f.id ? styles.selected_card : styles.feature_card}>
                                    <div className={styles.feature_row}>
                                        <f.icon className={styles.feature_title} />
                                        <span className={styles.feature_title}><b>{f.name}</b></span>
                                    </div>

                                    <span>{f.description}</span>

                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className={styles.button_container}>
                    <CustomButton type="primary" url="https://www.iattend.events/wedding/ejemplo4?password=WdJ-81e" icon={LuArrowUpRight} label="Ver ejemplo" />
                </div>


            </div>
        </div>
    );
};
