// layout.js é a "moldura" de TODAS as páginas do site.
// Tudo que está aqui (idioma, título, fonte) vale para o site inteiro.
import { Poppins } from "next/font/google";
import "./globals.css";

// Carrega a fonte Poppins do Google e a entrega como variável CSS.
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--fonte",
});

// "metadata" é o que aparece na aba do navegador e nos resultados do Google.
export const metadata = {
  title: "La Bicca Pizzaria | Peça direto, sem taxa de app",
  description: "Peça sua pizza direto da La Bicca Pizzaria.",
};

// "children" é a página atual (page.js) que o Next coloca dentro da moldura.
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
