'use client'

import React, { useState } from 'react'
import styles from "./plans.module.css";



const cards = [
    {
        user: 'Alberto',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        user: 'Alberto',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        user: 'Alberto',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
]

export const Plans = () => {

    const [active, setActive] = useState(1)
    return (
        <div className={styles.key_cont}>
            <span className={styles.key_title}>Elige como comenzar</span>

            <div className={styles.plans_cont}>
                <div onClick={() => setActive(0)} className={styles.plan_card} style={{ 
                    zIndex: active === 0 ? 3 : undefined,
                    transform: active === 0 ? 'scale(1.04)' : 'rotate(-4deg)',
                    position: active === 0 ? 'absolute' : 'static',
                    minWidth: active === 0 ? '200px' : 'auto',
                    backgroundColor: '#FFF' }}>
                    <img className={styles.plan_image} src="/assets/images/PAPERLESS.svg" alt='' />
                    {/* <img style={{ maxWidth: '80%' }} src="/assets/images/paperless.png" alt='' /> */}
                    {/* <span>Paperless</span> */}
                </div>

                <div onClick={() => setActive(1)} className={styles.plan_card} style={{
                    zIndex: active === 1 ? 3 : undefined,
                    transform: active === 1 ? 'scale(1.04)' : active === 2 ? 'rotate(4deg)' : 'rotate(-4deg)',
                    position: active === 1 ? 'absolute' : 'static',
                    backgroundColor: '#414251', color: '#FFF',
                    minWidth: active === 1 ? '200px' : 'auto'
                }}>
                    <img className={styles.plan_image} src="/assets/images/PRO.svg" alt='' />
                </div>

                <div onClick={() => setActive(2)} className={styles.plan_card} style={{ 
                    zIndex: active === 2 ? 3 : undefined,
                    transform: active === 2 ? 'scale(1.04)' : 'rotate(4deg)',
                    position: active === 2 ? 'absolute' : 'static',
                    minWidth: active === 2 ? '200px' : 'auto',
                    backgroundColor: '#E0DAF4' }}>
                    <img className={styles.plan_image} src="/assets/images/LITE.svg" alt='' />
                    
                </div>
            </div>
        </div>
    )
}
