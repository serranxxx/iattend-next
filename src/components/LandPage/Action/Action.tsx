import { Button } from "antd";
import styles from "./action.module.css";

export const Action = () => {
  return (
    <section className={styles.cont}>
      <div className={styles.title_cont}>

        <div className={styles.pics_top}>
          <img src="landing/items/pic1.png" alt="" className={styles.pic1} />
          <img src="landing/items/stamp2.png" alt="" className={styles.stamp2} />
        </div>

        <span className={styles.title}>TU EVENTO MERECE QUE DISFRUTES PLANEARLO</span>
        <Button className={styles.cta} href="https://www.iattend.site/login?mode=register">GET STARTED TODAY</Button>

        <div className={styles.pics_bottom}>
          <img src="landing/items/pic2.png" alt="" className={styles.pic2} />
          <img src="landing/items/stamp3.png" alt="" className={styles.stamp3} />
        </div>

      </div>
    </section>
  );
};
