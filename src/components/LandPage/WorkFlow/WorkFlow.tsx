import React from 'react'
import styles from "./work.module.css";
import { Button } from 'antd';
import { FaBars } from 'react-icons/fa';


export const WorkFlow = () => {
    return (
        <div className={styles.key_cont}>
            <span className={styles.key_title}>Paso a paso, sin complicarte</span>

            <div className={styles.flow_container}>
                <div className={styles.flow_card}>
                    <img className={styles.lines} src="/assets/images/line_1.svg" alt='' />
                </div>
                <div className={styles.flow_card}>
                    <img style={{bottom:'-16px'}} className={styles.lines} src="/assets/images/line_2.svg" alt='' />
                </div>
                <div className={styles.flow_card}>
                    <img className={styles.lines} src="/assets/images/line_3.svg" alt='' />
                </div>
                <div className={styles.flow_card}>
                    <img style={{bottom:'8px'}} className={styles.lines} src="/assets/images/line_4.svg" alt='' />
                </div>
            </div>
        </div>
    )
}
