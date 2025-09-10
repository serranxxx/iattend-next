"use client";
import { ItineraryItem, NewInvitation } from "@/types/new_invitation";
import { useEffect, useState } from "react";
import styles from './weather.module.css'
import { darker } from "@/helpers/functions";

type CardProps = {
  invitation: NewInvitation;
  dev: boolean;
  item: ItineraryItem;
};

export default function WeatherWidget({ invitation, dev, item }: CardProps) {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=fa4d2a7fce5841d5a51205220251009&q=${item.address?.city}&aqi=no`)
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  if (!weather) return <p>Cargando clima...</p>;

  return (
    
    <div className={styles.wdiget_container} style={{backgroundColor: '#FFFFFF40', fontFamily:invitation.generals.fonts.body?.typeFace}}>
      <img src={weather.current.condition.icon} alt="icono" style={{marginLeft:'-5px', marginTop:'-5px', height:'36px', padding:0}}/>
      <p className={styles.weather_degree}>{weather.current.condition.text}</p>
      <p className={styles.weather_label}>{weather.current.temp_c}°</p>


    </div>
  );
}