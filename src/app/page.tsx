import { HeaderApp } from "@/components/Header/HeaderApp/HeaderApp";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <HeaderApp position="land" isVisible={true} />
      <div>Hola I attend</div>
    </div>
  );
}
