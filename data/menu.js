// data/menu.js
// Dados do cardápio. Por enquanto vivem num arquivo; na próxima etapa vão para o banco de dados.
// Regra: o preço NÃO fica em cada sabor. Fica por TIPO e TAMANHO (tabela "precos"),
// igual ao iFood: todo sabor "tradicional" custa o mesmo, todo "premium" também.

// Preços em CENTAVOS (inteiros), para evitar erro de arredondamento com decimais.
export const precos = {
  tradicional: { P: 5490, G: 8590, familia: 12190 },
  premium: { P: 6590, G: 10290, familia: 14190 },
};

// Tamanhos: quantas fatias e quantos sabores no máximo.
export const tamanhos = [
  { id: "P", nome: "Pequena", fatias: 4, maxSabores: 1 },
  { id: "G", nome: "Grande", fatias: 8, maxSabores: 3 },
  { id: "familia", nome: "Família", fatias: 12, maxSabores: 4 },
];

// Sabores. "categoria": salgada ou doce. "tipo": tradicional ou premium.
export const sabores = [
  { id: "pizza-4-queijos", nome: "Pizza 4 Queijos", categoria: "salgada", tipo: "tradicional" },
  { id: "4-queijos-e-bacon", nome: "4 Queijos e Bacon", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-alho-e-olho", nome: "Pizza Alho e Olho", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-argentina", nome: "Pizza Argentina", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-bacon", nome: "Pizza Bacon", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-basca", nome: "Pizza Basca", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-brocolis-tomate-seco-e-requeijao", nome: "Pizza Brocolis Tomate seco e requeijão", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-brocolis", nome: "Pizza Brócolis", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-calabresa", nome: "Pizza Calabresa", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-calabresa-com-cebola", nome: "Pizza Calabresa com cebola", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-calabresa-picante", nome: "Pizza Calabresa Picante", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-carne-de-panela", nome: "Pizza Carne de Panela", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-champignon-com-pesto", nome: "Pizza Champignon com Pesto", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-coracao", nome: "Pizza Coração", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-de-milho", nome: "Pizza de Milho", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-domingueira", nome: "Pizza Domingueira", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-duetto-italiano", nome: "Pizza Duetto Italiano", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-frango-americano", nome: "Pizza Frango Americano", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-frango-com-requeijao", nome: "Pizza Frango com requeijão", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-frango-teriaki", nome: "Pizza Frango Teriaki", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-fricasse-de-frango", nome: "Pizza Fricassê de Frango", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-gorgonzola-e-mel", nome: "Pizza Gorgonzola e Mel", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-havaiana", nome: "Pizza Havaiana", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-linguica-artesanal-com-pimenta", nome: "Pizza Linguiça Artesanal com Pimenta", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-lombo-com-abacaxi", nome: "Pizza Lombo com Abacaxi", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-lombo-com-requeijao", nome: "Pizza Lombo com Requeijão", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-marguerita", nome: "Pizza Marguerita", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-milho-e-bacon", nome: "Pizza Milho e Bacon", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-mineira", nome: "Pizza Mineira", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-mussarela", nome: "Pizza Mussarela", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-pepperoni", nome: "Pizza Pepperoni", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-portuguesa", nome: "Pizza Portuguesa", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-strogonoff-de-carne", nome: "Pizza Strogonoff de Carne", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-strogonoff-de-frango", nome: "Pizza Strogonoff de Frango", categoria: "salgada", tipo: "tradicional" },
  { id: "pizza-toscana", nome: "Pizza Toscana", categoria: "salgada", tipo: "tradicional" },
  { id: "carne-de-panela-aos-3-queijos", nome: "Carne de Panela aos 3 queijos", categoria: "salgada", tipo: "premium" },
  { id: "costela-com-geleia-de-pimenta-defumada", nome: "Costela com Geléia de Pimenta Defumada", categoria: "salgada", tipo: "premium" },
  { id: "costela-com-tomate-caramelizado", nome: "Costela com Tomate Caramelizado", categoria: "salgada", tipo: "premium" },
  { id: "file-com-alho", nome: "Filé com Alho", categoria: "salgada", tipo: "premium" },
  { id: "file-com-ervas-finas", nome: "Filé com Ervas Finas", categoria: "salgada", tipo: "premium" },
  { id: "file-com-gorgonzola", nome: "Filé com Gorgonzola", categoria: "salgada", tipo: "premium" },
  { id: "file-com-mostarda", nome: "Filé com Mostarda", categoria: "salgada", tipo: "premium" },
  { id: "picanha", nome: "Picanha", categoria: "salgada", tipo: "premium" },
  { id: "picanha-com-provolone-e-bacon", nome: "Picanha com Provolone e Bacon", categoria: "salgada", tipo: "premium" },
  { id: "picanha-gorgonzola-mostarda-e-mel", nome: "Picanha, Gorgonzola Mostarda e Mel", categoria: "salgada", tipo: "premium" },
  { id: "salmao-com-requeijao", nome: "Salmão com Requeijão", categoria: "salgada", tipo: "premium" },
  { id: "salmao-oriental", nome: "Salmão Oriental", categoria: "salgada", tipo: "premium" },
  { id: "strogonoff-de-carne", nome: "Strogonoff de Carne", categoria: "salgada", tipo: "premium" },
  { id: "abacaxi-doce-de-leite-e-chocolate-branco", nome: "Abacaxi, doce de leite e chocolate branco", categoria: "doce", tipo: "tradicional" },
  { id: "banofff", nome: "Banofff", categoria: "doce", tipo: "premium" },
  { id: "chocolate-branco", nome: "Chocolate Branco", categoria: "doce", tipo: "tradicional" },
  { id: "chocolate-preto", nome: "Chocolate Preto", categoria: "doce", tipo: "tradicional" },
  { id: "mesclado", nome: "Mesclado", categoria: "doce", tipo: "tradicional" },
  { id: "prestigio-branco", nome: "Prestigio Branco", categoria: "doce", tipo: "tradicional" },
  { id: "prestigio-preto", nome: "Prestigio Preto", categoria: "doce", tipo: "tradicional" },
  { id: "uva-trufada", nome: "Uva Trufada", categoria: "doce", tipo: "premium" },
  { id: "pistache", nome: "Pistache", categoria: "doce", tipo: "premium" },
  { id: "figo-ramy", nome: "Figo Ramy", categoria: "doce", tipo: "premium" },
];
