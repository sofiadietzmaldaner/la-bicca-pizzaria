// data/loja.js
// Dados de contato da pizzaria num lugar só: menu, rodapé e botão do WhatsApp leem daqui.
// IMPORTANTE: troque os valores marcados com "TROCAR" pelos dados reais.

export const loja = {
  nome: "La Bicca Pizzaria",
  // Formato do WhatsApp: 55 + DDD + número, só dígitos. TROCAR pelo número real.
  whatsapp: "5551999999999",
  // Como o número aparece escrito na tela. TROCAR.
  telefoneExibido: "(51) 99999-9999",
  endereco: "Endereço da pizzaria (TROCAR)",
  horario: "Horário de funcionamento (TROCAR)",
  mensagemWhatsapp: "Olá! Gostaria de fazer um pedido na La Bicca.",
};

// Monta o link que abre o WhatsApp já com uma mensagem escrita.
// encodeURIComponent troca espaços e acentos por códigos que cabem num endereço web.
export function linkWhatsapp() {
  return `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(loja.mensagemWhatsapp)}`;
}
