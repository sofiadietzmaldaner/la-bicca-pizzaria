// app/components/BotaoWhatsapp.js
// Botão redondo fixo no canto da tela. Não precisa de "use client": não tem interação,
// é só um link. Componentes sem estado/cliques podem ficar no servidor (mais leves).
import { linkWhatsapp } from "@/data/loja";
import styles from "./BotaoWhatsapp.module.css";

export default function BotaoWhatsapp() {
  return (
    <a
      className={styles.botao}
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
        <path
          d="M16 4C9.4 4 4 9.3 4 15.9c0 2.3.7 4.5 1.9 6.3L4 28l6-1.8c1.7.9 3.9 1.5 6 1.5 6.6 0 12-5.3 12-11.9S22.6 4 16 4z"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12.3 10.5c-.7 0-1.4.8-1.4 1.9 0 3.7 4.2 8 8.3 8 1 0 1.7-.7 1.7-1.4l-.1-1.2-2.5-1.1-1.3 1.2c-1.5-.7-2.7-1.9-3.4-3.3l1.2-1.3-1-2.5z"
          fill="white"
        />
      </svg>
    </a>
  );
}
