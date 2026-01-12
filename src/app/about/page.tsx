import { HeroSection } from "@/components/LandPage/HERO/HERO";
import { KeyFeatures } from "@/components/LandPage/KeyFeatures/KeyFeatures";
import styles from "./page.module.css";
import { WorkFlow } from "@/components/LandPage/WorkFlow/WorkFlow";
import { IdealCustomer } from "@/components/LandPage/IdealCustomer/IdealCustomer";
import { Plans } from "@/components/LandPage/Plans/Plans";
import { FAQs } from "@/components/LandPage/FAQs/FAQs";
import { Footer } from "@/components/LandPage/Footer/Footer";
import { CTA } from "@/components/LandPage/CTA/CTA";
import { Reviews } from "@/components/LandPage/Reviews/Reviews";
import Video from "@/components/LandPage/Video/Video";

export default function LandPage() {
  return (
    <div className={styles.main_container_land}>
      
      <HeroSection></HeroSection>
      <WorkFlow></WorkFlow>
      
      <IdealCustomer></IdealCustomer>
      <KeyFeatures></KeyFeatures>

      <Reviews></Reviews>
      
      
      
      <Video></Video>

      <Plans></Plans>
      <FAQs></FAQs>
      {/* <CTA></CTA> */}
      <Footer></Footer>
    </div>
  );
}
