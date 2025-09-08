import React, { useEffect, useState } from 'react'
import { Button, Col } from 'antd'
import { LuBadgeHelp } from 'react-icons/lu';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { NewInvitation } from '@/types/new_invitation';
import { getItineraryIcon } from '@/helpers/icons';
import styles from './card.module.css'


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
    const [stepsOpen, setStepsOpen] = useState()


    const renderIcon = (iconID: number) => {

        const Icon = getItineraryIcon(iconID);
        if (Icon) {
            return <Icon size={35} style={{ color: content.background ? primary : accent }} />;
        }
        return <LuBadgeHelp size={35} style={{ color: content.background ? primary : accent }} />;
    };

    return (
        <>
            {
                steps.map((item, index) => (
                    <div
                        key={index}
                        className={styles.step_card_cont}
                        style={{
                            background: content.background ? primary : secondary,

                        }}
                    >
                        {/* {item.active ? (
                            <CustomCard generals={generals} invertedColors={invertedColors} dev={dev} onClose={handleSelectedCard} item={item} MainColor={MainColor} theme={theme} font={font} colorPalette={colorPalette} />
                        ) : ( */}
                        <>
                            <div
                                className={styles.card_icon}
                                style={{
                                    backgroundColor: content.background ? secondary : primary,
                                }}
                            >
                                {item.icon ? renderIcon(item.icon) : <LuBadgeHelp size={32} style={{ color: content.background ? primary : accent }} />}
                            </div>
                            <div
                                style={{
                                    height: '94px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                                    color: content.background ? accent : content.inverted ? primary : accent,
                                }}
                                className="card-content"
                            // onClick={() => handleSelectedCard(item.id)}
                            >
                                <span className={!dev ? "g-mdoule-regular-text" : "g-mdoule-regular-text-dev"} style={{ lineHeight: 1, fontSize: '16px' }}><b>{item.name}</b></span>
                                <span className={!dev ? "g-mdoule-light-text" : "g-mdoule-light-text-dev"} style={{ opacity: '0.8' }}>{item.time}</span>
                                <span className={!dev ? "g-mdoule-regular-text" : "g-mdoule-regular-text-dev"} style={{ fontSize: '13px' }}>{item.subtext}</span>


                            </div>

                            {/* {
                                generals.texture !== null &&
                                <div className="image-texture-container">
                                    <div className="image-texture-container">
                                        {Array.from({ length: 100 }).map((_, index) => (
                                            <img loading="lazy" decoding="async" alt='' key={index} src={textures[generals.texture].image} className="texture-img"
                                                style={{
                                                    opacity: textures[generals.texture].opacity,
                                                    filter: textures[generals.texture].filter,
                                                    mixBlendMode: textures[generals.texture].blend
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            } */}

                            {
                                (item.moments || item.music || item.address) ? (
                                    <Button
                                        icon={<FaArrowRight />}
                                        // onClick={() => handleSelectedCard(item.id)}
                                        style={{
                                            // 
                                            background: content.background ? secondary : content.inverted ? primary : actions ?? "#FFF",
                                            // color: background ? colorPalette.primary : invertedColors ? colorPalette.secondary : buttonsColorText(colorPalette.buttons),
                                            borderRadius: '99px',
                                            border: 'none',
                                            // height: '90px',
                                            flex: 1,
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            // padding: '8px',
                                            width: '35px',
                                            minWidth: '35px',
                                            height: '35px'
                                            // position: 'absolute', top: '16px', right: '16px'
                                        }}
                                    />
                                ) : null
                            }


                        </>
                        {/* )} */}


                    </div >
                ))
            }
        </>
    )
}
