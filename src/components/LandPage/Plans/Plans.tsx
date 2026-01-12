'use client'

import React, { useState } from 'react'
import styles from "./plans.module.css";
import { LuArrowRight } from 'react-icons/lu';



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

const plan_paperless = [
    'Invitación Paperless',
    'Diseño libre',
    'Ediciones ilimitadas',
    'Evento público',
    'Confirmación manual'
]

const plan_pro = [
    'Invitación Paperless',
    'Diseño libre',
    'Ediciones ilimitadas',
    'Evento privado o público',
    'Lista de invitados',
    'Acomodo de mesas',
    'Envíos automáticos',
    'Pases digitales',
    
]

const plan_lite = [
    'Invitación Paperless',
    'Diseño libre',
    'Ediciones ilimitadas',
    'Evento privado o público',
    'Lista de invitados',
    'Acomodo de mesas',
    
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
                    minWidth: active === 0 ? '220px' : 'auto',

                    backgroundColor: '#FFF'
                }}>
                    <img className={styles.plan_image} src="/assets/images/PAPERLESS.svg" alt='' />
                    <div style={{ fontSize: active === 0 ? '12px' : '10px' }} className={styles.plan_info_cont}>
                        {
                            plan_paperless.map((i, index) => (
                                <div key={index} className={styles.plan_item}>
                                    <LuArrowRight />
                                    <span>{i}</span>
                                </div>
                            ))
                        }

                    </div>

                    <div className={styles.price_cont}>
                        <span>$849</span>
                    </div>

                </div>

                <div onClick={() => setActive(1)} className={styles.plan_card} style={{
                    zIndex: active === 1 ? 3 : undefined,
                    transform: active === 1 ? 'scale(1.04)' : active === 2 ? 'rotate(4deg)' : 'rotate(-4deg)',
                    position: active === 1 ? 'absolute' : 'static',
                    backgroundColor: '#414251', color: '#FFF',
                    minWidth: active === 1 ? '220px' : 'auto'
                }}>
                    <img className={styles.plan_image} src="/assets/images/PRO.svg" alt='' />
                    <div style={{ fontSize: active === 1 ? '12px' : '10px',  }} className={styles.plan_info_cont}>
                        {
                            plan_pro.map((i, index) => (
                                <div key={index} className={styles.plan_item} style={{borderColor:'#20212B40'}}>
                                    <LuArrowRight />
                                    <span>{i}</span>
                                </div>
                            ))
                        }

                    </div>

                    <div className={styles.price_cont} style={{color:'#FDFCFD'}}>
                        <span>$3,499</span>
                    </div>
                </div>

                <div onClick={() => setActive(2)} className={styles.plan_card} style={{
                    zIndex: active === 2 ? 3 : undefined,
                    transform: active === 2 ? 'scale(1.04)' : 'rotate(4deg)',
                    position: active === 2 ? 'absolute' : 'static',
                    minWidth: active === 2 ? '220px' : 'auto',
                    backgroundColor: '#E0DAF4'
                }}>
                    <img className={styles.plan_image} src="/assets/images/LITE.svg" alt='' />
                    <div style={{ fontSize: active === 2 ? '12px' : '10px',  }} className={styles.plan_info_cont}>
                        {
                            plan_lite.map((i, index) => (
                                <div key={index} className={styles.plan_item} style={{borderColor:'#BDB4D040', color:'#706787'}}>
                                    <LuArrowRight />
                                    <span>{i}</span>
                                </div>
                            ))
                        }

                    </div>

                    <div className={styles.price_cont} style={{color:'#706787'}}>
                        <span>$3,099</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
