'use client'

import React, { useState } from "react";
import styles from "./shipments.module.css";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { Button, Input, Space } from "antd";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import axios from "axios";


export const Shipments = () => {

    const [phone_number, setPhone_number] = useState<string | null>(null)

    const isValidMXPhoneNumber = (phone: string | null): boolean => {
        if (!phone) {
            return false;
        }

        // Elimina espacios por si acaso
        const cleaned = phone.trim();
      
        // Regex: exactamente 10 dígitos
        const phoneRegex = /^[0-9]{10}$/;
      
        return phoneRegex.test(cleaned);
      }

    const onSedingInvitation = async () => {

        console.log('hey')
        try {
            if (!isValidMXPhoneNumber(phone_number)) {
                console.log("Número inválido");
                return;
              }

            const payload = {
                messaging_product: "whatsapp",
                to: `52${phone_number}`,
                type: "template",
                template: {
                    name: "invitation_v2",
                    language: {
                        code: "es_MX",
                    },
                    components: [
                        {
                            type: "header",
                            parameters: [
                                {
                                    type: "image",
                                    image: {
                                        link: "https://firebasestorage.googleapis.com/v0/b/iatten…=media&token=88189806-0b4a-4b2d-b8d4-4d454ef01890",
                                    },
                                },
                            ],
                        },
                        {
                            type: "body",
                            parameters: [
                                {
                                    type: "text",
                                    text: `KARINA & SERGIO - 2026-07-25`,
                                },
                                {
                                    type: "text",
                                    text: 'Invitado',
                                },
                            ],
                        },
                        {
                            type: "button",
                            sub_type: "url",
                            index: "0",
                            parameters: [
                                {
                                    type: "text",
                                    text: `wedding/ejemplo4?password=WdJ-81e`,
                                },
                            ],
                        },
                    ],
                },
            };

            const response = await axios.post(
                `https://i-attend-22z4h.ondigitalocean.app/api/whats`,
                payload
            );

            console.log(response)

        } catch (error: any) {
            console.log(error.response?.data || error.message);
            throw error;
        }
    };


    return (
        <div className={styles.main_cont}>
            <div className={styles.key_cont}>

                <div className={styles.col}>
                    <span className={styles.key_title}>Invita con un solo click</span>
                    <span className={styles.key_sub}>Utilizamos la API oficial de WhatsApp para enviar cada invitación de forma personalizada y segura.
                        Tú solo haces click.</span>
                </div>


                <div className={styles.button_container} >
                    <div className={styles.expirence_cont} style={{ maxWidth: '540px' }}>
                        <span style={{ fontSize: '18px' }}><FaPaperPlane style={{ marginRight: '8px', color: '#6E3DFA' }} /><b>Vive la experiencia I attend</b> </span>
                        <span style={{ opacity: '0.5' }}>Ingresa tu número y recibe una invitación de prueba directamente en tu WhatsApp.</span>

                        <div className={styles.exprince_row}>
                            <Space.Compact>
                                <Input disabled style={{ width: '30%', height: '54px', fontSize: '16px', borderRadius: '8px 0px 0px 8px', backgroundColor: '#F5F3F2' }} value="+52" defaultValue="+52" />
                                <Input onChange={(e) => setPhone_number(e.target.value)} value={phone_number ?? ""} style={{ width: '70%', height: '54px', fontSize: '16px', borderRadius: '0px 8px 8px 0px' }} placeholder="Número de telefono" />
                            </Space.Compact>

                            {/* <Button onClick={onSedingInvitation}></Button> */}

                            <CustomButton type="primary" url="https://www.iattend.events/wedding/ejemplo4?password=WdJ-81e" icon={FaWhatsapp} label="Enviar" />

                        </div>


                    </div>
                </div>





            </div>
        </div>
    );
};
