// app/components/MenuLateral.js
"use client";
// "use client" avisa o Next: este componente roda NO NAVEGADOR do cliente.
// Precisamos disso porque ele reage a cliques (abrir/fechar), e isso só existe no navegador.
// Componentes sem "use client" rodam no servidor e chegam prontos, sem interação.

import { useState } from "react";
import Link from "next/link";
import { loja } from "@/data/loja";
import styles from "./MenuLateral.module.css";

export default function MenuLateral() {
  // useState guarda um valor que, ao mudar, faz a tela se redesenhar.
  // Devolve um par: [valor atual, função para mudar o valor].
  const [aberto, setAberto] = useState(false); // o menu está aberto?
  const [cardapioAberto, setCardapioAberto] = useState(true); // o submenu "Cardápio" está aberto?

  // Ao clicar num link, fechamos o menu para o cliente ver a página.
  function fechar() {
    setAberto(false);
  }

  return (
    <>
      <button
        className={styles.hamburguer}
        onClick={() => setAberto(true)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Fundo escuro: aparece só com o menu aberto; clicar nele fecha. */}
      {aberto && <div className={styles.fundo} onClick={fechar} />}

      {/* A classe "aberto" é adicionada só quando o estado é true. */}
      <nav className={`${styles.menu} ${aberto ? styles.aberto : ""}`}>
        <div className={styles.topo}>
          <strong>{loja.nome}</strong>
          <button onClick={fechar} aria-label="Fechar menu">
            ✕
          </button>
        </div>

        <button
          className={styles.item}
          onClick={() => setCardapioAberto(!cardapioAberto)}
          aria-expanded={cardapioAberto}
        >
          Cardápio <span>{cardapioAberto ? "⌄" : "›"}</span>
        </button>

        {cardapioAberto && (
          <ul className={styles.sub}>
            <li><Link href="/#combos" onClick={fechar}>Combos</Link></li>
            <li><Link href="/#salgadas" onClick={fechar}>Pizzas salgadas</Link></li>
            <li><Link href="/#doces" onClick={fechar}>Pizzas doces</Link></li>
          </ul>
        )}

        <Link className={styles.item} href="/#contato" onClick={fechar}>
          Contato
        </Link>
      </nav>
    </>
  );
}
