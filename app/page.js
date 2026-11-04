// page.js é a página da rota "/" (a página inicial).
// Esta função é um COMPONENTE React: uma função que devolve um pedaço de tela.
import Image from "next/image";
import styles from "./page.module.css";
import { sabores } from "@/data/menu";
import CardSabor from "./components/CardSabor";
import { loja, linkWhatsapp } from "@/data/loja";

export default function Home() {
  return (
    <main className={styles.pagina}>
      <section className={styles.hero}>
        <div className={styles.textos}>
          {/* Image do Next redimensiona e otimiza a imagem automaticamente */}
          <Image
            src="/logo.png"
            alt="Logo da La Bicca Pizzaria"
            width={120}
            height={120}
            priority
          />
          <h1>Pizza quentinha, direto da La Bicca.</h1>
          <p>Peça pelo site e fale direto com a gente, sem taxa de aplicativo.</p>
          <a className={styles.botao} href="#salgadas">
            Ver cardápio
          </a>
        </div>
        <Image
          className={styles.foto}
          src="/pizza-hero.jpg"
          alt="Pizza de brócolis e tomate seco na caixa da La Bicca"
          width={500}
          height={494}
          priority
        />
      </section>

      <div id="cardapio">
        <section id="combos" className={styles.secao}>
          <h2>Combos</h2>
          <p>Em breve: os combos da La Bicca aparecem aqui.</p>
        </section>

        <section id="salgadas" className={styles.secao}>
          <h2>Pizzas salgadas</h2>
          <div className={styles.grade}>
            {/* filter: fica só com as salgadas. map: transforma cada sabor em um card.
                "key" ajuda o React a saber qual card é qual quando a lista muda. */}
            {sabores
              .filter((sabor) => sabor.categoria === "salgada")
              .map((sabor) => (
                <CardSabor key={sabor.id} sabor={sabor} />
              ))}
          </div>
        </section>

        <section id="doces" className={styles.secao}>
          <h2>Pizzas doces</h2>
          <div className={styles.grade}>
            {sabores
              .filter((sabor) => sabor.categoria === "doce")
              .map((sabor) => (
                <CardSabor key={sabor.id} sabor={sabor} />
              ))}
          </div>
        </section>
      </div>

      <section id="contato" className={styles.secao}>
        <h2>Contato</h2>
        <p>
          WhatsApp:{" "}
          <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer">
            {loja.telefoneExibido}
          </a>
        </p>
        <p>{loja.endereco}</p>
        <p>{loja.horario}</p>
      </section>
    </main>
  );
}
