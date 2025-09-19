"use client";

import React, { useState } from "react";
import styles from "./wallet.module.css";
import { NewInvitation } from "@/types/new_invitation";
import { lighter } from "@/helpers/functions";

type CardProps = {
    invitation: NewInvitation;
    dev: boolean;
};

export default function Wallet({ invitation, dev = false }: CardProps) {
    // Posiciones base de las tarjetas
    const base = [4, 50, 100];
    const [bottoms, setBottoms] = useState<number[]>(base);
    const [movedIndex, setMovedIndex] = useState<number | null>(null);

    const content = invitation.gifts;
    const generals = invitation.generals;
    const font = generals.fonts.body?.typeFace;

    const primary = generals?.colors.primary ?? "#FFFFFF";
    const secondary = generals?.colors.secondary ?? "#FFFFFF";
    const accent = generals?.colors.accent ?? "#FFFFFF";

    const handleClick = (index: number) => {
        if (movedIndex === index) {
            setBottoms(base);
            setMovedIndex(null);
            return;
        }
        const next = [...base];
        next[index] = 350; // “salto”
        setBottoms(next);
        setMovedIndex(index);
    };

    return (
        <div className={styles.wallet} style={{
            background: accent,
            // border: `1px solid ${lighter(accent 0.1)}`
        }}>


            <div
                className={`${styles.card} ${styles.card1}`}
                style={{ bottom: `${bottoms[0]}px` }}
                onClick={() => handleClick(0)}
            >
                <span className={styles.brand}>VISA</span>
                <div className={styles.chip} />
                <h1>0000 0000 0000 0000</h1>
                <p>Card Holder</p>
                <p>Expiration Date</p>
                <h2>Daniel Putzer</h2>
                <h2>02/22</h2>
            </div>

            <div
                className={`${styles.card} ${styles.card2}`}
                style={{ bottom: `${bottoms[1]}px` }}
                onClick={() => handleClick(1)}
            >
                <span className={styles.brand}>MASTERCARD</span>
                <div className={styles.chip} />
                <h1>0000 0000 0000 0000</h1>
                <p>Card Holder</p>
                <p>Expiration Date</p>
                <h2>Daniel Putzer</h2>
                <h2>03/33</h2>
            </div>


            <div
                className={`${styles.card} ${styles.card3}`}
                style={{ bottom: `${bottoms[2]}px` }}
                onClick={() => handleClick(2)}
            >
                <span className={styles.brand}>AMEX</span>
                <div className={styles.chip} />
                <h1>0000 0000 0000 0000</h1>
                <p>Card Holder</p>
                <p>Expiration Date</p>
                <h2>Daniel Putzer</h2>
                <h2>04/44</h2>
            </div>

            {/* Separadores */}
            <div style={{
                background: accent
            }} className={`${styles.department} ${styles.one}`} />
            <div style={{
                background: accent
            }} className={`${styles.department} ${styles.two}`} />
            <div style={{
                background: accent
            }} className={`${styles.department} ${styles.three}`} />

            {/* Logo inferior (texto) */}
            <span className={styles.logo}>WALLET</span>
        </div>
    );
}