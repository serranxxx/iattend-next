'use client'

import React, { useEffect, useRef } from 'react'
import styles from './video.module.css'
import { Button } from 'antd'
import { LuArrowUpRight } from 'react-icons/lu'
import Link from 'next/link'
import { CustomButton } from '@/components/CustomButton/CustomButton'

export default function Video() {

    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2
        }
    }, [])


    const message = encodeURIComponent(
        "¡Hola! Me interesan los servicios de I attend"
    );

    return (
        <div className={styles.main_cont}>
            <div className={styles.video_cont}>
                <video
                    ref={videoRef}
                    src="https://jblcqcxckefmydvtrxbi.supabase.co/storage/v1/object/public/land_page/C0020.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                    style={{ width: "100%", borderRadius: 0, position: 'absolute', border: 'none' }}
                />
                <div className={styles.shadow}>
                    {/* <div style={{
                    display:'flex',alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'column',gap:'16px'
                }}> */}
                    <span className={styles.key_title}>Todo tu evento, bajo control</span>
                    {/* <span className={styles.cta_text}>
                        Crea tu evento, gestiona invitados y controla la asistencia desde un solo lugar. Sin complicaciones, sin herramientas extra.
                    </span>
                </div> */}

                    <div style={{
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', gap: '24px'
                    }}>

                        <span className={styles.cta_text}>
                            Crea tu evento, gestiona invitados y controla la asistencia desde un solo lugar. Sin complicaciones, sin herramientas extra.
                        </span>
                        <CustomButton type="secondary" url={`https://wa.me/6145338500?text=${message}`} icon={LuArrowUpRight} label="PLATICA CON NOSOTROS" />
                    </div>


                </div>

                {/* <img className={styles.loop_img} src="/assets/images/espiral.svg" alt="" /> */}

            </div>
        </div>

    )
}
