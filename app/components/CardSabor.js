// app/components/CardSabor.js
// Um COMPONENTE: uma função que recebe dados (props) e devolve um pedaço de tela.
// Escrevemos o card UMA vez e o React o repete para cada sabor.
import { precos } from "@/data/menu";
import { formatarPreco } from "@/lib/formatar";
import styles from "./CardSabor.module.css";

// "{ sabor }" é o jeito curto de dizer: pegue a prop chamada "sabor".
export default function CardSabor({ sabor }) {
  // O preço depende do TIPO do sabor. Aqui mostramos o preço da Pequena ("a partir de").
  const aPartirDe = precos[sabor.tipo].P;

  return (
    <article className={styles.card}>
      <h3>{sabor.nome}</h3>
      {/* "&&" em JSX: só mostra o selo se o tipo for premium */}
      {sabor.tipo === "premium" && <span className={styles.selo}>Premium</span>}
      <p className={styles.preco}>a partir de {formatarPreco(aPartirDe)}</p>
    </article>
  );
}
