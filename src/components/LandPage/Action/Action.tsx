import { Button } from "antd";
import styles from "./action.module.css";

export const Action = () => {
  return (
    <section className={styles.cont}>
      <div className={styles.title_cont}>

        <div className={styles.pics_top}>
          <img src="landing/items/pic1_1.png" alt="" className={styles.pic1} />
          <img src="landing/items/stamp2.png" alt="" className={styles.stamp2} />
        </div>

        <span className={styles.title}>TU EVENTO MERECE QUE DISFRUTES PLANEARLO</span>
        <div style={{
          display:'flex',alignItems:'center',justifyContent:'center',gap:'12px'
        }}>
          <Button className={styles.cta} href={`${process.env.NEXT_PUBLIC_APP_URL}/preview-mood`}>GET STARTED TODAY</Button>
          {/* <Button className={styles.cta_text} href="https://www.iattend.site/login?mode=register">See plans</Button> */}

        </div>
        <div className={styles.pics_bottom}>
          <img src="landing/items/pic2_1.png" alt="" className={styles.pic2} />
          <img src="landing/items/stamp3.png" alt="" className={styles.stamp3} />
        </div>

      </div>
    </section>
  );
};
