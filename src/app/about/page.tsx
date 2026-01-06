import { HeroSection } from "@/components/LandPage/HERO/HERO";
import { KeyFeatures } from "@/components/LandPage/KeyFeatures/KeyFeatures";
import styles from "./page.module.css";
import { WorkFlow } from "@/components/LandPage/WorkFlow/WorkFlow";
import { IdealCustomer } from "@/components/LandPage/IdealCustomer/IdealCustomer";
import { Reviews } from "@/components/LandPage/Reviews/Reviews";
import { Plans } from "@/components/LandPage/Plans/Plans";
import { FAQs } from "@/components/LandPage/FAQs/FAQs";
import { Footer } from "@/components/LandPage/Footer/Footer";
import { CTA } from "@/components/LandPage/CTA/CTA";

export default function LandPage() {
  return (
    <div className={styles.main_container_land}>
      <HeroSection></HeroSection>
      <KeyFeatures></KeyFeatures>
      <IdealCustomer></IdealCustomer>
      <WorkFlow></WorkFlow>

      <Reviews></Reviews>
      <Plans></Plans>
      <FAQs></FAQs>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}
