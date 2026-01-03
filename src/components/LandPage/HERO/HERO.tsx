import React from 'react'
import styles from "./hero.module.css";
import { Button } from 'antd';
import { FaBars } from 'react-icons/fa';

export const HeroSection = () => {
    return (
        <div className={styles.hero_cont}>
            <div className={styles.hero_first_row}>
                <img className={styles.hero_logo} src="/assets/images/blanco.png" alt='' />
                {/* <Button className={styles.hero_menu} icon={<FaBars />}></Button> */}
            </div>

            <div className={styles.hero_info_box}>
                <span className={styles.hero_h1}>Organiza a tus invitados sin estrés</span>
                <span className={styles.hero_h2}>I attend te acompaña durante todo el proceso</span>
                <Button className={styles.hero_cta}>Comienza a planear</Button>
            </div>

        </div>
    )
}
