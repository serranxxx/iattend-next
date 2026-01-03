import { HeroSection } from "@/components/LandPage/HERO/HERO";
import { KeyFeatures } from "@/components/LandPage/KeyFeatures/KeyFeatures";
import styles from "./page.module.css";
import { WorkFlow } from "@/components/LandPage/WorkFlow/WorkFlow";
import { IdealCustomer } from "@/components/LandPage/IdealCustomer/IdealCustomer";
import { Reviews } from "@/components/LandPage/Reviews/Reviews";
import { Plans } from "@/components/LandPage/Plans/Plans";

export default function LandPage() {
  return (
    <div className={styles.main_container_land}>
      <HeroSection></HeroSection>
      <KeyFeatures></KeyFeatures>
      <WorkFlow></WorkFlow>
      <IdealCustomer></IdealCustomer>
      <Reviews></Reviews>
      <Plans></Plans>
    </div>

  );
}
