/**
 * Informações Centrais da Empresa (NAP - Name, Address, Phone)
 * Centraliza os dados cadastrais e de contato para consistência em todo o site e Schema.org.
 */

import { SITE_DOMAIN, SITE_URL } from "../constants/config";

export interface BusinessConfig {
  name: string;
  legalName?: string;
  brandTitle: string;
  tagline: string;
  domain: string;
  baseUrl: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  serviceRadiusKm: number;
}

export const BUSINESS_DATA: BusinessConfig = {
  name: "CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ",
  legalName: "CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ — Construtor e Reformas em Geral",
  brandTitle: "CONSTRUÇÃO E REFORMAS em São Pedro da Aldeia RJ",
  tagline: "Empresa legalizada de construtor com equipe completa e mais de 35 anos de experiência profissional.",
  domain: SITE_DOMAIN,
  baseUrl: SITE_URL,
  
  // Contato padronizado oficial definitivo
  phone: "5522920127037",
  phoneFormatted: "(22) 92012-7037",
  whatsappNumber: "5522920127037",
  whatsappFormatted: "(22) 92012-7037",
  email: "redemarketingblog@gmail.com",
  
  address: {
    street: "Base Operacional e Atendimento Regional",
    neighborhood: "Centro",
    city: "São Pedro da Aldeia",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    postalCode: "28940-000",
    country: "BR",
  },

  geo: {
    latitude: -22.8417,
    longitude: -42.1028,
  },

  openingHours: "Segunda a Sexta das 07h às 18h | Sábado das 07h30 às 13h",
  serviceRadiusKm: 60,
};
