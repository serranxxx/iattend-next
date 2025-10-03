"use client";

import { useCallback } from "react";
import confetti from "canvas-confetti";

export default function ConfettiButton() {
  const onClick = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }, []);

  return (
    <button style={{position:'absolute', bottom:'200px'}} className="button" onClick={onClick}>
      <span>🎉</span>
      <span>Like</span>
    </button>
  );
}

// export default function ConfettiButton() {
//     useEffect(() => {
//       // Ejecuta confetti una vez al cargar el componente
//       // confetti({
//       //   particleCount: 150,
//       //   spread: 60,
//       // });
  
//       // Si quieres que se repita cada cierto tiempo:
//       const interval = setInterval(() => {
//         confetti({
//           particleCount: 150,
//           spread: 60,
//         });
//       }, 2000);
      
//       return () => clearInterval(interval);
//     }, []);