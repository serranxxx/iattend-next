import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
import { Button } from "antd";
import { IconType } from "react-icons";

type CustomButtonProps = {
    url: string;
    icon: IconType;
    label?: string;
    type?: string;
};

export const CustomButton: React.FC<CustomButtonProps> = ({
    url,
    icon: Icon,
    label = "PLATICA CON NOSOTROS",
    type = 'primary'
}) => {
    return (
        <div className={type === 'primary' ? styles.action_primary : styles.action_wrap}>
            <Link href={url} target="_blank" rel="noreferrer">
                <Button
                    icon={<Icon size={16} />}
                    className={type === 'primary' ? styles.primary_button : styles.action_button}
                >
                    {label}
                </Button>
            </Link>
        </div>
    );
};
