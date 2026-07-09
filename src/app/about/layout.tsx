import { PageLoader } from "@/components/LandPage/PageLoader/PageLoader";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <PageLoader>{children}</PageLoader>;
}
