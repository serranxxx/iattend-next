'use client'

import React, { useState } from 'react'
import styles from "./customer.module.css";
import { Button } from 'antd';
import { FaBars } from 'react-icons/fa';



export const IdealCustomer = () => {
    const [activeCard, setActiveCard] = useState<number>(0)

    return (
        <div className={styles.key_cont}>
            <span className={styles.key_title}>Para quienes organizan eventos</span>

            <div className={styles.ideal_cont}>
                <div onClick={() => setActiveCard(0)} style={{height: activeCard === 0 ? '220px' : undefined}} className={styles.ideal_card}>

                </div>
                <div onClick={() => setActiveCard(1)} style={{height: activeCard === 1 ? '220px' : undefined}} className={styles.ideal_card}>

                </div>
                <div  onClick={() => setActiveCard(2)} style={{height: activeCard === 2 ? '220px' : undefined}} className={styles.ideal_card}>

                </div>
            </div>
        </div>
    )
}
