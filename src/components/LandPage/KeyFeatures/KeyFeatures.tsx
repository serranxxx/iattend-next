import React from 'react'
import styles from "./key.module.css";
import { Button } from 'antd';
import { FaBars } from 'react-icons/fa';

const cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

export const KeyFeatures = () => {
    return (
        <div className={styles.key_cont}>
            <img className={styles.loop_img} src="/assets/images/espiral.svg" alt='' />
            <span className={styles.key_title}>Todo fluye cuando tienes el control</span>

            <div className={styles.key_main_cont}>
                <div className={styles.key_col}>
                    <div className={styles.key_space}>

                    </div>
                    <div className={styles.key_item}>

                    </div>
                    <div className={styles.key_item}>

                    </div>

                    <div className={styles.key_space}>

                    </div>
                </div>
                <div className={styles.key_col}>
                    <div className={styles.key_item}>

                    </div>
                    <div className={styles.key_item}>

                    </div>
                    <div className={styles.key_item}>

                    </div>
                </div>
                <div className={styles.key_col}>
                    <div className={styles.key_space}>

                    </div>
                    <div className={styles.key_item}>

                    </div>
                    <div className={styles.key_item}>

                    </div>
                    <div className={styles.key_space}>

                    </div>
                </div>
            </div>

        </div>
    )
}
