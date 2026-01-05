"use client";

import React, { useState } from "react";
import styles from "./footer.module.css";
import { Button } from "antd";
import { FaBars, FaHeadset, FaInstagram, FaRegEnvelope, FaRegPaperPlane, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer_cont}>
      <div className={styles.footer_row}>
        <img className={styles.footer_logo} src="/assets/images/blanco.png" alt="" />
        <div className={styles.footer_col}>
          <span style={{ fontWeight: "500", fontSize: "18px", textTransform: "uppercase" }}>Guest management</span>
          <span style={{ fontWeight: "200", fontSize: "14px" }}>Plan with ease</span>
        </div>
      </div>

      <div className={styles.links_col}>
        <a href="https://wa.me/6145338500" rel="noreferrer" target="_blank" className={styles.footer_link}>
          <FaHeadset /> Ayuda
        </a>
        <a href="https://wa.me/6145338500" rel="noreferrer" target="_blank" className={styles.footer_link}>
          <FaWhatsapp /> Contacto
        </a>
        <a href="https://www.instagram.com/iattend.mx" rel="noreferrer" target="_blank" className={styles.footer_link}>
          <FaInstagram />
          @iattend.mx
        </a>
        <a href="mailto:contacto.iattend@gmail.com" rel="noreferrer" target="_blank" className={styles.footer_link}>
          <FaRegEnvelope /> Mail
        </a>
        <a href="/legal" className={styles.footer_link}>
          <FaRegPaperPlane /> Legal
        </a>
      </div>
    </div>
  );
};
