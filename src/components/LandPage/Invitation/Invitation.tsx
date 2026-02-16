import React from "react";
import styles from "./invitation.module.css";


export const InvitationAbout = () => {
    return (
        <div className={styles.main_cont}>
            <div className={styles.key_cont}>

                <span className={styles.key_title}>No queremos limitarte</span>

                <div className={styles.inv_container}>
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
                                {/* <Image width={214} height={400} alt="" src={cover} /> */}
                            </div>
                            <div className={styles.inv_light_space_ios} />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};
