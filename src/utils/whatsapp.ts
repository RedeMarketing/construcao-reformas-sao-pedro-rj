/**
 * Utilitários para Geração de Links e Mensagens do WhatsApp
 * Todas as mensagens utilizam encodeURIComponent() para formatação segura de URLs.
 */

import { BUSINESS_DATA } from "../data/business";
import { CalculatorInput, CalculatorResult } from "../data/calculator";

export interface QuoteFormData {
  name: string;
  phone: string;
  city?: string;
  neighborhood?: string;
  propertyType?: string;
  serviceType: string;
  message?: string;
}

/**
 * Cria a URL do WhatsApp para abertura direta no app ou WhatsApp Web.
 */
export function buildWhatsAppUrl(message: string, phone: string = BUSINESS_DATA.whatsappNumber): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Cria a mensagem de WhatsApp a partir do resultado detalhado da Calculadora de Obra e Reforma.
 */
export function buildCalculatorWhatsAppMessage(
  input: CalculatorInput,
  result: CalculatorResult
): string {
  const servicesString = input.servicesIncluded && input.servicesIncluded.length > 0 
    ? input.servicesIncluded.join(", ") 
    : "Geral da obra";

  return `Olá! Gostaria de solicitar um orçamento e visita técnica para minha obra/reforma.

*DADOS DA MINHA SIMULAÇÃO:*
• Cidade: ${input.city || "São Pedro da Aldeia"}
• Bairro/Condomínio: ${input.neighborhood || "A confirmar"}
• Tipo de Projeto: ${input.projectType || "Construção/Reforma"}
• Área Aproximada: ${input.approximateAreaM2 || 100} m²
• Ambientes: ${input.roomsCount || 4} cômodos | ${input.bathroomsCount || 2} banheiros
• Padrão de Acabamento: ${input.finishLevel || "Padrão Médio"}
• Serviços Selecionados: ${servicesString}
• Previsão de Início: ${input.timelineExpectation || "Nos próximos 30 dias"}
• Situação no Terreno/Imóvel: ${input.powerWaterStatus || "Água e luz ligados"}
• Objetivo: ${input.goal || "Construir ou reformar"}

*ESTIMATIVA DO CRONOGRAMA:*
• Duração estimada da obra: ${result.estimatedDurationMonths.min} a ${result.estimatedDurationMonths.max} meses
• Equipe recomendada: ${result.estimatedTeamSize.min} a ${result.estimatedTeamSize.max} profissionais
• Garantia: ${result.warrantyInfo}

Gostaria de agendar uma visita técnica com o construtor responsável para formalizar um orçamento detalhado.`;
}

/**
 * Cria mensagem direta a partir do formulário de orçamento rápido ou contato.
 */
export function buildQuickQuoteWhatsAppMessage(data: QuoteFormData): string {
  let message = `Olá! Gostaria de solicitar um orçamento para construção / reforma.

*MEUS DADOS:*
• Nome: ${data.name}
• Telefone/WhatsApp: ${data.phone}
• Serviço de interesse: ${data.serviceType || "Construção ou Reforma Geral"}`;

  if (data.city) {
    message += `\n• Cidade: ${data.city}`;
  }
  if (data.neighborhood) {
    message += `\n• Bairro/Condomínio: ${data.neighborhood}`;
  }
  if (data.propertyType) {
    message += `\n• Tipo de imóvel: ${data.propertyType}`;
  }
  if (data.message && data.message.trim().length > 0) {
    message += `\n• Detalhes do projeto: ${data.message.trim()}`;
  }

  message += `\n\nPoderiam me passar uma estimativa e disponibilidade para visita técnica em São Pedro da Aldeia e região?`;
  return message;
}

/**
 * Mensagem padrão de contato geral.
 */
export function buildGeneralWhatsAppMessage(context?: string): string {
  if (context) {
    return `Olá! Vi o site de Construção e Reformas em São Pedro da Aldeia RJ (${context}) e gostaria de tirar algumas dúvidas e solicitar um orçamento para o meu imóvel.`;
  }
  return `Olá! Gostaria de falar com o construtor sobre um projeto de construção ou reforma em São Pedro da Aldeia e região dos lagos.`;
}
