/* ============================================================
   CONFIGURAÇÃO DO SITE  -  edite só este arquivo
   ============================================================ */
window.PREC_CONFIG = {
  // Endereço do seu n8n + "/webhook/precificador" (sem barra no final)
  API_BASE: 'https://n8n.soulve.app.br/webhook/precificador',

  // Link de pagamento da assinatura no Mercado Pago (o botão "Assinar" da página abre este link)
  CHECKOUT_URL: 'https://mpago.la/29FccHA',

  // Nome e preço que aparecem na página de vendas
  NOME: 'Soulve Precificação Inteligente',
  PRECO: 'R$ 49,90',
  PERIODO: 'por mês',

  // Contato de suporte (rodapé, termos e privacidade)
  EMAIL_SUPORTE: 'mtkplace@soulve.app.br',
  WHATSAPP: '',                       // opcional, só números com DDI: 5511999999999

  // Dados da empresa que vende o sistema (aparecem nos Termos e na Privacidade)
  RAZAO_SOCIAL: 'SOULVE MEGA STORE COMERCIO DE PRODUTOS E ALIMENTOS PETS LTDA',
  CNPJ: '68.756.551/0001-13'
};
