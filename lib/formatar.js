// lib/formatar.js
// Funções auxiliares (sem tela) que o site inteiro pode reutilizar.

// Recebe centavos (8590) e devolve texto de dinheiro ("R$ 85,90").
// Intl.NumberFormat é um recurso do próprio JavaScript para formatar números por país.
export function formatarPreco(centavos) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(centavos / 100);
}
