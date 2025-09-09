import React, { useEffect, useState } from 'react'
import { Button, Col } from 'antd'
import { LuBadgeHelp } from 'react-icons/lu';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { ItineraryItem, NewInvitation } from '@/types/new_invitation';
import { getItineraryIcon } from '@/helpers/icons';
import styles from './card.module.css'
import { getMexicoHour } from '@/helpers/functions';
import Image from 'next/image';
import { textures } from '@/helpers/textures';
import OpenCard from '../OpenCard/OpenCard';


type CardProps = {
    invitation: NewInvitation;
    dev: boolean;
};

export default function Card({ invitation, dev }: CardProps) {

    const content = invitation.itinerary
    const generals = invitation.generals

    const primary = generals?.colors.primary ?? "#FFFFFF";
    const secondary = generals?.colors.secondary ?? "#FFFFFF";
    const accent = generals?.colors.accent ?? "#FFFFFF";
    const actions = generals.colors.actions

    const steps = invitation.itinerary.object

    const [activeSteps, setActiveSteps] = useState<ItineraryItem[]>([])


    const renderIcon = (iconID: number) => {

        if (!iconID) return <LuBadgeHelp size={28} style={{ color: content.background ? primary : accent }} />;
        const Icon = getItineraryIcon(iconID);
        if (Icon) {
            return <Icon size={28} style={{ color: content.background ? primary : accent }} />;
        }
        return <LuBadgeHelp size={28} style={{ color: content.background ? primary : accent }} />;
    };

    useEffect(() => {
        console.log(activeSteps)
    }, [activeSteps])


    return (
        <>
            {
                steps.map((item, index) => (
                    <div

                        key={index}
                        className={styles.step_card_cont}
                        style={{
                            background: content.background ? primary : secondary,
                            height: activeSteps?.includes(item) ? 'auto' : undefined
                        }}
                    >
                        {activeSteps?.includes(item) ?
                            <OpenCard dev={dev} invitation={invitation} item={item} setActiveSteps={setActiveSteps} activeSteps={activeSteps} />
                            :

                            <>
                                <div
                                    className={styles.card_icon}
                                    style={{
                                        backgroundColor: content.background ? secondary : primary,
                                    }}
                                >
                                    {renderIcon(item.icon!)}
                                </div>
                                <div className={styles.card_info} style={{
                                    fontFamily: generals.fonts.body?.typeFace
                                }}
                                >
                                    <span className={styles.open_title} ><b>{item.name}</b></span>
                                    <span className={styles.open_sub}>{getMexicoHour(item.time!)}</span>
                                    <span className={styles.open_text}>{item.subtext}</span>
                                </div>


                                {content.background && generals.texture !== null && (
                                    <div className="image_texture_container">
                                        <div className="image_texture_container">
                                            {Array.from({ length: 100 }).map((_, index) => (
                                                <Image
                                                    fill
                                                    loading="lazy"
                                                    decoding="async"
                                                    alt=""
                                                    key={index}
                                                    src={textures[generals.texture].image}
                                                    className="texture_img"
                                                    style={{
                                                        opacity: textures[generals.texture].opacity,
                                                        filter: textures[generals.texture].filter,
                                                        mixBlendMode: textures[generals.texture].blend,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {
                                    (item.moments || item.music || item.address) ? (
                                        <Button
                                            onClick={() => setActiveSteps([...activeSteps ?? [], item])}
                                            className={styles.open_card_button}
                                            icon={<FaArrowRight />}
                                            style={{
                                                background: content.background ? secondary : content.inverted ? primary : actions ?? "#FFF",
                                            }}
                                        />
                                    ) : null
                                }


                            </>
                        }

                    </div >
                ))
            }
        </>
    )
}
