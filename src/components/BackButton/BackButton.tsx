"use client";

import { HiArrowLeft } from "react-icons/hi";
import styles from "./backbutton.module.css"

export default function BackButton() {
    return (
        <button
            className={styles.action_button}
            type="button"
            aria-label="Regresar"
            onClick={() => {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = "/about";
                }
            }}
        >
            <HiArrowLeft />
        </button>
    );
}
